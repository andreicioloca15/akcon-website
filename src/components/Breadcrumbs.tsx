import { ChevronRight, Home } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface BreadcrumbItem {
  label: string;
  path?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  const breadcrumbRef = useScrollAnimation<HTMLElement>({ distance: 20, delay: 0 });

  return (
    <nav ref={breadcrumbRef} className="bg-gray-50 py-4">
      <div className="max-w-7xl mx-auto px-4">
        <ol className="flex items-center space-x-2 text-sm font-open-sans">
          <li className="hover:scale-110 transition-transform duration-300">
            <Link to="/" className="text-gray-600 hover:text-gold transition-all duration-300 flex items-center focus:outline-none focus:ring-2 focus:ring-gold">
              <Home className="w-4 h-4" />
            </Link>
          </li>
          {items.map((item, index) => (
            <li key={index} className="flex items-center space-x-2 animate-in fade-in slide-in-from-left-2" style={{ animationDelay: `${(index + 1) * 100}ms`, animationFillMode: 'backwards' }}>
              <ChevronRight className="w-4 h-4 text-gray-600" />
              {item.path ? (
                <Link to={item.path} className="text-gray-600 hover:text-gold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gold">
                  {item.label}
                </Link>
              ) : (
                <span className="text-gray-700 font-semibold">{item.label}</span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
}
