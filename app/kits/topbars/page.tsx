"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import TopBar from '../../dashboard/Topbar';

// Types
interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  avatar?: string;
}

interface Notification {
  id: string;
  type: 'info' | 'warning' | 'success' | 'error';
  message: string;
  timestamp: Date;
  read: boolean;
}

interface NavigationItem {
  id: string;
  label: string;
  href: string;
  icon?: string;
}

// Mock data
const userData: User = {
  id: '1',
  name: 'John Doe',
  email: 'john@example.com',
  role: 'Admin',
  avatar: 'https://ui-avatars.com/api/?name=John+Doe&background=6366f1&color=fff&size=40'
};

const navItems: NavigationItem[] = [
  { id: 'dashboard', label: 'Dashboard', href: '/dashboard' },
  { id: 'customers', label: 'Customers', href: '/customers' },
  { id: 'reports', label: 'Reports', href: '/reports' },
  { id: 'analytics', label: 'Analytics', href: '/analytics' },
  { id: 'settings', label: 'Settings', href: '/settings' }
];

const notifications: Notification[] = [
  {
    id: '1',
    type: 'success',
    message: 'New user registered',
    timestamp: new Date(),
    read: false
  },
  {
    id: '2',
    type: 'info',
    message: 'System update available',
    timestamp: new Date(Date.now() - 3600000),
    read: false
  },
  {
    id: '3',
    type: 'warning',
    message: 'Storage limit 80% full',
    timestamp: new Date(Date.now() - 7200000),
    read: true
  }
];

// Topbar variant configuration
interface TopbarVariant {
  id: string;
  label: string;
  description: string;
  props: any;
}

const topbarVariants: TopbarVariant[] = [
  {
    id: 'default',
    label: 'Default',
    description: 'Standard topbar with full features',
    props: {
      variant: 'default',
      user: userData,
      navigationItems: navItems,
      notifications: notifications,
      showSearch: true,
      showNotifications: true,
      showProfile: true,
      showLogo: true,
      showNavigation: true,
      sticky: false,
    }
  },
  {
    id: 'minimal',
    label: 'Minimal',
    description: 'Clean and minimal design',
    props: {
      variant: 'minimal',
      user: userData,
      navigationItems: [],
      notifications: [],
      showSearch: false,
      showNotifications: false,
      showProfile: true,
      showLogo: true,
      showNavigation: false,
      sticky: false,
    }
  },
  {
    id: 'centered',
    label: 'Centered',
    description: 'Centered logo and navigation',
    props: {
      variant: 'centered',
      user: userData,
      navigationItems: navItems,
      notifications: notifications,
      showSearch: true,
      showNotifications: true,
      showProfile: true,
      showLogo: true,
      showNavigation: false,
      sticky: false,
      centerContent: (
        <div className="flex items-center space-x-6">
          <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors">
            Home
          </Link>
          <Link href="/products" className="text-gray-700 hover:text-blue-600 transition-colors">
            Products
          </Link>
          <Link href="/about" className="text-gray-700 hover:text-blue-600 transition-colors">
            About
          </Link>
          <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition-colors">
            Contact
          </Link>
        </div>
      )
    }
  },
  {
    id: 'transparent',
    label: 'Transparent',
    description: 'Glass-morphism transparent design',
    props: {
      variant: 'transparent',
      user: userData,
      navigationItems: navItems,
      notifications: notifications,
      showSearch: true,
      showNotifications: true,
      showProfile: true,
      showLogo: true,
      showNavigation: true,
      sticky: true,
      className: 'absolute inset-x-0 top-0 bg-white/80 backdrop-blur-sm border-b border-white/20'
    }
  },
  {
    id: 'dark',
    label: 'Dark Theme',
    description: 'Dark mode topbar',
    props: {
      variant: 'dark',
      user: userData,
      navigationItems: navItems,
      notifications: notifications,
      showSearch: true,
      showNotifications: true,
      showProfile: true,
      showLogo: true,
      showNavigation: true,
      sticky: false,
    }
  },
  {
    id: 'custom-logo',
    label: 'Custom Logo',
    description: 'Topbar with custom branded logo',
    props: {
      variant: 'default',
      user: userData,
      navigationItems: navItems,
      notifications: notifications,
      showSearch: true,
      showNotifications: true,
      showProfile: true,
      showLogo: true,
      showNavigation: true,
      sticky: false,
      logo: (
        <div className="flex items-center">
          <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center shadow-lg">
            <span className="text-white font-bold text-lg">C</span>
          </div>
          <span className="ml-2 text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Custom
          </span>
        </div>
      )
    }
  },
  {
    id: 'no-user',
    label: 'Public/No User',
    description: 'Topbar for non-authenticated users',
    props: {
      variant: 'default',
      user: undefined,
      navigationItems: [
        { id: 'home', label: 'Home', href: '/' },
        { id: 'features', label: 'Features', href: '/features' },
        { id: 'pricing', label: 'Pricing', href: '/pricing' },
        { id: 'about', label: 'About', href: '/about' }
      ],
      notifications: [],
      showSearch: false,
      showNotifications: false,
      showProfile: false,
      showLogo: true,
      showNavigation: true,
      sticky: false,
      rightContent: (
        <div className="flex items-center space-x-3">
          <Link
            href="/login"
            className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
          >
            Log In
          </Link>
          <Link
            href="/signup"
            className="px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md transition-colors"
          >
            Sign Up
          </Link>
        </div>
      )
    }
  },
  {
    id: 'ecommerce',
    label: 'E-commerce',
    description: 'E-commerce store topbar',
    props: {
      variant: 'default',
      user: userData,
      navigationItems: [
        { id: 'home', label: 'Home', href: '/' },
        { id: 'shop', label: 'Shop', href: '/shop' },
        { id: 'categories', label: 'Categories', href: '/categories' },
        { id: 'deals', label: 'Deals', href: '/deals' }
      ],
      notifications: notifications,
      showSearch: true,
      showNotifications: true,
      showProfile: true,
      showLogo: true,
      showNavigation: true,
      sticky: false,
      logo: (
        <div className="flex items-center">
          <span className="text-2xl font-bold text-blue-600">Shop</span>
          <span className="text-2xl font-light text-gray-400">Mart</span>
        </div>
      ),
      rightContent: (
        <>
          <button className="p-2 text-gray-600 hover:text-blue-600 transition-colors relative">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              3
            </span>
          </button>
          <button className="p-2 text-gray-600 hover:text-blue-600 transition-colors relative">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <span className="absolute -top-1 -right-1 bg-blue-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              5
            </span>
          </button>
        </>
      )
    }
  }
];

// Main Demo Component
export default function TopbarDemo() {
  const pathname = usePathname();
  const [selectedVariant, setSelectedVariant] = useState<string>('default');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const currentVariant = topbarVariants.find(v => v.id === selectedVariant) || topbarVariants[0];
  const variantProps = {
    ...currentVariant.props,
    activePath: pathname,
    onLogout: () => console.log('Logout clicked'),
    onSearch: (query: string) => console.log('Search:', query),
    onNotificationClick: (notification: Notification) => console.log('Notification clicked:', notification),
    onMenuClick: () => console.log('Menu clicked'),
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Topbar Preview */}
      <div className="relative">
        {selectedVariant === 'transparent' && (
          <div className="h-64 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-4xl font-bold mb-2">Transparent Topbar Demo</h1>
              <p className="text-white/80">Scroll to see the glass-morphism effect</p>
            </div>
          </div>
        )}
        <TopBar {...variantProps} />
      </div>

      {/* Content Area */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-white rounded-xl shadow-sm p-6">
          {/* Dropdown Selector */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold text-gray-800">Topbar Variants</h2>
              <div className="relative">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="flex items-center justify-between w-64 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <span>{currentVariant.label}</span>
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {isDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-200 z-50 max-h-96 overflow-y-auto">
                    <div className="p-2">
                      {topbarVariants.map((variant) => (
                        <button
                          key={variant.id}
                          onClick={() => {
                            setSelectedVariant(variant.id);
                            setIsDropdownOpen(false);
                          }}
                          className={`w-full text-left px-3 py-2 rounded-md transition-colors ${
                            selectedVariant === variant.id
                              ? 'bg-blue-50 text-blue-700'
                              : 'hover:bg-gray-50 text-gray-700'
                          }`}
                        >
                          <div className="font-medium">{variant.label}</div>
                          <div className="text-xs text-gray-500">{variant.description}</div>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Variant Description */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="text-sm text-blue-800">
                <span className="font-semibold">Current Variant:</span> {currentVariant.label}
                <span className="mx-2">•</span>
                <span className="text-blue-600">{currentVariant.description}</span>
              </p>
            </div>
          </div>

          {/* Quick Variant Grid */}
          <div>
            <h3 className="text-sm font-medium text-gray-700 mb-3">Quick Select</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
              {topbarVariants.slice(0, 4).map((variant) => (
                <button
                  key={variant.id}
                  onClick={() => setSelectedVariant(variant.id)}
                  className={`px-3 py-2 text-sm rounded-md transition-colors ${
                    selectedVariant === variant.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {variant.label}
                </button>
              ))}
            </div>
          </div>

          {/* Demo Content */}
          <div className="mt-8 pt-8 border-t border-gray-200">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Page Content</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-gray-50 rounded-lg p-4">
                  <div className="h-32 bg-gray-200 rounded-lg mb-3 animate-pulse"></div>
                  <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                  <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Variant Properties Display */}
      <div className="max-w-7xl mx-auto px-4 pb-8">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h3 className="text-sm font-medium text-gray-700 mb-3">Current Variant Properties</h3>
          <pre className="bg-gray-50 p-4 rounded-lg text-xs overflow-auto max-h-48">
            {JSON.stringify({
              variant: currentVariant.id,
              ...Object.fromEntries(
                Object.entries(currentVariant.props).filter(([key]) => 
                  !['user', 'navigationItems', 'notifications', 'logo', 'centerContent', 'rightContent'].includes(key)
                )
              )
            }, null, 2)}
          </pre>
        </div>
      </div>
    </div>
  );
}