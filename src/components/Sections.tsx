import { motion } from 'motion/react';
import { CheckCircle, Shield, Clock, Headphones, Map, Star } from 'lucide-react';
import { TESTIMONIALS, GALLERY } from '../constants';

export const WhyChooseUs = () => {
  const features = [
    { icon: <Map className="text-brand-orange" />, title: 'Experienced Planners', desc: 'Over 15 years of expertise in spiritual and international tours.' },
    { icon: <Shield className="text-brand-orange" />, title: 'Safe & Secure', desc: 'Your safety is our priority with verified accommodations and transport.' },
    { icon: <Clock className="text-brand-orange" />, title: 'Affordable Packages', desc: 'Premium travel experiences at the most competitive prices.' },
    { icon: <Headphones className="text-brand-orange" />, title: '24/7 Support', desc: 'Dedicated support team available throughout your journey.' },
    { icon: <CheckCircle className="text-brand-orange" />, title: 'Custom Plans', desc: 'Tailor-made itineraries to suit your specific travel needs.' },
    { icon: <Star className="text-brand-orange" />, title: 'Quality Service', desc: 'Consistently rated high by our thousands of happy travelers.' },
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-brand-orange font-bold tracking-widest uppercase text-sm">Why Choose Us</span>
            <h2 className="text-4xl md:text-5xl font-bold text-brand-blue mt-2 uppercase leading-tight">
              We Make Your Travel <br /> Dreams Come True
            </h2>
            <p className="text-slate-600 mt-6 text-lg leading-relaxed">
              At Sri Laxmi Venkateswara Tours & Travels, we believe travel is more than just visiting places. It's about spiritual awakening, cultural immersion, and creating lifelong memories.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-12">
              {features.map((f, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center">
                    {f.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">{f.title}</h4>
                    <p className="text-slate-500 text-sm mt-1">{f.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <motion.img
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                src="https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&q=80&w=600"
                className="rounded-2xl shadow-lg mt-12"
                alt="Travel 1"
                referrerPolicy="no-referrer"
              />
              <motion.img
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                src="https://images.unsplash.com/photo-1524230572899-a752b3835840?auto=format&fit=crop&q=80&w=600"
                className="rounded-2xl shadow-lg"
                alt="Travel 2"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-brand-blue text-white p-8 rounded-2xl shadow-2xl hidden md:block">
              <div className="text-4xl font-bold">15+</div>
              <div className="text-sm uppercase tracking-widest opacity-80">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const Gallery = () => {
  return (
    <section id="gallery" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-brand-blue uppercase">Destinations Gallery</h2>
          <div className="w-24 h-1 bg-brand-yellow mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {GALLERY.map((img, i) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className="relative group overflow-hidden rounded-2xl aspect-square"
            >
              <img
                src={img.url}
                alt={img.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-125"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <h4 className="text-white font-bold text-xl">{img.title}</h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const Testimonials = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-brand-blue uppercase">What Our Travelers Say</h2>
          <div className="w-24 h-1 bg-brand-yellow mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-slate-50 p-8 rounded-3xl relative"
            >
              <div className="flex text-brand-yellow mb-4">
                {[...Array(t.rating)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
              </div>
              <p className="text-slate-600 italic mb-8 leading-relaxed">"{t.text}"</p>
              <div className="flex items-center gap-4">
                <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full object-cover" referrerPolicy="no-referrer" />
                <div>
                  <h4 className="font-bold text-slate-900">{t.name}</h4>
                  <p className="text-slate-500 text-xs uppercase tracking-widest">{t.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
