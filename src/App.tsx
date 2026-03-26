/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
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
      <div className="min-h-screen flex flex-col font-sans text-text bg-transparent pb-16 md:pb-0 relative">
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
