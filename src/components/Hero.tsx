import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export function Hero() {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/src/assets/images/background.jpg')",
          backgroundPosition: 'center',
          backgroundSize: 'cover'
        }}
      ></div>
      
      {/* Dark Overlay with Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-gray-900" />
      
      {/* Content */}
      <div className="relative pt-32 pb-16 sm:pt-48 sm:pb-24 lg:pt-64 lg:pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="text-5xl sm:text-7xl font-bold text-yellow-500 mb-6 font-cinzel leading-tight">
              Welcome To
              <br />
              Logic Journey
            </h1>
            <p className="text-lg sm:text-xl text-gray-200 mb-8 font-montserrat max-w-xl">
              É um jogo interativo que facilita o aprendizado de programação. Através de desafios divertidos, os jogadores desenvolvem habilidades de lógica e codificação, explorando conceitos fundamentais de maneira envolvente e educativa.
            </p>
            <button 
              onClick={() => navigate('/register')}
              className="group px-8 py-3 bg-yellow-500 text-black rounded-lg text-lg font-semibold hover:bg-yellow-400 transition-colors font-montserrat inline-flex items-center space-x-2"
            >
              <span>Começar aventura</span>
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
