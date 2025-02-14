import { Helmet } from 'react-helmet-async';
import { Services } from '../components/Services';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../i18n/translations';

export function ServicesPage() {
  const { currentLanguage } = useLanguage();
  const t = translations[currentLanguage.code];

  return (
    <>
      <Helmet>
        <title>{t.pagetitles.services} - VBSP Consulting</title>
        <meta name="description" content="Explore VBSP Consulting's comprehensive range of digital services including AI automation, web development, and email marketing." />
        <link rel="canonical" href="https://vbsp.consulting/services" />
      </Helmet>
      <div className="pt-32">
        <Services />
      </div>
    </>
  );
}