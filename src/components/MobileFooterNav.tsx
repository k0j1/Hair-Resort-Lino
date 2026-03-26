import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Scissors, Building2, User } from 'lucide-react';

export const MobileFooterNav: React.FC = () => {
  const location = useLocation();

  const navItems = [
    { label: 'HOME', icon: <Home className="w-5 h-5 mb-1" />, path: '/' },
    { label: 'MENU', icon: <Scissors className="w-5 h-5 mb-1" />, path: '/menu' },
    { label: 'SHOP', icon: <Building2 className="w-5 h-5 mb-1" />, path: '/shop_info' },
    { label: 'STAFF', icon: <User className="w-5 h-5 mb-1" />, path: '/staff' },
  ];

  return (
    <div className="md:hidden fixed bottom-0 left-0 w-full bg-background border-t border-border-light shadow-[0_-2px_10px_rgba(0,0,0,0.05)] z-50">
      <div className="flex justify-around items-center h-16">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return item.label === 'HOME' ? (
            <button
              key={item.label}
              onClick={() => {
                window.location.href = window.location.origin + window.location.pathname;
              }}
              className={`flex flex-col items-center justify-center w-full h-full text-xs font-medium transition-colors ${
                isActive ? 'text-primary' : 'text-text-muted hover:text-text'
              }`}
            >
              {item.icon}
              {item.label}
            </button>
          ) : (
            <Link
              key={item.label}
              to={item.path}
              className={`flex flex-col items-center justify-center w-full h-full text-xs font-medium transition-colors ${
                isActive ? 'text-primary' : 'text-text-muted hover:text-text'
              }`}
            >
              {item.icon}
              {item.label}
            </Link>
          );
        })}
      </div>
    </div>
  );
};
