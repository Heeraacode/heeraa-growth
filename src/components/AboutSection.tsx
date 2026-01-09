import { SectionHeader } from "./SectionHeader";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Sparkle, StarBurst } from "./decorative/Sparkle";
import { DottedCircle, SolidDot } from "./decorative/DottedCircle";

export const AboutSection = () => {
  const ref = useScrollAnimation();

  return (
    <section id="about" className="relative bg-cream section-padding page-padding overflow-hidden">
      {/* Artistic decorations */}
      <Sparkle className="top-[10%] right-[8%]" size="lg" />
      <Sparkle className="bottom-[15%] left-[5%]" size="md" />
      <StarBurst className="top-[20%] left-[10%] opacity-50" />
      <DottedCircle className="bottom-[10%] right-[5%]" size="sm" />
      <SolidDot className="top-[40%] right-[3%]" />
      <SolidDot className="bottom-[50%] left-[2%]" />

      <div className="max-w-[850px] mx-auto relative" ref={ref}>
        <SectionHeader number="01" label="About" />

        <h2 className="font-serif text-2xl md:text-3xl font-normal mb-6 fade-up">
          Building growth engines from scratch.
        </h2>

        <p className="text-base md:text-lg text-foreground-light leading-relaxed mb-4 fade-up">
          I build narrative, crack distribution, and design systems that
          compound.
        </p>

        <p className="text-base md:text-lg text-foreground-light leading-relaxed mb-4 fade-up">
          Currently leading growth at <strong className="text-foreground">IIM Bangalore</strong>.
          Went from intern to team lead, built the entire function from scratch.
          Before that, I co-founded a climate-tech startup and made the call to
          shut it down when the narrative started bending.
        </p>

        <div className="bg-primary/5 border-l-[3px] border-primary py-4 px-5 rounded-r-lg my-5 italic text-base md:text-lg text-foreground-light fade-up relative">
          I care about marketing that's true. Most growth advice optimizes for
          speed. I optimize for belief — the kind that compounds.
          {/* Decorative annotation */}
          <span className="hidden md:block absolute -right-4 -top-3 font-handwritten text-primary text-sm rotate-[8deg]">
            ← this!
          </span>
        </div>

        <p className="text-base md:text-lg text-foreground-light leading-relaxed mb-8 fade-up">
          Chronically online. Obsessive documenter. Probably have 30 tabs open
          about why your onboarding copy isn't landing.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 fade-up">
          {[
            { value: "568%", label: "Growth" },
            { value: "3.9M+", label: "Views" },
            { value: "77%", label: "Organic" },
            { value: "12", label: "Team" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="stat-card bg-card p-4 rounded-lg text-center shadow-[0_4px_15px_rgba(0,0,0,0.04)] hover-lift hover-target"
            >
              <div className="font-serif text-xl md:text-2xl font-semibold text-primary">
                {stat.value}
              </div>
              <div className="text-xs text-foreground-muted uppercase tracking-wide mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
