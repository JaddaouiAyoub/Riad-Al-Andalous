import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { Button } from '@/components/ui/button';

const navItems = [
  { key: 'home', href: '#home' },
  { key: 'rooms', href: '#rooms' },
  { key: 'experiences', href: '#experiences' },
  { key: 'blog', href: '#blog' },
  { key: 'gallery', href: '#gallery' },
  { key: 'testimonials', href: '#testimonials' },
  { key: 'about', href: '#about' },
  { key: 'contact', href: '#contact' },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t, currentLanguage, changeLanguage, languages, isRtl } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-24"> {/* ↑ plus de hauteur */}
            {/* Logo */}
            <motion.a
              href="#home"
              onClick={(e) => { e.preventDefault(); scrollToSection('#home'); }}
              className="flex items-center gap-4" /* ↑ plus d’espace entre icône et texte */
              whileHover={{ scale: 1.02 }}
            >
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-600 to-amber-800 flex items-center justify-center">
                <span className="text-white font-bold text-xl">R</span>
              </div>
              <span className={`text-2xl font-bold ${isScrolled ? 'text-slate-900' : 'text-white'}`}>
                Riad Al Andalous
              </span>
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-10"> {/* ↑ plus de gap entre liens */}
              {navItems.map((item) => (
                <motion.a
                  key={item.key}
                  href={item.href}
                  onClick={(e) => { e.preventDefault(); scrollToSection(item.href); }}
                  className={`text-sm font-medium transition-colors hover:text-amber-600 ${isScrolled ? 'text-slate-700' : 'text-white/90'
                    }`}
                  whileHover={{ y: -2 }}
                >
                  {t(`nav.${item.key}`)}
                </motion.a>
              ))}
            </div>

            {/* Right Section */}
            <div className="flex items-center gap-6"> {/* ↑ plus d’espace */}
              {/* Language Selector */}
              <div className="hidden sm:flex items-center gap-2 bg-black/10 rounded-full p-2">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => changeLanguage(lang.code)}
                    className={`px-4 py-1 rounded-full text-sm font-medium transition-all ${currentLanguage === lang.code
                        ? 'bg-amber-600 text-white'
                        : isScrolled
                          ? 'text-slate-700 hover:bg-black/5'
                          : 'text-white/80 hover:bg-white/10'
                      }`}
                  >
                    {lang.label}
                  </button>
                ))}
              </div>

              {/* Book Button */}
              <Button
                onClick={() => scrollToSection('#booking')}
                className="hidden md:flex bg-amber-600 hover:bg-amber-700 text-white rounded-full px-8 py-3"
              >
                {t('nav.bookNow')}
              </Button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`lg:hidden p-2 rounded-lg ${isScrolled ? 'text-slate-900 hover:bg-slate-100' : 'text-white hover:bg-white/10'
                  }`}
              >
                {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>
      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: isRtl ? 300 : -300 }}
              animate={{ x: 0 }}
              exit={{ x: isRtl ? 300 : -300 }}
              className={`absolute top-20 ${isRtl ? 'right-0' : 'left-0'
                } w-full max-w-sm bg-white shadow-2xl rounded-b-2xl overflow-hidden`}
            >
              <div className="p-6 space-y-4">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.key}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(item.href);
                    }}
                    initial={{ opacity: 0, x: isRtl ? 20 : -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="block py-3 px-4 text-slate-700 hover:text-amber-600 hover:bg-amber-50 rounded-lg transition-colors"
                  >
                    {t(`nav.${item.key}`)}
                  </motion.a>
                ))}

                {/* Mobile Language Selector */}
                <div className="pt-4 border-t border-slate-100">
                  <p className="text-sm text-slate-500 mb-3 px-4">
                    {isRtl ? 'اختر اللغة' : 'Select Language'}
                  </p>
                  <div className="flex gap-2 px-4">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => changeLanguage(lang.code)}
                        className={`flex-1 py-2 px-3 rounded-lg text-sm font-medium transition-all ${currentLanguage === lang.code
                            ? 'bg-amber-600 text-white'
                            : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                          }`}
                      >
                        {lang.flag} {lang.label}
                      </button>
                    ))}
                  </div>
                </div>

                <Button
                  onClick={() => scrollToSection('#booking')}
                  className="w-full bg-amber-600 hover:bg-amber-700 text-white rounded-xl py-6 mt-4"
                >
                  {t('nav.bookNow')}
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
