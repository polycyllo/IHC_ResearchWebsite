import { useState, useEffect, useRef } from 'react';
import { Search, Clock, Building2, FlaskConical, FileText, ArrowRight } from 'lucide-react';
import { researchCenters, laboratories } from '../data/mockData';

interface SearchBarProps {
  onSearch: (query: string, resultItem?: { id: string; type: 'centro' | 'laboratorio' }) => void;
}

interface Suggestion {
  id: string;
  title: string;
  type: 'centro' | 'laboratorio' | 'investigacion' | 'historial';
  icon: React.ReactNode;
}

function SearchBar({ onSearch }: SearchBarProps) {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState<Suggestion[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [searchHistory, setSearchHistory] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    loadSearchHistory();
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const loadSearchHistory = () => {
    try {
      const stored = localStorage.getItem('searchHistory');
      const history = stored ? JSON.parse(stored) : [];
      setSearchHistory(history.slice(0, 5));
    } catch (error) {
      console.error('Error loading search history:', error);
    }
  };

  const saveSearch = (searchQuery: string) => {
    if (!searchQuery.trim()) return;

    try {
      const stored = localStorage.getItem('searchHistory');
      const history = stored ? JSON.parse(stored) : [];

      const filteredHistory = history.filter((item: string) => item !== searchQuery);
      const updatedHistory = [searchQuery, ...filteredHistory].slice(0, 10);

      localStorage.setItem('searchHistory', JSON.stringify(updatedHistory));
      loadSearchHistory();
    } catch (error) {
      console.error('Error saving search:', error);
    }
  };

  const generateSuggestions = (inputQuery: string): Suggestion[] => {
    if (!inputQuery.trim()) {
      return searchHistory.map(q => ({
        id: `hist-${q}`,
        title: q,
        type: 'historial',
        icon: <Clock className="h-4 w-4 text-gray-400" />
      }));
    }

    const query = inputQuery.toLowerCase();
    const suggestions: Suggestion[] = [];

    researchCenters.forEach(center => {
      if (center.name.toLowerCase().includes(query) || center.description.toLowerCase().includes(query)) {
        suggestions.push({
          id: center.id,
          title: center.name,
          type: 'centro',
          icon: <Building2 className="h-4 w-4 text-blue-600" />
        });
      }
    });

    laboratories.forEach(lab => {
      if (lab.name.toLowerCase().includes(query) || lab.description.toLowerCase().includes(query)) {
        suggestions.push({
          id: lab.id,
          title: lab.name,
          type: 'laboratorio',
          icon: <FlaskConical className="h-4 w-4 text-blue-600" />
        });
      }
    });

    const allPublications = [
      ...researchCenters.flatMap(c => c.publications),
      ...laboratories.flatMap(l => l.publications)
    ];

    allPublications.forEach((pub, index) => {
      if (pub.title.toLowerCase().includes(query) || pub.authors.toLowerCase().includes(query)) {
        suggestions.push({
          id: `pub-${index}`,
          title: pub.title,
          type: 'investigacion',
          icon: <FileText className="h-4 w-4 text-green-600" />
        });
      }
    });

    const queryInHistory = searchHistory.filter(h => h.toLowerCase().includes(query));
    queryInHistory.forEach(h => {
      suggestions.push({
        id: `hist-${h}`,
        title: h,
        type: 'historial',
        icon: <Clock className="h-4 w-4 text-gray-400" />
      });
    });

    return suggestions.slice(0, 8);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    setSuggestions(generateSuggestions(value));
    setShowSuggestions(true);
  };

  const handleSuggestionClick = (suggestion: Suggestion) => {
    setQuery(suggestion.title);
    setShowSuggestions(false);
    saveSearch(suggestion.title);

    if (suggestion.type === 'centro') {
      onSearch(suggestion.title, { id: suggestion.id, type: 'centro' });
    } else if (suggestion.type === 'laboratorio') {
      onSearch(suggestion.title, { id: suggestion.id, type: 'laboratorio' });
    } else {
      onSearch(suggestion.title);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      saveSearch(query);

      const queryLower = query.toLowerCase();
      const matchingCenter = researchCenters.find(c => c.name.toLowerCase() === queryLower);
      const matchingLab = laboratories.find(l => l.name.toLowerCase() === queryLower);

      if (matchingCenter) {
        onSearch(query, { id: matchingCenter.id, type: 'centro' });
      } else if (matchingLab) {
        onSearch(query, { id: matchingLab.id, type: 'laboratorio' });
      } else {
        onSearch(query);
      }

      setShowSuggestions(false);
    }
  };

  return (
    <div className="bg-white border-b border-gray-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div ref={containerRef} className="relative">
          <form onSubmit={handleSubmit}>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={handleInputChange}
                onFocus={() => setShowSuggestions(true)}
                placeholder="Buscar centros, laboratorios o investigaciones..."
                className="block w-full pl-12 pr-14 py-3 text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              />
              <button
                type="submit"
                className="absolute inset-y-0 right-0 pr-4 flex items-center justify-center text-blue-600 hover:text-blue-700 transition-colors"
                title="Buscar"
              >
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </form>

          {showSuggestions && suggestions.length > 0 && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
              <div className="max-h-96 overflow-y-auto">
                {suggestions.map((suggestion, index) => (
                  <button
                    key={index}
                    onClick={() => handleSuggestionClick(suggestion)}
                    className="w-full px-4 py-3 text-left hover:bg-gray-50 border-b border-gray-100 last:border-b-0 flex items-center space-x-3 transition-colors text-sm"
                  >
                    <div className="flex-shrink-0">
                      {suggestion.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-gray-900 font-medium truncate">{suggestion.title}</p>
                      <p className="text-xs text-gray-500">
                        {suggestion.type === 'centro' && 'Centro de Investigación'}
                        {suggestion.type === 'laboratorio' && 'Laboratorio'}
                        {suggestion.type === 'investigacion' && 'Publicación'}
                        {suggestion.type === 'historial' && 'Búsqueda anterior'}
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
