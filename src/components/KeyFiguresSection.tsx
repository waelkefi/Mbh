
import React, { useEffect, useState, useRef } from 'react';

const KeyFiguresSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const figures = [
    { number: '+150', text: 'Projets réalisés' },
    { number: '95%', text: 'Clients satisfaits' },
    { number: '+15', text: 'Années d\'expérience' }
  ];

  return (
    <section id="key-figures" ref={sectionRef} className="section-padding bg-light-green" style={{marginTop: '100px'}}>
      <div className="container-custom">
        <div className="text-center mb-10">
          <h2 className="text-primary font-dream text-3xl md:text-4xl font-bold mb-4 animate-on-scroll">
            Impact en Chiffres
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {figures.map((figure, index) => (
            <div 
              key={index} 
              className={`stat-card ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} 
              style={{ transitionDelay: `${index * 150}ms`, transition: 'all 0.5s ease-out' }}
            >
              <div className="stat-number">{figure.number}</div>
              <div className="stat-text">{figure.text}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyFiguresSection;
