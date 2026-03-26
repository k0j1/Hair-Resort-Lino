/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { MobileFooterNav } from './components/MobileFooterNav';
import { Home } from './pages/Home';
import { Menu } from './pages/Menu';
import { ShopInfo } from './pages/ShopInfo';
import { Staff } from './pages/Staff';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col font-sans text-text bg-background pb-16 md:pb-0 relative">
        {/* Hawaii-themed Background */}
        <div className="fixed inset-0 z-[-1] opacity-20 pointer-events-none">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="sky-sea-sand" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#87CEEB" /> {/* Sky Blue */}
                <stop offset="60%" stopColor="#0077BE" /> {/* Ocean Blue */}
                <stop offset="100%" stopColor="#F4A460" /> {/* Sand */}
              </linearGradient>
            </defs>
            <rect width="100%" height="100%" fill="url(#sky-sea-sand)" />
            {/* Wave */}
            <path d="M0 60 Q 25 40, 50 60 T 100 60 T 150 60 T 200 60 V 100 H 0 Z" fill="#00BFFF" opacity="0.3" />
          </svg>
        </div>
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/shop_info" element={<ShopInfo />} />
            <Route path="/staff" element={<Staff />} />
          </Routes>
        </main>
        <Footer />
        <MobileFooterNav />
      </div>
    </Router>
  );
}
