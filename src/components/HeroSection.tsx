
import React from 'react';
// import { ArrowDown } from 'lucide-react';
// import Bg from '../../public/lovable-uploads/Gradient.png';
import bg from '../images/Union1.svg'; 
import image from '../images/Gradient.png'; // Assuming you have a hero image
const HeroSection = () => {
  return (
    <section id="hero" className="relative h-screen flex items-center">
     
      <div className="absolute inset-0 z-0">
        <img 
          src={image}
          alt="Irrigation moderne" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-gradient"style={{ zIndex:"9999"}}></div>
         <img src={bg} alt="" style={{position:"absolute", right:"0",top:"0", zIndex:"9998", height:"100%"}} />
      </div>
      <div className="container-custom header-text-container relative z-10 text-white">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-dream md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
            Optimisez votre irrigation, maximisez votre rendement agricole
          </h1>
          <p className="text-lg mb-8 opacity-90 max-w-2xl animate-fade-in" style={{ animationDelay: '0.2s' }}>
            MODERN IRRIGATION TECHNIQUES vous accompagne avec des solutions modernes et efficaces pour une gestion intelligente de l'eau. Grâce à notre expertise, nous vous offrons des équipements et des services adaptés à vos besoins spécifiques.
          </p>
          <div className="flex flex-wrap gap-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <a href="#contact" className="bg-[#F9DB55] hover:bg-yellow-400 text-primary font-semibold py-3 px-6 rounded-lg transition-colors">
              Contactez-nous
            </a>
            {/* <div className="inline-flex items-center text-white/90">
              <span className="mr-2">📌</span> Parlons de votre projet dès aujourd'hui !
            </div> */}
          </div>
        </div>
        {/* <a href="#key-figures" className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-white">
          <ArrowDown size={36} />
        </a> */}
      </div>
    </section>
  );
};

export default HeroSection;
