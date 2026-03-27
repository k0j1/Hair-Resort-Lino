import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const slides = [
  {
    id: 1,
    image: 'https://www.lino-hair-resort.com/images/04.jpg',
    content: (
      <div className="text-center text-text-light [text-shadow:_2px_2px_4px_rgb(0_0_0_/_100%)]">
        <h1 className="text-4xl md:text-6xl font-light tracking-widest mb-lg uppercase">Hair Resort Lino</h1>
        <p className="text-lg md:text-xl tracking-widest mt-xl">２０１６年４月５日　ＯＰＥＮ</p>
        <p className="text-sm tracking-widest mt-sm opacity-80">v0.0.16</p>
      </div>
    ),
  },
  {
    id: 2,
    image: 'https://www.lino-hair-resort.com/images/02.jpg',
    content: (
      <div className="text-center text-text-light [text-shadow:_2px_2px_4px_rgb(0_0_0_/_100%)] max-w-2xl px-md">
        <h1 className="text-2xl md:text-4xl font-light leading-relaxed mb-lg">
          プチリゾート気分でくつろげる<br />癒しのプライベートサロン
        </h1>
        <p className="text-sm md:text-base leading-loose tracking-wider">
          <span className="text-primary font-bold">「Lino」</span>はハワイ語で<span className="text-secondary font-bold">「光り輝く」</span>という意味。<br /><br />
          ここに訪れた人の魅力を引き出したい…<br /><br />
          そんな思いのこもった Lino ではヘアスタイルをはじめ、<br />
          あなたのキレイを引き出すトータルビューティーが叶います。
        </p>
        <a 
          href="#menu" 
          className="inline-block mt-lg px-xl py-sm border-2 border-text-light text-text-light hover:bg-text-light hover:text-text transition-colors tracking-widest uppercase font-bold"
        >
          MENU
        </a>
      </div>
    ),
  },
  {
    id: 3,
    image: 'https://www.lino-hair-resort.com/images/01.jpg',
    content: null,
  },
];

export const HeroSlider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden bg-text">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full"
        >
          {/* Background Image */}
          <img 
            src={slides[currentSlide].image}
            alt="Hero Background"
            className="absolute inset-0 w-full h-full object-contain object-center"
            referrerPolicy="no-referrer"
            onError={(e) => {
              (e.target as HTMLImageElement).src = 'https://picsum.photos/seed/lino/1920/1080?blur=2';
            }}
          />
          
          {/* Overlay to ensure text readability */}
          <div className="absolute inset-0 bg-text/30" />

          {/* Content */}
          {slides[currentSlide].content && (
            <div className="absolute inset-0 flex items-center justify-center z-10">
              {slides[currentSlide].content}
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Slide Indicators */}
      <div className="absolute bottom-lg left-0 right-0 flex justify-center gap-sm z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentSlide === index ? 'bg-text-light scale-125' : 'bg-text-light/50 hover:bg-text-light/80'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};
