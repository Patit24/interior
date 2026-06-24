import React, { useRef, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  dark?: boolean;
}

export default function TiltCard({ children, className = '', dark = false }: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [glowX, setGlowX] = useState(0);
  const [glowY, setGlowY] = useState(0);

  // Springs for smooth tilting motion
  const rotateX = useSpring(0, { stiffness: 120, damping: 14 });
  const rotateY = useSpring(0, { stiffness: 120, damping: 14 });

  // Map values for tilting rotation angles
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    // Mouse coordinates relative to card center
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    setGlowX(x);
    setGlowY(y);

    const xc = width / 2;
    const yc = height / 2;
    
    // Tilt limit to ±8 degrees
    const rX = -((y - yc) / yc) * 8;
    const rY = ((x - xc) / xc) * 8;

    rotateX.set(rX);
    rotateY.set(rY);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative rounded-[28px] overflow-hidden p-[1px] transition-shadow duration-500 cursor-pointer ${
        dark 
          ? 'shadow-2xl shadow-black/30 hover:shadow-black/60' 
          : 'shadow-lg shadow-charcoal-black/3 hover:shadow-2xl hover:shadow-charcoal-black/8'
      } ${className}`}
      style={{
        perspective: '1000px',
        transformStyle: 'preserve-3d',
      }}
    >
      {/* Dynamic Conic Border Gradient (Fades in/out on hover) */}
      <div
        className="absolute inset-0 rounded-[28px] overflow-hidden z-0 pointer-events-none transition-opacity duration-700"
        style={{ opacity: isHovered ? 1 : 0 }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[180%] h-[180%] bg-[conic-gradient(from_0deg,transparent_0_320deg,#B68D40_360deg)] animate-[spin_4s_linear_infinite]" />
      </div>

      {/* Card Content Container */}
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        className={`relative z-10 w-full h-full rounded-[27px] overflow-hidden transition-colors duration-500 ${
          dark 
            ? 'bg-charcoal-black/90 backdrop-blur-xl border border-white/[0.05]' 
            : 'bg-white/90 backdrop-blur-xl border border-white/60'
        }`}
      >
        {/* Dynamic Glow Spotlight (Framer Motion) */}
        <div
          className="absolute inset-0 pointer-events-none z-10 transition-opacity duration-300"
          style={{
            opacity: isHovered ? 1 : 0,
            background: `radial-gradient(350px circle at ${glowX}px ${glowY}px, ${
              dark ? 'rgba(182, 141, 64, 0.15)' : 'rgba(182, 141, 64, 0.1)'
            }, transparent 80%)`,
          }}
        />

        {/* Custom Inner Content */}
        <div className="relative z-20 w-full h-full flex flex-col justify-between">
          {children}
        </div>
      </motion.div>
    </div>
  );
}
