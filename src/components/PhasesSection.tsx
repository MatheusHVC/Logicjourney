import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

interface Phase {
  id: number;
  title: string;
  description: string;
  image: string;
}

const phases: Phase[] = [
  {
    id: 1,
    title: 'Enigmas das Fases',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.',
    image: '/background.jpg'
  },
  {
    id: 2,
    title: 'Enigmas das Fases',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.',
    image: '/background.jpg'
  },
  {
    id: 3,
    title: 'Enigmas das Fases',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.',
    image: '/background.jpg'
  },
  {
    id: 4,
    title: 'Enigmas das Fases',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.',
    image: '/background.jpg'
  }
];

export function PhasesSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visiblePhases = 3;

  const nextSlide = () => {
    setCurrentIndex((prev) => 
      prev + 1 >= phases.length - visiblePhases + 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => 
      prev - 1 < 0 ? phases.length - visiblePhases : prev - 1
    );
  };

  return (
    <div className="relative py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <h2 className="text-4xl font-bold text-center font-cinzel mb-16">
          <span className="text-yellow-500">Enigmas</span> Das{' '}
          <span className="text-yellow-500">Fases</span>
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
                <div
                  key={phase.id}
                  className="bg-gray-800 rounded-lg overflow-hidden border border-gray-700 transition-transform hover:scale-105"
                >
                  <img
                    src={phase.image}
                    alt={phase.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-yellow-500 mb-3 font-cinzel">
                      {phase.title}
                    </h3>
                    <p className="text-gray-300 text-sm font-montserrat">
                      {phase.description}
                    </p>
                  </div>
                </div>
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