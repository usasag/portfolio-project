import { Link, useLocation } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../i18n/translations';

export function Breadcrumb() {
  const location = useLocation();
  const { currentLanguage } = useLanguage();
  const t = translations[currentLanguage.code];

  const pathSegments = location.pathname.split('/').filter(Boolean);
  
  return (
    <nav className="container mx-auto px-4 py-4 flex items-center text-sm text-gray-600">
      <Link to="/" className="hover:text-[#FF6B00] transition-colors duration-300">
        {t.nav.home}
      </Link>
      
      {pathSegments.map((segment, index) => (
        <div key={segment} className="flex items-center">
          <ChevronRight size={16} className="mx-2" />
          <Link
            to={`/${pathSegments.slice(0, index + 1).join('/')}`}
            className={`capitalize hover:text-[#FF6B00] transition-colors duration-300 ${
              index === pathSegments.length - 1 ? 'text-[#FF6B00]' : ''
            }`}
          >
            {t.nav[segment.toLowerCase()] || segment}
          </Link>
        </div>
      ))}
    </nav>
  );
}