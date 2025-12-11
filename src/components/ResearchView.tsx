import { useEffect, useMemo, useState } from 'react';
import { FileText, Building2, FlaskConical, Eye, ChevronLeft, ChevronRight } from 'lucide-react';
import type { Center, Lab, ResearchPublicationDetail } from '../types';

interface ResearchViewProps {
  centers: Center[];
  labs: Lab[];
  onViewPublication: (publication: ResearchPublicationDetail) => void;
}

const PAGE_SIZE = 12;

function ResearchView({ centers, labs, onViewPublication }: ResearchViewProps) {
  const publications = useMemo<ResearchPublicationDetail[]>(
    () => [
      ...centers.flatMap(center =>
        center.publications.map(publication => ({
          ...publication,
          sourceId: center.id,
          sourceName: center.name,
          sourceType: 'Centro' as const
        }))
      ),
      ...labs.flatMap(lab =>
        lab.publications.map(publication => ({
          ...publication,
          sourceId: lab.id,
          sourceName: lab.name,
          sourceType: 'Laboratorio' as const
        }))
      )
    ].sort((a, b) => b.year - a.year),
    [centers, labs]
  );

  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.max(1, Math.ceil(publications.length / PAGE_SIZE));

  useEffect(() => {
    setCurrentPage(prev => Math.min(prev, totalPages));
  }, [totalPages]);

  const startIndex = (currentPage - 1) * PAGE_SIZE;
  const currentPublications = publications.slice(startIndex, startIndex + PAGE_SIZE);
  const showingFrom = publications.length === 0 ? 0 : startIndex + 1;
  const showingTo = Math.min(startIndex + currentPublications.length, publications.length);

  const handlePrevious = () => {
    setCurrentPage(prev => Math.max(1, prev - 1));
  };

  const handleNext = () => {
    setCurrentPage(prev => Math.min(totalPages, prev + 1));
  };

  const handlePageClick = (page: number) => {
    setCurrentPage(page);
  };

  const renderPageNumbers = () => {
    const pages = [];
    const windowSize = 5;
    let startPage = Math.max(1, currentPage - Math.floor(windowSize / 2));
    let endPage = startPage + windowSize - 1;

    if (endPage > totalPages) {
      endPage = totalPages;
      startPage = Math.max(1, endPage - windowSize + 1);
    }

    for (let page = startPage; page <= endPage; page += 1) {
      pages.push(
        <button
          key={page}
          type="button"
          onClick={() => handlePageClick(page)}
          className={`h-10 w-10 rounded-lg border text-sm font-medium transition-colors ${
            page === currentPage
              ? 'border-blue-300 bg-blue-300 text-gray-950'
              : 'border-blue-100 text-gray-600 hover:bg-blue-100'
          }`}
          aria-current={page === currentPage ? 'page' : undefined}
        >
          {page}
        </button>
      );
    }

    return pages;
  };

  return (
    <div className="mt-6">
      <h1 className="text-3xl font-bold text-gray-950 mb-6">Investigaciones Realizadas</h1>
      <p className="text-base text-gray-600 mb-8">
        Explore las publicaciones más recientes de nuestros centros de investigación y laboratorios.
      </p>

      {currentPublications.length === 0 ? (
        <div className="bg-white border border-blue-100 rounded-lg p-8 text-center text-gray-600">
          No se encontraron investigaciones.
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {currentPublications.map((pub, index) => (
              <div
                key={`${pub.sourceId}-${pub.title}-${pub.year}-${index}`}
                className="bg-white border border-blue-100 rounded-lg p-6 hover:shadow-md transition-shadow flex flex-col"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 mt-1">
                    <FileText className="h-6 w-6 text-primary-blue" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-950 mb-2">{pub.title}</h3>
                    <p className="text-sm text-gray-600 mb-2">{pub.authors}</p>
                    <div className="flex items-center space-x-4 text-sm text-gray-600">
                      <span className="font-medium">{pub.journal}</span>
                      <span>•</span>
                      <span>{pub.year}</span>
                    </div>
                    <div className="flex items-center space-x-2 mt-3">
                      {pub.sourceType === 'Centro' ? (
                        <Building2 className="h-4 w-4 text-gray-600" />
                      ) : (
                        <FlaskConical className="h-4 w-4 text-gray-600" />
                      )}
                      <span className="text-sm text-gray-600">{pub.sourceName}</span>
                      <span className="text-xs text-gray-600 bg-blue-100 px-2 py-1 rounded">
                        {pub.sourceType}
                      </span>
                    </div>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => onViewPublication(pub)}
                  className="mt-6 inline-flex items-center justify-center gap-2 rounded-lg bg-primary-blue px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-500"
                  aria-label={`Ver investigación ${pub.title}`}
                >
                  <Eye className="h-4 w-4" />
                  Ver investigación
                </button>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-col items-center gap-4">
            <p className="text-sm text-gray-600 text-center">
              Mostrando {showingFrom}-{showingTo} de {publications.length} investigaciones
            </p>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handlePrevious}
                disabled={currentPage === 1}
                className="flex h-11 w-11 items-center justify-center rounded-lg border border-gray-300 text-gray-950 transition-colors hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-50"
                aria-label="Página anterior"
              >
                <ChevronLeft className="h-5 w-5" strokeWidth={2.5} />
              </button>
              {renderPageNumbers()}
              <button
                type="button"
                onClick={handleNext}
                disabled={currentPage === totalPages}
                className="flex h-11 w-11 items-center justify-center rounded-lg border border-gray-300 text-gray-950 transition-colors hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-50"
                aria-label="Página siguiente"
              >
                <ChevronRight className="h-5 w-5" strokeWidth={2.5} />
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default ResearchView;
