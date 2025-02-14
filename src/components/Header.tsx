import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../i18n/translations';
import { ToggleLeft, ToggleRight, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

export function Header() {
  const { currentLanguage, setLanguage } = useLanguage();
  const t = translations[currentLanguage.code];
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: t.nav.home, path: '/' },
    { name: t.nav.about, path: '/about' },
    { name: t.nav.services, path: '/services' },
    { name: t.nav.portfolio, path: '/portfolio' },
    { name: t.nav.contact, path: '/contact' },
    { name: t.nav.blog, path: '/blog' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const isHeroPage = location.pathname === '/';

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled || !isHeroPage ? 'bg-[#111111]/80 backdrop-blur-md rounded-full my-4' : 'bg-transparent'}`}
    style={isScrolled || !isHeroPage ? { placeSelf: 'center', width: 'calc(100% - 2rem)' } : {} }>
      <div className={`container mx-auto flex items-center justify-between px-6 py-4 ${isScrolled || !isHeroPage ? 'shadow-lg' : ''}`}>
        <Link to="/" className="transition-transform -ml-4 max-h-24 max-w-24 duration-300 ease-in-out hover:scale-110">
          <img src="/src/assets/VBSP Branco.svg" alt="VBSP Consulting Logo" className="h-16" />
        </Link>
        
        <nav className="hidden md:flex items-center space-x-8">
          {navigation.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-white/90 transition-all duration-300 ease-in-out hover:text-[#FF6B00] hover:scale-105 ${
                location.pathname === item.path ? 'text-[#FF6B00]' : ''
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center space-x-4">
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

          <button
            className="md:hidden text-white hover:text-[#FF6B00] transition-colors duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 mt-2 bg-[#111111]/95 backdrop-blur-md py-4 px-6 rounded-xl">
          <nav className="flex flex-col space-y-4">
            {navigation.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-white/90 transition-all duration-300 ease-in-out hover:text-[#FF6B00] ${
                  location.pathname === item.path ? 'text-[#FF6B00]' : ''
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}