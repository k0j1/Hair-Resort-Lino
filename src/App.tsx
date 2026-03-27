import React, { useEffect, useState } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import liff from '@line/liff';
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

function AppContent() {
  const [isLineClient, setIsLineClient] = useState(false);
  const [userProfile, setUserProfile] = useState<{ displayName: string } | null>(null);

  useEffect(() => {
    const initApp = async () => {
      try {
        // 1. LIFFの初期化
        await liff.init({ liffId: "2009618832-OVR5tfpb" });

        // 2. LINEアプリ内（LIFF）で開いているか判定
        if (liff.isInClient()) {
          console.log("LINEから起動されました");
          setIsLineClient(true);
          
          if (!liff.isLoggedIn()) {
            liff.login({ redirectUri: window.location.origin + '/' });
          } else {
            const profile = await liff.getProfile();
            setUserProfile(profile);
          }
        } else {
          console.log("普通のブラウザで起動されました");
          setIsLineClient(false);
        }
      } catch (err) {
        // LIFFの読み込みに失敗した場合（PCブラウザなど）
        console.error("LIFF初期化失敗、またはブラウザ環境です:", err);
        setIsLineClient(false);
      }
    };

    initApp();
  }, []);

  return (
    <div className="min-h-screen flex flex-col font-sans text-text bg-transparent pb-16 md:pb-0 relative">
      <Header userProfile={userProfile} />
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
  );
}

export default function App() {
  return (
    <Router basename="/">
      <ScrollToTop />
      <AppContent />
    </Router>
  );
}
