import { Bell, Search, User } from "lucide-react";

export type TopBarsProps = {
  className?: string;
  logoClass?: string;
  logo?: React.ReactNode;
};
export default function TopBars(topBarProps: TopBarsProps) {
  return (
    <div className={`top-bar ${topBarProps?.className} shadow-[0_16px_32px_rgba(0,0,0,0.15),0_10px_20px_rgba(0,0,0,0.1)]`}>
      <div className={topBarProps?.logoClass}>
        {topBarProps?.logo}
      </div>
      <div className="top-bar-right flex items-center gap-4">
        <div className="searchBar flex p-3 shadow-[0_16px_32px_rgba(0,0,0,0.15),0_10px_20px_rgba(0,0,0,0.1)] rounded-lg">
          <Search className="search-icon" />
          <input type="text" placeholder="Search..." className="searchInput px-4 focus:outline-none focus:ring-0" />
        </div>
        <div className="notification rounded-xl shadow-[0_16px_32px_rgba(0,0,0,0.15),0_10px_20px_rgba(0,0,0,0.1)] p-3">
          <Bell className="notification-icon" />
        </div>
        <div className="profile rounded-xl shadow-[0_16px_32px_rgba(0,0,0,0.15),0_10px_20px_rgba(0,0,0,0.1)] p-3">
          <User className="profile-icon" />
        </div>
      </div>
    </div>
  );
}
