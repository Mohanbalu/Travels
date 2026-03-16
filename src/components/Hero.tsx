import { motion } from 'motion/react';
import { Phone, MapPin, Mail, Facebook, Instagram, Twitter, MessageCircle, Star, CheckCircle, ArrowRight, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <span className={`text-xl font-bold tracking-tight ${isScrolled ? 'text-brand-blue' : 'text-white'}`}>
              SRI LAXMI VENKATESWARA
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {['Home', 'Packages', 'About', 'Gallery', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`text-sm font-medium transition-colors hover:text-brand-orange ${isScrolled ? 'text-slate-700' : 'text-white'}`}
              >
                {item}
              </a>
            ))}
            <a
              href="https://wa.me/919490749522"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-orange text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-orange-600 transition-colors flex items-center gap-2"
            >
              <MessageCircle size={18} />
              WhatsApp
            </a>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className={isScrolled ? 'text-slate-900' : 'text-white'}>
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white absolute top-full left-0 w-full shadow-xl py-4 px-4 space-y-4"
        >
          {['Home', 'Packages', 'About', 'Gallery', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setIsMenuOpen(false)}
              className="block text-slate-700 font-medium hover:text-brand-orange"
            >
              {item}
            </a>
          ))}
          <a
            href="https://wa.me/919490749522"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-brand-orange text-white px-5 py-3 rounded-lg text-center font-semibold flex items-center justify-center gap-2"
          >
            <MessageCircle size={18} />
            WhatsApp Now
          </a>
        </motion.div>
      )}
    </nav>
  );
};

export const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1544198365-f5d60b6d8190?auto=format&fit=crop&q=80&w=1920"
          alt="Temple Background"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-7xl font-bold text-white mb-6 leading-tight uppercase tracking-tight">
            Explore the World with <span className="text-brand-yellow">Sri Laxmi Venkateswara</span>
          </h1>
          <p className="text-lg md:text-2xl text-white/90 mb-10 font-light max-w-2xl mx-auto">
            Your trusted partner for spiritual yatras, international holidays, and unforgettable travel experiences.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#packages"
              className="w-full sm:w-auto bg-brand-blue text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-blue-800 transition-all transform hover:scale-105 flex items-center justify-center gap-2"
            >
              View Tour Packages
              <ArrowRight size={20} />
            </a>
            <a
              href="https://wa.me/919490749522"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-white/10 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-white/20 transition-all flex items-center justify-center gap-2"
            >
              <MessageCircle size={20} />
              Contact on WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-white/50">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-white rounded-full" />
        </div>
      </div>
    </section>
  );
};
