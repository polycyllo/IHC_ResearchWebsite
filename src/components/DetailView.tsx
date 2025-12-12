import { useState } from 'react';
import { Mail, Phone, MapPin, FileText } from 'lucide-react';
import * as Icons from 'lucide-react';
import type { Center, Lab } from '../types';
//
interface DetailViewProps {
  item: Center | Lab;
}

function DetailView({ item }: DetailViewProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Formulario enviado:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  const getIcon = (iconName: string) => {
    const normalizedName = iconName.charAt(0).toUpperCase() + iconName.slice(1).replace(/-([a-z])/g, (g) => g[1].toUpperCase());
    const IconComponent = Icons[normalizedName as keyof typeof Icons] as React.ComponentType<{ className: string }>;
    return IconComponent ? <IconComponent className="h-16 w-16 text-primary-blue" /> : null;
  };

  return (
    <div className="mt-6">
      <div className="bg-white rounded-lg shadow-sm border border-blue-100 overflow-hidden">
        <div className="bg-blue-300 p-8">
          <div className="flex items-center space-x-6">
            <div className="bg-white p-4 rounded-lg shadow-md">
              {getIcon(item.logo)}
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-950">{item.name}</h1>
              <p className="text-base text-gray-600 mt-2">{item.description}</p>
            </div>
          </div>
        </div>

        <div className="p-8">
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-950 mb-4">Reseña Histórica</h2>
            <p className="text-base text-gray-600 leading-relaxed">{item.history}</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-950 mb-4">Misión</h2>
            <p className="text-base text-gray-600 leading-relaxed">{item.mission}</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-950 mb-4">Información Útil</h2>
            <p className="text-base text-gray-600 leading-relaxed">{item.usefulInfo}</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-950 mb-4">Publicaciones Destacadas</h2>
            <div className="space-y-4">
              {item.publications.map((pub, index) => (
                <div key={index} className="bg-blue-100 p-4 rounded-lg border border-blue-100">
                  <div className="flex items-start space-x-3">
                    <FileText className="h-5 w-5 text-primary-blue mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-base font-bold text-gray-950 mb-1">{pub.title}</h3>
                      <p className="text-sm text-gray-600">{pub.authors}</p>
                      <p className="text-sm text-gray-600 mt-1">
                        {pub.journal} • {pub.year}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-950 mb-6">Contacto</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-primary-blue" />
                  <span className="text-base text-gray-600">{item.contact.phone}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-primary-blue" />
                  <span className="text-base text-gray-600">{item.contact.email}</span>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-primary-blue mt-1" />
                  <span className="text-base text-gray-600">{item.contact.address}</span>
                </div>
              </div>

              <div className="bg-blue-100 p-6 rounded-lg border border-blue-100">
                <h3 className="text-lg font-bold text-gray-950 mb-4">Formulario de Contacto</h3>
                {submitted ? (
                  <div className="bg-success-light border border-success rounded-lg p-4 text-center">
                    <p className="text-base text-success font-medium">¡Mensaje enviado con éxito!</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-950 mb-1">
                        Nombre
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3 py-2 text-sm border border-blue-100 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-950 mb-1">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3 py-2 text-sm border border-blue-100 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-950 mb-1">
                        Asunto
                      </label>
                      <input
                        type="text"
                        id="subject"
                        required
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full px-3 py-2 text-sm border border-blue-100 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-950 mb-1">
                        Mensaje
                      </label>
                      <textarea
                        id="message"
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-3 py-2 text-sm border border-blue-100 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full px-4 py-2 text-sm font-medium text-white bg-primary-blue rounded-lg hover:bg-blue-500 transition-colors"
                    >
                      Enviar mensaje
                    </button>
                  </form>
                )}
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default DetailView;
