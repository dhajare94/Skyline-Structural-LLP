import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, Building2 } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Projects', href: '/projects' },
    { name: 'Why Choose Us', href: '/why-choose-us' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-lg border-b border-slate-200' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-r from-blue-900 to-blue-700 rounded-lg">
              <Building2 className="w-6 h-6 text-white" />
            </div>
            <div className="flex flex-col">
              <span className={`text-lg font-bold transition-colors ${
                isScrolled 
                  ? 'text-slate-900 group-hover:text-blue-900' 
                  : 'text-white group-hover:text-blue-200'
              }`}>
                Skyline Structural
              </span>
              <span className={`text-xs -mt-1 transition-colors ${
                isScrolled ? 'text-slate-600' : 'text-slate-300'
              }`}>
                LLP
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            {navigation.map((item) => {
              const isActive = location.pathname === item.href;
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-sm font-medium transition-all duration-200 relative px-2 py-1 rounded-md ${
                    isActive
                      ? isScrolled
                        ? 'text-blue-900 bg-blue-50 font-semibold'
                        : 'text-blue-300 bg-white/10 font-semibold'
                      : isScrolled
                      ? 'text-slate-700 hover:text-blue-900 hover:bg-slate-50'
                      : 'text-white hover:text-blue-200 hover:bg-white/10'
                  }`}
                >
                  {item.name}
                  {isActive && (
                    <motion.div
                      layoutId="underline"
                      className={`absolute -bottom-1 left-0 right-0 h-0.5 rounded-full ${
                        isScrolled ? 'bg-blue-900' : 'bg-blue-300'
                      }`}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`lg:hidden p-2 rounded-md transition-colors ${
              isScrolled 
                ? 'hover:bg-slate-100 text-slate-900' 
                : 'hover:bg-white/10 text-white'
            }`}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="lg:hidden bg-white border-t border-slate-200 shadow-lg"
        >
          <div className="max-w-7xl mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-2">
              {navigation.map((item) => {
                const isActive = location.pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`text-base font-medium transition-colors py-3 px-4 rounded-lg ${
                      isActive
                        ? 'text-blue-900 bg-blue-50 font-semibold border-l-4 border-blue-900'
                        : 'text-slate-700 hover:text-blue-900 hover:bg-slate-50'
                    }`}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </nav>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Header;