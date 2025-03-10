"use client";

import { useState } from 'react';
import { 
  BarChart3, 
  Users, 
  ShoppingCart, 
  Calendar, 
  Settings, 
  Menu,
  X,
  ChevronRight,
  Home,
  TrendingUp,
  Package,
  MessageSquare,
  Leaf
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

// Import components
import DashboardStats from '../components/DashboardStats';
import SalesChart from '../components/SalesChart';
import RecentOrders from '../components/RecentOrders';
import InventoryStatus from '../components/InventoryStatus';
import WeatherWidget from '../components/WeatherWidget';

const FarmerDashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const menuItems = [
    { icon: Home, label: 'Dashboard', href: '/Admin/Farmers-Dashboard' },
    { icon: Package, label: 'Products', href: '/Admin/Farmers-Dashboard/products' },
    { icon: ShoppingCart, label: 'Orders', href: '/Admin/Farmers-Dashboard/orders' },
    { icon: TrendingUp, label: 'Analytics', href: '/Admin/Farmers-Dashboard/analytics' },
    { icon: MessageSquare, label: 'Messages', href: '/Admin/Farmers-Dashboard/messages' },
    { icon: Settings, label: 'Settings', href: '/Admin/Farmers-Dashboard/settings' },
  ];

  const stats = [
    { 
      title: 'Total Sales', 
      value: '₹24,780', 
      change: '+12.5%',
      isIncrease: true,
      icon: BarChart3 
    },
    { 
      title: 'Active Orders', 
      value: '18', 
      change: '+3.2%',
      isIncrease: true,
      icon: ShoppingCart 
    },
    { 
      title: 'Total Customers', 
      value: '1,483', 
      change: '+5.4%',
      isIncrease: true,
      icon: Users 
    },
    { 
      title: 'Scheduled Deliveries', 
      value: '12', 
      change: '-2.1%',
      isIncrease: false,
      icon: Calendar 
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside 
        className={`fixed top-0 left-0 z-40 h-screen transition-transform ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0 bg-white border-r w-64 lg:w-72`}
      >
        <div className="h-full px-3 py-4 flex flex-col">
          <div className="flex items-center justify-between mb-6 px-2">
            <Link href="/Admin/Farmers-Dashboard" className="flex items-center space-x-3">
              <div className="bg-green-100 p-2 rounded-xl">
                <Leaf className="h-8 w-8 text-green-600" />
              </div>
              <span className="text-xl font-bold text-gray-800">Farm Fresh</span>
            </Link>
            <button 
              onClick={() => setIsSidebarOpen(false)}
              className="lg:hidden text-gray-500 hover:text-gray-700"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <nav className="flex-1 space-y-1">
            {menuItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`flex items-center px-4 py-3 text-gray-700 rounded-lg hover:bg-green-50 hover:text-green-600 group transition-colors ${
                  item.href === '/Admin/Farmers-Dashboard' ? 'bg-green-50 text-green-600' : ''
                }`}
              >
                <item.icon className="h-5 w-5 mr-3" />
                <span className="text-sm font-medium">{item.label}</span>
                <ChevronRight className="h-4 w-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
            ))}
          </nav>

          <div className="mt-auto">
            <div className="bg-green-50 rounded-lg p-4">
              <h3 className="text-sm font-medium text-green-800 mb-2">Need Help?</h3>
              <p className="text-xs text-green-600 mb-3">Contact our support team</p>
              <button className="w-full bg-green-600 text-white text-sm font-medium py-2 px-4 rounded-lg hover:bg-green-700 transition-colors">
                Get Support
              </button>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className={`lg:ml-72 min-h-screen`}>
        {/* Top Bar */}
        <header className="bg-white border-b sticky top-0 z-30">
          <div className="flex items-center justify-between px-4 py-3">
            <button
              onClick={() => setIsSidebarOpen(true)}
              className="lg:hidden text-gray-500 hover:text-gray-700"
            >
              <Menu className="h-6 w-6" />
            </button>
            <div className="flex items-center space-x-4">
              <button className="relative text-gray-500 hover:text-gray-700">
                <MessageSquare className="h-6 w-6" />
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                  3
                </span>
              </button>
              <div className="flex items-center space-x-3">
                <div className="relative w-9 h-9 rounded-full overflow-hidden bg-green-100">
                  <Image
                    src="https://images.unsplash.com/photo-1520052205864-92d242b3a76b?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=100&ixid=MnwxfDB8MXxyYW5kb218MHx8ZmFybWVyfHx8fHx8MTcwODUwMjQwMA&ixlib=rb-4.0.3&q=80&w=100"
                    alt="Farmer Avatar"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="hidden md:block">
                  <p className="text-sm font-medium text-gray-700">John Farmer</p>
                  <p className="text-xs text-gray-500">Organic Vegetables</p>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="p-4 lg:p-6 space-y-6">
          {/* Welcome Banner */}
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-green-600 to-green-700 text-white p-8">
            <div className="relative z-10">
              <h1 className="text-2xl md:text-3xl font-bold mb-2">Welcome back, John! 👋</h1>
              <p className="text-green-100">Here&apos;s what&apos;s happening with your farm today.</p>
            </div>
            <div className="absolute right-0 top-0 h-full w-1/3 lg:w-1/2">
              <div className="relative h-full w-full opacity-20">
                <Image
                  src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&ixid=MnwxfDB8MXxyYW5kb218MHx8ZmFybXx8fHx8fDE3MDg1MDI0MDA&ixlib=rb-4.0.3&q=80&w=600"
                  alt="Farm Background"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <DashboardStats stats={stats} />

          {/* Charts Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <SalesChart />
            <InventoryStatus />
          </div>

          {/* Recent Orders & Weather */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <RecentOrders />
            </div>
            <div>
              <WeatherWidget />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default FarmerDashboard;
