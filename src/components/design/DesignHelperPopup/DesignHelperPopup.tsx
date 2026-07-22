// import React, { useState, useEffect, useRef, useMemo } from 'react';
// import { 
//   Copy, 
//   Check, 
//   Palette, 
//   Type, 
//   Layout, 
//   Sparkles, 
//   X,
//   ChevronDown,
//   Grid,
//   AlignLeft,
//   AlignCenter,
//   AlignRight,
//   Bold,
//   Italic,
//   Underline,
//   Eye,
//   EyeOff,
//   Moon,
//   Sun,
//   Maximize2,
//   Minimize2,
//   Search,
//   Code,
//   Clipboard,
//   BookOpen,
//   Layers,
//   Zap,
//   Shield,
//   Star,
//   Heart,
//   Filter,
//   Sliders,
//   Box,
//   Square,
//   Circle,
//   CornerDownRight,
//   ArrowUpDown,
//   Move,
//   RotateCw,
//   Hash,
//   Ruler,
//   AlignJustify,
//   List,
//   Table,
//   Image,
//   Video,
//   Music,
//   FileText,
//   FolderOpen,
//   Download,
//   Upload,
//   RefreshCw,
//   Settings,
//   Wrench,
//   Compass,
//   Map,
//   Globe,
//   Clock,
//   Calendar,
//   User,
//   Users,
//   Award,
//   Trophy,
//   Target,
//   Flag,
//   Briefcase,
//   Building,
//   Home,
//   Mail,
//   Phone,
//   MapPin,
//   CreditCard,
//   ShoppingCart,
//   HeartHandshake,
//   Handshake,
//   Gift,
//   Cake,
//   PartyPopper,
//   Rocket,
//   Plane,
//   Car,
//   Train,
//   Bike,
//   Bus,
//   Ship,
//   Anchor,
//   Cloud,
//   Droplet,
//   Wind,
//   Snowflake,
//   SunMedium,
//   MoonStar,
//   Sunrise,
//   Sunset,
//   TreePine,
//   Flower,
//   Leaf,
//   Mountain,
//   Waves,
//   Flame,
//   Zap as ZapIcon,
//   Battery,
//   Wifi,
//   Bluetooth,
//   HardDrive,
//   Cpu,
//   Monitor,
//   Smartphone,
//   Tablet,
//   Watch,
//   Headphones,
//   Speaker,
//   Camera,
//   Video as VideoIcon,
//   Film,
//   Clapperboard,
//   Tv,
//   Radio,
//   Book,
//   Library,
//   GraduationCap,
//   School,
//   PenTool,
//   Pencil,
//   Eraser,
//   Brush,
//   Scissors,
//   Droplet as DropletIcon,
//   Feather,
//   Anchor as AnchorIcon,
//   Compass as CompassIcon,
//   Globe as GlobeIcon,
//   Map as MapIcon,
//   Clock as ClockIcon,
//   Calendar as CalendarIcon,
//   User as UserIcon,
//   Users as UsersIcon,
//   Award as AwardIcon,
//   Trophy as TrophyIcon,
//   Target as TargetIcon,
//   Flag as FlagIcon,
//   Briefcase as BriefcaseIcon,
//   Building as BuildingIcon,
//   Home as HomeIcon,
//   Mail as MailIcon,
//   Phone as PhoneIcon,
//   MapPin as MapPinIcon,
//   CreditCard as CreditCardIcon,
//   ShoppingCart as ShoppingCartIcon,
//   MousePointer
// } from 'lucide-react';

// // ============================================
// // TYPES
// // ============================================

// export interface DesignToken {
//   id: string;
//   category: 'typography' | 'colors' | 'spacing' | 'borders' | 'effects' | 'layout' | 'flexbox' | 'grid' | 'transform' | 'animation' | 'interactivity' | 'sizing' | 'background' | 'text' | 'list' | 'table' | 'position';
//   subcategory?: string;
//   label: string;
//   value: string;
//   className: string;
//   preview?: string | React.ReactNode;
//   description?: string;
//   usage?: string;
//   tags?: string[];
//   deprecated?: boolean;
//   version?: string;
// }

// export interface DesignCategory {
//   id: string;
//   label: string;
//   icon: React.ReactNode;
//   description: string;
//   subcategories?: {
//     id: string;
//     label: string;
//     icon?: React.ReactNode;
//   }[];
//   tokens: DesignToken[];
// }

// export interface HelpPopupProps {
//   isOpen: boolean;
//   onClose: () => void;
//   pageMetadata?: {
//     title?: string;
//     description?: string;
//     keywords?: string[];
//     author?: string;
//     version?: string;
//   };
//   className?: string;
//   defaultCategory?: string;
// }

// // ============================================
// // COMPLETE TAILWIND CLASSES DATABASE
// // ============================================

// const createDesignData = (): DesignCategory[] => {
//   return [
//     // ==========================================
//     // TYPOGRAPHY
//     // ==========================================
//     {
//       id: 'typography',
//       label: 'Typography',
//       icon: <Type className="w-5 h-5" />,
//       description: 'Complete text styling with font sizes, weights, transforms, and more',
//       subcategories: [
//         { id: 'font-size', label: 'Font Size' },
//         { id: 'font-weight', label: 'Font Weight' },
//         { id: 'text-transform', label: 'Text Transform' },
//         { id: 'text-decoration', label: 'Text Decoration' },
//         { id: 'text-align', label: 'Text Align' },
//         { id: 'line-height', label: 'Line Height' },
//         { id: 'letter-spacing', label: 'Letter Spacing' },
//         { id: 'font-family', label: 'Font Family' },
//       ],
//       tokens: [
//         // Font Sizes
//         { id: 'text-xs', category: 'typography', subcategory: 'font-size', label: 'Extra Small', value: 'text-xs', className: 'text-xs', preview: 'Extra Small Text', description: '12px / 0.75rem' },
//         { id: 'text-sm', category: 'typography', subcategory: 'font-size', label: 'Small', value: 'text-sm', className: 'text-sm', preview: 'Small Text', description: '14px / 0.875rem' },
//         { id: 'text-base', category: 'typography', subcategory: 'font-size', label: 'Base', value: 'text-base', className: 'text-base', preview: 'Base Text', description: '16px / 1rem' },
//         { id: 'text-lg', category: 'typography', subcategory: 'font-size', label: 'Large', value: 'text-lg', className: 'text-lg', preview: 'Large Text', description: '18px / 1.125rem' },
//         { id: 'text-xl', category: 'typography', subcategory: 'font-size', label: 'Extra Large', value: 'text-xl', className: 'text-xl', preview: 'XL Text', description: '20px / 1.25rem' },
//         { id: 'text-2xl', category: 'typography', subcategory: 'font-size', label: '2XL', value: 'text-2xl', className: 'text-2xl', preview: '2XL Text', description: '24px / 1.5rem' },
//         { id: 'text-3xl', category: 'typography', subcategory: 'font-size', label: '3XL', value: 'text-3xl', className: 'text-3xl', preview: '3XL Text', description: '30px / 1.875rem' },
//         { id: 'text-4xl', category: 'typography', subcategory: 'font-size', label: '4XL', value: 'text-4xl', className: 'text-4xl', preview: '4XL Text', description: '36px / 2.25rem' },
//         { id: 'text-5xl', category: 'typography', subcategory: 'font-size', label: '5XL', value: 'text-5xl', className: 'text-5xl', preview: '5XL Text', description: '48px / 3rem' },
//         { id: 'text-6xl', category: 'typography', subcategory: 'font-size', label: '6XL', value: 'text-6xl', className: 'text-6xl', preview: '6XL Text', description: '60px / 3.75rem' },
//         { id: 'text-7xl', category: 'typography', subcategory: 'font-size', label: '7XL', value: 'text-7xl', className: 'text-7xl', preview: '7XL Text', description: '72px / 4.5rem' },
//         { id: 'text-8xl', category: 'typography', subcategory: 'font-size', label: '8XL', value: 'text-8xl', className: 'text-8xl', preview: '8XL Text', description: '96px / 6rem' },
//         { id: 'text-9xl', category: 'typography', subcategory: 'font-size', label: '9XL', value: 'text-9xl', className: 'text-9xl', preview: '9XL Text', description: '128px / 8rem' },

//         // Font Weights
//         { id: 'font-thin', category: 'typography', subcategory: 'font-weight', label: 'Thin', value: 'font-thin', className: 'font-thin', preview: 'Thin Text', description: 'font-weight: 100' },
//         { id: 'font-extralight', category: 'typography', subcategory: 'font-weight', label: 'Extra Light', value: 'font-extralight', className: 'font-extralight', preview: 'Extra Light Text', description: 'font-weight: 200' },
//         { id: 'font-light', category: 'typography', subcategory: 'font-weight', label: 'Light', value: 'font-light', className: 'font-light', preview: 'Light Text', description: 'font-weight: 300' },
//         { id: 'font-normal', category: 'typography', subcategory: 'font-weight', label: 'Normal', value: 'font-normal', className: 'font-normal', preview: 'Normal Text', description: 'font-weight: 400' },
//         { id: 'font-medium', category: 'typography', subcategory: 'font-weight', label: 'Medium', value: 'font-medium', className: 'font-medium', preview: 'Medium Text', description: 'font-weight: 500' },
//         { id: 'font-semibold', category: 'typography', subcategory: 'font-weight', label: 'Semi Bold', value: 'font-semibold', className: 'font-semibold', preview: 'Semi Bold Text', description: 'font-weight: 600' },
//         { id: 'font-bold', category: 'typography', subcategory: 'font-weight', label: 'Bold', value: 'font-bold', className: 'font-bold', preview: 'Bold Text', description: 'font-weight: 700' },
//         { id: 'font-extrabold', category: 'typography', subcategory: 'font-weight', label: 'Extra Bold', value: 'font-extrabold', className: 'font-extrabold', preview: 'Extra Bold Text', description: 'font-weight: 800' },
//         { id: 'font-black', category: 'typography', subcategory: 'font-weight', label: 'Black', value: 'font-black', className: 'font-black', preview: 'Black Text', description: 'font-weight: 900' },

//         // Text Transform
//         { id: 'uppercase', category: 'typography', subcategory: 'text-transform', label: 'Uppercase', value: 'uppercase', className: 'uppercase', preview: 'UPPERCASE', description: 'text-transform: uppercase' },
//         { id: 'lowercase', category: 'typography', subcategory: 'text-transform', label: 'Lowercase', value: 'lowercase', className: 'lowercase', preview: 'lowercase', description: 'text-transform: lowercase' },
//         { id: 'capitalize', category: 'typography', subcategory: 'text-transform', label: 'Capitalize', value: 'capitalize', className: 'capitalize', preview: 'Capitalize Each Word', description: 'text-transform: capitalize' },
//         { id: 'normal-case', category: 'typography', subcategory: 'text-transform', label: 'Normal Case', value: 'normal-case', className: 'normal-case', preview: 'Normal Case', description: 'text-transform: none' },

//         // Text Decoration
//         { id: 'underline', category: 'typography', subcategory: 'text-decoration', label: 'Underline', value: 'underline', className: 'underline', preview: 'Underlined Text', description: 'text-decoration: underline' },
//         { id: 'line-through', category: 'typography', subcategory: 'text-decoration', label: 'Line Through', value: 'line-through', className: 'line-through', preview: 'Strikethrough Text', description: 'text-decoration: line-through' },
//         { id: 'no-underline', category: 'typography', subcategory: 'text-decoration', label: 'No Underline', value: 'no-underline', className: 'no-underline', preview: 'No Underline', description: 'text-decoration: none' },

//         // Text Align
//         { id: 'text-left', category: 'typography', subcategory: 'text-align', label: 'Left', value: 'text-left', className: 'text-left', preview: 'Left aligned text', description: 'text-align: left' },
//         { id: 'text-center', category: 'typography', subcategory: 'text-align', label: 'Center', value: 'text-center', className: 'text-center', preview: 'Centered text', description: 'text-align: center' },
//         { id: 'text-right', category: 'typography', subcategory: 'text-align', label: 'Right', value: 'text-right', className: 'text-right', preview: 'Right aligned text', description: 'text-align: right' },
//         { id: 'text-justify', category: 'typography', subcategory: 'text-align', label: 'Justify', value: 'text-justify', className: 'text-justify', preview: 'Justified text', description: 'text-align: justify' },

//         // Line Height
//         { id: 'leading-none', category: 'typography', subcategory: 'line-height', label: 'None', value: 'leading-none', className: 'leading-none', preview: 'Line Height None', description: 'line-height: 1' },
//         { id: 'leading-tight', category: 'typography', subcategory: 'line-height', label: 'Tight', value: 'leading-tight', className: 'leading-tight', preview: 'Line Height Tight', description: 'line-height: 1.25' },
//         { id: 'leading-snug', category: 'typography', subcategory: 'line-height', label: 'Snug', value: 'leading-snug', className: 'leading-snug', preview: 'Line Height Snug', description: 'line-height: 1.375' },
//         { id: 'leading-normal', category: 'typography', subcategory: 'line-height', label: 'Normal', value: 'leading-normal', className: 'leading-normal', preview: 'Line Height Normal', description: 'line-height: 1.5' },
//         { id: 'leading-relaxed', category: 'typography', subcategory: 'line-height', label: 'Relaxed', value: 'leading-relaxed', className: 'leading-relaxed', preview: 'Line Height Relaxed', description: 'line-height: 1.625' },
//         { id: 'leading-loose', category: 'typography', subcategory: 'line-height', label: 'Loose', value: 'leading-loose', className: 'leading-loose', preview: 'Line Height Loose', description: 'line-height: 2' },

//         // Letter Spacing
//         { id: 'tracking-tighter', category: 'typography', subcategory: 'letter-spacing', label: 'Tighter', value: 'tracking-tighter', className: 'tracking-tighter', preview: 'Tighter Spacing', description: 'letter-spacing: -0.05em' },
//         { id: 'tracking-tight', category: 'typography', subcategory: 'letter-spacing', label: 'Tight', value: 'tracking-tight', className: 'tracking-tight', preview: 'Tight Spacing', description: 'letter-spacing: -0.025em' },
//         { id: 'tracking-normal', category: 'typography', subcategory: 'letter-spacing', label: 'Normal', value: 'tracking-normal', className: 'tracking-normal', preview: 'Normal Spacing', description: 'letter-spacing: 0em' },
//         { id: 'tracking-wide', category: 'typography', subcategory: 'letter-spacing', label: 'Wide', value: 'tracking-wide', className: 'tracking-wide', preview: 'Wide Spacing', description: 'letter-spacing: 0.025em' },
//         { id: 'tracking-wider', category: 'typography', subcategory: 'letter-spacing', label: 'Wider', value: 'tracking-wider', className: 'tracking-wider', preview: 'Wider Spacing', description: 'letter-spacing: 0.05em' },
//         { id: 'tracking-widest', category: 'typography', subcategory: 'letter-spacing', label: 'Widest', value: 'tracking-widest', className: 'tracking-widest', preview: 'Widest Spacing', description: 'letter-spacing: 0.1em' },

//         // Font Family
//         { id: 'font-sans', category: 'typography', subcategory: 'font-family', label: 'Sans Serif', value: 'font-sans', className: 'font-sans', preview: 'Sans Serif', description: 'font-family: ui-sans-serif' },
//         { id: 'font-serif', category: 'typography', subcategory: 'font-family', label: 'Serif', value: 'font-serif', className: 'font-serif', preview: 'Serif', description: 'font-family: ui-serif' },
//         { id: 'font-mono', category: 'typography', subcategory: 'font-family', label: 'Monospace', value: 'font-mono', className: 'font-mono', preview: 'Monospace', description: 'font-family: ui-monospace' },
//       ]
//     },

//     // ==========================================
//     // COLORS
//     // ==========================================
//     {
//       id: 'colors',
//       label: 'Colors',
//       icon: <Palette className="w-5 h-5" />,
//       description: 'Complete color palette with backgrounds, text colors, and borders',
//       subcategories: [
//         { id: 'background', label: 'Background' },
//         { id: 'text-color', label: 'Text Color' },
//         { id: 'border-color', label: 'Border Color' },
//         { id: 'gradients', label: 'Gradients' },
//         { id: 'accent', label: 'Accent' },
//         { id: 'theme', label: 'Theme Colors' },
//       ],
//       tokens: [
//         // Background Colors - Slate
//         { id: 'bg-slate-50', category: 'colors', subcategory: 'background', label: 'Slate 50', value: 'bg-slate-50', className: 'bg-slate-50', preview: 'Slate 50', description: 'Background: #f8fafc' },
//         { id: 'bg-slate-100', category: 'colors', subcategory: 'background', label: 'Slate 100', value: 'bg-slate-100', className: 'bg-slate-100', preview: 'Slate 100', description: 'Background: #f1f5f9' },
//         { id: 'bg-slate-200', category: 'colors', subcategory: 'background', label: 'Slate 200', value: 'bg-slate-200', className: 'bg-slate-200', preview: 'Slate 200', description: 'Background: #e2e8f0' },
//         { id: 'bg-slate-300', category: 'colors', subcategory: 'background', label: 'Slate 300', value: 'bg-slate-300', className: 'bg-slate-300', preview: 'Slate 300', description: 'Background: #cbd5e1' },
//         { id: 'bg-slate-400', category: 'colors', subcategory: 'background', label: 'Slate 400', value: 'bg-slate-400', className: 'bg-slate-400', preview: 'Slate 400', description: 'Background: #94a3b8' },
//         { id: 'bg-slate-500', category: 'colors', subcategory: 'background', label: 'Slate 500', value: 'bg-slate-500', className: 'bg-slate-500', preview: 'Slate 500', description: 'Background: #64748b' },
//         { id: 'bg-slate-600', category: 'colors', subcategory: 'background', label: 'Slate 600', value: 'bg-slate-600', className: 'bg-slate-600', preview: 'Slate 600', description: 'Background: #475569' },
//         { id: 'bg-slate-700', category: 'colors', subcategory: 'background', label: 'Slate 700', value: 'bg-slate-700', className: 'bg-slate-700', preview: 'Slate 700', description: 'Background: #334155' },
//         { id: 'bg-slate-800', category: 'colors', subcategory: 'background', label: 'Slate 800', value: 'bg-slate-800', className: 'bg-slate-800', preview: 'Slate 800', description: 'Background: #1e293b' },
//         { id: 'bg-slate-900', category: 'colors', subcategory: 'background', label: 'Slate 900', value: 'bg-slate-900', className: 'bg-slate-900', preview: 'Slate 900', description: 'Background: #0f172a' },

//         // Background Colors - Gray
//         { id: 'bg-gray-50', category: 'colors', subcategory: 'background', label: 'Gray 50', value: 'bg-gray-50', className: 'bg-gray-50', preview: 'Gray 50', description: 'Background: #f9fafb' },
//         { id: 'bg-gray-100', category: 'colors', subcategory: 'background', label: 'Gray 100', value: 'bg-gray-100', className: 'bg-gray-100', preview: 'Gray 100', description: 'Background: #f3f4f6' },
//         { id: 'bg-gray-200', category: 'colors', subcategory: 'background', label: 'Gray 200', value: 'bg-gray-200', className: 'bg-gray-200', preview: 'Gray 200', description: 'Background: #e5e7eb' },
//         { id: 'bg-gray-300', category: 'colors', subcategory: 'background', label: 'Gray 300', value: 'bg-gray-300', className: 'bg-gray-300', preview: 'Gray 300', description: 'Background: #d1d5db' },
//         { id: 'bg-gray-400', category: 'colors', subcategory: 'background', label: 'Gray 400', value: 'bg-gray-400', className: 'bg-gray-400', preview: 'Gray 400', description: 'Background: #9ca3af' },
//         { id: 'bg-gray-500', category: 'colors', subcategory: 'background', label: 'Gray 500', value: 'bg-gray-500', className: 'bg-gray-500', preview: 'Gray 500', description: 'Background: #6b7280' },
//         { id: 'bg-gray-600', category: 'colors', subcategory: 'background', label: 'Gray 600', value: 'bg-gray-600', className: 'bg-gray-600', preview: 'Gray 600', description: 'Background: #4b5563' },
//         { id: 'bg-gray-700', category: 'colors', subcategory: 'background', label: 'Gray 700', value: 'bg-gray-700', className: 'bg-gray-700', preview: 'Gray 700', description: 'Background: #374151' },
//         { id: 'bg-gray-800', category: 'colors', subcategory: 'background', label: 'Gray 800', value: 'bg-gray-800', className: 'bg-gray-800', preview: 'Gray 800', description: 'Background: #1f2937' },
//         { id: 'bg-gray-900', category: 'colors', subcategory: 'background', label: 'Gray 900', value: 'bg-gray-900', className: 'bg-gray-900', preview: 'Gray 900', description: 'Background: #111827' },

//         // Background Colors - Zinc
//         { id: 'bg-zinc-50', category: 'colors', subcategory: 'background', label: 'Zinc 50', value: 'bg-zinc-50', className: 'bg-zinc-50', preview: 'Zinc 50', description: 'Background: #fafafa' },
//         { id: 'bg-zinc-100', category: 'colors', subcategory: 'background', label: 'Zinc 100', value: 'bg-zinc-100', className: 'bg-zinc-100', preview: 'Zinc 100', description: 'Background: #f4f4f5' },
//         { id: 'bg-zinc-200', category: 'colors', subcategory: 'background', label: 'Zinc 200', value: 'bg-zinc-200', className: 'bg-zinc-200', preview: 'Zinc 200', description: 'Background: #e4e4e7' },
//         { id: 'bg-zinc-300', category: 'colors', subcategory: 'background', label: 'Zinc 300', value: 'bg-zinc-300', className: 'bg-zinc-300', preview: 'Zinc 300', description: 'Background: #d4d4d8' },
//         { id: 'bg-zinc-400', category: 'colors', subcategory: 'background', label: 'Zinc 400', value: 'bg-zinc-400', className: 'bg-zinc-400', preview: 'Zinc 400', description: 'Background: #a1a1aa' },
//         { id: 'bg-zinc-500', category: 'colors', subcategory: 'background', label: 'Zinc 500', value: 'bg-zinc-500', className: 'bg-zinc-500', preview: 'Zinc 500', description: 'Background: #71717a' },
//         { id: 'bg-zinc-600', category: 'colors', subcategory: 'background', label: 'Zinc 600', value: 'bg-zinc-600', className: 'bg-zinc-600', preview: 'Zinc 600', description: 'Background: #52525b' },
//         { id: 'bg-zinc-700', category: 'colors', subcategory: 'background', label: 'Zinc 700', value: 'bg-zinc-700', className: 'bg-zinc-700', preview: 'Zinc 700', description: 'Background: #3f3f46' },
//         { id: 'bg-zinc-800', category: 'colors', subcategory: 'background', label: 'Zinc 800', value: 'bg-zinc-800', className: 'bg-zinc-800', preview: 'Zinc 800', description: 'Background: #27272a' },
//         { id: 'bg-zinc-900', category: 'colors', subcategory: 'background', label: 'Zinc 900', value: 'bg-zinc-900', className: 'bg-zinc-900', preview: 'Zinc 900', description: 'Background: #18181b' },

//         // Background Colors - Red
//         { id: 'bg-red-50', category: 'colors', subcategory: 'background', label: 'Red 50', value: 'bg-red-50', className: 'bg-red-50', preview: 'Red 50', description: 'Background: #fef2f2' },
//         { id: 'bg-red-100', category: 'colors', subcategory: 'background', label: 'Red 100', value: 'bg-red-100', className: 'bg-red-100', preview: 'Red 100', description: 'Background: #fee2e2' },
//         { id: 'bg-red-200', category: 'colors', subcategory: 'background', label: 'Red 200', value: 'bg-red-200', className: 'bg-red-200', preview: 'Red 200', description: 'Background: #fecaca' },
//         { id: 'bg-red-300', category: 'colors', subcategory: 'background', label: 'Red 300', value: 'bg-red-300', className: 'bg-red-300', preview: 'Red 300', description: 'Background: #fca5a5' },
//         { id: 'bg-red-400', category: 'colors', subcategory: 'background', label: 'Red 400', value: 'bg-red-400', className: 'bg-red-400', preview: 'Red 400', description: 'Background: #f87171' },
//         { id: 'bg-red-500', category: 'colors', subcategory: 'background', label: 'Red 500', value: 'bg-red-500', className: 'bg-red-500', preview: 'Red 500', description: 'Background: #ef4444' },
//         { id: 'bg-red-600', category: 'colors', subcategory: 'background', label: 'Red 600', value: 'bg-red-600', className: 'bg-red-600', preview: 'Red 600', description: 'Background: #dc2626' },
//         { id: 'bg-red-700', category: 'colors', subcategory: 'background', label: 'Red 700', value: 'bg-red-700', className: 'bg-red-700', preview: 'Red 700', description: 'Background: #b91c1c' },
//         { id: 'bg-red-800', category: 'colors', subcategory: 'background', label: 'Red 800', value: 'bg-red-800', className: 'bg-red-800', preview: 'Red 800', description: 'Background: #991b1b' },
//         { id: 'bg-red-900', category: 'colors', subcategory: 'background', label: 'Red 900', value: 'bg-red-900', className: 'bg-red-900', preview: 'Red 900', description: 'Background: #7f1d1d' },

//         // Background Colors - Orange
//         { id: 'bg-orange-50', category: 'colors', subcategory: 'background', label: 'Orange 50', value: 'bg-orange-50', className: 'bg-orange-50', preview: 'Orange 50', description: 'Background: #fff7ed' },
//         { id: 'bg-orange-100', category: 'colors', subcategory: 'background', label: 'Orange 100', value: 'bg-orange-100', className: 'bg-orange-100', preview: 'Orange 100', description: 'Background: #ffedd5' },
//         { id: 'bg-orange-200', category: 'colors', subcategory: 'background', label: 'Orange 200', value: 'bg-orange-200', className: 'bg-orange-200', preview: 'Orange 200', description: 'Background: #fed7aa' },
//         { id: 'bg-orange-300', category: 'colors', subcategory: 'background', label: 'Orange 300', value: 'bg-orange-300', className: 'bg-orange-300', preview: 'Orange 300', description: 'Background: #fdba74' },
//         { id: 'bg-orange-400', category: 'colors', subcategory: 'background', label: 'Orange 400', value: 'bg-orange-400', className: 'bg-orange-400', preview: 'Orange 400', description: 'Background: #fb923c' },
//         { id: 'bg-orange-500', category: 'colors', subcategory: 'background', label: 'Orange 500', value: 'bg-orange-500', className: 'bg-orange-500', preview: 'Orange 500', description: 'Background: #f97316' },
//         { id: 'bg-orange-600', category: 'colors', subcategory: 'background', label: 'Orange 600', value: 'bg-orange-600', className: 'bg-orange-600', preview: 'Orange 600', description: 'Background: #ea580c' },
//         { id: 'bg-orange-700', category: 'colors', subcategory: 'background', label: 'Orange 700', value: 'bg-orange-700', className: 'bg-orange-700', preview: 'Orange 700', description: 'Background: #c2410c' },
//         { id: 'bg-orange-800', category: 'colors', subcategory: 'background', label: 'Orange 800', value: 'bg-orange-800', className: 'bg-orange-800', preview: 'Orange 800', description: 'Background: #9a3412' },
//         { id: 'bg-orange-900', category: 'colors', subcategory: 'background', label: 'Orange 900', value: 'bg-orange-900', className: 'bg-orange-900', preview: 'Orange 900', description: 'Background: #7c2d12' },

//         // Background Colors - Yellow
//         { id: 'bg-yellow-50', category: 'colors', subcategory: 'background', label: 'Yellow 50', value: 'bg-yellow-50', className: 'bg-yellow-50', preview: 'Yellow 50', description: 'Background: #fefce8' },
//         { id: 'bg-yellow-100', category: 'colors', subcategory: 'background', label: 'Yellow 100', value: 'bg-yellow-100', className: 'bg-yellow-100', preview: 'Yellow 100', description: 'Background: #fef9c3' },
//         { id: 'bg-yellow-200', category: 'colors', subcategory: 'background', label: 'Yellow 200', value: 'bg-yellow-200', className: 'bg-yellow-200', preview: 'Yellow 200', description: 'Background: #fef08a' },
//         { id: 'bg-yellow-300', category: 'colors', subcategory: 'background', label: 'Yellow 300', value: 'bg-yellow-300', className: 'bg-yellow-300', preview: 'Yellow 300', description: 'Background: #fde047' },
//         { id: 'bg-yellow-400', category: 'colors', subcategory: 'background', label: 'Yellow 400', value: 'bg-yellow-400', className: 'bg-yellow-400', preview: 'Yellow 400', description: 'Background: #facc15' },
//         { id: 'bg-yellow-500', category: 'colors', subcategory: 'background', label: 'Yellow 500', value: 'bg-yellow-500', className: 'bg-yellow-500', preview: 'Yellow 500', description: 'Background: #eab308' },
//         { id: 'bg-yellow-600', category: 'colors', subcategory: 'background', label: 'Yellow 600', value: 'bg-yellow-600', className: 'bg-yellow-600', preview: 'Yellow 600', description: 'Background: #ca8a04' },
//         { id: 'bg-yellow-700', category: 'colors', subcategory: 'background', label: 'Yellow 700', value: 'bg-yellow-700', className: 'bg-yellow-700', preview: 'Yellow 700', description: 'Background: #a16207' },
//         { id: 'bg-yellow-800', category: 'colors', subcategory: 'background', label: 'Yellow 800', value: 'bg-yellow-800', className: 'bg-yellow-800', preview: 'Yellow 800', description: 'Background: #854d0e' },
//         { id: 'bg-yellow-900', category: 'colors', subcategory: 'background', label: 'Yellow 900', value: 'bg-yellow-900', className: 'bg-yellow-900', preview: 'Yellow 900', description: 'Background: #713f12' },

//         // Background Colors - Green
//         { id: 'bg-green-50', category: 'colors', subcategory: 'background', label: 'Green 50', value: 'bg-green-50', className: 'bg-green-50', preview: 'Green 50', description: 'Background: #f0fdf4' },
//         { id: 'bg-green-100', category: 'colors', subcategory: 'background', label: 'Green 100', value: 'bg-green-100', className: 'bg-green-100', preview: 'Green 100', description: 'Background: #dcfce7' },
//         { id: 'bg-green-200', category: 'colors', subcategory: 'background', label: 'Green 200', value: 'bg-green-200', className: 'bg-green-200', preview: 'Green 200', description: 'Background: #bbf7d0' },
//         { id: 'bg-green-300', category: 'colors', subcategory: 'background', label: 'Green 300', value: 'bg-green-300', className: 'bg-green-300', preview: 'Green 300', description: 'Background: #86efac' },
//         { id: 'bg-green-400', category: 'colors', subcategory: 'background', label: 'Green 400', value: 'bg-green-400', className: 'bg-green-400', preview: 'Green 400', description: 'Background: #4ade80' },
//         { id: 'bg-green-500', category: 'colors', subcategory: 'background', label: 'Green 500', value: 'bg-green-500', className: 'bg-green-500', preview: 'Green 500', description: 'Background: #22c55e' },
//         { id: 'bg-green-600', category: 'colors', subcategory: 'background', label: 'Green 600', value: 'bg-green-600', className: 'bg-green-600', preview: 'Green 600', description: 'Background: #16a34a' },
//         { id: 'bg-green-700', category: 'colors', subcategory: 'background', label: 'Green 700', value: 'bg-green-700', className: 'bg-green-700', preview: 'Green 700', description: 'Background: #15803d' },
//         { id: 'bg-green-800', category: 'colors', subcategory: 'background', label: 'Green 800', value: 'bg-green-800', className: 'bg-green-800', preview: 'Green 800', description: 'Background: #166534' },
//         { id: 'bg-green-900', category: 'colors', subcategory: 'background', label: 'Green 900', value: 'bg-green-900', className: 'bg-green-900', preview: 'Green 900', description: 'Background: #14532d' },

//         // Background Colors - Blue
//         { id: 'bg-blue-50', category: 'colors', subcategory: 'background', label: 'Blue 50', value: 'bg-blue-50', className: 'bg-blue-50', preview: 'Blue 50', description: 'Background: #eff6ff' },
//         { id: 'bg-blue-100', category: 'colors', subcategory: 'background', label: 'Blue 100', value: 'bg-blue-100', className: 'bg-blue-100', preview: 'Blue 100', description: 'Background: #dbeafe' },
//         { id: 'bg-blue-200', category: 'colors', subcategory: 'background', label: 'Blue 200', value: 'bg-blue-200', className: 'bg-blue-200', preview: 'Blue 200', description: 'Background: #bfdbfe' },
//         { id: 'bg-blue-300', category: 'colors', subcategory: 'background', label: 'Blue 300', value: 'bg-blue-300', className: 'bg-blue-300', preview: 'Blue 300', description: 'Background: #93c5fd' },
//         { id: 'bg-blue-400', category: 'colors', subcategory: 'background', label: 'Blue 400', value: 'bg-blue-400', className: 'bg-blue-400', preview: 'Blue 400', description: 'Background: #60a5fa' },
//         { id: 'bg-blue-500', category: 'colors', subcategory: 'background', label: 'Blue 500', value: 'bg-blue-500', className: 'bg-blue-500', preview: 'Blue 500', description: 'Background: #3b82f6' },
//         { id: 'bg-blue-600', category: 'colors', subcategory: 'background', label: 'Blue 600', value: 'bg-blue-600', className: 'bg-blue-600', preview: 'Blue 600', description: 'Background: #2563eb' },
//         { id: 'bg-blue-700', category: 'colors', subcategory: 'background', label: 'Blue 700', value: 'bg-blue-700', className: 'bg-blue-700', preview: 'Blue 700', description: 'Background: #1d4ed8' },
//         { id: 'bg-blue-800', category: 'colors', subcategory: 'background', label: 'Blue 800', value: 'bg-blue-800', className: 'bg-blue-800', preview: 'Blue 800', description: 'Background: #1e40af' },
//         { id: 'bg-blue-900', category: 'colors', subcategory: 'background', label: 'Blue 900', value: 'bg-blue-900', className: 'bg-blue-900', preview: 'Blue 900', description: 'Background: #1e3a8a' },

//         // Text Colors
//         { id: 'text-slate-500', category: 'colors', subcategory: 'text-color', label: 'Slate 500', value: 'text-slate-500', className: 'text-slate-500', preview: 'Slate 500 Text', description: 'Text Color: #64748b' },
//         { id: 'text-slate-600', category: 'colors', subcategory: 'text-color', label: 'Slate 600', value: 'text-slate-600', className: 'text-slate-600', preview: 'Slate 600 Text', description: 'Text Color: #475569' },
//         { id: 'text-slate-700', category: 'colors', subcategory: 'text-color', label: 'Slate 700', value: 'text-slate-700', className: 'text-slate-700', preview: 'Slate 700 Text', description: 'Text Color: #334155' },
//         { id: 'text-slate-800', category: 'colors', subcategory: 'text-color', label: 'Slate 800', value: 'text-slate-800', className: 'text-slate-800', preview: 'Slate 800 Text', description: 'Text Color: #1e293b' },
//         { id: 'text-slate-900', category: 'colors', subcategory: 'text-color', label: 'Slate 900', value: 'text-slate-900', className: 'text-slate-900', preview: 'Slate 900 Text', description: 'Text Color: #0f172a' },

//         // Primary Colors
//         { id: 'text-gray-500', category: 'colors', subcategory: 'text-color', label: 'Gray 500', value: 'text-gray-500', className: 'text-gray-500', preview: 'Gray 500 Text', description: 'Text Color: #6b7280' },
//         { id: 'text-gray-600', category: 'colors', subcategory: 'text-color', label: 'Gray 600', value: 'text-gray-600', className: 'text-gray-600', preview: 'Gray 600 Text', description: 'Text Color: #4b5563' },
//         { id: 'text-gray-700', category: 'colors', subcategory: 'text-color', label: 'Gray 700', value: 'text-gray-700', className: 'text-gray-700', preview: 'Gray 700 Text', description: 'Text Color: #374151' },
//         { id: 'text-gray-800', category: 'colors', subcategory: 'text-color', label: 'Gray 800', value: 'text-gray-800', className: 'text-gray-800', preview: 'Gray 800 Text', description: 'Text Color: #1f2937' },
//         { id: 'text-gray-900', category: 'colors', subcategory: 'text-color', label: 'Gray 900', value: 'text-gray-900', className: 'text-gray-900', preview: 'Gray 900 Text', description: 'Text Color: #111827' },

//         // Accent Colors
//         { id: 'text-red-500', category: 'colors', subcategory: 'text-color', label: 'Red 500', value: 'text-red-500', className: 'text-red-500', preview: 'Red 500 Text', description: 'Text Color: #ef4444' },
//         { id: 'text-orange-500', category: 'colors', subcategory: 'text-color', label: 'Orange 500', value: 'text-orange-500', className: 'text-orange-500', preview: 'Orange 500 Text', description: 'Text Color: #f97316' },
//         { id: 'text-yellow-500', category: 'colors', subcategory: 'text-color', label: 'Yellow 500', value: 'text-yellow-500', className: 'text-yellow-500', preview: 'Yellow 500 Text', description: 'Text Color: #eab308' },
//         { id: 'text-green-500', category: 'colors', subcategory: 'text-color', label: 'Green 500', value: 'text-green-500', className: 'text-green-500', preview: 'Green 500 Text', description: 'Text Color: #22c55e' },
//         { id: 'text-blue-500', category: 'colors', subcategory: 'text-color', label: 'Blue 500', value: 'text-blue-500', className: 'text-blue-500', preview: 'Blue 500 Text', description: 'Text Color: #3b82f6' },
//         { id: 'text-purple-500', category: 'colors', subcategory: 'text-color', label: 'Purple 500', value: 'text-purple-500', className: 'text-purple-500', preview: 'Purple 500 Text', description: 'Text Color: #a855f7' },
//         { id: 'text-pink-500', category: 'colors', subcategory: 'text-color', label: 'Pink 500', value: 'text-pink-500', className: 'text-pink-500', preview: 'Pink 500 Text', description: 'Text Color: #ec4899' },

//         // Gradients
//         { id: 'gradient-primary', category: 'colors', subcategory: 'gradients', label: 'Primary Gradient', value: 'bg-gradient-to-r from-blue-500 to-purple-600', className: 'bg-gradient-to-r from-blue-500 to-purple-600', preview: 'Primary Gradient', description: 'Blue to Purple' },
//         { id: 'gradient-secondary', category: 'colors', subcategory: 'gradients', label: 'Secondary Gradient', value: 'bg-gradient-to-r from-pink-500 to-orange-400', className: 'bg-gradient-to-r from-pink-500 to-orange-400', preview: 'Secondary Gradient', description: 'Pink to Orange' },
//         { id: 'gradient-success', category: 'colors', subcategory: 'gradients', label: 'Success Gradient', value: 'bg-gradient-to-r from-green-400 to-emerald-600', className: 'bg-gradient-to-r from-green-400 to-emerald-600', preview: 'Success Gradient', description: 'Green to Emerald' },
//         { id: 'gradient-danger', category: 'colors', subcategory: 'gradients', label: 'Danger Gradient', value: 'bg-gradient-to-r from-red-400 to-rose-600', className: 'bg-gradient-to-r from-red-400 to-rose-600', preview: 'Danger Gradient', description: 'Red to Rose' },
//         { id: 'gradient-warning', category: 'colors', subcategory: 'gradients', label: 'Warning Gradient', value: 'bg-gradient-to-r from-yellow-400 to-orange-500', className: 'bg-gradient-to-r from-yellow-400 to-orange-500', preview: 'Warning Gradient', description: 'Yellow to Orange' },
//         { id: 'gradient-info', category: 'colors', subcategory: 'gradients', label: 'Info Gradient', value: 'bg-gradient-to-r from-cyan-400 to-blue-500', className: 'bg-gradient-to-r from-cyan-400 to-blue-500', preview: 'Info Gradient', description: 'Cyan to Blue' },
//         { id: 'gradient-dark', category: 'colors', subcategory: 'gradients', label: 'Dark Gradient', value: 'bg-gradient-to-r from-gray-700 to-gray-900', className: 'bg-gradient-to-r from-gray-700 to-gray-900', preview: 'Dark Gradient', description: 'Gray to Dark' },
//       ]
//     },

//     // ==========================================
//     // SPACING
//     // ==========================================
//     {
//       id: 'spacing',
//       label: 'Spacing',
//       icon: <Ruler className="w-5 h-5" />,
//       description: 'Complete padding, margin, and gap utilities',
//       subcategories: [
//         { id: 'padding', label: 'Padding' },
//         { id: 'margin', label: 'Margin' },
//         { id: 'gap', label: 'Gap' },
//         { id: 'space', label: 'Space Between' },
//       ],
//       tokens: [
//         // Padding
//         { id: 'p-0', category: 'spacing', subcategory: 'padding', label: 'Padding 0', value: 'p-0', className: 'p-0', preview: 'P-0', description: 'padding: 0px' },
//         { id: 'p-0.5', category: 'spacing', subcategory: 'padding', label: 'Padding 0.5', value: 'p-0.5', className: 'p-0.5', preview: 'P-0.5', description: 'padding: 2px' },
//         { id: 'p-1', category: 'spacing', subcategory: 'padding', label: 'Padding 1', value: 'p-1', className: 'p-1', preview: 'P-1', description: 'padding: 4px' },
//         { id: 'p-1.5', category: 'spacing', subcategory: 'padding', label: 'Padding 1.5', value: 'p-1.5', className: 'p-1.5', preview: 'P-1.5', description: 'padding: 6px' },
//         { id: 'p-2', category: 'spacing', subcategory: 'padding', label: 'Padding 2', value: 'p-2', className: 'p-2', preview: 'P-2', description: 'padding: 8px' },
//         { id: 'p-2.5', category: 'spacing', subcategory: 'padding', label: 'Padding 2.5', value: 'p-2.5', className: 'p-2.5', preview: 'P-2.5', description: 'padding: 10px' },
//         { id: 'p-3', category: 'spacing', subcategory: 'padding', label: 'Padding 3', value: 'p-3', className: 'p-3', preview: 'P-3', description: 'padding: 12px' },
//         { id: 'p-3.5', category: 'spacing', subcategory: 'padding', label: 'Padding 3.5', value: 'p-3.5', className: 'p-3.5', preview: 'P-3.5', description: 'padding: 14px' },
//         { id: 'p-4', category: 'spacing', subcategory: 'padding', label: 'Padding 4', value: 'p-4', className: 'p-4', preview: 'P-4', description: 'padding: 16px' },
//         { id: 'p-5', category: 'spacing', subcategory: 'padding', label: 'Padding 5', value: 'p-5', className: 'p-5', preview: 'P-5', description: 'padding: 20px' },
//         { id: 'p-6', category: 'spacing', subcategory: 'padding', label: 'Padding 6', value: 'p-6', className: 'p-6', preview: 'P-6', description: 'padding: 24px' },
//         { id: 'p-7', category: 'spacing', subcategory: 'padding', label: 'Padding 7', value: 'p-7', className: 'p-7', preview: 'P-7', description: 'padding: 28px' },
//         { id: 'p-8', category: 'spacing', subcategory: 'padding', label: 'Padding 8', value: 'p-8', className: 'p-8', preview: 'P-8', description: 'padding: 32px' },
//         { id: 'p-9', category: 'spacing', subcategory: 'padding', label: 'Padding 9', value: 'p-9', className: 'p-9', preview: 'P-9', description: 'padding: 36px' },
//         { id: 'p-10', category: 'spacing', subcategory: 'padding', label: 'Padding 10', value: 'p-10', className: 'p-10', preview: 'P-10', description: 'padding: 40px' },
//         { id: 'p-11', category: 'spacing', subcategory: 'padding', label: 'Padding 11', value: 'p-11', className: 'p-11', preview: 'P-11', description: 'padding: 44px' },
//         { id: 'p-12', category: 'spacing', subcategory: 'padding', label: 'Padding 12', value: 'p-12', className: 'p-12', preview: 'P-12', description: 'padding: 48px' },
//         { id: 'p-14', category: 'spacing', subcategory: 'padding', label: 'Padding 14', value: 'p-14', className: 'p-14', preview: 'P-14', description: 'padding: 56px' },
//         { id: 'p-16', category: 'spacing', subcategory: 'padding', label: 'Padding 16', value: 'p-16', className: 'p-16', preview: 'P-16', description: 'padding: 64px' },

//         // Padding - Individual Sides
//         { id: 'px-4', category: 'spacing', subcategory: 'padding', label: 'Padding X 4', value: 'px-4', className: 'px-4', preview: 'PX-4', description: 'padding-left: 16px; padding-right: 16px' },
//         { id: 'py-4', category: 'spacing', subcategory: 'padding', label: 'Padding Y 4', value: 'py-4', className: 'py-4', preview: 'PY-4', description: 'padding-top: 16px; padding-bottom: 16px' },
//         { id: 'pt-4', category: 'spacing', subcategory: 'padding', label: 'Padding Top 4', value: 'pt-4', className: 'pt-4', preview: 'PT-4', description: 'padding-top: 16px' },
//         { id: 'pr-4', category: 'spacing', subcategory: 'padding', label: 'Padding Right 4', value: 'pr-4', className: 'pr-4', preview: 'PR-4', description: 'padding-right: 16px' },
//         { id: 'pb-4', category: 'spacing', subcategory: 'padding', label: 'Padding Bottom 4', value: 'pb-4', className: 'pb-4', preview: 'PB-4', description: 'padding-bottom: 16px' },
//         { id: 'pl-4', category: 'spacing', subcategory: 'padding', label: 'Padding Left 4', value: 'pl-4', className: 'pl-4', preview: 'PL-4', description: 'padding-left: 16px' },

//         // Margin
//         { id: 'm-0', category: 'spacing', subcategory: 'margin', label: 'Margin 0', value: 'm-0', className: 'm-0', preview: 'M-0', description: 'margin: 0px' },
//         { id: 'm-1', category: 'spacing', subcategory: 'margin', label: 'Margin 1', value: 'm-1', className: 'm-1', preview: 'M-1', description: 'margin: 4px' },
//         { id: 'm-2', category: 'spacing', subcategory: 'margin', label: 'Margin 2', value: 'm-2', className: 'm-2', preview: 'M-2', description: 'margin: 8px' },
//         { id: 'm-3', category: 'spacing', subcategory: 'margin', label: 'Margin 3', value: 'm-3', className: 'm-3', preview: 'M-3', description: 'margin: 12px' },
//         { id: 'm-4', category: 'spacing', subcategory: 'margin', label: 'Margin 4', value: 'm-4', className: 'm-4', preview: 'M-4', description: 'margin: 16px' },
//         { id: 'm-5', category: 'spacing', subcategory: 'margin', label: 'Margin 5', value: 'm-5', className: 'm-5', preview: 'M-5', description: 'margin: 20px' },
//         { id: 'm-6', category: 'spacing', subcategory: 'margin', label: 'Margin 6', value: 'm-6', className: 'm-6', preview: 'M-6', description: 'margin: 24px' },
//         { id: 'm-8', category: 'spacing', subcategory: 'margin', label: 'Margin 8', value: 'm-8', className: 'm-8', preview: 'M-8', description: 'margin: 32px' },
//         { id: 'm-10', category: 'spacing', subcategory: 'margin', label: 'Margin 10', value: 'm-10', className: 'm-10', preview: 'M-10', description: 'margin: 40px' },
//         { id: 'm-12', category: 'spacing', subcategory: 'margin', label: 'Margin 12', value: 'm-12', className: 'm-12', preview: 'M-12', description: 'margin: 48px' },

//         // Margin - Individual Sides
//         { id: 'mx-auto', category: 'spacing', subcategory: 'margin', label: 'Margin X Auto', value: 'mx-auto', className: 'mx-auto', preview: 'MX Auto', description: 'margin-left: auto; margin-right: auto' },
//         { id: 'my-auto', category: 'spacing', subcategory: 'margin', label: 'Margin Y Auto', value: 'my-auto', className: 'my-auto', preview: 'MY Auto', description: 'margin-top: auto; margin-bottom: auto' },
//         { id: 'mt-4', category: 'spacing', subcategory: 'margin', label: 'Margin Top 4', value: 'mt-4', className: 'mt-4', preview: 'MT-4', description: 'margin-top: 16px' },
//         { id: 'mr-4', category: 'spacing', subcategory: 'margin', label: 'Margin Right 4', value: 'mr-4', className: 'mr-4', preview: 'MR-4', description: 'margin-right: 16px' },
//         { id: 'mb-4', category: 'spacing', subcategory: 'margin', label: 'Margin Bottom 4', value: 'mb-4', className: 'mb-4', preview: 'MB-4', description: 'margin-bottom: 16px' },
//         { id: 'ml-4', category: 'spacing', subcategory: 'margin', label: 'Margin Left 4', value: 'ml-4', className: 'ml-4', preview: 'ML-4', description: 'margin-left: 16px' },

//         // Gap
//         { id: 'gap-0', category: 'spacing', subcategory: 'gap', label: 'Gap 0', value: 'gap-0', className: 'gap-0', preview: 'Gap 0', description: 'gap: 0px' },
//         { id: 'gap-1', category: 'spacing', subcategory: 'gap', label: 'Gap 1', value: 'gap-1', className: 'gap-1', preview: 'Gap 1', description: 'gap: 4px' },
//         { id: 'gap-2', category: 'spacing', subcategory: 'gap', label: 'Gap 2', value: 'gap-2', className: 'gap-2', preview: 'Gap 2', description: 'gap: 8px' },
//         { id: 'gap-3', category: 'spacing', subcategory: 'gap', label: 'Gap 3', value: 'gap-3', className: 'gap-3', preview: 'Gap 3', description: 'gap: 12px' },
//         { id: 'gap-4', category: 'spacing', subcategory: 'gap', label: 'Gap 4', value: 'gap-4', className: 'gap-4', preview: 'Gap 4', description: 'gap: 16px' },
//         { id: 'gap-5', category: 'spacing', subcategory: 'gap', label: 'Gap 5', value: 'gap-5', className: 'gap-5', preview: 'Gap 5', description: 'gap: 20px' },
//         { id: 'gap-6', category: 'spacing', subcategory: 'gap', label: 'Gap 6', value: 'gap-6', className: 'gap-6', preview: 'Gap 6', description: 'gap: 24px' },
//         { id: 'gap-8', category: 'spacing', subcategory: 'gap', label: 'Gap 8', value: 'gap-8', className: 'gap-8', preview: 'Gap 8', description: 'gap: 32px' },
//         { id: 'gap-10', category: 'spacing', subcategory: 'gap', label: 'Gap 10', value: 'gap-10', className: 'gap-10', preview: 'Gap 10', description: 'gap: 40px' },
//         { id: 'gap-12', category: 'spacing', subcategory: 'gap', label: 'Gap 12', value: 'gap-12', className: 'gap-12', preview: 'Gap 12', description: 'gap: 48px' },

//         // Space Between
//         { id: 'space-x-2', category: 'spacing', subcategory: 'space', label: 'Space X 2', value: 'space-x-2', className: 'space-x-2', preview: 'Space X 2', description: 'margin-right: 8px between children' },
//         { id: 'space-x-4', category: 'spacing', subcategory: 'space', label: 'Space X 4', value: 'space-x-4', className: 'space-x-4', preview: 'Space X 4', description: 'margin-right: 16px between children' },
//         { id: 'space-y-2', category: 'spacing', subcategory: 'space', label: 'Space Y 2', value: 'space-y-2', className: 'space-y-2', preview: 'Space Y 2', description: 'margin-bottom: 8px between children' },
//         { id: 'space-y-4', category: 'spacing', subcategory: 'space', label: 'Space Y 4', value: 'space-y-4', className: 'space-y-4', preview: 'Space Y 4', description: 'margin-bottom: 16px between children' },
//       ]
//     },

//     // ==========================================
//     // BORDERS
//     // ==========================================
//     {
//       id: 'borders',
//       label: 'Borders',
//       icon: <Square className="w-5 h-5" />,
//       description: 'Complete border styling with radius, width, color, and style',
//       subcategories: [
//         { id: 'border-radius', label: 'Border Radius' },
//         { id: 'border-width', label: 'Border Width' },
//         { id: 'border-color', label: 'Border Color' },
//         { id: 'border-style', label: 'Border Style' },
//         { id: 'border-opacity', label: 'Border Opacity' },
//       ],
//       tokens: [
//         // Border Radius
//         { id: 'rounded-none', category: 'borders', subcategory: 'border-radius', label: 'Rounded None', value: 'rounded-none', className: 'rounded-none', preview: 'Rounded None', description: 'border-radius: 0px' },
//         { id: 'rounded-sm', category: 'borders', subcategory: 'border-radius', label: 'Rounded Small', value: 'rounded-sm', className: 'rounded-sm', preview: 'Rounded Small', description: 'border-radius: 2px' },
//         { id: 'rounded', category: 'borders', subcategory: 'border-radius', label: 'Rounded', value: 'rounded', className: 'rounded', preview: 'Rounded', description: 'border-radius: 4px' },
//         { id: 'rounded-md', category: 'borders', subcategory: 'border-radius', label: 'Rounded Medium', value: 'rounded-md', className: 'rounded-md', preview: 'Rounded Medium', description: 'border-radius: 6px' },
//         { id: 'rounded-lg', category: 'borders', subcategory: 'border-radius', label: 'Rounded Large', value: 'rounded-lg', className: 'rounded-lg', preview: 'Rounded Large', description: 'border-radius: 8px' },
//         { id: 'rounded-xl', category: 'borders', subcategory: 'border-radius', label: 'Rounded XL', value: 'rounded-xl', className: 'rounded-xl', preview: 'Rounded XL', description: 'border-radius: 12px' },
//         { id: 'rounded-2xl', category: 'borders', subcategory: 'border-radius', label: 'Rounded 2XL', value: 'rounded-2xl', className: 'rounded-2xl', preview: 'Rounded 2XL', description: 'border-radius: 16px' },
//         { id: 'rounded-3xl', category: 'borders', subcategory: 'border-radius', label: 'Rounded 3XL', value: 'rounded-3xl', className: 'rounded-3xl', preview: 'Rounded 3XL', description: 'border-radius: 24px' },
//         { id: 'rounded-full', category: 'borders', subcategory: 'border-radius', label: 'Rounded Full', value: 'rounded-full', className: 'rounded-full', preview: 'Rounded Full', description: 'border-radius: 9999px' },

//         // Border Radius - Individual Corners
//         { id: 'rounded-t-lg', category: 'borders', subcategory: 'border-radius', label: 'Rounded Top', value: 'rounded-t-lg', className: 'rounded-t-lg', preview: 'Rounded Top', description: 'border-top-radius: 8px' },
//         { id: 'rounded-r-lg', category: 'borders', subcategory: 'border-radius', label: 'Rounded Right', value: 'rounded-r-lg', className: 'rounded-r-lg', preview: 'Rounded Right', description: 'border-right-radius: 8px' },
//         { id: 'rounded-b-lg', category: 'borders', subcategory: 'border-radius', label: 'Rounded Bottom', value: 'rounded-b-lg', className: 'rounded-b-lg', preview: 'Rounded Bottom', description: 'border-bottom-radius: 8px' },
//         { id: 'rounded-l-lg', category: 'borders', subcategory: 'border-radius', label: 'Rounded Left', value: 'rounded-l-lg', className: 'rounded-l-lg', preview: 'Rounded Left', description: 'border-left-radius: 8px' },

//         // Border Width
//         { id: 'border-0', category: 'borders', subcategory: 'border-width', label: 'Border 0', value: 'border-0', className: 'border-0', preview: 'Border 0', description: 'border-width: 0px' },
//         { id: 'border', category: 'borders', subcategory: 'border-width', label: 'Border 1', value: 'border', className: 'border', preview: 'Border 1', description: 'border-width: 1px' },
//         { id: 'border-2', category: 'borders', subcategory: 'border-width', label: 'Border 2', value: 'border-2', className: 'border-2', preview: 'Border 2', description: 'border-width: 2px' },
//         { id: 'border-4', category: 'borders', subcategory: 'border-width', label: 'Border 4', value: 'border-4', className: 'border-4', preview: 'Border 4', description: 'border-width: 4px' },
//         { id: 'border-8', category: 'borders', subcategory: 'border-width', label: 'Border 8', value: 'border-8', className: 'border-8', preview: 'Border 8', description: 'border-width: 8px' },

//         // Border Color
//         { id: 'border-gray-200', category: 'borders', subcategory: 'border-color', label: 'Border Gray 200', value: 'border-gray-200', className: 'border-gray-200', preview: 'Gray 200 Border', description: 'border-color: #e5e7eb' },
//         { id: 'border-gray-300', category: 'borders', subcategory: 'border-color', label: 'Border Gray 300', value: 'border-gray-300', className: 'border-gray-300', preview: 'Gray 300 Border', description: 'border-color: #d1d5db' },
//         { id: 'border-gray-400', category: 'borders', subcategory: 'border-color', label: 'Border Gray 400', value: 'border-gray-400', className: 'border-gray-400', preview: 'Gray 400 Border', description: 'border-color: #9ca3af' },
//         { id: 'border-blue-500', category: 'borders', subcategory: 'border-color', label: 'Border Blue 500', value: 'border-blue-500', className: 'border-blue-500', preview: 'Blue 500 Border', description: 'border-color: #3b82f6' },
//         { id: 'border-red-500', category: 'borders', subcategory: 'border-color', label: 'Border Red 500', value: 'border-red-500', className: 'border-red-500', preview: 'Red 500 Border', description: 'border-color: #ef4444' },
//         { id: 'border-green-500', category: 'borders', subcategory: 'border-color', label: 'Border Green 500', value: 'border-green-500', className: 'border-green-500', preview: 'Green 500 Border', description: 'border-color: #22c55e' },
//         { id: 'border-yellow-500', category: 'borders', subcategory: 'border-color', label: 'Border Yellow 500', value: 'border-yellow-500', className: 'border-yellow-500', preview: 'Yellow 500 Border', description: 'border-color: #eab308' },
//         { id: 'border-purple-500', category: 'borders', subcategory: 'border-color', label: 'Border Purple 500', value: 'border-purple-500', className: 'border-purple-500', preview: 'Purple 500 Border', description: 'border-color: #a855f7' },

//         // Border Style
//         { id: 'border-solid', category: 'borders', subcategory: 'border-style', label: 'Solid Border', value: 'border-solid', className: 'border-solid', preview: 'Solid Border', description: 'border-style: solid' },
//         { id: 'border-dashed', category: 'borders', subcategory: 'border-style', label: 'Dashed Border', value: 'border-dashed', className: 'border-dashed', preview: 'Dashed Border', description: 'border-style: dashed' },
//         { id: 'border-dotted', category: 'borders', subcategory: 'border-style', label: 'Dotted Border', value: 'border-dotted', className: 'border-dotted', preview: 'Dotted Border', description: 'border-style: dotted' },
//         { id: 'border-double', category: 'borders', subcategory: 'border-style', label: 'Double Border', value: 'border-double', className: 'border-double', preview: 'Double Border', description: 'border-style: double' },
//         { id: 'border-hidden', category: 'borders', subcategory: 'border-style', label: 'Hidden Border', value: 'border-hidden', className: 'border-hidden', preview: 'Hidden Border', description: 'border-style: hidden' },
//         { id: 'border-none', category: 'borders', subcategory: 'border-style', label: 'No Border', value: 'border-none', className: 'border-none', preview: 'No Border', description: 'border-style: none' },
//       ]
//     },

//     // ==========================================
//     // EFFECTS
//     // ==========================================
//     {
//       id: 'effects',
//       label: 'Effects',
//       icon: <Sparkles className="w-5 h-5" />,
//       description: 'Box shadows, opacity, blur, and other visual effects',
//       subcategories: [
//         { id: 'shadow', label: 'Shadows' },
//         { id: 'opacity', label: 'Opacity' },
//         { id: 'blur', label: 'Blur' },
//         { id: 'backdrop', label: 'Backdrop Effects' },
//         { id: 'mix-blend', label: 'Mix Blend Modes' },
//       ],
//       tokens: [
//         // Shadows
//         { id: 'shadow-none', category: 'effects', subcategory: 'shadow', label: 'No Shadow', value: 'shadow-none', className: 'shadow-none', preview: 'No Shadow', description: 'box-shadow: none' },
//         { id: 'shadow-sm', category: 'effects', subcategory: 'shadow', label: 'Shadow Small', value: 'shadow-sm', className: 'shadow-sm', preview: 'Small Shadow', description: 'box-shadow: 0 1px 2px rgba(0,0,0,0.05)' },
//         { id: 'shadow', category: 'effects', subcategory: 'shadow', label: 'Shadow', value: 'shadow', className: 'shadow', preview: 'Shadow', description: 'box-shadow: 0 1px 3px rgba(0,0,0,0.1)' },
//         { id: 'shadow-md', category: 'effects', subcategory: 'shadow', label: 'Shadow Medium', value: 'shadow-md', className: 'shadow-md', preview: 'Medium Shadow', description: 'box-shadow: 0 4px 6px rgba(0,0,0,0.1)' },
//         { id: 'shadow-lg', category: 'effects', subcategory: 'shadow', label: 'Shadow Large', value: 'shadow-lg', className: 'shadow-lg', preview: 'Large Shadow', description: 'box-shadow: 0 10px 15px rgba(0,0,0,0.1)' },
//         { id: 'shadow-xl', category: 'effects', subcategory: 'shadow', label: 'Shadow XL', value: 'shadow-xl', className: 'shadow-xl', preview: 'XL Shadow', description: 'box-shadow: 0 20px 25px rgba(0,0,0,0.1)' },
//         { id: 'shadow-2xl', category: 'effects', subcategory: 'shadow', label: 'Shadow 2XL', value: 'shadow-2xl', className: 'shadow-2xl', preview: '2XL Shadow', description: 'box-shadow: 0 25px 50px rgba(0,0,0,0.25)' },
//         { id: 'shadow-inner', category: 'effects', subcategory: 'shadow', label: 'Inner Shadow', value: 'shadow-inner', className: 'shadow-inner', preview: 'Inner Shadow', description: 'box-shadow: inset 0 2px 4px rgba(0,0,0,0.05)' },
//         { id: 'shadow-blue-500/50', category: 'effects', subcategory: 'shadow', label: 'Colored Shadow', value: 'shadow-blue-500/50', className: 'shadow-blue-500/50', preview: 'Colored Shadow', description: 'box-shadow with blue color and 50% opacity' },
//         { id: 'shadow-1', category: 'effects', subcategory: 'shadow', label: 'Colored Shadow', value: 'shadow-1', className: 'shadow-1', preview: 'Colored Shadow', description: 'box-shadow with blue color and 50% opacity' },
//         { id: 'shadow-2', category: 'effects', subcategory: 'shadow', label: 'Colored Shadow', value: 'shadow-2', className: 'shadow-2', preview: 'Colored Shadow', description: 'box-shadow with blue color and 50% opacity' },
//         { id: 'shadow-3', category: 'effects', subcategory: 'shadow', label: 'Colored Shadow', value: 'shadow-3', className: 'shadow-3', preview: 'Colored Shadow', description: 'box-shadow with blue color and 50% opacity' },
//         { id: 'shadow-4', category: 'effects', subcategory: 'shadow', label: 'Colored Shadow', value: 'shadow-4', className: 'shadow-4', preview: 'Colored Shadow', description: 'box-shadow with blue color and 50% opacity' },
//         { id: 'shadow-5', category: 'effects', subcategory: 'shadow', label: 'Colored Shadow', value: 'shadow-5', className: 'shadow-5', preview: 'Colored Shadow', description: 'box-shadow with blue color and 50% opacity' },
//         { id: 'shadow-6', category: 'effects', subcategory: 'shadow', label: 'Colored Shadow', value: 'shadow-6', className: 'shadow-6', preview: 'Colored Shadow', description: 'box-shadow with blue color and 50% opacity' },
//         { id: 'shadow-7', category: 'effects', subcategory: 'shadow', label: 'Colored Shadow', value: 'shadow-7', className: 'shadow-7', preview: 'Colored Shadow', description: 'box-shadow with blue color and 50% opacity' },
//         { id: 'shadow-8', category: 'effects', subcategory: 'shadow', label: 'Colored Shadow', value: 'shadow-8', className: 'shadow-8', preview: 'Colored Shadow', description: 'box-shadow with blue color and 50% opacity' },
//         { id: 'shadow-9', category: 'effects', subcategory: 'shadow', label: 'Colored Shadow', value: 'shadow-9', className: 'shadow-9', preview: 'Colored Shadow', description: 'box-shadow with blue color and 50% opacity' },
//         { id: 'shadow-10', category: 'effects', subcategory: 'shadow', label: 'Colored Shadow', value: 'shadow-10', className: 'shadow-10', preview: 'Colored Shadow', description: 'box-shadow with blue color and 50% opacity' },
//         { id: 'shadow-11', category: 'effects', subcategory: 'shadow', label: 'Colored Shadow', value: 'shadow-11', className: 'shadow-11', preview: 'Colored Shadow', description: 'box-shadow with blue color and 50% opacity' },
//         { id: 'shadow-12', category: 'effects', subcategory: 'shadow', label: 'Colored Shadow', value: 'shadow-12', className: 'shadow-12', preview: 'Colored Shadow', description: 'box-shadow with blue color and 50% opacity' },
//         { id: 'shadow-13', category: 'effects', subcategory: 'shadow', label: 'Colored Shadow', value: 'shadow-13', className: 'shadow-13', preview: 'Colored Shadow', description: 'box-shadow with blue color and 50% opacity' },
//         { id: 'shadow-14', category: 'effects', subcategory: 'shadow', label: 'Colored Shadow', value: 'shadow-14', className: 'shadow-14', preview: 'Colored Shadow', description: 'box-shadow with blue color and 50% opacity' },
//         { id: 'shadow-15', category: 'effects', subcategory: 'shadow', label: 'Colored Shadow', value: 'shadow-15', className: 'shadow-15', preview: 'Colored Shadow', description: 'box-shadow with blue color and 50% opacity' },
//         // Opacity
//         { id: 'opacity-0', category: 'effects', subcategory: 'opacity', label: 'Opacity 0', value: 'opacity-0', className: 'opacity-0', preview: '0% Opacity', description: 'opacity: 0' },
//         { id: 'opacity-5', category: 'effects', subcategory: 'opacity', label: 'Opacity 5', value: 'opacity-5', className: 'opacity-5', preview: '5% Opacity', description: 'opacity: 0.05' },
//         { id: 'opacity-10', category: 'effects', subcategory: 'opacity', label: 'Opacity 10', value: 'opacity-10', className: 'opacity-10', preview: '10% Opacity', description: 'opacity: 0.1' },
//         { id: 'opacity-20', category: 'effects', subcategory: 'opacity', label: 'Opacity 20', value: 'opacity-20', className: 'opacity-20', preview: '20% Opacity', description: 'opacity: 0.2' },
//         { id: 'opacity-25', category: 'effects', subcategory: 'opacity', label: 'Opacity 25', value: 'opacity-25', className: 'opacity-25', preview: '25% Opacity', description: 'opacity: 0.25' },
//         { id: 'opacity-30', category: 'effects', subcategory: 'opacity', label: 'Opacity 30', value: 'opacity-30', className: 'opacity-30', preview: '30% Opacity', description: 'opacity: 0.3' },
//         { id: 'opacity-40', category: 'effects', subcategory: 'opacity', label: 'Opacity 40', value: 'opacity-40', className: 'opacity-40', preview: '40% Opacity', description: 'opacity: 0.4' },
//         { id: 'opacity-50', category: 'effects', subcategory: 'opacity', label: 'Opacity 50', value: 'opacity-50', className: 'opacity-50', preview: '50% Opacity', description: 'opacity: 0.5' },
//         { id: 'opacity-60', category: 'effects', subcategory: 'opacity', label: 'Opacity 60', value: 'opacity-60', className: 'opacity-60', preview: '60% Opacity', description: 'opacity: 0.6' },
//         { id: 'opacity-70', category: 'effects', subcategory: 'opacity', label: 'Opacity 70', value: 'opacity-70', className: 'opacity-70', preview: '70% Opacity', description: 'opacity: 0.7' },
//         { id: 'opacity-75', category: 'effects', subcategory: 'opacity', label: 'Opacity 75', value: 'opacity-75', className: 'opacity-75', preview: '75% Opacity', description: 'opacity: 0.75' },
//         { id: 'opacity-80', category: 'effects', subcategory: 'opacity', label: 'Opacity 80', value: 'opacity-80', className: 'opacity-80', preview: '80% Opacity', description: 'opacity: 0.8' },
//         { id: 'opacity-90', category: 'effects', subcategory: 'opacity', label: 'Opacity 90', value: 'opacity-90', className: 'opacity-90', preview: '90% Opacity', description: 'opacity: 0.9' },
//         { id: 'opacity-95', category: 'effects', subcategory: 'opacity', label: 'Opacity 95', value: 'opacity-95', className: 'opacity-95', preview: '95% Opacity', description: 'opacity: 0.95' },
//         { id: 'opacity-100', category: 'effects', subcategory: 'opacity', label: 'Opacity 100', value: 'opacity-100', className: 'opacity-100', preview: '100% Opacity', description: 'opacity: 1' },

//         // Blur
//         { id: 'blur-none', category: 'effects', subcategory: 'blur', label: 'Blur None', value: 'blur-none', className: 'blur-none', preview: 'No Blur', description: 'blur: none' },
//         { id: 'blur-sm', category: 'effects', subcategory: 'blur', label: 'Blur Small', value: 'blur-sm', className: 'blur-sm', preview: 'Small Blur', description: 'blur: 4px' },
//         { id: 'blur', category: 'effects', subcategory: 'blur', label: 'Blur', value: 'blur', className: 'blur', preview: 'Blur', description: 'blur: 8px' },
//         { id: 'blur-md', category: 'effects', subcategory: 'blur', label: 'Blur Medium', value: 'blur-md', className: 'blur-md', preview: 'Medium Blur', description: 'blur: 12px' },
//         { id: 'blur-lg', category: 'effects', subcategory: 'blur', label: 'Blur Large', value: 'blur-lg', className: 'blur-lg', preview: 'Large Blur', description: 'blur: 16px' },
//         { id: 'blur-xl', category: 'effects', subcategory: 'blur', label: 'Blur XL', value: 'blur-xl', className: 'blur-xl', preview: 'XL Blur', description: 'blur: 24px' },
//         { id: 'blur-2xl', category: 'effects', subcategory: 'blur', label: 'Blur 2XL', value: 'blur-2xl', className: 'blur-2xl', preview: '2XL Blur', description: 'blur: 40px' },
//         { id: 'blur-3xl', category: 'effects', subcategory: 'blur', label: 'Blur 3XL', value: 'blur-3xl', className: 'blur-3xl', preview: '3XL Blur', description: 'blur: 64px' },

//         // Backdrop Effects
//         { id: 'backdrop-blur-sm', category: 'effects', subcategory: 'backdrop', label: 'Backdrop Blur Small', value: 'backdrop-blur-sm', className: 'backdrop-blur-sm', preview: 'Backdrop Blur Small', description: 'backdrop-filter: blur(4px)' },
//         { id: 'backdrop-blur', category: 'effects', subcategory: 'backdrop', label: 'Backdrop Blur', value: 'backdrop-blur', className: 'backdrop-blur', preview: 'Backdrop Blur', description: 'backdrop-filter: blur(8px)' },
//         { id: 'backdrop-blur-md', category: 'effects', subcategory: 'backdrop', label: 'Backdrop Blur Medium', value: 'backdrop-blur-md', className: 'backdrop-blur-md', preview: 'Backdrop Blur Medium', description: 'backdrop-filter: blur(12px)' },
//         { id: 'backdrop-blur-lg', category: 'effects', subcategory: 'backdrop', label: 'Backdrop Blur Large', value: 'backdrop-blur-lg', className: 'backdrop-blur-lg', preview: 'Backdrop Blur Large', description: 'backdrop-filter: blur(16px)' },
//         { id: 'backdrop-blur-xl', category: 'effects', subcategory: 'backdrop', label: 'Backdrop Blur XL', value: 'backdrop-blur-xl', className: 'backdrop-blur-xl', preview: 'Backdrop Blur XL', description: 'backdrop-filter: blur(24px)' },

//         // Mix Blend Modes
//         { id: 'mix-blend-multiply', category: 'effects', subcategory: 'mix-blend', label: 'Mix Blend Multiply', value: 'mix-blend-multiply', className: 'mix-blend-multiply', preview: 'Multiply Blend', description: 'mix-blend-mode: multiply' },
//         { id: 'mix-blend-screen', category: 'effects', subcategory: 'mix-blend', label: 'Mix Blend Screen', value: 'mix-blend-screen', className: 'mix-blend-screen', preview: 'Screen Blend', description: 'mix-blend-mode: screen' },
//         { id: 'mix-blend-overlay', category: 'effects', subcategory: 'mix-blend', label: 'Mix Blend Overlay', value: 'mix-blend-overlay', className: 'mix-blend-overlay', preview: 'Overlay Blend', description: 'mix-blend-mode: overlay' },
//         { id: 'mix-blend-soft-light', category: 'effects', subcategory: 'mix-blend', label: 'Mix Blend Soft Light', value: 'mix-blend-soft-light', className: 'mix-blend-soft-light', preview: 'Soft Light Blend', description: 'mix-blend-mode: soft-light' },
//       ]
//     },

//     // ==========================================
//     // FLEXBOX & LAYOUT
//     // ==========================================
//     {
//       id: 'flexbox',
//       label: 'Flexbox',
//       icon: <AlignJustify className="w-5 h-5" />,
//       description: 'Complete flexbox utilities for layout',
//       subcategories: [
//         { id: 'flex-direction', label: 'Direction' },
//         { id: 'flex-wrap', label: 'Wrap' },
//         { id: 'justify-content', label: 'Justify Content' },
//         { id: 'align-items', label: 'Align Items' },
//         { id: 'align-content', label: 'Align Content' },
//         { id: 'flex-grow', label: 'Flex Grow' },
//         { id: 'flex-shrink', label: 'Flex Shrink' },
//       ],
//       tokens: [
//         // Display
//         { id: 'flex', category: 'flexbox', subcategory: 'flex-direction', label: 'Flex', value: 'flex', className: 'flex', preview: 'Flex Display', description: 'display: flex' },
//         { id: 'inline-flex', category: 'flexbox', subcategory: 'flex-direction', label: 'Inline Flex', value: 'inline-flex', className: 'inline-flex', preview: 'Inline Flex', description: 'display: inline-flex' },

//         // Flex Direction
//         { id: 'flex-row', category: 'flexbox', subcategory: 'flex-direction', label: 'Row', value: 'flex-row', className: 'flex-row', preview: 'Row Direction', description: 'flex-direction: row' },
//         { id: 'flex-row-reverse', category: 'flexbox', subcategory: 'flex-direction', label: 'Row Reverse', value: 'flex-row-reverse', className: 'flex-row-reverse', preview: 'Row Reverse', description: 'flex-direction: row-reverse' },
//         { id: 'flex-col', category: 'flexbox', subcategory: 'flex-direction', label: 'Column', value: 'flex-col', className: 'flex-col', preview: 'Column Direction', description: 'flex-direction: column' },
//         { id: 'flex-col-reverse', category: 'flexbox', subcategory: 'flex-direction', label: 'Column Reverse', value: 'flex-col-reverse', className: 'flex-col-reverse', preview: 'Column Reverse', description: 'flex-direction: column-reverse' },

//         // Flex Wrap
//         { id: 'flex-wrap', category: 'flexbox', subcategory: 'flex-wrap', label: 'Wrap', value: 'flex-wrap', className: 'flex-wrap', preview: 'Wrap', description: 'flex-wrap: wrap' },
//         { id: 'flex-wrap-reverse', category: 'flexbox', subcategory: 'flex-wrap', label: 'Wrap Reverse', value: 'flex-wrap-reverse', className: 'flex-wrap-reverse', preview: 'Wrap Reverse', description: 'flex-wrap: wrap-reverse' },
//         { id: 'flex-nowrap', category: 'flexbox', subcategory: 'flex-wrap', label: 'No Wrap', value: 'flex-nowrap', className: 'flex-nowrap', preview: 'No Wrap', description: 'flex-wrap: nowrap' },

//         // Justify Content
//         { id: 'justify-start', category: 'flexbox', subcategory: 'justify-content', label: 'Justify Start', value: 'justify-start', className: 'justify-start', preview: 'Justify Start', description: 'justify-content: flex-start' },
//         { id: 'justify-end', category: 'flexbox', subcategory: 'justify-content', label: 'Justify End', value: 'justify-end', className: 'justify-end', preview: 'Justify End', description: 'justify-content: flex-end' },
//         { id: 'justify-center', category: 'flexbox', subcategory: 'justify-content', label: 'Justify Center', value: 'justify-center', className: 'justify-center', preview: 'Justify Center', description: 'justify-content: center' },
//         { id: 'justify-between', category: 'flexbox', subcategory: 'justify-content', label: 'Justify Between', value: 'justify-between', className: 'justify-between', preview: 'Justify Between', description: 'justify-content: space-between' },
//         { id: 'justify-around', category: 'flexbox', subcategory: 'justify-content', label: 'Justify Around', value: 'justify-around', className: 'justify-around', preview: 'Justify Around', description: 'justify-content: space-around' },
//         { id: 'justify-evenly', category: 'flexbox', subcategory: 'justify-content', label: 'Justify Evenly', value: 'justify-evenly', className: 'justify-evenly', preview: 'Justify Evenly', description: 'justify-content: space-evenly' },

//         // Align Items
//         { id: 'items-start', category: 'flexbox', subcategory: 'align-items', label: 'Items Start', value: 'items-start', className: 'items-start', preview: 'Items Start', description: 'align-items: flex-start' },
//         { id: 'items-end', category: 'flexbox', subcategory: 'align-items', label: 'Items End', value: 'items-end', className: 'items-end', preview: 'Items End', description: 'align-items: flex-end' },
//         { id: 'items-center', category: 'flexbox', subcategory: 'align-items', label: 'Items Center', value: 'items-center', className: 'items-center', preview: 'Items Center', description: 'align-items: center' },
//         { id: 'items-baseline', category: 'flexbox', subcategory: 'align-items', label: 'Items Baseline', value: 'items-baseline', className: 'items-baseline', preview: 'Items Baseline', description: 'align-items: baseline' },
//         { id: 'items-stretch', category: 'flexbox', subcategory: 'align-items', label: 'Items Stretch', value: 'items-stretch', className: 'items-stretch', preview: 'Items Stretch', description: 'align-items: stretch' },

//         // Align Content
//         { id: 'content-start', category: 'flexbox', subcategory: 'align-content', label: 'Content Start', value: 'content-start', className: 'content-start', preview: 'Content Start', description: 'align-content: flex-start' },
//         { id: 'content-end', category: 'flexbox', subcategory: 'align-content', label: 'Content End', value: 'content-end', className: 'content-end', preview: 'Content End', description: 'align-content: flex-end' },
//         { id: 'content-center', category: 'flexbox', subcategory: 'align-content', label: 'Content Center', value: 'content-center', className: 'content-center', preview: 'Content Center', description: 'align-content: center' },
//         { id: 'content-between', category: 'flexbox', subcategory: 'align-content', label: 'Content Between', value: 'content-between', className: 'content-between', preview: 'Content Between', description: 'align-content: space-between' },
//         { id: 'content-around', category: 'flexbox', subcategory: 'align-content', label: 'Content Around', value: 'content-around', className: 'content-around', preview: 'Content Around', description: 'align-content: space-around' },
//         { id: 'content-stretch', category: 'flexbox', subcategory: 'align-content', label: 'Content Stretch', value: 'content-stretch', className: 'content-stretch', preview: 'Content Stretch', description: 'align-content: stretch' },

//         // Flex Grow
//         { id: 'flex-grow', category: 'flexbox', subcategory: 'flex-grow', label: 'Flex Grow', value: 'flex-grow', className: 'flex-grow', preview: 'Flex Grow', description: 'flex-grow: 1' },
//         { id: 'flex-grow-0', category: 'flexbox', subcategory: 'flex-grow', label: 'Flex Grow 0', value: 'flex-grow-0', className: 'flex-grow-0', preview: 'Flex Grow 0', description: 'flex-grow: 0' },

//         // Flex Shrink
//         { id: 'flex-shrink', category: 'flexbox', subcategory: 'flex-shrink', label: 'Flex Shrink', value: 'flex-shrink', className: 'flex-shrink', preview: 'Flex Shrink', description: 'flex-shrink: 1' },
//         { id: 'flex-shrink-0', category: 'flexbox', subcategory: 'flex-shrink', label: 'Flex Shrink 0', value: 'flex-shrink-0', className: 'flex-shrink-0', preview: 'Flex Shrink 0', description: 'flex-shrink: 0' },
//       ]
//     },

//     // ==========================================
//     // GRID
//     // ==========================================
//     {
//       id: 'grid',
//       label: 'Grid',
//       icon: <Grid className="w-5 h-5" />,
//       description: 'Complete CSS grid utilities',
//       subcategories: [
//         { id: 'grid-template', label: 'Grid Template' },
//         { id: 'grid-span', label: 'Grid Span' },
//         { id: 'grid-gap', label: 'Grid Gap' },
//         { id: 'grid-align', label: 'Grid Alignment' },
//       ],
//       tokens: [
//         // Grid Template Columns
//         { id: 'grid-cols-1', category: 'grid', subcategory: 'grid-template', label: '1 Column', value: 'grid-cols-1', className: 'grid-cols-1', preview: '1 Column', description: 'grid-template-columns: repeat(1, 1fr)' },
//         { id: 'grid-cols-2', category: 'grid', subcategory: 'grid-template', label: '2 Columns', value: 'grid-cols-2', className: 'grid-cols-2', preview: '2 Columns', description: 'grid-template-columns: repeat(2, 1fr)' },
//         { id: 'grid-cols-3', category: 'grid', subcategory: 'grid-template', label: '3 Columns', value: 'grid-cols-3', className: 'grid-cols-3', preview: '3 Columns', description: 'grid-template-columns: repeat(3, 1fr)' },
//         { id: 'grid-cols-4', category: 'grid', subcategory: 'grid-template', label: '4 Columns', value: 'grid-cols-4', className: 'grid-cols-4', preview: '4 Columns', description: 'grid-template-columns: repeat(4, 1fr)' },
//         { id: 'grid-cols-5', category: 'grid', subcategory: 'grid-template', label: '5 Columns', value: 'grid-cols-5', className: 'grid-cols-5', preview: '5 Columns', description: 'grid-template-columns: repeat(5, 1fr)' },
//         { id: 'grid-cols-6', category: 'grid', subcategory: 'grid-template', label: '6 Columns', value: 'grid-cols-6', className: 'grid-cols-6', preview: '6 Columns', description: 'grid-template-columns: repeat(6, 1fr)' },
//         { id: 'grid-cols-7', category: 'grid', subcategory: 'grid-template', label: '7 Columns', value: 'grid-cols-7', className: 'grid-cols-7', preview: '7 Columns', description: 'grid-template-columns: repeat(7, 1fr)' },
//         { id: 'grid-cols-8', category: 'grid', subcategory: 'grid-template', label: '8 Columns', value: 'grid-cols-8', className: 'grid-cols-8', preview: '8 Columns', description: 'grid-template-columns: repeat(8, 1fr)' },
//         { id: 'grid-cols-9', category: 'grid', subcategory: 'grid-template', label: '9 Columns', value: 'grid-cols-9', className: 'grid-cols-9', preview: '9 Columns', description: 'grid-template-columns: repeat(9, 1fr)' },
//         { id: 'grid-cols-10', category: 'grid', subcategory: 'grid-template', label: '10 Columns', value: 'grid-cols-10', className: 'grid-cols-10', preview: '10 Columns', description: 'grid-template-columns: repeat(10, 1fr)' },
//         { id: 'grid-cols-11', category: 'grid', subcategory: 'grid-template', label: '11 Columns', value: 'grid-cols-11', className: 'grid-cols-11', preview: '11 Columns', description: 'grid-template-columns: repeat(11, 1fr)' },
//         { id: 'grid-cols-12', category: 'grid', subcategory: 'grid-template', label: '12 Columns', value: 'grid-cols-12', className: 'grid-cols-12', preview: '12 Columns', description: 'grid-template-columns: repeat(12, 1fr)' },

//         // Grid Template Rows
//         { id: 'grid-rows-1', category: 'grid', subcategory: 'grid-template', label: '1 Row', value: 'grid-rows-1', className: 'grid-rows-1', preview: '1 Row', description: 'grid-template-rows: repeat(1, 1fr)' },
//         { id: 'grid-rows-2', category: 'grid', subcategory: 'grid-template', label: '2 Rows', value: 'grid-rows-2', className: 'grid-rows-2', preview: '2 Rows', description: 'grid-template-rows: repeat(2, 1fr)' },
//         { id: 'grid-rows-3', category: 'grid', subcategory: 'grid-template', label: '3 Rows', value: 'grid-rows-3', className: 'grid-rows-3', preview: '3 Rows', description: 'grid-template-rows: repeat(3, 1fr)' },
//         { id: 'grid-rows-4', category: 'grid', subcategory: 'grid-template', label: '4 Rows', value: 'grid-rows-4', className: 'grid-rows-4', preview: '4 Rows', description: 'grid-template-rows: repeat(4, 1fr)' },

//         // Grid Span
//         { id: 'col-span-1', category: 'grid', subcategory: 'grid-span', label: 'Span 1 Column', value: 'col-span-1', className: 'col-span-1', preview: 'Span 1', description: 'grid-column: span 1' },
//         { id: 'col-span-2', category: 'grid', subcategory: 'grid-span', label: 'Span 2 Columns', value: 'col-span-2', className: 'col-span-2', preview: 'Span 2', description: 'grid-column: span 2' },
//         { id: 'col-span-3', category: 'grid', subcategory: 'grid-span', label: 'Span 3 Columns', value: 'col-span-3', className: 'col-span-3', preview: 'Span 3', description: 'grid-column: span 3' },
//         { id: 'col-span-4', category: 'grid', subcategory: 'grid-span', label: 'Span 4 Columns', value: 'col-span-4', className: 'col-span-4', preview: 'Span 4', description: 'grid-column: span 4' },
//         { id: 'col-span-5', category: 'grid', subcategory: 'grid-span', label: 'Span 5 Columns', value: 'col-span-5', className: 'col-span-5', preview: 'Span 5', description: 'grid-column: span 5' },
//         { id: 'col-span-6', category: 'grid', subcategory: 'grid-span', label: 'Span 6 Columns', value: 'col-span-6', className: 'col-span-6', preview: 'Span 6', description: 'grid-column: span 6' },
//         { id: 'col-span-7', category: 'grid', subcategory: 'grid-span', label: 'Span 7 Columns', value: 'col-span-7', className: 'col-span-7', preview: 'Span 7', description: 'grid-column: span 7' },
//         { id: 'col-span-8', category: 'grid', subcategory: 'grid-span', label: 'Span 8 Columns', value: 'col-span-8', className: 'col-span-8', preview: 'Span 8', description: 'grid-column: span 8' },
//         { id: 'col-span-9', category: 'grid', subcategory: 'grid-span', label: 'Span 9 Columns', value: 'col-span-9', className: 'col-span-9', preview: 'Span 9', description: 'grid-column: span 9' },
//         { id: 'col-span-10', category: 'grid', subcategory: 'grid-span', label: 'Span 10 Columns', value: 'col-span-10', className: 'col-span-10', preview: 'Span 10', description: 'grid-column: span 10' },
//         { id: 'col-span-11', category: 'grid', subcategory: 'grid-span', label: 'Span 11 Columns', value: 'col-span-11', className: 'col-span-11', preview: 'Span 11', description: 'grid-column: span 11' },
//         { id: 'col-span-12', category: 'grid', subcategory: 'grid-span', label: 'Span 12 Columns', value: 'col-span-12', className: 'col-span-12', preview: 'Span 12', description: 'grid-column: span 12' },

//         // Row Span
//         { id: 'row-span-1', category: 'grid', subcategory: 'grid-span', label: 'Span 1 Row', value: 'row-span-1', className: 'row-span-1', preview: 'Span 1 Row', description: 'grid-row: span 1' },
//         { id: 'row-span-2', category: 'grid', subcategory: 'grid-span', label: 'Span 2 Rows', value: 'row-span-2', className: 'row-span-2', preview: 'Span 2 Rows', description: 'grid-row: span 2' },
//         { id: 'row-span-3', category: 'grid', subcategory: 'grid-span', label: 'Span 3 Rows', value: 'row-span-3', className: 'row-span-3', preview: 'Span 3 Rows', description: 'grid-row: span 3' },

//         // Grid Gap
//         { id: 'gap-4', category: 'grid', subcategory: 'grid-gap', label: 'Grid Gap 4', value: 'gap-4', className: 'gap-4', preview: 'Gap 4', description: 'gap: 16px' },
//         { id: 'gap-x-4', category: 'grid', subcategory: 'grid-gap', label: 'Column Gap 4', value: 'gap-x-4', className: 'gap-x-4', preview: 'Column Gap 4', description: 'column-gap: 16px' },
//         { id: 'gap-y-4', category: 'grid', subcategory: 'grid-gap', label: 'Row Gap 4', value: 'gap-y-4', className: 'gap-y-4', preview: 'Row Gap 4', description: 'row-gap: 16px' },

//         // Grid Alignment
//         { id: 'justify-items-start', category: 'grid', subcategory: 'grid-align', label: 'Justify Items Start', value: 'justify-items-start', className: 'justify-items-start', preview: 'Justify Items Start', description: 'justify-items: start' },
//         { id: 'justify-items-end', category: 'grid', subcategory: 'grid-align', label: 'Justify Items End', value: 'justify-items-end', className: 'justify-items-end', preview: 'Justify Items End', description: 'justify-items: end' },
//         { id: 'justify-items-center', category: 'grid', subcategory: 'grid-align', label: 'Justify Items Center', value: 'justify-items-center', className: 'justify-items-center', preview: 'Justify Items Center', description: 'justify-items: center' },
//         { id: 'justify-items-stretch', category: 'grid', subcategory: 'grid-align', label: 'Justify Items Stretch', value: 'justify-items-stretch', className: 'justify-items-stretch', preview: 'Justify Items Stretch', description: 'justify-items: stretch' },
//         { id: 'align-items-start', category: 'grid', subcategory: 'grid-align', label: 'Align Items Start', value: 'align-items-start', className: 'align-items-start', preview: 'Align Items Start', description: 'align-items: start' },
//         { id: 'align-items-end', category: 'grid', subcategory: 'grid-align', label: 'Align Items End', value: 'align-items-end', className: 'align-items-end', preview: 'Align Items End', description: 'align-items: end' },
//         { id: 'align-items-center', category: 'grid', subcategory: 'grid-align', label: 'Align Items Center', value: 'align-items-center', className: 'align-items-center', preview: 'Align Items Center', description: 'align-items: center' },
//         { id: 'align-items-stretch', category: 'grid', subcategory: 'grid-align', label: 'Align Items Stretch', value: 'align-items-stretch', className: 'align-items-stretch', preview: 'Align Items Stretch', description: 'align-items: stretch' },
//       ]
//     },

//     // ==========================================
//     // SIZING & DIMENSIONS
//     // ==========================================
//     {
//       id: 'sizing',
//       label: 'Sizing',
//       icon: <Maximize2 className="w-5 h-5" />,
//       description: 'Width, height, min/max dimensions',
//       subcategories: [
//         { id: 'width', label: 'Width' },
//         { id: 'height', label: 'Height' },
//         { id: 'min-max', label: 'Min/Max Dimensions' },
//         { id: 'aspect-ratio', label: 'Aspect Ratio' },
//       ],
//       tokens: [
//         // Width
//         { id: 'w-0', category: 'sizing', subcategory: 'width', label: 'Width 0', value: 'w-0', className: 'w-0', preview: 'W-0', description: 'width: 0px' },
//         { id: 'w-1', category: 'sizing', subcategory: 'width', label: 'Width 1', value: 'w-1', className: 'w-1', preview: 'W-1', description: 'width: 4px' },
//         { id: 'w-2', category: 'sizing', subcategory: 'width', label: 'Width 2', value: 'w-2', className: 'w-2', preview: 'W-2', description: 'width: 8px' },
//         { id: 'w-4', category: 'sizing', subcategory: 'width', label: 'Width 4', value: 'w-4', className: 'w-4', preview: 'W-4', description: 'width: 16px' },
//         { id: 'w-8', category: 'sizing', subcategory: 'width', label: 'Width 8', value: 'w-8', className: 'w-8', preview: 'W-8', description: 'width: 32px' },
//         { id: 'w-12', category: 'sizing', subcategory: 'width', label: 'Width 12', value: 'w-12', className: 'w-12', preview: 'W-12', description: 'width: 48px' },
//         { id: 'w-16', category: 'sizing', subcategory: 'width', label: 'Width 16', value: 'w-16', className: 'w-16', preview: 'W-16', description: 'width: 64px' },
//         { id: 'w-24', category: 'sizing', subcategory: 'width', label: 'Width 24', value: 'w-24', className: 'w-24', preview: 'W-24', description: 'width: 96px' },
//         { id: 'w-32', category: 'sizing', subcategory: 'width', label: 'Width 32', value: 'w-32', className: 'w-32', preview: 'W-32', description: 'width: 128px' },
//         { id: 'w-48', category: 'sizing', subcategory: 'width', label: 'Width 48', value: 'w-48', className: 'w-48', preview: 'W-48', description: 'width: 192px' },
//         { id: 'w-64', category: 'sizing', subcategory: 'width', label: 'Width 64', value: 'w-64', className: 'w-64', preview: 'W-64', description: 'width: 256px' },
//         { id: 'w-96', category: 'sizing', subcategory: 'width', label: 'Width 96', value: 'w-96', className: 'w-96', preview: 'W-96', description: 'width: 384px' },
//         { id: 'w-auto', category: 'sizing', subcategory: 'width', label: 'Width Auto', value: 'w-auto', className: 'w-auto', preview: 'Width Auto', description: 'width: auto' },
//         { id: 'w-full', category: 'sizing', subcategory: 'width', label: 'Full Width', value: 'w-full', className: 'w-full', preview: 'Full Width', description: 'width: 100%' },
//         { id: 'w-screen', category: 'sizing', subcategory: 'width', label: 'Screen Width', value: 'w-screen', className: 'w-screen', preview: 'Screen Width', description: 'width: 100vw' },
//         { id: 'w-min', category: 'sizing', subcategory: 'width', label: 'Min Width', value: 'w-min', className: 'w-min', preview: 'Min Width', description: 'width: min-content' },
//         { id: 'w-max', category: 'sizing', subcategory: 'width', label: 'Max Width', value: 'w-max', className: 'w-max', preview: 'Max Width', description: 'width: max-content' },

//         // Height
//         { id: 'h-0', category: 'sizing', subcategory: 'height', label: 'Height 0', value: 'h-0', className: 'h-0', preview: 'H-0', description: 'height: 0px' },
//         { id: 'h-1', category: 'sizing', subcategory: 'height', label: 'Height 1', value: 'h-1', className: 'h-1', preview: 'H-1', description: 'height: 4px' },
//         { id: 'h-2', category: 'sizing', subcategory: 'height', label: 'Height 2', value: 'h-2', className: 'h-2', preview: 'H-2', description: 'height: 8px' },
//         { id: 'h-4', category: 'sizing', subcategory: 'height', label: 'Height 4', value: 'h-4', className: 'h-4', preview: 'H-4', description: 'height: 16px' },
//         { id: 'h-8', category: 'sizing', subcategory: 'height', label: 'Height 8', value: 'h-8', className: 'h-8', preview: 'H-8', description: 'height: 32px' },
//         { id: 'h-12', category: 'sizing', subcategory: 'height', label: 'Height 12', value: 'h-12', className: 'h-12', preview: 'H-12', description: 'height: 48px' },
//         { id: 'h-16', category: 'sizing', subcategory: 'height', label: 'Height 16', value: 'h-16', className: 'h-16', preview: 'H-16', description: 'height: 64px' },
//         { id: 'h-24', category: 'sizing', subcategory: 'height', label: 'Height 24', value: 'h-24', className: 'h-24', preview: 'H-24', description: 'height: 96px' },
//         { id: 'h-32', category: 'sizing', subcategory: 'height', label: 'Height 32', value: 'h-32', className: 'h-32', preview: 'H-32', description: 'height: 128px' },
//         { id: 'h-48', category: 'sizing', subcategory: 'height', label: 'Height 48', value: 'h-48', className: 'h-48', preview: 'H-48', description: 'height: 192px' },
//         { id: 'h-64', category: 'sizing', subcategory: 'height', label: 'Height 64', value: 'h-64', className: 'h-64', preview: 'H-64', description: 'height: 256px' },
//         { id: 'h-96', category: 'sizing', subcategory: 'height', label: 'Height 96', value: 'h-96', className: 'h-96', preview: 'H-96', description: 'height: 384px' },
//         { id: 'h-auto', category: 'sizing', subcategory: 'height', label: 'Height Auto', value: 'h-auto', className: 'h-auto', preview: 'Height Auto', description: 'height: auto' },
//         { id: 'h-full', category: 'sizing', subcategory: 'height', label: 'Full Height', value: 'h-full', className: 'h-full', preview: 'Full Height', description: 'height: 100%' },
//         { id: 'h-screen', category: 'sizing', subcategory: 'height', label: 'Screen Height', value: 'h-screen', className: 'h-screen', preview: 'Screen Height', description: 'height: 100vh' },

//         // Min/Max
//         { id: 'min-w-0', category: 'sizing', subcategory: 'min-max', label: 'Min Width 0', value: 'min-w-0', className: 'min-w-0', preview: 'Min Width 0', description: 'min-width: 0px' },
//         { id: 'min-w-full', category: 'sizing', subcategory: 'min-max', label: 'Min Width Full', value: 'min-w-full', className: 'min-w-full', preview: 'Min Width Full', description: 'min-width: 100%' },
//         { id: 'max-w-0', category: 'sizing', subcategory: 'min-max', label: 'Max Width 0', value: 'max-w-0', className: 'max-w-0', preview: 'Max Width 0', description: 'max-width: 0px' },
//         { id: 'max-w-none', category: 'sizing', subcategory: 'min-max', label: 'No Max Width', value: 'max-w-none', className: 'max-w-none', preview: 'No Max Width', description: 'max-width: none' },
//         { id: 'max-w-full', category: 'sizing', subcategory: 'min-max', label: 'Max Width Full', value: 'max-w-full', className: 'max-w-full', preview: 'Max Width Full', description: 'max-width: 100%' },
//         { id: 'max-w-screen-sm', category: 'sizing', subcategory: 'min-max', label: 'Max Width SM', value: 'max-w-screen-sm', className: 'max-w-screen-sm', preview: 'Max Width SM', description: 'max-width: 640px' },
//         { id: 'max-w-screen-md', category: 'sizing', subcategory: 'min-max', label: 'Max Width MD', value: 'max-w-screen-md', className: 'max-w-screen-md', preview: 'Max Width MD', description: 'max-width: 768px' },
//         { id: 'max-w-screen-lg', category: 'sizing', subcategory: 'min-max', label: 'Max Width LG', value: 'max-w-screen-lg', className: 'max-w-screen-lg', preview: 'Max Width LG', description: 'max-width: 1024px' },
//         { id: 'max-w-screen-xl', category: 'sizing', subcategory: 'min-max', label: 'Max Width XL', value: 'max-w-screen-xl', className: 'max-w-screen-xl', preview: 'Max Width XL', description: 'max-width: 1280px' },
//         { id: 'max-w-screen-2xl', category: 'sizing', subcategory: 'min-max', label: 'Max Width 2XL', value: 'max-w-screen-2xl', className: 'max-w-screen-2xl', preview: 'Max Width 2XL', description: 'max-width: 1536px' },

//         // Aspect Ratio
//         { id: 'aspect-auto', category: 'sizing', subcategory: 'aspect-ratio', label: 'Aspect Auto', value: 'aspect-auto', className: 'aspect-auto', preview: 'Aspect Auto', description: 'aspect-ratio: auto' },
//         { id: 'aspect-square', category: 'sizing', subcategory: 'aspect-ratio', label: 'Aspect Square', value: 'aspect-square', className: 'aspect-square', preview: 'Aspect Square', description: 'aspect-ratio: 1 / 1' },
//         { id: 'aspect-video', category: 'sizing', subcategory: 'aspect-ratio', label: 'Aspect Video', value: 'aspect-video', className: 'aspect-video', preview: 'Aspect Video', description: 'aspect-ratio: 16 / 9' },
//       ]
//     },

//     // ==========================================
//     // TRANSFORMS & TRANSLATIONS
//     // ==========================================
//     {
//       id: 'transform',
//       label: 'Transform',
//       icon: <RotateCw className="w-5 h-5" />,
//       description: 'Transform, translate, rotate, scale, and skew utilities',
//       subcategories: [
//         { id: 'translate', label: 'Translate' },
//         { id: 'rotate', label: 'Rotate' },
//         { id: 'scale', label: 'Scale' },
//         { id: 'skew', label: 'Skew' },
//         { id: 'transform-origin', label: 'Transform Origin' },
//       ],
//       tokens: [
//         // Transform
//         { id: 'transform', category: 'transform', subcategory: 'translate', label: 'Transform', value: 'transform', className: 'transform', preview: 'Transform', description: 'transform: none' },
//         { id: 'transform-gpu', category: 'transform', subcategory: 'translate', label: 'Transform GPU', value: 'transform-gpu', className: 'transform-gpu', preview: 'Transform GPU', description: 'transform: none (GPU accelerated)' },

//         // Translate
//         { id: 'translate-x-0', category: 'transform', subcategory: 'translate', label: 'Translate X 0', value: 'translate-x-0', className: 'translate-x-0', preview: 'TX 0', description: 'transform: translateX(0)' },
//         { id: 'translate-x-1', category: 'transform', subcategory: 'translate', label: 'Translate X 1', value: 'translate-x-1', className: 'translate-x-1', preview: 'TX 1', description: 'transform: translateX(4px)' },
//         { id: 'translate-x-2', category: 'transform', subcategory: 'translate', label: 'Translate X 2', value: 'translate-x-2', className: 'translate-x-2', preview: 'TX 2', description: 'transform: translateX(8px)' },
//         { id: 'translate-x-4', category: 'transform', subcategory: 'translate', label: 'Translate X 4', value: 'translate-x-4', className: 'translate-x-4', preview: 'TX 4', description: 'transform: translateX(16px)' },
//         { id: 'translate-x-8', category: 'transform', subcategory: 'translate', label: 'Translate X 8', value: 'translate-x-8', className: 'translate-x-8', preview: 'TX 8', description: 'transform: translateX(32px)' },
//         { id: 'translate-y-0', category: 'transform', subcategory: 'translate', label: 'Translate Y 0', value: 'translate-y-0', className: 'translate-y-0', preview: 'TY 0', description: 'transform: translateY(0)' },
//         { id: 'translate-y-1', category: 'transform', subcategory: 'translate', label: 'Translate Y 1', value: 'translate-y-1', className: 'translate-y-1', preview: 'TY 1', description: 'transform: translateY(4px)' },
//         { id: 'translate-y-2', category: 'transform', subcategory: 'translate', label: 'Translate Y 2', value: 'translate-y-2', className: 'translate-y-2', preview: 'TY 2', description: 'transform: translateY(8px)' },
//         { id: 'translate-y-4', category: 'transform', subcategory: 'translate', label: 'Translate Y 4', value: 'translate-y-4', className: 'translate-y-4', preview: 'TY 4', description: 'transform: translateY(16px)' },
//         { id: 'translate-y-8', category: 'transform', subcategory: 'translate', label: 'Translate Y 8', value: 'translate-y-8', className: 'translate-y-8', preview: 'TY 8', description: 'transform: translateY(32px)' },
//         { id: '-translate-x-1/2', category: 'transform', subcategory: 'translate', label: 'Translate X -50%', value: '-translate-x-1/2', className: '-translate-x-1/2', preview: 'TX -50%', description: 'transform: translateX(-50%)' },
//         { id: 'translate-x-1/2', category: 'transform', subcategory: 'translate', label: 'Translate X 50%', value: 'translate-x-1/2', className: 'translate-x-1/2', preview: 'TX 50%', description: 'transform: translateX(50%)' },
//         { id: '-translate-y-1/2', category: 'transform', subcategory: 'translate', label: 'Translate Y -50%', value: '-translate-y-1/2', className: '-translate-y-1/2', preview: 'TY -50%', description: 'transform: translateY(-50%)' },
//         { id: 'translate-y-1/2', category: 'transform', subcategory: 'translate', label: 'Translate Y 50%', value: 'translate-y-1/2', className: 'translate-y-1/2', preview: 'TY 50%', description: 'transform: translateY(50%)' },

//         // Rotate
//         { id: 'rotate-0', category: 'transform', subcategory: 'rotate', label: 'Rotate 0', value: 'rotate-0', className: 'rotate-0', preview: 'Rotate 0°', description: 'transform: rotate(0deg)' },
//         { id: 'rotate-1', category: 'transform', subcategory: 'rotate', label: 'Rotate 1', value: 'rotate-1', className: 'rotate-1', preview: 'Rotate 1°', description: 'transform: rotate(1deg)' },
//         { id: 'rotate-2', category: 'transform', subcategory: 'rotate', label: 'Rotate 2', value: 'rotate-2', className: 'rotate-2', preview: 'Rotate 2°', description: 'transform: rotate(2deg)' },
//         { id: 'rotate-3', category: 'transform', subcategory: 'rotate', label: 'Rotate 3', value: 'rotate-3', className: 'rotate-3', preview: 'Rotate 3°', description: 'transform: rotate(3deg)' },
//         { id: 'rotate-6', category: 'transform', subcategory: 'rotate', label: 'Rotate 6', value: 'rotate-6', className: 'rotate-6', preview: 'Rotate 6°', description: 'transform: rotate(6deg)' },
//         { id: 'rotate-12', category: 'transform', subcategory: 'rotate', label: 'Rotate 12', value: 'rotate-12', className: 'rotate-12', preview: 'Rotate 12°', description: 'transform: rotate(12deg)' },
//         { id: 'rotate-45', category: 'transform', subcategory: 'rotate', label: 'Rotate 45', value: 'rotate-45', className: 'rotate-45', preview: 'Rotate 45°', description: 'transform: rotate(45deg)' },
//         { id: 'rotate-90', category: 'transform', subcategory: 'rotate', label: 'Rotate 90', value: 'rotate-90', className: 'rotate-90', preview: 'Rotate 90°', description: 'transform: rotate(90deg)' },
//         { id: 'rotate-180', category: 'transform', subcategory: 'rotate', label: 'Rotate 180', value: 'rotate-180', className: 'rotate-180', preview: 'Rotate 180°', description: 'transform: rotate(180deg)' },

//         // Scale
//         { id: 'scale-0', category: 'transform', subcategory: 'scale', label: 'Scale 0', value: 'scale-0', className: 'scale-0', preview: 'Scale 0%', description: 'transform: scale(0)' },
//         { id: 'scale-50', category: 'transform', subcategory: 'scale', label: 'Scale 50', value: 'scale-50', className: 'scale-50', preview: 'Scale 50%', description: 'transform: scale(0.5)' },
//         { id: 'scale-75', category: 'transform', subcategory: 'scale', label: 'Scale 75', value: 'scale-75', className: 'scale-75', preview: 'Scale 75%', description: 'transform: scale(0.75)' },
//         { id: 'scale-90', category: 'transform', subcategory: 'scale', label: 'Scale 90', value: 'scale-90', className: 'scale-90', preview: 'Scale 90%', description: 'transform: scale(0.9)' },
//         { id: 'scale-95', category: 'transform', subcategory: 'scale', label: 'Scale 95', value: 'scale-95', className: 'scale-95', preview: 'Scale 95%', description: 'transform: scale(0.95)' },
//         { id: 'scale-100', category: 'transform', subcategory: 'scale', label: 'Scale 100', value: 'scale-100', className: 'scale-100', preview: 'Scale 100%', description: 'transform: scale(1)' },
//         { id: 'scale-105', category: 'transform', subcategory: 'scale', label: 'Scale 105', value: 'scale-105', className: 'scale-105', preview: 'Scale 105%', description: 'transform: scale(1.05)' },
//         { id: 'scale-110', category: 'transform', subcategory: 'scale', label: 'Scale 110', value: 'scale-110', className: 'scale-110', preview: 'Scale 110%', description: 'transform: scale(1.1)' },
//         { id: 'scale-125', category: 'transform', subcategory: 'scale', label: 'Scale 125', value: 'scale-125', className: 'scale-125', preview: 'Scale 125%', description: 'transform: scale(1.25)' },
//         { id: 'scale-150', category: 'transform', subcategory: 'scale', label: 'Scale 150', value: 'scale-150', className: 'scale-150', preview: 'Scale 150%', description: 'transform: scale(1.5)' },
//         { id: 'scale-x-50', category: 'transform', subcategory: 'scale', label: 'Scale X 50', value: 'scale-x-50', className: 'scale-x-50', preview: 'Scale X 50%', description: 'transform: scaleX(0.5)' },
//         { id: 'scale-y-50', category: 'transform', subcategory: 'scale', label: 'Scale Y 50', value: 'scale-y-50', className: 'scale-y-50', preview: 'Scale Y 50%', description: 'transform: scaleY(0.5)' },

//         // Skew
//         { id: 'skew-x-0', category: 'transform', subcategory: 'skew', label: 'Skew X 0', value: 'skew-x-0', className: 'skew-x-0', preview: 'Skew X 0°', description: 'transform: skewX(0deg)' },
//         { id: 'skew-x-3', category: 'transform', subcategory: 'skew', label: 'Skew X 3', value: 'skew-x-3', className: 'skew-x-3', preview: 'Skew X 3°', description: 'transform: skewX(3deg)' },
//         { id: 'skew-x-6', category: 'transform', subcategory: 'skew', label: 'Skew X 6', value: 'skew-x-6', className: 'skew-x-6', preview: 'Skew X 6°', description: 'transform: skewX(6deg)' },
//         { id: 'skew-x-12', category: 'transform', subcategory: 'skew', label: 'Skew X 12', value: 'skew-x-12', className: 'skew-x-12', preview: 'Skew X 12°', description: 'transform: skewX(12deg)' },
//         { id: 'skew-y-0', category: 'transform', subcategory: 'skew', label: 'Skew Y 0', value: 'skew-y-0', className: 'skew-y-0', preview: 'Skew Y 0°', description: 'transform: skewY(0deg)' },
//         { id: 'skew-y-3', category: 'transform', subcategory: 'skew', label: 'Skew Y 3', value: 'skew-y-3', className: 'skew-y-3', preview: 'Skew Y 3°', description: 'transform: skewY(3deg)' },
//         { id: 'skew-y-6', category: 'transform', subcategory: 'skew', label: 'Skew Y 6', value: 'skew-y-6', className: 'skew-y-6', preview: 'Skew Y 6°', description: 'transform: skewY(6deg)' },
//         { id: 'skew-y-12', category: 'transform', subcategory: 'skew', label: 'Skew Y 12', value: 'skew-y-12', className: 'skew-y-12', preview: 'Skew Y 12°', description: 'transform: skewY(12deg)' },

//         // Transform Origin
//         { id: 'origin-center', category: 'transform', subcategory: 'transform-origin', label: 'Origin Center', value: 'origin-center', className: 'origin-center', preview: 'Origin Center', description: 'transform-origin: center' },
//         { id: 'origin-top', category: 'transform', subcategory: 'transform-origin', label: 'Origin Top', value: 'origin-top', className: 'origin-top', preview: 'Origin Top', description: 'transform-origin: top' },
//         { id: 'origin-bottom', category: 'transform', subcategory: 'transform-origin', label: 'Origin Bottom', value: 'origin-bottom', className: 'origin-bottom', preview: 'Origin Bottom', description: 'transform-origin: bottom' },
//         { id: 'origin-left', category: 'transform', subcategory: 'transform-origin', label: 'Origin Left', value: 'origin-left', className: 'origin-left', preview: 'Origin Left', description: 'transform-origin: left' },
//         { id: 'origin-right', category: 'transform', subcategory: 'transform-origin', label: 'Origin Right', value: 'origin-right', className: 'origin-right', preview: 'Origin Right', description: 'transform-origin: right' },
//         { id: 'origin-top-left', category: 'transform', subcategory: 'transform-origin', label: 'Origin Top Left', value: 'origin-top-left', className: 'origin-top-left', preview: 'Origin Top Left', description: 'transform-origin: top left' },
//         { id: 'origin-top-right', category: 'transform', subcategory: 'transform-origin', label: 'Origin Top Right', value: 'origin-top-right', className: 'origin-top-right', preview: 'Origin Top Right', description: 'transform-origin: top right' },
//         { id: 'origin-bottom-left', category: 'transform', subcategory: 'transform-origin', label: 'Origin Bottom Left', value: 'origin-bottom-left', className: 'origin-bottom-left', preview: 'Origin Bottom Left', description: 'transform-origin: bottom left' },
//         { id: 'origin-bottom-right', category: 'transform', subcategory: 'transform-origin', label: 'Origin Bottom Right', value: 'origin-bottom-right', className: 'origin-bottom-right', preview: 'Origin Bottom Right', description: 'transform-origin: bottom right' },
//       ]
//     },

//     // ==========================================
//     // TRANSITIONS & ANIMATIONS
//     // ==========================================
//     {
//       id: 'animation',
//       label: 'Animation',
//       icon: <ZapIcon className="w-5 h-5" />,
//       description: 'Transitions, animations, and timing functions',
//       subcategories: [
//         { id: 'transition', label: 'Transition' },
//         { id: 'animation', label: 'Animation' },
//         { id: 'duration', label: 'Duration' },
//         { id: 'easing', label: 'Easing' },
//         { id: 'delay', label: 'Delay' },
//       ],
//       tokens: [
//         // Transition
//         { id: 'transition-none', category: 'animation', subcategory: 'transition', label: 'No Transition', value: 'transition-none', className: 'transition-none', preview: 'No Transition', description: 'transition: none' },
//         { id: 'transition-all', category: 'animation', subcategory: 'transition', label: 'Transition All', value: 'transition-all', className: 'transition-all', preview: 'Transition All', description: 'transition-property: all' },
//         { id: 'transition-colors', category: 'animation', subcategory: 'transition', label: 'Transition Colors', value: 'transition-colors', className: 'transition-colors', preview: 'Transition Colors', description: 'transition-property: color, background-color, border-color' },
//         { id: 'transition-opacity', category: 'animation', subcategory: 'transition', label: 'Transition Opacity', value: 'transition-opacity', className: 'transition-opacity', preview: 'Transition Opacity', description: 'transition-property: opacity' },
//         { id: 'transition-shadow', category: 'animation', subcategory: 'transition', label: 'Transition Shadow', value: 'transition-shadow', className: 'transition-shadow', preview: 'Transition Shadow', description: 'transition-property: box-shadow' },
//         { id: 'transition-transform', category: 'animation', subcategory: 'transition', label: 'Transition Transform', value: 'transition-transform', className: 'transition-transform', preview: 'Transition Transform', description: 'transition-property: transform' },

//         // Duration
//         { id: 'duration-75', category: 'animation', subcategory: 'duration', label: 'Duration 75', value: 'duration-75', className: 'duration-75', preview: '75ms', description: 'transition-duration: 75ms' },
//         { id: 'duration-100', category: 'animation', subcategory: 'duration', label: 'Duration 100', value: 'duration-100', className: 'duration-100', preview: '100ms', description: 'transition-duration: 100ms' },
//         { id: 'duration-150', category: 'animation', subcategory: 'duration', label: 'Duration 150', value: 'duration-150', className: 'duration-150', preview: '150ms', description: 'transition-duration: 150ms' },
//         { id: 'duration-200', category: 'animation', subcategory: 'duration', label: 'Duration 200', value: 'duration-200', className: 'duration-200', preview: '200ms', description: 'transition-duration: 200ms' },
//         { id: 'duration-300', category: 'animation', subcategory: 'duration', label: 'Duration 300', value: 'duration-300', className: 'duration-300', preview: '300ms', description: 'transition-duration: 300ms' },
//         { id: 'duration-500', category: 'animation', subcategory: 'duration', label: 'Duration 500', value: 'duration-500', className: 'duration-500', preview: '500ms', description: 'transition-duration: 500ms' },
//         { id: 'duration-700', category: 'animation', subcategory: 'duration', label: 'Duration 700', value: 'duration-700', className: 'duration-700', preview: '700ms', description: 'transition-duration: 700ms' },
//         { id: 'duration-1000', category: 'animation', subcategory: 'duration', label: 'Duration 1000', value: 'duration-1000', className: 'duration-1000', preview: '1000ms', description: 'transition-duration: 1000ms' },

//         // Easing
//         { id: 'ease-linear', category: 'animation', subcategory: 'easing', label: 'Linear', value: 'ease-linear', className: 'ease-linear', preview: 'Linear', description: 'transition-timing-function: linear' },
//         { id: 'ease-in', category: 'animation', subcategory: 'easing', label: 'Ease In', value: 'ease-in', className: 'ease-in', preview: 'Ease In', description: 'transition-timing-function: cubic-bezier(0.4, 0, 1, 1)' },
//         { id: 'ease-out', category: 'animation', subcategory: 'easing', label: 'Ease Out', value: 'ease-out', className: 'ease-out', preview: 'Ease Out', description: 'transition-timing-function: cubic-bezier(0, 0, 0.2, 1)' },
//         { id: 'ease-in-out', category: 'animation', subcategory: 'easing', label: 'Ease In Out', value: 'ease-in-out', className: 'ease-in-out', preview: 'Ease In Out', description: 'transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1)' },

//         // Delay
//         { id: 'delay-75', category: 'animation', subcategory: 'delay', label: 'Delay 75', value: 'delay-75', className: 'delay-75', preview: '75ms Delay', description: 'transition-delay: 75ms' },
//         { id: 'delay-100', category: 'animation', subcategory: 'delay', label: 'Delay 100', value: 'delay-100', className: 'delay-100', preview: '100ms Delay', description: 'transition-delay: 100ms' },
//         { id: 'delay-150', category: 'animation', subcategory: 'delay', label: 'Delay 150', value: 'delay-150', className: 'delay-150', preview: '150ms Delay', description: 'transition-delay: 150ms' },
//         { id: 'delay-200', category: 'animation', subcategory: 'delay', label: 'Delay 200', value: 'delay-200', className: 'delay-200', preview: '200ms Delay', description: 'transition-delay: 200ms' },
//         { id: 'delay-300', category: 'animation', subcategory: 'delay', label: 'Delay 300', value: 'delay-300', className: 'delay-300', preview: '300ms Delay', description: 'transition-delay: 300ms' },
//         { id: 'delay-500', category: 'animation', subcategory: 'delay', label: 'Delay 500', value: 'delay-500', className: 'delay-500', preview: '500ms Delay', description: 'transition-delay: 500ms' },
//         { id: 'delay-700', category: 'animation', subcategory: 'delay', label: 'Delay 700', value: 'delay-700', className: 'delay-700', preview: '700ms Delay', description: 'transition-delay: 700ms' },
//         { id: 'delay-1000', category: 'animation', subcategory: 'delay', label: 'Delay 1000', value: 'delay-1000', className: 'delay-1000', preview: '1000ms Delay', description: 'transition-delay: 1000ms' },
//       ]
//     },

//     // ==========================================
//     // INTERACTIVITY
//     // ==========================================
//     {
//       id: 'interactivity',
//       label: 'Interactivity',
//       icon: <MousePointer className="w-5 h-5" />,
//       description: 'Cursor, pointer events, user select, and more',
//       subcategories: [
//         { id: 'cursor', label: 'Cursor' },
//         { id: 'pointer-events', label: 'Pointer Events' },
//         { id: 'user-select', label: 'User Select' },
//         { id: 'resize', label: 'Resize' },
//         { id: 'scroll', label: 'Scroll Behavior' },
//       ],
//       tokens: [
//         // Cursor
//         { id: 'cursor-auto', category: 'interactivity', subcategory: 'cursor', label: 'Cursor Auto', value: 'cursor-auto', className: 'cursor-auto', preview: 'Auto', description: 'cursor: auto' },
//         { id: 'cursor-default', category: 'interactivity', subcategory: 'cursor', label: 'Cursor Default', value: 'cursor-default', className: 'cursor-default', preview: 'Default', description: 'cursor: default' },
//         { id: 'cursor-pointer', category: 'interactivity', subcategory: 'cursor', label: 'Cursor Pointer', value: 'cursor-pointer', className: 'cursor-pointer', preview: 'Pointer', description: 'cursor: pointer' },
//         { id: 'cursor-wait', category: 'interactivity', subcategory: 'cursor', label: 'Cursor Wait', value: 'cursor-wait', className: 'cursor-wait', preview: 'Wait', description: 'cursor: wait' },
//         { id: 'cursor-text', category: 'interactivity', subcategory: 'cursor', label: 'Cursor Text', value: 'cursor-text', className: 'cursor-text', preview: 'Text', description: 'cursor: text' },
//         { id: 'cursor-move', category: 'interactivity', subcategory: 'cursor', label: 'Cursor Move', value: 'cursor-move', className: 'cursor-move', preview: 'Move', description: 'cursor: move' },
//         { id: 'cursor-grab', category: 'interactivity', subcategory: 'cursor', label: 'Cursor Grab', value: 'cursor-grab', className: 'cursor-grab', preview: 'Grab', description: 'cursor: grab' },
//         { id: 'cursor-grabbing', category: 'interactivity', subcategory: 'cursor', label: 'Cursor Grabbing', value: 'cursor-grabbing', className: 'cursor-grabbing', preview: 'Grabbing', description: 'cursor: grabbing' },
//         { id: 'cursor-not-allowed', category: 'interactivity', subcategory: 'cursor', label: 'Cursor Not Allowed', value: 'cursor-not-allowed', className: 'cursor-not-allowed', preview: 'Not Allowed', description: 'cursor: not-allowed' },
//         { id: 'cursor-zoom-in', category: 'interactivity', subcategory: 'cursor', label: 'Cursor Zoom In', value: 'cursor-zoom-in', className: 'cursor-zoom-in', preview: 'Zoom In', description: 'cursor: zoom-in' },
//         { id: 'cursor-zoom-out', category: 'interactivity', subcategory: 'cursor', label: 'Cursor Zoom Out', value: 'cursor-zoom-out', className: 'cursor-zoom-out', preview: 'Zoom Out', description: 'cursor: zoom-out' },

//         // Pointer Events
//         { id: 'pointer-events-none', category: 'interactivity', subcategory: 'pointer-events', label: 'No Pointer Events', value: 'pointer-events-none', className: 'pointer-events-none', preview: 'No Events', description: 'pointer-events: none' },
//         { id: 'pointer-events-auto', category: 'interactivity', subcategory: 'pointer-events', label: 'Pointer Events Auto', value: 'pointer-events-auto', className: 'pointer-events-auto', preview: 'Auto Events', description: 'pointer-events: auto' },

//         // User Select
//         { id: 'select-none', category: 'interactivity', subcategory: 'user-select', label: 'Select None', value: 'select-none', className: 'select-none', preview: 'No Select', description: 'user-select: none' },
//         { id: 'select-text', category: 'interactivity', subcategory: 'user-select', label: 'Select Text', value: 'select-text', className: 'select-text', preview: 'Select Text', description: 'user-select: text' },
//         { id: 'select-all', category: 'interactivity', subcategory: 'user-select', label: 'Select All', value: 'select-all', className: 'select-all', preview: 'Select All', description: 'user-select: all' },
//         { id: 'select-auto', category: 'interactivity', subcategory: 'user-select', label: 'Select Auto', value: 'select-auto', className: 'select-auto', preview: 'Select Auto', description: 'user-select: auto' },

//         // Resize
//         { id: 'resize-none', category: 'interactivity', subcategory: 'resize', label: 'Resize None', value: 'resize-none', className: 'resize-none', preview: 'No Resize', description: 'resize: none' },
//         { id: 'resize', category: 'interactivity', subcategory: 'resize', label: 'Resize', value: 'resize', className: 'resize', preview: 'Resize', description: 'resize: both' },
//         { id: 'resize-x', category: 'interactivity', subcategory: 'resize', label: 'Resize X', value: 'resize-x', className: 'resize-x', preview: 'Resize X', description: 'resize: horizontal' },
//         { id: 'resize-y', category: 'interactivity', subcategory: 'resize', label: 'Resize Y', value: 'resize-y', className: 'resize-y', preview: 'Resize Y', description: 'resize: vertical' },

//         // Scroll Behavior
//         { id: 'scroll-auto', category: 'interactivity', subcategory: 'scroll', label: 'Scroll Auto', value: 'scroll-auto', className: 'scroll-auto', preview: 'Scroll Auto', description: 'scroll-behavior: auto' },
//         { id: 'scroll-smooth', category: 'interactivity', subcategory: 'scroll', label: 'Scroll Smooth', value: 'scroll-smooth', className: 'scroll-smooth', preview: 'Scroll Smooth', description: 'scroll-behavior: smooth' },
//         { id: 'scroll-m-4', category: 'interactivity', subcategory: 'scroll', label: 'Scroll Margin 4', value: 'scroll-m-4', className: 'scroll-m-4', preview: 'Scroll Margin 4', description: 'scroll-margin: 16px' },
//         { id: 'scroll-p-4', category: 'interactivity', subcategory: 'scroll', label: 'Scroll Padding 4', value: 'scroll-p-4', className: 'scroll-p-4', preview: 'Scroll Padding 4', description: 'scroll-padding: 16px' },
//       ]
//     },

//     // ==========================================
//     // POSITIONING
//     // ==========================================
//     {
//       id: 'position',
//       label: 'Position',
//       icon: <Move className="w-5 h-5" />,
//       description: 'Positioning, z-index, and stacking context',
//       subcategories: [
//         { id: 'position', label: 'Position' },
//         { id: 'inset', label: 'Inset (Top/Right/Bottom/Left)' },
//         { id: 'z-index', label: 'Z-Index' },
//         { id: 'float', label: 'Float' },
//         { id: 'clear', label: 'Clear' },
//       ],
//       tokens: [
//         // Position
//         { id: 'static', category: 'position', subcategory: 'position', label: 'Static', value: 'static', className: 'static', preview: 'Static', description: 'position: static' },
//         { id: 'fixed', category: 'position', subcategory: 'position', label: 'Fixed', value: 'fixed', className: 'fixed', preview: 'Fixed', description: 'position: fixed' },
//         { id: 'absolute', category: 'position', subcategory: 'position', label: 'Absolute', value: 'absolute', className: 'absolute', preview: 'Absolute', description: 'position: absolute' },
//         { id: 'relative', category: 'position', subcategory: 'position', label: 'Relative', value: 'relative', className: 'relative', preview: 'Relative', description: 'position: relative' },
//         { id: 'sticky', category: 'position', subcategory: 'position', label: 'Sticky', value: 'sticky', className: 'sticky', preview: 'Sticky', description: 'position: sticky' },

//         // Inset
//         { id: 'inset-0', category: 'position', subcategory: 'inset', label: 'Inset 0', value: 'inset-0', className: 'inset-0', preview: 'Inset 0', description: 'top: 0; right: 0; bottom: 0; left: 0' },
//         { id: 'inset-x-0', category: 'position', subcategory: 'inset', label: 'Inset X 0', value: 'inset-x-0', className: 'inset-x-0', preview: 'Inset X 0', description: 'left: 0; right: 0' },
//         { id: 'inset-y-0', category: 'position', subcategory: 'inset', label: 'Inset Y 0', value: 'inset-y-0', className: 'inset-y-0', preview: 'Inset Y 0', description: 'top: 0; bottom: 0' },
//         { id: 'top-0', category: 'position', subcategory: 'inset', label: 'Top 0', value: 'top-0', className: 'top-0', preview: 'Top 0', description: 'top: 0' },
//         { id: 'right-0', category: 'position', subcategory: 'inset', label: 'Right 0', value: 'right-0', className: 'right-0', preview: 'Right 0', description: 'right: 0' },
//         { id: 'bottom-0', category: 'position', subcategory: 'inset', label: 'Bottom 0', value: 'bottom-0', className: 'bottom-0', preview: 'Bottom 0', description: 'bottom: 0' },
//         { id: 'left-0', category: 'position', subcategory: 'inset', label: 'Left 0', value: 'left-0', className: 'left-0', preview: 'Left 0', description: 'left: 0' },
//         { id: 'top-4', category: 'position', subcategory: 'inset', label: 'Top 4', value: 'top-4', className: 'top-4', preview: 'Top 4', description: 'top: 16px' },
//         { id: 'right-4', category: 'position', subcategory: 'inset', label: 'Right 4', value: 'right-4', className: 'right-4', preview: 'Right 4', description: 'right: 16px' },
//         { id: 'bottom-4', category: 'position', subcategory: 'inset', label: 'Bottom 4', value: 'bottom-4', className: 'bottom-4', preview: 'Bottom 4', description: 'bottom: 16px' },
//         { id: 'left-4', category: 'position', subcategory: 'inset', label: 'Left 4', value: 'left-4', className: 'left-4', preview: 'Left 4', description: 'left: 16px' },

//         // Z-Index
//         { id: 'z-0', category: 'position', subcategory: 'z-index', label: 'Z-Index 0', value: 'z-0', className: 'z-0', preview: 'z-0', description: 'z-index: 0' },
//         { id: 'z-10', category: 'position', subcategory: 'z-index', label: 'Z-Index 10', value: 'z-10', className: 'z-10', preview: 'z-10', description: 'z-index: 10' },
//         { id: 'z-20', category: 'position', subcategory: 'z-index', label: 'Z-Index 20', value: 'z-20', className: 'z-20', preview: 'z-20', description: 'z-index: 20' },
//         { id: 'z-30', category: 'position', subcategory: 'z-index', label: 'Z-Index 30', value: 'z-30', className: 'z-30', preview: 'z-30', description: 'z-index: 30' },
//         { id: 'z-40', category: 'position', subcategory: 'z-index', label: 'Z-Index 40', value: 'z-40', className: 'z-40', preview: 'z-40', description: 'z-index: 40' },
//         { id: 'z-50', category: 'position', subcategory: 'z-index', label: 'Z-Index 50', value: 'z-50', className: 'z-50', preview: 'z-50', description: 'z-index: 50' },
//         { id: 'z-auto', category: 'position', subcategory: 'z-index', label: 'Z-Index Auto', value: 'z-auto', className: 'z-auto', preview: 'z-auto', description: 'z-index: auto' },

//         // Float
//         { id: 'float-left', category: 'position', subcategory: 'float', label: 'Float Left', value: 'float-left', className: 'float-left', preview: 'Float Left', description: 'float: left' },
//         { id: 'float-right', category: 'position', subcategory: 'float', label: 'Float Right', value: 'float-right', className: 'float-right', preview: 'Float Right', description: 'float: right' },
//         { id: 'float-none', category: 'position', subcategory: 'float', label: 'Float None', value: 'float-none', className: 'float-none', preview: 'Float None', description: 'float: none' },

//         // Clear
//         { id: 'clear-left', category: 'position', subcategory: 'clear', label: 'Clear Left', value: 'clear-left', className: 'clear-left', preview: 'Clear Left', description: 'clear: left' },
//         { id: 'clear-right', category: 'position', subcategory: 'clear', label: 'Clear Right', value: 'clear-right', className: 'clear-right', preview: 'Clear Right', description: 'clear: right' },
//         { id: 'clear-both', category: 'position', subcategory: 'clear', label: 'Clear Both', value: 'clear-both', className: 'clear-both', preview: 'Clear Both', description: 'clear: both' },
//         { id: 'clear-none', category: 'position', subcategory: 'clear', label: 'Clear None', value: 'clear-none', className: 'clear-none', preview: 'Clear None', description: 'clear: none' },
//       ]
//     }
//   ];
// };

// // ============================================
// // MAIN POPUP COMPONENT
// // ============================================

// const DesignHelperPopup: React.FC<HelpPopupProps> = ({
//   isOpen,
//   onClose,
//   pageMetadata = {},
//   className = '',
//   defaultCategory = 'typography'
// }) => {
//   const [activeTab, setActiveTab] = useState(defaultCategory);
//   const [searchQuery, setSearchQuery] = useState('');
//   const [copiedId, setCopiedId] = useState<string | null>(null);
//   const [isDarkMode, setIsDarkMode] = useState(false);
//   const [isExpanded, setIsExpanded] = useState(false);
//   const [favorites, setFavorites] = useState<string[]>([]);
//   const [activeSubcategory, setActiveSubcategory] = useState<string | null>(null);
//   const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
//   const popupRef = useRef<HTMLDivElement>(null);

//   const designData = useMemo(() => createDesignData(), []);

//   // Get current category
//   const currentCategory = useMemo(() => 
//     designData.find(c => c.id === activeTab),
//     [designData, activeTab]
//   );

//   // Filter tokens based on search and subcategory
//   const getFilteredTokens = useMemo(() => {
//     if (!currentCategory) return [];
    
//     let filtered = currentCategory.tokens;
    
//     if (searchQuery) {
//       filtered = filtered.filter(token =>
//         token.label.toLowerCase().includes(searchQuery.toLowerCase()) ||
//         token.value.toLowerCase().includes(searchQuery.toLowerCase()) ||
//         token.className.toLowerCase().includes(searchQuery.toLowerCase()) ||
//         token.description?.toLowerCase().includes(searchQuery.toLowerCase()) ||
//         token.tags?.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
//       );
//     }
    
//     if (activeSubcategory) {
//       filtered = filtered.filter(token => token.subcategory === activeSubcategory);
//     }
    
//     return filtered;
//   }, [currentCategory, searchQuery, activeSubcategory]);

//   // Copy to clipboard
//   const copyToClipboard = async (text: string, id: string) => {
//     try {
//       await navigator.clipboard.writeText(text);
//       setCopiedId(id);
//       setTimeout(() => setCopiedId(null), 2000);
//     } catch (err) {
//       console.error('Failed to copy:', err);
//     }
//   };

//   // Toggle favorite
//   const toggleFavorite = (id: string) => {
//     setFavorites(prev =>
//       prev.includes(id) ? prev.filter(f => f !== id) : [...prev, id]
//     );
//   };

//   // Get token ID
//   const getTokenId = (token: DesignToken) => `${token.category}-${token.id}`;

//   // Keyboard shortcuts
//   useEffect(() => {
//     const handleKeyDown = (e: KeyboardEvent) => {
//       if (e.key === 'Escape' && isOpen) onClose();
//       if (e.ctrlKey && e.key === 'f') {
//         e.preventDefault();
//         document.getElementById('search-input')?.focus();
//       }
//       if (e.ctrlKey && e.key === 'd') {
//         e.preventDefault();
//         setIsDarkMode(prev => !prev);
//       }
//       if (e.ctrlKey && e.key === 'g') {
//         e.preventDefault();
//         setViewMode(prev => prev === 'grid' ? 'list' : 'grid');
//       }
//     };

//     window.addEventListener('keydown', handleKeyDown);
//     return () => window.removeEventListener('keydown', handleKeyDown);
//   }, [isOpen, onClose]);

//   if (!isOpen) return null;

//   return (
//     <div
//       ref={popupRef}
//       className={`fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in ${className}`}
//       onClick={(e) => e.target === e.currentTarget && onClose()}
//     >
//       <div 
//         className={`relative w-full max-w-7xl h-[90vh] rounded-2xl shadow-2xl overflow-hidden transition-all duration-300 ${
//           isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'
//         } ${isExpanded ? 'max-w-full h-screen rounded-none' : ''}`}
//       >
//         {/* Header */}
//         <div className={`flex items-center justify-between p-4 border-b ${
//           isDarkMode ? 'border-gray-700' : 'border-gray-200'
//         }`}>
//           <div className="flex items-center gap-3">
//             <div className="p-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500">
//               <Code className="w-6 h-6 text-white" />
//             </div>
//             <div>
//               <h2 className="text-lg font-bold">Design Helper Pro</h2>
//               <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
//                 {designData.length} categories • {designData.reduce((acc, cat) => acc + cat.tokens.length, 0)} tokens
//               </p>
//             </div>
//           </div>
          
//           <div className="flex items-center gap-2">
//             {/* Page Metadata */}
//             {pageMetadata.title && (
//               <div className={`hidden md:block text-xs px-3 py-1 rounded-full ${
//                 isDarkMode ? 'bg-gray-800' : 'bg-gray-100'
//               }`}>
//                 {pageMetadata.title}
//               </div>
//             )}
            
//             {/* View Mode Toggle */}
//             <button
//               onClick={() => setViewMode(prev => prev === 'grid' ? 'list' : 'grid')}
//               className={`p-2 rounded-lg transition-colors ${
//                 isDarkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-100'
//               }`}
//               title="Toggle View (Ctrl+G)"
//             >
//               {viewMode === 'grid' ? <List className="w-5 h-5" /> : <Grid className="w-5 h-5" />}
//             </button>
            
//             {/* Dark Mode Toggle */}
//             <button
//               onClick={() => setIsDarkMode(!isDarkMode)}
//               className={`p-2 rounded-lg transition-colors ${
//                 isDarkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-100'
//               }`}
//               title="Toggle Dark Mode (Ctrl+D)"
//             >
//               {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
//             </button>
            
//             {/* Expand Toggle */}
//             <button
//               onClick={() => setIsExpanded(!isExpanded)}
//               className={`p-2 rounded-lg transition-colors ${
//                 isDarkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-100'
//               }`}
//             >
//               {isExpanded ? <Minimize2 className="w-5 h-5" /> : <Maximize2 className="w-5 h-5" />}
//             </button>
            
//             {/* Close Button */}
//             <button
//               onClick={onClose}
//               className={`p-2 rounded-lg transition-colors ${
//                 isDarkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-100'
//               }`}
//             >
//               <X className="w-5 h-5" />
//             </button>
//           </div>
//         </div>

//         {/* Search Bar */}
//         <div className={`p-3 border-b ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
//           <div className="relative">
//             <Search className={`absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 ${
//               isDarkMode ? 'text-gray-400' : 'text-gray-500'
//             }`} />
//             <input
//               id="search-input"
//               type="text"
//               placeholder="Search tokens by name, class, or description... (Ctrl+F)"
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//               className={`w-full pl-10 pr-4 py-2 rounded-lg outline-none transition-colors ${
//                 isDarkMode 
//                   ? 'bg-gray-800 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500' 
//                   : 'bg-gray-50 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-blue-500'
//               }`}
//             />
//             {searchQuery && (
//               <button
//                 onClick={() => setSearchQuery('')}
//                 className={`absolute right-3 top-1/2 -translate-y-1/2 ${
//                   isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-gray-700'
//                 }`}
//               >
//                 <X className="w-4 h-4" />
//               </button>
//             )}
//             <div className={`absolute right-12 top-1/2 -translate-y-1/2 text-xs ${
//               isDarkMode ? 'text-gray-500' : 'text-gray-400'
//             }`}>
//               {getFilteredTokens.length} results
//             </div>
//           </div>
//         </div>

//         {/* Main Content */}
//         <div className="flex h-[calc(100%-120px)]">
//           {/* Sidebar - Categories */}
//           <div className={`w-48 overflow-y-auto border-r ${
//             isDarkMode ? 'border-gray-700' : 'border-gray-200'
//           }`}>
//             <div className="p-2">
//               {designData.map((category) => (
//                 <button
//                   key={category.id}
//                   onClick={() => {
//                     setActiveTab(category.id);
//                     setActiveSubcategory(null);
//                   }}
//                   className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg transition-all ${
//                     activeTab === category.id
//                       ? isDarkMode
//                         ? 'bg-blue-600 text-white'
//                         : 'bg-blue-50 text-blue-600'
//                       : isDarkMode
//                         ? 'hover:bg-gray-800 text-gray-300'
//                         : 'hover:bg-gray-50 text-gray-600'
//                   }`}
//                 >
//                   {category.icon}
//                   <span className="text-sm font-medium truncate">{category.label}</span>
//                   <span className={`ml-auto text-xs px-1.5 py-0.5 rounded ${
//                     activeTab === category.id
//                       ? isDarkMode ? 'bg-blue-500' : 'bg-blue-200'
//                       : isDarkMode ? 'bg-gray-700' : 'bg-gray-200'
//                   }`}>
//                     {category.tokens.length}
//                   </span>
//                 </button>
//               ))}
//             </div>
//           </div>

//           {/* Content Area */}
//           <div className={`flex-1 overflow-hidden ${
//             isDarkMode ? 'bg-gray-900' : 'bg-gray-50'
//           }`}>
//             {/* Subcategories */}
//             {currentCategory?.subcategories && currentCategory.subcategories.length > 0 && (
//               <div className={`p-3 border-b ${
//                 isDarkMode ? 'border-gray-700' : 'border-gray-200'
//               }`}>
//                 <div className="flex gap-1 overflow-x-auto">
//                   <button
//                     onClick={() => setActiveSubcategory(null)}
//                     className={`px-3 py-1 text-xs rounded-full transition-all whitespace-nowrap ${
//                       !activeSubcategory
//                         ? isDarkMode
//                           ? 'bg-blue-600 text-white'
//                           : 'bg-blue-500 text-white'
//                         : isDarkMode
//                           ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
//                           : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
//                     }`}
//                   >
//                     All
//                   </button>
//                   {currentCategory.subcategories.map((sub) => (
//                     <button
//                       key={sub.id}
//                       onClick={() => setActiveSubcategory(sub.id)}
//                       className={`px-3 py-1 text-xs rounded-full transition-all whitespace-nowrap ${
//                         activeSubcategory === sub.id
//                           ? isDarkMode
//                             ? 'bg-blue-600 text-white'
//                             : 'bg-blue-500 text-white'
//                           : isDarkMode
//                             ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
//                             : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
//                       }`}
//                     >
//                       {sub.label}
//                     </button>
//                   ))}
//                 </div>
//               </div>
//             )}

//             {/* Tokens Display */}
//             <div className={`h-full overflow-y-auto p-4 ${
//               viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4' : 'space-y-2'
//             }`}>
//               {getFilteredTokens.map((token) => {
//                 const tokenId = getTokenId(token);
//                 const isCopied = copiedId === tokenId;
//                 const isFavorite = favorites.includes(tokenId);

//                 return viewMode === 'grid' ? (
//                   <div
//                     key={tokenId}
//                     className={`group relative p-4 rounded-xl transition-all duration-200 ${
//                       isDarkMode 
//                         ? 'bg-gray-800 hover:bg-gray-700' 
//                         : 'bg-white hover:shadow-md'
//                     }`}
//                   >
//                     {/* Token Preview */}
//                     <div className="mb-3">
//                       <div className={`p-2 rounded-lg ${token.className} ${
//                         isDarkMode && token.category === 'colors' 
//                           ? token.value.includes('bg-gray-100') 
//                             ? 'text-gray-900' 
//                             : token.value.includes('text-black') 
//                               ? 'text-black' 
//                               : ''
//                           : ''
//                       }`}>
//                         {token.preview || token.label}
//                       </div>
//                     </div>

//                     {/* Token Info */}
//                     <div className="flex items-start justify-between">
//                       <div className="flex-1 min-w-0">
//                         <div className="flex items-center gap-2">
//                           <span className="font-medium text-sm truncate">
//                             {token.label}
//                           </span>
//                           {token.subcategory && (
//                             <span className={`text-xs px-1.5 py-0.5 rounded ${
//                               isDarkMode ? 'bg-gray-700' : 'bg-gray-200'
//                             }`}>
//                               {token.subcategory}
//                             </span>
//                           )}
//                         </div>
//                         <code className={`text-xs block truncate mt-1 font-mono ${
//                           isDarkMode ? 'text-gray-400' : 'text-gray-500'
//                         }`}>
//                           {token.className}
//                         </code>
//                         {token.description && (
//                           <p className={`text-xs mt-1 truncate ${
//                             isDarkMode ? 'text-gray-500' : 'text-gray-400'
//                           }`}>
//                             {token.description}
//                           </p>
//                         )}
//                       </div>
//                     </div>

//                     {/* Actions */}
//                     <div className="absolute top-2 right-2 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
//                       <button
//                         onClick={() => toggleFavorite(tokenId)}
//                         className={`p-1.5 rounded-md transition-colors ${
//                           isFavorite
//                             ? 'text-yellow-500'
//                             : isDarkMode
//                               ? 'hover:bg-gray-600 text-gray-400'
//                               : 'hover:bg-gray-100 text-gray-400'
//                         }`}
//                         title="Add to favorites"
//                       >
//                         <Heart className={`w-4 h-4 ${isFavorite ? 'fill-yellow-500' : ''}`} />
//                       </button>
//                       <button
//                         onClick={() => copyToClipboard(token.className, tokenId)}
//                         className={`p-1.5 rounded-md transition-colors ${
//                           isCopied
//                             ? 'text-green-500'
//                             : isDarkMode
//                               ? 'hover:bg-gray-600 text-gray-400'
//                               : 'hover:bg-gray-100 text-gray-400'
//                         }`}
//                         title="Copy to clipboard"
//                       >
//                         {isCopied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
//                       </button>
//                     </div>
//                   </div>
//                 ) : (
//                   <div
//                     key={tokenId}
//                     className={`group flex items-center justify-between p-3 rounded-lg transition-all ${
//                       isDarkMode 
//                         ? 'hover:bg-gray-800' 
//                         : 'hover:bg-gray-100'
//                     }`}
//                   >
//                     <div className="flex items-center gap-4 flex-1 min-w-0">
//                       <div className={`w-16 h-10 rounded flex items-center justify-center ${token.className} ${
//                         isDarkMode && token.category === 'colors' 
//                           ? token.value.includes('bg-gray-100') 
//                             ? 'text-gray-900' 
//                             : token.value.includes('text-black') 
//                               ? 'text-black' 
//                               : ''
//                           : ''
//                       }`}>
//                         {token.preview || token.label}
//                       </div>
//                       <div className="flex-1 min-w-0">
//                         <div className="flex items-center gap-2">
//                           <span className="font-medium text-sm truncate">
//                             {token.label}
//                           </span>
//                           {token.subcategory && (
//                             <span className={`text-xs px-1.5 py-0.5 rounded ${
//                               isDarkMode ? 'bg-gray-700' : 'bg-gray-200'
//                             }`}>
//                               {token.subcategory}
//                             </span>
//                           )}
//                         </div>
//                         <code className={`text-xs block truncate font-mono ${
//                           isDarkMode ? 'text-gray-400' : 'text-gray-500'
//                         }`}>
//                           {token.className}
//                         </code>
//                       </div>
//                     </div>
                    
//                     <div className="flex items-center gap-2 ml-4">
//                       <button
//                         onClick={() => toggleFavorite(tokenId)}
//                         className={`p-1.5 rounded-md transition-colors ${
//                           isFavorite
//                             ? 'text-yellow-500'
//                             : isDarkMode
//                               ? 'hover:bg-gray-700 text-gray-400'
//                               : 'hover:bg-gray-200 text-gray-400'
//                         }`}
//                       >
//                         <Heart className={`w-4 h-4 ${isFavorite ? 'fill-yellow-500' : ''}`} />
//                       </button>
//                       <button
//                         onClick={() => copyToClipboard(token.className, tokenId)}
//                         className={`p-1.5 rounded-md transition-colors ${
//                           isCopied
//                             ? 'text-green-500'
//                             : isDarkMode
//                               ? 'hover:bg-gray-700 text-gray-400'
//                               : 'hover:bg-gray-200 text-gray-400'
//                         }`}
//                       >
//                         {isCopied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
//                       </button>
//                     </div>
//                   </div>
//                 );
//               })}

//               {/* Empty State */}
//               {getFilteredTokens.length === 0 && (
//                 <div className="col-span-full flex flex-col items-center justify-center h-64">
//                   <div className={`p-4 rounded-full ${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
//                     <Search className="w-8 h-8 text-gray-400" />
//                   </div>
//                   <h4 className="mt-4 text-lg font-medium">No tokens found</h4>
//                   <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
//                     Try adjusting your search or filter
//                   </p>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>

//         {/* Footer */}
//         <div className={`p-2 border-t ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
//           <div className="flex items-center justify-between text-xs">
//             <div className="flex items-center gap-4">
//               <span className={isDarkMode ? 'text-gray-400' : 'text-gray-500'}>
//                 <span className="font-medium">Tips:</span> Click to copy • 
//                 <kbd className={`px-1.5 py-0.5 mx-1 rounded ${
//                   isDarkMode ? 'bg-gray-800' : 'bg-gray-100'
//                 }`}>Ctrl+F</kbd> search • 
//                 <kbd className={`px-1.5 py-0.5 mx-1 rounded ${
//                   isDarkMode ? 'bg-gray-800' : 'bg-gray-100'
//                 }`}>Ctrl+D</kbd> dark mode • 
//                 <kbd className={`px-1.5 py-0.5 mx-1 rounded ${
//                   isDarkMode ? 'bg-gray-800' : 'bg-gray-100'
//                 }`}>Ctrl+G</kbd> view toggle
//               </span>
//             </div>
//             <div className="flex items-center gap-4">
//               <span className={isDarkMode ? 'text-gray-400' : 'text-gray-500'}>
//                 ❤️ {favorites.length} favorites
//               </span>
//               <span className={`px-2 py-0.5 rounded-full ${
//                 isDarkMode ? 'bg-gray-800 text-gray-400' : 'bg-gray-100 text-gray-500'
//               }`}>
//                 v2.0.0
//               </span>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* CSS Animations */}
//       <style>{`
//         @keyframes fadeIn {
//           from { opacity: 0; }
//           to { opacity: 1; }
//         }
//         .animate-fade-in {
//           animation: fadeIn 0.2s ease-out;
//         }
//       `}</style>
//     </div>
//   );
// };

// // ============================================
// // USAGE COMPONENT
// // ============================================

// export const DesignHelper: React.FC<{ pageMetadata?: any }> = ({ pageMetadata }) => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <>
//       <button
//         onClick={() => setIsOpen(true)}
//         className="fixed bottom-6 right-6 z-40 group flex items-center gap-2 px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
//       >
//         <Code className="w-5 h-5" />
//         <span className="font-medium">Design Helper</span>
//         <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
//       </button>

//       <DesignHelperPopup
//         isOpen={isOpen}
//         onClose={() => setIsOpen(false)}
//         pageMetadata={pageMetadata}
//       />
//     </>
//   );
// };

// export default DesignHelperPopup;



"use client";

import React, { useState, useEffect, useRef, useMemo } from 'react';
import { 
  Copy, 
  Check, 
  Palette, 
  Type, 
  Layout, 
  Sparkles, 
  X,
  ChevronDown,
  Grid,
  AlignLeft,
  AlignCenter,
  AlignRight,
  Bold,
  Italic,
  Underline,
  Eye,
  EyeOff,
  Moon,
  Sun,
  Maximize2,
  Minimize2,
  Search,
  Code,
  Heart,
  List,
  Square,
  Move,
  RotateCw,
  Ruler,
  AlignJustify,
  MousePointer,
  Zap
} from 'lucide-react';

// ============================================
// TYPES
// ============================================

export interface DesignToken {
  id: string;
  category: 'typography' | 'colors' | 'spacing' | 'borders' | 'effects' | 'layout' | 'flexbox' | 'grid' | 'transform' | 'animation' | 'interactivity' | 'sizing' | 'background' | 'text' | 'list' | 'table' | 'position';
  subcategory?: string;
  label: string;
  value: string;
  className: string;
  preview?: string | React.ReactNode;
  description?: string;
  usage?: string;
  tags?: string[];
  deprecated?: boolean;
  version?: string;
}

export interface DesignCategory {
  id: string;
  label: string;
  icon: React.ReactNode;
  description: string;
  subcategories?: {
    id: string;
    label: string;
    icon?: React.ReactNode;
  }[];
  tokens: DesignToken[];
}

export interface HelpPopupProps {
  isOpen: boolean;
  onClose: () => void;
  pageMetadata?: {
    title?: string;
    description?: string;
    keywords?: string[];
    author?: string;
    version?: string;
  };
  className?: string;
  defaultCategory?: string;
}

// ============================================
// COMPLETE TAILWIND CLASSES DATABASE
// ============================================

const createDesignData = (): DesignCategory[] => {
  return [
    // ==========================================
    // TYPOGRAPHY
    // ==========================================
    {
      id: 'typography',
      label: 'Typography',
      icon: <Type className="w-5 h-5" />,
      description: 'Complete text styling with font sizes, weights, transforms, and more',
      subcategories: [
        { id: 'font-size', label: 'Font Size' },
        { id: 'font-weight', label: 'Font Weight' },
        { id: 'text-transform', label: 'Text Transform' },
        { id: 'text-decoration', label: 'Text Decoration' },
        { id: 'text-align', label: 'Text Align' },
        { id: 'line-height', label: 'Line Height' },
        { id: 'letter-spacing', label: 'Letter Spacing' },
        { id: 'font-family', label: 'Font Family' },
      ],
      tokens: [
        // Font Sizes
        { id: 'text-xs', category: 'typography', subcategory: 'font-size', label: 'Extra Small', value: 'text-xs', className: 'text-xs', preview: 'Extra Small', description: '12px / 0.75rem' },
        { id: 'text-sm', category: 'typography', subcategory: 'font-size', label: 'Small', value: 'text-sm', className: 'text-sm', preview: 'Small', description: '14px / 0.875rem' },
        { id: 'text-base', category: 'typography', subcategory: 'font-size', label: 'Base', value: 'text-base', className: 'text-base', preview: 'Base', description: '16px / 1rem' },
        { id: 'text-lg', category: 'typography', subcategory: 'font-size', label: 'Large', value: 'text-lg', className: 'text-lg', preview: 'Large', description: '18px / 1.125rem' },
        { id: 'text-xl', category: 'typography', subcategory: 'font-size', label: 'Extra Large', value: 'text-xl', className: 'text-xl', preview: 'XL', description: '20px / 1.25rem' },
        { id: 'text-2xl', category: 'typography', subcategory: 'font-size', label: '2XL', value: 'text-2xl', className: 'text-2xl', preview: '2XL', description: '24px / 1.5rem' },
        { id: 'text-3xl', category: 'typography', subcategory: 'font-size', label: '3XL', value: 'text-3xl', className: 'text-3xl', preview: '3XL', description: '30px / 1.875rem' },
        { id: 'text-4xl', category: 'typography', subcategory: 'font-size', label: '4XL', value: 'text-4xl', className: 'text-4xl', preview: '4XL', description: '36px / 2.25rem' },
        { id: 'text-5xl', category: 'typography', subcategory: 'font-size', label: '5XL', value: 'text-5xl', className: 'text-5xl', preview: '5XL', description: '48px / 3rem' },
        { id: 'text-6xl', category: 'typography', subcategory: 'font-size', label: '6XL', value: 'text-6xl', className: 'text-6xl', preview: '6XL', description: '60px / 3.75rem' },
        { id: 'text-7xl', category: 'typography', subcategory: 'font-size', label: '7XL', value: 'text-7xl', className: 'text-7xl', preview: '7XL', description: '72px / 4.5rem' },
        { id: 'text-8xl', category: 'typography', subcategory: 'font-size', label: '8XL', value: 'text-8xl', className: 'text-8xl', preview: '8XL', description: '96px / 6rem' },
        { id: 'text-9xl', category: 'typography', subcategory: 'font-size', label: '9XL', value: 'text-9xl', className: 'text-9xl', preview: '9XL', description: '128px / 8rem' },

        // Font Weights
        { id: 'font-thin', category: 'typography', subcategory: 'font-weight', label: 'Thin', value: 'font-thin', className: 'font-thin', preview: 'Thin', description: 'font-weight: 100' },
        { id: 'font-extralight', category: 'typography', subcategory: 'font-weight', label: 'Extra Light', value: 'font-extralight', className: 'font-extralight', preview: 'Extra Light', description: 'font-weight: 200' },
        { id: 'font-light', category: 'typography', subcategory: 'font-weight', label: 'Light', value: 'font-light', className: 'font-light', preview: 'Light', description: 'font-weight: 300' },
        { id: 'font-normal', category: 'typography', subcategory: 'font-weight', label: 'Normal', value: 'font-normal', className: 'font-normal', preview: 'Normal', description: 'font-weight: 400' },
        { id: 'font-medium', category: 'typography', subcategory: 'font-weight', label: 'Medium', value: 'font-medium', className: 'font-medium', preview: 'Medium', description: 'font-weight: 500' },
        { id: 'font-semibold', category: 'typography', subcategory: 'font-weight', label: 'Semi Bold', value: 'font-semibold', className: 'font-semibold', preview: 'Semi Bold', description: 'font-weight: 600' },
        { id: 'font-bold', category: 'typography', subcategory: 'font-weight', label: 'Bold', value: 'font-bold', className: 'font-bold', preview: 'Bold', description: 'font-weight: 700' },
        { id: 'font-extrabold', category: 'typography', subcategory: 'font-weight', label: 'Extra Bold', value: 'font-extrabold', className: 'font-extrabold', preview: 'Extra Bold', description: 'font-weight: 800' },
        { id: 'font-black', category: 'typography', subcategory: 'font-weight', label: 'Black', value: 'font-black', className: 'font-black', preview: 'Black', description: 'font-weight: 900' },

        // Text Transform
        { id: 'uppercase', category: 'typography', subcategory: 'text-transform', label: 'Uppercase', value: 'uppercase', className: 'uppercase', preview: 'UPPERCASE', description: 'text-transform: uppercase' },
        { id: 'lowercase', category: 'typography', subcategory: 'text-transform', label: 'Lowercase', value: 'lowercase', className: 'lowercase', preview: 'lowercase', description: 'text-transform: lowercase' },
        { id: 'capitalize', category: 'typography', subcategory: 'text-transform', label: 'Capitalize', value: 'capitalize', className: 'capitalize', preview: 'Capitalize Each', description: 'text-transform: capitalize' },
        { id: 'normal-case', category: 'typography', subcategory: 'text-transform', label: 'Normal Case', value: 'normal-case', className: 'normal-case', preview: 'Normal', description: 'text-transform: none' },

        // Text Decoration
        { id: 'underline', category: 'typography', subcategory: 'text-decoration', label: 'Underline', value: 'underline', className: 'underline', preview: 'Underline', description: 'text-decoration: underline' },
        { id: 'line-through', category: 'typography', subcategory: 'text-decoration', label: 'Line Through', value: 'line-through', className: 'line-through', preview: 'Strikethrough', description: 'text-decoration: line-through' },
        { id: 'no-underline', category: 'typography', subcategory: 'text-decoration', label: 'No Underline', value: 'no-underline', className: 'no-underline', preview: 'No Underline', description: 'text-decoration: none' },

        // Text Align
        { id: 'text-left', category: 'typography', subcategory: 'text-align', label: 'Left', value: 'text-left', className: 'text-left', preview: 'Left align', description: 'text-align: left' },
        { id: 'text-center', category: 'typography', subcategory: 'text-align', label: 'Center', value: 'text-center', className: 'text-center', preview: 'Center align', description: 'text-align: center' },
        { id: 'text-right', category: 'typography', subcategory: 'text-align', label: 'Right', value: 'text-right', className: 'text-right', preview: 'Right align', description: 'text-align: right' },
        { id: 'text-justify', category: 'typography', subcategory: 'text-align', label: 'Justify', value: 'text-justify', className: 'text-justify', preview: 'Justify', description: 'text-align: justify' },

        // Line Height
        { id: 'leading-none', category: 'typography', subcategory: 'line-height', label: 'None', value: 'leading-none', className: 'leading-none', preview: 'Line 1', description: 'line-height: 1' },
        { id: 'leading-tight', category: 'typography', subcategory: 'line-height', label: 'Tight', value: 'leading-tight', className: 'leading-tight', preview: 'Line 1.25', description: 'line-height: 1.25' },
        { id: 'leading-snug', category: 'typography', subcategory: 'line-height', label: 'Snug', value: 'leading-snug', className: 'leading-snug', preview: 'Line 1.375', description: 'line-height: 1.375' },
        { id: 'leading-normal', category: 'typography', subcategory: 'line-height', label: 'Normal', value: 'leading-normal', className: 'leading-normal', preview: 'Line 1.5', description: 'line-height: 1.5' },
        { id: 'leading-relaxed', category: 'typography', subcategory: 'line-height', label: 'Relaxed', value: 'leading-relaxed', className: 'leading-relaxed', preview: 'Line 1.625', description: 'line-height: 1.625' },
        { id: 'leading-loose', category: 'typography', subcategory: 'line-height', label: 'Loose', value: 'leading-loose', className: 'leading-loose', preview: 'Line 2', description: 'line-height: 2' },

        // Letter Spacing
        { id: 'tracking-tighter', category: 'typography', subcategory: 'letter-spacing', label: 'Tighter', value: 'tracking-tighter', className: 'tracking-tighter', preview: 'Tighter', description: 'letter-spacing: -0.05em' },
        { id: 'tracking-tight', category: 'typography', subcategory: 'letter-spacing', label: 'Tight', value: 'tracking-tight', className: 'tracking-tight', preview: 'Tight', description: 'letter-spacing: -0.025em' },
        { id: 'tracking-normal', category: 'typography', subcategory: 'letter-spacing', label: 'Normal', value: 'tracking-normal', className: 'tracking-normal', preview: 'Normal', description: 'letter-spacing: 0em' },
        { id: 'tracking-wide', category: 'typography', subcategory: 'letter-spacing', label: 'Wide', value: 'tracking-wide', className: 'tracking-wide', preview: 'Wide', description: 'letter-spacing: 0.025em' },
        { id: 'tracking-wider', category: 'typography', subcategory: 'letter-spacing', label: 'Wider', value: 'tracking-wider', className: 'tracking-wider', preview: 'Wider', description: 'letter-spacing: 0.05em' },
        { id: 'tracking-widest', category: 'typography', subcategory: 'letter-spacing', label: 'Widest', value: 'tracking-widest', className: 'tracking-widest', preview: 'Widest', description: 'letter-spacing: 0.1em' },

        // Font Family
        { id: 'font-sans', category: 'typography', subcategory: 'font-family', label: 'Sans Serif', value: 'font-sans', className: 'font-sans', preview: 'Sans Serif', description: 'font-family: ui-sans-serif' },
        { id: 'font-serif', category: 'typography', subcategory: 'font-family', label: 'Serif', value: 'font-serif', className: 'font-serif', preview: 'Serif', description: 'font-family: ui-serif' },
        { id: 'font-mono', category: 'typography', subcategory: 'font-family', label: 'Monospace', value: 'font-mono', className: 'font-mono', preview: 'Monospace', description: 'font-family: ui-monospace' },
      ]
    },

    // ==========================================
    // COLORS
    // ==========================================
    {
      id: 'colors',
      label: 'Colors',
      icon: <Palette className="w-5 h-5" />,
      description: 'Complete color palette with backgrounds, text colors, and borders',
      subcategories: [
        { id: 'background', label: 'Background' },
        { id: 'text-color', label: 'Text Color' },
        { id: 'border-color', label: 'Border Color' },
        { id: 'gradients', label: 'Gradients' },
        { id: 'accent', label: 'Accent' },
        { id: 'theme', label: 'Theme Colors' },
      ],
      tokens: [
        // Background Colors - Blue
        { id: 'bg-blue-50', category: 'colors', subcategory: 'background', label: 'Blue 50', value: 'bg-blue-50', className: 'bg-blue-50', preview: 'Blue 50', description: 'Background: #eff6ff' },
        { id: 'bg-blue-100', category: 'colors', subcategory: 'background', label: 'Blue 100', value: 'bg-blue-100', className: 'bg-blue-100', preview: 'Blue 100', description: 'Background: #dbeafe' },
        { id: 'bg-blue-200', category: 'colors', subcategory: 'background', label: 'Blue 200', value: 'bg-blue-200', className: 'bg-blue-200', preview: 'Blue 200', description: 'Background: #bfdbfe' },
        { id: 'bg-blue-300', category: 'colors', subcategory: 'background', label: 'Blue 300', value: 'bg-blue-300', className: 'bg-blue-300', preview: 'Blue 300', description: 'Background: #93c5fd' },
        { id: 'bg-blue-400', category: 'colors', subcategory: 'background', label: 'Blue 400', value: 'bg-blue-400', className: 'bg-blue-400', preview: 'Blue 400', description: 'Background: #60a5fa' },
        { id: 'bg-blue-500', category: 'colors', subcategory: 'background', label: 'Blue 500', value: 'bg-blue-500', className: 'bg-blue-500', preview: 'Blue 500', description: 'Background: #3b82f6' },
        { id: 'bg-blue-600', category: 'colors', subcategory: 'background', label: 'Blue 600', value: 'bg-blue-600', className: 'bg-blue-600', preview: 'Blue 600', description: 'Background: #2563eb' },
        { id: 'bg-blue-700', category: 'colors', subcategory: 'background', label: 'Blue 700', value: 'bg-blue-700', className: 'bg-blue-700', preview: 'Blue 700', description: 'Background: #1d4ed8' },
        { id: 'bg-blue-800', category: 'colors', subcategory: 'background', label: 'Blue 800', value: 'bg-blue-800', className: 'bg-blue-800', preview: 'Blue 800', description: 'Background: #1e40af' },
        { id: 'bg-blue-900', category: 'colors', subcategory: 'background', label: 'Blue 900', value: 'bg-blue-900', className: 'bg-blue-900', preview: 'Blue 900', description: 'Background: #1e3a8a' },

        // Background Colors - Gray
        { id: 'bg-gray-50', category: 'colors', subcategory: 'background', label: 'Gray 50', value: 'bg-gray-50', className: 'bg-gray-50', preview: 'Gray 50', description: 'Background: #f9fafb' },
        { id: 'bg-gray-100', category: 'colors', subcategory: 'background', label: 'Gray 100', value: 'bg-gray-100', className: 'bg-gray-100', preview: 'Gray 100', description: 'Background: #f3f4f6' },
        { id: 'bg-gray-200', category: 'colors', subcategory: 'background', label: 'Gray 200', value: 'bg-gray-200', className: 'bg-gray-200', preview: 'Gray 200', description: 'Background: #e5e7eb' },
        { id: 'bg-gray-300', category: 'colors', subcategory: 'background', label: 'Gray 300', value: 'bg-gray-300', className: 'bg-gray-300', preview: 'Gray 300', description: 'Background: #d1d5db' },
        { id: 'bg-gray-400', category: 'colors', subcategory: 'background', label: 'Gray 400', value: 'bg-gray-400', className: 'bg-gray-400', preview: 'Gray 400', description: 'Background: #9ca3af' },
        { id: 'bg-gray-500', category: 'colors', subcategory: 'background', label: 'Gray 500', value: 'bg-gray-500', className: 'bg-gray-500', preview: 'Gray 500', description: 'Background: #6b7280' },
        { id: 'bg-gray-600', category: 'colors', subcategory: 'background', label: 'Gray 600', value: 'bg-gray-600', className: 'bg-gray-600', preview: 'Gray 600', description: 'Background: #4b5563' },
        { id: 'bg-gray-700', category: 'colors', subcategory: 'background', label: 'Gray 700', value: 'bg-gray-700', className: 'bg-gray-700', preview: 'Gray 700', description: 'Background: #374151' },
        { id: 'bg-gray-800', category: 'colors', subcategory: 'background', label: 'Gray 800', value: 'bg-gray-800', className: 'bg-gray-800', preview: 'Gray 800', description: 'Background: #1f2937' },
        { id: 'bg-gray-900', category: 'colors', subcategory: 'background', label: 'Gray 900', value: 'bg-gray-900', className: 'bg-gray-900', preview: 'Gray 900', description: 'Background: #111827' },

        // Text Colors
        { id: 'text-blue-500', category: 'colors', subcategory: 'text-color', label: 'Blue 500', value: 'text-blue-500', className: 'text-blue-500', preview: 'Blue 500', description: 'Text Color: #3b82f6' },
        { id: 'text-gray-500', category: 'colors', subcategory: 'text-color', label: 'Gray 500', value: 'text-gray-500', className: 'text-gray-500', preview: 'Gray 500', description: 'Text Color: #6b7280' },
        { id: 'text-gray-600', category: 'colors', subcategory: 'text-color', label: 'Gray 600', value: 'text-gray-600', className: 'text-gray-600', preview: 'Gray 600', description: 'Text Color: #4b5563' },
        { id: 'text-gray-700', category: 'colors', subcategory: 'text-color', label: 'Gray 700', value: 'text-gray-700', className: 'text-gray-700', preview: 'Gray 700', description: 'Text Color: #374151' },
        { id: 'text-gray-800', category: 'colors', subcategory: 'text-color', label: 'Gray 800', value: 'text-gray-800', className: 'text-gray-800', preview: 'Gray 800', description: 'Text Color: #1f2937' },
        { id: 'text-gray-900', category: 'colors', subcategory: 'text-color', label: 'Gray 900', value: 'text-gray-900', className: 'text-gray-900', preview: 'Gray 900', description: 'Text Color: #111827' },

        // Gradients
        { id: 'gradient-primary', category: 'colors', subcategory: 'gradients', label: 'Primary Gradient', value: 'bg-gradient-to-r from-blue-500 to-purple-600', className: 'bg-gradient-to-r from-blue-500 to-purple-600', preview: 'Primary', description: 'Blue to Purple' },
        { id: 'gradient-secondary', category: 'colors', subcategory: 'gradients', label: 'Secondary Gradient', value: 'bg-gradient-to-r from-pink-500 to-orange-400', className: 'bg-gradient-to-r from-pink-500 to-orange-400', preview: 'Secondary', description: 'Pink to Orange' },
        { id: 'gradient-success', category: 'colors', subcategory: 'gradients', label: 'Success Gradient', value: 'bg-gradient-to-r from-green-400 to-emerald-600', className: 'bg-gradient-to-r from-green-400 to-emerald-600', preview: 'Success', description: 'Green to Emerald' },
        { id: 'gradient-danger', category: 'colors', subcategory: 'gradients', label: 'Danger Gradient', value: 'bg-gradient-to-r from-red-400 to-rose-600', className: 'bg-gradient-to-r from-red-400 to-rose-600', preview: 'Danger', description: 'Red to Rose' },
      ]
    },

    // ==========================================
    // SPACING
    // ==========================================
    {
      id: 'spacing',
      label: 'Spacing',
      icon: <Ruler className="w-5 h-5" />,
      description: 'Complete padding, margin, and gap utilities',
      subcategories: [
        { id: 'padding', label: 'Padding' },
        { id: 'margin', label: 'Margin' },
        { id: 'gap', label: 'Gap' },
      ],
      tokens: [
        { id: 'p-1', category: 'spacing', subcategory: 'padding', label: 'Padding 1', value: 'p-1', className: 'p-1', preview: 'P-1', description: 'padding: 4px' },
        { id: 'p-2', category: 'spacing', subcategory: 'padding', label: 'Padding 2', value: 'p-2', className: 'p-2', preview: 'P-2', description: 'padding: 8px' },
        { id: 'p-3', category: 'spacing', subcategory: 'padding', label: 'Padding 3', value: 'p-3', className: 'p-3', preview: 'P-3', description: 'padding: 12px' },
        { id: 'p-4', category: 'spacing', subcategory: 'padding', label: 'Padding 4', value: 'p-4', className: 'p-4', preview: 'P-4', description: 'padding: 16px' },
        { id: 'p-6', category: 'spacing', subcategory: 'padding', label: 'Padding 6', value: 'p-6', className: 'p-6', preview: 'P-6', description: 'padding: 24px' },
        { id: 'p-8', category: 'spacing', subcategory: 'padding', label: 'Padding 8', value: 'p-8', className: 'p-8', preview: 'P-8', description: 'padding: 32px' },
        { id: 'px-4', category: 'spacing', subcategory: 'padding', label: 'Padding X 4', value: 'px-4', className: 'px-4', preview: 'PX-4', description: 'padding: 16px horizontal' },
        { id: 'py-4', category: 'spacing', subcategory: 'padding', label: 'Padding Y 4', value: 'py-4', className: 'py-4', preview: 'PY-4', description: 'padding: 16px vertical' },
        { id: 'm-1', category: 'spacing', subcategory: 'margin', label: 'Margin 1', value: 'm-1', className: 'm-1', preview: 'M-1', description: 'margin: 4px' },
        { id: 'm-2', category: 'spacing', subcategory: 'margin', label: 'Margin 2', value: 'm-2', className: 'm-2', preview: 'M-2', description: 'margin: 8px' },
        { id: 'm-4', category: 'spacing', subcategory: 'margin', label: 'Margin 4', value: 'm-4', className: 'm-4', preview: 'M-4', description: 'margin: 16px' },
        { id: 'mx-auto', category: 'spacing', subcategory: 'margin', label: 'Margin Auto', value: 'mx-auto', className: 'mx-auto', preview: 'Auto', description: 'margin: auto' },
        { id: 'gap-2', category: 'spacing', subcategory: 'gap', label: 'Gap 2', value: 'gap-2', className: 'gap-2', preview: 'Gap 2', description: 'gap: 8px' },
        { id: 'gap-4', category: 'spacing', subcategory: 'gap', label: 'Gap 4', value: 'gap-4', className: 'gap-4', preview: 'Gap 4', description: 'gap: 16px' },
        { id: 'gap-6', category: 'spacing', subcategory: 'gap', label: 'Gap 6', value: 'gap-6', className: 'gap-6', preview: 'Gap 6', description: 'gap: 24px' },
      ]
    },

    // ==========================================
    // BORDERS
    // ==========================================
    {
      id: 'borders',
      label: 'Borders',
      icon: <Square className="w-5 h-5" />,
      description: 'Complete border styling with radius, width, color, and style',
      subcategories: [
        { id: 'border-radius', label: 'Border Radius' },
        { id: 'border-width', label: 'Border Width' },
        { id: 'border-color', label: 'Border Color' },
      ],
      tokens: [
        { id: 'rounded-none', category: 'borders', subcategory: 'border-radius', label: 'Rounded None', value: 'rounded-none', className: 'rounded-none', preview: 'None', description: 'border-radius: 0px' },
        { id: 'rounded-sm', category: 'borders', subcategory: 'border-radius', label: 'Rounded Small', value: 'rounded-sm', className: 'rounded-sm', preview: 'Small', description: 'border-radius: 2px' },
        { id: 'rounded', category: 'borders', subcategory: 'border-radius', label: 'Rounded', value: 'rounded', className: 'rounded', preview: 'Default', description: 'border-radius: 4px' },
        { id: 'rounded-md', category: 'borders', subcategory: 'border-radius', label: 'Rounded Medium', value: 'rounded-md', className: 'rounded-md', preview: 'Medium', description: 'border-radius: 6px' },
        { id: 'rounded-lg', category: 'borders', subcategory: 'border-radius', label: 'Rounded Large', value: 'rounded-lg', className: 'rounded-lg', preview: 'Large', description: 'border-radius: 8px' },
        { id: 'rounded-xl', category: 'borders', subcategory: 'border-radius', label: 'Rounded XL', value: 'rounded-xl', className: 'rounded-xl', preview: 'XL', description: 'border-radius: 12px' },
        { id: 'rounded-2xl', category: 'borders', subcategory: 'border-radius', label: 'Rounded 2XL', value: 'rounded-2xl', className: 'rounded-2xl', preview: '2XL', description: 'border-radius: 16px' },
        { id: 'rounded-full', category: 'borders', subcategory: 'border-radius', label: 'Rounded Full', value: 'rounded-full', className: 'rounded-full', preview: 'Full', description: 'border-radius: 9999px' },
        { id: 'border', category: 'borders', subcategory: 'border-width', label: 'Border', value: 'border', className: 'border', preview: 'Border', description: 'border: 1px solid' },
        { id: 'border-2', category: 'borders', subcategory: 'border-width', label: 'Border 2', value: 'border-2', className: 'border-2', preview: 'Border 2', description: 'border: 2px solid' },
        { id: 'border-4', category: 'borders', subcategory: 'border-width', label: 'Border 4', value: 'border-4', className: 'border-4', preview: 'Border 4', description: 'border: 4px solid' },
        { id: 'border-gray-200', category: 'borders', subcategory: 'border-color', label: 'Border Gray', value: 'border-gray-200', className: 'border-gray-200', preview: 'Gray', description: 'border-color: #e5e7eb' },
        { id: 'border-blue-500', category: 'borders', subcategory: 'border-color', label: 'Border Blue', value: 'border-blue-500', className: 'border-blue-500', preview: 'Blue', description: 'border-color: #3b82f6' },
      ]
    },

    // ==========================================
    // EFFECTS - ENHANCED WITH VISUAL PREVIEWS
    // ==========================================
    {
      id: 'effects',
      label: 'Effects',
      icon: <Sparkles className="w-5 h-5" />,
      description: 'Box shadows, opacity, blur, and other visual effects',
      subcategories: [
        { id: 'shadow', label: 'Shadows' },
        { id: 'opacity', label: 'Opacity' },
        { id: 'blur', label: 'Blur' },
        { id: 'backdrop', label: 'Backdrop Effects' },
      ],
      tokens: [
            // ==========================================
    // STANDARD SHADOWS (Tailwind built-in)
    // ==========================================
    { 
      id: 'shadow-none', 
      category: 'effects', 
      subcategory: 'shadow', 
      label: 'No Shadow', 
      value: 'shadow-none', 
      className: 'shadow-none', 
      preview: 'No Shadow', 
      description: 'box-shadow: none' 
    },
    { 
      id: 'shadow-sm', 
      category: 'effects', 
      subcategory: 'shadow', 
      label: 'Shadow Small', 
      value: 'shadow-sm', 
      className: 'shadow-sm', 
      preview: 'Small', 
      description: 'box-shadow: 0 1px 2px rgba(0,0,0,0.05)' 
    },
    { 
      id: 'shadow', 
      category: 'effects', 
      subcategory: 'shadow', 
      label: 'Shadow Default', 
      value: 'shadow', 
      className: 'shadow', 
      preview: 'Default', 
      description: 'box-shadow: 0 1px 3px rgba(0,0,0,0.1)' 
    },
    { 
      id: 'shadow-md', 
      category: 'effects', 
      subcategory: 'shadow', 
      label: 'Shadow Medium', 
      value: 'shadow-md', 
      className: 'shadow-md', 
      preview: 'Medium', 
      description: 'box-shadow: 0 4px 6px rgba(0,0,0,0.1)' 
    },
    { 
      id: 'shadow-lg', 
      category: 'effects', 
      subcategory: 'shadow', 
      label: 'Shadow Large', 
      value: 'shadow-lg', 
      className: 'shadow-lg', 
      preview: 'Large', 
      description: 'box-shadow: 0 10px 15px rgba(0,0,0,0.1)' 
    },
    { 
      id: 'shadow-xl', 
      category: 'effects', 
      subcategory: 'shadow', 
      label: 'Shadow XL', 
      value: 'shadow-xl', 
      className: 'shadow-xl', 
      preview: 'XL', 
      description: 'box-shadow: 0 20px 25px rgba(0,0,0,0.1)' 
    },
    { 
      id: 'shadow-2xl', 
      category: 'effects', 
      subcategory: 'shadow', 
      label: 'Shadow 2XL', 
      value: 'shadow-2xl', 
      className: 'shadow-2xl', 
      preview: '2XL', 
      description: 'box-shadow: 0 25px 50px rgba(0,0,0,0.25)' 
    },
    { 
      id: 'shadow-inner', 
      category: 'effects', 
      subcategory: 'shadow', 
      label: 'Inner Shadow', 
      value: 'shadow-inner', 
      className: 'shadow-inner', 
      preview: 'Inner', 
      description: 'box-shadow: inset 0 2px 4px rgba(0,0,0,0.05)' 
    },

    // ==========================================
    // CUSTOM SHADOWS 1-15 (Need CSS or config)
    // ==========================================
    // Option A: Using arbitrary values (works without config)
    { 
      id: 'shadow-1', 
      category: 'effects', 
      subcategory: 'shadow', 
      label: 'Level 1', 
      value: 'shadow-[0_1px_3px_rgba(0,0,0,0.12),0_1px_2px_rgba(0,0,0,0.24)]', 
      className: 'shadow-[0_1px_3px_rgba(0,0,0,0.12),0_1px_2px_rgba(0,0,0,0.24)]', 
      preview: 'L1', 
      description: 'Subtle elevation' 
    },
    { 
      id: 'shadow-2', 
      category: 'effects', 
      subcategory: 'shadow', 
      label: 'Level 2', 
      value: 'shadow-[0_3px_6px_rgba(0,0,0,0.15),0_2px_4px_rgba(0,0,0,0.12)]', 
      className: 'shadow-[0_3px_6px_rgba(0,0,0,0.15),0_2px_4px_rgba(0,0,0,0.12)]', 
      preview: 'L2', 
      description: 'Light elevation' 
    },
    { 
      id: 'shadow-3', 
      category: 'effects', 
      subcategory: 'shadow', 
      label: 'Level 3', 
      value: 'shadow-[0_4px_8px_rgba(0,0,0,0.15),0_3px_6px_rgba(0,0,0,0.1)]', 
      className: 'shadow-[0_4px_8px_rgba(0,0,0,0.15),0_3px_6px_rgba(0,0,0,0.1)]', 
      preview: 'L3', 
      description: 'Standard elevation' 
    },
    { 
      id: 'shadow-4', 
      category: 'effects', 
      subcategory: 'shadow', 
      label: 'Level 4', 
      value: 'shadow-[0_6px_12px_rgba(0,0,0,0.15),0_4px_8px_rgba(0,0,0,0.1)]', 
      className: 'shadow-[0_6px_12px_rgba(0,0,0,0.15),0_4px_8px_rgba(0,0,0,0.1)]', 
      preview: 'L4', 
      description: 'Medium elevation' 
    },
    { 
      id: 'shadow-5', 
      category: 'effects', 
      subcategory: 'shadow', 
      label: 'Level 5', 
      value: 'shadow-[0_8px_16px_rgba(0,0,0,0.15),0_6px_12px_rgba(0,0,0,0.1)]', 
      className: 'shadow-[0_8px_16px_rgba(0,0,0,0.15),0_6px_12px_rgba(0,0,0,0.1)]', 
      preview: 'L5', 
      description: 'High elevation' 
    },
    { 
      id: 'shadow-6', 
      category: 'effects', 
      subcategory: 'shadow', 
      label: 'Level 6', 
      value: 'shadow-[0_10px_20px_rgba(0,0,0,0.15),0_6px_12px_rgba(0,0,0,0.1)]', 
      className: 'shadow-[0_10px_20px_rgba(0,0,0,0.15),0_6px_12px_rgba(0,0,0,0.1)]', 
      preview: 'L6', 
      description: 'Higher elevation' 
    },
    { 
      id: 'shadow-7', 
      category: 'effects', 
      subcategory: 'shadow', 
      label: 'Level 7', 
      value: 'shadow-[0_12px_24px_rgba(0,0,0,0.15),0_8px_16px_rgba(0,0,0,0.1)]', 
      className: 'shadow-[0_12px_24px_rgba(0,0,0,0.15),0_8px_16px_rgba(0,0,0,0.1)]', 
      preview: 'L7', 
      description: 'Elevated' 
    },
    { 
      id: 'shadow-8', 
      category: 'effects', 
      subcategory: 'shadow', 
      label: 'Level 8', 
      value: 'shadow-[0_16px_32px_rgba(0,0,0,0.15),0_10px_20px_rgba(0,0,0,0.1)]', 
      className: 'shadow-[0_16px_32px_rgba(0,0,0,0.15),0_10px_20px_rgba(0,0,0,0.1)]', 
      preview: 'L8', 
      description: 'Highly elevated' 
    },
    { 
      id: 'shadow-9', 
      category: 'effects', 
      subcategory: 'shadow', 
      label: 'Level 9', 
      value: 'shadow-[0_20px_40px_rgba(0,0,0,0.15),0_12px_24px_rgba(0,0,0,0.1)]', 
      className: 'shadow-[0_20px_40px_rgba(0,0,0,0.15),0_12px_24px_rgba(0,0,0,0.1)]', 
      preview: 'L9', 
      description: 'Floating' 
    },
    { 
      id: 'shadow-10', 
      category: 'effects', 
      subcategory: 'shadow', 
      label: 'Level 10', 
      value: 'shadow-[0_24px_48px_rgba(0,0,0,0.15),0_16px_32px_rgba(0,0,0,0.1)]', 
      className: 'shadow-[0_24px_48px_rgba(0,0,0,0.15),0_16px_32px_rgba(0,0,0,0.1)]', 
      preview: 'L10', 
      description: 'High floating' 
    },
    { 
      id: 'shadow-11', 
      category: 'effects', 
      subcategory: 'shadow', 
      label: 'Level 11', 
      value: 'shadow-[0_30px_60px_rgba(0,0,0,0.15),0_20px_40px_rgba(0,0,0,0.1)]', 
      className: 'shadow-[0_30px_60px_rgba(0,0,0,0.15),0_20px_40px_rgba(0,0,0,0.1)]', 
      preview: 'L11', 
      description: 'Very high' 
    },
    { 
      id: 'shadow-12', 
      category: 'effects', 
      subcategory: 'shadow', 
      label: 'Level 12', 
      value: 'shadow-[0_40px_80px_rgba(0,0,0,0.15),0_24px_48px_rgba(0,0,0,0.1)]', 
      className: 'shadow-[0_40px_80px_rgba(0,0,0,0.15),0_24px_48px_rgba(0,0,0,0.1)]', 
      preview: 'L12', 
      description: 'Extreme elevation' 
    },
    { 
      id: 'shadow-13', 
      category: 'effects', 
      subcategory: 'shadow', 
      label: 'Level 13', 
      value: 'shadow-[0_50px_100px_rgba(0,0,0,0.15),0_30px_60px_rgba(0,0,0,0.1)]', 
      className: 'shadow-[0_50px_100px_rgba(0,0,0,0.15),0_30px_60px_rgba(0,0,0,0.1)]', 
      preview: 'L13', 
      description: 'Extreme' 
    },
    { 
      id: 'shadow-14', 
      category: 'effects', 
      subcategory: 'shadow', 
      label: 'Level 14', 
      value: 'shadow-[0_60px_120px_rgba(0,0,0,0.15),0_40px_80px_rgba(0,0,0,0.1)]', 
      className: 'shadow-[0_60px_120px_rgba(0,0,0,0.15),0_40px_80px_rgba(0,0,0,0.1)]', 
      preview: 'L14', 
      description: 'Super extreme' 
    },
    { 
      id: 'shadow-15', 
      category: 'effects', 
      subcategory: 'shadow', 
      label: 'Level 15', 
      value: 'shadow-[0_80px_160px_rgba(0,0,0,0.15),0_50px_100px_rgba(0,0,0,0.1)]', 
      className: 'shadow-[0_80px_160px_rgba(0,0,0,0.15),0_50px_100px_rgba(0,0,0,0.1)]', 
      preview: 'L15', 
      description: 'Maximum elevation' 
    },

    // ==========================================
    // COLORED SHADOWS
    // ==========================================
    { 
      id: 'shadow-blue-500/50', 
      category: 'effects', 
      subcategory: 'colored-shadow', 
      label: 'Blue Shadow', 
      value: 'shadow-blue-500/50', 
      className: 'shadow-blue-500/50', 
      preview: 'Blue', 
      description: 'Colored shadow with blue 50% opacity' 
    },
    { 
      id: 'shadow-purple-500/50', 
      category: 'effects', 
      subcategory: 'colored-shadow', 
      label: 'Purple Shadow', 
      value: 'shadow-purple-500/50', 
      className: 'shadow-purple-500/50', 
      preview: 'Purple', 
      description: 'Colored shadow with purple 50% opacity' 
    },
    { 
      id: 'shadow-pink-500/50', 
      category: 'effects', 
      subcategory: 'colored-shadow', 
      label: 'Pink Shadow', 
      value: 'shadow-pink-500/50', 
      className: 'shadow-pink-500/50', 
      preview: 'Pink', 
      description: 'Colored shadow with pink 50% opacity' 
    },
    { 
      id: 'shadow-green-500/50', 
      category: 'effects', 
      subcategory: 'colored-shadow', 
      label: 'Green Shadow', 
      value: 'shadow-green-500/50', 
      className: 'shadow-green-500/50', 
      preview: 'Green', 
      description: 'Colored shadow with green 50% opacity' 
    },
    { 
      id: 'shadow-red-500/50', 
      category: 'effects', 
      subcategory: 'colored-shadow', 
      label: 'Red Shadow', 
      value: 'shadow-red-500/50', 
      className: 'shadow-red-500/50', 
      preview: 'Red', 
      description: 'Colored shadow with red 50% opacity' 
    },

    // ==========================================
    // SPECIAL EFFECTS SHADOWS
    // ==========================================
    { 
      id: 'shadow-soft', 
      category: 'effects', 
      subcategory: 'shadow', 
      label: 'Soft', 
      value: 'shadow-[0_2px_8px_rgba(0,0,0,0.08)]', 
      className: 'shadow-[0_2px_8px_rgba(0,0,0,0.08)]', 
      preview: 'Soft', 
      description: 'Custom soft shadow' 
    },
    { 
      id: 'shadow-glow', 
      category: 'effects', 
      subcategory: 'shadow', 
      label: 'Glow', 
      value: 'shadow-[0_0_20px_rgba(59,130,246,0.3)]', 
      className: 'shadow-[0_0_20px_rgba(59,130,246,0.3)]', 
      preview: 'Glow', 
      description: 'Custom glow effect' 
    },
    { 
      id: 'shadow-elevated', 
      category: 'effects', 
      subcategory: 'shadow', 
      label: 'Elevated', 
      value: 'shadow-[0_8px_30px_rgba(0,0,0,0.12)]', 
      className: 'shadow-[0_8px_30px_rgba(0,0,0,0.12)]', 
      preview: 'Elevated', 
      description: 'Custom elevated shadow' 
    },

        // Opacity
        { id: 'opacity-0', category: 'effects', subcategory: 'opacity', label: 'Opacity 0', value: 'opacity-0', className: 'opacity-0', preview: '0%', description: 'opacity: 0' },
        { id: 'opacity-25', category: 'effects', subcategory: 'opacity', label: 'Opacity 25', value: 'opacity-25', className: 'opacity-25', preview: '25%', description: 'opacity: 0.25' },
        { id: 'opacity-50', category: 'effects', subcategory: 'opacity', label: 'Opacity 50', value: 'opacity-50', className: 'opacity-50', preview: '50%', description: 'opacity: 0.5' },
        { id: 'opacity-75', category: 'effects', subcategory: 'opacity', label: 'Opacity 75', value: 'opacity-75', className: 'opacity-75', preview: '75%', description: 'opacity: 0.75' },
        { id: 'opacity-100', category: 'effects', subcategory: 'opacity', label: 'Opacity 100', value: 'opacity-100', className: 'opacity-100', preview: '100%', description: 'opacity: 1' },

        // Blur
        { id: 'blur-none', category: 'effects', subcategory: 'blur', label: 'Blur None', value: 'blur-none', className: 'blur-none', preview: 'None', description: 'blur: none' },
        { id: 'blur-sm', category: 'effects', subcategory: 'blur', label: 'Blur Small', value: 'blur-sm', className: 'blur-sm', preview: 'Small', description: 'blur: 4px' },
        { id: 'blur', category: 'effects', subcategory: 'blur', label: 'Blur Default', value: 'blur', className: 'blur', preview: 'Default', description: 'blur: 8px' },
        { id: 'blur-md', category: 'effects', subcategory: 'blur', label: 'Blur Medium', value: 'blur-md', className: 'blur-md', preview: 'Medium', description: 'blur: 12px' },
        { id: 'blur-lg', category: 'effects', subcategory: 'blur', label: 'Blur Large', value: 'blur-lg', className: 'blur-lg', preview: 'Large', description: 'blur: 16px' },
        { id: 'blur-xl', category: 'effects', subcategory: 'blur', label: 'Blur XL', value: 'blur-xl', className: 'blur-xl', preview: 'XL', description: 'blur: 24px' },

        // Backdrop
        { id: 'backdrop-blur-sm', category: 'effects', subcategory: 'backdrop', label: 'Backdrop Blur Small', value: 'backdrop-blur-sm', className: 'backdrop-blur-sm', preview: 'Blur Small', description: 'backdrop-filter: blur(4px)' },
        { id: 'backdrop-blur', category: 'effects', subcategory: 'backdrop', label: 'Backdrop Blur', value: 'backdrop-blur', className: 'backdrop-blur', preview: 'Blur', description: 'backdrop-filter: blur(8px)' },
        { id: 'backdrop-blur-md', category: 'effects', subcategory: 'backdrop', label: 'Backdrop Blur Medium', value: 'backdrop-blur-md', className: 'backdrop-blur-md', preview: 'Blur Medium', description: 'backdrop-filter: blur(12px)' },
        { id: 'backdrop-blur-lg', category: 'effects', subcategory: 'backdrop', label: 'Backdrop Blur Large', value: 'backdrop-blur-lg', className: 'backdrop-blur-lg', preview: 'Blur Large', description: 'backdrop-filter: blur(16px)' },
      ]
    },

    // ==========================================
    // FLEXBOX
    // ==========================================
    {
      id: 'flexbox',
      label: 'Flexbox',
      icon: <AlignJustify className="w-5 h-5" />,
      description: 'Complete flexbox utilities for layout',
      subcategories: [
        { id: 'flex-direction', label: 'Direction' },
        { id: 'justify-content', label: 'Justify Content' },
        { id: 'align-items', label: 'Align Items' },
      ],
      tokens: [
        { id: 'flex', category: 'flexbox', subcategory: 'flex-direction', label: 'Flex', value: 'flex', className: 'flex', preview: 'Flex', description: 'display: flex' },
        { id: 'flex-row', category: 'flexbox', subcategory: 'flex-direction', label: 'Row', value: 'flex-row', className: 'flex-row', preview: 'Row', description: 'flex-direction: row' },
        { id: 'flex-col', category: 'flexbox', subcategory: 'flex-direction', label: 'Column', value: 'flex-col', className: 'flex-col', preview: 'Column', description: 'flex-direction: column' },
        { id: 'justify-start', category: 'flexbox', subcategory: 'justify-content', label: 'Start', value: 'justify-start', className: 'justify-start', preview: 'Start', description: 'justify-content: flex-start' },
        { id: 'justify-center', category: 'flexbox', subcategory: 'justify-content', label: 'Center', value: 'justify-center', className: 'justify-center', preview: 'Center', description: 'justify-content: center' },
        { id: 'justify-between', category: 'flexbox', subcategory: 'justify-content', label: 'Between', value: 'justify-between', className: 'justify-between', preview: 'Between', description: 'justify-content: space-between' },
        { id: 'items-start', category: 'flexbox', subcategory: 'align-items', label: 'Start', value: 'items-start', className: 'items-start', preview: 'Start', description: 'align-items: flex-start' },
        { id: 'items-center', category: 'flexbox', subcategory: 'align-items', label: 'Center', value: 'items-center', className: 'items-center', preview: 'Center', description: 'align-items: center' },
        { id: 'items-end', category: 'flexbox', subcategory: 'align-items', label: 'End', value: 'items-end', className: 'items-end', preview: 'End', description: 'align-items: flex-end' },
      ]
    },

    // ==========================================
    // GRID
    // ==========================================
    {
      id: 'grid',
      label: 'Grid',
      icon: <Grid className="w-5 h-5" />,
      description: 'Complete CSS grid utilities',
      subcategories: [
        { id: 'grid-template', label: 'Grid Template' },
        { id: 'grid-span', label: 'Grid Span' },
      ],
      tokens: [
        { id: 'grid-cols-1', category: 'grid', subcategory: 'grid-template', label: '1 Column', value: 'grid-cols-1', className: 'grid-cols-1', preview: '1 Col', description: 'grid-template-columns: repeat(1, 1fr)' },
        { id: 'grid-cols-2', category: 'grid', subcategory: 'grid-template', label: '2 Columns', value: 'grid-cols-2', className: 'grid-cols-2', preview: '2 Col', description: 'grid-template-columns: repeat(2, 1fr)' },
        { id: 'grid-cols-3', category: 'grid', subcategory: 'grid-template', label: '3 Columns', value: 'grid-cols-3', className: 'grid-cols-3', preview: '3 Col', description: 'grid-template-columns: repeat(3, 1fr)' },
        { id: 'grid-cols-4', category: 'grid', subcategory: 'grid-template', label: '4 Columns', value: 'grid-cols-4', className: 'grid-cols-4', preview: '4 Col', description: 'grid-template-columns: repeat(4, 1fr)' },
        { id: 'col-span-2', category: 'grid', subcategory: 'grid-span', label: 'Span 2', value: 'col-span-2', className: 'col-span-2', preview: 'Span 2', description: 'grid-column: span 2' },
        { id: 'col-span-3', category: 'grid', subcategory: 'grid-span', label: 'Span 3', value: 'col-span-3', className: 'col-span-3', preview: 'Span 3', description: 'grid-column: span 3' },
        { id: 'col-span-4', category: 'grid', subcategory: 'grid-span', label: 'Span 4', value: 'col-span-4', className: 'col-span-4', preview: 'Span 4', description: 'grid-column: span 4' },
      ]
    },

    // ==========================================
    // POSITION
    // ==========================================
    {
      id: 'position',
      label: 'Position',
      icon: <Move className="w-5 h-5" />,
      description: 'Positioning, z-index, and stacking context',
      subcategories: [
        { id: 'position', label: 'Position' },
        { id: 'z-index', label: 'Z-Index' },
      ],
      tokens: [
        { id: 'static', category: 'position', subcategory: 'position', label: 'Static', value: 'static', className: 'static', preview: 'Static', description: 'position: static' },
        { id: 'relative', category: 'position', subcategory: 'position', label: 'Relative', value: 'relative', className: 'relative', preview: 'Relative', description: 'position: relative' },
        { id: 'absolute', category: 'position', subcategory: 'position', label: 'Absolute', value: 'absolute', className: 'absolute', preview: 'Absolute', description: 'position: absolute' },
        { id: 'fixed', category: 'position', subcategory: 'position', label: 'Fixed', value: 'fixed', className: 'fixed', preview: 'Fixed', description: 'position: fixed' },
        { id: 'sticky', category: 'position', subcategory: 'position', label: 'Sticky', value: 'sticky', className: 'sticky', preview: 'Sticky', description: 'position: sticky' },
        { id: 'z-10', category: 'position', subcategory: 'z-index', label: 'Z-10', value: 'z-10', className: 'z-10', preview: 'Z-10', description: 'z-index: 10' },
        { id: 'z-20', category: 'position', subcategory: 'z-index', label: 'Z-20', value: 'z-20', className: 'z-20', preview: 'Z-20', description: 'z-index: 20' },
        { id: 'z-30', category: 'position', subcategory: 'z-index', label: 'Z-30', value: 'z-30', className: 'z-30', preview: 'Z-30', description: 'z-index: 30' },
        { id: 'z-40', category: 'position', subcategory: 'z-index', label: 'Z-40', value: 'z-40', className: 'z-40', preview: 'Z-40', description: 'z-index: 40' },
        { id: 'z-50', category: 'position', subcategory: 'z-index', label: 'Z-50', value: 'z-50', className: 'z-50', preview: 'Z-50', description: 'z-index: 50' },
      ]
    },
  ];
};

// ============================================
// CSS STYLES - For shadow previews
// ============================================

const GlobalStyles = () => (
  <style>{`
    /* Shadow preview styles */
    .shadow-preview-box {
      width: 100%;
      height: 60px;
      border-radius: 8px;
      background: white;
      transition: all 0.2s ease;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 12px;
      font-weight: 500;
      color: #6b7280;
    }
    
    .dark .shadow-preview-box {
      background: #1f2937;
      color: #9ca3af;
    }
    
    /* Custom scrollbar */
    ::-webkit-scrollbar {
      width: 6px;
      height: 6px;
    }
    ::-webkit-scrollbar-track {
      background: transparent;
    }
    ::-webkit-scrollbar-thumb {
      background: #d1d5db;
      border-radius: 3px;
    }
    ::-webkit-scrollbar-thumb:hover {
      background: #9ca3af;
    }
    .dark ::-webkit-scrollbar-thumb {
      background: #4b5563;
    }
    .dark ::-webkit-scrollbar-thumb:hover {
      background: #6b7280;
    }
    
    @keyframes fadeIn {
      from { opacity: 0; transform: scale(0.95); }
      to { opacity: 1; transform: scale(1); }
    }
    .animate-fade-in {
      animation: fadeIn 0.2s ease-out;
    }
  `}</style>
);

// ============================================
// MAIN POPUP COMPONENT
// ============================================

const DesignHelperPopup: React.FC<HelpPopupProps> = ({
  isOpen,
  onClose,
  pageMetadata = {},
  className = '',
  defaultCategory = 'typography'
}) => {
  const [activeTab, setActiveTab] = useState(defaultCategory);
  const [searchQuery, setSearchQuery] = useState('');
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [favorites, setFavorites] = useState<string[]>([]);
  const [activeSubcategory, setActiveSubcategory] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const popupRef = useRef<HTMLDivElement>(null);

  const designData = useMemo(() => createDesignData(), []);

  // Get current category
  const currentCategory = useMemo(() => 
    designData.find(c => c.id === activeTab),
    [designData, activeTab]
  );

  // Filter tokens based on search and subcategory
  const getFilteredTokens = useMemo(() => {
    if (!currentCategory) return [];
    
    let filtered = currentCategory.tokens;
    
    if (searchQuery) {
      filtered = filtered.filter(token =>
        token.label.toLowerCase().includes(searchQuery.toLowerCase()) ||
        token.value.toLowerCase().includes(searchQuery.toLowerCase()) ||
        token.className.toLowerCase().includes(searchQuery.toLowerCase()) ||
        token.description?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        token.tags?.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }
    
    if (activeSubcategory) {
      filtered = filtered.filter(token => token.subcategory === activeSubcategory);
    }
    
    return filtered;
  }, [currentCategory, searchQuery, activeSubcategory]);

  // Copy to clipboard
  const copyToClipboard = async (text: string, id: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    } catch (err) {
      // Fallback
      const textarea = document.createElement('textarea');
      textarea.value = text;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    }
  };

  // Toggle favorite
  const toggleFavorite = (id: string) => {
    setFavorites(prev =>
      prev.includes(id) ? prev.filter(f => f !== id) : [...prev, id]
    );
  };

  // Get token ID
  const getTokenId = (token: DesignToken) => `${token.category}-${token.id}`;

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) onClose();
      if ((e.ctrlKey || e.metaKey) && e.key === 'f') {
        e.preventDefault();
        document.getElementById('search-input')?.focus();
      }
      if ((e.ctrlKey || e.metaKey) && e.key === 'd') {
        e.preventDefault();
        setIsDarkMode(prev => !prev);
      }
      if ((e.ctrlKey || e.metaKey) && e.key === 'g') {
        e.preventDefault();
        setViewMode(prev => prev === 'grid' ? 'list' : 'grid');
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Prevent body scroll
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <>
      <GlobalStyles />
      <div
        ref={popupRef}
        className={`fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in ${className}`}
        onClick={(e) => e.target === e.currentTarget && onClose()}
      >
        <div 
          className={`relative w-full max-w-7xl h-[90vh] rounded-2xl shadow-2xl overflow-hidden transition-all duration-300 ${
            isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'
          } ${isExpanded ? 'max-w-full h-screen rounded-none' : ''}`}
        >
          {/* Header */}
          <div className={`flex items-center justify-between p-4 border-b ${
            isDarkMode ? 'border-gray-700' : 'border-gray-200'
          }`}>
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500">
                <Code className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-lg font-bold">Design Helper Pro</h2>
                <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                  {designData.length} categories • {designData.reduce((acc, cat) => acc + cat.tokens.length, 0)} tokens
                </p>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              {pageMetadata.title && (
                <div className={`hidden md:block text-xs px-3 py-1 rounded-full ${
                  isDarkMode ? 'bg-gray-800' : 'bg-gray-100'
                }`}>
                  {pageMetadata.title}
                </div>
              )}
              
              <button
                onClick={() => setViewMode(prev => prev === 'grid' ? 'list' : 'grid')}
                className={`p-2 rounded-lg transition-colors ${
                  isDarkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-100'
                }`}
                title="Toggle View (Ctrl+G)"
              >
                {viewMode === 'grid' ? <List className="w-5 h-5" /> : <Grid className="w-5 h-5" />}
              </button>
              
              <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className={`p-2 rounded-lg transition-colors ${
                  isDarkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-100'
                }`}
                title="Toggle Dark Mode (Ctrl+D)"
              >
                {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
              
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className={`p-2 rounded-lg transition-colors ${
                  isDarkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-100'
                }`}
              >
                {isExpanded ? <Minimize2 className="w-5 h-5" /> : <Maximize2 className="w-5 h-5" />}
              </button>
              
              <button
                onClick={onClose}
                className={`p-2 rounded-lg transition-colors ${
                  isDarkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-100'
                }`}
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Search Bar */}
          <div className={`p-3 border-b ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
            <div className="relative">
              <Search className={`absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 ${
                isDarkMode ? 'text-gray-400' : 'text-gray-500'
              }`} />
              <input
                id="search-input"
                type="text"
                placeholder="Search tokens by name, class, or description... (Ctrl+F)"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={`w-full pl-10 pr-4 py-2 rounded-lg outline-none transition-colors ${
                  isDarkMode 
                    ? 'bg-gray-800 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500' 
                    : 'bg-gray-50 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-blue-500'
                }`}
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className={`absolute right-3 top-1/2 -translate-y-1/2 ${
                    isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  <X className="w-4 h-4" />
                </button>
              )}
              <div className={`absolute right-12 top-1/2 -translate-y-1/2 text-xs ${
                isDarkMode ? 'text-gray-500' : 'text-gray-400'
              }`}>
                {getFilteredTokens.length} results
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex h-[calc(100%-120px)]">
            {/* Sidebar */}
            <div className={`w-48 overflow-y-auto border-r ${
              isDarkMode ? 'border-gray-700' : 'border-gray-200'
            }`}>
              <div className="p-2">
                {designData.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => {
                      setActiveTab(category.id);
                      setActiveSubcategory(null);
                    }}
                    className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg transition-all ${
                      activeTab === category.id
                        ? isDarkMode
                          ? 'bg-blue-600 text-white'
                          : 'bg-blue-50 text-blue-600'
                        : isDarkMode
                          ? 'hover:bg-gray-800 text-gray-300'
                          : 'hover:bg-gray-50 text-gray-600'
                    }`}
                  >
                    {category.icon}
                    <span className="text-sm font-medium truncate">{category.label}</span>
                    <span className={`ml-auto text-xs px-1.5 py-0.5 rounded ${
                      activeTab === category.id
                        ? isDarkMode ? 'bg-blue-500' : 'bg-blue-200'
                        : isDarkMode ? 'bg-gray-700' : 'bg-gray-200'
                    }`}>
                      {category.tokens.length}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Content Area */}
            <div className={`flex-1 overflow-hidden ${
              isDarkMode ? 'bg-gray-900' : 'bg-gray-50'
            }`}>
              {/* Subcategories */}
              {currentCategory?.subcategories && currentCategory.subcategories.length > 0 && (
                <div className={`p-3 border-b ${
                  isDarkMode ? 'border-gray-700' : 'border-gray-200'
                }`}>
                  <div className="flex gap-1 overflow-x-auto">
                    <button
                      onClick={() => setActiveSubcategory(null)}
                      className={`px-3 py-1 text-xs rounded-full transition-all whitespace-nowrap ${
                        !activeSubcategory
                          ? isDarkMode
                            ? 'bg-blue-600 text-white'
                            : 'bg-blue-500 text-white'
                          : isDarkMode
                            ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                            : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
                      }`}
                    >
                      All
                    </button>
                    {currentCategory.subcategories.map((sub) => (
                      <button
                        key={sub.id}
                        onClick={() => setActiveSubcategory(sub.id)}
                        className={`px-3 py-1 text-xs rounded-full transition-all whitespace-nowrap ${
                          activeSubcategory === sub.id
                            ? isDarkMode
                              ? 'bg-blue-600 text-white'
                              : 'bg-blue-500 text-white'
                            : isDarkMode
                              ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                              : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
                        }`}
                      >
                        {sub.label}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Tokens Display */}
              <div className={`h-full overflow-y-auto p-4 ${
                viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4' : 'space-y-2'
              }`}>
                {getFilteredTokens.map((token) => {
                  const tokenId = getTokenId(token);
                  const isCopied = copiedId === tokenId;
                  const isFavorite = favorites.includes(tokenId);
                  const isShadow = token.category === 'effects' && token.subcategory === 'shadow';

                  return viewMode === 'grid' ? (
                    <div
                      key={tokenId}
                      className={`group relative p-4 rounded-xl transition-all duration-200 ${
                        isDarkMode 
                          ? 'bg-gray-800 hover:bg-gray-700' 
                          : 'bg-white hover:shadow-md'
                      }`}
                    >
                      {/* Token Preview - Enhanced for shadows */}
                      <div className="mb-3">
                        {isShadow ? (
                          <div className={`shadow-preview-box ${token.className}`}>
                            {token.preview || token.label}
                          </div>
                        ) : (
                          <div className={`p-2 rounded-lg ${token.className} ${
                            isDarkMode && token.category === 'colors' 
                              ? token.value.includes('bg-gray-100') 
                                ? 'text-gray-900' 
                                : token.value.includes('text-black') 
                                  ? 'text-black' 
                                  : ''
                              : ''
                          }`}>
                            {token.preview || token.label}
                          </div>
                        )}
                      </div>

                      {/* Token Info */}
                      <div className="flex items-start justify-between">
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2">
                            <span className="font-medium text-sm truncate">
                              {token.label}
                            </span>
                            {token.subcategory && (
                              <span className={`text-xs px-1.5 py-0.5 rounded ${
                                isDarkMode ? 'bg-gray-700' : 'bg-gray-200'
                              }`}>
                                {token.subcategory}
                              </span>
                            )}
                          </div>
                          <code className={`text-xs block truncate mt-1 font-mono ${
                            isDarkMode ? 'text-gray-400' : 'text-gray-500'
                          }`}>
                            {token.className}
                          </code>
                          {token.description && (
                            <p className={`text-xs mt-1 truncate ${
                              isDarkMode ? 'text-gray-500' : 'text-gray-400'
                            }`}>
                              {token.description}
                            </p>
                          )}
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="absolute top-2 right-2 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button
                          onClick={() => toggleFavorite(tokenId)}
                          className={`p-1.5 rounded-md transition-colors ${
                            isFavorite
                              ? 'text-yellow-500'
                              : isDarkMode
                                ? 'hover:bg-gray-600 text-gray-400'
                                : 'hover:bg-gray-100 text-gray-400'
                          }`}
                          title="Add to favorites"
                        >
                          <Heart className={`w-4 h-4 ${isFavorite ? 'fill-yellow-500' : ''}`} />
                        </button>
                        <button
                          onClick={() => copyToClipboard(token.className, tokenId)}
                          className={`p-1.5 rounded-md transition-colors ${
                            isCopied
                              ? 'text-green-500'
                              : isDarkMode
                                ? 'hover:bg-gray-600 text-gray-400'
                                : 'hover:bg-gray-100 text-gray-400'
                          }`}
                          title="Copy to clipboard"
                        >
                          {isCopied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                        </button>
                      </div>
                    </div>
                  ) : (
                    // List view
                    <div
                      key={tokenId}
                      className={`group flex items-center justify-between p-3 rounded-lg transition-all ${
                        isDarkMode 
                          ? 'hover:bg-gray-800' 
                          : 'hover:bg-gray-100'
                      }`}
                    >
                      <div className="flex items-center gap-4 flex-1 min-w-0">
                        {isShadow ? (
                          <div className={`w-20 h-12 rounded shadow-preview-box ${token.className}`}>
                            {token.preview || token.label}
                          </div>
                        ) : (
                          <div className={`w-20 h-12 rounded flex items-center justify-center ${token.className} ${
                            isDarkMode && token.category === 'colors' 
                              ? token.value.includes('bg-gray-100') 
                                ? 'text-gray-900' 
                                : token.value.includes('text-black') 
                                  ? 'text-black' 
                                  : ''
                              : ''
                          }`}>
                            {token.preview || token.label}
                          </div>
                        )}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2">
                            <span className="font-medium text-sm truncate">
                              {token.label}
                            </span>
                            {token.subcategory && (
                              <span className={`text-xs px-1.5 py-0.5 rounded ${
                                isDarkMode ? 'bg-gray-700' : 'bg-gray-200'
                              }`}>
                                {token.subcategory}
                              </span>
                            )}
                          </div>
                          <code className={`text-xs block truncate font-mono ${
                            isDarkMode ? 'text-gray-400' : 'text-gray-500'
                          }`}>
                            {token.className}
                          </code>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-2 ml-4">
                        <button
                          onClick={() => toggleFavorite(tokenId)}
                          className={`p-1.5 rounded-md transition-colors ${
                            isFavorite
                              ? 'text-yellow-500'
                              : isDarkMode
                                ? 'hover:bg-gray-700 text-gray-400'
                                : 'hover:bg-gray-200 text-gray-400'
                          }`}
                        >
                          <Heart className={`w-4 h-4 ${isFavorite ? 'fill-yellow-500' : ''}`} />
                        </button>
                        <button
                          onClick={() => copyToClipboard(token.className, tokenId)}
                          className={`p-1.5 rounded-md transition-colors ${
                            isCopied
                              ? 'text-green-500'
                              : isDarkMode
                                ? 'hover:bg-gray-700 text-gray-400'
                                : 'hover:bg-gray-200 text-gray-400'
                          }`}
                        >
                          {isCopied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                        </button>
                      </div>
                    </div>
                  );
                })}

                {/* Empty State */}
                {getFilteredTokens.length === 0 && (
                  <div className="col-span-full flex flex-col items-center justify-center h-64">
                    <div className={`p-4 rounded-full ${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
                      <Search className="w-8 h-8 text-gray-400" />
                    </div>
                    <h4 className="mt-4 text-lg font-medium">No tokens found</h4>
                    <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                      Try adjusting your search or filter
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className={`p-2 border-t ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
            <div className="flex items-center justify-between text-xs">
              <div className="flex items-center gap-4">
                <span className={isDarkMode ? 'text-gray-400' : 'text-gray-500'}>
                  <span className="font-medium">Tips:</span> Click to copy • 
                  <kbd className={`px-1.5 py-0.5 mx-1 rounded ${
                    isDarkMode ? 'bg-gray-800' : 'bg-gray-100'
                  }`}>Ctrl+F</kbd> search • 
                  <kbd className={`px-1.5 py-0.5 mx-1 rounded ${
                    isDarkMode ? 'bg-gray-800' : 'bg-gray-100'
                  }`}>Ctrl+D</kbd> dark mode • 
                  <kbd className={`px-1.5 py-0.5 mx-1 rounded ${
                    isDarkMode ? 'bg-gray-800' : 'bg-gray-100'
                  }`}>Ctrl+G</kbd> view toggle
                </span>
              </div>
              <div className="flex items-center gap-4">
                <span className={isDarkMode ? 'text-gray-400' : 'text-gray-500'}>
                  ❤️ {favorites.length} favorites
                </span>
                <span className={`px-2 py-0.5 rounded-full ${
                  isDarkMode ? 'bg-gray-800 text-gray-400' : 'bg-gray-100 text-gray-500'
                }`}>
                  v2.0.0
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

// ============================================
// USAGE COMPONENT
// ============================================

export const DesignHelper: React.FC<{ pageMetadata?: any }> = ({ pageMetadata }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-40 group flex items-center gap-2 px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
      >
        <Code className="w-5 h-5" />
        <span className="font-medium">Design Helper</span>
        <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      <DesignHelperPopup
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        pageMetadata={pageMetadata}
      />
    </>
  );
};

export default DesignHelperPopup;