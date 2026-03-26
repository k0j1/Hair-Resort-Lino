import React from 'react';
import { Home, Scissors, Building2, User } from 'lucide-react';

export const MobileFooterNav: React.FC = () => {
  const navItems = [
    { label: 'HOME', icon: <Home className="w-5 h-5 mb-1" />, href: '#home' },
    { label: 'MENU', icon: <Scissors className="w-5 h-5 mb-1" />, href: '#menu' },
    { label: 'SHOP', icon: <Building2 className="w-5 h-5 mb-1" />, href: '#shop_info' },
    { label: 'STAFF', icon: <User className="w-5 h-5 mb-1" />, href: '#staff' },
  ];

  return (
    <div className="md:hidden fixed bottom-0 left-0 w-full bg-background border-t border-border-light shadow-[0_-2px_10px_rgba(0,0,0,0.05)] z-50">
      <div className="flex justify-around items-center h-16">
        {navItems.map((item) => {
          return (
            <a
              key={item.label}
              href={item.href}
              className="flex flex-col items-center justify-center w-full h-full text-xs font-medium transition-colors text-text-muted hover:text-text"
            >
              {item.icon}
              {item.label}
            </a>
          );
        })}
      </div>
    </div>
  );
};
