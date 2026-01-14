"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  image: string;
}

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
  autoPlayInterval?: number;
}

export function TestimonialCarousel({
  testimonials,
  autoPlayInterval = 6000,
}: TestimonialCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      goToNext();
    }, autoPlayInterval);

    return () => clearInterval(timer);
  }, [currentIndex, autoPlayInterval]);

  const goToNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const goToPrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const goToIndex = (index: number) => {
    if (isAnimating || index === currentIndex) return;
    setIsAnimating(true);
    setCurrentIndex(index);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const current = testimonials[currentIndex];

  return (
    <div className="relative max-w-4xl mx-auto">
      {/* Main testimonial */}
      <div className="relative bg-white rounded-2xl shadow-xl p-8 md:p-12">
        {/* Quote Icon */}
        <div className="absolute -top-6 left-8 md:left-12">
          <div className="w-12 h-12 rounded-full bg-[#C9A227] flex items-center justify-center shadow-lg">
            <Quote className="w-6 h-6 text-[#0A1628]" />
          </div>
        </div>

        {/* Content */}
        <div
          className={`transition-all duration-500 ${
            isAnimating ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
          }`}
        >
          <blockquote className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-8 pt-4">
            &ldquo;{current.quote}&rdquo;
          </blockquote>

          <div className="flex items-center gap-4">
            <Image
              src={current.image}
              alt={current.name}
              width={64}
              height={64}
              className="w-16 h-16 rounded-full object-cover border-2 border-[#C9A227]"
            />
            <div>
              <div className="font-bold text-[#0A1628] text-lg">{current.name}</div>
              <div className="text-[#C9A227] font-medium">{current.role}</div>
            </div>
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={goToPrev}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-[#0A1628] text-white flex items-center justify-center hover:bg-[#1E3A5F] transition-colors shadow-lg"
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={goToNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-12 h-12 rounded-full bg-[#0A1628] text-white flex items-center justify-center hover:bg-[#1E3A5F] transition-colors shadow-lg"
          aria-label="Next testimonial"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-8">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => goToIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "bg-[#C9A227] w-8"
                : "bg-gray-300 hover:bg-gray-400"
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}