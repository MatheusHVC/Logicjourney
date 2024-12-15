import { Link as RouterLink } from 'react-router-dom';

interface LinkProps {
  href: string;
  children: React.ReactNode;
}

export function Link({ href, children }: LinkProps) {
  return (
    <RouterLink
      to={href}
      className="text-gray-300 hover:text-yellow-500 transition-colors duration-200 text-sm font-medium"
    >
      {children}
    </RouterLink>
  );
}