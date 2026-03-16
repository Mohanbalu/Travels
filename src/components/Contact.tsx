import { motion } from 'motion/react';
import { Phone, MapPin, Mail, MessageCircle, Send, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

export const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-brand-blue text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold uppercase mb-8">Get in Touch</h2>
            <p className="text-white/70 text-lg mb-12">
              Have questions about our tour packages or want to plan a custom trip? Our travel experts are here to help you.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="text-brand-yellow" />
                </div>
                <div>
                  <h4 className="text-sm uppercase tracking-widest text-white/50 mb-1">Call Us</h4>
                  <p className="text-xl font-bold">+91 9490749522</p>
                  <p className="text-white/70">Madishetty Raju Gupta</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-brand-yellow" />
                </div>
                <div>
                  <h4 className="text-sm uppercase tracking-widest text-white/50 mb-1">Our Office</h4>
                  <p className="text-xl font-bold">Pillar No.44, Mehdipatnam</p>
                  <p className="text-white/70">Hyderabad, Telangana, India</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="text-brand-yellow" />
                </div>
                <div>
                  <h4 className="text-sm uppercase tracking-widest text-white/50 mb-1">Email Us</h4>
                  <p className="text-xl font-bold">info@slvtours.com</p>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <a
                href="https://wa.me/919490749522"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-bold transition-all transform hover:scale-105"
              >
                <MessageCircle size={24} />
                Chat on WhatsApp
              </a>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-white rounded-3xl p-8 md:p-12 text-slate-900 shadow-2xl"
          >
            <h3 className="text-2xl font-bold mb-6 uppercase">Quick Enquiry</h3>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase text-slate-500">Full Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:border-brand-blue" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase text-slate-500">Phone Number</label>
                  <input type="tel" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:border-brand-blue" placeholder="+91 00000 00000" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase text-slate-500">Destination</label>
                <select className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:border-brand-blue">
                  <option>Char Dham Yatra</option>
                  <option>Dubai Tour</option>
                  <option>Sri Lanka Tour</option>
                  <option>Varanasi Tour</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase text-slate-500">Message</label>
                <textarea rows={4} className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:border-brand-blue" placeholder="Tell us about your travel plans..."></textarea>
              </div>
              <button className="w-full bg-brand-orange text-white py-4 rounded-xl font-bold hover:bg-orange-600 transition-colors flex items-center justify-center gap-2">
                <Send size={20} />
                Send Message
              </button>
            </form>
          </motion.div>
        </div>

        <div className="mt-24 rounded-3xl overflow-hidden h-[400px] shadow-2xl border-4 border-white/10">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.411652156434!2d78.4385!3d17.395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb97138769363d%3A0x8683e390977840!2sMehdipatnam%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1647411652156!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export const Footer = () => {
  return (
    <footer className="bg-slate-950 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-brand-yellow uppercase tracking-tighter">
              SRI LAXMI VENKATESWARA
            </h3>
            <p className="text-slate-400 leading-relaxed">
              Premium tours and pilgrimage travel company based in Hyderabad. We specialize in making your spiritual and leisure journeys comfortable and memorable.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-brand-orange transition-colors"><Facebook size={20} /></a>
              <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-brand-orange transition-colors"><Instagram size={20} /></a>
              <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-brand-orange transition-colors"><Twitter size={20} /></a>
              <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-brand-orange transition-colors"><Youtube size={20} /></a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 uppercase tracking-widest">Quick Links</h4>
            <ul className="space-y-4 text-slate-400">
              <li><a href="#home" className="hover:text-brand-yellow transition-colors">Home</a></li>
              <li><a href="#packages" className="hover:text-brand-yellow transition-colors">Tour Packages</a></li>
              <li><a href="#about" className="hover:text-brand-yellow transition-colors">About Us</a></li>
              <li><a href="#gallery" className="hover:text-brand-yellow transition-colors">Gallery</a></li>
              <li><a href="#contact" className="hover:text-brand-yellow transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 uppercase tracking-widest">Our Services</h4>
            <ul className="space-y-4 text-slate-400">
              <li>Spiritual Yatras</li>
              <li>International Holidays</li>
              <li>Domestic Packages</li>
              <li>Honeymoon Specials</li>
              <li>Group Tours</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 uppercase tracking-widest">Newsletter</h4>
            <p className="text-slate-400 mb-6">Subscribe to get special offers and travel updates.</p>
            <div className="flex gap-2">
              <input type="email" className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 w-full focus:outline-none focus:border-brand-yellow" placeholder="Your Email" />
              <button className="bg-brand-yellow text-slate-950 px-4 py-2 rounded-lg font-bold hover:bg-yellow-400 transition-colors">Join</button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 text-center text-slate-500 text-sm">
          <p>© {new Date().getFullYear()} Sri Laxmi Venkateswara Tours & Travels. All Rights Reserved.</p>
          <p className="mt-2">Designed for Excellence in Travel.</p>
        </div>
      </div>
    </footer>
  );
};
