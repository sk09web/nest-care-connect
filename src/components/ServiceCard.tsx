
import React from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';

interface ServiceCardProps {
  id: string;
  title: string;
  category: string;
  rating: number;
  reviews: number;
  price: string;
  image: string;
}

const ServiceCard = ({ id, title, category, rating, reviews, price, image }: ServiceCardProps) => {
  return (
    <Link to={`/services/${id}`} className="group">
      <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg">
        <div className="h-48 overflow-hidden">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transition-all duration-300 group-hover:scale-105"
          />
        </div>
        
        <div className="p-4">
          <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">
            {category}
          </span>
          
          <h3 className="mt-2 text-lg font-semibold line-clamp-1 group-hover:text-primary transition-colors">
            {title}
          </h3>
          
          <div className="mt-1 flex items-center space-x-1">
            <Star size={16} className="text-yellow-400 fill-yellow-400" />
            <span className="text-sm font-medium">{rating.toFixed(1)}</span>
            <span className="text-sm text-gray-500">({reviews})</span>
          </div>
          
          <div className="mt-3 pt-3 border-t border-gray-100 flex justify-between items-center">
            <div className="text-primary font-semibold">
              {price}
            </div>
            <div className="text-sm text-gray-500">
              Book Now
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ServiceCard;
