import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';

const testimonials = [
  {
    id: 'guest1',
    image: '/images/guest-1.jpg',
    rating: 5,
  },
  {
    id: 'guest2',
    image: '/images/guest-2.jpg',
    rating: 5,
  },
  {
    id: 'guest3',
    image: '/images/guest-3.jpg',
    rating: 5,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { t, isRtl } = useLanguage();

  return (
    <section id="testimonials" className="py-24 bg-amber-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-amber-600 text-sm tracking-[0.3em] uppercase">
            {isRtl ? 'آراء الضيوف' : 'Reviews'}
          </span>
          <h2
            className="text-4xl sm:text-5xl font-bold text-slate-900 mt-4 mb-4"
            style={{ direction: isRtl ? 'rtl' : 'ltr' }}
          >
            {t('testimonials.title')}
          </h2>
          <p
            className="text-lg text-slate-600 max-w-2xl mx-auto"
            style={{ direction: isRtl ? 'rtl' : 'ltr' }}
          >
            {t('testimonials.subtitle')}
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              variants={itemVariants}
              className="group"
            >
              <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 h-full flex flex-col">
                {/* Quote Icon */}
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-amber-600 transition-colors duration-300">
                  <Quote className="w-5 h-5 text-amber-600 group-hover:text-white transition-colors duration-300" />
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>

                {/* Text */}
                <p
                  className="text-slate-700 mb-6 flex-grow leading-relaxed"
                  style={{ direction: isRtl ? 'rtl' : 'ltr' }}
                >
                  "{t(`testimonials.${testimonial.id}.text`)}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4 pt-6 border-t border-slate-100">
                  <div className="w-14 h-14 rounded-full overflow-hidden ring-2 ring-amber-200">
                    <img
                      src={testimonial.image}
                      alt={t(`testimonials.${testimonial.id}.name`)}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">
                      {t(`testimonials.${testimonial.id}.name`)}
                    </h4>
                    <p className="text-sm text-slate-500">
                      {t(`testimonials.${testimonial.id}.country`)}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-16 flex flex-wrap justify-center items-center gap-8"
        >
          <div className="text-center">
            <p className="text-4xl font-bold text-amber-600">4.9</p>
            <p className="text-sm text-slate-600">{isRtl ? 'تقييم' : 'Rating'}</p>
          </div>
          <div className="w-px h-12 bg-slate-200" />
          <div className="text-center">
            <p className="text-4xl font-bold text-amber-600">500+</p>
            <p className="text-sm text-slate-600">{isRtl ? 'تقييم' : 'Reviews'}</p>
          </div>
          <div className="w-px h-12 bg-slate-200" />
          <div className="text-center">
            <p className="text-4xl font-bold text-amber-600">98%</p>
            <p className="text-sm text-slate-600">{isRtl ? 'يوصي' : 'Recommend'}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
