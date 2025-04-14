
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { 
  Calendar, 
  ClipboardList, 
  DollarSign, 
  Star, 
  CircleCheck, 
  CircleClock,
  CircleX,
  Search,
  ThumbsUp,
  BellRing
} from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';

// Sample service requests data
const serviceRequests = [
  {
    id: "sr1",
    customer: "David Wilson",
    address: "123 Main St, Apt 4B, City",
    service: "Plumbing Repair",
    date: "Apr 16, 2025",
    time: "10:00 AM - 12:00 PM",
    status: "pending",
    description: "Leaking faucet and clogged drain in bathroom",
    price: "$85"
  },
  {
    id: "sr2",
    customer: "Sarah Johnson",
    address: "456 Oak Ave, City",
    service: "Plumbing Installation",
    date: "Apr 18, 2025",
    time: "2:00 PM - 5:00 PM",
    status: "accepted",
    description: "Install new kitchen sink and faucet",
    price: "$150"
  },
  {
    id: "sr3",
    customer: "Michael Brown",
    address: "789 Pine Rd, City",
    service: "Plumbing Repair",
    date: "Apr 14, 2025",
    time: "9:00 AM - 11:00 AM",
    status: "completed",
    description: "Fixed water heater",
    price: "$120"
  }
];

const ProfessionalDashboard = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow py-8 bg-gray-50">
        <div className="container-custom">
          {/* Dashboard Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <div>
              <div className="flex items-center">
                <h1 className="text-2xl font-bold">Professional Dashboard</h1>
                <Badge variant="outline" className="ml-3 bg-green-100 text-green-800 hover:bg-green-100">Active</Badge>
              </div>
              <p className="text-gray-600">Manage your service requests and schedules</p>
            </div>
            <Button asChild className="mt-4 md:mt-0">
              <Link to="/profile-settings" className="flex items-center">
                Update Profile
              </Link>
            </Button>
          </div>
          
          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardContent className="p-6 flex items-center space-x-4">
                <div className="p-3 rounded-full bg-nestcare-100">
                  <ClipboardList size={24} className="text-nestcare-600" />
                </div>
                <div>
                  <p className="text-gray-500 text-sm">Jobs This Month</p>
                  <h3 className="text-2xl font-bold">23</h3>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 flex items-center space-x-4">
                <div className="p-3 rounded-full bg-nestcare2-100">
                  <DollarSign size={24} className="text-nestcare2-600" />
                </div>
                <div>
                  <p className="text-gray-500 text-sm">Earnings</p>
                  <h3 className="text-2xl font-bold">$1,850</h3>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 flex items-center space-x-4">
                <div className="p-3 rounded-full bg-yellow-100">
                  <Star size={24} className="text-yellow-600 fill-yellow-400" />
                </div>
                <div>
                  <p className="text-gray-500 text-sm">Rating</p>
                  <h3 className="text-2xl font-bold">4.8/5</h3>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 flex items-center space-x-4">
                <div className="p-3 rounded-full bg-blue-100">
                  <ThumbsUp size={24} className="text-blue-600" />
                </div>
                <div>
                  <p className="text-gray-500 text-sm">Completion Rate</p>
                  <h3 className="text-2xl font-bold">98%</h3>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Today's Schedule */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Today's Schedule</CardTitle>
              <CardDescription>Your appointments for today</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="border rounded-lg p-4 flex flex-col md:flex-row justify-between bg-white">
                  <div className="md:w-1/2">
                    <h4 className="font-semibold">Plumbing Repair</h4>
                    <p className="text-sm text-gray-600">Michael Brown</p>
                    <p className="text-sm text-gray-600">789 Pine Rd, City</p>
                    <p className="text-sm text-gray-600 flex items-center mt-1">
                      <Calendar size={14} className="mr-1" />
                      <span>April 14, 2025, 9:00 AM - 11:00 AM</span>
                    </p>
                  </div>
                  <div className="flex items-center justify-between md:w-1/2 mt-4 md:mt-0">
                    <div className="bg-blue-100 text-blue-800 inline-flex items-center px-3 py-1 rounded-full text-sm font-medium h-fit">
                      <CircleClock size={14} className="mr-1" />
                      <span>Next Appointment</span>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold">$120</p>
                      <Link to="/job-details/sr3" className="text-sm text-primary hover:underline">
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
                
                <div className="text-center py-2 text-gray-500">
                  No other appointments scheduled for today
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* New Requests and Notifications */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle>New Service Requests</CardTitle>
                <CardDescription>Requests waiting for your response</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="border rounded-lg p-4">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h4 className="font-semibold">Plumbing Repair</h4>
                        <p className="text-sm text-gray-600">David Wilson • 123 Main St, Apt 4B, City</p>
                      </div>
                      <Badge className="bg-orange-100 text-orange-800 hover:bg-orange-100">New Request</Badge>
                    </div>
                    
                    <p className="text-sm text-gray-700 mb-3">
                      Leaking faucet and clogged drain in bathroom. Water is slowly dripping and drain is completely blocked.
                    </p>
                    
                    <div className="flex justify-between items-center">
                      <div className="text-sm text-gray-600 flex items-center">
                        <Calendar size={14} className="mr-1" />
                        <span>Apr 16, 2025, 10:00 AM - 12:00 PM</span>
                      </div>
                      <p className="font-semibold">$85</p>
                    </div>
                    
                    <div className="flex justify-end space-x-2 mt-4">
                      <Button variant="outline" size="sm">View Details</Button>
                      <Button variant="outline" size="sm">Decline</Button>
                      <Button size="sm">Accept</Button>
                    </div>
                  </div>
                  
                  <div className="text-center py-2 text-gray-500">
                    No other pending requests at the moment
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <span>Notifications</span>
                  <Badge className="ml-2 bg-red-100 text-red-800">3 New</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="max-h-[300px] overflow-y-auto">
                <div className="space-y-4">
                  <div className="flex space-x-3 p-3 rounded-md bg-blue-50 border border-blue-100">
                    <BellRing size={20} className="text-blue-500 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium">New review received</p>
                      <p className="text-xs text-gray-600">Sarah Johnson left a 5-star review</p>
                      <p className="text-xs text-gray-500 mt-1">10 minutes ago</p>
                    </div>
                  </div>
                  
                  <div className="flex space-x-3 p-3 rounded-md bg-blue-50 border border-blue-100">
                    <BellRing size={20} className="text-blue-500 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium">Payment received</p>
                      <p className="text-xs text-gray-600">Payment of $150 processed for job #SR2</p>
                      <p className="text-xs text-gray-500 mt-1">1 hour ago</p>
                    </div>
                  </div>
                  
                  <div className="flex space-x-3 p-3 rounded-md bg-blue-50 border border-blue-100">
                    <BellRing size={20} className="text-blue-500 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium">New service request</p>
                      <p className="text-xs text-gray-600">You have a new plumbing service request</p>
                      <p className="text-xs text-gray-500 mt-1">3 hours ago</p>
                    </div>
                  </div>
                  
                  <div className="flex space-x-3 p-3">
                    <BellRing size={20} className="text-gray-400 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium">Schedule reminder</p>
                      <p className="text-xs text-gray-600">You have 2 appointments tomorrow</p>
                      <p className="text-xs text-gray-500 mt-1">Yesterday</p>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="border-t bg-gray-50 flex justify-center">
                <Button variant="ghost" size="sm" asChild>
                  <Link to="/notifications">View All Notifications</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
          
          {/* Service Requests */}
          <Card>
            <CardHeader>
              <div className="flex flex-col md:flex-row justify-between md:items-center">
                <div>
                  <CardTitle>All Service Requests</CardTitle>
                  <CardDescription>Manage your service requests</CardDescription>
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
                  <TabsTrigger value="accepted">Accepted</TabsTrigger>
                  <TabsTrigger value="completed">Completed</TabsTrigger>
                </TabsList>
                
                <TabsContent value="all" className="space-y-4">
                  {serviceRequests.map(request => (
                    <div key={request.id} className="border rounded-lg p-4 flex flex-col md:flex-row justify-between">
                      <div className="md:w-1/2">
                        <h4 className="font-semibold">{request.service}</h4>
                        <p className="text-sm text-gray-600">{request.customer} • {request.address}</p>
                        <p className="text-sm text-gray-700 mt-1 line-clamp-1">{request.description}</p>
                        <p className="text-sm text-gray-600 flex items-center mt-1">
                          <Calendar size={14} className="mr-1" />
                          <span>{request.date}, {request.time}</span>
                        </p>
                      </div>
                      <div className="flex items-center justify-between md:w-1/2 mt-4 md:mt-0">
                        <div>
                          {request.status === 'pending' && (
                            <span className="bg-yellow-100 text-yellow-800 inline-flex items-center px-3 py-1 rounded-full text-sm font-medium">
                              <CircleClock size={14} className="mr-1" />
                              Pending
                            </span>
                          )}
                          {request.status === 'accepted' && (
                            <span className="bg-blue-100 text-blue-800 inline-flex items-center px-3 py-1 rounded-full text-sm font-medium">
                              <CircleCheck size={14} className="mr-1" />
                              Accepted
                            </span>
                          )}
                          {request.status === 'completed' && (
                            <span className="bg-green-100 text-green-800 inline-flex items-center px-3 py-1 rounded-full text-sm font-medium">
                              <CircleCheck size={14} className="mr-1" />
                              Completed
                            </span>
                          )}
                        </div>
                        <div className="text-right">
                          <p className="font-semibold">{request.price}</p>
                          <Link to={`/job-details/${request.id}`} className="text-sm text-primary hover:underline">
                            View Details
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </TabsContent>
                
                <TabsContent value="pending">
                  {/* Filtered content for pending requests */}
                </TabsContent>
                <TabsContent value="accepted">
                  {/* Filtered content for accepted requests */}
                </TabsContent>
                <TabsContent value="completed">
                  {/* Filtered content for completed requests */}
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

export default ProfessionalDashboard;
