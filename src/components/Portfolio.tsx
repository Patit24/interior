import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const imagePath = (filename: string) => `${import.meta.env.BASE_URL}images/${filename}`;

const projects = [
  {
    id: 1,
    title: 'The Obsidian Oasis',
    category: 'Living Room',
    img: imagePath('living.png'),
    size: 'col-span-1 md:col-span-2 row-span-1',
  },
  {
    id: 2,
    title: 'Culinary Masterclass',
    category: 'Kitchen',
    img: imagePath('kitchen.png'),
    size: 'col-span-1 row-span-1',
  },
  {
    id: 3,
    title: 'Serenity Chamber',
    category: 'Bedroom',
    img: imagePath('bedroom.png'),
    size: 'col-span-1 row-span-1',
  },
  {
    id: 4,
    title: 'Architects HQ',
    category: 'Office',
    img: imagePath('office.png'),
    size: 'col-span-1 md:col-span-2 row-span-1',
  },
  {
    id: 5,
    title: 'The Luxe Lobby',
    category: 'Commercial',
    img: imagePath('commercial.png'),
    size: 'col-span-1 row-span-1',
  },
];

const Portfolio = () => {
  const livingRoomImage = `url("${imagePath('living.png')}")`;
  const [filter, setFilter] = useState('All');
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isSliding, setIsSliding] = useState(false);

  const categories = ['All', 'Living Room', 'Kitchen', 'Bedroom', 'Office', 'Commercial'];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isSliding) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  return (
    <section id="portfolio" className="py-24 bg-soft-beige/20 relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8 text-left">
          <div>
            <span className="text-sm font-sans tracking-[0.25em] uppercase text-rich-bronze font-medium inline-block mb-3">
              Our Showcase
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl text-charcoal-black font-serif leading-tight">
              Luxury Interior Designs <br />
              <span className="italic font-light text-rich-bronze">Created in Kolkata</span>
            </h2>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                  filter === cat
                    ? 'bg-rich-bronze text-warm-white shadow-md'
                    : 'bg-warm-white/80 hover:bg-soft-beige text-charcoal-black/75 border border-soft-beige'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Before/After Interactive Section */}
        <div className="mb-20 text-left">
          <h3 className="text-2xl font-serif mb-6 text-charcoal-black flex items-center gap-2">
            <span>Interactive Before / After Transformation</span>
            <span className="text-xs font-sans uppercase bg-rich-bronze/10 text-rich-bronze px-3 py-1 rounded-full font-semibold">
              Try Dragging
            </span>
          </h3>
          <div 
            className="relative w-full h-[500px] rounded-3xl overflow-hidden shadow-xl select-none cursor-ew-resize"
            onMouseMove={handleMouseMove}
            onMouseDown={() => setIsSliding(true)}
            onMouseUp={() => setIsSliding(false)}
            onMouseLeave={() => setIsSliding(false)}
            onTouchMove={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              const touch = e.touches[0];
              const x = touch.clientX - rect.left;
              const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
              setSliderPosition(percentage);
            }}
          >
            {/* After: Living room finished */}
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: livingRoomImage }}
            />
            {/* Label After */}
            <div className="absolute right-6 top-6 bg-charcoal-black/70 backdrop-blur-sm text-warm-white text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-lg pointer-events-none">
              After (Ready Design)
            </div>

            {/* Before: Living room blueprint / construction */}
            <div 
              className="absolute inset-0 bg-cover bg-center transition-all"
              style={{ 
                backgroundImage: livingRoomImage,
                filter: 'grayscale(1) invert(0.85) sepia(0.3) contrast(1.5)',
                clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)`
              }}
            />
            {/* Label Before */}
            <div className="absolute left-6 top-6 bg-rich-bronze/90 text-warm-white text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-lg pointer-events-none">
              Before (Planning/Sketch)
            </div>

            {/* Divider Line */}
            <div 
              className="absolute top-0 bottom-0 w-1 bg-warm-white shadow-2xl pointer-events-none cursor-ew-resize flex items-center justify-center"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="w-8 h-8 rounded-full bg-warm-white text-charcoal-black flex items-center justify-center shadow-lg border border-soft-beige text-xs font-bold">
                ↔
              </div>
            </div>
          </div>
        </div>

        {/* Masonry / Bento Grid Layout */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5 }}
                className={`relative rounded-3xl overflow-hidden shadow-lg group cursor-pointer h-96 ${project.size}`}
              >
                {/* Background image */}
                <motion.div 
                  className="absolute inset-0 bg-cover bg-center transition-all duration-700"
                  style={{ backgroundImage: `url(${project.img})` }}
                  whileHover={{ scale: 1.05 }}
                />

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-8 flex flex-col justify-end text-left h-full">
                  <span className="text-xs font-sans tracking-widest uppercase text-rich-bronze font-bold mb-2">
                    {project.category}
                  </span>
                  <h4 className="text-2xl font-serif text-warm-white font-semibold">
                    {project.title}
                  </h4>
                  <div className="w-8 h-[1px] bg-rich-bronze mt-4 group-hover:w-full transition-all duration-500" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
