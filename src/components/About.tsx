import { motion } from 'framer-motion';
import { ArrowUpRight, BadgeCheck, DraftingCompass, Layers3 } from 'lucide-react';

const About = () => {
  const founderImage = `${import.meta.env.BASE_URL}images/as-interior-founder.png`;

  return (
    <section id="about" className="py-24 bg-warm-white relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-rich-bronze/40 to-transparent" />
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] gap-14 xl:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="absolute -inset-6 bg-rich-bronze/10 blur-3xl rounded-full opacity-70" />
            <div className="relative overflow-hidden rounded-[2rem] bg-charcoal-black shadow-2xl aspect-[4/5] md:aspect-[5/6] max-h-[720px]">
              <img
                src={founderImage}
                alt="AS Interior Studio founder portrait"
                className="h-full w-full object-cover object-[50%_35%]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-black/70 via-transparent to-transparent" />
              <div className="absolute left-5 right-5 bottom-5 md:left-7 md:right-7 md:bottom-7 rounded-2xl border border-white/15 bg-charcoal-black/65 backdrop-blur-xl p-5 text-left">
                <p className="text-xs font-sans uppercase tracking-[0.22em] text-rich-bronze mb-2">Studio Leadership</p>
                <h3 className="text-2xl md:text-3xl text-warm-white font-serif leading-tight">AS Interior Studio</h3>
                <p className="mt-2 text-sm text-warm-white/70 leading-relaxed">
                  Personal supervision, practical planning, and refined execution for homes and commercial spaces.
                </p>
              </div>
            </div>
          </motion.div>

          <div className="text-left">
            <span className="text-sm font-sans tracking-[0.25em] uppercase text-rich-bronze font-medium inline-block mb-3">
              About AS Interior Studio
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl text-charcoal-black font-serif mb-8 leading-tight">
              Designing calm, modern spaces with <br />
              <span className="italic font-light text-rich-bronze">clear execution.</span>
            </h2>

            <p className="text-base text-charcoal-black/70 mb-6 leading-relaxed max-w-2xl">
              AS Interior Studio creates thoughtful interiors for Kolkata homes, offices, and commercial spaces. Every project starts with a clear understanding of how the space should feel, function, and age beautifully.
            </p>
            <p className="text-base text-charcoal-black/60 mb-10 leading-relaxed max-w-2xl">
              From layout planning and material selection to site coordination and final styling, we keep the process structured, transparent, and tuned to your daily life.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
              <div className="border border-charcoal-black/10 bg-white/60 p-5 rounded-2xl">
                <DraftingCompass className="text-rich-bronze mb-4" size={24} strokeWidth={1.7} />
                <h4 className="text-base font-serif text-charcoal-black mb-2">Space Planning</h4>
                <p className="text-xs leading-relaxed text-charcoal-black/55">Layouts shaped for comfort, storage, movement, and light.</p>
              </div>
              <div className="border border-charcoal-black/10 bg-white/60 p-5 rounded-2xl">
                <Layers3 className="text-rich-bronze mb-4" size={24} strokeWidth={1.7} />
                <h4 className="text-base font-serif text-charcoal-black mb-2">Material Detail</h4>
                <p className="text-xs leading-relaxed text-charcoal-black/55">Finishes, textures, and fixtures selected with purpose.</p>
              </div>
              <div className="border border-charcoal-black/10 bg-white/60 p-5 rounded-2xl">
                <BadgeCheck className="text-rich-bronze mb-4" size={24} strokeWidth={1.7} />
                <h4 className="text-base font-serif text-charcoal-black mb-2">Turnkey Work</h4>
                <p className="text-xs leading-relaxed text-charcoal-black/55">Coordinated execution from concept to handover.</p>
              </div>
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-3 rounded-full bg-charcoal-black px-6 py-3 text-sm font-semibold text-warm-white transition-colors hover:bg-rich-bronze"
            >
              Start Your Project
              <ArrowUpRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
