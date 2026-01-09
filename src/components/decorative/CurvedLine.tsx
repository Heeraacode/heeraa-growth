interface CurvedLineProps {
  className?: string;
  variant?: "solid" | "dashed";
}

export const CurvedLine = ({ className = "", variant = "solid" }: CurvedLineProps) => {
  return (
    <svg
      viewBox="0 0 200 150"
      fill="none"
      className={`absolute pointer-events-none ${className}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 10 Q 50 10, 60 60 T 120 100 T 190 140"
        stroke="hsl(var(--primary))"
        strokeWidth="1.5"
        fill="none"
        strokeDasharray={variant === "dashed" ? "6 4" : "none"}
        className="opacity-40"
      />
      <circle cx="10" cy="10" r="4" fill="hsl(var(--primary))" className="opacity-60" />
      <circle cx="190" cy="140" r="4" fill="hsl(var(--primary))" className="opacity-60" />
    </svg>
  );
};
