
import React from 'react';
import { Award, Gem, Zap, PhoneCall } from 'lucide-react';

const WhyUsSection = () => {
  const reasons = [
    {
      icon: <svg width="48" height="49" viewBox="0 0 48 49" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M30.954 26.2798L33.984 43.3318C34.0179 43.5326 33.9898 43.7389 33.9033 43.9233C33.8167 44.1076 33.676 44.2612 33.4999 44.3634C33.3237 44.4656 33.1206 44.5116 32.9176 44.4952C32.7146 44.4788 32.5215 44.4009 32.364 44.2718L25.204 38.8978C24.8584 38.6396 24.4385 38.5 24.007 38.5C23.5755 38.5 23.1557 38.6396 22.81 38.8978L15.638 44.2698C15.4806 44.3987 15.2877 44.4765 15.085 44.4929C14.8823 44.5093 14.6794 44.4634 14.5033 44.3615C14.3273 44.2596 14.1866 44.1064 14.0998 43.9225C14.0131 43.7385 13.9846 43.5324 14.018 43.3318L17.046 26.2798" stroke="#F3CC2C" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M24 28.5C30.6274 28.5 36 23.1274 36 16.5C36 9.87258 30.6274 4.5 24 4.5C17.3726 4.5 12 9.87258 12 16.5C12 23.1274 17.3726 28.5 24 28.5Z" stroke="#F3CC2C" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
      ,
      title: "Maîtrise avancée de l'irrigation",
      description: "Notre expertise dans la gestion des ressources hydriques nous permet de concevoir des solutions optimales pour chaque projet agricole."
    },
    {
      icon: <svg width="48" height="49" viewBox="0 0 48 49" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 6.5H36L44 18.5L24 44.5L4 18.5L12 6.5Z" stroke="#F3CC2C" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M22 6.5L16 18.5L24 44.5L32 18.5L26 6.5" stroke="#F3CC2C" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M4 18.5H44" stroke="#F3CC2C" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
      ,
      title: "Solutions sur mesure et innovantes",
      description: "Nous développons des solutions personnalisées qui répondent aux défis spécifiques de chaque exploitation agricole."
    },
    {
      icon: <svg width="48" height="49" viewBox="0 0 48 49" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 6.5H36L44 18.5L24 44.5L4 18.5L12 6.5Z" stroke="#F3CC2C" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M22 6.5L16 18.5L24 44.5L32 18.5L26 6.5" stroke="#F3CC2C" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M4 18.5H44" stroke="#F3CC2C" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
      ,
      title: "Équipements fiables et durables",
      description: "Nous sélectionnons rigoureusement les meilleurs équipements pour garantir performance et longévité à vos installations."
    },
    {
      icon: <svg width="48" height="49" viewBox="0 0 48 49" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M44 34.3402V40.3402C44.0022 40.8972 43.8882 41.4485 43.665 41.9589C43.4419 42.4692 43.1146 42.9274 42.7041 43.3039C42.2937 43.6805 41.8091 43.9672 41.2815 44.1456C40.7538 44.3241 40.1947 44.3903 39.64 44.3402C33.4857 43.6715 27.574 41.5685 22.38 38.2002C17.5476 35.1295 13.4507 31.0325 10.38 26.2002C6.99994 20.9826 4.89647 15.0422 4.23999 8.86019C4.19001 8.30713 4.25574 7.74971 4.43299 7.22344C4.61024 6.69717 4.89513 6.21357 5.26952 5.80344C5.64391 5.3933 6.0996 5.06561 6.60757 4.84124C7.11554 4.61686 7.66467 4.50072 8.21999 4.50019H14.22C15.1906 4.49064 16.1316 4.83435 16.8675 5.46726C17.6035 6.10017 18.0841 6.97909 18.22 7.94019C18.4732 9.86033 18.9429 11.7456 19.62 13.5602C19.8891 14.276 19.9473 15.054 19.7878 15.802C19.6283 16.5499 19.2577 17.2364 18.72 17.7802L16.18 20.3202C19.0271 25.3273 23.1729 29.4731 28.18 32.3202L30.72 29.7802C31.2638 29.2425 31.9503 28.8719 32.6982 28.7124C33.4462 28.5529 34.2241 28.6111 34.94 28.8802C36.7545 29.5573 38.6399 30.0269 40.56 30.2802C41.5315 30.4173 42.4188 30.9066 43.0531 31.6552C43.6873 32.4038 44.0243 33.3593 44 34.3402Z" stroke="#F3CC2C" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M28.1 4.5C32.1765 4.92954 35.9843 6.7376 38.8937 9.62516C41.8031 12.5127 43.6398 16.3068 44.1 20.38" stroke="#F3CC2C" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M28.1 12.5C30.067 12.8879 31.872 13.8581 33.2807 15.2846C34.6895 16.7112 35.6369 18.5283 36 20.5" stroke="#F3CC2C" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
      ,
      title: "Service après-vente réactif",
      description: "Notre équipe reste à votre écoute et intervient rapidement pour assurer un suivi personnalisé et une tranquillité d'esprit totale."
    }
  ];

  return (
    <section id="why-us" className="section-padding bg-deep-green text-white" style={{ marginTop: '100px' }}>
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-dream md:text-4xl font-bold mb-4 animate-on-scroll">
            L'excellence à votre service
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto animate-on-scroll">
            Nous sommes votre partenaire de confiance pour une irrigation performante et durable.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {reasons.map((reason, index) => (
            <div 
              key={index} 
              className="whyus-card animate-on-scroll"
              style={{ transitionDelay: `${index * 100}ms`, backgroundColor:"rgba(255, 255, 255, 0.1)", border:"1px solid rgba(255, 255, 255, 0.2)" }}
            >
              <div>
                {reason.icon}
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-1">{reason.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
