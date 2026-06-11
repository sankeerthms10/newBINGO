import { useState, useEffect } from 'react';
import {
  Menu,
  X,
  ChevronDown,
  ArrowUp,
  MapPin,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Heart,
  Star,
  Zap,
  Award,
  Users,
} from 'lucide-react';

// Product data
const products = [
  {
    id: 1,
    name: 'Mad Angles',
    description: 'Unique triangular chips with bold flavors and extra crunch.',
    fullDescription: 'Triangular chips with unique shapes and bold flavors that deliver extra crunch in every bite.',
    image: 'https://images.pexels.com/photos/1301532/pexels-photo-1301532.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    id: 2,
    name: 'Original Style Chips',
    description: 'Classic potato chips available in exciting flavors.',
    fullDescription: 'Classic potato chips made with exciting seasonings and delicious flavors.',
    image: 'https://images.pexels.com/photos/33387/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    id: 3,
    name: 'Tedhe Medhe',
    description: 'Fun twisted snacks with a spicy and crunchy taste.',
    fullDescription: 'A fun twisted snack loved for its crunchy texture and spicy taste.',
    image: 'https://images.pexels.com/photos/3728265/pexels-photo-3728265.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    id: 4,
    name: 'Potato Chips',
    description: 'Thin and crispy potato chips loved by snack lovers.',
    fullDescription: 'Thin, crispy potato chips available in a variety of mouth-watering flavors.',
    image: 'https://images.pexels.com/photos/115128/pexels-photo-115128.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    id: 5,
    name: 'Nachos',
    description: 'Crunchy corn-based nachos packed with delicious seasoning.',
    fullDescription: 'Corn-based crunchy nachos packed with rich and tasty seasonings.',
    image: 'https://images.pexels.com/photos/3728265/pexels-photo-3728265.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
];

// Gallery images
const galleryImages = [
  { id: 1, src: 'https://images.pexels.com/photos/1301532/pexels-photo-1301532.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Bingo! Mad Angles' },
  { id: 2, src: 'https://images.pexels.com/photos/33387/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600', alt: 'Bingo! Classic Chips' },
  { id: 3, src: 'https://images.pexels.com/photos/3728265/pexels-photo-3728265.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Bingo! Snacks Collection' },
  { id: 4, src: 'https://images.pexels.com/photos/115128/pexels-photo-115128.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Bingo! Potato Chips' },
  { id: 5, src: 'https://images.pexels.com/photos/1301532/pexels-photo-1301532.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Bingo! Product Range' },
  { id: 6, src: 'https://images.pexels.com/photos/33387/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600', alt: 'Bingo! Flavors' },
];

// FAQ data
const faqData = [
  {
    question: 'What is Bingo!?',
    answer: 'Bingo! is a popular snack brand known for innovative chips and crunchy snacks.',
  },
  {
    question: 'Which products are available?',
    answer: 'Mad Angles, Original Style Chips, Tedhe Medhe, Potato Chips, and Nachos.',
  },
  {
    question: 'Where can I buy Bingo! products?',
    answer: 'Available in supermarkets, local stores, and online shopping platforms.',
  },
  {
    question: 'Are Bingo! snacks vegetarian?',
    answer: 'Product information may vary. Refer to product packaging for details.',
  },
  {
    question: 'What makes Bingo! unique?',
    answer: 'Its creative flavors, innovative shapes, and exciting crunch.',
  },
];

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  // Handle scroll for back-to-top button
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll to section
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
    setIsProductsOpen(false);
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for contacting us! We will get back to you soon.');
    setContactForm({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-orange-50">
      {/* Header / Navigation */}
      <header className="fixed top-0 left-0 right-0 bg-gradient-to-r from-red-600 to-orange-500 shadow-lg z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <div
              onClick={() => scrollToSection('home')}
              className="cursor-pointer flex items-center"
            >
              <span className="text-3xl md:text-4xl font-extrabold text-white tracking-tight drop-shadow-lg">
                Bingo!
              </span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <button onClick={() => scrollToSection('home')} className="text-white hover:text-yellow-200 font-medium transition-colors">
                Home
              </button>

              {/* Products Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setIsProductsOpen(true)}
                onMouseLeave={() => setIsProductsOpen(false)}
              >
                <button
                  onClick={() => scrollToSection('products')}
                  className="text-white hover:text-yellow-200 font-medium transition-colors flex items-center gap-1"
                >
                  Products <ChevronDown className="w-4 h-4" />
                </button>

                {isProductsOpen && (
                  <div className="absolute top-full left-0 bg-white rounded-lg shadow-xl py-2 min-w-48 mt-2">
                    {products.map((product) => (
                      <button
                        key={product.id}
                        onClick={() => scrollToSection('products')}
                        className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-orange-100 hover:text-orange-600 transition-colors"
                      >
                        {product.name}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <button onClick={() => scrollToSection('about')} className="text-white hover:text-yellow-200 font-medium transition-colors">
                About
              </button>
              <button onClick={() => scrollToSection('gallery')} className="text-white hover:text-yellow-200 font-medium transition-colors">
                Gallery
              </button>
              <button onClick={() => scrollToSection('faq')} className="text-white hover:text-yellow-200 font-medium transition-colors">
                FAQ
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-white hover:text-yellow-200 font-medium transition-colors">
                Contact
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden text-white p-2"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="lg:hidden bg-gradient-to-b from-red-600 to-orange-500 pb-4">
              <button onClick={() => scrollToSection('home')} className="block w-full text-left px-4 py-2 text-white hover:bg-white/10">
                Home
              </button>
              <button onClick={() => scrollToSection('products')} className="block w-full text-left px-4 py-2 text-white hover:bg-white/10">
                Products
              </button>
              {products.map((product) => (
                <button
                  key={product.id}
                  onClick={() => scrollToSection('products')}
                  className="block w-full text-left px-8 py-2 text-yellow-100 hover:bg-white/10 text-sm"
                >
                  {product.name}
                </button>
              ))}
              <button onClick={() => scrollToSection('about')} className="block w-full text-left px-4 py-2 text-white hover:bg-white/10">
                About
              </button>
              <button onClick={() => scrollToSection('gallery')} className="block w-full text-left px-4 py-2 text-white hover:bg-white/10">
                Gallery
              </button>
              <button onClick={() => scrollToSection('faq')} className="block w-full text-left px-4 py-2 text-white hover:bg-white/10">
                FAQ
              </button>
              <button onClick={() => scrollToSection('contact')} className="block w-full text-left px-4 py-2 text-white hover:bg-white/10">
                Contact
              </button>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-16 md:pt-20">
        <div className="relative h-[70vh] md:h-[85vh] overflow-hidden">
          <img
            src="https://images.pexels.com/photos/1301532/pexels-photo-1301532.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Bingo! Chips"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center px-4 max-w-4xl">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-4 drop-shadow-2xl animate-pulse">
                Welcome to the World of Bingo!
              </h1>
              <p className="text-xl md:text-2xl lg:text-3xl text-yellow-300 mb-8 font-semibold">
                Crunchy, Bold, and Full of Flavor
              </p>
              <p className="text-white text-lg mb-8 max-w-2xl mx-auto">
                Discover premium quality snacks that bring joy to every moment.
                From crispy chips to flavorful nachos, Bingo! has something for everyone.
              </p>
              <button
                onClick={() => scrollToSection('products')}
                className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                Explore Products
              </button>
            </div>
          </div>
        </div>

        {/* Featured Products */}
        <div className="max-w-7xl mx-auto px-4 py-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-4">
            Featured Products
          </h2>
          <p className="text-center text-gray-600 mb-12">Discover our amazing range of snacks</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer"
                onClick={() => scrollToSection('products')}
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg text-gray-800 mb-2">{product.name}</h3>
                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">{product.description}</p>
                  <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-lg font-medium transition-colors">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-16 bg-gradient-to-b from-orange-50 to-red-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">Our Products</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Each product is crafted with love and the finest ingredients to deliver an unforgettable snacking experience
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-2xl shadow-xl overflow-hidden group hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">{product.name}</h3>
                  <p className="text-gray-600 mb-4">{product.fullDescription}</p>
                  <button className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-red-600 hover:to-orange-600 transition-all shadow-lg hover:shadow-xl">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">About Bingo!</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            A brand that has become synonymous with innovative snacking
          </p>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <img
                src="https://images.pexels.com/photos/3728265/pexels-photo-3728265.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="About Bingo!"
                className="rounded-2xl shadow-2xl"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-orange-600 mb-4">Our Story</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Bingo! has established itself as one of India's most beloved snack brands,
                known for its innovative flavors and unique product shapes. From the iconic
                Mad Angles to the crowd-favorite Tedhe Medhe, each product is crafted to
                deliver an unforgettable snacking experience.
              </p>
              <p className="text-gray-700 leading-relaxed">
                With a focus on quality ingredients and bold flavors, Bingo! continues to
                push the boundaries of what a snack can be. Our commitment to innovation
                has made us a household name across the country.
              </p>
            </div>
          </div>

          {/* Why Choose Bingo */}
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-8">Why Choose Bingo!</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            <div className="bg-gradient-to-br from-orange-100 to-yellow-100 p-6 rounded-xl text-center hover:shadow-lg transition-shadow">
              <div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-bold text-gray-800 mb-2">Innovative Flavors</h4>
              <p className="text-gray-600 text-sm">Unique taste experiences in every bite</p>
            </div>

            <div className="bg-gradient-to-br from-red-100 to-orange-100 p-6 rounded-xl text-center hover:shadow-lg transition-shadow">
              <div className="bg-red-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-bold text-gray-800 mb-2">Premium Quality</h4>
              <p className="text-gray-600 text-sm">High-quality ingredients sourced carefully</p>
            </div>

            <div className="bg-gradient-to-br from-yellow-100 to-orange-100 p-6 rounded-xl text-center hover:shadow-lg transition-shadow">
              <div className="bg-yellow-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-bold text-gray-800 mb-2">Wide Variety</h4>
              <p className="text-gray-600 text-sm">Something delicious for everyone</p>
            </div>

            <div className="bg-gradient-to-br from-orange-100 to-red-100 p-6 rounded-xl text-center hover:shadow-lg transition-shadow">
              <div className="bg-orange-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-bold text-gray-800 mb-2">Popular Brand</h4>
              <p className="text-gray-600 text-sm">Loved by millions across India</p>
            </div>

            <div className="bg-gradient-to-br from-red-100 to-yellow-100 p-6 rounded-xl text-center hover:shadow-lg transition-shadow">
              <div className="bg-red-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-bold text-gray-800 mb-2">Fun Shapes</h4>
              <p className="text-gray-600 text-sm">Unique shapes for extra fun</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-16 bg-gradient-to-b from-red-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">Gallery</h2>
          <p className="text-center text-gray-600 mb-12">Explore our delicious collection</p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((image) => (
              <div
                key={image.id}
                className="relative overflow-hidden rounded-xl shadow-lg cursor-pointer group"
                onClick={() => setLightboxImage(image.src)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-48 md:h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <p className="text-white font-semibold">{image.alt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setLightboxImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white bg-white/20 rounded-full p-2 hover:bg-white/40 transition-colors"
            onClick={() => setLightboxImage(null)}
          >
            <X className="w-8 h-8" />
          </button>
          <img
            src={lightboxImage}
            alt="Gallery image"
            className="max-w-full max-h-[90vh] rounded-lg shadow-2xl"
          />
        </div>
      )}

      {/* FAQ Section */}
      <section id="faq" className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">Frequently Asked Questions</h2>
          <p className="text-center text-gray-600 mb-12">Got questions? We have answers!</p>

          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <div
                key={index}
                className="bg-gradient-to-r from-orange-50 to-yellow-50 rounded-xl shadow-md overflow-hidden"
              >
                <button
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-orange-100 transition-colors"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <span className="font-semibold text-gray-800 pr-4">{faq.question}</span>
                  <ChevronDown className={`w-5 h-5 text-orange-500 transition-transform ${openFaq === index ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gradient-to-b from-orange-50 to-yellow-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">Contact Us</h2>
          <p className="text-center text-gray-600 mb-12">We would love to hear from you!</p>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Send us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Full Name</label>
                  <input
                    type="text"
                    required
                    value={contactForm.name}
                    onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">Email Address</label>
                  <input
                    type="email"
                    required
                    value={contactForm.email}
                    onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                    placeholder="Enter your email address"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">Phone Number</label>
                  <input
                    type="tel"
                    value={contactForm.phone}
                    onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">Subject</label>
                  <input
                    type="text"
                    required
                    value={contactForm.subject}
                    onChange={(e) => setContactForm({ ...contactForm, subject: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                    placeholder="What is this regarding?"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">Message</label>
                  <textarea
                    required
                    rows={4}
                    value={contactForm.message}
                    onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all resize-none"
                    placeholder="Write your message here..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-red-500 to-orange-500 text-white py-3 rounded-lg font-semibold hover:from-red-600 hover:to-orange-600 transition-all shadow-lg hover:shadow-xl"
                >
                  Submit Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h3>

                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="bg-orange-500 rounded-full p-3">
                      <Mail className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Customer Support Email</h4>
                      <p className="text-gray-600">support@bingosnacks.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-red-500 rounded-full p-3">
                      <Phone className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Phone Number</h4>
                      <p className="text-gray-600">+91 1800-XXX-XXXX (Toll Free)</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-yellow-500 rounded-full p-3">
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Office Address</h4>
                      <p className="text-gray-600">123 Snack Street, Food Lane<br />Mumbai, Maharashtra 400001, India</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="bg-gray-300 rounded-2xl h-64 flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <MapPin className="w-12 h-12 mx-auto mb-2" />
                  <p>Google Maps Integration</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-red-600 to-orange-500 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Logo & Description */}
            <div>
              <span className="text-3xl font-extrabold mb-4 block">Bingo!</span>
              <p className="text-yellow-100 mb-4">
                Crunchy, Bold, and Full of Flavor. Your favorite snacking partner.
              </p>
              <div className="flex gap-4">
                <a href="#" className="bg-white/20 p-2 rounded-full hover:bg-white/40 transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="bg-white/20 p-2 rounded-full hover:bg-white/40 transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="bg-white/20 p-2 rounded-full hover:bg-white/40 transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="bg-white/20 p-2 rounded-full hover:bg-white/40 transition-colors">
                  <Youtube className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold text-lg mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><button onClick={() => scrollToSection('home')} className="text-yellow-100 hover:text-white transition-colors">Home</button></li>
                <li><button onClick={() => scrollToSection('products')} className="text-yellow-100 hover:text-white transition-colors">Products</button></li>
                <li><button onClick={() => scrollToSection('about')} className="text-yellow-100 hover:text-white transition-colors">About Us</button></li>
                <li><button onClick={() => scrollToSection('gallery')} className="text-yellow-100 hover:text-white transition-colors">Gallery</button></li>
                <li><button onClick={() => scrollToSection('contact')} className="text-yellow-100 hover:text-white transition-colors">Contact</button></li>
              </ul>
            </div>

            {/* Products */}
            <div>
              <h4 className="font-bold text-lg mb-4">Our Products</h4>
              <ul className="space-y-2">
                {products.map((product) => (
                  <li key={product.id}>
                    <button onClick={() => scrollToSection('products')} className="text-yellow-100 hover:text-white transition-colors">
                      {product.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="font-bold text-lg mb-4">Stay Updated</h4>
              <p className="text-yellow-100 mb-4">Subscribe for latest updates and offers</p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-4 py-2 rounded-l-lg text-gray-800 focus:outline-none"
                />
                <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-800 px-4 py-2 rounded-r-lg font-semibold transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          <div className="border-t border-white/20 mt-8 pt-8 text-center">
            <p className="text-yellow-100">This website is created for educational purposes only.</p>
            <p className="text-white mt-2">Bingo! Website 2024. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 right-6 bg-gradient-to-r from-red-500 to-orange-500 text-white p-3 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all z-40"
        >
          <ArrowUp className="w-6 h-6" />
        </button>
      )}
    </div>
  );
}

export default App;
