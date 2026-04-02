import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShoppingBag, Phone, ChevronLeft, X, Search } from 'lucide-react';

const WA_NUMBER = '5548999595099';
const LOGO_URL = '/images/logo.png';
const WA_GENERAL = `https://wa.me/${WA_NUMBER}`;

const buildWALink = (name: string, price: string) => {
  const msg = encodeURIComponent(`Olá! Tenho interesse no produto *${name}* (${price}). Pode me ajudar?`);
  return `https://wa.me/${WA_NUMBER}?text=${msg}`;
};

interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
  tag: string;
}

const PRODUCTS: Product[] = [
  { id: 1, name: 'Creatina Hardcore', price: 'R$ 89,00', image: 'https://i.imgur.com/ky26Rsu.jpg', tag: 'Performance' },
  { id: 2, name: 'Goiabada Zero — 100% Natural', price: 'R$ 12,90', image: 'https://i.imgur.com/6Dqb5ak.jpg', tag: 'Zero Açúcar' },
  { id: 3, name: 'Paçoquinha Zero Açúcar', price: 'R$ 9,90', image: 'https://i.imgur.com/Apb6A6O.jpg', tag: 'Zero Açúcar' },
  { id: 4, name: 'DermaSkin Ultra', price: 'R$ 99,90', image: 'https://i.imgur.com/GJSNiwB.jpg', tag: 'Colágeno' },
  { id: 5, name: 'Sementes a Granel', price: 'A partir de R$ 8,00', image: 'https://i.imgur.com/zCMJlqc.jpg', tag: 'Natural' },
  { id: 6, name: 'DermaSkin — Sachês', price: 'R$ 49,90', image: 'https://i.imgur.com/oXNynow.jpg', tag: 'DermaSkin' },
  { id: 7, name: 'Magrosin Emagrecedor', price: 'R$ 89,90', image: 'https://i.imgur.com/eyOQIsw.jpg', tag: 'Emagrecedor' },
  { id: 8, name: 'DermaSkin Ultra — Beauty', price: 'R$ 99,90', image: 'https://i.imgur.com/4ChPRGL.jpg', tag: 'Beleza' },
  { id: 9, name: 'DermaSkin — Linha Completa', price: 'R$ 99,90', image: 'https://i.imgur.com/KHszltV.jpg', tag: 'Suplementos' },
];

const CATEGORIES = ['Todos', ...Array.from(new Set(PRODUCTS.map(p => p.tag)))];

export default function StorePage({ onBack }: { onBack: () => void }) {
  const [activeCategory, setActiveCategory] = useState('Todos');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  useEffect(() => {
    document.body.style.overflow = selectedProduct ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [selectedProduct]);

  const filtered = PRODUCTS.filter(p => {
    const matchCat = activeCategory === 'Todos' || p.tag === activeCategory;
    const matchSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <div className="min-h-screen bg-vitta-cream pb-16">

      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-vitta-cream/95 backdrop-blur-md border-b border-vitta-lime/20 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <button onClick={onBack} className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <img src={LOGO_URL} alt="Vitta Ceres" className="h-12" />
          </button>
          <div className="flex items-center gap-4">
            <button
              onClick={onBack}
              className="text-sm font-bold uppercase tracking-wider hover:text-vitta-lime transition-colors flex items-center gap-1"
            >
              <ChevronLeft className="w-4 h-4" /> Voltar
            </button>
            <a
              href={WA_GENERAL}
              target="_blank"
              rel="noopener noreferrer"
              className="vitta-button vitta-button-primary py-2 px-5 text-sm flex items-center gap-2"
            >
              <Phone className="w-4 h-4" /> WHATSAPP
            </a>
          </div>
        </div>
      </nav>

      {/* Header */}
      <header className="bg-vitta-dark text-white py-14 text-center">
        <h1 className="text-5xl lg:text-6xl font-bold text-white mb-3">
          Nossa <span className="text-vitta-lime">Loja Virtual</span>
        </h1>
        <p className="text-white/60 text-lg max-w-xl mx-auto">
          Produtos naturais, suplementos e muito mais. Entregamos em Ceres e região.
        </p>
      </header>

      {/* Main */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

        {/* Search */}
        <div className="relative mb-6">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            placeholder="Buscar produto... ex: Creatina, DermaSkin"
            className="w-full pl-12 pr-10 py-4 rounded-2xl border border-vitta-lime/20 bg-white shadow-sm focus:outline-none focus:border-vitta-lime text-vitta-dark placeholder-gray-400"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-vitta-dark"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Category pills */}
        <div className="flex gap-2 overflow-x-auto pb-3 mb-8" style={{ scrollbarWidth: 'none' }}>
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`flex-shrink-0 px-5 py-2 rounded-full text-sm font-bold uppercase tracking-wider border transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-vitta-lime text-vitta-dark border-vitta-lime'
                  : 'bg-white text-vitta-dark border-vitta-lime/30 hover:border-vitta-lime'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {filtered.map(product => (
              <article
                key={product.id}
                className="vitta-card group cursor-pointer"
                onClick={() => setSelectedProduct(product)}
              >
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 left-3 bg-vitta-lime text-vitta-dark px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest shadow">
                    {product.tag}
                  </div>
                  <div className="absolute inset-0 bg-vitta-dark/0 group-hover:bg-vitta-dark/40 transition-all duration-300 flex items-center justify-center">
                    <span className="text-white font-bold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-vitta-dark/60 px-3 py-1 rounded-full">
                      Ver detalhes
                    </span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-sm mb-1 leading-tight line-clamp-2">{product.name}</h3>
                  <p className="text-vitta-dark font-black text-lg mb-3">{product.price}</p>
                  <a
                    href={buildWALink(product.name, product.price)}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={e => e.stopPropagation()}
                    className="w-full vitta-button vitta-button-secondary py-2 text-xs flex items-center justify-center gap-2"
                  >
                    <ShoppingBag className="w-3 h-3" /> PEDIR
                  </a>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <Search className="w-12 h-12 text-vitta-lime/40 mx-auto mb-4" />
            <p className="text-gray-500 font-bold text-lg mb-4">Nenhum produto encontrado</p>
            <button
              onClick={() => { setSearchQuery(''); setActiveCategory('Todos'); }}
              className="vitta-button vitta-button-primary py-2 px-6 text-sm"
            >
              Limpar filtros
            </button>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-vitta-dark text-white py-10 text-center mt-10">
        <img src={LOGO_URL} alt="Vitta Ceres" className="h-14 mx-auto mb-4" />
        <p className="text-gray-400 text-sm">Av. Bernardo Sayão, 100 — Ceres, GO &nbsp;|&nbsp; (62) 99616-1000</p>
        <p className="text-gray-500 text-xs mt-3">© {new Date().getFullYear()} Vitta Ceres. Todos os direitos reservados.</p>
      </footer>

      {/* Sticky WhatsApp banner */}
      <div
        className="fixed bottom-0 inset-x-0 z-[60] bg-vitta-dark border-t-2 border-vitta-lime transition-transform duration-300"
        style={{ transform: selectedProduct ? 'translateY(100%)' : 'translateY(0)' }}
      >
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
          <span className="text-white text-sm">🌿 Frete grátis acima de R$150 para Ceres e região</span>
          <a
            href={WA_GENERAL}
            target="_blank"
            rel="noopener noreferrer"
            className="vitta-button vitta-button-primary py-2 px-5 text-sm flex items-center gap-2 whitespace-nowrap"
          >
            <Phone className="w-4 h-4" /> WHATSAPP
          </a>
        </div>
      </div>

      {/* Product modal */}
      <AnimatePresence>
        {selectedProduct && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[70]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProduct(null)}
            />
            <motion.div
              className="fixed bottom-0 inset-x-0 md:inset-0 md:flex md:items-center md:justify-center z-[80] pointer-events-none"
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            >
              <div
                className="pointer-events-auto bg-vitta-cream rounded-t-3xl md:rounded-3xl w-full md:max-w-lg max-h-[90vh] overflow-y-auto"
                onClick={e => e.stopPropagation()}
              >
                {/* Modal header */}
                <div className="flex items-center justify-between p-5 border-b border-vitta-lime/10">
                  <span className="bg-vitta-lime text-vitta-dark px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest">
                    {selectedProduct.tag}
                  </span>
                  <button
                    onClick={() => setSelectedProduct(null)}
                    className="p-2 rounded-full hover:bg-vitta-lime/10 transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Modal body */}
                <div className="p-5">
                  <div className="aspect-square rounded-2xl overflow-hidden mb-5">
                    <img
                      src={selectedProduct.image}
                      alt={selectedProduct.name}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <h2 className="text-2xl font-bold mb-2 leading-tight">{selectedProduct.name}</h2>
                  <p className="text-3xl font-black text-vitta-lime mb-6">{selectedProduct.price}</p>
                  <a
                    href={buildWALink(selectedProduct.name, selectedProduct.price)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full vitta-button vitta-button-primary py-4 text-base flex items-center justify-center gap-3"
                  >
                    <Phone className="w-5 h-5" /> PEDIR VIA WHATSAPP
                  </a>
                  <p className="text-center text-xs text-gray-400 mt-4">
                    Atendimento via WhatsApp · Entrega em Ceres e região
                  </p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
