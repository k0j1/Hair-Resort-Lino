import React from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { Home, Phone, Bell, Heart, Car, MapPin } from 'lucide-react';

export function ShopInfo() {
  return (
    <div className="py-xxl bg-transparent min-h-screen">
      <div className="max-w-4xl mx-auto px-md">
        <SectionHeading 
          title="Shop Info" 
          lineImageSrc="https://www.lino-hair-resort.com/images/hawaii-line.png" 
        />
        
        <div className="mb-xl rounded-lg overflow-hidden shadow-md">
          <img 
            src="https://www.lino-hair-resort.com/images/shop.jpg" 
            alt="Hair Resort Lino Shop" 
            className="w-full h-auto object-cover"
            onError={(e) => {
              e.currentTarget.src = 'https://picsum.photos/seed/salon/1200/600';
            }}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-md mb-xxl">
          <div className="bg-surface p-lg rounded-lg shadow-sm border border-border-light text-center flex flex-col items-center">
            <Home className="w-10 h-10 text-primary mb-md" />
            <h2 className="text-xl font-bold text-text mb-sm">Address</h2>
            <p className="text-text-muted">
              〒962-0816<br />
              福島県須賀川市朝日田52
            </p>
          </div>
          
          <div className="bg-surface p-lg rounded-lg shadow-sm border border-border-light text-center flex flex-col items-center">
            <Phone className="w-10 h-10 text-primary mb-md" />
            <h2 className="text-xl font-bold text-text mb-sm">Telephone</h2>
            <p className="text-text-muted">
              TEL. 0248-94-2212<br />
              （予約制）
            </p>
          </div>

          <div className="bg-surface p-lg rounded-lg shadow-sm border border-border-light text-center flex flex-col items-center">
            <Bell className="w-10 h-10 text-primary mb-md" />
            <h2 className="text-xl font-bold text-text mb-sm">Opening Hour</h2>
            <p className="text-text-muted">
              9:00 ～ 19:00<br />
              （時間外応相談）
            </p>
          </div>

          <div className="bg-surface p-lg rounded-lg shadow-sm border border-border-light text-center flex flex-col items-center">
            <Heart className="w-10 h-10 text-primary mb-md" />
            <h2 className="text-xl font-bold text-text mb-sm">Closed Day</h2>
            <p className="text-text-muted">
              毎週月曜日・<br />
              第１・３火曜日
            </p>
          </div>

          <div className="bg-surface p-lg rounded-lg shadow-sm border border-border-light text-center flex flex-col items-center">
            <Car className="w-10 h-10 text-primary mb-md" />
            <h2 className="text-xl font-bold text-text mb-sm">Parking</h2>
            <p className="text-text-muted">
              数台分あり
            </p>
          </div>

          <div className="bg-surface p-lg rounded-lg shadow-sm border border-border-light text-center flex flex-col items-center">
            <MapPin className="w-10 h-10 text-primary mb-md" />
            <h2 className="text-xl font-bold text-text mb-sm">Area Info</h2>
            <p className="text-text-muted">
              須賀川市立第三中前<br />
              須賀川牡丹園徒歩3分
            </p>
          </div>
        </div>

        <SectionHeading 
          title="Map" 
          lineImageSrc="https://www.lino-hair-resort.com/images/line_honu_0.png" 
        />
        
        <div className="rounded-lg overflow-hidden shadow-md border border-border-light h-[400px]">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3174.713210863734!2d140.3841297515377!3d37.278227248244235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x602040fc483e2ccd%3A0x95099531b49aa00c!2z44CSOTYyLTA4MTYg56aP5bO255yM6aCI6LOA5bed5biC5pyd5pel55Sw77yV77yS!5e0!3m2!1sja!2sjp!4v1459442297760" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={false} 
            loading="lazy"
            title="Google Maps Location"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
