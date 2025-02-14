import { Helmet } from 'react-helmet-async';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../i18n/translations';

export function AboutPage() {
  const { currentLanguage } = useLanguage();
  const t = translations[currentLanguage.code];

  return (
    <>
      <Helmet>
        <title>{t.pagetitles.about} - VBSP Consulting</title>
        <meta name="description" content="Learn about VBSP Consulting's journey, mission, and commitment to delivering exceptional digital solutions." />
        <link rel="canonical" href="https://vbsp.consulting/about" />
      </Helmet>
      <div className="pt-32 pb-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">{t.about.title}</h1>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
              <p className="text-gray-600 mb-6">{t.about.description}</p>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <h3 className="font-semibold mb-2">Innovation</h3>
                  <p className="text-gray-600">Pushing boundaries in digital solutions</p>
                </div>
                <div className="text-center">
                  <h3 className="font-semibold mb-2">Excellence</h3>
                  <p className="text-gray-600">Delivering exceptional quality</p>
                </div>
                <div className="text-center">
                  <h3 className="font-semibold mb-2">Growth</h3>
                  <p className="text-gray-600">Driving business success</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}