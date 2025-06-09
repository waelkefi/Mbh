
import React, { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Star, UserIcon } from 'lucide-react';

const TestimonialsSection = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      name: "Jean Dupont",
      role: "Viticulteur",
      image: null,
      quote: "Grâce à l'installation du système d'irrigation goutte-à-goutte par MBH, nous avons réduit notre consommation d'eau de 40% tout en améliorant la qualité de nos raisins. Un investissement qui s'est déjà amorti en moins de 3 ans.",
      rating: 5
    },
    {
      name: "Marie Leroy",
      role: "Directrice de parc municipal",
      image: null,
      quote: "L'équipe de MBH a conçu un système d'arrosage intelligent parfaitement adapté aux besoins variés de notre parc. Leur service après-vente est exemplaire, avec une réactivité et un professionnalisme remarquables.",
      rating: 5
    },
    {
      name: "Ahmed Benali",
      role: "Propriétaire de pépinière",
      image: null,
      quote: "Le système automatisé installé par MBH nous a permis d'optimiser notre irrigation et de réduire considérablement notre main d'œuvre. Leur expertise et leurs conseils nous ont été précieux tout au long du projet.",
      rating: 4
    },
    {
      name: "Sophie Martin",
      role: "Gérante d'exploitation maraîchère",
      image: null,
      quote: "Je recommande vivement MBH pour leur approche personnalisée et leur expertise technique. Ils ont su adapter leur solution à nos contraintes spécifiques et rester disponibles pour toute question.",
      rating: 5
    }
  ];

  const scroll = (direction: 'left' | 'right') => {
    if (sliderRef.current) {
      const slideWidth = sliderRef.current.clientWidth;
      const scrollAmount = direction === 'left' ? -slideWidth : slideWidth;
      sliderRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });

      // Update current slide
      setTimeout(() => {
        if (sliderRef.current) {
          const newSlide = Math.round(sliderRef.current.scrollLeft / slideWidth);
          setCurrentSlide(newSlide);
        }
      }, 300);
    }
  };

  const scrollToSlide = (index: number) => {
    if (sliderRef.current) {
      const slideWidth = sliderRef.current.clientWidth;
      sliderRef.current.scrollTo({ left: slideWidth * index, behavior: 'smooth' });
      setCurrentSlide(index);
    }
  };

  return (
    <section id="testimonials" className="section-padding" style={{ backgroundColor: '#F9FAFB' }}>
      <div className="container-custom" style={{ maxWidth: "1000px", margin: "auto" }}>
        <div className="text-center mb-12">
          <h2 className="text-primary font-dream text-3xl md:text-4xl font-bold mb-4 animate-on-scroll">
            Ce Qu'ils Disent De Nous
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto animate-on-scroll">
            Découvrez ce que nos clients disent de nos services et de notre expertise.
          </p>
        </div>

        <div className="relative animate-on-scroll">
          <div
            className="overflow-x-hidden"
            ref={sliderRef}
            style={{ maxWidth: "800px", margin: "auto" }}
          >
            <div className="flex w-full transition-all duration-300">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="min-w-full px-4"
                >
                  <div className="bg-white p-6 rounded-lg">
                    <div className="flex items-center mb-6">
                      {testimonial.image ? (
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-16 h-16 rounded-full object-cover mr-4"
                        />
                      ) : (
                        <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mr-4">
                          <svg width="64" height="65" viewBox="0 0 64 65" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect y="0.5" width="64" height="64" rx="32" fill="#033125" fill-opacity="0.1" />
                            <path d="M41.3333 44.5V41.8333C41.3333 40.4188 40.7714 39.0623 39.7712 38.0621C38.771 37.0619 37.4145 36.5 36 36.5H28C26.5855 36.5 25.2289 37.0619 24.2288 38.0621C23.2286 39.0623 22.6667 40.4188 22.6667 41.8333V44.5" stroke="#033125" strokeWidth="2.66667" strokeLinecap="round" stroke-linejoin="round" />
                            <path d="M32 31.1667C34.9455 31.1667 37.3333 28.7789 37.3333 25.8333C37.3333 22.8878 34.9455 20.5 32 20.5C29.0545 20.5 26.6667 22.8878 26.6667 25.8333C26.6667 28.7789 29.0545 31.1667 32 31.1667Z" stroke="#033125" strokeWidth="2.66667" strokeLinecap="round" stroke-linejoin="round" />
                          </svg>

                        </div>
                      )}
                      <div>
                        <h3 className="text-lg font-semibold text-primary">{testimonial.name}</h3>
                        <p className="text-gray-600">{testimonial.role}</p>
                        <div className="flex mt-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${i < testimonial.rating ? 'text-[#F9DB55] fill-[#F9DB55]' : 'text-gray-300'}`}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                    <blockquote className="italic text-gray-600" style={{ borderLeft: "4px solid #A1C93B", paddingLeft: "16px" }}>
                      "{testimonial.quote}"
                    </blockquote>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-4 md:translate-x-0 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors"
            onClick={() => scroll('left')}
            disabled={currentSlide === 0}
          >
            <ChevronLeft className="h-6 w-6 text-primary" />
          </button>

          <button
            className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-4 md:translate-x-0 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors"
            onClick={() => scroll('right')}
            disabled={currentSlide === testimonials.length - 1}
          >
            <ChevronRight className="h-6 w-6 text-primary" />
          </button>
        </div>

        <div className="flex justify-center space-x-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full ${currentSlide === index ? 'bg-primary' : 'bg-gray-300'}`}
              onClick={() => scrollToSlide(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
