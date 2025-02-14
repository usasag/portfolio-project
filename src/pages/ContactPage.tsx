import { Helmet } from 'react-helmet-async';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../i18n/translations';
import { Mail, Phone, MapPin } from 'lucide-react';

export function ContactPage() {
  const { currentLanguage } = useLanguage();
  const t = translations[currentLanguage.code];

  return (
    <>
      <Helmet>
        <title>Contact Us - VBSP Consulting</title>
        <meta name="description" content="Get in touch with VBSP Consulting for innovative digital solutions and expert consulting services." />
        <link rel="canonical" href="https://vbsp.consulting/contact" />
      </Helmet>
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">{t.contact.title}</h1>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <MapPin className="w-6 h-6 text-orange-400" />
                    <span>{t.contact.address}</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Mail className="w-6 h-6 text-orange-400" />
                    <a href={`mailto:${t.contact.email}`} className="hover:text-orange-400">
                      {t.contact.email}
                    </a>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Phone className="w-6 h-6 text-orange-400" />
                    <span>{t.contact.phone}</span>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-8">
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                    <input type="text" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-400" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input type="email" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-400" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                    <textarea rows={4} className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-400"></textarea>
                  </div>
                  <button type="submit" className="w-full bg-orange-400 text-white py-2 px-4 rounded-lg hover:bg-orange-500 transition-colors">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}