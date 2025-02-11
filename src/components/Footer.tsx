import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../i18n/translations';
import { Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  const { currentLanguage } = useLanguage();
  const t = translations[currentLanguage.code];

  return (
    <footer id="contact" className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-[#FF8806] mb-4">VBSP</h3>
            <p className="text-gray-400 max-w-xs">
              {t.about.description}
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">{t.contact.title}</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin size={20} className="text-[#FF8806]" />
                <span>{t.contact.address}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={20} className="text-[#FF8806]" />
                <a href={`mailto:${t.contact.email}`} className="hover:text-[#FF8806]">
                  {t.contact.email}
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={20} className="text-[#FF8806]" />
                <span>{t.contact.phone}</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Links</h4>
            <nav className="space-y-2">
              <a href="#services" className="block hover:text-[#FF8806]">{t.nav.services}</a>
              <a href="#portfolio" className="block hover:text-[#FF8806]">{t.nav.portfolio}</a>
              <a href="#about" className="block hover:text-[#FF8806]">{t.nav.about}</a>
              <a href="#contact" className="block hover:text-[#FF8806]">{t.nav.contact}</a>
            </nav>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} VBSP Consultoria. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}