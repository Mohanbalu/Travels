import { motion } from 'motion/react';
import { PACKAGES } from '../constants';
import { Clock, MapPin, IndianRupee, ArrowRight } from 'lucide-react';

export const Packages = () => {
  return (
    <section id="packages" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-brand-orange font-bold tracking-widest uppercase text-sm"
          >
            Our Best Offers
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-brand-blue mt-2 uppercase"
          >
            Popular Tour Packages
          </motion.h2>
          <div className="w-24 h-1 bg-brand-yellow mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PACKAGES.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-100 group"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={pkg.image}
                  alt={pkg.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 right-4 bg-brand-orange text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                  {pkg.category}
                </div>
              </div>

              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-slate-900 uppercase leading-tight">
                    {pkg.name}
                  </h3>
                  <div className="flex items-center text-brand-orange font-semibold text-sm">
                    <Clock size={16} className="mr-1" />
                    {pkg.duration}
                  </div>
                </div>

                <div className="space-y-2 mb-6">
                  {pkg.highlights.slice(0, 3).map((highlight, i) => (
                    <div key={i} className="flex items-center text-slate-600 text-sm">
                      <MapPin size={14} className="mr-2 text-brand-blue" />
                      {highlight}
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-6 border-t border-slate-100">
                  <div>
                    <span className="text-slate-500 text-xs uppercase block">Starting from</span>
                    <span className="text-2xl font-bold text-brand-blue flex items-center">
                      <IndianRupee size={20} />
                      {pkg.price.toLocaleString('en-IN')}
                    </span>
                  </div>
                  <button className="bg-brand-blue text-white p-3 rounded-full hover:bg-brand-orange transition-colors">
                    <ArrowRight size={20} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
