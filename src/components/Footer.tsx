
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="inline-block mb-4">
              <span className="text-2xl font-bold">
                Nest<span className="text-nestcare2-400">Care</span>
              </span>
            </Link>
            <p className="text-gray-400 mb-4">
              Connecting customers with trusted service professionals for all your household needs.
            </p>
            <div className="flex space-x-4 text-gray-400">
              <a href="#" className="hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/how-it-works" className="text-gray-400 hover:text-white transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services/cleaning" className="text-gray-400 hover:text-white transition-colors">
                  Cleaning Services
                </Link>
              </li>
              <li>
                <Link to="/services/plumbing" className="text-gray-400 hover:text-white transition-colors">
                  Plumbing
                </Link>
              </li>
              <li>
                <Link to="/services/electrical" className="text-gray-400 hover:text-white transition-colors">
                  Electrical
                </Link>
              </li>
              <li>
                <Link to="/services/gardening" className="text-gray-400 hover:text-white transition-colors">
                  Gardening
                </Link>
              </li>
              <li>
                <Link to="/services/painting" className="text-gray-400 hover:text-white transition-colors">
                  Painting
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={20} className="mr-2 mt-1 text-gray-400" />
                <span className="text-gray-400">
                  123 Service Avenue, Suite 456<br />
                  Home City, HC 12345
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-2 text-gray-400" />
                <a href="tel:+1234567890" className="text-gray-400 hover:text-white transition-colors">
                  (123) 456-7890
                </a>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-2 text-gray-400" />
                <a href="mailto:info@nestcare.com" className="text-gray-400 hover:text-white transition-colors">
                  info@nestcare.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
            <p>© {currentYear} Nest Care. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy-policy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms-of-service" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link to="/faq" className="hover:text-white transition-colors">
                FAQ
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
