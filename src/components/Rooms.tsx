import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Wifi, Waves, Bath, Coffee, Wind, Car, Sparkles, Sun, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { Button } from '@/components/ui/button';

const amenities = [
  { key: 'wifi', icon: Wifi },
  { key: 'pool', icon: Waves },
  { key: 'hammam', icon: Bath },
  { key: 'breakfast', icon: Coffee },
  { key: 'ac', icon: Wind },
  { key: 'parking', icon: Car },
  { key: 'spa', icon: Sparkles },
  { key: 'rooftop', icon: Sun },
];

const rooms = [
  {
    id: 'royalSuite',
    image: '/images/riad-room-1.jpg',
    features: ['wifi', 'pool', 'hammam', 'breakfast', 'ac', 'spa'],
  },
  {
    id: 'deluxeRoom',
    image: '/images/riad-room-2.jpg',
    features: ['wifi', 'breakfast', 'ac', 'rooftop'],
  },
  {
    id: 'standardRoom',
    image: '/images/riad-room-3.jpg',
    features: ['wifi', 'breakfast', 'ac' , 'hammam'],
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
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export const Rooms = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { t, isRtl } = useLanguage();

  const scrollToBooking = () => {
    const element = document.querySelector('#booking');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="rooms" className="py-24 bg-slate-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-amber-600 text-sm tracking-[0.3em] uppercase">
            {isRtl ? 'الإقامة' : 'Accommodation'}
          </span>
          <h2
            className="text-4xl sm:text-5xl font-bold text-slate-900 mt-4 mb-4"
            style={{ direction: isRtl ? 'rtl' : 'ltr' }}
          >
            {t('rooms.title')}
          </h2>
          <p
            className="text-lg text-slate-600 max-w-2xl mx-auto"
            style={{ direction: isRtl ? 'rtl' : 'ltr' }}
          >
            {t('rooms.subtitle')}
          </p>
        </motion.div>

        {/* Rooms Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {rooms.map((room, index) => (
            <motion.div
              key={room.id}
              variants={itemVariants}
              className="group"
            >
              <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
                {/* Image */}
                <div className="relative h-72 overflow-hidden">
                  <motion.img
                    src={room.image}
                    alt={t(`rooms.${room.id}.name`)}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  {/* Price Badge */}
                  <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                    <div>
                      <p className="text-white/80 text-sm">
                        {t(`rooms.${room.id}.price`)}
                        <span className="text-white/60 text-xs">
                          {t(`rooms.${room.id}.perNight`)}
                        </span>
                      </p>
                    </div>
                  </div>

                  {/* Featured Badge */}
                  {index === 0 && (
                    <div className="absolute top-4 right-4 bg-amber-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                      {isRtl ? 'الأكثر طلباً' : 'Most Popular'}
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3
                    className="text-xl font-bold text-slate-900 mb-2"
                    style={{ direction: isRtl ? 'rtl' : 'ltr' }}
                  >
                    {t(`rooms.${room.id}.name`)}
                  </h3>
                  <p
                    className="text-slate-600 text-sm mb-4 line-clamp-2"
                    style={{ direction: isRtl ? 'rtl' : 'ltr' }}
                  >
                    {t(`rooms.${room.id}.description`)}
                  </p>

                  {/* Amenities */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {room.features.map((featureKey) => {
                      const amenity = amenities.find((a) => a.key === featureKey);
                      if (!amenity) return null;
                      const Icon = amenity.icon;
                      return (
                        <div
                          key={featureKey}
                          className="flex items-center gap-1 bg-slate-100 px-2 py-1 rounded-lg"
                          title={t(`rooms.amenities.${featureKey}`)}
                        >
                          <Icon className="w-3 h-3 text-amber-600" />
                          <span className="text-xs text-slate-600">
                            {t(`rooms.amenities.${featureKey}`)}
                          </span>
                        </div>
                      );
                    })}
                  </div>

                  {/* CTA */}
                  <Button
                    onClick={scrollToBooking}
                    variant="outline"
                    className="w-full group/btn border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white rounded-xl"
                  >
                    {t('rooms.viewDetails')}
                    <ArrowRight
                      className={`w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform ${
                        isRtl ? 'rotate-180' : ''
                      }`}
                    />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
