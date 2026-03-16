import { motion } from 'framer-motion';
import { Facebook, Instagram, Twitter, Youtube, Send } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const quickLinks = [
  { key: 'home', href: '#home' },
  { key: 'rooms', href: '#rooms' },
  { key: 'experiences', href: '#experiences' },
  { key: 'gallery', href: '#gallery' },
  { key: 'about', href: '#about' },
  { key: 'contact', href: '#contact' },
];

const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Youtube, href: '#', label: 'Youtube' },
];

export const Footer = () => {
  const { t, isRtl } = useLanguage();

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-600 to-amber-800 flex items-center justify-center">
                <span className="text-white font-bold text-xl">R</span>
              </div>
              <span className="text-2xl font-bold">Riad Al Andalous</span>
            </div>
            <p
              className="text-slate-400 mb-6 leading-relaxed"
              style={{ direction: isRtl ? 'rtl' : 'ltr' }}
            >
              {isRtl
                ? 'واحة من الهدوء والأناقة في قلب المدينة العتيقة بمراكش. اكتشف سحر الرياض المغربي الأصيل.'
                : 'An oasis of tranquility and elegance in the heart of Marrakech Medina. Discover the charm of authentic Moroccan riad.'}
            </p>
            
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 bg-slate-800 hover:bg-amber-600 rounded-full flex items-center justify-center transition-colors"
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">{t('footer.links')}</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.key}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className="text-slate-400 hover:text-amber-500 transition-colors"
                  >
                    {t(`nav.${link.key}`)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-6">
              {isRtl ? 'اتصل بنا' : 'Contact'}
            </h4>
            <ul className="space-y-3 text-slate-400">
              <li>{t('footer.address')}</li>
              <li>{t('footer.phone')}</li>
              <li>{t('footer.email')}</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-bold mb-6">{t('footer.newsletter')}</h4>
            <p className="text-slate-400 mb-4 text-sm">
              {t('footer.newsletterText')}
            </p>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="email@example.com"
                className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-500 rounded-xl"
              />
              <Button className="bg-amber-600 hover:bg-amber-700 rounded-xl px-4">
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-500 text-sm">
              © {new Date().getFullYear()} Riad Al Andalous. {t('footer.rights')}
            </p>
            <div className="flex gap-6 text-sm text-slate-500">
              <a href="#" className="hover:text-amber-500 transition-colors">
                {isRtl ? 'سياسة الخصوصية' : 'Privacy Policy'}
              </a>
              <a href="#" className="hover:text-amber-500 transition-colors">
                {isRtl ? 'شروط الاستخدام' : 'Terms of Service'}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
