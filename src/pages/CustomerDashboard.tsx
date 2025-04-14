import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { 
  Calendar, 
  ClipboardList, 
  Clock, 
  Star, 
  Plus, 
  CircleCheck, 
  Circle,
  CircleX,
  Search
} from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const serviceRequests = [
  {
    id: "sr1",
    service: "House Cleaning",
    provider: "Maria Rodriguez",
    date: "Apr 20, 2025",
    time: "10:00 AM - 12:00 PM",
    status: "scheduled",
    price: "$75"
  },
  {
    id: "sr2",
    service: "Plumbing Repair",
    provider: "John Smith",
    date: "Apr 15, 2025",
    time: "2:00 PM - 4:00 PM",
    status: "completed",
    price: "$120"
  },
  {
    id: "sr3",
    service: "Garden Maintenance",
    provider: "Pending Assignment",
    date: "Apr 25, 2025",
    time: "9:00 AM - 11:00 AM",
    status: "pending",
    price: "$60"
  }
];

const CustomerDashboard = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow py-8 bg-gray-50">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <div>
              <h1 className="text-2xl font-bold">Customer Dashboard</h1>
              <p className="text-gray-600">Manage your service requests and preferences</p>
            </div>
            <Button asChild className="mt-4 md:mt-0">
              <Link to="/request-service" className="flex items-center">
                <Plus size={16} className="mr-2" />
                <span>Request New Service</span>
              </Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card>
              <CardContent className="p-6 flex items-center space-x-4">
                <div className="p-3 rounded-full bg-nestcare-100">
                  <ClipboardList size={24} className="text-nestcare-600" />
                </div>
                <div>
                  <p className="text-gray-500 text-sm">Total Requests</p>
                  <h3 className="text-2xl font-bold">12</h3>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 flex items-center space-x-4">
                <div className="p-3 rounded-full bg-nestcare2-100">
                  <Clock size={24} className="text-nestcare2-600" />
                </div>
                <div>
                  <p className="text-gray-500 text-sm">Active Requests</p>
                  <h3 className="text-2xl font-bold">2</h3>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 flex items-center space-x-4">
                <div className="p-3 rounded-full bg-yellow-100">
                  <Star size={24} className="text-yellow-600" />
                </div>
                <div>
                  <p className="text-gray-500 text-sm">Reviews Given</p>
                  <h3 className="text-2xl font-bold">8</h3>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Next Upcoming Service</CardTitle>
              <CardDescription>Your scheduled service that's coming up next</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                <div className="md:w-2/3">
                  <h3 className="text-xl font-semibold">House Cleaning</h3>
                  <div className="mt-2 text-gray-600">
                    <p className="flex items-center mb-1">
                      <Calendar size={16} className="mr-2" />
                      <span>April 20, 2025 • 10:00 AM - 12:00 PM</span>
                    </p>
                    <p className="flex items-center">
                      <User size={16} className="mr-2" />
                      <span>Maria Rodriguez</span>
                    </p>
                  </div>
                </div>
                <div className="md:w-1/3 md:text-right flex md:block items-center justify-between">
                  <div className="bg-blue-100 text-blue-800 inline-flex items-center px-3 py-1 rounded-full text-sm font-medium">
                    <Circle size={16} className="mr-1" />
                    <span>Scheduled</span>
                  </div>
                  <p className="text-xl font-semibold mt-1">$75</p>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-end space-x-2">
              <Button variant="outline">Reschedule</Button>
              <Button variant="destructive">Cancel</Button>
            </CardFooter>
          </Card>
          
          <Card>
            <CardHeader>
              <div className="flex flex-col md:flex-row justify-between md:items-center">
                <div>
                  <CardTitle>Service Requests</CardTitle>
                  <CardDescription>Manage all your service requests</CardDescription>
                </div>
                <div className="relative mt-2 md:mt-0">
                  <Search size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <Input placeholder="Search requests..." className="pl-9 w-full md:w-auto" />
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="all">
                <TabsList className="mb-4">
                  <TabsTrigger value="all">All</TabsTrigger>
                  <TabsTrigger value="pending">Pending</TabsTrigger>
                  <TabsTrigger value="scheduled">Scheduled</TabsTrigger>
                  <TabsTrigger value="completed">Completed</TabsTrigger>
                </TabsList>
                
                <TabsContent value="all" className="space-y-4">
                  {serviceRequests.map(request => (
                    <div key={request.id} className="border rounded-lg p-4 flex flex-col md:flex-row justify-between">
                      <div className="md:w-1/2">
                        <h4 className="font-semibold">{request.service}</h4>
                        <p className="text-sm text-gray-600">{request.provider}</p>
                        <p className="text-sm text-gray-600 flex items-center mt-1">
                          <Calendar size={14} className="mr-1" />
                          <span>{request.date}, {request.time}</span>
                        </p>
                      </div>
                      <div className="flex items-center justify-between md:w-1/2 mt-4 md:mt-0">
                        <div>
                          {request.status === 'scheduled' && (
                            <span className="bg-blue-100 text-blue-800 inline-flex items-center px-3 py-1 rounded-full text-sm font-medium">
                              <Circle size={14} className="mr-1" />
                              Scheduled
                            </span>
                          )}
                          {request.status === 'completed' && (
                            <span className="bg-green-100 text-green-800 inline-flex items-center px-3 py-1 rounded-full text-sm font-medium">
                              <CircleCheck size={14} className="mr-1" />
                              Completed
                            </span>
                          )}
                          {request.status === 'pending' && (
                            <span className="bg-yellow-100 text-yellow-800 inline-flex items-center px-3 py-1 rounded-full text-sm font-medium">
                              <Circle size={14} className="mr-1" />
                              Pending
                            </span>
                          )}
                        </div>
                        <div className="text-right">
                          <p className="font-semibold">{request.price}</p>
                          <Link to={`/service-request/${request.id}`} className="text-sm text-primary hover:underline">
                            View Details
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </TabsContent>
                
                <TabsContent value="pending">
                  <div className="border rounded-lg p-4 flex flex-col md:flex-row justify-between">
                    <div className="md:w-1/2">
                      <h4 className="font-semibold">Garden Maintenance</h4>
                      <p className="text-sm text-gray-600">Pending Assignment</p>
                      <p className="text-sm text-gray-600 flex items-center mt-1">
                        <Calendar size={14} className="mr-1" />
                        <span>Apr 25, 2025, 9:00 AM - 11:00 AM</span>
                      </p>
                    </div>
                    <div className="flex items-center justify-between md:w-1/2 mt-4 md:mt-0">
                      <div>
                        <span className="bg-yellow-100 text-yellow-800 inline-flex items-center px-3 py-1 rounded-full text-sm font-medium">
                          <Circle size={14} className="mr-1" />
                          Pending
                        </span>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold">$60</p>
                        <Link to="/service-request/sr3" className="text-sm text-primary hover:underline">
                          View Details
                        </Link>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="scheduled">
                  <div className="border rounded-lg p-4 flex flex-col md:flex-row justify-between">
                    <div className="md:w-1/2">
                      <h4 className="font-semibold">Plumbing Repair</h4>
                      <p className="text-sm text-gray-600">John Smith</p>
                      <p className="text-sm text-gray-600 flex items-center mt-1">
                        <Calendar size={14} className="mr-1" />
                        <span>Apr 15, 2025, 2:00 PM - 4:00 PM</span>
                      </p>
                    </div>
                    <div className="flex items-center justify-between md:w-1/2 mt-4 md:mt-0">
                      <div>
                        <span className="bg-blue-100 text-blue-800 inline-flex items-center px-3 py-1 rounded-full text-sm font-medium">
                          <Circle size={14} className="mr-1" />
                          Scheduled
                        </span>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold">$120</p>
                        <Link to="/service-request/sr2" className="text-sm text-primary hover:underline">
                          View Details
                        </Link>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="completed">
                  <div className="border rounded-lg p-4 flex flex-col md:flex-row justify-between">
                    <div className="md:w-1/2">
                      <h4 className="font-semibold">House Cleaning</h4>
                      <p className="text-sm text-gray-600">Maria Rodriguez</p>
                      <p className="text-sm text-gray-600 flex items-center mt-1">
                        <Calendar size={14} className="mr-1" />
                        <span>Apr 20, 2025, 10:00 AM - 12:00 PM</span>
                      </p>
                    </div>
                    <div className="flex items-center justify-between md:w-1/2 mt-4 md:mt-0">
                      <div>
                        <span className="bg-green-100 text-green-800 inline-flex items-center px-3 py-1 rounded-full text-sm font-medium">
                          <CircleCheck size={14} className="mr-1" />
                          Completed
                        </span>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold">$75</p>
                        <Link to="/service-request/sr1" className="text-sm text-primary hover:underline">
                          View Details
                        </Link>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

const User = ({ size, className }: { size: number, className: string }) => (
  <div className={className} style={{ width: size, height: size }}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
      <circle cx="12" cy="7" r="4"></circle>
    </svg>
  </div>
);

export default CustomerDashboard;
