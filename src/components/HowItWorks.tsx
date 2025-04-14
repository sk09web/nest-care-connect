
import React from 'react';
import { Search, Calendar, Star } from 'lucide-react';

const steps = [
  {
    id: 1,
    title: "Find a Service",
    description: "Browse through our wide range of home services and find the one that matches your needs.",
    icon: Search,
    color: "bg-nestcare-100",
    iconColor: "text-nestcare-600",
  },
  {
    id: 2,
    title: "Book a Professional",
    description: "Select a time slot that works for you and book a verified professional with just a few clicks.",
    icon: Calendar,
    color: "bg-nestcare2-100",
    iconColor: "text-nestcare2-600",
  },
  {
    id: 3,
    title: "Get Quality Service",
    description: "Enjoy hassle-free professional service and rate your experience afterward to help our community.",
    icon: Star,
    color: "bg-blue-100",
    iconColor: "text-blue-600",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-16 bg-white" id="how-it-works">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3">How It Works</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Getting the help you need for your home has never been easier. Discover our simple process below.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div key={step.id} className="text-center">
              <div className={`w-16 h-16 ${step.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                <step.icon size={32} className={step.iconColor} />
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 h-full">
                <span className="inline-block py-1 px-3 rounded-full bg-gray-100 text-gray-700 text-sm font-medium mb-3">
                  Step {step.id}
                </span>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
