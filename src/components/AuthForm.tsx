
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Mail, Lock, User, UserPlus, Eye, EyeOff } from 'lucide-react';

interface AuthFormProps {
  initialTab?: 'login' | 'register';
}

const AuthForm = ({ initialTab = 'login' }: AuthFormProps) => {
  const [currentTab, setCurrentTab] = useState(initialTab);
  const [showPassword, setShowPassword] = useState(false);
  const [role, setRole] = useState('customer');

  const toggleShowPassword = () => setShowPassword(!showPassword);

  return (
    <div className="w-full max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <Tabs defaultValue={currentTab} onValueChange={(value) => setCurrentTab(value as 'login' | 'register')}>
        <TabsList className="grid grid-cols-2 w-full mb-6">
          <TabsTrigger value="login" className="text-base">Login</TabsTrigger>
          <TabsTrigger value="register" className="text-base">Register</TabsTrigger>
        </TabsList>
        
        <TabsContent value="login">
          <form className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                <Input id="email" type="email" placeholder="Your email address" className="pl-10" />
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between">
                <Label htmlFor="password">Password</Label>
                <Link to="/forgot-password" className="text-sm text-primary hover:underline">
                  Forgot Password?
                </Link>
              </div>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                <Input 
                  id="password" 
                  type={showPassword ? "text" : "password"} 
                  placeholder="Your password" 
                  className="pl-10" 
                />
                <button 
                  type="button"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  onClick={toggleShowPassword}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              <Checkbox id="remember" />
              <Label htmlFor="remember" className="text-sm cursor-pointer">Remember me</Label>
            </div>
            
            <Button type="submit" className="w-full">
              Sign In
            </Button>
            
            <p className="text-center text-sm text-gray-600 mt-4">
              Don't have an account?{' '}
              <button 
                type="button" 
                className="text-primary hover:underline font-medium"
                onClick={() => setCurrentTab('register')}
              >
                Register
              </button>
            </p>
          </form>
        </TabsContent>
        
        <TabsContent value="register">
          <form className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="full-name">Full Name</Label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                <Input id="full-name" type="text" placeholder="Your full name" className="pl-10" />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="reg-email">Email</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                <Input id="reg-email" type="email" placeholder="Your email address" className="pl-10" />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="role">I want to join as</Label>
              <Select defaultValue={role} onValueChange={setRole}>
                <SelectTrigger>
                  <SelectValue placeholder="Select your role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="customer">Customer</SelectItem>
                  <SelectItem value="professional">Service Professional</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="reg-password">Password</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                <Input 
                  id="reg-password" 
                  type={showPassword ? "text" : "password"} 
                  placeholder="Create a password" 
                  className="pl-10" 
                />
                <button 
                  type="button"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  onClick={toggleShowPassword}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
              <p className="text-xs text-gray-500">
                Password must be at least 8 characters long with a number and a special character.
              </p>
            </div>
            
            <div className="flex items-center space-x-2">
              <Checkbox id="terms" />
              <Label htmlFor="terms" className="text-sm cursor-pointer">
                I agree to the{' '}
                <Link to="/terms" className="text-primary hover:underline">
                  Terms of Service
                </Link>
                {' '}and{' '}
                <Link to="/privacy" className="text-primary hover:underline">
                  Privacy Policy
                </Link>
              </Label>
            </div>
            
            <Button type="submit" className="w-full">
              Create Account
            </Button>
            
            <p className="text-center text-sm text-gray-600 mt-4">
              Already have an account?{' '}
              <button 
                type="button" 
                className="text-primary hover:underline font-medium"
                onClick={() => setCurrentTab('login')}
              >
                Sign In
              </button>
            </p>
          </form>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AuthForm;
