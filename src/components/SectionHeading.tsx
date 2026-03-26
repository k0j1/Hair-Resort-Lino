import React from 'react';

interface SectionHeadingProps {
  title: string;
  lineImageSrc: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({ title, lineImageSrc }) => {
  return (
    <div className="flex flex-col items-center justify-center mb-xl">
      <div className="flex items-center gap-md mb-sm">
        <div className="h-px w-12 bg-primary/50" />
        <h2 className="text-3xl md:text-4xl font-serif italic tracking-wider text-text uppercase">
          {title}
        </h2>
        <div className="h-px w-12 bg-primary/50" />
      </div>
      <img 
        src={lineImageSrc} 
        alt="" 
        className="w-full h-6 object-contain opacity-30" 
        referrerPolicy="no-referrer" 
        onError={(e) => {
          (e.target as HTMLImageElement).style.display = 'none';
        }}
      />
    </div>
  );
};
