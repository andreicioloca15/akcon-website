import { ChevronRight, Home } from 'lucide-react';
import { Link } from 'react-router-dom';

interface BreadcrumbItem {
  label: string;
  path?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav className="bg-gray-50 py-4">
      <div className="max-w-7xl mx-auto px-4">
        <ol className="flex items-center space-x-2 text-sm font-open-sans">
          <li>
            <Link to="/" className="text-gray-600 hover:text-gold transition-all duration-300 flex items-center focus:outline-none focus:ring-2 focus:ring-gold">
              <Home className="w-4 h-4" />
            </Link>
          </li>
          {items.map((item, index) => (
            <li key={index} className="flex items-center space-x-2">
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
