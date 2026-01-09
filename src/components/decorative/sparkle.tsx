import React from "react";

interface SparkleProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  style?: React.CSSProperties;
}

export const Sparkle = ({ className = "", size = "md", style }: SparkleProps) => {
  const sizes = {
    sm: "w-3 h-3",
    md: "w-5 h-5",
    lg: "w-7 h-7",
  };

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={`absolute pointer-events-none ${sizes[size]} ${className}`}
      style={style}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 2L13.5 9.5L21 12L13.5 14.5L12 22L10.5 14.5L3 12L10.5 9.5L12 2Z"
        fill="hsl(var(--primary))"
        className="opacity-30"
      />
    </svg>
  );
};

export const StarBurst = ({ className = "" }: { className?: string }) => {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      className={`absolute pointer-events-none w-10 h-10 ${className}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <line x1="20" y1="5" x2="20" y2="15" stroke="hsl(var(--primary))" strokeWidth="2" className="opacity-40" />
      <line x1="20" y1="25" x2="20" y2="35" stroke="hsl(var(--primary))" strokeWidth="2" className="opacity-40" />
      <line x1="5" y1="20" x2="15" y2="20" stroke="hsl(var(--primary))" strokeWidth="2" className="opacity-40" />
      <line x1="25" y1="20" x2="35" y2="20" stroke="hsl(var(--primary))" strokeWidth="2" className="opacity-40" />
      <line x1="9" y1="9" x2="15" y2="15" stroke="hsl(var(--primary))" strokeWidth="1.5" className="opacity-30" />
      <line x1="25" y1="25" x2="31" y2="31" stroke="hsl(var(--primary))" strokeWidth="1.5" className="opacity-30" />
      <line x1="31" y1="9" x2="25" y2="15" stroke="hsl(var(--primary))" strokeWidth="1.5" className="opacity-30" />
      <line x1="15" y1="25" x2="9" y2="31" stroke="hsl(var(--primary))" strokeWidth="1.5" className="opacity-30" />
    </svg>
  );
};
