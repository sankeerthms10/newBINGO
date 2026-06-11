import { useState, useEffect, useRef } from 'react';
import {
  Menu,
  X,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ArrowUp,
  MapPin,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Search,
  Star,
  Award,
  Leaf,
  Flame,
  Shield,
  Smile,
} from 'lucide-react';

// ── Types ──────────────────────────────────────────────────────────────────
interface Product {
  id: number;
  name: string;
  tagline: string;
  description: string;
  flavors: string[];
  color: string;
  badge: string;
  image: string;
}

interface GalleryItem {
  id: number;
  src: string;
  alt: string;
}

// ── Data ───────────────────────────────────────────────────────────────────
const heroSlides = [
  {
    id: 1,
    title: 'ORIGINAL',
    subtitle: 'POTATO CHIPS',
    style: 'STYLE',
    bg: 'from-red-800 via-red-600 to-red-700',
    image: 'https://images.pexels.com/photos/33387/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    id: 2,
    title: 'MAD',
    subtitle: 'TRIANGULAR',
    style: 'ANGLES',
    bg: 'from-orange-800 via-orange-600 to-yellow-600',
    image: 'https://images.pexels.com/photos/1301532/pexels-photo-1301532.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    id: 3,
    title: 'TEDHE',
    subtitle: 'TWISTED CRUNCH',
    style: 'MEDHE',
    bg: 'from-red-900 via-red-700 to-orange-600',
    image: 'https://images.pexels.com/photos/115128/pexels-photo-115128.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
];

const products: Product[] = [
  {
    id: 1,
    name: 'Mad Angles',
    tagline: 'No One Can Eat Just One!',
    description: 'Unique triangular chips with bold flavors that deliver extra crunch in every bite. A revolutionary snack experience.',
    flavors: ['Achaari Masti', 'Tomato Twist', 'Nimbu Masala', 'Chilli Chatka'],
    color: 'from-yellow-400 to-orange-500',
    badge: 'BESTSELLER',
    image: 'https://images.pexels.com/photos/1301532/pexels-photo-1301532.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 2,
    name: 'Original Style',
    tagline: 'Classic Never Gets Old',
    description: 'Classic potato chips made with premium potatoes and exciting seasonings. The original taste that started it all.',
    flavors: ['Cream & Onion', 'Chilli', 'Hot & Spicy', 'Himalayan Pink Salt', 'Chilli Charged'],
    color: 'from-red-500 to-red-700',
    badge: 'ORIGINAL',
    image: 'https://images.pexels.com/photos/33387/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 3,
    name: 'Tedhe Medhe',
    tagline: 'The Fun Twisted Snack',
    description: 'Uniquely twisted snacks loved for their satisfying crunch and bold spicy taste. The snack that dares to be different.',
    flavors: ['Masala Tadka', 'Tomato', 'Noodle Style'],
    color: 'from-orange-500 to-yellow-500',
    badge: 'FUN',
    image: 'https://images.pexels.com/photos/3728265/pexels-photo-3728265.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 4,
    name: 'Potato Chips',
    tagline: 'Thin, Crispy, Irresistible',
    description: 'Thin-sliced, kettle-cooked potato chips that deliver the perfect crunch every single time.',
    flavors: ['Classic Salted', 'Masala', 'Cheese & Onion'],
    color: 'from-yellow-500 to-amber-600',
    badge: 'CRISPY',
    image: 'https://images.pexels.com/photos/115128/pexels-photo-115128.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 5,
    name: 'Nachos',
    tagline: 'Corn-Crusted Perfection',
    description: 'Corn-based crunchy nachos packed with rich seasoning. Perfect for sharing, impossible to stop.',
    flavors: ['Tomato Salsa', 'Cheese Blast', 'Original'],
    color: 'from-amber-500 to-orange-600',
    badge: 'NEW',
    image: 'https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
];

const galleryItems: GalleryItem[] = [
  { id: 1, src: 'https://images.pexels.com/photos/1301532/pexels-photo-1301532.jpeg?auto=compress&cs=tinysrgb&w=700', alt: 'Mad Angles Collection' },
  { id: 2, src: 'https://images.pexels.com/photos/33387/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=700', alt: 'Original Style Chips' },
  { id: 3, src: 'https://images.pexels.com/photos/3728265/pexels-photo-3728265.jpeg?auto=compress&cs=tinysrgb&w=700', alt: 'Tedhe Medhe Twists' },
  { id: 4, src: 'https://images.pexels.com/photos/115128/pexels-photo-115128.jpeg?auto=compress&cs=tinysrgb&w=700', alt: 'Potato Chips Range' },
  { id: 5, src: 'https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=700', alt: 'Nachos Fiesta' },
  { id: 6, src: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=700', alt: 'Bingo! Moments' },
];

const faqData = [
  { q: 'What is Bingo!?', a: 'Bingo! is one of India\'s most loved snack brands, known for bold flavors, innovative shapes, and premium quality. Every snack is crafted to deliver a unique crunch experience.' },
  { q: 'Which products are available?', a: 'Our lineup includes Mad Angles, Original Style Chips, Tedhe Medhe, Potato Chips, and Nachos — each available in multiple exciting flavors.' },
  { q: 'Where can I buy Bingo! products?', a: 'Bingo! snacks are available at supermarkets, kirana stores, convenience stores, and major online shopping platforms across India.' },
  { q: 'Are Bingo! snacks vegetarian?', a: 'Many of our products are vegetarian-friendly. Please check individual product packaging for detailed ingredient and dietary information.' },
  { q: 'What makes Bingo! unique?', a: 'Bingo! stands out for its creative flavor combinations, innovative shapes like the triangular Mad Angles, and its commitment to delivering bold, satisfying crunch in every bite.' },
];

// ── Logo Component ─────────────────────────────────────────────────────────
function BingoLogo({ size = 'md' }: { size?: 'sm' | 'md' | 'lg' }) {
  const dims = size === 'sm' ? 44 : size === 'lg' ? 72 : 56;
  const font = size === 'sm' ? 'text-xs' : size === 'lg' ? 'text-xl' : 'text-sm';
  return (
    <div
      className="relative flex-shrink-0 cursor-pointer"
      style={{ width: dims, height: dims }}
    >
      <svg viewBox="0 0 100 100" width={dims} height={dims}>
        <circle cx="50" cy="50" r="48" fill="#FFD700" stroke="#c8102e" strokeWidth="4" />
        <circle cx="50" cy="50" r="36" fill="#c8102e" />
        <text x="50" y="46" textAnchor="middle" fill="white" fontSize="22" fontWeight="900" fontFamily="Arial Black, sans-serif">BINGO</text>
        <text x="50" y="64" textAnchor="middle" fill="#FFD700" fontSize="26" fontWeight="900" fontFamily="Arial Black, sans-serif">!</text>
      </svg>
      {size === 'lg' && (
        <span className={`sr-only ${font}`}>Bingo!</span>
      )}
    </div>
  );
}

// ── Main App ───────────────────────────────────────────────────────────────
export default function App() {
  const [navOpen, setNavOpen] = useState(false);
  const [snacksOpen, setSnacksOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showTop, setShowTop] = useState(false);
  const [heroIndex, setHeroIndex] = useState(0);
  const [lightbox, setLightbox] = useState<string | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeProduct, setActiveProduct] = useState(0);
  const [searchOpen, setSearchOpen] = useState(false);
  const heroTimer = useRef<ReturnType<typeof setInterval> | null>(null);
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' });

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);
      setShowTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Auto-advance hero
  useEffect(() => {
    heroTimer.current = setInterval(() => {
      setHeroIndex((i) => (i + 1) % heroSlides.length);
    }, 5000);
    return () => { if (heroTimer.current) clearInterval(heroTimer.current); };
  }, []);

  const goTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setNavOpen(false);
    setSnacksOpen(false);
  };

  const prevHero = () => { if (heroTimer.current) clearInterval(heroTimer.current); setHeroIndex((i) => (i - 1 + heroSlides.length) % heroSlides.length); };
  const nextHero = () => { if (heroTimer.current) clearInterval(heroTimer.current); setHeroIndex((i) => (i + 1) % heroSlides.length); };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you! We will get back to you soon.');
    setForm({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  const slide = heroSlides[heroIndex];

  return (
    <div className="min-h-screen bg-white font-sans">

      {/* ── HEADER ─────────────────────────────────────────────────────── */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-black/95 shadow-2xl backdrop-blur-md' : 'bg-black'}`}>
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">

            {/* Logo */}
            <div onClick={() => goTo('home')} className="cursor-pointer">
              <BingoLogo size="md" />
            </div>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {/* Snacks Corner Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setSnacksOpen(true)}
                onMouseLeave={() => setSnacksOpen(false)}
              >
                <button
                  onClick={() => goTo('products')}
                  className="flex items-center gap-1 px-4 py-2 text-white hover:text-yellow-400 font-semibold text-sm tracking-wide transition-colors"
                >
                  Snacks Corner <ChevronDown className="w-4 h-4" />
                </button>
                {snacksOpen && (
                  <div className="absolute top-full left-0 bg-white rounded-lg shadow-2xl py-2 min-w-52 border-t-4 border-red-600 z-50">
                    {products.map((p) => (
                      <button
                        key={p.id}
                        onClick={() => { setActiveProduct(p.id - 1); goTo('products'); }}
                        className="flex items-center gap-3 w-full px-5 py-3 text-gray-700 hover:bg-red-50 hover:text-red-700 transition-colors text-sm font-medium"
                      >
                        <span className={`w-2 h-2 rounded-full bg-gradient-to-r ${p.color}`} />
                        {p.name}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <button onClick={() => goTo('about')} className="px-4 py-2 text-white hover:text-yellow-400 font-semibold text-sm tracking-wide transition-colors">Our Story</button>
              <button onClick={() => goTo('quality')} className="px-4 py-2 text-white hover:text-yellow-400 font-semibold text-sm tracking-wide transition-colors">All About Quality</button>
              <button onClick={() => goTo('gallery')} className="px-4 py-2 text-white hover:text-yellow-400 font-semibold text-sm tracking-wide transition-colors">Gallery</button>
              <button onClick={() => goTo('faq')} className="px-4 py-2 text-white hover:text-yellow-400 font-semibold text-sm tracking-wide transition-colors">Know More</button>
              <button onClick={() => goTo('contact')} className="px-4 py-2 text-white hover:text-yellow-400 font-semibold text-sm tracking-wide transition-colors">Contact Us</button>

              {/* Search */}
              <button onClick={() => setSearchOpen(!searchOpen)} className="ml-2 p-2 text-white hover:text-yellow-400 transition-colors">
                <Search className="w-5 h-5" />
              </button>
            </nav>

            {/* Mobile Controls */}
            <div className="lg:hidden flex items-center gap-3">
              <button onClick={() => setSearchOpen(!searchOpen)} className="text-white">
                <Search className="w-5 h-5" />
              </button>
              <button onClick={() => setNavOpen(!navOpen)} className="text-white">
                {navOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Search Bar */}
          {searchOpen && (
            <div className="pb-3 px-1">
              <input
                autoFocus
                type="text"
                placeholder="Search products, flavors..."
                className="w-full px-4 py-2 rounded-lg bg-white/10 text-white placeholder-white/60 border border-white/20 focus:outline-none focus:border-yellow-400"
              />
            </div>
          )}

          {/* Mobile Nav */}
          {navOpen && (
            <nav className="lg:hidden border-t border-white/10 pb-4">
              <button onClick={() => goTo('home')} className="block w-full text-left px-4 py-3 text-white hover:bg-white/10 text-sm font-semibold">Home</button>
              <button onClick={() => goTo('products')} className="block w-full text-left px-4 py-3 text-white hover:bg-white/10 text-sm font-semibold">Snacks Corner</button>
              {products.map((p) => (
                <button key={p.id} onClick={() => goTo('products')} className="block w-full text-left px-8 py-2 text-yellow-300 hover:bg-white/10 text-xs">
                  {p.name}
                </button>
              ))}
              <button onClick={() => goTo('about')} className="block w-full text-left px-4 py-3 text-white hover:bg-white/10 text-sm font-semibold">Our Story</button>
              <button onClick={() => goTo('quality')} className="block w-full text-left px-4 py-3 text-white hover:bg-white/10 text-sm font-semibold">All About Quality</button>
              <button onClick={() => goTo('gallery')} className="block w-full text-left px-4 py-3 text-white hover:bg-white/10 text-sm font-semibold">Gallery</button>
              <button onClick={() => goTo('faq')} className="block w-full text-left px-4 py-3 text-white hover:bg-white/10 text-sm font-semibold">Know More</button>
              <button onClick={() => goTo('contact')} className="block w-full text-left px-4 py-3 text-white hover:bg-white/10 text-sm font-semibold">Contact Us</button>
            </nav>
          )}
        </div>
      </header>

      {/* ── HERO SLIDER ──────────────────────────────────────────────────── */}
      <section id="home" className="pt-16 lg:pt-20">
        <div className={`relative bg-gradient-to-br ${slide.bg} overflow-hidden`} style={{ minHeight: '88vh' }}>

          {/* Decorative diagonal stripes */}
          <div className="absolute inset-0 opacity-10">
            {[...Array(12)].map((_, i) => (
              <div
                key={i}
                className="absolute bg-white"
                style={{
                  width: '2px',
                  height: '200%',
                  left: `${i * 10}%`,
                  top: '-50%',
                  transform: 'rotate(15deg)',
                }}
              />
            ))}
          </div>

          {/* Floating chip decorations */}
          <div className="absolute top-16 left-8 w-20 h-20 opacity-30 animate-bounce" style={{ animationDelay: '0s', animationDuration: '3s' }}>
            <img src="https://images.pexels.com/photos/33387/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=100" alt="" className="rounded-full object-cover w-full h-full" />
          </div>
          <div className="absolute top-32 right-12 w-16 h-16 opacity-25 animate-bounce" style={{ animationDelay: '1s', animationDuration: '4s' }}>
            <img src="https://images.pexels.com/photos/115128/pexels-photo-115128.jpeg?auto=compress&cs=tinysrgb&w=100" alt="" className="rounded-full object-cover w-full h-full" />
          </div>
          <div className="absolute bottom-24 left-16 w-12 h-12 opacity-20 animate-bounce" style={{ animationDelay: '2s', animationDuration: '3.5s' }}>
            <img src="https://images.pexels.com/photos/1301532/pexels-photo-1301532.jpeg?auto=compress&cs=tinysrgb&w=100" alt="" className="rounded-full object-cover w-full h-full" />
          </div>

          <div className="max-w-7xl mx-auto px-4 lg:px-8 flex flex-col lg:flex-row items-center justify-between py-16 lg:py-24 relative z-10 gap-8">

            {/* Text */}
            <div className="text-center lg:text-left max-w-xl">
              {/* BINGO! badge */}
              <div className="inline-flex items-center gap-3 mb-6">
                <BingoLogo size="lg" />
                <span className="text-yellow-400 text-xl font-black tracking-widest">®</span>
              </div>

              <div className="mb-2">
                <span className="text-yellow-400 text-sm font-bold tracking-[0.3em] uppercase">Introducing</span>
              </div>
              <h1 className="text-6xl lg:text-8xl font-black text-white leading-none tracking-tight drop-shadow-2xl">
                {slide.title}
              </h1>
              <div className="flex items-center gap-3 my-2">
                <div className="h-px bg-yellow-400 flex-1 max-w-16" />
                <span className="text-yellow-300 text-xs tracking-[0.4em] font-bold uppercase">{slide.subtitle}</span>
                <div className="h-px bg-yellow-400 flex-1 max-w-16" />
              </div>
              <h2 className="text-4xl lg:text-6xl font-black text-yellow-400 leading-none tracking-wider drop-shadow-xl">
                {slide.style}
              </h2>
              <p className="text-white/80 mt-6 text-lg leading-relaxed max-w-md">
                Bold flavors. Unique textures. Unforgettable crunch. Every bite is an adventure.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <button
                  onClick={() => goTo('products')}
                  className="bg-yellow-400 hover:bg-yellow-300 text-black font-black px-8 py-4 rounded-full text-sm tracking-widest uppercase transition-all hover:scale-105 shadow-xl"
                >
                  Explore All Snacks
                </button>
                <button
                  onClick={() => goTo('about')}
                  className="border-2 border-white/50 hover:border-yellow-400 text-white hover:text-yellow-400 font-bold px-8 py-4 rounded-full text-sm tracking-widest uppercase transition-all"
                >
                  Our Story
                </button>
              </div>
            </div>

            {/* Hero Product Image */}
            <div className="relative flex-shrink-0">
              <div className="w-72 h-72 lg:w-[28rem] lg:h-[28rem] rounded-full overflow-hidden border-8 border-yellow-400/40 shadow-2xl">
                <img
                  key={heroIndex}
                  src={slide.image}
                  alt="Featured product"
                  className="w-full h-full object-cover scale-110 transition-all duration-700"
                />
              </div>
              <div className="absolute -top-4 -right-4 bg-red-600 text-white font-black text-lg w-20 h-20 rounded-full flex items-center justify-center shadow-xl border-4 border-yellow-400">
                NEW!
              </div>
            </div>
          </div>

          {/* Carousel Controls */}
          <button onClick={prevHero} className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/60 text-white p-3 rounded-full transition-all z-20">
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button onClick={nextHero} className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/60 text-white p-3 rounded-full transition-all z-20">
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dots */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
            {heroSlides.map((_, i) => (
              <button
                key={i}
                onClick={() => setHeroIndex(i)}
                className={`transition-all ${i === heroIndex ? 'w-8 bg-yellow-400' : 'w-2 bg-white/50 hover:bg-white'} h-2 rounded-full`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── TICKER STRIP ─────────────────────────────────────────────────── */}
      <div className="bg-yellow-400 py-3 overflow-hidden">
        <div className="flex animate-pulse">
          <span className="whitespace-nowrap text-black font-black text-sm tracking-widest px-8">
            ★ MAD ANGLES &nbsp;&nbsp; ★ ORIGINAL STYLE &nbsp;&nbsp; ★ TEDHE MEDHE &nbsp;&nbsp; ★ POTATO CHIPS &nbsp;&nbsp; ★ NACHOS &nbsp;&nbsp; ★ BOLD FLAVORS &nbsp;&nbsp; ★ IRRESISTIBLE CRUNCH &nbsp;&nbsp; ★ MAD ANGLES &nbsp;&nbsp; ★ ORIGINAL STYLE &nbsp;&nbsp; ★ TEDHE MEDHE &nbsp;&nbsp; ★ POTATO CHIPS &nbsp;&nbsp; ★ NACHOS
          </span>
        </div>
      </div>

      {/* ── PRODUCTS ─────────────────────────────────────────────────────── */}
      <section id="products" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-red-600 text-sm font-bold tracking-[0.3em] uppercase">Snacks Corner</span>
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mt-2 mb-4">Our Product Range</h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              From crispy chips to crunchy nachos — discover a snack for every mood, every moment, every craving.
            </p>
          </div>

          {/* Tab Selector */}
          <div className="flex flex-wrap gap-2 justify-center mb-12">
            {products.map((p, i) => (
              <button
                key={p.id}
                onClick={() => setActiveProduct(i)}
                className={`px-5 py-2 rounded-full font-bold text-sm tracking-wide transition-all ${
                  activeProduct === i
                    ? 'bg-red-600 text-white shadow-lg scale-105'
                    : 'bg-white text-gray-600 hover:bg-red-50 hover:text-red-600 border border-gray-200'
                }`}
              >
                {p.name}
              </button>
            ))}
          </div>

          {/* Active Product Feature */}
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden mb-16">
            <div className="grid lg:grid-cols-2">
              <div className="relative overflow-hidden">
                <img
                  src={products[activeProduct].image}
                  alt={products[activeProduct].name}
                  className="w-full h-80 lg:h-full object-cover"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${products[activeProduct].color} opacity-40`} />
                <span className="absolute top-6 left-6 bg-red-600 text-white font-black text-xs px-4 py-2 rounded-full tracking-widest shadow-lg">
                  {products[activeProduct].badge}
                </span>
              </div>
              <div className="p-10 lg:p-14 flex flex-col justify-center">
                <p className="text-red-500 font-bold text-sm tracking-widest uppercase mb-3">
                  {products[activeProduct].tagline}
                </p>
                <h3 className="text-4xl font-black text-gray-900 mb-4">{products[activeProduct].name}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">{products[activeProduct].description}</p>
                <div className="mb-8">
                  <p className="text-xs font-bold text-gray-500 tracking-widest uppercase mb-3">Available Flavors</p>
                  <div className="flex flex-wrap gap-2">
                    {products[activeProduct].flavors.map((flavor) => (
                      <span key={flavor} className={`bg-gradient-to-r ${products[activeProduct].color} text-white text-xs font-bold px-3 py-1 rounded-full`}>
                        {flavor}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex gap-4">
                  <button className="bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-3 rounded-full transition-all hover:scale-105 shadow-lg text-sm tracking-wide">
                    Buy Now
                  </button>
                  <button className="border-2 border-gray-200 hover:border-red-600 text-gray-700 hover:text-red-600 font-bold px-8 py-3 rounded-full transition-all text-sm tracking-wide">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* All Product Cards Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
            {products.map((product, i) => (
              <div
                key={product.id}
                onClick={() => setActiveProduct(i)}
                className={`group cursor-pointer bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 ${activeProduct === i ? 'ring-2 ring-red-500' : ''}`}
              >
                <div className="relative h-48 overflow-hidden">
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className={`absolute inset-0 bg-gradient-to-t ${product.color} opacity-20 group-hover:opacity-40 transition-opacity`} />
                  <span className="absolute top-3 left-3 bg-black/70 text-white text-xs font-black px-2 py-1 rounded-full">
                    {product.badge}
                  </span>
                </div>
                <div className="p-4">
                  <h4 className="font-black text-gray-900 mb-1">{product.name}</h4>
                  <p className="text-xs text-gray-500 line-clamp-2">{product.tagline}</p>
                  <div className="mt-3 flex items-center gap-1">
                    {[...Array(5)].map((_, j) => <Star key={j} className="w-3 h-3 fill-yellow-400 text-yellow-400" />)}
                    <span className="text-xs text-gray-500 ml-1">5.0</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OUR STORY ────────────────────────────────────────────────────── */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Our Story"
                className="rounded-3xl shadow-2xl w-full h-96 lg:h-[520px] object-cover"
              />
              <div className="absolute -bottom-6 -right-6 bg-red-600 text-white p-8 rounded-3xl shadow-2xl hidden lg:block">
                <p className="text-5xl font-black">15+</p>
                <p className="text-sm font-bold tracking-widest">YEARS OF<br />BOLD FLAVOR</p>
              </div>
            </div>
            <div>
              <span className="text-red-600 text-sm font-bold tracking-[0.3em] uppercase">Our Story</span>
              <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mt-2 mb-6 leading-tight">
                Born to be <span className="text-red-600">Bold,</span><br />Made to Crunch
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Bingo! burst onto the snacking scene with one mission: to give snack lovers something they had never experienced before. Not just a chip — an adventure. From the iconic triangular Mad Angles to the addictive Tedhe Medhe twists, every product is a testament to our obsession with innovation.
              </p>
              <p className="text-gray-600 leading-relaxed mb-10">
                Today, Bingo! is one of India's most loved snack brands, available in hundreds of flavors across thousands of stores. But the spirit remains the same — bold, unapologetic, and always, always crunchy.
              </p>

              {/* Timeline */}
              <div className="space-y-4">
                {[
                  { year: '2007', event: 'Bingo! launches, disrupting the snack industry' },
                  { year: '2010', event: 'Mad Angles becomes India\'s favorite triangular chip' },
                  { year: '2015', event: 'Expanded to 50+ flavor variants nationwide' },
                  { year: '2024', event: 'Loved by millions, available everywhere' },
                ].map((item) => (
                  <div key={item.year} className="flex items-start gap-4">
                    <span className="bg-red-600 text-white font-black text-xs px-3 py-1 rounded-full mt-0.5 flex-shrink-0">{item.year}</span>
                    <p className="text-gray-700 text-sm">{item.event}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── QUALITY ──────────────────────────────────────────────────────── */}
      <section id="quality" className="py-20 bg-black text-white relative overflow-hidden">
        {/* Background texture */}
        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full" style={{ backgroundImage: 'repeating-linear-gradient(45deg, white 0, white 1px, transparent 0, transparent 50%)', backgroundSize: '20px 20px' }} />
        </div>

        <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <span className="text-yellow-400 text-sm font-bold tracking-[0.3em] uppercase">All About Quality</span>
            <h2 className="text-4xl lg:text-5xl font-black mt-2 mb-4">Why Bingo! is Different</h2>
            <p className="text-gray-400 max-w-xl mx-auto">We don't just make snacks. We create moments. Every chip, every crunch, crafted with uncompromising standards.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Leaf, title: 'Premium Ingredients', desc: 'Sourced from the best farms for maximum freshness and flavor.', color: 'text-green-400' },
              { icon: Flame, title: 'Bold Innovation', desc: 'Flavor labs working non-stop to bring you the next big crunch.', color: 'text-orange-400' },
              { icon: Shield, title: 'Quality Assured', desc: 'Rigorous quality checks at every step of production.', color: 'text-blue-400' },
              { icon: Smile, title: 'Joy Guaranteed', desc: 'If it\'s not delicious, we haven\'t done our job.', color: 'text-yellow-400' },
            ].map((item) => (
              <div key={item.title} className="bg-white/5 hover:bg-white/10 border border-white/10 hover:border-yellow-400/40 rounded-2xl p-8 transition-all group">
                <item.icon className={`w-10 h-10 ${item.color} mb-5 group-hover:scale-110 transition-transform`} />
                <h4 className="font-black text-xl mb-3">{item.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            {[
              { num: '50+', label: 'Unique Flavors' },
              { num: '5', label: 'Product Lines' },
              { num: '10M+', label: 'Happy Snackers' },
              { num: '28', label: 'States Served' },
            ].map((stat) => (
              <div key={stat.label} className="text-center border border-yellow-400/20 rounded-2xl p-6">
                <p className="text-4xl lg:text-5xl font-black text-yellow-400 mb-2">{stat.num}</p>
                <p className="text-gray-400 text-sm font-semibold tracking-widest uppercase">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GALLERY ──────────────────────────────────────────────────────── */}
      <section id="gallery" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-red-600 text-sm font-bold tracking-[0.3em] uppercase">Visual Feast</span>
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mt-2 mb-4">Gallery</h2>
            <p className="text-gray-500 max-w-xl mx-auto">A glimpse into the world of Bingo! — vibrant flavors, bold packaging, and pure snacking joy.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryItems.map((item, i) => (
              <div
                key={item.id}
                onClick={() => setLightbox(item.src)}
                className={`relative overflow-hidden rounded-2xl cursor-pointer group shadow-lg ${i === 0 ? 'md:col-span-2 md:row-span-2' : ''}`}
                style={{ height: i === 0 ? 420 : 200 }}
              >
                <img src={item.src} alt={item.alt} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />
                <div className="absolute bottom-4 left-4 right-4 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <p className="text-white font-black text-sm">{item.alt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4" onClick={() => setLightbox(null)}>
          <button onClick={() => setLightbox(null)} className="absolute top-4 right-4 text-white bg-white/10 rounded-full p-3 hover:bg-white/20 transition-colors">
            <X className="w-7 h-7" />
          </button>
          <img src={lightbox} alt="" className="max-w-full max-h-[90vh] rounded-2xl shadow-2xl" onClick={(e) => e.stopPropagation()} />
        </div>
      )}

      {/* ── FAQ ──────────────────────────────────────────────────────────── */}
      <section id="faq" className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-red-600 text-sm font-bold tracking-[0.3em] uppercase">Know More</span>
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mt-2 mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-500">Everything you wanted to know about Bingo!</p>
          </div>

          <div className="space-y-3">
            {faqData.map((item, i) => (
              <div key={i} className={`rounded-2xl border transition-all ${openFaq === i ? 'border-red-300 bg-red-50' : 'border-gray-200 bg-white hover:border-red-200'}`}>
                <button
                  className="w-full flex items-center justify-between px-6 py-5 text-left"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className="font-black text-gray-900 pr-4">{item.q}</span>
                  <ChevronDown className={`w-5 h-5 text-red-600 flex-shrink-0 transition-transform duration-300 ${openFaq === i ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-5">
                    <p className="text-gray-600 leading-relaxed">{item.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ──────────────────────────────────────────────────────── */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-red-600 text-sm font-bold tracking-[0.3em] uppercase">Get In Touch</span>
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mt-2 mb-4">Contact Us</h2>
            <p className="text-gray-500">We'd love to hear from you. Reach out any time.</p>
          </div>

          <div className="grid lg:grid-cols-5 gap-10">
            {/* Form — spans 3 cols */}
            <div className="lg:col-span-3 bg-white rounded-3xl shadow-xl p-8 lg:p-10">
              <h3 className="text-2xl font-black text-gray-900 mb-8">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-gray-500 tracking-widest uppercase mb-2">Full Name</label>
                    <input type="text" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-red-500 focus:outline-none transition-colors text-sm" placeholder="Your name" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-500 tracking-widest uppercase mb-2">Email</label>
                    <input type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-red-500 focus:outline-none transition-colors text-sm" placeholder="you@example.com" />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-gray-500 tracking-widest uppercase mb-2">Phone</label>
                    <input type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-red-500 focus:outline-none transition-colors text-sm" placeholder="+91 XXXXX XXXXX" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-500 tracking-widest uppercase mb-2">Subject</label>
                    <input type="text" required value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-red-500 focus:outline-none transition-colors text-sm" placeholder="How can we help?" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-500 tracking-widest uppercase mb-2">Message</label>
                  <textarea required rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-red-500 focus:outline-none transition-colors text-sm resize-none" placeholder="Tell us what's on your mind..." />
                </div>
                <button type="submit"
                  className="w-full bg-red-600 hover:bg-red-700 text-white font-black py-4 rounded-xl transition-all hover:scale-[1.02] shadow-lg text-sm tracking-widest uppercase">
                  Send Message
                </button>
              </form>
            </div>

            {/* Info — spans 2 cols */}
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-black text-white rounded-3xl p-8">
                <h3 className="text-xl font-black mb-6">Contact Information</h3>
                <div className="space-y-5">
                  {[
                    { icon: Mail, label: 'Email Us', value: 'support@bingosnacks.com', color: 'text-yellow-400' },
                    { icon: Phone, label: 'Call Us', value: '+91 1800-XXX-XXXX', color: 'text-green-400' },
                    { icon: MapPin, label: 'Visit Us', value: '123 Snack Street, Mumbai 400001', color: 'text-red-400' },
                  ].map((info) => (
                    <div key={info.label} className="flex items-start gap-4">
                      <div className="bg-white/10 rounded-xl p-3 flex-shrink-0">
                        <info.icon className={`w-5 h-5 ${info.color}`} />
                      </div>
                      <div>
                        <p className="text-gray-400 text-xs font-bold tracking-widest uppercase">{info.label}</p>
                        <p className="text-white font-semibold text-sm mt-1">{info.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex gap-3 mt-8">
                  {[Facebook, Twitter, Instagram, Youtube].map((Icon, i) => (
                    <a key={i} href="#" className="bg-white/10 hover:bg-yellow-400 hover:text-black text-white p-2.5 rounded-xl transition-all">
                      <Icon className="w-4 h-4" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="bg-gray-200 rounded-3xl h-48 flex flex-col items-center justify-center gap-2">
                <MapPin className="w-10 h-10 text-gray-500" />
                <p className="text-gray-500 font-semibold text-sm">Google Maps Placeholder</p>
              </div>

              {/* Award badge */}
              <div className="bg-gradient-to-br from-yellow-400 to-orange-500 rounded-3xl p-6 text-black text-center">
                <Award className="w-10 h-10 mx-auto mb-2" />
                <p className="font-black text-lg">India's #1 Snack Brand</p>
                <p className="text-sm font-semibold opacity-75">Loved by millions since 2007</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ───────────────────────────────────────────────────────── */}
      <footer className="bg-black text-white pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">

            {/* Brand */}
            <div>
              <BingoLogo size="lg" />
              <p className="text-gray-400 mt-5 text-sm leading-relaxed">
                Crunchy, Bold, and Full of Flavor. India's favorite snack brand since 2007.
              </p>
              <div className="flex gap-3 mt-5">
                {[Facebook, Twitter, Instagram, Youtube].map((Icon, i) => (
                  <a key={i} href="#" className="bg-white/10 hover:bg-red-600 p-2.5 rounded-lg transition-all">
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h5 className="font-black text-sm tracking-widest uppercase mb-5 text-yellow-400">Quick Links</h5>
              <ul className="space-y-3">
                {[
                  { label: 'Home', id: 'home' },
                  { label: 'Snacks Corner', id: 'products' },
                  { label: 'Our Story', id: 'about' },
                  { label: 'Gallery', id: 'gallery' },
                  { label: 'Contact Us', id: 'contact' },
                ].map((link) => (
                  <li key={link.id}>
                    <button onClick={() => goTo(link.id)} className="text-gray-400 hover:text-yellow-400 text-sm transition-colors">
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Products */}
            <div>
              <h5 className="font-black text-sm tracking-widest uppercase mb-5 text-yellow-400">Our Products</h5>
              <ul className="space-y-3">
                {products.map((p) => (
                  <li key={p.id}>
                    <button onClick={() => goTo('products')} className="text-gray-400 hover:text-yellow-400 text-sm transition-colors">
                      {p.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h5 className="font-black text-sm tracking-widest uppercase mb-5 text-yellow-400">Stay Updated</h5>
              <p className="text-gray-400 text-sm mb-4">Get the latest flavor alerts and offers.</p>
              <div className="flex flex-col gap-2">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 bg-white/10 text-white placeholder-gray-500 rounded-xl border border-white/10 focus:border-yellow-400 focus:outline-none text-sm"
                />
                <button className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded-xl text-sm tracking-widest uppercase transition-all">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 text-gray-500 text-xs">
            <p>This website is created for educational purposes only.</p>
            <p>© 2024 Bingo! Chips. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Back to top */}
      {showTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 right-6 bg-red-600 hover:bg-red-700 text-white p-3.5 rounded-full shadow-2xl hover:scale-110 transition-all z-40"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </div>
  );
}
