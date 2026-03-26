import React, { useState } from 'react';
import { SectionHeading } from '../components/SectionHeading';

const menuCategories = [
  { id: 'all', label: 'すべて' },
  { id: 'cut', label: 'カット' },
  { id: 'perm', label: 'パーマ' },
  { id: 'color', label: 'カラー' },
  { id: 'ext', label: 'エクステ' },
  { id: 'wear', label: '着付' },
  { id: 'este', label: 'エステ' },
  { id: 'other', label: 'その他' },
];

const fullMenuItems = [
  { category: 'cut', items: [
    { price: '¥4,000', label: 'カット' },
    { price: '¥3,500', label: 'カット (大学生・専門学生)' },
    { price: '¥3,000', label: 'カット (中学生・高校生)' },
    { price: '¥2,500', label: 'カット (小学生)' },
    { price: '¥2,000', label: 'カット (幼児)' },
    { price: '¥500', label: '前髪カット' },
  ]},
  { category: 'perm', items: [
    { price: '¥8,000', label: 'パーマ+カット' },
    { price: '¥9,000〜 ¥15,000', label: 'ストレートパーマ+カット' },
    { price: '¥4,500', label: 'ストレートパーマ(部分)' },
    { price: '¥3,000', label: 'ストレートパーマ(前髪)' },
  ]},
  { category: 'color', items: [
    { price: '¥8,100', label: 'カラー＋カット' },
    { price: '¥8,000', label: '酸性カラー+カット' },
    { price: '+¥500', label: 'ロング' },
    { price: '+¥500', label: 'イルミナカラー' },
    { price: '¥5,800', label: 'カラー' },
    { price: '¥5,000', label: 'カラー (リタッチ)' },
    { price: '¥6,100', label: '酸性カラー' },
    { price: 'デザインにより', label: 'ブリーチ' },
    { price: '¥300', label: 'ブリーチホイル1枚' },
  ]},
  { category: 'ext', items: [
    { price: '¥4,000', label: 'まつげエクステ (80本)' },
    { price: '¥5,000', label: 'まつげエクステ (100本)' },
    { price: '¥6,000', label: 'まつげエクステ (120本)' },
    { price: '¥6,800', label: 'まつげエクステ (つけ放題)' },
  ]},
  { category: 'wear', items: [
    { price: '¥6,000', label: '着付　留袖' },
    { price: '¥7,800', label: '着付　振袖' },
    { price: '¥5,000', label: '着付　袴' },
  ]},
  { category: 'este', items: [
    { price: '¥2,500', label: 'エステ　フェイシャルトリートメント (30分)' },
    { price: '¥5,000', label: 'エステ　オイルリンパマッサージ (60分)' },
    { price: '¥7,000', label: 'エステ　スペシャルコース (80分)' },
    { price: '¥20,000', label: '成人式　振袖・セット、七五三、メイク、etc' },
  ]},
  { category: 'other', items: [
    { price: '¥2,000', label: 'ヘッドスパ' },
    { price: '¥2,000', label: 'トリートメント' },
    { price: '¥2,500', label: 'シャンプーブロー' },
    { price: '¥3,300', label: 'シェービングのみ' },
    { price: '+¥1,000', label: '他のメニュー+シェービング' },
    { price: '¥3,500', label: 'ヘアセット' },
    { price: '¥2,000', label: 'メイク' },
    { price: '¥1,000', label: 'ポイントメイク' },
    { price: '+¥1,000', label: '早朝料金' },
  ]}
];

export function Menu() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredCategories = activeFilter === 'all' 
    ? fullMenuItems 
    : fullMenuItems.filter(cat => cat.category === activeFilter);

  return (
    <div className="py-xxl bg-transparent min-h-screen">
      <div className="max-w-4xl mx-auto px-md">
        <SectionHeading 
          title="Menu" 
          lineImageSrc="https://www.lino-hair-resort.com/images/hawaii-line.png" 
        />
        
        <div className="mb-lg">
          <div className="flex flex-wrap justify-center gap-sm">
            {menuCategories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveFilter(cat.id)}
                className={`px-md py-xs rounded-full border transition-colors ${
                  activeFilter === cat.id 
                    ? 'bg-primary text-white border-primary' 
                    : 'bg-surface text-text border-border-light hover:border-primary'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        <div className="text-right text-sm text-text-muted mb-md">
          ※金額はすべて税抜き価格です。
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-lg">
          {filteredCategories.map((cat, idx) => (
            <div key={idx} className="bg-surface rounded-lg shadow-sm p-lg border border-border-light">
              <h3 className="text-xl font-bold text-primary mb-md border-b border-border-light pb-xs">
                {menuCategories.find(c => c.id === cat.category)?.label}
              </h3>
              <ul className="space-y-sm">
                {cat.items.map((item, itemIdx) => (
                  <li key={itemIdx} className="flex justify-between items-center border-b border-border-light pb-xs last:border-0 last:pb-0">
                    <span className="text-primary font-bold">{item.price}</span>
                    <span className="text-text text-right">{item.label}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
