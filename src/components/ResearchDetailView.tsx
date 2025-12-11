import { FileText, Building2, FlaskConical, CalendarDays, Users, BookOpen, Download } from 'lucide-react';
import type { ResearchPublicationDetail } from '../types';
import { downloadPublicationPlaceholder } from '../utils/downloadPublication';

interface ResearchDetailViewProps {
  publication: ResearchPublicationDetail;
}

function ResearchDetailView({ publication }: ResearchDetailViewProps) {
  const isCenter = publication.sourceType === 'Centro';

  return (
    <div className="mt-6">
      <div className="bg-white border border-blue-100 rounded-lg shadow-sm overflow-hidden">
        <div className="border-b border-blue-100 bg-blue-50 p-6 md:p-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
            <div className="flex items-start gap-4">
              <div className="rounded-lg bg-white p-4 shadow-md">
                <FileText className="h-8 w-8 text-primary-blue" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-950 leading-tight">{publication.title}</h1>
                <p className="mt-3 text-sm font-medium text-primary-blue flex items-center gap-2">
                  {isCenter ? <Building2 className="h-4 w-4" /> : <FlaskConical className="h-4 w-4" />}
                  {publication.sourceType} · {publication.sourceName}
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-3 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <CalendarDays className="h-4 w-4 text-primary-blue" />
                {publication.year}
              </div>
              <div className="flex items-center gap-2">
                <BookOpen className="h-4 w-4 text-primary-blue" />
                {publication.journal}
              </div>
            </div>
          </div>
        </div>

        <div className="p-6 md:p-8 space-y-8">
          <section>
            <h2 className="text-xl font-bold text-gray-950 mb-3">Autores</h2>
            <p className="flex items-center gap-2 text-base text-gray-600">
              <Users className="h-4 w-4 text-primary-blue" />
              {publication.authors}
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-950 mb-3">Resumen</h2>
            <p className="text-base text-gray-600 leading-relaxed">{publication.abstract}</p>
          </section>

          <div className="pt-4">
            <button
              type="button"
              onClick={() => downloadPublicationPlaceholder(publication.title)}
              className="inline-flex items-center gap-2 rounded-lg bg-primary-blue px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-blue-500"
            >
              <Download className="h-4 w-4" />
              Ver publicación
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResearchDetailView;
