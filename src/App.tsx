import { useState } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import Breadcrumbs from './components/Breadcrumbs';
import GridListing from './components/GridListing';
import DetailView from './components/DetailView';
import ResearchView from './components/ResearchView';
import { researchCenters, laboratories } from './data/mockData';
import type { Center, Lab } from './types';

type View = 'home' | 'centers' | 'labs' | 'detail' | 'research';

function App() {
  const [currentView, setCurrentView] = useState<View>('home');
  const [selectedItem, setSelectedItem] = useState<Center | Lab | null>(null);
  const [breadcrumbs, setBreadcrumbs] = useState<string[]>(['Inicio']);

  const handleNavigate = (view: View, item?: Center | Lab) => {
    setCurrentView(view);
    if (item) {
      setSelectedItem(item);
      const isCenter = researchCenters.some(c => c.id === item.id);
      if (isCenter) {
        setBreadcrumbs(['Inicio', 'Centros de Investigación', item.name]);
      } else {
        setBreadcrumbs(['Inicio', 'Laboratorios', item.name]);
      }
    } else {
      setSelectedItem(null);
      if (view === 'centers') {
        setBreadcrumbs(['Inicio', 'Centros de Investigación']);
      } else if (view === 'labs') {
        setBreadcrumbs(['Inicio', 'Laboratorios']);
      } else if (view === 'research') {
        setBreadcrumbs(['Inicio', 'Investigaciones Realizadas']);
      } else {
        setBreadcrumbs(['Inicio']);
      }
    }
  };

  const handleSearch = (query: string, resultItem?: { id: string; type: 'centro' | 'laboratorio' }) => {
    console.log('Búsqueda:', query, resultItem);

    if (resultItem?.type === 'centro') {
      const center = researchCenters.find(c => c.id === resultItem.id);
      if (center) {
        handleNavigate('detail', center);
      }
    } else if (resultItem?.type === 'laboratorio') {
      const lab = laboratories.find(l => l.id === resultItem.id);
      if (lab) {
        handleNavigate('detail', lab);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header onNavigate={handleNavigate} />
      <SearchBar onSearch={handleSearch} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <Breadcrumbs items={breadcrumbs} onNavigate={handleNavigate} />

        {currentView === 'home' && (
          <div className="mt-12 text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Portal de Investigación Universitaria</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Descubra nuestros centros de investigación, laboratorios y las investigaciones más recientes de nuestra comunidad académica.
            </p>
          </div>
        )}

        {currentView === 'centers' && (
          <GridListing
            items={researchCenters}
            title="Centros de Investigación"
            onSelectItem={(item) => handleNavigate('detail', item)}
          />
        )}

        {currentView === 'labs' && (
          <GridListing
            items={laboratories}
            title="Laboratorios"
            onSelectItem={(item) => handleNavigate('detail', item)}
          />
        )}

        {currentView === 'detail' && selectedItem && (
          <DetailView item={selectedItem} />
        )}

        {currentView === 'research' && (
          <ResearchView centers={researchCenters} labs={laboratories} />
        )}
      </div>
    </div>
  );
}

export default App;
