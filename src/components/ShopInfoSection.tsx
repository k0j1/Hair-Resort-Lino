import React, { useState, useEffect } from 'react';
import { SectionHeading } from './SectionHeading';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const infoSlides = [
  {
    id: 1,
    content: (
      <div className="flex flex-col items-center justify-center p-md">
        <img 
          src="https://www.lino-hair-resort.com/images/staff.jpg" 
          alt="Saori Yoshita" 
          className="w-full max-w-xs rounded shadow-md mb-md object-cover"
          referrerPolicy="no-referrer"
          onError={(e) => {
            (e.target as HTMLImageElement).src = 'https://picsum.photos/seed/staff/320/320';
          }}
        />
        <h3 className="text-xl font-medium tracking-wider text-text">Saori Yoshita</h3>
      </div>
    ),
  },
  {
    id: 2,
    content: (
      <div className="flex flex-col items-center justify-center p-md">
        <h3 className="text-xl font-medium tracking-wider text-text mb-md">ふくラボ！特集１</h3>
        <img 
          src="https://www.lino-hair-resort.com/images/Fukulabo_News01.jpg" 
          alt="ふくラボ！特集01" 
          className="w-full max-w-xs rounded shadow-md object-cover"
          referrerPolicy="no-referrer"
          onError={(e) => {
            (e.target as HTMLImageElement).src = 'https://picsum.photos/seed/news1/320/320';
          }}
        />
      </div>
    ),
  },
  {
    id: 3,
    content: (
      <div className="flex flex-col items-center justify-center p-md">
        <h3 className="text-xl font-medium tracking-wider text-text mb-md">ふくラボ！特集２</h3>
        <img 
          src="https://www.lino-hair-resort.com/images/Fukulabo_News02.jpg" 
          alt="ふくラボ！特集02" 
          className="w-full max-w-xs rounded shadow-md object-cover"
          referrerPolicy="no-referrer"
          onError={(e) => {
            (e.target as HTMLImageElement).src = 'https://picsum.photos/seed/news2/320/320';
          }}
        />
      </div>
    ),
  },
  {
    id: 4,
    content: (
      <div className="flex flex-col items-center justify-center p-md">
        <h3 className="text-xl font-medium tracking-wider text-text mb-md">ふくラボ！特集３</h3>
        <img 
          src="https://www.lino-hair-resort.com/images/Fukulabo_News03.jpg" 
          alt="ふくラボ！特集03" 
          className="w-full max-w-xs rounded shadow-md object-cover"
          referrerPolicy="no-referrer"
          onError={(e) => {
            (e.target as HTMLImageElement).src = 'https://picsum.photos/seed/news3/320/320';
          }}
        />
      </div>
    ),
  },
  {
    id: 5,
    content: (
      <div className="flex flex-col items-center justify-center p-md w-full max-w-md mx-auto">
        <h3 className="text-xl font-medium tracking-wider text-text mb-lg">News</h3>
        <ul className="w-full space-y-md text-left">
          <li className="flex flex-col sm:flex-row sm:items-center gap-xs sm:gap-md border-b border-border-light pb-xs">
            <span className="text-primary font-medium whitespace-nowrap">2017年03月15日</span>
            <a href="#" className="text-accent hover:text-primary transition-colors">ふくラボ！特集②</a>
          </li>
          <li className="flex flex-col sm:flex-row sm:items-center gap-xs sm:gap-md border-b border-border-light pb-xs">
            <span className="text-primary font-medium whitespace-nowrap">2017年03月03日</span>
            <a href="#" className="text-accent hover:text-primary transition-colors">ふくラボ！特集①</a>
          </li>
          <li className="flex flex-col sm:flex-row sm:items-center gap-xs sm:gap-md border-b border-border-light pb-xs">
            <span className="text-primary font-medium whitespace-nowrap">2017年02月26日</span>
            <a href="#" className="text-accent hover:text-primary transition-colors">クーポン配信</a>
          </li>
          <li className="flex flex-col sm:flex-row sm:items-center gap-xs sm:gap-md border-b border-border-light pb-xs">
            <span className="text-primary font-medium whitespace-nowrap">2016年06月01日</span>
            <a href="#" className="text-accent hover:text-primary transition-colors">ホームページ開設</a>
          </li>
          <li className="flex flex-col sm:flex-row sm:items-center gap-xs sm:gap-md border-b border-border-light pb-xs">
            <span className="text-primary font-medium whitespace-nowrap">2016年05月13日</span>
            <a href="#" className="text-accent hover:text-primary transition-colors">ふくラボ!掲載</a>
          </li>
          <li className="flex flex-col sm:flex-row sm:items-center gap-xs sm:gap-md border-b border-border-light pb-xs">
            <span className="text-primary font-medium whitespace-nowrap">2016年04月05日</span>
            <a href="#" className="text-accent hover:text-primary transition-colors">お店OPEN</a>
          </li>
        </ul>
      </div>
    ),
  },
];

export const ShopInfoSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % infoSlides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + infoSlides.length) % infoSlides.length);
  };

  // Auto slide
  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="shop-info" className="py-xxl bg-surface">
      <div className="max-w-4xl mx-auto px-md">
        <SectionHeading 
          title="Shop Infomation" 
          lineImageSrc="https://www.lino-hair-resort.com/images/line_honu_0.png" 
        />
        
        <div className="relative bg-background rounded-lg shadow-md p-lg md:p-xl overflow-hidden min-h-[400px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="w-full"
            >
              {infoSlides[currentIndex].content}
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <button 
            onClick={prevSlide}
            className="absolute left-sm md:left-lg top-1/2 -translate-y-1/2 p-2 bg-background/80 hover:bg-surface rounded-full shadow-sm text-text transition-colors z-10"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-sm md:right-lg top-1/2 -translate-y-1/2 p-2 bg-background/80 hover:bg-surface rounded-full shadow-sm text-text transition-colors z-10"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Indicators */}
          <div className="absolute bottom-md left-0 right-0 flex justify-center gap-sm z-10">
            {infoSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  currentIndex === index ? 'bg-primary scale-125' : 'bg-border hover:bg-primary/50'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
