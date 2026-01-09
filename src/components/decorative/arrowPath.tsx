interface ArrowPathProps {
  className?: string;
}

export const ArrowPath = ({ className = "" }: ArrowPathProps) => {
  return (
    <svg
      viewBox="0 0 100 60"
      fill="none"
      className={`absolute pointer-events-none ${className}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5 30 Q 30 10, 50 30 T 95 30"
        stroke="hsl(var(--primary))"
        strokeWidth="1.5"
        strokeDasharray="5 3"
        fill="none"
        className="opacity-35"
      />
      <path
        d="M88 25 L95 30 L88 35"
        stroke="hsl(var(--primary))"
        strokeWidth="1.5"
        fill="none"
        className="opacity-35"
      />
    </svg>
  );
};

export const LoopArrow = ({ className = "" }: { className?: string }) => {
  return (
    <svg
      viewBox="0 0 80 80"
      fill="none"
      className={`absolute pointer-events-none ${className}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M40 10 C 70 10, 70 70, 40 70 C 10 70, 10 40, 40 40"
        stroke="hsl(var(--primary))"
        strokeWidth="1.5"
        strokeDasharray="4 4"
        fill="none"
        className="opacity-30"
      />
      <circle cx="40" cy="10" r="3" fill="hsl(var(--primary))" className="opacity-50" />
    </svg>
  );
};
