import { Sparkle, StarBurst } from "./Sparkle";
import { DottedCircle, SolidDot } from "./DottedCircle";
import { LoopArrow } from "./ArrowPath";

export const HeroDecorations = () => {
  return (
    <>
      {/* Sparkles */}
      <Sparkle className="top-[15%] left-[8%] animate-pulse" size="sm" />
      <Sparkle className="top-[25%] right-[12%] animate-pulse" size="md" style={{ animationDelay: "0.5s" } as React.CSSProperties} />
      <Sparkle className="bottom-[35%] left-[15%] animate-pulse" size="sm" style={{ animationDelay: "1s" } as React.CSSProperties} />
      <Sparkle className="bottom-[20%] right-[20%] animate-pulse" size="lg" style={{ animationDelay: "1.5s" } as React.CSSProperties} />
      
      {/* Star burst */}
      <StarBurst className="top-[10%] right-[25%] animate-spin-slow" />
      
      {/* Dotted circles */}
      <DottedCircle className="top-[5%] left-[20%] animate-spin-slow" size="sm" />
      <DottedCircle className="bottom-[15%] right-[5%]" size="md" style={{ animationDuration: "30s" } as React.CSSProperties} />
      
      {/* Solid dots scattered */}
      <SolidDot className="top-[40%] left-[5%]" />
      <SolidDot className="top-[60%] right-[15%]" />
      <SolidDot className="bottom-[40%] left-[25%]" />
      
      {/* Loop arrow */}
      <LoopArrow className="w-20 h-20 bottom-[25%] right-[8%] opacity-20" />
    </>
  );
};

export const SectionDecorations = ({ variant = "default" }: { variant?: "default" | "cream" }) => {
  return (
    <>
      <Sparkle 
        className="top-[10%] right-[5%] animate-pulse" 
        size="sm" 
      />
      <Sparkle 
        className="bottom-[15%] left-[8%] animate-pulse" 
        size="md" 
        style={{ animationDelay: "0.7s" } as React.CSSProperties} 
      />
      <SolidDot className="top-[25%] left-[3%]" />
      <SolidDot className="bottom-[30%] right-[4%]" />
      <DottedCircle 
        className="top-[5%] left-[10%] opacity-10" 
        size="sm" 
      />
    </>
  );
};
