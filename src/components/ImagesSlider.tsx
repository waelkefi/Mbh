import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface SlideData {
  id: number;
  type: 'vertical' | 'horizontal';
  images: string[];
}

const ImageSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Sample agricultural/farming images
  const slides: SlideData[] = [
    {
      id: 1,
      type: 'vertical',
      images: [
        'https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=600&h=400&fit=crop',
        'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=600&h=400&fit=crop',
        'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=600&h=400&fit=crop'
      ]
    },
    {
      id: 2,
      type: 'horizontal',
      images: [
        'https://images.unsplash.com/photo-1560493676-04071c5f467b?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1605000797499-95a51c5269ae?w=400&h=300&fit=crop'
      ]
    },
    {
      id: 3,
      type: 'vertical',
      images: [
        'https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=600&h=400&fit=crop',
        'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&h=400&fit=crop',
        'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=600&h=400&fit=crop'
      ]
    },
    {
      id: 4,
      type: 'horizontal',
      images: [
        'https://images.unsplash.com/photo-1592982664479-69454da10cdb?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1573167243872-43c6433b9d40?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1566281796817-93bc94d7dbd2?w=400&h=300&fit=crop'
      ]
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(nextSlide, 4000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, currentSlide]);

  return (
    <div 
      className="relative w-full max-w-6xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      {/* Main slider container */}
      <div className="relative h-[600px] overflow-hidden">
        <div 
          className="flex transition-transform duration-700 ease-in-out h-full"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide) => (
            <div key={slide.id} className="w-full flex-shrink-0 h-full">
              {slide.type === 'vertical' ? (
                <VerticalSlide images={slide.images} />
              ) : (
                <HorizontalSlide images={slide.images} />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Navigation arrows */}
      <Button
        variant="outline"
        size="icon"
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white backdrop-blur-sm border-2 border-gray-200 shadow-lg z-10"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-5 w-5" />
      </Button>

      <Button
        variant="outline"
        size="icon"
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white backdrop-blur-sm border-2 border-gray-200 shadow-lg z-10"
        onClick={nextSlide}
      >
        <ChevronRight className="h-5 w-5" />
      </Button>

      {/* Dot indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-blue-600 scale-125' 
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>

      {/* Slide counter */}
      <div className="absolute top-6 right-6 bg-black/60 text-white px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm">
        {currentSlide + 1} / {slides.length}
      </div>
    </div>
  );
};

// Vertical slide layout component - matches your screenshot design
const VerticalSlide = ({ images }: { images: string[] }) => (
  <div className="flex h-full p-4 bg-gradient-to-br from-green-50 to-blue-50 gap-3">
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
    <div className="flex flex-col gap-3" style={{ width: '200px' }}>
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
  <div className="flex flex-col h-full p-4 bg-gradient-to-br from-amber-50 to-green-50 gap-3">
    {/* Top - Two images side by side */}
    <div className="flex gap-3" style={{ height: '200px' }}>
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

export default ImageSlider;