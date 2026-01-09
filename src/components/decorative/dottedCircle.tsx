import React from "react";

interface DottedCircleProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  style?: React.CSSProperties;
}

export const DottedCircle = ({ className = "", size = "md", style }: DottedCircleProps) => {
  const sizes = {
    sm: "w-16 h-16",
    md: "w-24 h-24",
    lg: "w-40 h-40",
  };

  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      className={`absolute pointer-events-none ${sizes[size]} ${className}`}
      style={style}
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="50"
        cy="50"
        r="45"
        stroke="hsl(var(--primary))"
        strokeWidth="1"
        strokeDasharray="4 6"
        fill="none"
        className="opacity-25"
      />
    </svg>
  );
};

export const SolidDot = ({ className = "" }: { className?: string }) => {
  return (
    <div
      className={`absolute w-2 h-2 rounded-full bg-primary opacity-40 pointer-events-none ${className}`}
    />
  );
};
