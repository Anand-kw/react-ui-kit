// // "use client";

// // import React, { useState, useEffect, useRef, ReactNode } from 'react';
// // import { 
// //   X, 
// //   ChevronLeft, 
// //   ChevronRight, 
// //   Search, 
// //   Grid, 
// //   List, 
// //   Moon, 
// //   Sun, 
// //   Maximize2, 
// //   Minimize2,
// //   Heart,
// //   Filter,
// //   Settings,
// //   HelpCircle,
// //   Share2,
// //   Download,
// //   Star,
// //   Sparkles,
// //   Code,
// //   Palette,
// //   Type,
// //   Layout,
// //   Square,
// //   Move,
// //   Zap,
// //   MousePointer,
// //   Ruler,
// //   AlignJustify,
// //   Layers,
// //   ArrowUpDown,
// //   RotateCw,
// //   Eye,
// //   Copy,
// //   Check,
// //   ChevronDown
// // } from 'lucide-react';

// // // ============================================
// // // TYPES
// // // ============================================

// // export interface PopupHeaderAction {
// //   icon?: ReactNode;
// //   label?: string;
// //   onClick?: () => void;
// //   variant?: 'primary' | 'secondary' | 'ghost' | 'danger';
// //   disabled?: boolean;
// //   tooltip?: string;
// // }

// // export interface PopupTab {
// //   id: string;
// //   label: string;
// //   icon?: ReactNode;
// //   count?: number;
// //   badge?: string | number;
// // }

// // export interface FullScreenPopupProps {
// //   /** Control popup visibility */
// //   open: boolean;
  
// //   /** Header Configuration */
// //   title?: ReactNode;
// //   subtitle?: ReactNode;
// //   leftActions?: PopupHeaderAction[];
// //   rightActions?: PopupHeaderAction[];
// //   centerContent?: ReactNode;
  
// //   /** Navigation */
// //   tabs?: PopupTab[];
// //   activeTab?: string;
// //   onTabChange?: (tabId: string) => void;
// //   showBackButton?: boolean;
// //   onBack?: () => void;
  
// //   /** Search */
// //   showSearch?: boolean;
// //   searchValue?: string;
// //   onSearchChange?: (value: string) => void;
// //   searchPlaceholder?: string;
  
// //   /** Main Content */
// //   children: ReactNode;
  
// //   /** Footer */
// //   footer?: ReactNode;
// //   footerActions?: PopupHeaderAction[];
  
// //   /** Events */
// //   onClose?: () => void;
// //   closeOnOverlayClick?: boolean;
// //   closeOnEscape?: boolean;
  
// //   /** Customization */
// //   className?: string;
// //   contentClassName?: string;
// //   headerClassName?: string;
// //   footerClassName?: string;
  
// //   /** Theme */
// //   darkMode?: boolean;
// //   onDarkModeToggle?: () => void;
  
// //   /** Layout */
// //   fullscreen?: boolean;
// //   maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full' | 'screen';
// //   padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  
// //   /** Features */
// //   showFavorites?: boolean;
// //   favorites?: string[];
// //   onFavoriteToggle?: (id: string) => void;
  
// //   /** View Options */
// //   viewMode?: 'grid' | 'list';
// //   onViewModeChange?: (mode: 'grid' | 'list') => void;
  
// //   /** Additional */
// //   metadata?: {
// //     totalItems?: number;
// //     filteredItems?: number;
// //     version?: string;
// //   };
// // }

// // // ============================================
// // // MAIN COMPONENT
// // // ============================================

// // const FullScreenPopup: React.FC<FullScreenPopupProps> = ({
// //   open,
// //   title,
// //   subtitle,
// //   leftActions = [],
// //   rightActions = [],
// //   centerContent,
// //   tabs = [],
// //   activeTab,
// //   onTabChange,
// //   showBackButton = false,
// //   onBack,
// //   showSearch = false,
// //   searchValue = '',
// //   onSearchChange,
// //   searchPlaceholder = 'Search...',
// //   children,
// //   footer,
// //   footerActions = [],
// //   onClose,
// //   closeOnOverlayClick = true,
// //   closeOnEscape = true,
// //   className = '',
// //   contentClassName = '',
// //   headerClassName = '',
// //   footerClassName = '',
// //   darkMode = false,
// //   onDarkModeToggle,
// //   fullscreen = false,
// //   maxWidth = '2xl',
// //   padding = 'md',
// //   showFavorites = false,
// //   favorites = [],
// //   onFavoriteToggle,
// //   viewMode = 'grid',
// //   onViewModeChange,
// //   metadata,
// // }) => {
// //   const [isDark, setIsDark] = useState(darkMode);
// //   const [isFullscreen, setIsFullscreen] = useState(fullscreen);
// //   const [isFavoritesOpen, setIsFavoritesOpen] = useState(false);
// //   const [copied, setCopied] = useState(false);
// //   const popupRef = useRef<HTMLDivElement>(null);
// //   const searchInputRef = useRef<HTMLInputElement>(null);

// //   // Handle dark mode
// //   useEffect(() => {
// //     setIsDark(darkMode);
// //   }, [darkMode]);

// //   // Handle fullscreen
// //   useEffect(() => {
// //     setIsFullscreen(fullscreen);
// //   }, [fullscreen]);

// //   // Handle escape key
// //   useEffect(() => {
// //     const handleEscape = (e: KeyboardEvent) => {
// //       if (closeOnEscape && e.key === 'Escape' && open) {
// //         onClose?.();
// //       }
// //     };
// //     window.addEventListener('keydown', handleEscape);
// //     return () => window.removeEventListener('keydown', handleEscape);
// //   }, [open, onClose, closeOnEscape]);

// //   // Prevent body scroll
// //   useEffect(() => {
// //     if (open) {
// //       document.body.style.overflow = 'hidden';
// //     } else {
// //       document.body.style.overflow = 'unset';
// //     }
// //     return () => {
// //       document.body.style.overflow = 'unset';
// //     };
// //   }, [open]);

// //   // Handle copy to clipboard
// //   const handleCopy = async (text: string) => {
// //     try {
// //       await navigator.clipboard.writeText(text);
// //       setCopied(true);
// //       setTimeout(() => setCopied(false), 2000);
// //     } catch (err) {
// //       console.error('Failed to copy:', err);
// //     }
// //   };

// //   // Handle overlay click
// //   const handleOverlayClick = (e: React.MouseEvent) => {
// //     if (closeOnOverlayClick && e.target === e.currentTarget) {
// //       onClose?.();
// //     }
// //   };

// //   // Keyboard shortcuts
// //   useEffect(() => {
// //     const handleKeyDown = (e: KeyboardEvent) => {
// //       if (!open) return;
      
// //       // Ctrl+F for search
// //       if ((e.ctrlKey || e.metaKey) && e.key === 'f') {
// //         e.preventDefault();
// //         searchInputRef.current?.focus();
// //       }
      
// //       // Ctrl+D for dark mode
// //       if ((e.ctrlKey || e.metaKey) && e.key === 'd') {
// //         e.preventDefault();
// //         handleDarkModeToggle();
// //       }
      
// //       // Ctrl+G for view toggle
// //       if ((e.ctrlKey || e.metaKey) && e.key === 'g') {
// //         e.preventDefault();
// //         handleViewModeToggle();
// //       }
// //     };

// //     window.addEventListener('keydown', handleKeyDown);
// //     return () => window.removeEventListener('keydown', handleKeyDown);
// //   }, [open]);

// //   const handleDarkModeToggle = () => {
// //     setIsDark(!isDark);
// //     onDarkModeToggle?.();
// //   };

// //   const handleViewModeToggle = () => {
// //     if (onViewModeChange) {
// //       onViewModeChange(viewMode === 'grid' ? 'list' : 'grid');
// //     }
// //   };

// //   const handleFullscreenToggle = () => {
// //     setIsFullscreen(!isFullscreen);
// //   };

// //   // Render action buttons
// //   const renderActions = (actions: PopupHeaderAction[]) => {
// //     return actions.map((action, index) => {
// //       const variantClasses = {
// //         primary: isDark 
// //           ? 'bg-blue-600 hover:bg-blue-700 text-white' 
// //           : 'bg-blue-500 hover:bg-blue-600 text-white',
// //         secondary: isDark
// //           ? 'bg-gray-700 hover:bg-gray-600 text-white'
// //           : 'bg-gray-200 hover:bg-gray-300 text-gray-700',
// //         ghost: isDark
// //           ? 'hover:bg-gray-700 text-gray-300'
// //           : 'hover:bg-gray-100 text-gray-600',
// //         danger: isDark
// //           ? 'bg-red-600 hover:bg-red-700 text-white'
// //           : 'bg-red-500 hover:bg-red-600 text-white',
// //       };

// //       return (
// //         <button
// //           key={index}
// //           onClick={action.onClick}
// //           disabled={action.disabled}
// //           className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all duration-200 text-sm font-medium
// //             ${variantClasses[action.variant || 'ghost']}
// //             ${action.disabled ? 'opacity-50 cursor-not-allowed' : 'hover:scale-105'}
// //           `}
// //           title={action.tooltip}
// //         >
// //           {action.icon}
// //           {action.label}
// //         </button>
// //       );
// //     });
// //   };

// //   // Render tabs
// //   const renderTabs = () => {
// //     if (!tabs.length) return null;

// //     return (
// //       <div className={`flex items-center gap-1 px-4 border-b ${
// //         isDark ? 'border-gray-700' : 'border-gray-200'
// //       }`}>
// //         {tabs.map((tab) => (
// //           <button
// //             key={tab.id}
// //             onClick={() => onTabChange?.(tab.id)}
// //             className={`flex items-center gap-2 px-4 py-2.5 text-sm font-medium transition-all relative
// //               ${activeTab === tab.id
// //                 ? isDark
// //                   ? 'text-blue-400'
// //                   : 'text-blue-600'
// //                 : isDark
// //                   ? 'text-gray-400 hover:text-gray-200'
// //                   : 'text-gray-500 hover:text-gray-700'
// //               }
// //             `}
// //           >
// //             {tab.icon}
// //             {tab.label}
// //             {tab.count !== undefined && (
// //               <span className={`text-xs px-1.5 py-0.5 rounded-full ${
// //                 activeTab === tab.id
// //                   ? isDark ? 'bg-blue-500/20 text-blue-400' : 'bg-blue-100 text-blue-600'
// //                   : isDark ? 'bg-gray-700 text-gray-400' : 'bg-gray-200 text-gray-500'
// //               }`}>
// //                 {tab.count}
// //               </span>
// //             )}
// //             {tab.badge && (
// //               <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full animate-pulse" />
// //             )}
// //             {activeTab === tab.id && (
// //               <span className={`absolute bottom-0 left-0 right-0 h-0.5 ${
// //                 isDark ? 'bg-blue-400' : 'bg-blue-600'
// //               }`} />
// //             )}
// //           </button>
// //         ))}
// //       </div>
// //     );
// //   };

// //   // Render search bar
// //   const renderSearch = () => {
// //     if (!showSearch) return null;

// //     return (
// //       <div className={`px-4 py-3 border-b ${isDark ? 'border-gray-700' : 'border-gray-200'}`}>
// //         <div className="relative">
// //           <Search className={`absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 ${
// //             isDark ? 'text-gray-400' : 'text-gray-500'
// //           }`} />
// //           <input
// //             ref={searchInputRef}
// //             type="text"
// //             value={searchValue}
// //             onChange={(e) => onSearchChange?.(e.target.value)}
// //             placeholder={searchPlaceholder}
// //             className={`w-full pl-9 pr-4 py-2 rounded-lg outline-none transition-colors text-sm ${
// //               isDark 
// //                 ? 'bg-gray-800 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500' 
// //                 : 'bg-gray-50 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-blue-500'
// //             }`}
// //           />
// //           {searchValue && (
// //             <button
// //               onClick={() => onSearchChange?.('')}
// //               className={`absolute right-3 top-1/2 -translate-y-1/2 ${
// //                 isDark ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-gray-700'
// //               }`}
// //             >
// //               <X className="w-4 h-4" />
// //             </button>
// //           )}
// //           <div className={`absolute right-12 top-1/2 -translate-y-1/2 text-xs ${
// //             isDark ? 'text-gray-500' : 'text-gray-400'
// //           }`}>
// //             ⌘F
// //           </div>
// //         </div>
// //       </div>
// //     );
// //   };

// //   // Render header
// //   const renderHeader = () => {
// //     const hasHeaderContent = title || subtitle || leftActions.length || rightActions.length || centerContent;

// //     if (!hasHeaderContent) return null;

// //     return (
// //       <div className={`flex items-center justify-between px-4 py-3 border-b ${
// //         isDark ? 'border-gray-700' : 'border-gray-200'
// //       } ${headerClassName}`}>
// //         {/* Left Section */}
// //         <div className="flex items-center gap-3 min-w-[120px]">
// //           {showBackButton && (
// //             <button
// //               onClick={onBack}
// //               className={`p-1.5 rounded-lg transition-all hover:scale-110 ${
// //                 isDark ? 'hover:bg-gray-700 text-gray-300' : 'hover:bg-gray-100 text-gray-600'
// //               }`}
// //             >
// //               <ChevronLeft className="w-5 h-5" />
// //             </button>
// //           )}
// //           {renderActions(leftActions)}
// //         </div>

// //         {/* Center Section */}
// //         <div className="flex flex-col items-center flex-1 min-w-0">
// //           {centerContent || (
// //             <>
// //               {title && (
// //                 <div className={`font-bold text-lg truncate ${
// //                   isDark ? 'text-white' : 'text-gray-900'
// //                 }`}>
// //                   {title}
// //                 </div>
// //               )}
// //               {subtitle && (
// //                 <div className={`text-sm truncate ${
// //                   isDark ? 'text-gray-400' : 'text-gray-500'
// //                 }`}>
// //                   {subtitle}
// //                 </div>
// //               )}
// //             </>
// //           )}
// //         </div>

// //         {/* Right Section */}
// //         <div className="flex items-center gap-2 min-w-[120px] justify-end">
// //           {metadata && (
// //             <span className={`text-xs px-2 py-1 rounded-full ${
// //               isDark ? 'bg-gray-800 text-gray-400' : 'bg-gray-100 text-gray-500'
// //             }`}>
// //               {metadata.totalItems || 0} items
// //             </span>
// //           )}
          
// //           {/* View Mode Toggle */}
// //           {onViewModeChange && (
// //             <button
// //               onClick={handleViewModeToggle}
// //               className={`p-1.5 rounded-lg transition-all hover:scale-110 ${
// //                 isDark ? 'hover:bg-gray-700 text-gray-300' : 'hover:bg-gray-100 text-gray-600'
// //               }`}
// //               title="Toggle View (⌘G)"
// //             >
// //               {viewMode === 'grid' ? (
// //                 <List className="w-4 h-4" />
// //               ) : (
// //                 <Grid className="w-4 h-4" />
// //               )}
// //             </button>
// //           )}
          
// //           {/* Favorites Toggle */}
// //           {showFavorites && (
// //             <button
// //               onClick={() => setIsFavoritesOpen(!isFavoritesOpen)}
// //               className={`p-1.5 rounded-lg transition-all hover:scale-110 relative ${
// //                 isDark ? 'hover:bg-gray-700 text-gray-300' : 'hover:bg-gray-100 text-gray-600'
// //               }`}
// //             >
// //               <Heart className={`w-4 h-4 ${favorites.length > 0 ? 'fill-red-500 text-red-500' : ''}`} />
// //               {favorites.length > 0 && (
// //                 <span className="absolute -top-0.5 -right-0.5 w-3 h-3 bg-red-500 text-white text-[8px] rounded-full flex items-center justify-center">
// //                   {favorites.length}
// //                 </span>
// //               )}
// //             </button>
// //           )}
          
// //           {/* Dark Mode Toggle */}
// //           {onDarkModeToggle && (
// //             <button
// //               onClick={handleDarkModeToggle}
// //               className={`p-1.5 rounded-lg transition-all hover:scale-110 ${
// //                 isDark ? 'hover:bg-gray-700 text-yellow-400' : 'hover:bg-gray-100 text-gray-600'
// //               }`}
// //               title="Toggle Dark Mode (⌘D)"
// //             >
// //               {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
// //             </button>
// //           )}
          
// //           {/* Fullscreen Toggle */}
// //           <button
// //             onClick={handleFullscreenToggle}
// //             className={`p-1.5 rounded-lg transition-all hover:scale-110 ${
// //               isDark ? 'hover:bg-gray-700 text-gray-300' : 'hover:bg-gray-100 text-gray-600'
// //             }`}
// //           >
// //             {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
// //           </button>
          
// //           {/* Close Button */}
// //           {onClose && (
// //             <button
// //               onClick={onClose}
// //               className={`p-1.5 rounded-lg transition-all hover:scale-110 hover:rotate-90 ${
// //                 isDark ? 'hover:bg-gray-700 text-gray-300' : 'hover:bg-gray-100 text-gray-600'
// //               }`}
// //             >
// //               <X className="w-5 h-5" />
// //             </button>
// //           )}
          
// //           {renderActions(rightActions)}
// //         </div>
// //       </div>
// //     );
// //   };

// //   // Render footer
// //   const renderFooter = () => {
// //     if (!footer && !footerActions.length) return null;

// //     return (
// //       <div className={`flex items-center justify-between px-4 py-3 border-t ${
// //         isDark ? 'border-gray-700' : 'border-gray-200'
// //       } ${footerClassName}`}>
// //         <div className="flex items-center gap-4">
// //           {footer}
// //         </div>
// //         <div className="flex items-center gap-2">
// //           {renderActions(footerActions)}
// //           {metadata?.version && (
// //             <span className={`text-xs ${
// //               isDark ? 'text-gray-500' : 'text-gray-400'
// //             }`}>
// //               v{metadata.version}
// //             </span>
// //           )}
// //         </div>
// //       </div>
// //     );
// //   };

// //   // Padding classes
// //   const paddingClasses = {
// //     none: 'p-0',
// //     sm: 'p-2',
// //     md: 'p-4',
// //     lg: 'p-6',
// //     xl: 'p-8',
// //   };

// //   // Max width classes
// //   const maxWidthClasses = {
// //     sm: 'max-w-screen-sm',
// //     md: 'max-w-screen-md',
// //     lg: 'max-w-screen-lg',
// //     xl: 'max-w-screen-xl',
// //     '2xl': 'max-w-screen-2xl',
// //     full: 'max-w-full',
// //     screen: 'max-w-screen',
// //   };

// //   if (!open) return null;

// //   return (
// //     <div
// //       className={`fixed inset-0 z-50 flex items-center justify-center transition-all duration-300 ${
// //         isDark ? 'bg-black/80' : 'bg-black/50'
// //       } ${isFullscreen ? 'p-0' : 'p-4'}`}
// //       onClick={handleOverlayClick}
// //     >
// //       <div
// //         ref={popupRef}
// //         className={`relative flex flex-col w-full h-full transition-all duration-300 ${
// //           isDark ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'
// //         } ${isFullscreen ? 'rounded-none' : 'rounded-2xl shadow-2xl'} 
// //         ${maxWidthClasses[maxWidth]} ${className}`}
// //         style={{ maxHeight: isFullscreen ? '100vh' : '90vh' }}
// //       >
// //         {/* Header */}
// //         {renderHeader()}

// //         {/* Tabs */}
// //         {renderTabs()}

// //         {/* Search */}
// //         {renderSearch()}

// //         {/* Main Content */}
// //         <section className={`flex-1 overflow-y-auto ${paddingClasses[padding]} ${contentClassName}`}>
// //           {children}
// //         </section>

// //         {/* Footer */}
// //         {renderFooter()}

// //         {/* Keyboard shortcuts hint */}
// //         <div className={`absolute bottom-20 right-4 text-xs ${
// //           isDark ? 'text-gray-600' : 'text-gray-400'
// //         } opacity-50 hover:opacity-100 transition-opacity`}>
// //           ⌘F Search • ⌘D Dark • ⌘G View
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // // ============================================
// // // HEADER ACTION HELPER COMPONENTS
// // // ============================================

// // export const HeaderAction: React.FC<PopupHeaderAction> = (props) => {
// //   return <>{/* Used in the renderActions method */}</>;
// // };

// // export const PopupTab: React.FC<PopupTab> = (props) => {
// //   return <>{/* Used in the tabs array */}</>;
// // };

// // // ============================================
// // // USAGE EXAMPLE WITH DESIGN HELPER
// // // ============================================

// // export const DesignHelperPopup: React.FC<{
// //   open: boolean;
// //   onClose: () => void;
// //   categories?: any[];
// //   activeCategory?: string;
// //   onCategoryChange?: (id: string) => void;
// // }> = ({
// //   open,
// //   onClose,
// //   categories = [],
// //   activeCategory,
// //   onCategoryChange,
// // }) => {
// //   const [search, setSearch] = useState('');
// //   const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
// //   const [darkMode, setDarkMode] = useState(false);
// //   const [favorites, setFavorites] = useState<string[]>([]);

// //   // Convert categories to tabs
// //   const tabs: PopupTab[] = categories.map(cat => ({
// //     id: cat.id,
// //     label: cat.label,
// //     icon: cat.icon,
// //     count: cat.tokens?.length || 0,
// //   }));

// //   const totalItems = categories.reduce((acc, cat) => acc + (cat.tokens?.length || 0), 0);

// //   return (
// //     <FullScreenPopup
// //       open={open}
// //       onClose={onClose}
// //       title="Design Helper Pro"
// //       subtitle={`${categories.length} Categories • ${totalItems} Tokens`}
      
// //       leftActions={[
// //         {
// //           icon: <ChevronLeft className="w-4 h-4" />,
// //           label: 'Back',
// //           onClick: () => console.log('Back'),
// //           variant: 'secondary',
// //         },
// //         {
// //           icon: <Code className="w-4 h-4" />,
// //           label: 'Export',
// //           onClick: () => console.log('Export'),
// //           variant: 'primary',
// //         },
// //       ]}
      
// //       rightActions={[
// //         {
// //           icon: <Share2 className="w-4 h-4" />,
// //           label: 'Share',
// //           onClick: () => console.log('Share'),
// //           variant: 'ghost',
// //         },
// //         {
// //           icon: <Settings className="w-4 h-4" />,
// //           label: 'Settings',
// //           onClick: () => console.log('Settings'),
// //           variant: 'ghost',
// //         },
// //         {
// //           icon: <HelpCircle className="w-4 h-4" />,
// //           label: 'Help',
// //           onClick: () => console.log('Help'),
// //           variant: 'ghost',
// //         },
// //       ]}
      
// //       tabs={tabs}
// //       activeTab={activeCategory}
// //       onTabChange={onCategoryChange}
      
// //       showSearch={true}
// //       searchValue={search}
// //       onSearchChange={setSearch}
// //       searchPlaceholder="Search tokens by name, class, or description... (⌘F)"
      
// //       viewMode={viewMode}
// //       onViewModeChange={setViewMode}
      
// //       showFavorites={true}
// //       favorites={favorites}
// //       onFavoriteToggle={(id) => {
// //         setFavorites(prev => 
// //           prev.includes(id) 
// //             ? prev.filter(f => f !== id) 
// //             : [...prev, id]
// //         );
// //       }}
      
// //       darkMode={darkMode}
// //       onDarkModeToggle={() => setDarkMode(!darkMode)}
      
// //       fullscreen={false}
// //       maxWidth="2xl"
// //       padding="md"
      
// //       metadata={{
// //         totalItems,
// //         filteredItems: totalItems,
// //         version: '2.0.0',
// //       }}
      
// //       footer={
// //         <div className="flex items-center gap-4 text-sm">
// //           <span className={darkMode ? 'text-gray-400' : 'text-gray-500'}>
// //             💡 Tips: Click to copy • Use keyboard shortcuts
// //           </span>
// //         </div>
// //       }
      
// //       footerActions={[
// //         {
// //           icon: <Copy className="w-4 h-4" />,
// //           label: 'Copy All',
// //           onClick: () => console.log('Copy all'),
// //           variant: 'secondary',
// //         },
// //         {
// //           icon: <Download className="w-4 h-4" />,
// //           label: 'Download',
// //           onClick: () => console.log('Download'),
// //           variant: 'primary',
// //         },
// //       ]}
      
// //       closeOnOverlayClick={true}
// //       closeOnEscape={true}
// //     >
// //       {/* Your content here */}
// //       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
// //         {/* Content items */}
// //         <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800">
// //           <h3 className="font-medium">Sample Token</h3>
// //           <code className="text-sm block mt-1">class-name</code>
// //         </div>
// //       </div>
// //     </FullScreenPopup>
// //   );
// // };

// // export default FullScreenPopup;


// "use client";

// import React, { useState, useEffect, useRef, ReactNode } from 'react';
// import { 
//   X, 
//   ChevronLeft, 
//   ChevronRight, 
//   Search, 
//   Grid, 
//   List, 
//   Moon, 
//   Sun, 
//   Maximize2, 
//   Minimize2,
//   Heart,
//   Filter,
//   Settings,
//   HelpCircle,
//   Share2,
//   Download,
//   Star,
//   Sparkles,
//   Code,
//   Palette,
//   Type,
//   Layout,
//   Square,
//   Move,
//   Zap,
//   MousePointer,
//   Ruler,
//   AlignJustify,
//   Layers,
//   ArrowUpDown,
//   RotateCw,
//   Eye,
//   Copy,
//   Check,
//   ChevronDown
// } from 'lucide-react';

// // ============================================
// // TYPES
// // ============================================

// export interface PopupHeaderAction {
//   icon?: ReactNode;
//   label?: string;
//   onClick?: () => void;
//   variant?: 'primary' | 'secondary' | 'ghost' | 'danger';
//   disabled?: boolean;
//   tooltip?: string;
// }

// export interface PopupTab {
//   id: string;
//   label: string;
//   icon?: ReactNode;
//   count?: number;
//   badge?: string | number;
// }

// export interface FullScreenPopupProps {
//   /** Control popup visibility */
//   open: boolean;
  
//   /** Header Configuration */
//   title?: ReactNode;
//   subtitle?: ReactNode;
//   leftActions?: PopupHeaderAction[];
//   rightActions?: PopupHeaderAction[];
//   centerContent?: ReactNode;
  
//   /** Navigation */
//   tabs?: PopupTab[];
//   activeTab?: string;
//   onTabChange?: (tabId: string) => void;
//   showBackButton?: boolean;
//   onBack?: () => void;
  
//   /** Search */
//   showSearch?: boolean;
//   searchValue?: string;
//   onSearchChange?: (value: string) => void;
//   searchPlaceholder?: string;
  
//   /** Main Content */
//   children: ReactNode;
  
//   /** Footer */
//   footer?: ReactNode;
//   footerActions?: PopupHeaderAction[];
  
//   /** Events */
//   onClose?: () => void;
//   closeOnOverlayClick?: boolean;
//   closeOnEscape?: boolean;
  
//   /** Customization */
//   className?: string;
//   contentClassName?: string;
//   headerClassName?: string;
//   footerClassName?: string;
  
//   /** Theme */
//   darkMode?: boolean;
//   onDarkModeToggle?: () => void;
  
//   /** Layout */
//   isFullscreen?: boolean;
//   onFullscreenToggle?: () => void;
//   maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full' | 'screen';
//   padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  
//   /** Features */
//   showFavorites?: boolean;
//   favorites?: string[];
//   onFavoriteToggle?: (id: string) => void;
  
//   /** View Options */
//   viewMode?: 'grid' | 'list';
//   onViewModeChange?: (mode: 'grid' | 'list') => void;
  
//   /** Additional */
//   metadata?: {
//     totalItems?: number;
//     filteredItems?: number;
//     version?: string;
//   };
// }

// // ============================================
// // MAIN COMPONENT
// // ============================================

// const FullScreenPopup: React.FC<FullScreenPopupProps> = ({
//   open,
//   title,
//   subtitle,
//   leftActions = [],
//   rightActions = [],
//   centerContent,
//   tabs = [],
//   activeTab,
//   onTabChange,
//   showBackButton = false,
//   onBack,
//   showSearch = false,
//   searchValue = '',
//   onSearchChange,
//   searchPlaceholder = 'Search...',
//   children,
//   footer,
//   footerActions = [],
//   onClose,
//   closeOnOverlayClick = true,
//   closeOnEscape = true,
//   className = '',
//   contentClassName = '',
//   headerClassName = '',
//   footerClassName = '',
//   darkMode = false,
//   onDarkModeToggle,
//   isFullscreen = false,
//   onFullscreenToggle,
//   maxWidth = '2xl',
//   padding = 'md',
//   showFavorites = false,
//   favorites = [],
//   onFavoriteToggle,
//   viewMode = 'grid',
//   onViewModeChange,
//   metadata,
// }) => {
//   const [isDark, setIsDark] = useState(darkMode);
//   const [fullscreen, setFullscreen] = useState(isFullscreen);
//   const [isFavoritesOpen, setIsFavoritesOpen] = useState(false);
//   const [copied, setCopied] = useState(false);
//   const popupRef = useRef<HTMLDivElement>(null);
//   const searchInputRef = useRef<HTMLInputElement>(null);

//   // Handle dark mode
//   useEffect(() => {
//     setIsDark(darkMode);
//   }, [darkMode]);

//   // Handle fullscreen
//   useEffect(() => {
//     setFullscreen(isFullscreen);
//   }, [isFullscreen]);

//   // Handle escape key
//   useEffect(() => {
//     const handleEscape = (e: KeyboardEvent) => {
//       if (closeOnEscape && e.key === 'Escape' && open) {
//         // If in fullscreen, exit fullscreen first
//         if (fullscreen) {
//           handleFullscreenToggle();
//         } else {
//           onClose?.();
//         }
//       }
//     };
//     window.addEventListener('keydown', handleEscape);
//     return () => window.removeEventListener('keydown', handleEscape);
//   }, [open, onClose, closeOnEscape, fullscreen]);

//   // Prevent body scroll and handle fullscreen
//   useEffect(() => {
//     if (open) {
//       document.body.style.overflow = 'hidden';
      
//       // If fullscreen, also prevent any scrolling on the document
//       if (fullscreen) {
//         document.documentElement.style.overflow = 'hidden';
//       }
//     } else {
//       document.body.style.overflow = 'unset';
//       document.documentElement.style.overflow = 'unset';
//     }
//     return () => {
//       document.body.style.overflow = 'unset';
//       document.documentElement.style.overflow = 'unset';
//     };
//   }, [open, fullscreen]);

//   // Handle copy to clipboard
//   const handleCopy = async (text: string) => {
//     try {
//       await navigator.clipboard.writeText(text);
//       setCopied(true);
//       setTimeout(() => setCopied(false), 2000);
//     } catch (err) {
//       console.error('Failed to copy:', err);
//     }
//   };

//   // Handle overlay click
//   const handleOverlayClick = (e: React.MouseEvent) => {
//     if (closeOnOverlayClick && e.target === e.currentTarget) {
//       onClose?.();
//     }
//   };

//   // Handle fullscreen toggle
//   const handleFullscreenToggle = () => {
//     const newFullscreen = !fullscreen;
//     setFullscreen(newFullscreen);
//     onFullscreenToggle?.();
    
//     // If entering fullscreen, lock the document
//     if (newFullscreen) {
//       document.documentElement.style.overflow = 'hidden';
//       document.body.style.overflow = 'hidden';
//     } else {
//       document.documentElement.style.overflow = 'unset';
//       document.body.style.overflow = 'hidden'; // Keep body hidden because popup is still open
//     }
//   };

//   // Keyboard shortcuts
//   useEffect(() => {
//     const handleKeyDown = (e: KeyboardEvent) => {
//       if (!open) return;
      
//       // Ctrl+F for search
//       if ((e.ctrlKey || e.metaKey) && e.key === 'f') {
//         e.preventDefault();
//         searchInputRef.current?.focus();
//       }
      
//       // Ctrl+D for dark mode
//       if ((e.ctrlKey || e.metaKey) && e.key === 'd') {
//         e.preventDefault();
//         handleDarkModeToggle();
//       }
      
//       // Ctrl+G for view toggle
//       if ((e.ctrlKey || e.metaKey) && e.key === 'g') {
//         e.preventDefault();
//         handleViewModeToggle();
//       }
      
//       // Ctrl+Shift+F for fullscreen
//       if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'F') {
//         e.preventDefault();
//         handleFullscreenToggle();
//       }
//     };

//     window.addEventListener('keydown', handleKeyDown);
//     return () => window.removeEventListener('keydown', handleKeyDown);
//   }, [open]);

//   const handleDarkModeToggle = () => {
//     setIsDark(!isDark);
//     onDarkModeToggle?.();
//   };

//   const handleViewModeToggle = () => {
//     if (onViewModeChange) {
//       onViewModeChange(viewMode === 'grid' ? 'list' : 'grid');
//     }
//   };

//   // Render action buttons
//   const renderActions = (actions: PopupHeaderAction[]) => {
//     return actions.map((action, index) => {
//       const variantClasses = {
//         primary: isDark 
//           ? 'bg-blue-600 hover:bg-blue-700 text-white' 
//           : 'bg-blue-500 hover:bg-blue-600 text-white',
//         secondary: isDark
//           ? 'bg-gray-700 hover:bg-gray-600 text-white'
//           : 'bg-gray-200 hover:bg-gray-300 text-gray-700',
//         ghost: isDark
//           ? 'hover:bg-gray-700 text-gray-300'
//           : 'hover:bg-gray-100 text-gray-600',
//         danger: isDark
//           ? 'bg-red-600 hover:bg-red-700 text-white'
//           : 'bg-red-500 hover:bg-red-600 text-white',
//       };

//       return (
//         <button
//           key={index}
//           onClick={action.onClick}
//           disabled={action.disabled}
//           className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all duration-200 text-sm font-medium
//             ${variantClasses[action.variant || 'ghost']}
//             ${action.disabled ? 'opacity-50 cursor-not-allowed' : 'hover:scale-105'}
//           `}
//           title={action.tooltip}
//         >
//           {action.icon}
//           {action.label}
//         </button>
//       );
//     });
//   };

//   // Render tabs
//   const renderTabs = () => {
//     if (!tabs.length) return null;

//     return (
//       <div className={`flex items-center gap-1 px-4 border-b ${
//         isDark ? 'border-gray-700' : 'border-gray-200'
//       }`}>
//         {tabs.map((tab) => (
//           <button
//             key={tab.id}
//             onClick={() => onTabChange?.(tab.id)}
//             className={`flex items-center gap-2 px-4 py-2.5 text-sm font-medium transition-all relative
//               ${activeTab === tab.id
//                 ? isDark
//                   ? 'text-blue-400'
//                   : 'text-blue-600'
//                 : isDark
//                   ? 'text-gray-400 hover:text-gray-200'
//                   : 'text-gray-500 hover:text-gray-700'
//               }
//             `}
//           >
//             {tab.icon}
//             {tab.label}
//             {tab.count !== undefined && (
//               <span className={`text-xs px-1.5 py-0.5 rounded-full ${
//                 activeTab === tab.id
//                   ? isDark ? 'bg-blue-500/20 text-blue-400' : 'bg-blue-100 text-blue-600'
//                   : isDark ? 'bg-gray-700 text-gray-400' : 'bg-gray-200 text-gray-500'
//               }`}>
//                 {tab.count}
//               </span>
//             )}
//             {tab.badge && (
//               <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full animate-pulse" />
//             )}
//             {activeTab === tab.id && (
//               <span className={`absolute bottom-0 left-0 right-0 h-0.5 ${
//                 isDark ? 'bg-blue-400' : 'bg-blue-600'
//               }`} />
//             )}
//           </button>
//         ))}
//       </div>
//     );
//   };

//   // Render search bar
//   const renderSearch = () => {
//     if (!showSearch) return null;

//     return (
//       <div className={`px-4 py-3 border-b ${isDark ? 'border-gray-700' : 'border-gray-200'}`}>
//         <div className="relative">
//           <Search className={`absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 ${
//             isDark ? 'text-gray-400' : 'text-gray-500'
//           }`} />
//           <input
//             ref={searchInputRef}
//             type="text"
//             value={searchValue}
//             onChange={(e) => onSearchChange?.(e.target.value)}
//             placeholder={searchPlaceholder}
//             className={`w-full pl-9 pr-4 py-2 rounded-lg outline-none transition-colors text-sm ${
//               isDark 
//                 ? 'bg-gray-800 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500' 
//                 : 'bg-gray-50 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-blue-500'
//             }`}
//           />
//           {searchValue && (
//             <button
//               onClick={() => onSearchChange?.('')}
//               className={`absolute right-3 top-1/2 -translate-y-1/2 ${
//                 isDark ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-gray-700'
//               }`}
//             >
//               <X className="w-4 h-4" />
//             </button>
//           )}
//           <div className={`absolute right-12 top-1/2 -translate-y-1/2 text-xs ${
//             isDark ? 'text-gray-500' : 'text-gray-400'
//           }`}>
//             ⌘F
//           </div>
//         </div>
//       </div>
//     );
//   };

//   // Render header
//   const renderHeader = () => {
//     const hasHeaderContent = title || subtitle || leftActions.length || rightActions.length || centerContent;

//     if (!hasHeaderContent) return null;

//     return (
//       <div className={`flex items-center justify-between px-4 py-3 border-b ${
//         isDark ? 'border-gray-700' : 'border-gray-200'
//       } ${headerClassName}`}>
//         {/* Left Section */}
//         <div className="flex items-center gap-3 min-w-[120px]">
//           {showBackButton && (
//             <button
//               onClick={onBack}
//               className={`p-1.5 rounded-lg transition-all hover:scale-110 ${
//                 isDark ? 'hover:bg-gray-700 text-gray-300' : 'hover:bg-gray-100 text-gray-600'
//               }`}
//             >
//               <ChevronLeft className="w-5 h-5" />
//             </button>
//           )}
//           {renderActions(leftActions)}
//         </div>

//         {/* Center Section */}
//         <div className="flex flex-col items-center flex-1 min-w-0">
//           {centerContent || (
//             <>
//               {title && (
//                 <div className={`font-bold text-lg truncate ${
//                   isDark ? 'text-white' : 'text-gray-900'
//                 }`}>
//                   {title}
//                 </div>
//               )}
//               {subtitle && (
//                 <div className={`text-sm truncate ${
//                   isDark ? 'text-gray-400' : 'text-gray-500'
//                 }`}>
//                   {subtitle}
//                 </div>
//               )}
//             </>
//           )}
//         </div>

//         {/* Right Section */}
//         <div className="flex items-center gap-2 min-w-[120px] justify-end">
//           {metadata && (
//             <span className={`text-xs px-2 py-1 rounded-full ${
//               isDark ? 'bg-gray-800 text-gray-400' : 'bg-gray-100 text-gray-500'
//             }`}>
//               {metadata.totalItems || 0} items
//             </span>
//           )}
          
//           {/* View Mode Toggle */}
//           {onViewModeChange && (
//             <button
//               onClick={handleViewModeToggle}
//               className={`p-1.5 rounded-lg transition-all hover:scale-110 ${
//                 isDark ? 'hover:bg-gray-700 text-gray-300' : 'hover:bg-gray-100 text-gray-600'
//               }`}
//               title="Toggle View (⌘G)"
//             >
//               {viewMode === 'grid' ? (
//                 <List className="w-4 h-4" />
//               ) : (
//                 <Grid className="w-4 h-4" />
//               )}
//             </button>
//           )}
          
//           {/* Favorites Toggle */}
//           {showFavorites && (
//             <button
//               onClick={() => setIsFavoritesOpen(!isFavoritesOpen)}
//               className={`p-1.5 rounded-lg transition-all hover:scale-110 relative ${
//                 isDark ? 'hover:bg-gray-700 text-gray-300' : 'hover:bg-gray-100 text-gray-600'
//               }`}
//             >
//               <Heart className={`w-4 h-4 ${favorites.length > 0 ? 'fill-red-500 text-red-500' : ''}`} />
//               {favorites.length > 0 && (
//                 <span className="absolute -top-0.5 -right-0.5 w-3 h-3 bg-red-500 text-white text-[8px] rounded-full flex items-center justify-center">
//                   {favorites.length}
//                 </span>
//               )}
//             </button>
//           )}
          
//           {/* Dark Mode Toggle */}
//           {onDarkModeToggle && (
//             <button
//               onClick={handleDarkModeToggle}
//               className={`p-1.5 rounded-lg transition-all hover:scale-110 ${
//                 isDark ? 'hover:bg-gray-700 text-yellow-400' : 'hover:bg-gray-100 text-gray-600'
//               }`}
//               title="Toggle Dark Mode (⌘D)"
//             >
//               {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
//             </button>
//           )}
          
//           {/* Fullscreen Toggle */}
//           <button
//             onClick={handleFullscreenToggle}
//             className={`p-1.5 rounded-lg transition-all hover:scale-110 ${
//               isDark ? 'hover:bg-gray-700 text-gray-300' : 'hover:bg-gray-100 text-gray-600'
//             }`}
//             title={`${fullscreen ? 'Exit' : 'Enter'} Fullscreen (⌘⇧F)`}
//           >
//             {fullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
//           </button>
          
//           {/* Close Button */}
//           {onClose && (
//             <button
//               onClick={onClose}
//               className={`p-1.5 rounded-lg transition-all hover:scale-110 hover:rotate-90 ${
//                 isDark ? 'hover:bg-gray-700 text-gray-300' : 'hover:bg-gray-100 text-gray-600'
//               }`}
//             >
//               <X className="w-5 h-5" />
//             </button>
//           )}
          
//           {renderActions(rightActions)}
//         </div>
//       </div>
//     );
//   };

//   // Render footer
//   const renderFooter = () => {
//     if (!footer && !footerActions.length) return null;

//     return (
//       <div className={`flex items-center justify-between px-4 py-3 border-t ${
//         isDark ? 'border-gray-700' : 'border-gray-200'
//       } ${footerClassName}`}>
//         <div className="flex items-center gap-4">
//           {footer}
//         </div>
//         <div className="flex items-center gap-2">
//           {renderActions(footerActions)}
//           {metadata?.version && (
//             <span className={`text-xs ${
//               isDark ? 'text-gray-500' : 'text-gray-400'
//             }`}>
//               v{metadata.version}
//             </span>
//           )}
//         </div>
//       </div>
//     );
//   };

//   // Padding classes
//   const paddingClasses = {
//     none: 'p-0',
//     sm: 'p-2',
//     md: 'p-4',
//     lg: 'p-6',
//     xl: 'p-8',
//   };

//   // Max width classes
//   const maxWidthClasses = {
//     sm: 'max-w-screen-sm',
//     md: 'max-w-screen-md',
//     lg: 'max-w-screen-lg',
//     xl: 'max-w-screen-xl',
//     '2xl': 'max-w-screen-2xl',
//     full: 'max-w-full',
//     screen: 'max-w-screen',
//   };

//   if (!open) return null;

//   return (
//     <div
//       className={`fixed inset-0 z-50 flex items-center justify-center transition-all duration-300 ${
//         isDark ? 'bg-black/80' : 'bg-black/50'
//       } ${fullscreen ? 'p-0' : 'p-4'}`}
//       onClick={handleOverlayClick}
//       style={{
//         position: 'fixed',
//         top: 0,
//         left: 0,
//         right: 0,
//         bottom: 0,
//         width: '100vw',
//         height: '100vh',
//         maxWidth: '100vw',
//         maxHeight: '100vh',
//         overflow: 'hidden',
//       }}
//     >
//       <div
//         ref={popupRef}
//         className={`relative flex flex-col w-full transition-all duration-300 ${
//           isDark ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'
//         } ${fullscreen ? 'rounded-none' : 'rounded-2xl shadow-2xl'} 
//         ${!fullscreen ? maxWidthClasses[maxWidth] : 'max-w-full'} ${className}`}
//         style={{
//           height: fullscreen ? '100vh' : '90vh',
//           maxHeight: fullscreen ? '100vh' : '90vh',
//           width: fullscreen ? '100vw' : 'auto',
//           maxWidth: fullscreen ? '100vw' : 'auto',
//           margin: 0,
//           position: 'relative',
//         }}
//       >
//         {/* Fullscreen indicator */}
//         {fullscreen && (
//           <div className={`absolute top-0 left-1/2 -translate-x-1/2 text-xs px-3 py-1 rounded-b-lg ${
//             isDark ? 'bg-gray-800 text-gray-400' : 'bg-gray-100 text-gray-500'
//           } opacity-50 hover:opacity-100 transition-opacity z-10`}>
//             Fullscreen Mode • Press ESC to exit
//           </div>
//         )}

//         {/* Header */}
//         {renderHeader()}

//         {/* Tabs */}
//         {renderTabs()}

//         {/* Search */}
//         {renderSearch()}

//         {/* Main Content */}
//         <section 
//           className={`flex-1 overflow-y-auto ${paddingClasses[padding]} ${contentClassName}`}
//           style={{
//             scrollBehavior: 'smooth',
//             overscrollBehavior: 'contain',
//           }}
//         >
//           {children}
//         </section>

//         {/* Footer */}
//         {renderFooter()}

//         {/* Keyboard shortcuts hint */}
//         <div className={`absolute bottom-20 right-4 text-xs ${
//           isDark ? 'text-gray-600' : 'text-gray-400'
//         } opacity-50 hover:opacity-100 transition-opacity`}>
//           ⌘F Search • ⌘D Dark • ⌘G View • ⌘⇧F Fullscreen
//         </div>
//       </div>
//     </div>
//   );
// };

// // ============================================
// // HEADER ACTION HELPER COMPONENTS
// // ============================================

// export const HeaderAction: React.FC<PopupHeaderAction> = (props) => {
//   return <>{/* Used in the renderActions method */}</>;
// };

// export const PopupTab: React.FC<PopupTab> = (props) => {
//   return <>{/* Used in the tabs array */}</>;
// };

// // ============================================
// // USAGE EXAMPLE WITH FULLSCREEN
// // ============================================

// export const DesignHelperPopup: React.FC<{
//   open: boolean;
//   onClose: () => void;
//   categories?: any[];
//   activeCategory?: string;
//   onCategoryChange?: (id: string) => void;
// }> = ({
//   open,
//   onClose,
//   categories = [],
//   activeCategory,
//   onCategoryChange,
// }) => {
//   const [search, setSearch] = useState('');
//   const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
//   const [darkMode, setDarkMode] = useState(false);
//   const [favorites, setFavorites] = useState<string[]>([]);
//   const [isFullscreen, setIsFullscreen] = useState(false);

//   // Convert categories to tabs
//   const tabs: PopupTab[] = categories.map(cat => ({
//     id: cat.id,
//     label: cat.label,
//     icon: cat.icon,
//     count: cat.tokens?.length || 0,
//   }));

//   const totalItems = categories.reduce((acc, cat) => acc + (cat.tokens?.length || 0), 0);

//   return (
//     <FullScreenPopup
//       open={open}
//       onClose={onClose}
//       title="Design Helper Pro"
//       subtitle={`${categories.length} Categories • ${totalItems} Tokens`}
      
//       leftActions={[
//         {
//           icon: <ChevronLeft className="w-4 h-4" />,
//           label: 'Back',
//           onClick: () => console.log('Back'),
//           variant: 'secondary',
//         },
//         {
//           icon: <Code className="w-4 h-4" />,
//           label: 'Export',
//           onClick: () => console.log('Export'),
//           variant: 'primary',
//         },
//       ]}
      
//       rightActions={[
//         {
//           icon: <Share2 className="w-4 h-4" />,
//           label: 'Share',
//           onClick: () => console.log('Share'),
//           variant: 'ghost',
//         },
//         {
//           icon: <Settings className="w-4 h-4" />,
//           label: 'Settings',
//           onClick: () => console.log('Settings'),
//           variant: 'ghost',
//         },
//         {
//           icon: <HelpCircle className="w-4 h-4" />,
//           label: 'Help',
//           onClick: () => console.log('Help'),
//           variant: 'ghost',
//         },
//       ]}
      
//       tabs={tabs}
//       activeTab={activeCategory}
//       onTabChange={onCategoryChange}
      
//       showSearch={true}
//       searchValue={search}
//       onSearchChange={setSearch}
//       searchPlaceholder="Search tokens by name, class, or description... (⌘F)"
      
//       viewMode={viewMode}
//       onViewModeChange={setViewMode}
      
//       showFavorites={true}
//       favorites={favorites}
//       onFavoriteToggle={(id) => {
//         setFavorites(prev => 
//           prev.includes(id) 
//             ? prev.filter(f => f !== id) 
//             : [...prev, id]
//         );
//       }}
      
//       darkMode={darkMode}
//       onDarkModeToggle={() => setDarkMode(!darkMode)}
      
//       isFullscreen={isFullscreen}
//       onFullscreenToggle={() => setIsFullscreen(!isFullscreen)}
      
//       maxWidth="2xl"
//       padding="md"
      
//       metadata={{
//         totalItems,
//         filteredItems: totalItems,
//         version: '2.0.0',
//       }}
      
//       footer={
//         <div className="flex items-center gap-4 text-sm">
//           <span className={darkMode ? 'text-gray-400' : 'text-gray-500'}>
//             💡 Tips: Click to copy • Use keyboard shortcuts
//           </span>
//         </div>
//       }
      
//       footerActions={[
//         {
//           icon: <Copy className="w-4 h-4" />,
//           label: copied ? 'Copied!' : 'Copy All',
//           onClick: () => console.log('Copy all'),
//           variant: 'secondary',
//         },
//         {
//           icon: <Download className="w-4 h-4" />,
//           label: 'Download',
//           onClick: () => console.log('Download'),
//           variant: 'primary',
//         },
//       ]}
      
//       closeOnOverlayClick={true}
//       closeOnEscape={true}
//     >
//       {/* Your content here */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//         {/* Content items */}
//         <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800">
//           <h3 className="font-medium">Sample Token</h3>
//           <code className="text-sm block mt-1">class-name</code>
//         </div>
//       </div>
//     </FullScreenPopup>
//   );
// };

// export default FullScreenPopup;

// FullScreenPopup.tsx - Complete fixed version

"use client";

import React, { useState, useEffect, useRef, ReactNode } from 'react';
import { 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Search, 
  Grid, 
  List, 
  Moon, 
  Sun, 
  Maximize2, 
  Minimize2,
  Heart,
  Filter,
  Settings,
  HelpCircle,
  Share2,
  Download,
  Star,
  Sparkles,
  Code,
  Palette,
  Type,
  Layout,
  Square,
  Move,
  Zap,
  MousePointer,
  Ruler,
  AlignJustify,
  Layers,
  ArrowUpDown,
  RotateCw,
  Eye,
  Copy,
  Check,
  ChevronDown
} from 'lucide-react';

// ============================================
// TYPES
// ============================================

export interface PopupHeaderAction {
  icon?: ReactNode;
  label?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger';
  disabled?: boolean;
  tooltip?: string;
}

export interface PopupTab {
  id: string;
  label: string;
  icon?: ReactNode;
  count?: number;
  badge?: string | number;
}

export interface FullScreenPopupProps {
  /** Control popup visibility */
  open: boolean;
  
  /** Header Configuration */
  title?: ReactNode;
  subtitle?: ReactNode;
  leftActions?: PopupHeaderAction[];
  rightActions?: PopupHeaderAction[];
  centerContent?: ReactNode;
  
  /** Navigation */
  tabs?: PopupTab[];
  activeTab?: string;
  onTabChange?: (tabId: string) => void;
  showBackButton?: boolean;
  onBack?: () => void;
  
  /** Search */
  showSearch?: boolean;
  searchValue?: string;
  onSearchChange?: (value: string) => void;
  searchPlaceholder?: string;
  
  /** Main Content */
  children: ReactNode;
  
  /** Footer */
  footer?: ReactNode;
  footerActions?: PopupHeaderAction[];
  
  /** Events */
  onClose?: () => void;
  closeOnOverlayClick?: boolean;
  closeOnEscape?: boolean;
  
  /** Customization */
  className?: string;
  contentClassName?: string;
  headerClassName?: string;
  footerClassName?: string;
  
  /** Theme - Default: false (Light Theme) */
  darkMode?: boolean;
  onDarkModeToggle?: () => void;
  
  /** Layout */
  isFullscreen?: boolean;
  onFullscreenToggle?: () => void;
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full' | 'screen';
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  
  /** Features */
  showFavorites?: boolean;
  favorites?: string[];
  onFavoriteToggle?: (id: string) => void;
  
  /** View Options */
  viewMode?: 'grid' | 'list';
  onViewModeChange?: (mode: 'grid' | 'list') => void;
  
  /** Additional */
  metadata?: {
    totalItems?: number;
    filteredItems?: number;
    version?: string;
  };
}

// ============================================
// MAIN COMPONENT
// ============================================

const FullScreenPopup: React.FC<FullScreenPopupProps> = ({
  open,
  title,
  subtitle,
  leftActions = [],
  rightActions = [],
  centerContent,
  tabs = [],
  activeTab,
  onTabChange,
  showBackButton = false,
  onBack,
  showSearch = false,
  searchValue = '',
  onSearchChange,
  searchPlaceholder = 'Search...',
  children,
  footer,
  footerActions = [],
  onClose,
  closeOnOverlayClick = true,
  closeOnEscape = true,
  className = '',
  contentClassName = '',
  headerClassName = '',
  footerClassName = '',
  darkMode = false, // ✅ DEFAULT: LIGHT THEME
  onDarkModeToggle,
  isFullscreen = false,
  onFullscreenToggle,
  maxWidth = '2xl',
  padding = 'md',
  showFavorites = false,
  favorites = [],
  onFavoriteToggle,
  viewMode = 'grid',
  onViewModeChange,
  metadata,
}) => {
  // ✅ Use prop directly, don't override with internal state
  const [isDark, setIsDark] = useState(darkMode);
  const [fullscreen, setFullscreen] = useState(isFullscreen);
  const [isFavoritesOpen, setIsFavoritesOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const popupRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  // ✅ Handle dark mode - only update when prop changes
  useEffect(() => {
    setIsDark(darkMode);
  }, [darkMode]);

  // Handle fullscreen
  useEffect(() => {
    setFullscreen(isFullscreen);
  }, [isFullscreen]);

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (closeOnEscape && e.key === 'Escape' && open) {
        // If in fullscreen, exit fullscreen first
        if (fullscreen) {
          handleFullscreenToggle();
        } else {
          onClose?.();
        }
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [open, onClose, closeOnEscape, fullscreen]);

  // Prevent body scroll and handle fullscreen
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
      
      if (fullscreen) {
        document.documentElement.style.overflow = 'hidden';
      }
    } else {
      document.body.style.overflow = 'unset';
      document.documentElement.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      document.documentElement.style.overflow = 'unset';
    };
  }, [open, fullscreen]);

  // Handle copy to clipboard
  const handleCopy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  // Handle overlay click
  const handleOverlayClick = (e: React.MouseEvent) => {
    if (closeOnOverlayClick && e.target === e.currentTarget) {
      onClose?.();
    }
  };

  // Handle fullscreen toggle
  const handleFullscreenToggle = () => {
    const newFullscreen = !fullscreen;
    setFullscreen(newFullscreen);
    onFullscreenToggle?.();
    
    if (newFullscreen) {
      document.documentElement.style.overflow = 'hidden';
      document.body.style.overflow = 'hidden';
    } else {
      document.documentElement.style.overflow = 'unset';
      document.body.style.overflow = 'hidden';
    }
  };

  // ✅ Handle dark mode toggle - use the prop handler or internal
  const handleDarkModeToggle = () => {
    const newDarkMode = !isDark;
    setIsDark(newDarkMode);
    if (onDarkModeToggle) {
      onDarkModeToggle();
    }
  };

  const handleViewModeToggle = () => {
    if (onViewModeChange) {
      onViewModeChange(viewMode === 'grid' ? 'list' : 'grid');
    }
  };

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!open) return;
      
      if ((e.ctrlKey || e.metaKey) && e.key === 'f') {
        e.preventDefault();
        searchInputRef.current?.focus();
      }
      
      if ((e.ctrlKey || e.metaKey) && e.key === 'd') {
        e.preventDefault();
        handleDarkModeToggle();
      }
      
      if ((e.ctrlKey || e.metaKey) && e.key === 'g') {
        e.preventDefault();
        handleViewModeToggle();
      }
      
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'F') {
        e.preventDefault();
        handleFullscreenToggle();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [open]);

  // Render action buttons
  const renderActions = (actions: PopupHeaderAction[]) => {
    return actions.map((action, index) => {
      const variantClasses = {
        primary: isDark 
          ? 'bg-blue-600 hover:bg-blue-700 text-white' 
          : 'bg-blue-500 hover:bg-blue-600 text-white',
        secondary: isDark
          ? 'bg-gray-700 hover:bg-gray-600 text-white'
          : 'bg-gray-200 hover:bg-gray-300 text-gray-700',
        ghost: isDark
          ? 'hover:bg-gray-700 text-gray-300'
          : 'hover:bg-gray-100 text-gray-600',
        danger: isDark
          ? 'bg-red-600 hover:bg-red-700 text-white'
          : 'bg-red-500 hover:bg-red-600 text-white',
      };

      return (
        <button
          key={index}
          onClick={action.onClick}
          disabled={action.disabled}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all duration-200 text-sm font-medium
            ${variantClasses[action.variant || 'ghost']}
            ${action.disabled ? 'opacity-50 cursor-not-allowed' : 'hover:scale-105'}
          `}
          title={action.tooltip}
        >
          {action.icon}
          {action.label}
        </button>
      );
    });
  };

  // Render tabs
  const renderTabs = () => {
    if (!tabs.length) return null;

    return (
      <div className={`flex items-center gap-1 px-4 border-b ${
        isDark ? 'border-gray-700' : 'border-gray-200'
      }`}>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onTabChange?.(tab.id)}
            className={`flex items-center gap-2 px-4 py-2.5 text-sm font-medium transition-all relative
              ${activeTab === tab.id
                ? isDark
                  ? 'text-blue-400'
                  : 'text-blue-600'
                : isDark
                  ? 'text-gray-400 hover:text-gray-200'
                  : 'text-gray-500 hover:text-gray-700'
              }
            `}
          >
            {tab.icon}
            {tab.label}
            {tab.count !== undefined && (
              <span className={`text-xs px-1.5 py-0.5 rounded-full ${
                activeTab === tab.id
                  ? isDark ? 'bg-blue-500/20 text-blue-400' : 'bg-blue-100 text-blue-600'
                  : isDark ? 'bg-gray-700 text-gray-400' : 'bg-gray-200 text-gray-500'
              }`}>
                {tab.count}
              </span>
            )}
            {tab.badge && (
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full animate-pulse" />
            )}
            {activeTab === tab.id && (
              <span className={`absolute bottom-0 left-0 right-0 h-0.5 ${
                isDark ? 'bg-blue-400' : 'bg-blue-600'
              }`} />
            )}
          </button>
        ))}
      </div>
    );
  };

  // Render search bar
  const renderSearch = () => {
    if (!showSearch) return null;

    return (
      <div className={`px-4 py-3 border-b ${isDark ? 'border-gray-700' : 'border-gray-200'}`}>
        <div className="relative">
          <Search className={`absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 ${
            isDark ? 'text-gray-400' : 'text-gray-500'
          }`} />
          <input
            ref={searchInputRef}
            type="text"
            value={searchValue}
            onChange={(e) => onSearchChange?.(e.target.value)}
            placeholder={searchPlaceholder}
            className={`w-full pl-9 pr-4 py-2 rounded-lg outline-none transition-colors text-sm ${
              isDark 
                ? 'bg-gray-800 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500' 
                : 'bg-gray-50 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-blue-500'
            }`}
          />
          {searchValue && (
            <button
              onClick={() => onSearchChange?.('')}
              className={`absolute right-3 top-1/2 -translate-y-1/2 ${
                isDark ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <div className={`absolute right-12 top-1/2 -translate-y-1/2 text-xs ${
            isDark ? 'text-gray-500' : 'text-gray-400'
          }`}>
            ⌘F
          </div>
        </div>
      </div>
    );
  };

  // Render header
  const renderHeader = () => {
    const hasHeaderContent = title || subtitle || leftActions.length || rightActions.length || centerContent;

    if (!hasHeaderContent) return null;

    return (
      <div className={`flex items-center justify-between px-4 py-3 border-b ${
        isDark ? 'border-gray-700' : 'border-gray-200'
      } ${headerClassName}`}>
        {/* Left Section */}
        <div className="flex items-center gap-3 min-w-[120px]">
          {showBackButton && (
            <button
              onClick={onBack}
              className={`p-1.5 rounded-lg transition-all hover:scale-110 ${
                isDark ? 'hover:bg-gray-700 text-gray-300' : 'hover:bg-gray-100 text-gray-600'
              }`}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
          )}
          {renderActions(leftActions)}
        </div>

        {/* Center Section */}
        <div className="flex flex-col items-center flex-1 min-w-0">
          {centerContent || (
            <>
              {title && (
                <div className={`font-bold text-lg truncate ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>
                  {title}
                </div>
              )}
              {subtitle && (
                <div className={`text-sm truncate ${
                  isDark ? 'text-gray-400' : 'text-gray-500'
                }`}>
                  {subtitle}
                </div>
              )}
            </>
          )}
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-2 min-w-[120px] justify-end">
          {metadata && (
            <span className={`text-xs px-2 py-1 rounded-full ${
              isDark ? 'bg-gray-800 text-gray-400' : 'bg-gray-100 text-gray-500'
            }`}>
              {metadata.totalItems || 0} items
            </span>
          )}
          
          {/* View Mode Toggle */}
          {onViewModeChange && (
            <button
              onClick={handleViewModeToggle}
              className={`p-1.5 rounded-lg transition-all hover:scale-110 ${
                isDark ? 'hover:bg-gray-700 text-gray-300' : 'hover:bg-gray-100 text-gray-600'
              }`}
              title="Toggle View (⌘G)"
            >
              {viewMode === 'grid' ? (
                <List className="w-4 h-4" />
              ) : (
                <Grid className="w-4 h-4" />
              )}
            </button>
          )}
          
          {/* Favorites Toggle */}
          {showFavorites && (
            <button
              onClick={() => setIsFavoritesOpen(!isFavoritesOpen)}
              className={`p-1.5 rounded-lg transition-all hover:scale-110 relative ${
                isDark ? 'hover:bg-gray-700 text-gray-300' : 'hover:bg-gray-100 text-gray-600'
              }`}
            >
              <Heart className={`w-4 h-4 ${favorites.length > 0 ? 'fill-red-500 text-red-500' : ''}`} />
              {favorites.length > 0 && (
                <span className="absolute -top-0.5 -right-0.5 w-3 h-3 bg-red-500 text-white text-[8px] rounded-full flex items-center justify-center">
                  {favorites.length}
                </span>
              )}
            </button>
          )}
          
          {/* Dark Mode Toggle */}
          <button
            onClick={handleDarkModeToggle}
            className={`p-1.5 rounded-lg transition-all hover:scale-110 ${
              isDark ? 'hover:bg-gray-700 text-yellow-400' : 'hover:bg-gray-100 text-gray-600'
            }`}
            title="Toggle Dark Mode (⌘D)"
          >
            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
          
          {/* Fullscreen Toggle */}
          <button
            onClick={handleFullscreenToggle}
            className={`p-1.5 rounded-lg transition-all hover:scale-110 ${
              isDark ? 'hover:bg-gray-700 text-gray-300' : 'hover:bg-gray-100 text-gray-600'
            }`}
            title={`${fullscreen ? 'Exit' : 'Enter'} Fullscreen (⌘⇧F)`}
          >
            {fullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
          </button>
          
          {/* Close Button */}
          {onClose && (
            <button
              onClick={onClose}
              className={`p-1.5 rounded-lg transition-all hover:scale-110 hover:rotate-90 ${
                isDark ? 'hover:bg-gray-700 text-gray-300' : 'hover:bg-gray-100 text-gray-600'
              }`}
            >
              <X className="w-5 h-5" />
            </button>
          )}
          
          {renderActions(rightActions)}
        </div>
      </div>
    );
  };

  // Render footer
  const renderFooter = () => {
    if (!footer && !footerActions.length) return null;

    return (
      <div className={`flex items-center justify-between px-4 py-3 border-t ${
        isDark ? 'border-gray-700' : 'border-gray-200'
      } ${footerClassName}`}>
        <div className="flex items-center gap-4">
          {footer}
        </div>
        <div className="flex items-center gap-2">
          {renderActions(footerActions)}
          {metadata?.version && (
            <span className={`text-xs ${
              isDark ? 'text-gray-500' : 'text-gray-400'
            }`}>
              v{metadata.version}
            </span>
          )}
        </div>
      </div>
    );
  };

  // Padding classes
  const paddingClasses = {
    none: 'p-0',
    sm: 'p-2',
    md: 'p-4',
    lg: 'p-6',
    xl: 'p-8',
  };

  // Max width classes
  const maxWidthClasses = {
    sm: 'max-w-screen-sm',
    md: 'max-w-screen-md',
    lg: 'max-w-screen-lg',
    xl: 'max-w-screen-xl',
    '2xl': 'max-w-screen-2xl',
    full: 'max-w-full',
    screen: 'max-w-screen',
  };

  if (!open) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center transition-all duration-300 ${
        isDark ? 'bg-black/80' : 'bg-black/50'
      } ${fullscreen ? 'p-0' : 'p-4'}`}
      onClick={handleOverlayClick}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: '100vw',
        height: '100vh',
        maxWidth: '100vw',
        maxHeight: '100vh',
        overflow: 'hidden',
      }}
    >
      <div
        ref={popupRef}
        className={`relative flex flex-col w-full transition-all duration-300 ${
          isDark ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'
        } ${fullscreen ? 'rounded-none' : 'rounded-2xl shadow-2xl'} 
        ${!fullscreen ? maxWidthClasses[maxWidth] : 'max-w-full'} ${className}`}
        style={{
          height: fullscreen ? '100vh' : '90vh',
          maxHeight: fullscreen ? '100vh' : '90vh',
          width: fullscreen ? '100vw' : 'auto',
          maxWidth: fullscreen ? '100vw' : 'auto',
          margin: 0,
          position: 'relative',
        }}
      >
        {/* Fullscreen indicator */}
        {fullscreen && (
          <div className={`absolute top-0 left-1/2 -translate-x-1/2 text-xs px-3 py-1 rounded-b-lg ${
            isDark ? 'bg-gray-800 text-gray-400' : 'bg-gray-100 text-gray-500'
          } opacity-50 hover:opacity-100 transition-opacity z-10`}>
            Fullscreen Mode • Press ESC to exit
          </div>
        )}

        {/* Header */}
        {renderHeader()}

        {/* Tabs */}
        {renderTabs()}

        {/* Search */}
        {renderSearch()}

        {/* Main Content */}
        <section 
          className={`flex-1 overflow-y-auto ${paddingClasses[padding]} ${contentClassName}`}
          style={{
            scrollBehavior: 'smooth',
            overscrollBehavior: 'contain',
          }}
        >
          {children}
        </section>

        {/* Footer */}
        {renderFooter()}

        {/* Keyboard shortcuts hint */}
        <div className={`absolute bottom-20 right-4 text-xs ${
          isDark ? 'text-gray-600' : 'text-gray-400'
        } opacity-50 hover:opacity-100 transition-opacity`}>
          ⌘F Search • ⌘D Dark • ⌘G View • ⌘⇧F Fullscreen
        </div>
      </div>
    </div>
  );
};

export default FullScreenPopup;