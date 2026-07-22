"use client";

import Logo from "@/src/components/logo/Logo";
import TopBars, { TopBarsProps } from "./TopBars";
import { BoxShadow } from "@/src/components/design/boxshdow/box-shadow";
import { useState } from "react";
import {
  Rocket,
  Zap,
  Shield,
  Users,
  Award,
  Star,
  Type,
  Palette,
  Layout,
  Download,
  Settings,
  Share2,
  ChevronLeft,
} from "lucide-react";
import FullScreenPopup from "@/src/components/modal/full-screen-popup/FullScreenPopup";
import { DesignHelper } from "@/src/components/design/DesignHelperPopup/DesignHelperPopup";
import CardPlayground from "../cards/CardPlayground";
import Card, { CardProps } from "@/src/components/card/Card";

export default function TopBarView() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("typography");
  const [search, setSearch] = useState("");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [darkMode, setDarkMode] = useState(false);
  const [favorites, setFavorites] = useState<string[]>([]);

  const categories = [
    {
      id: "typography",
      label: "Typography",
      icon: <Type className="w-4 h-4" />,
      tokens: [],
    },
    {
      id: "colors",
      label: "Colors",
      icon: <Palette className="w-4 h-4" />,
      tokens: [],
    },
    {
      id: "layout",
      label: "Layout",
      icon: <Layout className="w-4 h-4" />,
      tokens: [],
    },
  ];

  const topBarProps: TopBarsProps = {
    className: "bg-white-500 w-full flex flex-row justify-between items-center",
    logoClass: "p-4",
    logo: <Logo />,
  };
  const pageMetadata = {
    title: "Dashboard",
    description: "Analytics Dashboard",
    keywords: ["dashboard", "analytics", "data"],
    author: "Your Name",
    version: "1.0.0",
  };
  //   const pageMetadata = {
  //     title: 'Dashboard',
  //     description: 'Analytics Dashboard',
  //     keywords: ['dashboard', 'analytics', 'data']
  //   };

  const cardProps: CardProps = {
    variant: "gradient",
    header: "Mark Zuckerberg",
    body: "Mark Elliot Zuckerberg (/ˈzʌkərbɜːrɡ/; born May 14, 1984) is an American businessman and programmer who co-founded the social media service Facebook and its parent company Meta Platforms. He is its chairman, chief executive officer (CEO), and controlling shareholder.",
    footer: "✨ Premium",
    clickable: true,
    border: false,
    hoverable: true,
    animate: true,
    shadow: "lg",
    rounded: "2xl",
    size: "2xl",
  };
  return (
    <div>
      <TopBars {...topBarProps} />
      {/* <BoxShadow /> */}
      {/* <button onClick={() => setIsOpen(true)}>Open Popup</button> */}

      <div className="min-h-screen bg-gray-50 p-8">
        {/* <button
          onClick={() => setIsOpen(true)}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Open Full Screen Popup
        </button>
        <Card {...cardProps} /> */}
        {/* <Card
          header={{
            title: "❤️ Wishlist",
            subtitle: "5 saved items",
            action: "<span class='text-sm text-blue-600'>View All</span>",
          }}
          body={
            <>
              <div className="grid grid-cols-2 gap-2">
                <div className="relative">
                  <img
                    src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=200"
                    alt="Product"
                    className="w-full h-32 object-cover rounded-lg"
                  />
                  <div className="absolute top-1 right-1 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs">
                    ❤️
                  </div>
                </div>
                <div className="relative">
                  <img
                    src="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=200"
                    alt="Product"
                    className="w-full h-32 object-cover rounded-lg"
                  />
                  <div className="absolute top-1 right-1 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs">
                    ❤️
                  </div>
                </div>
                <div className="relative">
                  <img
                    src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=200"
                    alt="Product"
                    className="w-full h-32 object-cover rounded-lg"
                  />
                  <div className="absolute top-1 right-1 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs">
                    ❤️
                  </div>
                </div>
                <div className="bg-gray-100 rounded-lg flex items-center justify-center h-32 cursor-pointer hover:bg-gray-200 transition-colors">
                  <span className="text-2xl">+2</span>
                </div>
              </div>
            </>
          }
          padding="md"
          rounded="xl"
          shadow="sm"
        /> */}
        <CardPlayground />
        <FullScreenPopup
          open={isOpen}
          onClose={() => setIsOpen(false)}
          title="Design Helper"
          subtitle="Complete design system"
          leftActions={[
            {
              icon: <ChevronLeft className="w-4 h-4" />,
              label: "Back",
              onClick: () => console.log("Back"),
              variant: "secondary",
            },
          ]}
          rightActions={[
            {
              icon: <Share2 className="w-4 h-4" />,
              label: "Share",
              onClick: () => console.log("Share"),
            },
            {
              icon: <Settings className="w-4 h-4" />,
              label: "Settings",
              onClick: () => console.log("Settings"),
            },
          ]}
          tabs={categories.map((cat) => ({
            id: cat.id,
            label: cat.label,
            icon: cat.icon,
            count: 10,
          }))}
          activeTab={activeTab}
          onTabChange={setActiveTab}
          showSearch={true}
          searchValue={search}
          onSearchChange={setSearch}
          searchPlaceholder="Search tokens... (⌘F)"
          viewMode={viewMode}
          onViewModeChange={setViewMode}
          showFavorites={true}
          favorites={favorites}
          onFavoriteToggle={(id) => {
            setFavorites((prev) =>
              prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id],
            );
          }}
          darkMode={darkMode}
          onDarkModeToggle={() => setDarkMode(!darkMode)}
          metadata={{
            totalItems: 150,
            filteredItems: 45,
            version: "2.0.0",
          }}
          footer={
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-500">
                💡 Press ⌘F to search • ⌘D for dark mode
              </span>
            </div>
          }
          footerActions={[
            {
              icon: <Download className="w-4 h-4" />,
              label: "Export",
              onClick: () => console.log("Export"),
              variant: "primary",
            },
          ]}
          closeOnOverlayClick={true}
          closeOnEscape={true}
          maxWidth="2xl"
        >
          {/* Main Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div
                key={item}
                className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
              >
                <h3 className="font-medium">Token {item}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Description
                </p>
                <code className="text-xs block mt-2 bg-gray-100 dark:bg-gray-700 p-2 rounded">
                  class-name-{item}
                </code>
              </div>
            ))}
          </div>
        </FullScreenPopup>
        <DesignHelper pageMetadata={pageMetadata} />
      </div>
    </div>
  );
}
