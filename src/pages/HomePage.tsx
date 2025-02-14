import { Helmet } from 'react-helmet-async';
import { Hero } from '../components/Hero';
import { Services } from '../components/Services';
import { About } from '../components/About';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../i18n/translations';

export function HomePage() {
  const { currentLanguage } = useLanguage();
  const t = translations[currentLanguage.code];

  return (
    <>
      <Helmet>
        <title>{t.pagetitles.home} - VBSP Consulting</title>
        <meta name="description" content="Transform your business with VBSP Consulting's innovative solutions in lead generation, design, and technology." />
        <link rel="canonical" href="https://vbsp.consulting" />
      </Helmet>
      <Hero />
      <Services />
      <About />
    </>
  );
}