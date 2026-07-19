"use client";
import React, { useState, ReactNode } from 'react';
import Link from 'next/link';

// Types
export interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  avatar?: string;
}

export interface Notification {
  id: string;
  type: 'info' | 'warning' | 'success' | 'error';
  message: string;
  timestamp: Date;
  read: boolean;
}

export interface NavigationItem {
  id: string;
  label: string;
  href: string;
  icon?: ReactNode;
  submenu?: NavigationItem[];
}

export interface TopBarProps {
  // Core data
  user?: User;
  notifications?: Notification[];
  navigationItems?: NavigationItem[];
  
  // Callbacks
  onLogout?: () => void;
  onSearch?: (query: string) => void;
  onNotificationClick?: (notification: Notification) => void;
  onMenuClick?: () => void;
  
  // Configuration
  variant?: 'default' | 'minimal' | 'centered' | 'transparent' | 'dark';
  showSearch?: boolean;
  showNotifications?: boolean;
  showProfile?: boolean;
  showLogo?: boolean;
  showNavigation?: boolean;
  sticky?: boolean;
  
  // Custom content
  logo?: ReactNode;
  leftContent?: ReactNode;
  rightContent?: ReactNode;
  centerContent?: ReactNode;
  mobileMenuContent?: ReactNode;
  
  // Class names
  className?: string;
  activePath?: string; // Pass from parent to avoid router
}

// Mock search results for demo
const mockSearchResults = [
  { id: '1', title: 'Customer Management', type: 'Module', href: '/customers' },
  { id: '2', title: 'Inventory Report', type: 'Report', href: '/reports/inventory' },
  { id: '3', title: 'Sales Dashboard', type: 'Dashboard', href: '/dashboard/sales' }
];  