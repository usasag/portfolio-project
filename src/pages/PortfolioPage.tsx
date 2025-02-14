import { Helmet } from 'react-helmet-async';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../i18n/translations';

export function PortfolioPage() {
  const { currentLanguage } = useLanguage();
  const t = translations[currentLanguage.code];

  return (
    <>
      <Helmet>
        <title>{t.pagetitles.portfolio} - VBSP Consulting</title>
        <meta name="description" content="View our successful projects and client transformations at VBSP Consulting." />
        <link rel="canonical" href="https://vbsp.consulting/portfolio" />
      </Helmet>
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">{t.pagetitles.portfolio}</h1>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Portfolio items will be added here */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="h-48 bg-gray-200"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Coming Soon</h3>
                <p className="text-gray-600">Our portfolio is being updated with our latest projects.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}