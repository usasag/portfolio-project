import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../i18n/translations';
import { ToggleLeft, ToggleRight } from 'lucide-react';

export function Header() {
  const { currentLanguage, setLanguage } = useLanguage();
  const t = translations[currentLanguage.code];

  return (
    <header className="fixed w-full z-50">
      <div className="mx-4 my-4">
        <div className="bg-[#111111]/80 backdrop-blur-md rounded-full px-6 py-4">
          <div className="container mx-auto flex items-center justify-between">
            <div className="text-2xl font-bold text-white transition-transform duration-300 ease-in-out hover:scale-105">VBSP</div>
            
            <nav className="hidden md:flex items-center space-x-8">
              {['services', 'portfolio', 'about', 'contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item}`}
                  className="text-white/90 transition-all duration-300 ease-in-out hover:text-[#FF6B00] hover:scale-105"
                >
                  {t.nav[item]}
                </a>
              ))}
            </nav>

            <button
              onClick={() => setLanguage(currentLanguage.code === 'en' ? { code: 'pt', label: 'Português' } : { code: 'en', label: 'English' })}
              className="flex items-center space-x-2 px-4 py-2 rounded-full bg-white/10 text-white transition-all duration-300 ease-in-out hover:bg-white/20 hover:scale-105 hover:shadow-glow"
            >
              {currentLanguage.code === 'en' ? (
                <ToggleLeft size={24} className="transition-transform duration-300 ease-in-out" />
              ) : (
                <ToggleRight size={24} className="transition-transform duration-300 ease-in-out" />
              )}
              <span className="font-semibold">{currentLanguage.code === 'en' ? 'PT' : 'EN'}</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}