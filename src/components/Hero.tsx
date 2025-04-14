
import React from 'react';
import { Link } from 'react-router-dom';
import { Search, ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Hero = () => {
  return (
    <div className="bg-gradient-to-br from-nestcare-50 to-nestcare2-50 py-16 md:py-24">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
              Your Home, <span className="text-primary">Our Care</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 max-w-xl">
              Connect with trusted home service professionals in minutes. Quality service guaranteed for all your household needs.
            </p>
            
            <div className="bg-white p-2 rounded-lg shadow-lg flex flex-col sm:flex-row">
              <div className="flex-grow relative mb-2 sm:mb-0">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <Input 
                  type="text"
                  placeholder="What service do you need?"
                  className="pl-10 w-full focus-visible:ring-primary"
                />
              </div>
              <Button size="lg" className="whitespace-nowrap">
                Find Services
              </Button>
            </div>
            
            <div className="flex flex-wrap gap-3 pt-2">
              <span className="text-sm text-gray-600">Popular services:</span>
              <Link to="/services/cleaning" className="text-sm text-primary hover:underline">Cleaning</Link>
              <Link to="/services/plumbing" className="text-sm text-primary hover:underline">Plumbing</Link>
              <Link to="/services/electrical" className="text-sm text-primary hover:underline">Electrical</Link>
              <Link to="/services/gardening" className="text-sm text-primary hover:underline">Gardening</Link>
            </div>
            
            <div className="flex items-center space-x-1 text-gray-700">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div 
                    key={i} 
                    className="w-8 h-8 rounded-full border-2 border-white bg-gray-200"
                    style={{ backgroundImage: `url(https://randomuser.me/api/portraits/men/${i + 10}.jpg)`, backgroundSize: 'cover' }}
                  />
                ))}
              </div>
              <span className="text-sm ml-2">
                Trusted by <span className="font-semibold">10,000+</span> customers
              </span>
            </div>
          </div>
          
          <div className="relative hidden lg:block animate-fade-in">
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-nestcare-200 rounded-full opacity-70" />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-nestcare2-200 rounded-full opacity-70" />
            
            <div className="relative bg-white rounded-xl shadow-xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                alt="Professional cleaner" 
                className="w-full h-[500px] object-cover"
              />
              
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                <div className="grid grid-cols-3 gap-3">
                  <div className="bg-white p-3 rounded-lg">
                    <p className="text-xs text-gray-500">Avg. Rating</p>
                    <p className="font-bold text-lg">4.8/5</p>
                  </div>
                  <div className="bg-white p-3 rounded-lg">
                    <p className="text-xs text-gray-500">Professionals</p>
                    <p className="font-bold text-lg">2,500+</p>
                  </div>
                  <div className="bg-white p-3 rounded-lg">
                    <p className="text-xs text-gray-500">Services</p>
                    <p className="font-bold text-lg">50+</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
