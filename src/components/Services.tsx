import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../i18n/translations';
import { Lightbulb, Palette, Code, Brain, Globe, Mail } from 'lucide-react';

export function Services() {
  const { currentLanguage } = useLanguage();
  const t = translations[currentLanguage.code];

  const services = [
    {
      icon: <Lightbulb className="w-12 h-12 bg-clip-text" />,
      title: t.services.consulting.title,
      description: t.services.consulting.description,
    },
    {
      icon: <Palette className="w-12 h-12 bg-clip-text" />,
      title: t.services.design.title,
      description: t.services.design.description,
    },
    {
      icon: <Code className="w-12 h-12 bg-clip-text" />,
      title: t.services.technology.title,
      description: t.services.technology.description,
    },
    {
      icon: <Brain className="w-12 h-12 bg-clip-text" />,
      title: t.services.ai.title,
      description: t.services.ai.description,
    },
    {
      icon: <Globe className="w-12 h-12 bg-clip-text" />,
      title: t.services.web.title,
      description: t.services.web.description,
    },
    {
      icon: <Mail className="w-12 h-12 bg-clip-text" />,
      title: t.services.email.title,
      description: t.services.email.description,
    },
  ];

  return (
    <section id="services" className="py-20 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-slate-100"></div>
      <div className="container mx-auto px-4 relative">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-clip-text">
          {t.services.title}
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 transform group"
            >
              <div className="mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}