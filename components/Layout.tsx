import React, { useState, useEffect } from 'react';
import { Plane, Search, Menu } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col font-sans bg-premium-dark text-premium-text">
      {/* Floating Header */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'h-14 bg-premium-dark/80 backdrop-blur-xl border-b border-white/5 shadow-lg' 
            : 'h-16 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 h-full flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <span className={`text-lg font-black tracking-tight transition-colors ${isScrolled || !isHome ? 'text-white' : 'text-white'}`}>
              BorderGuide.
            </span>
          </Link>

          {/* Right Actions - Minimalist */}
          <div className="flex items-center gap-4">
            <button className="p-2 text-white/80 hover:text-white transition-colors">
              <Search size={18} strokeWidth={2.5} />
            </button>
            <button className="p-2 text-white/80 hover:text-white transition-colors md:hidden">
              <Menu size={20} />
            </button>
            <div className="hidden md:flex items-center gap-4 text-sm font-medium text-white/70">
              <Link to="/" className="hover:text-premium-accent transition-colors">Destinations</Link>
              <Link to="/" className="hover:text-premium-accent transition-colors">Magazine</Link>
              <button className="px-4 py-1.5 rounded-full border border-white/20 text-xs font-bold hover:bg-white hover:text-black transition-all">
                Sign In
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow pt-0">
        {children}
      </main>

      {/* Modern Minimal Footer */}
      <footer className="bg-premium-dark border-t border-white/5 py-10 mt-auto">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <Plane className="mx-auto text-premium-muted mb-4 opacity-50" size={24} />
          <p className="text-premium-muted text-sm font-medium">
            Designed for the modern traveler.
          </p>
          <p className="text-white/20 text-xs mt-2">
            © 2026 BorderGuide. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;