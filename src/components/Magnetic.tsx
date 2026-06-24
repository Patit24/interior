import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';

interface MagneticProps {
  children: React.ReactNode;
  range?: number;
  strength?: number;
  className?: string;
}

export default function Magnetic({ children, range = 45, strength = 0.35, className = '' }: MagneticProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const onMouseMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const distanceX = e.clientX - centerX;
      const distanceY = e.clientY - centerY;
      
      const distance = Math.hypot(distanceX, distanceY);

      if (distance < range) {
        gsap.to(el, {
          x: distanceX * strength,
          y: distanceY * strength,
          duration: 0.3,
          ease: 'power2.out',
          overwrite: 'auto'
        });
      } else {
        gsap.to(el, {
          x: 0,
          y: 0,
          duration: 0.4,
          ease: 'power2.out',
          overwrite: 'auto'
        });
      }
    };

    const onMouseLeave = () => {
      gsap.to(el, {
        x: 0,
        y: 0,
        duration: 0.6,
        ease: 'elastic.out(1, 0.4)',
        overwrite: 'auto'
      });
    };

    el.addEventListener('mousemove', onMouseMove);
    el.addEventListener('mouseleave', onMouseLeave);

    return () => {
      el.removeEventListener('mousemove', onMouseMove);
      el.removeEventListener('mouseleave', onMouseLeave);
    };
  }, [range, strength]);

  return (
    <div ref={containerRef} className={`inline-flex items-center justify-center relative ${className}`}>
      {children}
    </div>
  );
}
