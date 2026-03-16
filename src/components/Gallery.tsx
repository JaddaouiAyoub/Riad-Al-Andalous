import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';

const galleryImages = [
  {
    src: '/images/riad-courtyard.jpg',
    alt: 'Courtyard',
    span: 'col-span-2 row-span-2',
  },
  {
    src: '/images/riad-pool.jpg',
    alt: 'Pool',
    span: 'col-span-1 row-span-1',
  },
  {
    src: '/images/riad-rooftop.jpg',
    alt: 'Rooftop',
    span: 'col-span-1 row-span-1',
  },
  {
    src: '/images/moroccan-breakfast.jpg',
    alt: 'Breakfast',
    span: 'col-span-1 row-span-2',
  },
  {
    src: '/images/riad-room-1.jpg',
    alt: 'Room',
    span: 'col-span-1 row-span-1',
  },
  {
    src: '/images/riad-detail.jpg',
    alt: 'Detail',
    span: 'col-span-1 row-span-1',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export const Gallery = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { t, isRtl } = useLanguage();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="gallery" className="py-24 bg-slate-900" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-amber-500 text-sm tracking-[0.3em] uppercase">
            {isRtl ? 'المعرض' : 'Gallery'}
          </span>
          <h2
            className="text-4xl sm:text-5xl font-bold text-white mt-4 mb-4"
            style={{ direction: isRtl ? 'rtl' : 'ltr' }}
          >
            {t('gallery.title')}
          </h2>
          <p
            className="text-lg text-slate-400 max-w-2xl mx-auto"
            style={{ direction: isRtl ? 'rtl' : 'ltr' }}
          >
            {t('gallery.subtitle')}
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]"
        >
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`group relative overflow-hidden rounded-2xl cursor-pointer ${image.span}`}
              onClick={() => setSelectedImage(image.src)}
            >
              <motion.img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.7 }}
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-500 flex items-center justify-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileHover={{ opacity: 1, scale: 1 }}
                  className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <ZoomIn className="w-6 h-6 text-white" />
                </motion.div>
              </div>

              {/* Decorative Corner */}
              <div className="absolute top-3 left-3 w-8 h-8 border-l-2 border-t-2 border-white/0 group-hover:border-white/50 transition-all duration-500 rounded-tl-lg" />
              <div className="absolute bottom-3 right-3 w-8 h-8 border-r-2 border-b-2 border-white/0 group-hover:border-white/50 transition-all duration-500 rounded-br-lg" />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute top-6 right-6 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-6 h-6 text-white" />
            </motion.button>

            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              src={selectedImage}
              alt="Gallery"
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
