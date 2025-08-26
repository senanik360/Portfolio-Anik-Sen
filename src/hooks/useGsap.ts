import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export const useGsapFadeInUp = (delay: number = 0) => {
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (elementRef.current) {
      gsap.fromTo(elementRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          delay,
          duration: 1,
          ease: "power3.out"
        }
      );
    }
  }, [delay]);

  return elementRef;
};

export const useGsapSlideInLeft = (delay: number = 0) => {
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (elementRef.current) {
      gsap.fromTo(elementRef.current,
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          delay,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: elementRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }
  }, [delay]);

  return elementRef;
};

export const useGsapSlideInRight = (delay: number = 0) => {
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (elementRef.current) {
      gsap.fromTo(elementRef.current,
        { opacity: 0, x: 50 },
        {
          opacity: 1,
          x: 0,
          delay,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: elementRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }
  }, [delay]);

  return elementRef;
};

export const useGsapScaleIn = (delay: number = 0) => {
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (elementRef.current) {
      gsap.fromTo(elementRef.current,
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          delay,
          duration: 1,
          ease: "power3.out"
        }
      );
    }
  }, [delay]);

  return elementRef;
};

// Legacy compatibility - just return the individual hooks
export const useGsap = () => {
  return {
    fadeInUp: useGsapFadeInUp,
    slideInLeft: useGsapSlideInLeft,
    slideInRight: useGsapSlideInRight,
    scaleIn: useGsapScaleIn
  };
};