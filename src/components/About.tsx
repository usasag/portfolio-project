import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../i18n/translations';

export function About() {
  const { currentLanguage } = useLanguage();
  const t = translations[currentLanguage.code];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">{t.about.title}</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            {t.about.description}
          </p>
        </div>
      </div>
    </section>
  );
}