import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export default function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', value: 'home' },
    { label: 'About', value: 'about' },
    { label: 'Mission', value: 'mission' },
    { label: 'Work', value: 'work' },
    { label: 'Portfolio', value: 'portfolio' },
    { label: 'Contact', value: 'contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'glass py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <button
          onClick={() => onNavigate('home')}
          className="text-2xl font-light tracking-wider text-gold-400 hover:text-gold-300 transition-colors duration-300"
        >
          AURIC MINDS
        </button>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.value}
              onClick={() => onNavigate(item.value)}
              className={`text-sm tracking-wide transition-all duration-300 relative group ${
                currentPage === item.value
                  ? 'text-gold-400'
                  : 'text-gray-300 hover:text-gold-400'
              }`}
            >
              {item.label}
              <span
                className={`absolute -bottom-1 left-0 h-px bg-gold-400 transition-all duration-300 ${
                  currentPage === item.value ? 'w-full' : 'w-0 group-hover:w-full'
                }`}
              />
            </button>
          ))}
        </div>

        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-gray-300 hover:text-gold-400 transition-colors"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden glass mt-4 mx-6 rounded-lg overflow-hidden">
          {navItems.map((item) => (
            <button
              key={item.value}
              onClick={() => {
                onNavigate(item.value);
                setIsMobileMenuOpen(false);
              }}
              className={`w-full text-left px-6 py-4 transition-all duration-300 ${
                currentPage === item.value
                  ? 'bg-gold-500/20 text-gold-400'
                  : 'text-gray-300 hover:bg-white/5 hover:text-gold-400'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
