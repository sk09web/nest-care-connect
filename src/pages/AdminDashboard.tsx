
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { 
  Users, 
  UserCog, 
  PieChart, 
  BarChart3, 
  Settings, 
  FileText, 
  Download, 
  Plus, 
  Search,
  Edit,
  Trash2,
  ChevronDown,
  Shield
} from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';

// Sample users data
const users = [
  {
    id: "u1",
    name: "Maria Rodriguez",
    email: "maria.r@example.com",
    role: "professional",
    status: "active",
    services: "Cleaning",
    joined: "Mar 15, 2025"
  },
  {
    id: "u2",
    name: "John Smith",
    email: "john.s@example.com",
    role: "professional",
    status: "pending",
    services: "Plumbing",
    joined: "Apr 02, 2025"
  },
  {
    id: "u3",
    name: "Sarah Johnson",
    email: "sarah.j@example.com",
    role: "customer",
    status: "active",
    services: "N/A",
    joined: "Feb 20, 2025"
  },
  {
    id: "u4",
    name: "Michael Brown",
    email: "michael.b@example.com",
    role: "customer",
    status: "blocked",
    services: "N/A",
    joined: "Jan 10, 2025"
  }
];

// Sample service data
const services = [
  {
    id: "s1",
    name: "House Cleaning",
    category: "Cleaning",
    providers: 15,
    requests: 78,
    status: "active"
  },
  {
    id: "s2",
    name: "Plumbing Repair",
    category: "Plumbing",
    providers: 8,
    requests: 45,
    status: "active"
  },
  {
    id: "s3",
    name: "Electrical Wiring",
    category: "Electrical",
    providers: 12,
    requests: 32,
    status: "active"
  },
  {
    id: "s4",
    name: "Garden Maintenance",
    category: "Gardening",
    providers: 6,
    requests: 23,
    status: "active"
  }
];

const AdminDashboard = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow py-8 bg-gray-50">
        <div className="container-custom">
          {/* Dashboard Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <div className="flex items-center">
              <Shield size={24} className="text-primary mr-2" />
              <div>
                <h1 className="text-2xl font-bold">Admin Dashboard</h1>
                <p className="text-gray-600">Manage users, services, and system operations</p>
              </div>
            </div>
            <div className="flex space-x-3 mt-4 md:mt-0">
              <Button variant="outline" asChild>
                <Link to="/admin/settings">
                  <Settings size={16} className="mr-2" />
                  <span>Settings</span>
                </Link>
              </Button>
              <Button asChild>
                <Link to="/admin/reports">
                  <FileText size={16} className="mr-2" />
                  <span>Reports</span>
                </Link>
              </Button>
            </div>
          </div>
          
          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardContent className="p-6 flex items-center space-x-4">
                <div className="p-3 rounded-full bg-nestcare-100">
                  <Users size={24} className="text-nestcare-600" />
                </div>
                <div>
                  <p className="text-gray-500 text-sm">Total Users</p>
                  <h3 className="text-2xl font-bold">1,258</h3>
                  <p className="text-xs text-green-600">+12% from last month</p>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 flex items-center space-x-4">
                <div className="p-3 rounded-full bg-nestcare2-100">
                  <UserCog size={24} className="text-nestcare2-600" />
                </div>
                <div>
                  <p className="text-gray-500 text-sm">Service Professionals</p>
                  <h3 className="text-2xl font-bold">342</h3>
                  <p className="text-xs text-green-600">+8% from last month</p>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 flex items-center space-x-4">
                <div className="p-3 rounded-full bg-blue-100">
                  <PieChart size={24} className="text-blue-600" />
                </div>
                <div>
                  <p className="text-gray-500 text-sm">Services Offered</p>
                  <h3 className="text-2xl font-bold">48</h3>
                  <p className="text-xs text-green-600">+3 new this month</p>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 flex items-center space-x-4">
                <div className="p-3 rounded-full bg-yellow-100">
                  <BarChart3 size={24} className="text-yellow-600" />
                </div>
                <div>
                  <p className="text-gray-500 text-sm">Service Requests</p>
                  <h3 className="text-2xl font-bold">856</h3>
                  <p className="text-xs text-green-600">+15% from last month</p>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Export Data and Process Batch Jobs */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Batch Jobs</CardTitle>
              <CardDescription>Export data and process automated tasks</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="border p-4 rounded-lg">
                  <h3 className="font-medium mb-2">Export Service Requests</h3>
                  <p className="text-sm text-gray-600 mb-4">Export closed service requests to CSV format</p>
                  <Button variant="outline" size="sm" className="w-full">
                    <Download size={16} className="mr-2" />
                    <span>Export CSV</span>
                  </Button>
                </div>
                
                <div className="border p-4 rounded-lg">
                  <h3 className="font-medium mb-2">Generate Monthly Reports</h3>
                  <p className="text-sm text-gray-600 mb-4">Create monthly activity reports for all users</p>
                  <Button variant="outline" size="sm" className="w-full">
                    <FileText size={16} className="mr-2" />
                    <span>Generate Reports</span>
                  </Button>
                </div>
                
                <div className="border p-4 rounded-lg">
                  <h3 className="font-medium mb-2">Send Reminders</h3>
                  <p className="text-sm text-gray-600 mb-4">Send reminder notifications to professionals</p>
                  <Button variant="outline" size="sm" className="w-full">
                    <Users size={16} className="mr-2" />
                    <span>Send Reminders</span>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Users and Services Management */}
          <Card>
            <CardHeader>
              <div className="flex flex-col md:flex-row justify-between md:items-center">
                <div>
                  <CardTitle>Platform Management</CardTitle>
                  <CardDescription>Manage users, services and platform operations</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="users">
                <TabsList className="mb-4">
                  <TabsTrigger value="users">Users</TabsTrigger>
                  <TabsTrigger value="services">Services</TabsTrigger>
                  <TabsTrigger value="requests">Requests</TabsTrigger>
                </TabsList>
                
                <TabsContent value="users">
                  <div className="flex justify-between items-center mb-4">
                    <div className="relative">
                      <Search size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      <Input placeholder="Search users..." className="pl-9 w-full md:w-auto" />
                    </div>
                    <Button size="sm">
                      <Plus size={16} className="mr-2" />
                      <span>Add User</span>
                    </Button>
                  </div>
                  
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left py-3 px-4 font-medium">Name</th>
                          <th className="text-left py-3 px-4 font-medium">Email</th>
                          <th className="text-left py-3 px-4 font-medium">Role</th>
                          <th className="text-left py-3 px-4 font-medium">Status</th>
                          <th className="text-left py-3 px-4 font-medium">Joined</th>
                          <th className="text-right py-3 px-4 font-medium">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {users.map((user) => (
                          <tr key={user.id} className="border-b hover:bg-gray-50">
                            <td className="py-3 px-4">
                              <div className="font-medium">{user.name}</div>
                            </td>
                            <td className="py-3 px-4 text-gray-600">{user.email}</td>
                            <td className="py-3 px-4">
                              {user.role === 'professional' ? (
                                <Badge variant="outline" className="bg-blue-100 text-blue-800 hover:bg-blue-100">
                                  Professional
                                </Badge>
                              ) : (
                                <Badge variant="outline" className="bg-green-100 text-green-800 hover:bg-green-100">
                                  Customer
                                </Badge>
                              )}
                            </td>
                            <td className="py-3 px-4">
                              {user.status === 'active' && (
                                <Badge variant="outline" className="bg-green-100 text-green-800 hover:bg-green-100">
                                  Active
                                </Badge>
                              )}
                              {user.status === 'pending' && (
                                <Badge variant="outline" className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">
                                  Pending
                                </Badge>
                              )}
                              {user.status === 'blocked' && (
                                <Badge variant="outline" className="bg-red-100 text-red-800 hover:bg-red-100">
                                  Blocked
                                </Badge>
                              )}
                            </td>
                            <td className="py-3 px-4 text-gray-600">{user.joined}</td>
                            <td className="py-3 px-4 text-right">
                              <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                  <Button variant="ghost" size="sm">
                                    <span>Actions</span>
                                    <ChevronDown size={16} className="ml-1" />
                                  </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                  <DropdownMenuItem>
                                    <Edit size={14} className="mr-2" />
                                    <span>Edit</span>
                                  </DropdownMenuItem>
                                  {user.status === 'active' ? (
                                    <DropdownMenuItem className="text-amber-600">
                                      <Shield size={14} className="mr-2" />
                                      <span>Block</span>
                                    </DropdownMenuItem>
                                  ) : user.status === 'blocked' ? (
                                    <DropdownMenuItem className="text-green-600">
                                      <Shield size={14} className="mr-2" />
                                      <span>Unblock</span>
                                    </DropdownMenuItem>
                                  ) : (
                                    <DropdownMenuItem className="text-green-600">
                                      <Shield size={14} className="mr-2" />
                                      <span>Approve</span>
                                    </DropdownMenuItem>
                                  )}
                                  <DropdownMenuSeparator />
                                  <DropdownMenuItem className="text-red-600">
                                    <Trash2 size={14} className="mr-2" />
                                    <span>Delete</span>
                                  </DropdownMenuItem>
                                </DropdownMenuContent>
                              </DropdownMenu>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  
                  <div className="flex justify-between items-center mt-4">
                    <p className="text-sm text-gray-600">Showing 4 of 1,258 users</p>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm" disabled>Previous</Button>
                      <Button variant="outline" size="sm">Next</Button>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="services">
                  <div className="flex justify-between items-center mb-4">
                    <div className="relative">
                      <Search size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      <Input placeholder="Search services..." className="pl-9 w-full md:w-auto" />
                    </div>
                    <Button size="sm">
                      <Plus size={16} className="mr-2" />
                      <span>Add Service</span>
                    </Button>
                  </div>
                  
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left py-3 px-4 font-medium">Name</th>
                          <th className="text-left py-3 px-4 font-medium">Category</th>
                          <th className="text-left py-3 px-4 font-medium">Providers</th>
                          <th className="text-left py-3 px-4 font-medium">Requests</th>
                          <th className="text-left py-3 px-4 font-medium">Status</th>
                          <th className="text-right py-3 px-4 font-medium">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {services.map((service) => (
                          <tr key={service.id} className="border-b hover:bg-gray-50">
                            <td className="py-3 px-4">
                              <div className="font-medium">{service.name}</div>
                            </td>
                            <td className="py-3 px-4 text-gray-600">{service.category}</td>
                            <td className="py-3 px-4 text-gray-600">{service.providers}</td>
                            <td className="py-3 px-4 text-gray-600">{service.requests}</td>
                            <td className="py-3 px-4">
                              <Badge variant="outline" className="bg-green-100 text-green-800 hover:bg-green-100">
                                Active
                              </Badge>
                            </td>
                            <td className="py-3 px-4 text-right">
                              <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                  <Button variant="ghost" size="sm">
                                    <span>Actions</span>
                                    <ChevronDown size={16} className="ml-1" />
                                  </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                  <DropdownMenuItem>
                                    <Edit size={14} className="mr-2" />
                                    <span>Edit</span>
                                  </DropdownMenuItem>
                                  <DropdownMenuItem className="text-amber-600">
                                    <Shield size={14} className="mr-2" />
                                    <span>Disable</span>
                                  </DropdownMenuItem>
                                  <DropdownMenuSeparator />
                                  <DropdownMenuItem className="text-red-600">
                                    <Trash2 size={14} className="mr-2" />
                                    <span>Delete</span>
                                  </DropdownMenuItem>
                                </DropdownMenuContent>
                              </DropdownMenu>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  
                  <div className="flex justify-between items-center mt-4">
                    <p className="text-sm text-gray-600">Showing 4 of 48 services</p>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm" disabled>Previous</Button>
                      <Button variant="outline" size="sm">Next</Button>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="requests">
                  <div className="p-8 text-center text-gray-500">
                    <p>Service request management coming soon...</p>
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

export default AdminDashboard;
