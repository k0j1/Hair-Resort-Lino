import React from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { Heart } from 'lucide-react';

export function Staff() {
  return (
    <div className="py-xxl bg-background min-h-screen">
      <div className="max-w-4xl mx-auto px-md">
        <SectionHeading 
          title="Owner" 
          lineImageSrc="https://www.lino-hair-resort.com/images/hawaii-line.png" 
        />
        
        <div className="bg-surface rounded-lg shadow-md border border-border-light overflow-hidden flex flex-col md:flex-row">
          <div className="md:w-1/3">
            <img 
              src="https://www.lino-hair-resort.com/images/staff.jpg" 
              alt="Yoshita Saori" 
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.src = 'https://picsum.photos/seed/staff/600/800';
              }}
            />
          </div>
          <div className="md:w-2/3 p-lg md:p-xl flex flex-col justify-center">
            <ul className="space-y-md">
              <li className="flex items-start">
                <Heart className="w-5 h-5 text-primary mr-sm mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-bold text-text">名　　前</h3>
                  <p className="text-text-muted">吉田　沙織（よした　さおり）</p>
                </div>
              </li>
              <li className="flex items-start">
                <Heart className="w-5 h-5 text-primary mr-sm mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-bold text-text">生年月日</h3>
                  <p className="text-text-muted">1986年11月17日</p>
                </div>
              </li>
              <li className="flex items-start">
                <Heart className="w-5 h-5 text-primary mr-sm mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-bold text-text">出身地</h3>
                  <p className="text-text-muted">福島県須賀川市</p>
                </div>
              </li>
              <li className="flex items-start">
                <Heart className="w-5 h-5 text-primary mr-sm mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-bold text-text">得意技術</h3>
                  <p className="text-text-muted">似合せカラー、お手入れしやすいショート</p>
                </div>
              </li>
              <li className="flex items-start">
                <Heart className="w-5 h-5 text-primary mr-sm mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-bold text-text">好　　物</h3>
                  <p className="text-text-muted">お刺身、ステーキ</p>
                </div>
              </li>
              <li className="flex items-start">
                <Heart className="w-5 h-5 text-primary mr-sm mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-bold text-text">趣　　味</h3>
                  <p className="text-text-muted">ゴルフ、フラダンス</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
