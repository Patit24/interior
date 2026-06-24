import { motion } from 'framer-motion';
import { 
  Home, 
  ChefHat, 
  Bed, 
  Briefcase, 
  Building, 
  Compass, 
  Layers 
} from 'lucide-react';
import TiltCard from './TiltCard';

const services = [
  {
    icon: Home,
    title: 'Residential Interior Design',
    desc: 'Crafting luxurious, comfortable, and personalized homes that mirror your lifestyle and aspirations.',
  },
  {
    icon: ChefHat,
    title: 'Modular Kitchen Design',
    desc: 'Elegant, state-of-the-art kitchen designs balancing optimal space utility with premium finishes.',
  },
  {
    icon: Bed,
    title: 'Bedroom Interior Design',
    desc: 'Sanctuaries of rest blending soothing lighting, soft textures, and custom layout configurations.',
  },
  {
    icon: ChefHat, // Using chef hat or another fallback since Bed isn't imported from lucide-react if it doesn't exist, wait, they are already imported.
    title: 'Living Room Design',
    desc: 'Grand, welcoming social hubs featuring bespoke seating plans and curated feature walls.',
  },
  {
    icon: Briefcase,
    title: 'Office Interior Design',
    desc: 'Ergonomic, modern professional workspaces designed to boost efficiency, morale, and brand identity.',
  },
  {
    icon: Building,
    title: 'Commercial Interior Design',
    desc: 'Immersive spaces for retail, hotels, and cafes that leave a lasting impression on your clientele.',
  },
  {
    icon: Compass,
    title: 'Space Planning & 3D Planning',
    desc: 'Photorealistic visualizations and comprehensive architectural blueprints before execution begins.',
  },
  {
    icon: Layers,
    title: 'Turnkey Interior Solutions',
    desc: 'End-to-end execution, material sourcing, and complete management from initial design to final key handover.',
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-soft-beige/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-rich-bronze/5 rounded-full blur-3xl -translate-x-1/2"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-rich-bronze/5 rounded-full blur-3xl translate-x-1/2"></div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-3xl mb-20 text-left">
          <motion.span 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-sm font-sans tracking-[0.25em] uppercase text-rich-bronze font-medium inline-block mb-3"
          >
            What We Do
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl text-charcoal-black font-serif leading-tight"
          >
            Bespoke Services <br />
            <span className="italic font-light text-rich-bronze">Tailored to Perfection</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                className="h-[370px]"
              >
                <TiltCard dark={false} className="w-full h-full">
                  <div className="p-8 group h-full flex flex-col justify-between text-left">
                    <div>
                      <div className="w-12 h-12 rounded-2xl bg-rich-bronze/10 flex items-center justify-center text-rich-bronze mb-6 group-hover:bg-rich-bronze group-hover:text-warm-white transition-all duration-300">
                        <Icon size={22} className="stroke-[1.5]" />
                      </div>
                      <h3 className="text-xl font-serif text-charcoal-black mb-3 font-semibold group-hover:text-rich-bronze transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-sm font-sans text-charcoal-black/60 leading-relaxed line-clamp-3">
                        {service.desc}
                      </p>
                    </div>
                <a
                  href={`https://wa.me/917074802534?text=Hello%20S.M%20Design%20%26%20Construction%2C%20I%20would%20like%20to%20enquire%20about%20your%20${encodeURIComponent(service.title)}%20services.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 w-full py-3 bg-rich-bronze text-warm-white rounded-xl text-center text-xs font-semibold uppercase tracking-wider hover:bg-charcoal-black transition-colors duration-300 flex items-center justify-center gap-2 group-hover:scale-[1.02] active:scale-[0.98]"
                >
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" className="w-4 h-4">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.458L0 24zm6.208-3.766l.447.265c1.554.922 3.328 1.408 5.15 1.409 5.867 0 10.638-4.767 10.641-10.638.003-2.844-1.1-5.518-3.106-7.525C17.337 1.737 14.664.63 11.821.63 5.952.63 1.18 5.398 1.176 11.27c0 1.942.508 3.84 1.47 5.514l.275.477-.993 3.627 3.71-.973zm11.758-7.986c-.328-.163-1.936-.955-2.235-1.063-.298-.11-.517-.163-.73.164-.215.328-.83.163-.83 1.063s-.638.163-.83.163c-.19-.108-.6-.2-.6-.2 0 0-1.824-.766-2.585-2.09-.613-1.063-.518-1.63-.518-1.63 0 0 .16-.164.24-.328.08-.164.135-.274.2-.383.064-.11.03-.218-.016-.328-.046-.109-.41-1.01-.564-1.378-.147-.358-.31-.31-.41-.31h-.358c-.244 0-.64.09-.974.464-.336.372-1.277 1.258-1.277 3.066s1.314 3.548 1.5 3.794c.182.246 2.586 3.948 6.262 5.534.875.378 1.56.602 2.09.77.877.28 1.675.24 2.305.146.702-.104 1.936-.79 2.21-1.554.275-.765.275-1.42.193-1.555-.082-.136-.3-.218-.628-.383z"/>
                  </svg>
                  Enquire Now
                </a>
              </div>
            </TiltCard>
          </motion.div>
          );
        })}
      </div>
    </div>
  </section>
);
};

export default Services;
