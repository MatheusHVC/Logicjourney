import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import backgroundImage from '../assets/images/background.jpg';

export function ExploreSection() {
  const navigate = useNavigate();

  return (
    <div className="relative py-24 bg-gray-900">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Wooden Board Container */}
        <div className="relative bg-[#CD853F] rounded-lg p-8 shadow-xl overflow-hidden mb-8">
          {/* Wooden Planks */}
          <div className="absolute inset-0">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="h-1/6 w-full bg-[#D2691E] border-b-4 border-[#8B4513] relative"
                style={{
                  backgroundImage: 'linear-gradient(90deg, rgba(139,69,19,0.1) 0%, rgba(139,69,19,0.2) 50%, rgba(139,69,19,0.1) 100%)',
                  transform: i % 2 === 0 ? 'translateX(-4px)' : 'translateX(4px)',
                }}
              >
                <div
                  className="absolute inset-0 opacity-30"
                  style={{
                    backgroundImage: 'repeating-linear-gradient(45deg, transparent 0px, transparent 2px, rgba(139,69,19,0.3) 2px, rgba(139,69,19,0.3) 4px)',
                  }}
                />
              </div>
            ))}
          </div>

          {/* Image Container */}
          <div className="relative h-[75%] z-10">
            <img
              src={backgroundImage}
              alt="Game Character"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>

        {/* Content below wooden board */}
        <div className="flex flex-col items-center space-y-6">
          <h2 className="text-4xl font-bold text-yellow-500 text-center font-cinzel">
            Explore O Mundo Da
            <br />
            Programação
          </h2>
          <p className="text-lg text-gray-300 text-center max-w-2xl font-montserrat">
            Embarque em uma jornada única onde cada passo é uma descoberta no fascinante universo da programação. Em Logic Journey, você irá explorar lógica, criar soluções criativas, desenvolver habilidades essenciais e, acima de tudo, construir desafios e enigmas através de bases sólidas.
          </p>
          <button 
            onClick={() => navigate('/register')}
            className="group px-8 py-3 bg-yellow-500 text-black rounded-lg text-lg font-semibold hover:bg-yellow-400 transition-colors font-montserrat inline-flex items-center space-x-2"
          >
            <span>Jogue agora</span>
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </div>
  );
}
