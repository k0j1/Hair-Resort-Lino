import React from 'react';
import { SectionHeading } from './SectionHeading';
import { ChevronsRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const menuItems = [
  { id: 1, price: '¥4,000', label: 'カット', link: '/menu' },
  { id: 2, price: '¥8,000〜', label: 'パーマ+カット', link: '/menu' },
  { id: 3, price: '¥9,000〜 ¥15,000', label: 'ストレートパーマ+カット', link: '/menu' },
  { id: 4, price: '¥8,100〜', label: 'カラー＋カット', link: '/menu' },
  { id: 5, price: '¥4,000', label: 'まつげエクステ (80本)', link: '/menu' },
  { id: 6, price: '¥6,000', label: '着付　留袖', link: '/menu' },
  { id: 7, price: '¥2,500', label: 'エステ　フェイシャルトリートメント (30分)', link: '/menu' },
  { id: 8, price: '¥2,000', label: 'ヘッドスパ', link: '/menu' },
  { id: 9, price: '¥2,000', label: 'トリートメント', link: '/menu' },
  { id: 10, price: '¥3,500', label: 'ヘアセット', link: '/menu' },
  { id: 11, price: '¥2,000', label: 'メイク', link: '/menu' },
];

export const MenuSection: React.FC = () => {
  return (
    <section id="menu" className="py-xxl bg-transparent">
      <div className="max-w-4xl mx-auto px-md">
        <SectionHeading 
          title="Menu" 
          lineImageSrc="https://www.lino-hair-resort.com/images/hawaii-line.png" 
        />
        
        <div className="bg-surface/80 backdrop-blur-sm rounded-lg shadow-sm p-lg md:p-xl border border-border-light relative overflow-hidden">
          <ul className="space-y-md relative z-10">
            {menuItems.map((item) => (
              <li 
                key={item.id} 
                className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-border-light pb-sm last:border-0 last:pb-0 group"
              >
                <span className="text-primary font-serif font-bold text-xl tracking-wider mb-xs sm:mb-0 sm:w-1/3">
                  {item.price}
                </span>
                <Link 
                  to={item.link} 
                  className="text-text font-serif group-hover:text-primary transition-colors text-lg sm:w-2/3 sm:text-right"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="mt-lg text-right">
          <Link 
            to="/menu" 
            className="inline-flex items-center text-accent-dark hover:text-primary transition-colors text-lg font-serif italic"
          >
            <ChevronsRight className="w-5 h-5 mr-1" />
            もっと見る
          </Link>
        </div>
      </div>
    </section>
  );
};
