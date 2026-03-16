import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Bath, Sparkles, ChefHat, Compass, MapPin, ArrowRight, Music, Palette, Coffee } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';

const experiences = [
  {
    id: 'hammam',
    icon: Bath,
    image: '/images/moroccan-hammam.jpg',
  },
  {
    id: 'spa',
    icon: Sparkles,
    image: '/images/moroccan-spa.jpg',
  },
  {
    id: 'cooking',
    icon: ChefHat,
    image: '/images/moroccan-cooking.jpg',
  },
  {
    id: 'desert',
    icon: Compass,
    image: '/images/moroccan-desert.jpg',
  },
  {
    id: 'medina',
    icon: MapPin,
    image: '/images/moroccan-medina.jpg',
  },
  {
    id: 'music',
    icon: Music,
    image: "https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62?w=1200&auto=format&fit=crop",
  },
  {
    id: 'art',
    icon: Palette,
    image: "https://images.unsplash.com/photo-1583845112203-29329902332e?w=1200&auto=format&fit=crop",
  },
  {
    id: 'tea',
    icon: Coffee,
    image: "https://images.unsplash.com/photo-1561047029-3000c68339ca?w=1200&auto=format&fit=crop",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
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

const getExperienceDetails = (id: string) => {
  const details: { [key: string]: string } = {
    hammam: "Découvrez le rituel ancestral du hammam marocain, un bain de vapeur traditionnel qui purifie le corps et l'esprit. Accompagné d'un guide expérimenté, vous vivrez une expérience authentique de relaxation profonde.",
    spa: "Laissez-vous choyer par nos masseuses expertes utilisant les huiles d'argan biologiques. Cette expérience combine les techniques traditionnelles marocaines avec les méthodes modernes de relaxation.",
    cooking: "Apprenez les secrets de la cuisine marocaine directement dans notre cuisine traditionnelle. De la préparation du tajine aux pâtisseries orientales, maîtrisez l'art culinaire marocain.",
    desert: "Partez à l'aventure dans le Sahara avec nos guides nomades. Vivez une nuit sous les étoiles, autour d'un feu de camp, avec dîner traditionnel et musique berbère.",
    medina: "Explorez les ruelles labyrinthiques de la médina avec un guide local qui vous révélera les secrets cachés, l'histoire et les traditions de ce quartier millénaire.",
    music: "Plongez dans l'âme musicale du Maroc avec une soirée dédiée aux mélodies andalouses. Accompagné de musiciens traditionnels, laissez-vous transporter par ces sonorités envoûtantes.",
    art: "Initiez-vous aux arts traditionnels marocains : zellij, poterie, calligraphie... Nos artisans vous transmettront leur savoir-faire ancestral dans un atelier convivial.",
    tea: "Participez à la cérémonie sacrée du thé à la menthe, rite social marocain par excellence. Découvrez l'art de la préparation et les règles de l'hospitalité marocaine."
  };
  return details[id] || "";
};

const getExperienceIncludes = (id: string): string[] => {
  const includes: { [key: string]: string[] } = {
    hammam: ["Bain de vapeur traditionnel", "Gommage au savon noir", "Massage relaxant", "Thé à la menthe", "Serviettes et peignoirs"],
    spa: ["Massage aux huiles d'argan", "Consultation personnalisée", "Musique relaxante", "Thé vert detox", "Temps de repos"],
    cooking: ["Ingrédients frais locaux", "Tablier et ustensiles", "Recettes traditionnelles", "Dégustation des plats", "Diplôme de chef"],
    desert: ["Transfert A/R en 4x4", "Guide nomade expérimenté", "Nuit sous tente berbère", "Dîner traditionnel", "Spectacle musical"],
    medina: ["Guide local francophone", "Carte détaillée", "Visites de sites cachés", "Explications historiques", "Photos souvenirs"],
    music: ["Concert privé andalou", "Explications musicales", "Participation possible", "Vin d'honneur", "Album souvenir"],
    art: ["Matériel professionnel", "Encadrement personnalisé", "Œuvre à emporter", "Thé et pâtisseries", "Certificat"],
    tea: ["Préparation guidée", "Thé traditionnel marocain", "Explications culturelles", "Participation active", "Goûter oriental"]
  };
  return includes[id] || [];
};

const getExperiencePricing = (id: string): string => {
  const pricing: { [key: string]: string } = {
    hammam: "À partir de 80€ • 2h30",
    spa: "À partir de 120€ • 1h30",
    cooking: "À partir de 95€ • 4h (incluant le repas)",
    desert: "À partir de 150€ • Journée complète + nuit",
    medina: "À partir de 45€ • 3h",
    music: "À partir de 75€ • 2h",
    art: "À partir de 65€ • 3h",
    tea: "À partir de 35€ • 1h30"
  };
  return pricing[id] || "";
};

export const Experiences = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { t, isRtl } = useLanguage();
  const [selectedExperience, setSelectedExperience] = useState<string | null>(null);

  return (
    <section id="experiences" className="py-24 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-amber-600 text-sm tracking-[0.3em] uppercase">
            {isRtl ? 'التجارب' : 'Experiences'}
          </span>
          <h2
            className="text-4xl sm:text-5xl font-bold text-slate-900 mt-4 mb-4"
            style={{ direction: isRtl ? 'rtl' : 'ltr' }}
          >
            {t('experiences.title')}
          </h2>
          <p
            className="text-lg text-slate-600 max-w-2xl mx-auto"
            style={{ direction: isRtl ? 'rtl' : 'ltr' }}
          >
            {t('experiences.subtitle')}
          </p>
        </motion.div>

        {/* Experiences Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {experiences.map((exp, index) => {
            const Icon = exp.icon;
            const isLarge = index === 0 || index === 3 || index === 6;

            return (
              <motion.div
                key={exp.id}
                variants={itemVariants}
                className={`group relative overflow-hidden rounded-3xl cursor-pointer ${isLarge ? 'md:row-span-2' : ''
                  }`}
                onClick={() => setSelectedExperience(exp.id)}
              >
                <div
                  className={`relative ${isLarge ? 'h-[500px] md:h-full' : 'h-72'
                    } overflow-hidden`}
                >
                  {/* Image */}
                  <motion.img
                    src={exp.image}
                    alt={t(`experiences.${exp.id}.title`)}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.7 }}
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent group-hover:from-black/90 transition-all duration-500" />

                  {/* Content */}
                  <div className="absolute inset-0 p-6 flex flex-col justify-end">
                    {/* Icon */}
                    <div className="w-12 h-12 bg-amber-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-6 h-6 text-white" />
                    </div>

                    {/* Title */}
                    <h3
                      className="text-xl font-bold text-white mb-2"
                      style={{ direction: isRtl ? 'rtl' : 'ltr' }}
                    >
                      {t(`experiences.${exp.id}.title`)}
                    </h3>

                    {/* Description */}
                    <p
                      className="text-white/80 text-sm mb-4 line-clamp-2 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500"
                      style={{ direction: isRtl ? 'rtl' : 'ltr' }}
                    >
                      {t(`experiences.${exp.id}.description`)}
                    </p>

                    {/* CTA */}
                    <Button
                      variant="ghost"
                      className="w-fit text-amber-400 hover:text-amber-300 hover:bg-white/10 p-0 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100"
                    >
                      {t('experiences.bookExperience')}
                      <ArrowRight
                        className={`w-4 h-4 ml-2 ${isRtl ? 'rotate-180' : ''}`}
                      />
                    </Button>
                  </div>

                  {/* Decorative Border */}
                  <div className="absolute inset-0 border-2 border-white/0 group-hover:border-white/20 rounded-3xl transition-all duration-500" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Experience Details Dialog */}
        <Dialog open={!!selectedExperience} onOpenChange={() => setSelectedExperience(null)}>
          <DialogContent className="w-[60vw] !max-w-none max-h-[95vh] overflow-y-auto">
            {selectedExperience && (() => {
              const exp = experiences.find(e => e.id === selectedExperience);
              if (!exp) return null;
              const Icon = exp.icon;

              return (
                <>
                  <DialogHeader>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-amber-600 rounded-xl flex items-center justify-center">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <DialogTitle className="text-2xl font-bold">
                          {t(`experiences.${exp.id}.title`)}
                        </DialogTitle>
                        <DialogDescription className="text-lg text-gray-600 mt-1">
                          {t(`experiences.${exp.id}.description`)}
                        </DialogDescription>
                      </div>
                    </div>
                  </DialogHeader>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Image */}
                    <div className="relative">
                      <img
                        src={exp.image}
                        alt={t(`experiences.${exp.id}.title`)}
                        className="w-full h-64 lg:h-80 object-cover rounded-xl"
                      />
                    </div>

                    {/* Details */}
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-xl font-semibold mb-3">À propos de cette expérience</h3>
                        <p className="text-gray-700 leading-relaxed">
                          {getExperienceDetails(exp.id)}
                        </p>
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold mb-3">Ce qui est inclus</h3>
                        <ul className="space-y-2">
                          {getExperienceIncludes(exp.id).map((item, index) => (
                            <li key={index} className="flex items-center gap-2">
                              <div className="w-2 h-2 bg-amber-600 rounded-full" />
                              <span className="text-gray-700">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="bg-amber-50 p-4 rounded-lg">
                        <h3 className="text-xl font-semibold mb-2">Prix et durée</h3>
                        <p className="text-gray-700">
                          {getExperiencePricing(exp.id)}
                        </p>
                      </div>

                      <div className="flex gap-3">
                        <Button className="flex-1 bg-amber-600 hover:bg-amber-700">
                          {t('experiences.bookExperience')}
                        </Button>
                        <Button variant="outline" onClick={() => setSelectedExperience(null)}>
                          Fermer
                        </Button>
                      </div>
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
