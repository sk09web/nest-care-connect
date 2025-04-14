
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      setIsMenuOpen(false);
      element.scrollIntoView({ behavior: 'smooth' });
    } else if (location.pathname !== '/') {
      window.location.href = `/#${sectionId}`;
    }
  };

  const scrollToTop = () => {
    setIsMenuOpen(false);
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    // Check for hash in URL when component mounts or updates
    if (location.hash) {
      const id = location.hash.substring(1);
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [location.hash]);

  return (
    <header className="w-full py-4 bg-white shadow-sm sticky top-0 z-50">
      <div className="container-custom flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center" onClick={scrollToTop}>
          <span className="text-2xl font-bold text-nestcare-500">
            Nest
            <span className="text-nestcare2-500">Care</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <button 
            onClick={scrollToTop} 
            className={`text-base font-medium transition-colors ${isActive('/') ? 'text-primary' : 'text-gray-700 hover:text-primary'}`}
          >
            Home
          </button>
          <button 
            onClick={() => scrollToSection('services')} 
            className={`text-base font-medium transition-colors text-gray-700 hover:text-primary`}
          >
            Services
          </button>
          <button 
            onClick={() => scrollToSection('how-it-works')} 
            className={`text-base font-medium transition-colors text-gray-700 hover:text-primary`}
          >
            How It Works
          </button>
          <button
            onClick={() => scrollToSection('footer')} 
            className={`text-base font-medium transition-colors text-gray-700 hover:text-primary`}
          >
            About
          </button>
        </nav>

        {/* CTA Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <Button variant="outline" asChild>
            <Link to="/login">Login</Link>
          </Button>
          <Button asChild>
            <Link to="/register">Register</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-white pt-16">
          <div className="container-custom flex flex-col space-y-4 py-4">
            <button 
              onClick={scrollToTop} 
              className="text-lg py-2 text-gray-700 text-left"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('services')} 
              className="text-lg py-2 text-gray-700 text-left"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('how-it-works')} 
              className="text-lg py-2 text-gray-700 text-left"
            >
              How It Works
            </button>
            <button 
              onClick={() => scrollToSection('footer')} 
              className="text-lg py-2 text-gray-700 text-left"
            >
              About
            </button>
            <div className="pt-4 flex flex-col space-y-3">
              <Button variant="outline" asChild className="w-full">
                <Link to="/login" onClick={() => setIsMenuOpen(false)}>Login</Link>
              </Button>
              <Button asChild className="w-full">
                <Link to="/register" onClick={() => setIsMenuOpen(false)}>Register</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
