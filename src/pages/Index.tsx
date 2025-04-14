
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import FeaturedServices from '@/components/FeaturedServices';
import Testimonials from '@/components/Testimonials';
import HowItWorks from '@/components/HowItWorks';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  Clock, 
  CreditCard,
  Users,
  UserCheck,
  ArrowRight
} from 'lucide-react';

const Index = () => {
  // Benefits section data
  const benefits = [
    {
      icon: ShieldCheck,
      title: "Verified Professionals",
      description: "All service providers undergo thorough background checks and verification."
    },
    {
      icon: Clock,
      title: "Flexible Scheduling",
      description: "Book services at your convenience, with options for same-day service."
    },
    {
      icon: CreditCard,
      title: "Secure Payments",
      description: "Pay securely through our platform with multiple payment options."
    },
    {
      icon: UserCheck,
      title: "Satisfaction Guaranteed",
      description: "If you're not satisfied with the service, we'll make it right."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero />
        
        {/* Benefits Section */}
        <section className="py-14 bg-white">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <benefit.icon size={28} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Featured Services */}
        <FeaturedServices />
        
        {/* How It Works */}
        <HowItWorks />
        
        {/* CTA Section */}
        <section className="py-16 bg-primary">
          <div className="container-custom text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to transform your home care experience?
            </h2>
            <p className="text-white/90 max-w-2xl mx-auto mb-8">
              Join thousands of satisfied customers who trust NestCare for all their household needs.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg" variant="secondary" className="text-white">
                <Link to="/services">Browse Services</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
                <Link to="/register">Register Now</Link>
              </Button>
            </div>
          </div>
        </section>
        
        {/* Testimonials */}
        <Testimonials />
        
        {/* For Service Providers */}
        <section className="py-16 bg-gray-50">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                  alt="Service Professionals" 
                  className="rounded-lg shadow-md"
                />
              </div>
              
              <div className="space-y-6">
                <h2 className="text-3xl font-bold">Are You a Service Professional?</h2>
                <p className="text-lg text-gray-600">
                  Join our network of trusted professionals and grow your business with NestCare. Get access to a steady stream of clients and flexible work opportunities.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Users size={24} className="text-primary mt-1 mr-3" />
                    <div>
                      <h4 className="font-semibold">Expand Your Client Base</h4>
                      <p className="text-gray-600">Access thousands of potential customers in your area</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Clock size={24} className="text-primary mt-1 mr-3" />
                    <div>
                      <h4 className="font-semibold">Flexible Schedule</h4>
                      <p className="text-gray-600">Choose when you work and which jobs you accept</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <CreditCard size={24} className="text-primary mt-1 mr-3" />
                    <div>
                      <h4 className="font-semibold">Secure Payments</h4>
                      <p className="text-gray-600">Get paid quickly and securely through our platform</p>
                    </div>
                  </div>
                </div>
                
                <Button asChild>
                  <Link to="/register" className="flex items-center">
                    <span>Join as a Professional</span>
                    <ArrowRight size={16} className="ml-2" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
