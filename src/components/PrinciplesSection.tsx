import { SectionHeader } from "./SectionHeader";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const principles = [
  { num: "01", title: "Start with constraint.", desc: "Understand what's in the way first." },
  { num: "02", title: "Sequencing > ambition.", desc: "Strategy is knowing what to do first." },
  { num: "03", title: "Growth feels earned.", desc: "Activation before acquisition." },
  { num: "04", title: "Clarity before speed.", desc: "Frame decisions well." },
  { num: "05", title: "Honesty is practical.", desc: "No hidden context." },
  { num: "06", title: "Empathy is operational.", desc: "Better context, better decisions." },
  { num: "07", title: "High standards, low ego.", desc: "Progress > being right." },
];

export const PrinciplesSection = () => {
  const ref = useScrollAnimation();

  return (
    <section className="bg-cream section-padding page-padding">
      <div className="max-w-[950px] mx-auto" ref={ref}>
        <SectionHeader number="05" label="Principles" />

        <h2 className="font-serif text-2xl md:text-3xl font-normal mb-6 fade-up">
          How I Think
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
          {principles.map((principle, index) => (
            <div
              key={principle.num}
              className={`principle-card principle-accent bg-card rounded-lg p-4 relative hover:-translate-y-0.5 hover:shadow-[0_8px_25px_rgba(0,0,0,0.06)] transition-all fade-up hover-target ${
                index === 6 ? "sm:col-span-2" : ""
              }`}
            >
              <span className="font-serif text-base text-primary/20 absolute top-2 right-2">
                {principle.num}
              </span>
              <h4 className="font-serif text-base font-medium mb-1 pr-5">
                {principle.title}
              </h4>
              <p className="text-sm md:text-base text-foreground-light leading-relaxed">
                {principle.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
