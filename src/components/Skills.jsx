import React, { useEffect, useRef, useState } from 'react';
import { skillsColumn1, skillsColumn2 } from '../data/skills';

function SkillBar({ name, value, animate }) {
  return (
    <div className="progress">
      <span className="skill"><span>{name}</span> <i className="val">{value}%</i></span>
      <div className="progress-bar-wrap">
        <div
          className="progress-bar"
          role="progressbar"
          aria-valuenow={value}
          aria-valuemin="0"
          aria-valuemax="100"
          style={{ width: animate ? `${value}%` : '0%' }}
        ></div>
      </div>
    </div>
  );
}

export default function Skills() {
  const containerRef = useRef(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setAnimate(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.2 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="skills section light-background">
      <div className="container section-title" data-aos="fade-up">
        <h2>Skills</h2>
        <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row skills-content skills-animation" ref={containerRef}>
          <div className="col-lg-6">
            {skillsColumn1.map((skill) => (
              <SkillBar key={skill.name} name={skill.name} value={skill.value} animate={animate} />
            ))}
          </div>
          <div className="col-lg-6">
            {skillsColumn2.map((skill) => (
              <SkillBar key={skill.name} name={skill.name} value={skill.value} animate={animate} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
