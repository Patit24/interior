import { useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Magnetic from './Magnetic';

const Navbar = () => {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
    setIsScrolled(latest > 50);
  });

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'About', href: '#about' },
    { name: 'Process', href: '#process' },
  ];

  return (
    <motion.header
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'py-4' : 'py-6'
      }`}
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className={`flex items-center justify-between rounded-full px-6 py-3 transition-all duration-300 ${
          isScrolled ? 'glass' : 'bg-transparent'
        }`}>
          {/* Logo */}
          <Magnetic range={30} strength={0.25}>
            <a href="#" className="flex items-center gap-3 group">
              <img 
                src={`${import.meta.env.BASE_URL}images/logo.svg`}
                alt="AS Interior Studio Logo" 
                className="h-12 md:h-14 w-auto object-contain" 
              />
              <span className={`sr-only font-serif text-lg md:text-2xl font-semibold transition-colors ${
                isScrolled ? 'text-charcoal-black' : 'text-warm-white'
              }`}>
                AS Interior Studio
              </span>
            </a>
          </Magnetic>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Magnetic key={link.name} range={25} strength={0.3}>
                <a
                  href={link.href}
                  className={`text-sm font-medium tracking-wide transition-colors py-2 px-1 ${
                    isScrolled 
                      ? 'text-charcoal-black/80 hover:text-rich-bronze' 
                      : 'text-warm-white/90 hover:text-rich-bronze'
                  }`}
                >
                  {link.name}
                </a>
              </Magnetic>
            ))}
          </nav>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <Magnetic range={30} strength={0.25} className="hidden md:inline-flex">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-2.5 bg-charcoal-black text-warm-white rounded-full text-sm font-medium hover:bg-rich-bronze transition-colors duration-300"
              >
                Get Consultation
              </a>
            </Magnetic>
            <button
              className={`md:hidden p-2 transition-colors ${
                isScrolled ? 'text-charcoal-black' : 'text-warm-white'
              }`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 mt-2 px-6">
          <div className="glass rounded-2xl p-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-medium text-charcoal-black"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="inline-flex items-center justify-center px-6 py-3 bg-rich-bronze text-warm-white rounded-full text-base font-medium mt-4"
            >
              Get Consultation
            </a>
          </div>
        </div>
      )}
    </motion.header>
  );
};

export default Navbar;
