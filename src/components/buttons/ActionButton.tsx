import { ArrowRight } from 'lucide-react';
import { ButtonHTMLAttributes } from 'react';

interface ActionButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function ActionButton({ children, className = '', ...props }: ActionButtonProps) {
  return (
    <button
      className={`group px-8 py-3 bg-yellow-500 text-black rounded-lg text-lg font-semibold hover:bg-yellow-400 transition-colors font-montserrat inline-flex items-center space-x-2 ${className}`}
      {...props}
    >
      <span>{children}</span>
      <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
    </button>
  );
}