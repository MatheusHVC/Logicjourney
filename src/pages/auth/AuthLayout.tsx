import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface AuthLayoutProps {
  children: React.ReactNode;
  title: string;
}

export function AuthLayout({ children, title }: AuthLayoutProps) {
  const navigate = useNavigate();

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="w-full max-w-5xl bg-gray-800 rounded-lg shadow-xl relative flex overflow-hidden">
        {/* Image Section */}
        <div className="hidden lg:block lg:w-1/2 relative">
          <img
            src="/src/assets/images/cadastro.jpg"
            alt="Game Character"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-800/50 to-transparent" />
        </div>

        {/* Form Section */}
        <div className="w-full lg:w-1/2 relative">
          <button
            onClick={() => navigate(-1)}
            className="absolute top-4 left-4 p-2 text-gray-400 hover:text-white transition-colors"
            aria-label="Voltar"
          >
            <ArrowLeft size={24} />
          </button>

          <div className="px-6 py-12">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
              <h2 className="text-center text-3xl font-bold text-yellow-500 font-cinzel">
                Logic Journey
              </h2>
              <h3 className="mt-6 text-center text-2xl font-bold text-white font-montserrat">
                {title}
              </h3>
            </div>

            <div className="mt-8">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}