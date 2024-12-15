import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { PhaseCard } from './PhaseCard';
import { phases } from './data';

export function PhasesSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visiblePhases = 3;
  const maxIndex = phases.length - visiblePhases;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  return (
    <div className="relative py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <h2 className="text-4xl font-bold text-center font-cinzel mb-16">
          <span className="text-yellow-500">Enigmas</span> das{' '}
          <span className="text-yellow-500">fases</span>
        </h2>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 z-10 p-2 rounded-full bg-yellow-500 hover:bg-yellow-400 transition-colors"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6 text-black" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 z-10 p-2 rounded-full bg-yellow-500 hover:bg-yellow-400 transition-colors"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6 text-black" />
          </button>

          {/* Phases Grid */}
          <div className="grid grid-cols-3 gap-8">
            {phases
              .slice(currentIndex, currentIndex + visiblePhases)
              .map((phase) => (
                <PhaseCard key={phase.id} phase={phase} />
              ))}
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-12 left-8 w-3 h-3 bg-yellow-500 rounded-full animate-pulse" />
      <div className="absolute bottom-12 right-8 w-3 h-3 bg-yellow-500 rounded-full animate-pulse" />
    </div>
  );
}