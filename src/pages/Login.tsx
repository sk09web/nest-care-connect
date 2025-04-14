
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AuthForm from '@/components/AuthForm';

const Login = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow py-12 bg-gray-50">
        <div className="container-custom flex flex-col items-center">
          <div className="w-full max-w-md mb-8 text-center">
            <h1 className="text-3xl font-bold mb-2">Welcome Back</h1>
            <p className="text-gray-600">
              Sign in to your NestCare account to manage your services
            </p>
          </div>
          
          <AuthForm initialTab="login" />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Login;
