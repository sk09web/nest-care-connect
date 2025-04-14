
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, User } from 'lucide-react';
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

  return (
    <header className="w-full py-4 bg-white shadow-sm sticky top-0 z-50">
      <div className="container-custom flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <span className="text-2xl font-bold text-nestcare-500">
            Nest
            <span className="text-nestcare2-500">Care</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link 
            to="/" 
            className={`text-base font-medium transition-colors ${isActive('/') ? 'text-primary' : 'text-gray-700 hover:text-primary'}`}
          >
            Home
          </Link>
          <Link 
            to="/services" 
            className={`text-base font-medium transition-colors ${isActive('/services') ? 'text-primary' : 'text-gray-700 hover:text-primary'}`}
          >
            Services
          </Link>
          <Link 
            to="/how-it-works" 
            className={`text-base font-medium transition-colors ${isActive('/how-it-works') ? 'text-primary' : 'text-gray-700 hover:text-primary'}`}
          >
            How It Works
          </Link>
          <Link 
            to="/about" 
            className={`text-base font-medium transition-colors ${isActive('/about') ? 'text-primary' : 'text-gray-700 hover:text-primary'}`}
          >
            About
          </Link>
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
            <Link 
              to="/" 
              className={`text-lg py-2 ${isActive('/') ? 'text-primary font-medium' : 'text-gray-700'}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/services" 
              className={`text-lg py-2 ${isActive('/services') ? 'text-primary font-medium' : 'text-gray-700'}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link 
              to="/how-it-works" 
              className={`text-lg py-2 ${isActive('/how-it-works') ? 'text-primary font-medium' : 'text-gray-700'}`}
              onClick={() => setIsMenuOpen(false)}
            >
              How It Works
            </Link>
            <Link 
              to="/about" 
              className={`text-lg py-2 ${isActive('/about') ? 'text-primary font-medium' : 'text-gray-700'}`}
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
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
