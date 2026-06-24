import { motion } from 'framer-motion';
import { Phone, Mail, MapPin } from 'lucide-react';

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send this to a backend or EmailJS
    alert('Thank you for your inquiry! Our design experts will contact you within 24 hours.');
  };

  return (
    <section id="contact" className="py-24 bg-charcoal-black text-warm-white relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-rich-bronze/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20 items-stretch">
          
          {/* Left panel: Info & Map */}
          <div className="flex flex-col justify-between text-left">
            <div>
              <span className="text-sm font-sans tracking-[0.25em] uppercase text-rich-bronze font-medium inline-block mb-3">
                Connect With Us
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl text-warm-white font-serif mb-8 leading-tight">
                Let’s Design Your <br />
                <span className="italic font-light text-rich-bronze">Dream Environment</span>
              </h2>
              <p className="text-sm font-sans text-warm-white/60 mb-10 max-w-md leading-relaxed">
                Fill out our consultation form or reach out directly to schedule a face-to-face workspace meeting. Let’s turn your vision into blueprint precision.
              </p>

              {/* Direct Info */}
              <div className="space-y-6 mb-12">
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-rich-bronze group-hover:bg-rich-bronze group-hover:text-charcoal-black transition-all duration-300">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-warm-white/40 mb-1">Call Us</h4>
                    <p className="text-sm font-sans text-warm-white/95 font-medium">+91 70748 02534</p>
                    <p className="text-sm font-sans text-warm-white/95 font-medium">+91 90830 70734</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-rich-bronze group-hover:bg-rich-bronze group-hover:text-charcoal-black transition-all duration-300">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-warm-white/40 mb-1">Email Us</h4>
                    <a href="mailto:aziminterior07@gmail.com" className="text-sm font-sans text-warm-white/95 font-medium hover:text-rich-bronze transition-colors">
                      aziminterior07@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-rich-bronze group-hover:bg-rich-bronze group-hover:text-charcoal-black transition-all duration-300">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-warm-white/40 mb-1">Studio Address</h4>
                    <p className="text-sm font-sans text-warm-white/95 font-medium leading-relaxed max-w-xs">
                      Basirhat, West Bengal
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Map Embed */}
            <div className="w-full h-64 rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-white/5 relative">
              <iframe
                title="S.M Design & Construction Location"
                src="https://www.google.com/maps?q=Basirhat,%20West%20Bengal&output=embed"
                className="w-full h-full border-0 grayscale contrast-125 brightness-75"
                allowFullScreen
                loading="lazy"
              />
            </div>
          </div>

          {/* Right panel: Glass enquiry form */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass p-10 rounded-3xl flex flex-col justify-between border border-white/10 relative"
            style={{
              boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.05), 0 20px 40px rgba(0,0,0,0.3)'
            }}
          >
            <div>
              <h3 className="text-2xl font-serif text-warm-white mb-2">Request Consultation</h3>
              <p className="text-xs font-sans text-warm-white/50 mb-8 uppercase tracking-wider">Please share your project details below</p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <input
                    type="text"
                    required
                    placeholder="Full Name"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-sm focus:outline-none focus:border-rich-bronze/50 transition-colors"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    required
                    placeholder="Phone Number"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-sm focus:outline-none focus:border-rich-bronze/50 transition-colors"
                  />
                </div>
                <div>
                  <select
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-sm text-warm-white/60 focus:outline-none focus:border-rich-bronze/50 transition-colors appearance-none"
                  >
                    <option value="" disabled selected className="bg-charcoal-black text-warm-white">Select Service Required</option>
                    <option value="residential" className="bg-charcoal-black text-warm-white">Residential Design</option>
                    <option value="kitchen" className="bg-charcoal-black text-warm-white">Modular Kitchen</option>
                    <option value="bedroom" className="bg-charcoal-black text-warm-white">Bedroom Interior</option>
                    <option value="living" className="bg-charcoal-black text-warm-white">Living Room Design</option>
                    <option value="office" className="bg-charcoal-black text-warm-white">Office Interior</option>
                    <option value="commercial" className="bg-charcoal-black text-warm-white">Commercial Interior</option>
                  </select>
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Estimated Budget (e.g. ₹5 - 10 Lakhs)"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-sm focus:outline-none focus:border-rich-bronze/50 transition-colors"
                  />
                </div>
                <div>
                  <textarea
                    rows={4}
                    placeholder="Briefly describe your project vision..."
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-sm focus:outline-none focus:border-rich-bronze/50 transition-colors resize-none"
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full py-4 bg-rich-bronze text-warm-white font-medium tracking-wide uppercase text-sm rounded-2xl hover:bg-yellow-600 transition-colors duration-300 font-semibold"
                >
                  Send Enquiry
                </button>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Footer info divider line */}
        <div className="border-t border-white/10 pt-12 flex flex-col md:flex-row items-center justify-between gap-6 text-left">
          <div className="flex flex-col gap-2 items-start">
            <div className="flex items-center gap-4">
              <img 
                src="/images/logo.svg" 
                alt="S.M Design & Construction Logo" 
                className="h-20 md:h-24 w-auto object-contain" 
              />
              <span className="sr-only font-serif text-2xl md:text-3xl font-semibold text-warm-white">
                S.M Design & Construction
              </span>
            </div>
            <p className="text-xs font-sans text-warm-white/40 mt-1">Transforming Spaces Into Timeless Experiences.</p>
          </div>
          
          <div className="flex flex-wrap gap-8 text-xs font-sans uppercase tracking-widest text-warm-white/50">
            <a href="#services" className="hover:text-rich-bronze transition-colors">Services</a>
            <a href="#portfolio" className="hover:text-rich-bronze transition-colors">Portfolio</a>
            <a href="#about" className="hover:text-rich-bronze transition-colors">About</a>
            <a href="#process" className="hover:text-rich-bronze transition-colors">Process</a>
          </div>

          <p className="text-xs font-sans text-warm-white/40">
            © {new Date().getFullYear()} S.M Design & Construction. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
