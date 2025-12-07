import { ChevronRight } from 'lucide-react';

interface BreadcrumbsProps {
  items: string[];
  onNavigate: (view: 'home' | 'centers' | 'labs' | 'detail' | 'research') => void;
}

function Breadcrumbs({ items, onNavigate }: BreadcrumbsProps) {
  const getViewForBreadcrumb = (item: string): 'home' | 'centers' | 'labs' | 'research' => {
    if (item === 'Inicio') return 'home';
    if (item === 'Centros de Investigación') return 'centers';
    if (item === 'Laboratorios') return 'labs';
    if (item === 'Investigaciones Realizadas') return 'research';
    return 'home';
  };

  return (
    <nav className="flex items-center space-x-2 text-sm">
      {items.map((item, index) => (
        <div key={index} className="flex items-center">
          {index > 0 && <ChevronRight className="h-4 w-4 text-gray-400 mx-2" />}
          {index === items.length - 1 ? (
            <span className="text-gray-900 font-medium">{item}</span>
          ) : (
            <button
              onClick={() => {
                const view = getViewForBreadcrumb(item);
                onNavigate(view);
              }}
              className="text-blue-600 hover:text-blue-700 transition-colors"
            >
              {item}
            </button>
          )}
        </div>
      ))}
    </nav>
  );
}

export default Breadcrumbs;
