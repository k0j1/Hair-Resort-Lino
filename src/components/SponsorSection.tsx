import React from 'react';
import { SectionHeading } from './SectionHeading';

const sponsors = [
  {
    id: 1,
    title: 'ふくラボ！',
    subtitle: '☆特集記事あり☆クーポンあり☆',
    image: 'https://www.lino-hair-resort.com/images/Fukulabo_Top.jpg',
    link: 'https://www.fukulabo.net/shop/shop.shtml?s=6044',
    description: '「ふくしま」の「ラボラトリー（研究所）」。略してふくラボ！は、視聴者のみなさんから、福島県に関するステキなクチコミが集まった、ふくしまがもっと元気になる地域総合情報サイトです。',
  },
  {
    id: 2,
    title: 'エキテン',
    subtitle: '☆評価あり☆口コミあり☆',
    image: 'https://www.lino-hair-resort.com/images/Ekiten_Top.jpg',
    link: 'https://www.ekiten.jp/shop_7163039/',
    description: '口コミサイト　エキテン。ランキング掲載店。',
  },
  {
    id: 3,
    title: 'aruku',
    subtitle: '☆クーポンあり☆特集あり☆',
    image: 'https://www.lino-hair-resort.com/images/Aruku_Top.jpg',
    link: 'https://www.arukunet.jp/beauty/52126/',
    description: '読者110,000名! ARUKUアンテナ月間PV数160,000件以上! 福島県内20代〜40代の女性読者に圧倒的人気！',
  },
];

export const SponsorSection: React.FC = () => {
  return (
    <section id="sponsor" className="py-xxl bg-transparent">
      <div className="max-w-4xl mx-auto px-md">
        <SectionHeading 
          title="Sponsor Site" 
          lineImageSrc="https://www.lino-hair-resort.com/images/line_honu_0.png" 
        />
        
        <div className="flex flex-col gap-lg">
          {sponsors.map((sponsor) => (
            <div key={sponsor.id} className="bg-surface/80 backdrop-blur-sm rounded-lg shadow-sm overflow-hidden flex flex-col md:flex-row hover:shadow-md transition-shadow">
              <div className="md:w-1/3 overflow-hidden bg-white flex items-center justify-center p-md">
                <img 
                  src={sponsor.image} 
                  alt={sponsor.title} 
                  className="max-w-full max-h-full object-contain"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = `https://picsum.photos/seed/sponsor${sponsor.id}/300/150`;
                  }}
                />
              </div>
              <div className="p-lg md:w-2/3 flex flex-col justify-center">
                <h4 className="text-xl font-serif font-bold text-text mb-xs">
                  <a href={sponsor.link} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                    {sponsor.title}
                  </a>
                </h4>
                <span className="text-sm font-serif font-bold text-secondary mb-md block">
                  {sponsor.subtitle}
                </span>
                <p className="text-sm font-serif text-text-muted leading-relaxed">
                  {sponsor.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
