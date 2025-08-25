import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export const useGsap = () => {
  const elementRef = useRef<HTMLElement>(null);

  const animateIn = (animation: gsap.TweenVars, trigger?: string) => {
    useEffect(() => {
      if (elementRef.current) {
        const tl = gsap.timeline({
          scrollTrigger: trigger ? {
            trigger: elementRef.current,
            start: trigger,
            toggleActions: "play none none reverse"
          } : undefined
        });

        tl.fromTo(elementRef.current, 
          { opacity: 0, y: 50 },
          { ...animation, duration: 1, ease: "power3.out" }
        );
      }
    }, []);

    return elementRef;
  };

  const staggerIn = (children: string, animation: gsap.TweenVars, stagger: number = 0.1) => {
    useEffect(() => {
      if (elementRef.current) {
        gsap.fromTo(elementRef.current.querySelectorAll(children),
          { opacity: 0, y: 30 },
          { 
            ...animation, 
            duration: 0.8, 
            stagger,
            ease: "power3.out",
            scrollTrigger: {
              trigger: elementRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse"
            }
          }
        );
      }
    }, []);

    return elementRef;
  };

  const fadeInUp = (delay: number = 0) => {
    return animateIn({
      opacity: 1,
      y: 0,
      delay
    });
  };

  const slideInLeft = (delay: number = 0) => {
    return animateIn({
      opacity: 1,
      x: 0,
      delay
    }, "top 80%");
  };

  const slideInRight = (delay: number = 0) => {
    return animateIn({
      opacity: 1,
      x: 0,
      delay
    }, "top 80%");
  };

  const scaleIn = (delay: number = 0) => {
    return animateIn({
      opacity: 1,
      scale: 1,
      delay
    });
  };

  return {
    elementRef,
    animateIn,
    staggerIn,
    fadeInUp,
    slideInLeft,
    slideInRight,
    scaleIn
  };
};
