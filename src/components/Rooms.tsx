import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Wifi, Waves, Bath, Coffee, Wind, Car, Sparkles, Sun, ArrowRight, Star, Users, Square } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { Badge } from './ui/badge';

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
    size: '85 m²',
    capacity: '4 personnes',
    beds: 'Lit King + canapé-lit',
    view: 'Patio privé et jardin',
    details: `
      <h3>La Suite Royale : Un Luxe Exceptionnel</h3>
      <p>Notre suite la plus prestigieuse offre un espace de 85m² avec un patio privé donnant sur notre jardin andalou. Cette chambre d'exception combine l'authenticité marocaine avec le confort moderne absolu.</p>
      
      <h4>Espace et Confort</h4>
      <p>La suite dispose d'un grand salon séparé, d'une chambre spacieuse avec lit king-size, et d'une salle de bain en marbre avec baignoire balnéo. Le patio privé crée un espace intime pour se détendre.</p>
      
      <h4>Services Exclusifs</h4>
      <p>Profitez d'un service de majordome personnalisé, de petits-déjeuners servis dans votre patio, et d'un accès privilégié à notre spa privé. Cette suite est parfaite pour les lunes de miel ou les occasions spéciales.</p>
      
      <h4>Authenticité Préservée</h4>
      <p>Chaque détail architectural raconte l'histoire de notre riad : zelliges anciens, moucharabiehs ouvragés, et lanternes en fer forgé. Ici, le luxe se marie parfaitement avec la tradition.</p>
    `,
    gallery: [
      'https://images.unsplash.com/photo-1584132915807-fd1f5fbc078f?w=800&auto=format&fit=crop',
      'https://plus.unsplash.com/premium_photo-1679430887921-31e1047e5b55?w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=800&auto=format&fit=crop'
    ]
  },
  {
    id: 'deluxeRoom',
    image: '/images/riad-room-2.jpg',
    features: ['wifi', 'breakfast', 'ac', 'rooftop'],
    size: '45 m²',
    capacity: '2-3 personnes',
    beds: 'Lit Queen + canapé',
    view: 'Patio central',
    details: `
      <h3>Chambre Deluxe : Élégance et Confort</h3>
      <p>Cette chambre spacieuse de 45m² offre une vue imprenable sur notre patio central fleuri. L'équilibre parfait entre tradition marocaine et confort moderne.</p>
      
      <h4>Ambiance Chaleureuse</h4>
      <p>Les murs ornés de zelliges anciens et les tissus brodés créent une atmosphère intime et raffinée. Le lit queen-size avec literie de qualité supérieure assure un sommeil réparateur.</p>
      
      <h4>Espace Optimisé</h4>
      <p>La chambre dispose d'un coin salon confortable, d'une salle de bain moderne avec douche à l'italienne, et d'un accès direct au rooftop pour admirer les étoiles.</p>
      
      <h4>Services Inclus</h4>
      <p>Profitez du petit-déjeuner marocain traditionnel, de l'accès WiFi haut débit, et de la climatisation pour un séjour confortable en toute saison.</p>
    `,
    gallery: [
      'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1560932992-a93e9ca8a0c9?w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=800&auto=format&fit=crop'
    ]
  },
  {
    id: 'standardRoom',
    image: '/images/riad-room-3.jpg',
    features: ['wifi', 'breakfast', 'ac' , 'hammam'],
    size: '32 m²',
    capacity: '2 personnes',
    beds: 'Lit Double',
    view: 'Cour intérieure',
    details: `
      <h3>Chambre Standard : Authentique et Confortable</h3>
      <p>Notre chambre standard de 32m² offre l'essentiel du confort dans un cadre authentique. Parfaite pour les voyageurs soucieux de découvrir l'âme d'un riad traditionnel.</p>
      
      <h4>Authenticité Préservée</h4>
      <p>Les arcs en brique rouge, les plafonds peints à la main et les lanternes traditionnelles créent une ambiance chaleureuse et typiquement marocaine.</p>
      
      <h4>Confort Moderne</h4>
      <p>Le lit double confortable, la salle de bain privative avec douche, et la climatisation assurent un séjour agréable. L'accès au hammam traditionnel est un plus appréciable.</p>
      
      <h4>Économique et Chaleureux</h4>
      <p>Cette chambre offre un excellent rapport qualité-prix pour profiter pleinement de l'expérience riad à Marrakech sans superflu.</p>
    `,
    gallery: [
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=800&auto=format&fit=crop'
    ]
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
  const [selectedRoom, setSelectedRoom] = useState<string | null>(null);

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
                    onClick={() => setSelectedRoom(room.id)}
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

        {/* Room Details Dialog */}
        <Dialog open={!!selectedRoom} onOpenChange={() => setSelectedRoom(null)}>
          <DialogContent className="w-[60vw] !max-w-none max-h-[95vh] overflow-y-auto">
            {selectedRoom && (() => {
              const room = rooms.find(r => r.id === selectedRoom);
              if (!room) return null;

              return (
                <>
                  <DialogHeader className="pb-4">
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary" className="bg-amber-100 text-amber-800">
                        {t(`rooms.${room.id}.name`)}
                      </Badge>
                      <div className="text-right">
                        <p className="text-2xl font-bold text-amber-600">
                          {t(`rooms.${room.id}.price`)}
                          <span className="text-sm text-gray-500 font-normal">
                            {t(`rooms.${room.id}.perNight`)}
                          </span>
                        </p>
                      </div>
                    </div>
                    <DialogTitle className="text-3xl font-bold leading-tight">
                      {t(`rooms.${room.id}.name`)}
                    </DialogTitle>
                  </DialogHeader>

                  {/* Main Image */}
                  <div className="relative mb-6">
                    <img
                      src={room.image}
                      alt={t(`rooms.${room.id}.name`)}
                      className="w-full h-64 md:h-80 object-cover rounded-lg"
                    />
                    <div className="absolute top-4 right-4 bg-amber-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {room.size}
                    </div>
                  </div>

                  {/* Room Info Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <div className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg">
                      <Users className="w-5 h-5 text-amber-600" />
                      <div>
                        <p className="text-sm text-gray-600">Capacité</p>
                        <p className="font-medium">{room.capacity}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg">
                      <Square className="w-5 h-5 text-amber-600" />
                      <div>
                        <p className="text-sm text-gray-600">Superficie</p>
                        <p className="font-medium">{room.size}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg">
                      <Star className="w-5 h-5 text-amber-600" />
                      <div>
                        <p className="text-sm text-gray-600">Lits</p>
                        <p className="font-medium">{room.beds}</p>
                      </div>
                    </div>
                  </div>

                  {/* Amenities */}
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold mb-3">Équipements et Services</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      {room.features.map((featureKey) => {
                        const amenity = amenities.find((a) => a.key === featureKey);
                        if (!amenity) return null;
                        const Icon = amenity.icon;
                        return (
                          <div
                            key={featureKey}
                            className="flex items-center gap-2 p-3 bg-amber-50 rounded-lg"
                          >
                            <Icon className="w-5 h-5 text-amber-600" />
                            <span className="text-sm font-medium">
                              {t(`rooms.amenities.${featureKey}`)}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Room Details */}
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold mb-3">Description Détaillée</h3>
                    <div
                      className="prose prose-lg max-w-none"
                      dangerouslySetInnerHTML={{ __html: room.details }}
                    />
                  </div>

                  {/* Gallery Preview */}
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold mb-3">Galerie Photos</h3>
                    <div className="grid grid-cols-3 gap-2">
                      {room.gallery.map((image, index) => (
                        <img
                          key={index}
                          src={image}
                          alt={`${t(`rooms.${room.id}.name`)} ${index + 1}`}
                          className="w-full h-40 object-cover rounded-lg cursor-pointer hover:opacity-80 transition-opacity"
                        />
                      ))}
                    </div>
                  </div>

                  {/* Footer Actions */}
                  <div className="flex justify-between items-center mt-8 pt-6 border-t">
                    <Button
                      variant="outline"
                      onClick={() => setSelectedRoom(null)}
                      className="flex items-center gap-2"
                    >
                      <ArrowRight className="w-4 h-4 rotate-180" />
                      Retour aux chambres
                    </Button>
                    <div className="flex gap-3">
                      {/* <Button variant="outline">
                        Demander plus d'infos
                      </Button> */}
                      <Button
                        className="bg-amber-600 hover:bg-amber-700"
                        onClick={() => {
                          setSelectedRoom(null);
                          const element = document.querySelector('#booking');
                          if (element) {
                            element.scrollIntoView({ behavior: 'smooth' });
                          }
                        }}
                      >
                        Réserver maintenant
                      </Button>
                    </div>
                  </div>
                </>
              );
            })()}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};
