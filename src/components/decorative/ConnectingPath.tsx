export const ConnectingPath = ({ className = "" }: { className?: string }) => {
  return (
    <svg
      viewBox="0 0 800 80"
      fill="none"
      preserveAspectRatio="none"
      className={`absolute pointer-events-none ${className}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 40 Q 100 10, 160 40 T 320 40 T 480 40 T 640 40 T 800 40"
        stroke="hsl(var(--primary))"
        strokeWidth="1.5"
        fill="none"
        className="opacity-20"
      />
      <circle cx="0" cy="40" r="4" fill="hsl(var(--primary))" className="opacity-40" />
      <circle cx="160" cy="40" r="4" fill="hsl(var(--primary))" className="opacity-40" />
      <circle cx="320" cy="40" r="4" fill="hsl(var(--primary))" className="opacity-40" />
      <circle cx="480" cy="40" r="4" fill="hsl(var(--primary))" className="opacity-40" />
      <circle cx="640" cy="40" r="4" fill="hsl(var(--primary))" className="opacity-40" />
      <circle cx="800" cy="40" r="4" fill="hsl(var(--primary))" className="opacity-40" />
    </svg>
  );
};

export const VerticalConnector = ({ className = "" }: { className?: string }) => {
  return (
    <svg
      viewBox="0 0 40 200"
      fill="none"
      className={`absolute pointer-events-none ${className}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20 0 Q 35 50, 20 100 T 20 200"
        stroke="hsl(var(--primary))"
        strokeWidth="1.5"
        strokeDasharray="6 4"
        fill="none"
        className="opacity-25"
      />
      <circle cx="20" cy="0" r="4" fill="hsl(var(--primary))" className="opacity-50" />
      <circle cx="20" cy="100" r="3" fill="hsl(var(--primary))" className="opacity-30" />
      <circle cx="20" cy="200" r="4" fill="hsl(var(--primary))" className="opacity-50" />
    </svg>
  );
};
