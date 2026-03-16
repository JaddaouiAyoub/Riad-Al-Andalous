import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { Button } from './ui/button';
import { Calendar, Clock, ArrowLeft } from 'lucide-react';

const Blog = () => {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [selectedPost, setSelectedPost] = useState<number | null>(null);

  const blogPosts = [
    {
      id: 1,
      title: "Les Traditions du Thé Marocain",
      excerpt: "Découvrez l'art ancestral du thé à la menthe, symbole d'hospitalité marocaine...",
      date: "15 Mars 2024",
      category: "Traditions",
      readTime: "5 min",
      image: "https://images.unsplash.com/photo-1567708415681-d1d249e182eb?w=1200&auto=format&fit=crop", // Thé à la menthe marocain réel :contentReference[oaicite:0]{index=0}
      fullContent: `
        <h3>Le Thé à la Menthe : Une Tradition Millénaire</h3>
        <p>Le thé à la menthe est bien plus qu'une simple boisson au Maroc. C'est un rituel social, un symbole d'hospitalité et une véritable cérémonie qui rythme la vie quotidienne des Marocains.</p>
        
        <h4>L'Histoire du Thé au Maroc</h4>
        <p>Introduit au Maroc par les Anglais au XIXe siècle, le thé a rapidement conquis le cœur des Marocains. La tradition du thé à la menthe s'est développée dans les années 1950, mélangeant les saveurs britanniques avec les herbes aromatiques locales.</p>
        
        <h4>La Cérémonie du Thé</h4>
        <p>Préparer le thé à la menthe est un art qui demande patience et précision. Le thé vert est infusé plusieurs fois, puis mélangé avec de la menthe fraîche et beaucoup de sucre. La préparation peut prendre jusqu'à 15 minutes, temps pendant lequel l'hôte discute avec ses invités.</p>
        
        <h4>Un Symbole d'Hospitalité</h4>
        <p>Offrir le thé à la menthe est un geste de bienvenue essentiel. Dans les riads traditionnels comme le nôtre, cette tradition se perpétue, créant des moments d'échange authentiques entre hôtes et visiteurs.</p>
      `
    },
    {
      id: 2,
      title: "L'Art du Zellij au Maroc",
      excerpt: "Plongez dans l'univers fascinant de la mosaïque marocaine et son histoire millénaire...",
      date: "10 Mars 2024",
      category: "Artisanat",
      readTime: "7 min",
      image: "https://plus.unsplash.com/premium_photo-1699533136334-296a61a40216?w=1200&auto=format&fit=crop",
      fullContent: `
        <h3>Le Zellij : L'Âme de l'Architecture Marocaine</h3>
        <p>Le zellij, ou mosaïque marocaine, est un art ancestral qui transforme les murs en œuvres d'art vivantes. Chaque carreau raconte une histoire et chaque motif porte une signification symbolique.</p>
        
        <h4>Une Technique Ancestrale</h4>
        <p>Le zellij est fabriqué à partir de terre cuite émaillée, découpée en formes géométriques complexes. Chaque carreau est façonné à la main, puis assemblé selon des motifs mathématiques sophistiqués inspirés de la géométrie islamique.</p>
        
        <h4>Symbolisme et Signification</h4>
        <p>Les motifs du zellij ne sont pas seulement décoratifs. L'étoile à 8 branches représente l'équilibre entre le ciel et la terre, tandis que les entrelacs complexes symbolisent l'infini et l'unité divine.</p>
        
        <h4>Préservation d'un Patrimoine</h4>
        <p>À Riad Al Andalous, nous travaillons avec des artisans locaux pour préserver cet art traditionnel. Chaque pièce de zellij dans notre riad est une œuvre unique, fabriquée selon les méthodes ancestrales.</p>
      `
    },
    {
      id: 3,
      title: "Les Secrets de la Cuisine Marocaine",
      excerpt: "Du tajine aux pastillas, explorez les saveurs authentiques de notre gastronomie...",
      date: "5 Mars 2024",
      category: "Cuisine",
      readTime: "8 min",
      image: "https://images.unsplash.com/photo-1770670644186-b3d930f75f5a?w=1200&auto=format&fit=crop",
      fullContent: `
        <h3>La Cuisine Marocaine : Un Voyage Gustatif</h3>
        <p>La cuisine marocaine est un mélange subtil d'influences berbères, arabes, andalouses et africaines. Chaque plat raconte l'histoire d'un peuple et de ses traditions culinaires riches.</p>
        
        <h4>Le Tajine : Star de la Cuisine Marocaine</h4>
        <p>Le tajine est bien plus qu'un plat, c'est une méthode de cuisson lente qui concentre les saveurs. Viande, légumes et épices mijotent ensemble pendant des heures, créant des mélanges gustatifs uniques.</p>
        
        <h4>Les Épices : L'Âme des Saveurs</h4>
        <p>Le ras-el-hanout, mélange d'une trentaine d'épices, est le secret des plats marocains. Chaque famille garde sa recette secrète, transmise de génération en génération.</p>
        
        <h4>Tradition et Modernité</h4>
        <p>Dans notre riad, nous proposons des cours de cuisine où vous apprendrez à maîtriser ces techniques ancestrales. De la préparation du couscous aux pâtisseries orientales, découvrez les secrets de notre gastronomie.</p>
      `
    },
    {
      id: 4,
      title: "Le Ramadan au Maroc : Traditions et Célébrations",
      excerpt: "Vivez l'atmosphère unique du mois sacré dans les ruelles de la médina...",
      date: "28 Février 2024",
      category: "Fêtes",
      readTime: "6 min",
      image: "https://images.unsplash.com/photo-1698671881283-3c01770a2b93?w=1200&auto=format&fit=crop",
      fullContent: `
        <h3>Le Ramadan : Mois de Spiritualité et de Partage</h3>
        <p>Le Ramadan transforme Marrakech en une ville magique où spiritualité et traditions se mêlent dans une atmosphère unique. Les ruelles de la médina s'animent d'une vie nocturne particulière.</p>
        
        <h4>Le Jeûne et la Spiritualité</h4>
        <p>Pendant le mois lunaire du Ramadan, les musulmans jeûnent du lever au coucher du soleil. Cette période de privation est aussi un temps de réflexion spirituelle et de rapprochement avec Dieu.</p>
        
        <h4>Les Traditions Nocturnes</h4>
        <p>La rupture du jeûne, appelée ftour, est un moment de partage familial. Les souks s'animent après le coucher du soleil, offrant des spécialités culinaires et une ambiance festive unique.</p>
        
        <h4>Fêtes et Célébrations</h4>
        <p>La nuit du destin (Laylat al-Qadr) et l'Aïd el-Fitr marquent la fin du Ramadan. La ville s'illumine de décorations traditionnelles et les familles se réunissent pour célébrer.</p>
      `
    },
    {
      id: 5,
      title: "Les Souks de Marrakech : Un Voyage dans le Temps",
      excerpt: "Explorez les marchés traditionnels où l'art du marchandage rencontre l'artisanat d'exception...",
      date: "20 Février 2024",
      category: "Culture",
      readTime: "9 min",
      image: "https://images.unsplash.com/photo-1713607763620-dbfe9c10b3ff?w=1200&auto=format&fit=crop",
      fullContent: `
        <h3>Les Souks : Le Cœur Battant de Marrakech</h3>
        <p>Les souks de Marrakech sont un labyrinthe fascinant où passé et présent se rencontrent. Plus de 18 quartiers spécialisés offrent une expérience sensorielle unique.</p>
        
        <h4>Une Organisation Millénaire</h4>
        <p>Chaque souk est dédié à un métier spécifique : tanneurs, ferronniers, tisserands, épiciers... Cette organisation par corporation remonte au Moyen Âge et perdure encore aujourd'hui.</p>
        
        <h4>L'Art du Marchandage</h4>
        <p>Le marchandage n'est pas seulement une négociation commerciale, c'est un rituel social. Il crée un lien entre le commerçant et l'acheteur, transformant l'achat en une expérience culturelle.</p>
        
        <h4>Authenticité et Modernité</h4>
        <p>Si certains souks ont évolué avec le tourisme, beaucoup préservent encore leurs traditions ancestrales. Notre riad vous propose des visites guidées pour découvrir les vrais trésors cachés.</p>
      `
    },
    {
      id: 6,
      title: "L'Héritage Andalou dans l'Architecture Marocaine",
      excerpt: "Comment l'influence andalouse a façonné les riads et palais du Maroc...",
      date: "15 Février 2024",
      category: "Histoire",
      readTime: "10 min",
      image: "https://images.unsplash.com/photo-1616855202318-07ea40522c6c?w=1200&auto=format&fit=crop",
      fullContent: `
        <h3>L'Influence Andalouse : Racines de l'Architecture Marocaine</h3>
        <p>L'architecture marocaine porte l'empreinte profonde de l'Andalousie musulmane. Les riads, les moucharabiehs et les fontaines témoignent de cet héritage prestigieux.</p>
        
        <h4>Un Exil Architecturale</h4>
        <p>Lors de la Reconquista espagnole, les musulmans et les juifs d'Andalousie trouvèrent refuge au Maroc. Ils apportèrent avec eux leur savoir-faire architectural et leurs techniques de construction.</p>
        
        <h4>Les Riads : Maisons Andalouses</h4>
        <p>Le riad traditionnel est directement inspiré des maisons andalouses. Son patio central, ses arcades et ses fontaines créent un microcosme intime et frais au cœur de la médina.</p>
        
        <h4>Évolution et Préservation</h4>
        <p>À Riad Al Andalous, nous préservons cet héritage tout en l'adaptant au confort moderne. Chaque détail architectural raconte l'histoire fascinante de ces deux cultures sœurs.</p>
      `
    }
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

  return (
    <section id="blog" className="py-24 bg-gray-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-amber-600 text-sm tracking-[0.3em] uppercase">
            Notre Blog
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mt-4 mb-4">
            {t('blog.title', 'Notre Blog')}
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            {t('blog.subtitle', 'Découvrez les traditions, l\'histoire et la culture marocaine à travers nos articles')}
          </p>
        </motion.div>

        {/* Blog Posts Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {blogPosts.map((post) => (
            <motion.div
              key={post.id}
              variants={itemVariants}
              className="group cursor-pointer"
              onClick={() => setSelectedPost(post.id)}
            >
              <Card className="h-full overflow-hidden hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2">
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="bg-white/90 text-gray-800 hover:bg-white">
                      {post.category}
                    </Badge>
                  </div>
                </div>

                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {post.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {post.readTime}
                    </div>
                  </div>
                  <CardTitle className="text-xl group-hover:text-amber-600 transition-colors line-clamp-2">
                    {post.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="pt-0">
                  <CardDescription className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </CardDescription>
                  <div className="flex items-center text-amber-600 font-medium group-hover:text-amber-700 transition-colors">
                    {t('blog.readMore', 'Lire la suite')}
                    <ArrowLeft className="w-4 h-4 ml-2 rotate-180" />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Blog Post Dialog */}
        <Dialog open={!!selectedPost} onOpenChange={() => setSelectedPost(null)}>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
            {selectedPost && (() => {
              const post = blogPosts.find(p => p.id === selectedPost);
              if (!post) return null;

              return (
                <>
                  <DialogHeader className="pb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="secondary">{post.category}</Badge>
                      <span className="text-sm text-gray-500 flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {post.date}
                      </span>
                      <span className="text-sm text-gray-500 flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {post.readTime}
                      </span>
                    </div>
                    <DialogTitle className="text-3xl font-bold leading-tight">
                      {post.title}
                    </DialogTitle>
                  </DialogHeader>

                  {/* Featured Image */}
                  <div className="relative mb-6">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-64 md:h-80 object-cover rounded-lg"
                    />
                  </div>

                  {/* Full Content */}
                  <div 
                    className="prose prose-lg max-w-none"
                    dangerouslySetInnerHTML={{ __html: post.fullContent }}
                  />

                  {/* Footer Actions */}
                  <div className="flex justify-between items-center mt-8 pt-6 border-t">
                    <Button 
                      variant="outline" 
                      onClick={() => setSelectedPost(null)}
                      className="flex items-center gap-2"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      Retour aux articles
                    </Button>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        Partager
                      </Button>
                      <Button size="sm">
                        Lire d'autres articles
                      </Button>
                    </div>
                  </div>
                </>
              );
            })()}
          </DialogContent>
        </Dialog>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center mt-16"
        >
          <Button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-lg font-medium transition-colors">
            {t('blog.viewAll', 'Voir tous les articles')}
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export { Blog };