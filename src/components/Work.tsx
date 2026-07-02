import { motion } from 'framer-motion';
import { ArrowUpRight, MapPin } from 'lucide-react';

const imagePath = (path: string) => `${import.meta.env.BASE_URL}images/work/${path}`;

const workSites = [
  {
    title: 'Bhubaneswar Site',
    location: 'Bhubaneswar',
    status: 'Completed work photos',
    images: Array.from({ length: 11 }, (_, index) => imagePath(`bhubaneswar/${String(index + 1).padStart(2, '0')}.jpeg`)),
  },
  {
    title: 'Medinipur Tumku Site',
    location: 'Medinipur',
    status: 'Site progress and finishing',
    images: Array.from({ length: 13 }, (_, index) => imagePath(`medinipur/${String(index + 1).padStart(2, '0')}.jpeg`)),
  },
  {
    title: 'Mukundupur Ongoing Project',
    location: 'Mukundupur',
    status: 'Ongoing execution',
    images: Array.from({ length: 4 }, (_, index) => imagePath(`mukundupur/${String(index + 1).padStart(2, '0')}.jpeg`)),
  },
];

const Work = () => {
  return (
    <section id="work" className="py-24 bg-charcoal-black text-warm-white relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-rich-bronze/50 to-transparent" />

      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 text-left">
          <div className="max-w-3xl">
            <span className="text-sm font-sans tracking-[0.25em] uppercase text-rich-bronze font-medium inline-block mb-3">
              Work Sites
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight">
              Real site progress from <br />
              <span className="italic font-light text-rich-bronze">our recent work.</span>
            </h2>
          </div>

          <a
            href="#contact"
            className="inline-flex w-fit items-center gap-3 rounded-full border border-rich-bronze/50 px-6 py-3 text-sm font-semibold text-rich-bronze transition-colors hover:bg-rich-bronze hover:text-charcoal-black"
          >
            Book Site Visit
            <ArrowUpRight size={18} />
          </a>
        </div>

        <div className="space-y-16">
          {workSites.map((site, siteIndex) => (
            <motion.div
              key={site.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.7, delay: siteIndex * 0.08 }}
            >
              <div className="mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4 text-left">
                <div>
                  <div className="mb-2 flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-warm-white/45">
                    <MapPin size={15} className="text-rich-bronze" />
                    {site.location}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-serif text-warm-white">{site.title}</h3>
                </div>
                <span className="w-fit rounded-full bg-rich-bronze/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-rich-bronze">
                  {site.status}
                </span>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-4">
                {site.images.map((image, index) => (
                  <motion.figure
                    key={image}
                    className={`group relative overflow-hidden rounded-2xl bg-white/5 ${
                      index === 0 ? 'col-span-2 row-span-2 aspect-[4/5]' : 'aspect-square'
                    }`}
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.25 }}
                  >
                    <img
                      src={image}
                      alt={`${site.title} work photo ${index + 1}`}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent opacity-70" />
                  </motion.figure>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
