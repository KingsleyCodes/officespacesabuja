'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      url: "/1.jpg",
      caption: "Bespoke Private Office Suites · Kubwa"
    },
    {
      url: "/2.jpg",
      caption: "Premium Curated Coworking Ecosystems"
    },
    {
      url: "/3.jpg",
      caption: "Executive Boardrooms · Kubwa"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="relative min-h-[95vh] sm:min-h-[92vh] flex flex-col justify-center px-4 sm:px-6 lg:px-16 overflow-hidden bg-white border-b border-[#EAEAEA] pt-16 sm:pt-12 pb-40 sm:pb-32 lg:pb-24">
      
      {/* Absolute Full-Bleed Background Image Slideshow Layer */}
      <div className="absolute inset-0 z-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out transform ${
              index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-[1.04]'
            }`}
          >
            <img
              src={slide.url}
              alt={slide.caption}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Premium Cinematic Overlay - Soft & Refined */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-white/90 via-white/60 to-transparent" />
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-white/85 via-transparent to-transparent" />
      
      {/* Ambient Purple Glow - Subtle Behind Hero Text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-[#6D28D9] opacity-10 blur-[180px] rounded-full pointer-events-none z-10" />

      {/* Hero Content Canvas - Refined Typography */}
      <div className="max-w-5xl mx-auto z-20 space-y-8 sm:space-y-10 w-full">
        <span className="text-[10px] sm:text-xs uppercase tracking-[0.35em] text-[#6D28D9] font-medium block">
          Abuja's Premier Workspace Experience
        </span>
        
        <h1 className="font-serif text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-light tracking-tight leading-[1.1] text-[#18181B]">
          Architected for <br />
          <span className="text-[#6D28D9] italic">
            Deep Focus
          </span> & Synergy.
        </h1>
        
        <p className="max-w-xl text-[#52525B] text-xs sm:text-sm md:text-base font-light leading-relaxed">
          An elite workspace ecosystem tailored for corporate innovators, international branches, and executive teams in the heart of Nigeria's capital. Discover private offices wrapped in absolute prestige.
        </p>
        
        <div className="pt-2 flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-md sm:max-w-none">
          <Link 
            href="/spaces" 
            className="px-6 sm:px-8 py-3.5 sm:py-4 bg-[#6D28D9] hover:bg-[#7C3AED] text-white font-medium text-[11px] uppercase tracking-[0.2em] rounded-sm transition-all duration-300 text-center shadow-[0_4px_20px_rgba(109,40,217,0.15)] hover:shadow-[0_8px_30px_rgba(109,40,217,0.25)]"
          >
            Explore Spaces
          </Link>
          <Link 
            href="/contact" 
            className="px-6 sm:px-8 py-3.5 sm:py-4 border border-[#EAEAEA] bg-white/80 backdrop-blur-sm hover:bg-white text-[#18181B] font-medium text-[11px] uppercase tracking-[0.2em] rounded-sm transition-all duration-300 text-center hover:border-[#6D28D9]/30"
          >
            Schedule Private Tour
          </Link>
        </div>
      </div>

      {/* Dynamic Active Slide Micro Label Indicator - Refined */}
      {/* <div className="absolute bottom-36 sm:bottom-28 left-4 sm:left-6 lg:left-16 z-20 hidden md:block">
        <span className="text-[10px] uppercase tracking-[0.2em] text-[#52525B] font-light bg-white/80 backdrop-blur-md px-4 py-2 border border-[#EAEAEA] rounded-sm shadow-[0_8px_30px_rgba(0,0,0,0.04)]">
          Viewing: <span className="text-[#18181B] font-normal">{slides[currentSlide].caption}</span>
        </span>
      </div> */}

      {/* Micro-Bar Navigation Pagination Dots - Refined */}
      <div className="absolute bottom-36 sm:bottom-28 right-4 sm:right-6 lg:right-16 z-20 flex space-x-2.5">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-[2px] transition-all duration-500 rounded-full ${
              index === currentSlide ? 'w-8 bg-[#6D28D9]' : 'w-3 bg-[#D4D4D8] hover:bg-[#71717A]'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Premium Glass Footer Ribbon - Clean & Refined */}
      <div className="absolute bottom-0 left-0 right-0 border-t border-[#EAEAEA] bg-white/80 backdrop-blur-xl py-4 sm:py-6 px-4 sm:px-6 lg:px-16 z-20 shadow-[0_-8px_30px_rgba(0,0,0,0.02)]">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-3 sm:gap-6 text-left">
          <div className="border-l border-[#EAEAEA] pl-2 sm:pl-0 sm:border-none">
            <p className="text-[#71717A] text-[9px] sm:text-[10px] uppercase tracking-[0.25em] font-medium">Locations</p>
            <p className="font-serif text-xs sm:text-sm md:text-base text-[#18181B] mt-0.5 font-light">Kubwa</p>
          </div>
          <div className="border-l border-[#EAEAEA] pl-2 sm:pl-0 sm:border-none">
            <p className="text-[#71717A] text-[9px] sm:text-[10px] uppercase tracking-[0.25em] font-medium">Power Reliability</p>
            <p className="font-serif text-xs sm:text-sm md:text-base text-[#18181B] mt-0.5 font-light">99.9% Grid + Solar</p>
          </div>
          <div className="border-l border-[#EAEAEA] pl-2 sm:pl-0 sm:border-none">
            <p className="text-[#71717A] text-[9px] sm:text-[10px] uppercase tracking-[0.25em] font-medium">Privacy Tiers</p>
            <p className="font-serif text-xs sm:text-sm md:text-base text-[#18181B] mt-0.5 font-light">Soundproof Enclaves</p>
          </div>
          <div className="border-l border-[#EAEAEA] pl-2 sm:pl-0 sm:border-none">
            <p className="text-[#71717A] text-[9px] sm:text-[10px] uppercase tracking-[0.25em] font-medium">Networking</p>
            <p className="font-serif text-xs sm:text-sm md:text-base text-[#18181B] mt-0.5 font-light">Curated Executive Mix</p>
          </div>
        </div>
      </div>

    </section>
  );
}