import React from 'react';
import { Facebook, Instagram, Phone, Globe, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer className="relative bg-surface pt-xxl pb-lg border-t-0">
      {/* Waves Container */}
      <div className="absolute top-0 left-0 w-full overflow-hidden -mt-[14vh] h-[15vh] min-h-[100px] max-h-[300px] z-0 pointer-events-none">
        <svg 
          className="w-full h-full" 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 24 150 28" 
          preserveAspectRatio="none" 
          shapeRendering="auto"
        >
          <defs>
            <path 
              id="gentle-wave" 
              d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" 
            />
          </defs>
          <g className="animate-[move-forever_25s_cubic-bezier(.55,.5,.45,.5)_infinite]">
            <use href="#gentle-wave" x="48" y="0" fill="rgba(243,243,243,0.7)" className="animate-[move-forever_7s_cubic-bezier(.55,.5,.45,.5)_infinite_-2s]" />
            <use href="#gentle-wave" x="48" y="3" fill="rgba(243,243,243,0.5)" className="animate-[move-forever_10s_cubic-bezier(.55,.5,.45,.5)_infinite_-3s]" />
            <use href="#gentle-wave" x="48" y="5" fill="rgba(243,243,243,0.3)" className="animate-[move-forever_13s_cubic-bezier(.55,.5,.45,.5)_infinite_-4s]" />
            <use href="#gentle-wave" x="48" y="7" fill="#f3f3f3" className="animate-[move-forever_20s_cubic-bezier(.55,.5,.45,.5)_infinite_-5s]" />
          </g>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-md relative z-10">
        {/* Social Links */}
        <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-md mb-xl border-b border-border-light pb-lg">
          <span className="text-text font-medium uppercase tracking-wider">Follow us:</span>
          <div className="flex items-center gap-md">
            <a 
              href="https://www.facebook.com/saori.yoshita" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-background flex items-center justify-center text-text hover:text-primary hover:bg-surface shadow-sm transition-all"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a 
              href="https://www.instagram.com/saoriii.lino/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-background flex items-center justify-center text-text hover:text-primary hover:bg-surface shadow-sm transition-all"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-xl mb-xl">
          {/* Concept */}
          <div className="md:col-span-4">
            <h4 className="text-lg font-bold uppercase tracking-wider mb-md text-text">concept</h4>
            <p className="text-sm leading-loose text-text-muted">
              <span className="font-bold italic">プチリゾート気分でくつろげる<br />癒しのプライベートサロン</span><br /><br />
              <span className="text-primary font-bold">「Lino」</span>はハワイ語で<span className="text-secondary font-bold">「光り輝く」</span>という意味。ここに訪れた人の魅力を引き出したい…そんな思いのこもった Lino ではヘアスタイルをはじめ、あなたのキレイを引き出すトータルビューティーが叶います。
            </p>
          </div>

          {/* Information */}
          <div className="md:col-span-4">
            <h4 className="text-lg font-bold uppercase tracking-wider mb-md text-text">Information</h4>
            <ul className="space-y-sm text-sm">
              <li className="flex gap-sm">
                <span className="text-primary font-medium">2017/03/15</span>
                <a href="https://www.fukulabo.net/shop/shop.shtml?s=6044&e=4350" className="text-accent hover:text-primary transition-colors">ふくラボ!特集②</a>
              </li>
              <li className="flex gap-sm">
                <span className="text-primary font-medium">2017/03/03</span>
                <a href="https://www.fukulabo.net/shop/shop.shtml?s=6044&e=4336" className="text-accent hover:text-primary transition-colors">ふくラボ!特集①</a>
              </li>
              <li className="flex gap-sm">
                <span className="text-primary font-medium">2017/02/26</span>
                <Link to="/menu" className="text-accent hover:text-primary transition-colors">クーポン配信</Link>
              </li>
              <li className="flex gap-sm">
                <span className="text-primary font-medium">2016/06/01</span>
                <Link to="/" className="text-accent hover:text-primary transition-colors">ホームページ開設</Link>
              </li>
              <li className="flex gap-sm">
                <span className="text-primary font-medium">2016/05/13</span>
                <a href="https://www.fukulabo.net/shop/shop.shtml?s=6044" className="text-accent hover:text-primary transition-colors">ふくラボ!掲載</a>
              </li>
            </ul>
          </div>

          {/* Shop Info */}
          <div className="md:col-span-4">
            <h4 className="text-lg font-bold uppercase tracking-wider mb-md text-text">Shop Info</h4>
            <p className="text-sm text-text-muted mb-md">予約制のためお電話にて予約承ります</p>
            <ul className="space-y-md text-sm text-text-muted">
              <li className="flex items-start gap-sm">
                <Phone className="w-5 h-5 text-text shrink-0" />
                <span>0248-94-2212</span>
              </li>
              <li className="flex items-start gap-sm">
                <Globe className="w-5 h-5 text-text shrink-0" />
                <span>〒962-0816<br />福島県須賀川市朝日田52</span>
              </li>
              <li className="flex items-start gap-sm">
                <Mail className="w-5 h-5 text-text shrink-0" />
                <a href="mailto:hair.resort.lino@gmail.com" className="hover:text-primary transition-colors">hair.resort.lino@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-sm text-text-muted border-t border-border-light pt-lg">
          <p>Copyright &copy; 2016-2026 <Link to="/" className="hover:text-primary transition-colors">Hair Resort Lino</Link></p>
        </div>
      </div>
    </footer>
  );
};
