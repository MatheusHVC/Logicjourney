import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// Se a imagem estiver em src/assets/images/background.jpg, importe-a assim:
import backgroundImage from '../assets/images/background.jpg';

export function WelcomeSection() {
  const navigate = useNavigate();

  return (
    <div className="relative py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-12">
          {/* Image Container */}
          <div className="relative w-full max-w-4xl rounded-2xl overflow-hidden">
            <img
              src={backgroundImage} // Caminho atualizado para usar a importação correta
              alt="Logic Journey Landscape"
              className="w-full h-auto object-contain"
            />
          </div>

          {/* Title */}
          <div className="text-center -mt-20 relative z-10">
            <h2 className="text-5xl font-bold font-cinzel">
              <span className="text-white">Welcome To</span>
              <br />
              <span className="text-yellow-500">Logic Journey</span>
            </h2>
          </div>

          {/* Description */}
          <p className="text-lg text-gray-300 text-center max-w-3xl font-montserrat">
            É um jogo interativo que facilita o aprendizado de programação. Através de desafios divertidos, os jogadores desenvolvem habilidades de lógica e codificação, explorando conceitos fundamentais de maneira envolvente e educativa.
          </p>

          {/* Button */}
          <button 
            onClick={() => navigate('/register')}
            className="group px-8 py-3 bg-yellow-500 text-black rounded-lg text-lg font-semibold hover:bg-yellow-400 transition-colors font-montserrat inline-flex items-center space-x-2"
          >
            <span>Começar jornada</span>
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </div>
  );
}
