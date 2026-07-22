"use client";
import Link from "next/link";
import { Notification, User } from "./TopBarsTypes";

// Mock search results - defined here
const mockSearchResults = [
    { id: '1', title: 'Customer Management', type: 'Module', href: '/customers' },
    { id: '2', title: 'Inventory Report', type: 'Report', href: '/reports/inventory' },
    { id: '3', title: 'Sales Dashboard', type: 'Dashboard', href: '/dashboard/sales' },
    { id: '4', title: 'User Analytics', type: 'Report', href: '/analytics/users' },
    { id: '5', title: 'Product Catalog', type: 'Module', href: '/products' },
  ];
// Search Dropdown
export const SearchDropdown: React.FC<{
    query: string;
    onQueryChange: (query: string) => void;
    onSearch: (e: React.FormEvent) => void;
    onClose: () => void;
    variant?: string;
  }> = ({ query, onQueryChange, onSearch, onClose, variant }) => {
    return (
      <div className={`absolute right-0 mt-2 w-80 rounded-lg shadow-lg border z-50 ${
        variant === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
      }`}>
        <form onSubmit={onSearch} className="p-3 border-b border-gray-200">
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              value={query}
              onChange={(e) => onQueryChange(e.target.value)}
              className={`w-full pl-9 pr-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                variant === 'dark' 
                  ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400'
                  : 'bg-white border-gray-300 text-gray-900'
              }`}
            />
            <svg className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </form>
        <div className="max-h-60 overflow-y-auto">
          {mockSearchResults.map((result) => (
            <Link
              key={result.id}
              href={result.href}
              className={`block px-4 py-3 border-b border-gray-100 last:border-b-0 ${
                variant === 'dark' 
                  ? 'hover:bg-gray-700 text-gray-200'
                  : 'hover:bg-gray-50 text-gray-900'
              }`}
              onClick={onClose}
            >
              <div className="font-medium">{result.title}</div>
              <div className={`text-sm ${variant === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                {result.type}
              </div>
            </Link>
          ))}
        </div>
      </div>
    );
  };
  
  // Notifications Dropdown
  export const NotificationsDropdown: React.FC<{
    notifications: Notification[];
    onNotificationClick: (notification: Notification) => void;
    onClose: () => void;
    variant?: string;
  }> = ({ notifications, onNotificationClick, onClose, variant }) => {
    return (
      <div className={`absolute right-0 mt-2 w-80 rounded-lg shadow-lg border z-50 ${
        variant === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
      }`}>
        <div className="p-3 border-b border-gray-200">
          <h3 className={`font-semibold ${variant === 'dark' ? 'text-gray-200' : 'text-gray-800'}`}>
            Notifications
          </h3>
        </div>
        <div className="max-h-60 overflow-y-auto">
          {notifications.length === 0 ? (
            <div className={`p-4 text-center ${variant === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
              No notifications
            </div>
          ) : (
            notifications.map((notification) => (
              <div
                key={notification.id}
                className={`p-3 border-b border-gray-100 last:border-b-0 cursor-pointer ${
                  variant === 'dark' 
                    ? 'hover:bg-gray-700'
                    : 'hover:bg-gray-50'
                } ${!notification.read && variant !== 'dark' ? 'bg-blue-50' : ''}`}
                onClick={() => onNotificationClick(notification)}
              >
                <div className="flex items-start space-x-3">
                  <div className={`w-2 h-2 rounded-full mt-2 ${
                    notification.type === 'success' ? 'bg-green-500' :
                    notification.type === 'warning' ? 'bg-yellow-500' :
                    notification.type === 'error' ? 'bg-red-500' : 'bg-blue-500'
                  }`} />
                  <div className="flex-1">
                    <p className={`text-sm ${variant === 'dark' ? 'text-gray-200' : 'text-gray-800'}`}>
                      {notification.message}
                    </p>
                    <p className={`text-xs mt-1 ${variant === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                      {notification.timestamp.toLocaleTimeString()}
                    </p>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    );
  };
  
  // Profile Dropdown
  export const ProfileDropdown: React.FC<{
    user: User;
    onLogout?: () => void;
    onClose: () => void;
    variant?: string;
  }> = ({ user, onLogout, onClose, variant }) => {
    return (
      <div className={`absolute right-0 mt-2 w-48 rounded-lg shadow-lg border z-50 ${
        variant === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
      }`}>
        <div className={`p-4 border-b ${variant === 'dark' ? 'border-gray-700' : 'border-gray-200'}`}>
          <p className={`font-medium ${variant === 'dark' ? 'text-gray-200' : 'text-gray-800'}`}>
            {user.name}
          </p>
          <p className={`text-sm ${variant === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
            {user.email}
          </p>
        </div>
        <div className="p-2">
          <Link
            href="/profile"
            className={`block px-3 py-2 text-sm rounded-md ${
              variant === 'dark' 
                ? 'text-gray-300 hover:bg-gray-700'
                : 'text-gray-700 hover:bg-gray-100'
            }`}
            onClick={onClose}
          >
            Profile Settings
          </Link>
          <Link
            href="/settings"
            className={`block px-3 py-2 text-sm rounded-md ${
              variant === 'dark' 
                ? 'text-gray-300 hover:bg-gray-700'
                : 'text-gray-700 hover:bg-gray-100'
            }`}
            onClick={onClose}
          >
            Preferences
          </Link>
          <button
            onClick={() => {
              onLogout?.();
              onClose();
            }}
            className="w-full text-left px-3 py-2 text-sm text-red-600 hover:bg-red-50 rounded-md"
          >
            Sign Out
          </button>
        </div>
      </div>
    );
  };
  // Also export variants
