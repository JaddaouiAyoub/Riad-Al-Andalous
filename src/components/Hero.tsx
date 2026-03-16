import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown, Calendar, Bed } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { Button } from '@/components/ui/button';

export const Hero = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { t, isRtl } = useLanguage();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={ref}
      id="home"
      className="relative h-screen w-full overflow-hidden"
    >
      {/* Background Image with Parallax */}
      <motion.div
        style={{ y, scale }}
        className="absolute inset-0 w-full h-full"
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/images/riad-hero.jpg)',
          }}
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
      </motion.div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Top Arch Decoration */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-48"
        >
          <svg viewBox="0 0 400 200" className="w-full h-full opacity-30">
            <path
              d="M0,200 Q200,0 400,200"
              fill="none"
              stroke="url(#arch-gradient)"
              strokeWidth="2"
            />
            <defs>
              <linearGradient id="arch-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#d97706" />
                <stop offset="50%" stopColor="#f59e0b" />
                <stop offset="100%" stopColor="#d97706" />
              </linearGradient>
            </defs>
          </svg>
        </motion.div>

        {/* Corner Decorations */}
        <div className="absolute top-20 left-10 w-24 h-24 border-l-2 border-t-2 border-amber-500/30 rounded-tl-3xl" />
        <div className="absolute top-20 right-10 w-24 h-24 border-r-2 border-t-2 border-amber-500/30 rounded-tr-3xl" />
        <div className="absolute bottom-20 left-10 w-24 h-24 border-l-2 border-b-2 border-amber-500/30 rounded-bl-3xl" />
        <div className="absolute bottom-20 right-10 w-24 h-24 border-r-2 border-b-2 border-amber-500/30 rounded-br-3xl" />
      </div>

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 h-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8"
      >
        <div className="text-center max-w-4xl mx-auto">
          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-amber-400 text-sm sm:text-base tracking-[0.3em] uppercase mb-6"
          >
            Riad Al Andalous
          </motion.p>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
            style={{ direction: isRtl ? 'rtl' : 'ltr' }}
          >
            {t('hero.title')}
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="text-lg sm:text-xl text-white/80 mb-10 max-w-2xl mx-auto"
            style={{ direction: isRtl ? 'rtl' : 'ltr' }}
          >
            {t('hero.subtitle')}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              onClick={() => scrollToSection('#booking')}
              size="lg"
              className="bg-amber-600 hover:bg-amber-700 text-white rounded-full px-8 py-6 text-lg group"
            >
              <Calendar className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              {t('hero.bookButton')}
            </Button>
            <Button
              onClick={() => scrollToSection('#rooms')}
              size="lg"
              variant="outline"
              className="bg-orange-400 hover:bg-orange-500 text-white border-2 border-white/50 rounded-full px-8 py-6 text-lg backdrop-blur-sm"
            >
              <Bed className="w-5 h-5 mr-2" />
              {t('hero.roomsButton')}
            </Button>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="flex flex-col items-center text-white/60 cursor-pointer"
            onClick={() => scrollToSection('#rooms')}
          >
            <span className="text-xs tracking-widest uppercase mb-2">
              {isRtl ? 'استكشف' : 'Explore'}
            </span>
            <ChevronDown className="w-6 h-6" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};
