import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useLanguage } from '@/hooks/useLanguage';

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { t, isRtl } = useLanguage();

  return (
    <section id="about" className="py-24 bg-white overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: isRtl ? 50 : -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative">
              {/* Main Image */}
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/images/riad-courtyard.jpg"
                  alt="Riad Courtyard"
                  className="w-full h-[500px] object-cover"
                />
              </div>

              {/* Decorative Frame */}
              <div className="absolute -top-6 -left-6 w-32 h-32 border-l-4 border-t-4 border-amber-600 rounded-tl-3xl" />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 border-r-4 border-b-4 border-amber-600 rounded-br-3xl" />

              {/* Floating Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="absolute -bottom-8 -right-4 lg:right-8 bg-white rounded-2xl shadow-xl p-6"
              >
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-amber-600">200+</span>
                  </div>
                  <div>
                    <p className="font-bold text-slate-900">
                      {isRtl ? 'سنوات' : 'Years'}
                    </p>
                    <p className="text-sm text-slate-600">
                      {isRtl ? 'من التراث' : 'of Heritage'}
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: isRtl ? -50 : 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="text-amber-600 text-sm tracking-[0.3em] uppercase">
              {isRtl ? 'عن الرياض' : 'About Us'}
            </span>
            <h2
              className="text-4xl sm:text-5xl font-bold text-slate-900 mt-4 mb-6"
              style={{ direction: isRtl ? 'rtl' : 'ltr' }}
            >
              {t('about.title')}
            </h2>
            <p className="text-amber-600 font-medium mb-6">
              {t('about.subtitle')}
            </p>

            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p style={{ direction: isRtl ? 'rtl' : 'ltr' }}>
                {t('about.paragraph1')}
              </p>
              <p style={{ direction: isRtl ? 'rtl' : 'ltr' }}>
                {t('about.paragraph2')}
              </p>
              <p style={{ direction: isRtl ? 'rtl' : 'ltr' }}>
                {t('about.paragraph3')}
              </p>
            </div>

            {/* Features */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              {[
                isRtl ? 'عمارة تقليدية' : 'Traditional Architecture',
                isRtl ? 'خدمة مخصصة' : 'Personalized Service',
                isRtl ? 'موقع متميز' : 'Prime Location',
                isRtl ? 'تجربة أصيلة' : 'Authentic Experience',
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="flex items-center gap-2"
                >
                  <div className="w-2 h-2 bg-amber-600 rounded-full" />
                  <span className="text-sm text-slate-700">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
