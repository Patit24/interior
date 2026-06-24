import { motion } from 'framer-motion';
import { 
  Palette, 
  Gem, 
  Award, 
  DollarSign, 
  Clock, 
  ShieldCheck 
} from 'lucide-react';
import TiltCard from './TiltCard';

const features = [
  {
    icon: Palette,
    title: 'Customized Designs',
    desc: 'Bespoke design concepts tailored to your exact taste, personality, and spatial needs.',
  },
  {
    icon: Gem,
    title: 'Premium Materials',
    desc: 'Uncompromising quality sourcing from top international vendors, built to last.',
  },
  {
    icon: Award,
    title: 'Expert Craftsmanship',
    desc: 'Experienced artisans and engineers executing with razor-sharp architectural precision.',
  },
  {
    icon: DollarSign,
    title: 'Transparent Pricing',
    desc: 'Zero hidden costs, highly detailed breakdowns, and optimized budget allocation.',
  },
  {
    icon: Clock,
    title: 'Timely Delivery',
    desc: 'Rigorous project timeline management ensuring keys are handed over exactly as scheduled.',
  },
  {
    icon: ShieldCheck,
    title: 'Turnkey Execution',
    desc: 'Worry-free single point of contact handling approvals, materials, labor, and execution.',
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-24 bg-charcoal-black text-warm-white relative overflow-hidden">
      {/* Background radial highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-rich-bronze/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <span className="text-sm font-sans tracking-[0.25em] uppercase text-rich-bronze font-medium inline-block mb-3">
            Why Partner With Us
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-warm-white font-serif leading-tight">
            Crafting Spaces with <br />
            <span className="italic font-light text-rich-bronze">Absolute Distinction</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feat, index) => {
            const Icon = feat.icon;
            return (
              <motion.div
                key={feat.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="h-full flex"
              >
                <TiltCard dark={true} className="w-full flex flex-col">
                  <div className="p-10 text-left h-full flex flex-col items-start justify-between">
                    <div>
                      {/* Emerging Icon Effect */}
                      <div className="p-4 rounded-2xl bg-rich-bronze/10 text-rich-bronze mb-6 border border-rich-bronze/20 transition-all duration-300 hover:bg-rich-bronze hover:text-charcoal-black">
                        <Icon size={24} className="stroke-[1.5]" />
                      </div>
                      
                      <h3 className="text-xl font-serif font-semibold text-warm-white mb-4">
                        {feat.title}
                      </h3>
                      
                      <p className="text-sm font-sans text-warm-white/60 leading-relaxed">
                        {feat.desc}
                      </p>
                    </div>
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

export default WhyChooseUs;
