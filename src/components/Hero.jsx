import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import heroBg from '../assets/img/hero-bg.jpg';

export default function Hero() {
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: ['Designer', 'Developer', 'Freelancer', 'Photographer'],
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000,
    });
    return () => typed.destroy();
  }, []);

  return (
    <section id="hero" className="hero section dark-background">
      <img src={heroBg} alt="" data-aos="fade-in" />

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <h2>ngun vuthy</h2>
        <p>
          I'm <span ref={typedRef} className="typed"></span>
          <span className="typed-cursor typed-cursor--blink" aria-hidden="true"></span>
        </p>
      </div>
    </section>
  );
}
