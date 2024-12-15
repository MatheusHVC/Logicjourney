import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface GameModeCardProps {
  image: string;
  title: string;
  isMiddle?: boolean;
}

function GameModeCard({ image, title, isMiddle }: GameModeCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`relative transition-transform duration-300 ${
        isMiddle ? 'z-10' : 'z-0'
      } ${isHovered ? 'scale-105' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative w-72 overflow-hidden">
        {/* Main Card Container */}
        <div className="relative rounded-lg overflow-hidden border-2 border-gray-800">
          {/* Image Container */}
          <div className="h-[400px] w-full">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Title Container */}
          <div className="h-[80px] bg-gray-900 flex items-center justify-center">
            <h3 className="text-xl text-center font-cinzel text-yellow-500 font-bold">
              {title}
            </h3>
          </div>
        </div>

        {/* Hover Overlay */}
        <div
          className={`absolute inset-0 bg-black/40 transition-opacity duration-300 ${
            isHovered ? 'opacity-0' : 'opacity-100'
          }`}
        />
      </div>
    </div>
  );
}

export function GameModes() {
  const navigate = useNavigate();

  return (
    <div className="relative py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-12">
          {/* Title */}
          <h2 className="text-4xl font-bold text-center font-cinzel">
            <span className="text-yellow-500">Vários modos</span>, tendo o
            <br />
            <span className="text-yellow-500">entretenimento como forma de</span>
            <br />
            <span className="text-yellow-500">aprendizado</span>
          </h2>

          {/* Description */}
          <p className="text-lg text-gray-300 text-center max-w-3xl font-montserrat">
            Embarque em uma aventura única onde cada passo é uma descoberta no fascinante universo da programação. Em "Logic Journey", você não apenas joga - você aprende, explora e domina conceitos que são a base da tecnologia moderna.
          </p>

          {/* Cards */}
          <div className="flex flex-col sm:flex-row gap-6 items-center justify-center mt-8">
            <GameModeCard
              image="/src/assets/images/login.jpg"
              title="Lógica"
            />
            <GameModeCard
              image="/src/assets/images/cadastro.jpg"
              title="Programação"
              isMiddle
            />
            <GameModeCard
              image="/src/assets/images/divesrsão.jpg"
              title="Diversão"
            />
          </div>

          {/* Button */}
          <button 
            onClick={() => navigate('/register')}
            className="group px-8 py-3 bg-yellow-500 text-black rounded-lg text-lg font-semibold hover:bg-yellow-400 transition-colors font-montserrat inline-flex items-center space-x-2"
          >
            <span>Jogue agora</span>
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-12 left-8 w-3 h-3 bg-yellow-500 rounded-full animate-pulse" />
      <div className="absolute bottom-12 right-8 w-3 h-3 bg-yellow-500 rounded-full animate-pulse" />
    </div>
  );
}