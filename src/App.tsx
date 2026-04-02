import { useState, useEffect } from 'react';
import { 
  ShoppingBag, 
  Leaf, 
  Heart, 
  MapPin, 
  Phone, 
  Instagram, 
  Facebook, 
  ChevronRight, 
  ChevronLeft,
  Star, 
  CheckCircle2,
  Menu,
  X,
  ArrowRight,
  ShieldCheck,
  Zap
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const WHATSAPP_NUMBER = "5562996161000";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}`;
const LOJA_LINK = "https://vittaceres.com.br"; // Placeholder for the actual store link
const LOGO_URL = "/images/logo.png";

const STORE_PHOTOS = [
  "/images/store/loja-1.jpg",
  "/images/store/loja-2.jpg",
  "/images/store/loja-3.jpg",
  "/images/store/loja-4.jpg",
  "/images/store/loja-5.jpg",
  "https://i.imgur.com/DexFX6G.jpg",
  "https://i.imgur.com/7QJzjmd.jpg",
  "https://i.imgur.com/RB8Ljtw.jpg",
];

const HEALTH_TIPS = [
  "https://i.imgur.com/5w6cEtI.jpg",
  "https://i.imgur.com/twodhGY.jpg",
  "https://i.imgur.com/tpGlTXY.jpg",
  "https://i.imgur.com/Kly2ZSV.jpg",
  "https://i.imgur.com/3u7tpMv.jpg",
  "https://i.imgur.com/PJGwO5O.jpg",
  "https://i.imgur.com/AfMq3HG.jpg",
  "https://i.imgur.com/OQnBSVx.jpg",
  "https://i.imgur.com/Ep498Er.jpg",
  "https://i.imgur.com/dDNv7Uz.jpg",
  "https://i.imgur.com/ktGHwpl.jpg",
  "https://i.imgur.com/oGi5GK5.jpg",
  "https://i.imgur.com/BOMTuoT.jpg",
  "https://i.imgur.com/00Ww12r.jpg",
  "https://i.imgur.com/yzoBUTZ.jpg",
  "https://i.imgur.com/M1qKMP0.jpg",
  "https://i.imgur.com/JlpRYf6.jpg",
  "https://i.imgur.com/FTw82z4.jpg"
];

const PRODUCTS = [
  {
    id: 1,
    name: "Produtos Naturais a Granel",
    price: "A partir de R$ 5,00",
    image: "/images/store/loja-2.jpg",
    tag: "Granel"
  },
  {
    id: 2,
    name: "Suplementos & Vitaminas",
    price: "A partir de R$ 35,00",
    image: "/images/store/loja-1.jpg",
    tag: "Saúde"
  },
  {
    id: 3,
    name: "Granola & Cereais",
    price: "A partir de R$ 12,00",
    image: "/images/store/loja-4.jpg",
    tag: "Natural"
  },
  {
    id: 4,
    name: "Chás & Ervas Medicinais",
    price: "A partir de R$ 8,00",
    image: "/images/store/loja-5.jpg",
    tag: "Detox"
  },
  {
    id: 5,
    name: "Multivitamínico",
    price: "R$ 54,90",
    image: "https://i.imgur.com/ky26Rsu.jpg",
    tag: "Imunidade"
  },
  {
    id: 6,
    name: "Creatina Monohidratada",
    price: "R$ 89,00",
    image: "https://i.imgur.com/6Dqb5ak.jpg",
    tag: "Força"
  },
  {
    id: 7,
    name: "Óleo de Coco Extra Virgem",
    price: "R$ 42,00",
    image: "https://i.imgur.com/Apb6A6O.jpg",
    tag: "Culinária"
  },
  {
    id: 8,
    name: "DermaSkin Ultra — Linha Completa",
    price: "R$ 99,90",
    image: "https://i.imgur.com/GJSNiwB.jpg",
    tag: "Colágeno"
  },
  {
    id: 9,
    name: "DermaSkin Ultra — Sabores",
    price: "R$ 99,90",
    image: "https://i.imgur.com/zCMJlqc.jpg",
    tag: "Beleza"
  },
  {
    id: 10,
    name: "DermaSkin Ultra",
    price: "R$ 99,90",
    image: "https://i.imgur.com/oXNynow.jpg",
    tag: "Colágeno"
  },
  {
    id: 11,
    name: "Semente de Chia",
    price: "R$ 12,90",
    image: "https://i.imgur.com/eyOQIsw.jpg",
    tag: "Fibras"
  },
  {
    id: 12,
    name: "DermaSkin — Loja VittaCeres",
    price: "R$ 99,90",
    image: "https://i.imgur.com/4ChPRGL.jpg",
    tag: "Suplementos"
  },
  {
    id: 13,
    name: "Paçoquinha Zero Açúcar",
    price: "R$ 9,90",
    image: "https://i.imgur.com/KHszltV.jpg",
    tag: "Zero Açúcar"
  }
];

const FEATURES = [
  {
    icon: Leaf,
    title: "100% Natural",
    description: "Produtos selecionados com rigor para garantir a máxima pureza e benefícios."
  },
  {
    icon: ShieldCheck,
    title: "Qualidade Garantida",
    description: "Trabalhamos apenas com as melhores marcas do mercado de suplementação."
  },
  {
    icon: Zap,
    title: "Energia & Vigor",
    description: "Soluções naturais para potencializar seu dia a dia e sua performance."
  }
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [galleryIndex, setGalleryIndex] = useState(0);

  const nextGallery = () => {
    setGalleryIndex((prev) => (prev + 1) % STORE_PHOTOS.length);
  };

  const prevGallery = () => {
    setGalleryIndex((prev) => (prev - 1 + STORE_PHOTOS.length) % STORE_PHOTOS.length);
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className={cn(
        "glass-nav transition-all duration-300",
        scrolled ? "py-1 shadow-lg" : "py-3 border-transparent bg-transparent"
      )}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <img 
                src={LOGO_URL} 
                alt="Vitta Ceres Logo" 
                className={cn("transition-all duration-300", scrolled ? "h-12" : "h-16")}
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              {['Início', 'Produtos', 'Dicas', 'Sobre', 'Contato'].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase()}`}
                  className="text-sm font-bold uppercase tracking-wider hover:text-vitta-lime transition-colors"
                >
                  {item}
                </a>
              ))}
              <a 
                href={LOJA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="vitta-button vitta-button-primary py-2 px-6 text-sm flex items-center gap-2"
              >
                <ShoppingBag className="w-4 h-4" />
                LOJA VIRTUAL
              </a>
            </div>

            {/* Mobile Toggle */}
            <button 
              className="md:hidden p-2 text-vitta-dark"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t border-vitta-lime/10 overflow-hidden"
            >
              <div className="px-4 py-6 space-y-4">
                {['Início', 'Produtos', 'Dicas', 'Sobre', 'Contato'].map((item) => (
                  <a 
                    key={item} 
                    href={`#${item.toLowerCase()}`}
                    className="block text-lg font-bold uppercase tracking-wider"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </a>
                ))}
                <a 
                  href={WHATSAPP_LINK}
                  className="vitta-button vitta-button-primary w-full flex justify-center items-center gap-2"
                >
                  <ShoppingBag className="w-5 h-5" />
                  PEDIR NO WHATSAPP
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section id="início" className="relative pt-32 pb-40 overflow-hidden bg-vitta-dark text-white">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-vitta-lime rounded-full translate-x-1/3 -translate-y-1/3 blur-[150px]" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-vitta-lime rounded-full -translate-x-1/3 translate-y-1/3 blur-[120px]" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col items-center text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-12"
            >
              <img 
                src={LOGO_URL} 
                alt="Vitta Ceres Logo" 
                className="h-48 md:h-64 drop-shadow-[0_0_30px_rgba(141,198,63,0.3)]"
                referrerPolicy="no-referrer"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="max-w-3xl"
            >
              <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-vitta-lime/10 text-vitta-lime text-sm font-black uppercase tracking-[0.2em] mb-8 border border-vitta-lime/20">
                <Leaf className="w-5 h-5" />
                Sua saúde em primeiro lugar
              </div>
              <h1 className="text-6xl lg:text-8xl font-bold leading-tight mb-8 tracking-tighter">
                Equilíbrio <span className="text-vitta-lime">Natural</span>
              </h1>
              <p className="text-xl text-vitta-cream/70 mb-12 max-w-2xl mx-auto leading-relaxed">
                Descubra o poder da natureza com nossa seleção exclusiva de produtos orgânicos, suplementos e alimentos saudáveis em Ceres.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a href="#produtos" className="vitta-button bg-vitta-lime text-vitta-dark hover:bg-white flex items-center justify-center gap-3 px-10 py-5 text-lg">
                  EXPLORAR PRODUTOS
                  <ArrowRight className="w-6 h-6" />
                </a>
                <a href={WHATSAPP_LINK} className="vitta-button border-2 border-white/20 text-white flex items-center justify-center gap-3 px-10 py-5 text-lg hover:bg-white hover:text-vitta-dark transition-all">
                  FALAR COM ESPECIALISTA
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            {FEATURES.map((feature, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -10 }}
                className="text-center p-10 rounded-[40px] bg-vitta-cream border border-vitta-lime/10 hover:border-vitta-lime/30 transition-all"
              >
                <div className="w-20 h-20 bg-vitta-lime text-vitta-dark rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-lg">
                  <feature.icon className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Virtual Store Preview */}
      <section id="produtos" className="py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="flex flex-col md:flex-row justify-between items-end gap-6">
            <div>
              <h2 className="text-5xl font-bold mb-4">Nossos <span className="text-vitta-lime">Destaques</span></h2>
              <p className="text-gray-600 max-w-xl text-lg">Os produtos mais amados pela nossa comunidade. Qualidade premium direto para sua casa.</p>
            </div>
            <a href={WHATSAPP_LINK} className="text-vitta-dark font-black flex items-center gap-2 hover:text-vitta-lime transition-colors uppercase tracking-widest text-sm">
              VER CATÁLOGO COMPLETO
              <ChevronRight className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="space-y-12">
          {/* Row 1 */}
          <div className="flex overflow-hidden select-none gap-8">
            <motion.div
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 50, ease: "linear", repeat: Infinity }}
              className="flex flex-nowrap gap-8"
            >
              {[...PRODUCTS.slice(0, 7), ...PRODUCTS.slice(0, 7)].map((product, idx) => (
                <div key={idx} className="flex-shrink-0 w-80 vitta-card group">
                  <div className="relative h-64 overflow-hidden">
                    <img src={product.image} alt={product.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" referrerPolicy="no-referrer" />
                    <div className="absolute top-4 left-4 bg-vitta-lime text-vitta-dark px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg">
                      {product.tag}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-lg mb-2 truncate">{product.name}</h3>
                    <div className="flex justify-between items-center">
                      <span className="text-vitta-dark font-black text-xl">{product.price}</span>
                      <button className="p-2 bg-vitta-lime/10 rounded-xl text-vitta-dark hover:bg-vitta-lime transition-all">
                        <ShoppingBag className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Row 2 */}
          <div className="flex overflow-hidden select-none gap-8">
            <motion.div
              animate={{ x: ["-50%", "0%"] }}
              transition={{ duration: 45, ease: "linear", repeat: Infinity }}
              className="flex flex-nowrap gap-8"
            >
              {[...PRODUCTS.slice(7), ...PRODUCTS.slice(7)].map((product, idx) => (
                <div key={idx} className="flex-shrink-0 w-80 vitta-card group">
                  <div className="relative h-64 overflow-hidden">
                    <img src={product.image} alt={product.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" referrerPolicy="no-referrer" />
                    <div className="absolute top-4 left-4 bg-vitta-lime text-vitta-dark px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg">
                      {product.tag}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-lg mb-2 truncate">{product.name}</h3>
                    <div className="flex justify-between items-center">
                      <span className="text-vitta-dark font-black text-xl">{product.price}</span>
                      <button className="p-2 bg-vitta-lime/10 rounded-xl text-vitta-dark hover:bg-vitta-lime transition-all">
                        <ShoppingBag className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Health Tips Section */}
      <section id="dicas" className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <div className="text-center">
            <h2 className="text-5xl font-bold mb-6">Dicas de <span className="text-vitta-lime">Saúde</span></h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Informação de qualidade para você viver melhor. Acompanhe nossas dicas diárias para uma vida mais equilibrada.
            </p>
          </div>
        </div>

        <div className="space-y-8">
          {/* Row 1 */}
          <div className="flex overflow-hidden select-none gap-6">
            <motion.div
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 40, ease: "linear", repeat: Infinity }}
              className="flex flex-nowrap gap-6"
            >
              {[...HEALTH_TIPS.slice(0, 6), ...HEALTH_TIPS.slice(0, 6)].map((tip, idx) => (
                <div key={idx} className="flex-shrink-0 w-72 md:w-96 rounded-[32px] overflow-hidden shadow-xl border-4 border-vitta-cream hover:border-vitta-lime transition-all group">
                  <img src={tip} alt="Dica" className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105" referrerPolicy="no-referrer" />
                </div>
              ))}
            </motion.div>
          </div>

          {/* Row 2 */}
          <div className="flex overflow-hidden select-none gap-6">
            <motion.div
              animate={{ x: ["-50%", "0%"] }}
              transition={{ duration: 35, ease: "linear", repeat: Infinity }}
              className="flex flex-nowrap gap-6"
            >
              {[...HEALTH_TIPS.slice(6, 12), ...HEALTH_TIPS.slice(6, 12)].map((tip, idx) => (
                <div key={idx} className="flex-shrink-0 w-72 md:w-96 rounded-[32px] overflow-hidden shadow-xl border-4 border-vitta-cream hover:border-vitta-lime transition-all group">
                  <img src={tip} alt="Dica" className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105" referrerPolicy="no-referrer" />
                </div>
              ))}
            </motion.div>
          </div>

          {/* Row 3 */}
          <div className="flex overflow-hidden select-none gap-6">
            <motion.div
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 45, ease: "linear", repeat: Infinity }}
              className="flex flex-nowrap gap-6"
            >
              {[...HEALTH_TIPS.slice(12, 18), ...HEALTH_TIPS.slice(12, 18)].map((tip, idx) => (
                <div key={idx} className="flex-shrink-0 w-72 md:w-96 rounded-[32px] overflow-hidden shadow-xl border-4 border-vitta-cream hover:border-vitta-lime transition-all group">
                  <img src={tip} alt="Dica" className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105" referrerPolicy="no-referrer" />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4">
        <div className="max-w-5xl mx-auto bg-vitta-dark rounded-[60px] p-12 lg:p-24 relative overflow-hidden text-center text-white shadow-2xl">
          <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
            <div className="absolute top-0 left-0 w-96 h-96 bg-vitta-lime rounded-full -translate-x-1/2 -translate-y-1/2 blur-[100px]" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-vitta-lime rounded-full translate-x-1/2 translate-y-1/2 blur-[100px]" />
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold mb-10">Pronto para transformar sua saúde?</h2>
          <p className="text-vitta-cream/70 text-xl mb-14 max-w-2xl mx-auto leading-relaxed">
            Peça agora pelo WhatsApp e receba em casa com toda comodidade. Atendimento personalizado para tirar todas as suas dúvidas.
          </p>
          <a 
            href={WHATSAPP_LINK} 
            className="vitta-button bg-vitta-lime text-vitta-dark hover:bg-white inline-flex items-center gap-4 text-xl px-10 py-5"
          >
            <Phone className="w-7 h-7" />
            CHAMAR NO WHATSAPP
          </a>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="sobre" className="py-24 bg-vitta-cream/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6">Conheça nossa <span className="text-vitta-lime">Loja</span></h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Um ambiente preparado com carinho para oferecer o melhor em saúde e bem-estar em Ceres.
            </p>
          </div>
          
          <div className="relative max-w-md mx-auto">
            <div className="overflow-hidden rounded-[40px] shadow-2xl border-8 border-white aspect-[9/16] relative group">
              <AnimatePresence mode="wait">
                <motion.img
                  key={galleryIndex}
                  src={STORE_PHOTOS[galleryIndex]}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </AnimatePresence>
              
              {/* Navigation Buttons */}
              <div className="absolute inset-0 flex items-center justify-between px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button 
                  onClick={prevGallery}
                  className="w-12 h-12 bg-white/90 backdrop-blur-sm text-vitta-dark rounded-full flex items-center justify-center shadow-lg hover:bg-vitta-lime transition-colors"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button 
                  onClick={nextGallery}
                  className="w-12 h-12 bg-white/90 backdrop-blur-sm text-vitta-dark rounded-full flex items-center justify-center shadow-lg hover:bg-vitta-lime transition-colors"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>

              {/* Dots */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
                {STORE_PHOTOS.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setGalleryIndex(idx)}
                    className={cn(
                      "w-2 h-2 rounded-full transition-all duration-300",
                      idx === galleryIndex ? "bg-vitta-lime w-6" : "bg-white/50"
                    )}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact & Map */}
      <section id="contato" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-5xl font-bold mb-10">Visite nossa <span className="text-vitta-lime">Loja Física</span></h2>
              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 bg-vitta-lime/10 rounded-2xl flex items-center justify-center text-vitta-dark shrink-0 shadow-sm">
                    <MapPin className="w-7 h-7" />
                  </div>
                  <div>
                    <p className="font-black text-xl uppercase tracking-widest text-vitta-dark mb-1">Endereço</p>
                    <p className="text-gray-600 text-lg">Av. Bernardo Sayão, 100 - Centro<br />Ceres - GO, 76300-000</p>
                  </div>
                </div>
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 bg-vitta-lime/10 rounded-2xl flex items-center justify-center text-vitta-dark shrink-0 shadow-sm">
                    <Phone className="w-7 h-7" />
                  </div>
                  <div>
                    <p className="font-black text-xl uppercase tracking-widest text-vitta-dark mb-1">Telefone & WhatsApp</p>
                    <p className="text-gray-600 text-lg">(62) 99616-1000</p>
                  </div>
                </div>
                <div className="flex gap-5 pt-6">
                  <a href="#" className="w-14 h-14 bg-vitta-dark text-white rounded-2xl flex items-center justify-center hover:bg-vitta-lime hover:text-vitta-dark transition-all shadow-lg">
                    <Instagram className="w-7 h-7" />
                  </a>
                  <a href="#" className="w-14 h-14 bg-vitta-dark text-white rounded-2xl flex items-center justify-center hover:bg-vitta-lime hover:text-vitta-dark transition-all shadow-lg">
                    <Facebook className="w-7 h-7" />
                  </a>
                </div>
              </div>
            </div>
            
            <div className="h-[500px] rounded-[60px] overflow-hidden shadow-2xl border-[12px] border-vitta-cream">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3844.345678901234!2d-49.596789!3d-15.307890!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTXCsDE4JzI4LjQiUyA0OcKwMzUnNDguNCJX!5e0!3m2!1spt-BR!2sbr!4v1620000000000!5m2!1spt-BR!2sbr" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-vitta-dark text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-16 mb-20">
            <div className="col-span-2">
              <img 
                src={LOGO_URL} 
                alt="Vitta Ceres Logo" 
                className="h-20 mb-8 brightness-0 invert"
                referrerPolicy="no-referrer"
              />
              <p className="text-gray-400 max-w-sm text-lg leading-relaxed">
                Sua melhor escolha em produtos naturais e suplementação em Ceres e região. Qualidade, confiança e saúde para você.
              </p>
            </div>
            <div>
              <h4 className="font-black uppercase tracking-widest mb-8 text-vitta-lime">Links Rápidos</h4>
              <ul className="space-y-5 text-gray-400 text-lg">
                <li><a href="#início" className="hover:text-vitta-lime transition-colors">Início</a></li>
                <li><a href="#produtos" className="hover:text-vitta-lime transition-colors">Produtos</a></li>
                <li><a href="#dicas" className="hover:text-vitta-lime transition-colors">Dicas</a></li>
                <li><a href="#sobre" className="hover:text-vitta-lime transition-colors">Sobre Nós</a></li>
                <li><a href="#contato" className="hover:text-vitta-lime transition-colors">Contato</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-black uppercase tracking-widest mb-8 text-vitta-lime">Horário</h4>
              <ul className="space-y-5 text-gray-400 text-lg">
                <li>Seg - Sex: 08:00 - 18:00</li>
                <li>Sábado: 08:00 - 13:00</li>
                <li>Domingo: Fechado</li>
              </ul>
            </div>
          </div>
          <div className="pt-12 border-t border-white/5 text-center text-gray-500 text-sm font-bold uppercase tracking-widest">
            <p>© {new Date().getFullYear()} Vitta Ceres. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a 
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-5 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 group"
      >
        <Phone className="w-8 h-8" />
        <span className="absolute right-full mr-6 bg-white text-vitta-dark px-6 py-3 rounded-2xl text-sm font-black shadow-2xl opacity-0 group-hover:opacity-100 transition-all whitespace-nowrap pointer-events-none uppercase tracking-widest">
          Fale Conosco agora!
        </span>
      </a>
    </div>
  );
}
