
import React from 'react';
import { Quote } from 'lucide-react';

// Sample testimonial data with Indian names and faces
const testimonials = [
  {
    id: 1,
    name: "Sakshi Banerjee",
    role: "Homeowner",
    image: "https://images.unsplash.com/photo-1573140813232-5251a09608ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    quote: "NestCare made it so easy to find a reliable cleaner for my home. The professionals are vetted and the service was outstanding!",
  },
  {
    id: 2,
    name: "Ishaan Joshi",
    role: "Apartment Resident",
    image: "https://images.unsplash.com/photo-1562004760-aceed7bb0fe3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    quote: "When my plumbing broke down, I found a qualified plumber through NestCare within an hour. Excellent service and very reasonable prices.",
  },
  {
    id: 3,
    name: "Aradhana Joshi",
    role: "Business Owner",
    image: "https://images.unsplash.com/photo-1573496718413-c97d97b5eb69?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    quote: "I use NestCare for all my office maintenance needs. Their professionals are always punctual, skilled, and trustworthy.",
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3">What Our Customers Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it - hear from some of our satisfied customers about their experience with NestCare.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-100"
            >
              <Quote size={40} className="text-primary/20 mb-4" />
              
              <p className="text-gray-700 italic mb-6">
                "{testimonial.quote}"
              </p>
              
              <div className="flex items-center">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-xl font-medium text-gray-900">
            Join thousands of satisfied customers today!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
