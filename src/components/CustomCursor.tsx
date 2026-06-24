import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function CustomCursor() {
  const cursorRingRef = useRef<HTMLDivElement>(null);
  const cursorGlowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Disable custom cursor on touch devices
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const ring = cursorRingRef.current;
    const glow = cursorGlowRef.current;
    if (!ring || !glow) return;

    const mousePos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const ringPos = { x: mousePos.x, y: mousePos.y };
    const glowPos = { x: mousePos.x, y: mousePos.y };

    // Set initial position out of view/center
    gsap.set(ring, { xPercent: -50, yPercent: -50, x: mousePos.x, y: mousePos.y });
    gsap.set(glow, { xPercent: -50, yPercent: -50, x: mousePos.x, y: mousePos.y });

    const onMouseMove = (e: MouseEvent) => {
      mousePos.x = e.clientX;
      mousePos.y = e.clientY;
    };

    window.addEventListener('mousemove', onMouseMove);

    // Keep track of velocity for stretching
    let lastX = mousePos.x;
    let lastY = mousePos.y;

    // Hover scale targets (so they don't get overridden by frame ticker sets)
    const hoverState = { ringScale: 1, glowScale: 1 };

    const tick = () => {
      // Ring follows cursor with relatively fast damping
      ringPos.x += (mousePos.x - ringPos.x) * 0.16;
      ringPos.y += (mousePos.y - ringPos.y) * 0.16;

      // Glow blob follows cursor with slower damping to create a visible trail
      glowPos.x += (mousePos.x - glowPos.x) * 0.07;
      glowPos.y += (mousePos.y - glowPos.y) * 0.07;

      // Calculate instantaneous movement vectors
      const dx = mousePos.x - lastX;
      const dy = mousePos.y - lastY;
      const speed = Math.hypot(dx, dy);
      const angle = Math.atan2(dy, dx) * (180 / Math.PI);

      // Save last coordinates
      lastX = mousePos.x;
      lastY = mousePos.y;

      // Map speed to shape deformation (stretch along movement axis)
      const maxStretch = 1.7;
      const stretch = Math.min(1 + speed * 0.025, maxStretch);
      // Compress perpendicular axis to preserve circular area volume
      const squish = Math.max(1 - speed * 0.012, 0.5);

      // Update elements via ticker
      gsap.set(ring, {
        x: ringPos.x,
        y: ringPos.y,
        scale: hoverState.ringScale
      });

      gsap.set(glow, {
        x: glowPos.x,
        y: glowPos.y,
        rotation: angle,
        scaleX: stretch * hoverState.glowScale,
        scaleY: squish * hoverState.glowScale
      });
    };

    gsap.ticker.add(tick);

    // Dynamic hover states on interactive items using event delegation
    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactive = target.closest('a, button, [role="button"], .cursor-pointer, input, textarea, select');

      if (interactive) {
        // Expand ring and glow on hover
        gsap.to(hoverState, {
          ringScale: 1.8,
          glowScale: 1.4,
          duration: 0.35,
          ease: 'power2.out',
          overwrite: 'auto'
        });
        gsap.to(glow, {
          opacity: 0.8,
          duration: 0.35,
          ease: 'power2.out',
          overwrite: 'auto'
        });
      } else {
        // Reset scale and opacity
        gsap.to(hoverState, {
          ringScale: 1,
          glowScale: 1,
          duration: 0.35,
          ease: 'power2.out',
          overwrite: 'auto'
        });
        gsap.to(glow, {
          opacity: 0.55,
          duration: 0.35,
          ease: 'power2.out',
          overwrite: 'auto'
        });
      }
    };

    window.addEventListener('mouseover', onMouseOver);

    // Hide default system cursor
    document.documentElement.classList.add('cursor-none');

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseover', onMouseOver);
      gsap.ticker.remove(tick);
      document.documentElement.classList.remove('cursor-none');
    };
  }, []);

  return (
    <>
      {/* Soft Blurry Trail Glow */}
      <div
        ref={cursorGlowRef}
        className="fixed top-0 left-0 w-20 h-20 rounded-full bg-[#B68D40] blur-xl pointer-events-none z-[9997] will-change-transform opacity-55"
        style={{ transformOrigin: '50% 50%' }}
      />
      {/* Outer Solid Ring */}
      <div
        ref={cursorRingRef}
        className="fixed top-0 left-0 w-8 h-8 rounded-full border-2 border-[#B68D40] pointer-events-none z-[9998] will-change-transform"
        style={{ transformOrigin: '50% 50%' }}
      />
    </>
  );
}
