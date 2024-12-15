import { Phase } from './types';

interface PhaseCardProps {
  phase: Phase;
}

export function PhaseCard({ phase }: PhaseCardProps) {
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden border border-gray-700 transition-transform hover:scale-105">
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
  );
}