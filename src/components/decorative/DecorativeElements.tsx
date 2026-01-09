import React from "react";

export const HeroDecorations = () => {
  return (
    <>
      {/* light dots */}
      <div className="absolute top-[12%] left-[10%] w-2 h-2 rounded-full bg-primary/30 pointer-events-none" />
      <div className="absolute top-[22%] right-[18%] w-1.5 h-1.5 rounded-full bg-primary/25 pointer-events-none" />
      <div className="absolute bottom-[28%] left-[16%] w-2 h-2 rounded-full bg-primary/20 pointer-events-none" />
      <div className="absolute bottom-[18%] right-[14%] w-1.5 h-1.5 rounded-full bg-primary/25 pointer-events-none" />

      {/* simple sparkle */}
      <svg
        className="absolute top-[10%] right-[28%] w-6 h-6 opacity-30 pointer-events-none"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M12 2L13.5 9.5L21 12L13.5 14.5L12 22L10.5 14.5L3 12L10.5 9.5L12 2Z"
          fill="hsl(var(--primary))"
        />
      </svg>

      {/* dotted circle */}
      <svg
        className="absolute bottom-[14%] right-[6%] w-24 h-24 opacity-15 pointer-events-none"
        viewBox="0 0 100 100"
        fill="none"
      >
        <circle
          cx="50"
          cy="50"
          r="45"
          stroke="hsl(var(--primary))"
          strokeWidth="1"
          strokeDasharray="4 6"
        />
      </svg>
    </>
  );
};

export const SectionDecorations = () => {
  return (
    <>
      <div className="absolute top-[14%] left-[6%] w-2 h-2 rounded-full bg-primary/20 pointer-events-none" />
      <div className="absolute bottom-[16%] right-[8%] w-2 h-2 rounded-full bg-primary/20 pointer-events-none" />
    </>
  );
};
