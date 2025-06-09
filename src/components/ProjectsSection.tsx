import React, { useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import image1 from '../images/image1.png';
import image2 from '../images/image2.png';
import image3 from '../images/image3.png';
import image4 from '../images/image4.png';
import image5 from '../images/image5.png';
import image6 from '../images/image6.png';
import image7 from '../images/image7.png';
import image8 from '../images/image8.png';
import image9 from '../images/image9.png';
import image10 from '../images/image10.png';
import image11 from '../images/image11.png';
import image12 from '../images/image12.png';
import image13 from '../images/image13.png';
import image14 from '../images/image14.png';
import image15 from '../images/image15.png';
import image16 from '../images/image16.png';
import image17 from '../images/image17.png';
import image18 from '../images/image18.png';
import image19 from '../images/image19.png';
import image20 from '../images/image20.png';
import image21 from '../images/image21.png';
import image22 from '../images/image22.png';
import image23 from '../images/image23.png';
import image24 from '../images/image24.png';

interface SlideData {
  id: number;
  type: 'vertical' | 'horizontal';
  images: string[];
}

const VerticalSlide = ({ images }: { images: string[] }) => (
  <div className="flex h-full   gap-3">
    {/* Left side - Large image */}
    <div className="flex-1 relative overflow-hidden rounded-xl shadow-lg group hover:shadow-xl transition-all duration-300">
      <img
        src={images[0]}
        alt="Main agricultural scene"
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>

    {/* Right side - Two smaller images stacked */}
    <div className="flex flex-col gap-3" style={{ width: '50%' }}>
      <div className="flex-1 relative overflow-hidden rounded-xl shadow-lg group hover:shadow-xl transition-all duration-300">
        <img
          src={images[1]}
          alt="Agricultural equipment"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="flex-1 relative overflow-hidden rounded-xl shadow-lg group hover:shadow-xl transition-all duration-300">
        <img
          src={images[2]}
          alt="Farming scene"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
    </div>
  </div>
);

// Horizontal slide layout component - matches your screenshot design  
const HorizontalSlide = ({ images }: { images: string[] }) => (
  <div className="flex flex-col h-full gap-3">
    {/* Top - Two images side by side */}
    <div className="flex gap-3" style={{ height: '50%' }}>
      <div className="flex-1 relative overflow-hidden rounded-xl shadow-lg group hover:shadow-xl transition-all duration-300">
        <img
          src={images[0]}
          alt="Agricultural machinery"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="flex-1 relative overflow-hidden rounded-xl shadow-lg group hover:shadow-xl transition-all duration-300">
        <img
          src={images[1]}
          alt="Farm equipment"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
    </div>

    {/* Bottom - One large image */}
    <div className="flex-1 relative overflow-hidden rounded-xl shadow-lg group hover:shadow-xl transition-all duration-300">
      <img
        src={images[2]}
        alt="Agricultural scene"
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
  </div>
);
const ProjectsSection = () => {



const slides: SlideData[] = [
  {
    id: 1,
    type: 'vertical',
    images: [image1, image2, image3],
  },
  {
    id: 2,
    type: 'horizontal',
    images: [image4, image5, image6],
  },
  {
    id: 3,
    type: 'vertical',
    images: [image7, image8, image9],
  },
  {
    id: 4,
    type: 'horizontal',
    images: [image10, image11, image12],
  },
  {
    id: 5,
    type: 'vertical',
    images: [image13, image14, image15],
  },
  {
    id: 6,
    type: 'horizontal',
    images: [image16, image17, image18],
  },
  {
    id: 7,
    type: 'vertical',
    images: [image19, image20, image21],
  },
  {
    id: 8,
    type: 'horizontal',
    images: [image22, image23, image24],
  },
];



  return (
    <section id="projects" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-primary font-dream text-3xl md:text-4xl font-bold mb-4 animate-on-scroll">
            Nos projets en action
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto animate-on-scroll">
            Explorez nos succès et l'impact concret de nos solutions d'irrigation
          </p>
        </div>



        {/* Swiper Slider */}
        <Swiper
          style={{ height: '350px' }}
          modules={[Navigation, Autoplay]} // ✅ ajout des modules
          spaceBetween={20}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 3 },
          }}
        
          autoplay={{ delay: 2000, disableOnInteraction: false }} 
          className="!px-4"
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className="w-full flex-shrink-0 h-full">
                {slide.type === 'vertical' ? (
                  <VerticalSlide images={slide.images} />
                ) : (
                  <HorizontalSlide images={slide.images} />
                )}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>



      </div>
    </section>
  );
};

export default ProjectsSection;
