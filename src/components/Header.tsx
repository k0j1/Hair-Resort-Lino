import React, { useState } from 'react';
import { Home, Building2, User, Scissors, Menu as MenuIcon, X } from 'lucide-react';

export const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', icon: <Home className="w-4 h-4 mr-2" />, href: '#home' },
    { label: 'Menu', icon: <Scissors className="w-4 h-4 mr-2" />, href: '#menu', isNew: true },
    { label: 'Shop Info', icon: <Building2 className="w-4 h-4 mr-2" />, href: '#shop_info' },
    { label: 'Staff', icon: <User className="w-4 h-4 mr-2" />, href: '#staff' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-background/90 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-md h-20 flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center gap-sm">
          <img 
            src="https://www.lino-hair-resort.com/images/hibiscus-brenda-hi.png" 
            alt="Hibiscus" 
            className="h-10 w-auto object-contain"
            referrerPolicy="no-referrer"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = 'none';
            }}
          />
          <a href="#home" className="flex items-center">
            <img 
              src="https://www.lino-hair-resort.com/images/logo.png" 
              alt="Hair Resort Lino" 
              className="h-8 w-auto object-contain"
              referrerPolicy="no-referrer"
              onError={(e) => {
                (e.target as HTMLImageElement).src = 'https://picsum.photos/seed/logo/200/50';
              }}
            />
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-lg">
          {navItems.map((item) => (
            <a 
              key={item.label} 
              href={item.href}
              className="flex items-center text-text hover:text-primary transition-colors text-sm font-medium uppercase tracking-wider"
            >
              {item.icon}
              {item.label}
              {item.isNew && (
                <span className="ml-2 text-xs text-danger font-bold">New</span>
              )}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden p-2 text-text hover:text-primary"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background border-b border-border absolute w-full left-0 top-20 shadow-md">
          <nav className="flex flex-col py-sm">
            {navItems.map((item) => (
              <a 
                key={item.label} 
                href={item.href}
                className="flex items-center px-lg py-md text-text hover:bg-surface hover:text-primary transition-colors text-sm font-medium uppercase tracking-wider border-b border-border-light last:border-0"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.icon}
                {item.label}
                {item.isNew && (
                  <span className="ml-2 text-xs text-danger font-bold">New</span>
                )}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};
