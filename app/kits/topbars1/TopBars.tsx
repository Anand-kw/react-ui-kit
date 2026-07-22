"use client";
import Link from "next/link";
import { Notification, TopBarProps } from "./TopBarsTypes";
import { useState } from "react";
import { NotificationsDropdown, ProfileDropdown, SearchDropdown } from "./TopBarsDropdown";

export const TopBar: React.FC<TopBarProps> = ({
    user,
    notifications = [],
    navigationItems = [],
    onLogout,
    onSearch,
    onNotificationClick,
    onMenuClick,
    variant = 'default',
    showSearch = true,
    showNotifications = true,
    showProfile = true,
    showLogo = true,
    showNavigation = true,
    sticky = false,
    logo,
    leftContent,
    rightContent,
    centerContent,
    mobileMenuContent,
    className = '',
    activePath = '',
  }) => {
    const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
  
    const unreadNotifications = notifications.filter(n => !n.read);
  
    const handleSearch = (e: React.FormEvent) => {
      e.preventDefault();
      onSearch?.(searchQuery);
      setIsSearchOpen(false);
    };
  
    const handleNotificationClick = (notification: Notification) => {
      onNotificationClick?.(notification);
      setIsNotificationsOpen(false);
    };
  
    // Get variant-specific styles
    const getVariantStyles = () => {
      switch (variant) {
        case 'minimal':
          return 'bg-white border-b border-gray-100';
        case 'centered':
          return 'bg-white border-b border-gray-200';
        case 'transparent':
          return 'bg-transparent';
        case 'dark':
          return 'bg-gray-900 text-white border-b border-gray-800';
        default:
          return 'bg-white border-b border-gray-200 shadow-sm';
      }
    };
  
    const getTextColor = () => {
      return variant === 'dark' ? 'text-white' : 'text-gray-800';
    };
  
    const getButtonStyles = () => {
      return variant === 'dark' 
        ? 'text-gray-300 hover:text-white' 
        : 'text-gray-600 hover:text-blue-600';
    };
  
    return (
      <nav 
        className={`
          ${getVariantStyles()} 
          px-4 py-3 
          ${sticky ? 'sticky top-0 z-50' : ''}
          ${className}
        `}
      >
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          {/* Left Section */}
          <div className="flex items-center space-x-4">
            {leftContent || (
              <>
                {/* Mobile Menu Toggle */}
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(!isMobileMenuOpen);
                    onMenuClick?.();
                  }}
                  className={`md:hidden p-2 ${getButtonStyles()} transition-colors`}
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
  
                {/* Logo */}
                {showLogo && (
                  <Link href="/" className="flex items-center space-x-2">
                    {logo || (
                      <>
                        <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                          <span className="text-white font-bold text-sm">UI</span>
                        </div>
                        <span className={`text-xl font-bold ${getTextColor()} hidden sm:block`}>
                          Kit
                        </span>
                      </>
                    )}
                  </Link>
                )}
  
                {/* Navigation */}
                {showNavigation && navigationItems.length > 0 && (
                  <div className="hidden md:flex items-center space-x-1">
                    {navigationItems.map((item) => (
                      <Link
                        key={item.id}
                        href={item.href}
                        className={`
                          px-3 py-2 rounded-md text-sm font-medium transition-colors
                          ${activePath === item.href
                            ? variant === 'dark'
                              ? 'bg-gray-800 text-white'
                              : 'bg-blue-100 text-blue-700'
                            : variant === 'dark'
                              ? 'text-gray-300 hover:text-white hover:bg-gray-800'
                              : 'text-gray-700 hover:text-blue-600 hover:bg-gray-100'
                          }
                        `}
                      >
                        {item.icon && <span className="mr-2">{item.icon}</span>}
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </>
            )}
          </div>
  
          {/* Center Section (Optional) */}
          {centerContent && (
            <div className="hidden md:flex flex-1 justify-center">
              {centerContent}
            </div>
          )}
  
          {/* Right Section */}
          <div className="flex items-center space-x-2">
            {rightContent || (
              <>
                {/* Search */}
                {showSearch && (
                  <div className="relative">
                    <button
                      onClick={() => setIsSearchOpen(!isSearchOpen)}
                      className={`p-2 ${getButtonStyles()} transition-colors`}
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    </button>
  
                    {isSearchOpen && (
                      <SearchDropdown
                        query={searchQuery}
                        onQueryChange={setSearchQuery}
                        onSearch={handleSearch}
                        onClose={() => setIsSearchOpen(false)}
                        variant={variant}
                      />
                    )}
                  </div>
                )}
  
                {/* Notifications */}
                {showNotifications && (
                  <div className="relative">
                    <button
                      onClick={() => setIsNotificationsOpen(!isNotificationsOpen)}
                      className={`p-2 ${getButtonStyles()} transition-colors relative`}
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                      </svg>
                      {unreadNotifications.length > 0 && (
                        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                          {unreadNotifications.length}
                        </span>
                      )}
                    </button>
  
                    {isNotificationsOpen && (
                      <NotificationsDropdown
                        notifications={notifications}
                        onNotificationClick={handleNotificationClick}
                        onClose={() => setIsNotificationsOpen(false)}
                        variant={variant}
                      />
                    )}
                  </div>
                )}
  
                {/* Profile */}
                {showProfile && user && (
                  <div className="relative">
                    <button
                      onClick={() => setIsProfileOpen(!isProfileOpen)}
                      className={`flex items-center space-x-2 p-1 rounded-md transition-colors ${
                        variant === 'dark' ? 'hover:bg-gray-800' : 'hover:bg-gray-100'
                      }`}
                    >
                      {user.avatar ? (
                        <img
                          src={user.avatar}
                          alt={user.name}
                          className="w-8 h-8 rounded-full"
                        />
                      ) : (
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                          variant === 'dark' ? 'bg-gray-700' : 'bg-blue-600'
                        }`}>
                          <span className="text-white text-sm font-medium">
                            {user.name.charAt(0).toUpperCase()}
                          </span>
                        </div>
                      )}
                      <div className="hidden md:block text-left">
                        <p className={`text-sm font-medium ${getTextColor()}`}>
                          {user.name}
                        </p>
                        <p className={`text-xs ${variant === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                          {user.role}
                        </p>
                      </div>
                    </button>
  
                    {isProfileOpen && (
                      <ProfileDropdown
                        user={user}
                        onLogout={onLogout}
                        onClose={() => setIsProfileOpen(false)}
                        variant={variant}
                      />
                    )}
                  </div>
                )}
              </>
            )}
          </div>
        </div>
  
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-gray-200">
            {mobileMenuContent || (
              <div className="space-y-2">
                {navigationItems.map((item) => (
                  <Link
                    key={item.id}
                    href={item.href}
                    className={`
                      block px-3 py-2 rounded-md text-sm font-medium transition-colors
                      ${activePath === item.href
                        ? variant === 'dark'
                          ? 'bg-gray-800 text-white'
                          : 'bg-blue-100 text-blue-700'
                        : variant === 'dark'
                          ? 'text-gray-300 hover:text-white hover:bg-gray-800'
                          : 'text-gray-700 hover:text-blue-600 hover:bg-gray-100'
                      }
                    `}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.icon && <span className="mr-2">{item.icon}</span>}
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        )}
      </nav>
    );
  };