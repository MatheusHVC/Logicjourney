import { LogIn, UserPlus } from 'lucide-react';
import { Link } from './Link';
import { useNavigate } from 'react-router-dom';

export function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href="/">
              <span className="text-2xl font-bold bg-gradient-to-r from-yellow-500 to-yellow-200 bg-clip-text text-transparent font-cinzel">
                Logic Journey
              </span>
            </Link>
          </div>
          
          <div className="hidden sm:flex sm:items-center sm:space-x-8">
            <Link href="/">Início</Link>
            <Link href="/objetivos">Objetivos</Link>
            <Link href="/historia">História</Link>
            <div className="flex items-center space-x-4 ml-4">
              <button
                onClick={() => navigate('/login')}
                className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-yellow-500 text-black hover:bg-yellow-400 transition-colors font-montserrat"
              >
                <LogIn size={20} />
                <span>Login</span>
              </button>
              <button
                onClick={() => navigate('/register')}
                className="flex items-center space-x-2 px-4 py-2 rounded-lg border border-yellow-500 text-yellow-500 hover:bg-yellow-500/10 transition-colors font-montserrat"
              >
                <UserPlus size={20} />
                <span>Cadastro</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
