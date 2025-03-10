"use client";

import { useState } from 'react';
import { 
  BarChart3, 
  Users, 
  ShoppingCart, 
  Settings, 
  Menu,
  X,
  ChevronRight,
  Home,
  TrendingUp,
  Package,
  Bell,
  Search,
  Leaf,
  UserCog,
  FileText,
  HelpCircle
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

// Import components
import AdminStats from '../components/AdminStats';
import RevenueChart from '../components/RevenueChart';
import FarmersList from '../components/FarmersList';
import ActivityLog from '../components/ActivityLog';
import PendingApprovals from '../components/PendingApprovals';

const AdminDashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');

  const menuItems = [
    { icon: Home, label: 'Dashboard', href: '/Admin/Admin-Dashboard' },
    { icon: Users, label: 'Farmers', href: '/Admin/Admin-Dashboard/farmers' },
    { icon: ShoppingCart, label: 'Orders', href: '/Admin/Admin-Dashboard/orders' },
    { icon: TrendingUp, label: 'Analytics', href: '/Admin/Admin-Dashboard/analytics' },
    { icon: FileText, label: 'Reports', href: '/Admin/Admin-Dashboard/reports' },
    { icon: Settings, label: 'Settings', href: '/Admin/Admin-Dashboard/settings' },
  ];

  const stats = [
    { 
      title: 'Total Revenue', 
      value: '₹2,45,780', 
      change: '+18.2%',
      isIncrease: true,
      icon: BarChart3 
    },
    { 
      title: 'Active Farmers', 
      value: '284', 
      change: '+5.8%',
      isIncrease: true,
      icon: Users 
    },
    { 
      title: 'Total Orders', 
      value: '1,483', 
      change: '+12.4%',
      isIncrease: true,
      icon: ShoppingCart 
    },
    { 
      title: 'Pending Approvals', 
      value: '12', 
      change: '-2.1%',
      isIncrease: false,
      icon: UserCog 
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside 
        className={`fixed top-0 left-0 z-40 h-screen transition-transform ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0 bg-black w-64 lg:w-72`}
      >
        <div className="h-full px-3 py-4 flex flex-col">
          <div className="flex items-center justify-between mb-6 px-2">
            <Link href="/Admin/Admin-Dashboard" className="flex items-center space-x-3">
              <div className="bg-white/10 p-2 rounded-xl">
                <Leaf className="h-8 w-8 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Admin Panel</span>
            </Link>
            <button 
              onClick={() => setIsSidebarOpen(false)}
              className="lg:hidden text-gray-400 hover:text-white"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <nav className="flex-1 space-y-1">
            {menuItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`flex items-center px-4 py-3 text-gray-300 rounded-lg hover:bg-gray-800 group transition-colors ${
                  item.href === '/Admin/Admin-Dashboard' ? 'bg-gray-800 text-white' : ''
                }`}
              >
                <item.icon className="h-5 w-5 mr-3" />
                <span className="text-sm font-medium">{item.label}</span>
                <ChevronRight className="h-4 w-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
            ))}
          </nav>

          <div className="mt-auto">
            <div className="bg-gray-800 rounded-lg p-4">
              <h3 className="text-sm font-medium text-white mb-2">Need Assistance?</h3>
              <p className="text-xs text-gray-400 mb-3">Contact our support team</p>
              <button className="w-full bg-white text-black text-sm font-medium py-2 px-4 rounded-lg hover:bg-gray-100 transition-colors">
                Get Help
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
            <div className="flex items-center flex-1">
              <button
                onClick={() => setIsSidebarOpen(true)}
                className="lg:hidden text-gray-500 hover:text-gray-700 mr-4"
              >
                <Menu className="h-6 w-6" />
              </button>
              <div className="max-w-md w-full relative hidden md:block">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                />
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button className="relative text-gray-500 hover:text-gray-700">
                <Bell className="h-6 w-6" />
                <span className="absolute -top-1 -right-1 bg-black text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                  5
                </span>
              </button>
              <div className="flex items-center space-x-3">
                <div className="relative w-9 h-9 rounded-full overflow-hidden bg-gray-100">
                  <Image
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=100&ixid=MnwxfDB8MXxyYW5kb218MHx8bWFsZSxwcm9mZXNzaW9uYWx8fHx8fHwxNzA4NTAyNDAw&ixlib=rb-4.0.3&q=80&w=100"
                    alt="Admin Avatar"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="hidden md:block">
                  <p className="text-sm font-medium text-gray-700">Admin User</p>
                  <p className="text-xs text-gray-500">Super Admin</p>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="p-4 lg:p-6 space-y-6">
          {/* Welcome Banner */}
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-gray-900 to-gray-800 text-white p-8">
            <div className="relative z-10">
              <h1 className="text-2xl md:text-3xl font-bold mb-2">Welcome to Admin Dashboard</h1>
              <p className="text-gray-300">Monitor and manage your platform&apos;s performance</p>
            </div>
            <div className="absolute right-0 top-0 h-full w-1/3 lg:w-1/2">
              <div className="relative h-full w-full opacity-10">
                <Image
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&ixid=MnwxfDB8MXxyYW5kb218MHx8b2ZmaWNlLGRhc2hib2FyZHx8fHx8fDE3MDg1MDI0MDA&ixlib=rb-4.0.3&q=80&w=600"
                  alt="Dashboard Background"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <AdminStats stats={stats} />

          {/* Charts & Lists Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <RevenueChart />
            <PendingApprovals />
          </div>

          {/* Farmers List & Activity */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <FarmersList />
            </div>
            <div>
              <ActivityLog />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
