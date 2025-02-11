import React, { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../i18n/translations';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  const { currentLanguage } = useLanguage();
  const t = translations[currentLanguage.code];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80', // Modern development
    'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80', // AI/Code
    'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&q=80', // Web Design
    'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80', // Analytics
    'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80', // UI/UX
    'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80'  // Team collaboration
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm z-20"></div>
        <div className="relative h-full w-full">
          {images.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === currentImageIndex ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={image}
                alt="Hero background"
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 z-10 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 transition-transform duration-300 ease-in-out hover:scale-105">
          {t.hero.title}
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto transition-all duration-300 ease-in-out hover:text-white">
          {t.hero.subtitle}
        </p>
        <button className="inline-flex items-center space-x-2 bg-[#FF8806] text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 ease-in-out hover:bg-[#FF6B00] hover:scale-105 hover:shadow-glow">
          <span>{t.hero.cta}</span>
          <ArrowRight size={20} className="transition-transform duration-300 ease-in-out group-hover:translate-x-1" />
        </button>
      </div>
    </div>
  );
}