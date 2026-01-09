import { SectionHeader } from "./SectionHeader";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ConnectingPath } from "./decorative/ConnectingPath";
import { Sparkle } from "./decorative/Sparkle";
import { SolidDot } from "./decorative/DottedCircle";

const steps = [
  { num: "01", title: "Define ICP", note: '"vague = vague"' },
  { num: "02", title: "Map Psychology", note: '"fears & wants"' },
  { num: "03", title: "Nail Positioning", note: '"say it simply"' },
  { num: "04", title: "Build Narrative", note: '"install worldview"' },
  { num: "05", title: "Design Loops", note: '"growth embedded"' },
];

export const ApproachSection = () => {
  const ref = useScrollAnimation();

  return (
    <section className="relative section-padding page-padding overflow-hidden">
      {/* Artistic decorations */}
      <Sparkle className="top-[15%] right-[10%]" size="md" />
      <Sparkle className="bottom-[20%] left-[5%]" size="sm" />
      <SolidDot className="top-[30%] left-[8%]" />
      <SolidDot className="bottom-[35%] right-[12%]" />
      
      <div className="max-w-[950px] mx-auto relative" ref={ref}>
        <SectionHeader number="04" label="Process" />

        <h2 className="font-serif text-2xl md:text-3xl font-normal mb-6 fade-up">
          How I Approach Growth
        </h2>

        {/* Connecting path between steps - visible on desktop */}
        <div className="hidden md:block relative mb-4">
          <ConnectingPath className="w-full h-12 top-0 left-0" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-3 relative">
          {steps.map((step, index) => (
            <div
              key={step.num}
              className="approach-item bg-card rounded-lg p-4 text-center relative hover:-translate-y-1 hover:shadow-[0_8px_25px_rgba(0,0,0,0.06)] transition-all fade-up hover-target"
            >
              {index < steps.length - 1 && (
                <span className="hidden md:block absolute -right-2 top-1/2 -translate-y-1/2 text-primary/30 text-xs">
                  →
                </span>
              )}
              <div className="font-serif text-xl text-primary/30 mb-1">
                {step.num}
              </div>
              <h4 className="text-sm font-semibold mb-1">{step.title}</h4>
              <div className="font-handwritten text-base text-primary">
                {step.note}
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
};
