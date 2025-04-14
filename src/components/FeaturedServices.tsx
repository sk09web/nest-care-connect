
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import ServiceCard from './ServiceCard';

// Sample data - in a real app, this would come from an API
const services = [
  {
    id: "1",
    title: "Professional House Cleaning",
    category: "Cleaning",
    rating: 4.8,
    reviews: 235,
    price: "From $59",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "2",
    title: "Plumbing Repair & Installation",
    category: "Plumbing",
    rating: 4.7,
    reviews: 189,
    price: "From $75",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c93bc4f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "3",
    title: "Electrical Wiring & Repairs",
    category: "Electrical",
    rating: 4.9,
    reviews: 203,
    price: "From $85",
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "4",
    title: "Gardening & Lawn Care",
    category: "Gardening",
    rating: 4.6,
    reviews: 178,
    price: "From $49",
    image: "https://images.unsplash.com/photo-1582401595412-9e23912a9d25?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  }
];

const FeaturedServices = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center mb-10">
          <div>
            <h2 className="text-3xl font-bold">Popular Services</h2>
            <p className="mt-2 text-gray-600">Find the right service for your needs</p>
          </div>
          <Button variant="ghost" asChild className="mt-4 md:mt-0">
            <Link to="/services" className="flex items-center">
              <span>View all services</span>
              <ArrowRight size={16} className="ml-1" />
            </Link>
          </Button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <ServiceCard key={service.id} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedServices;
