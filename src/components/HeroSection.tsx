import { ArrowRight } from "lucide-react";
import { HeroDecorations } from "./decorative/decorativeElements";
import { DottedCircle } from "./decorative/dottedCircle";
import { Sparkle, StarBurst } from "./decorative/sparkle";
import heroImage from "@/assets/hero.jpg";

export const HeroSection = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center page-padding pt-20 pb-12 overflow-hidden">
      {/* Enhanced Decorative Elements */}
      <HeroDecorations />

      {/* Original Deco Elements */}
      <div className="deco-circle absolute -top-[8%] -right-[8%] w-[400px] h-[400px] pointer-events-none" />
      <div className="deco-circle absolute bottom-[12%] left-[5%] w-[200px] h-[200px] pointer-events-none" />
      <div className="absolute top-[22%] left-[15%] w-[70px] h-[70px] rounded-full bg-primary/[0.04] pointer-events-none" />
      <div className="deco-line absolute top-[30%] left-[5%] -rotate-[25deg] pointer-events-none" />
      <div className="deco-line absolute bottom-[25%] right-[8%] rotate-[35deg] pointer-events-none" />
      <div className="deco-cross absolute top-[15%] right-[18%] w-[14px] h-[14px] opacity-15 animate-spin-slow pointer-events-none" />
      <div className="deco-cross absolute bottom-[30%] left-[12%] w-[14px] h-[14px] opacity-15 animate-spin-slow-reverse pointer-events-none" />

      {/* Extra artistic elements */}
      <DottedCircle className="top-[8%] left-[30%]" size="sm" />
      <Sparkle className="top-[45%] right-[30%]" size="lg" />
      <StarBurst className="bottom-[45%] left-[8%]" />

      <div className="max-w-[1100px] mx-auto w-full grid grid-cols-1 md:grid-cols-[1fr_0.7fr] gap-8 md:gap-16 items-center">
        {/* Content */}
        <div className="order-2 md:order-1 text-center md:text-left">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-primary mb-4 fade-up">
            <span className="w-6 h-[1px] bg-primary" />
            Growth Marketer
          </span>

          <h1 className="font-serif text-3xl md:text-5xl font-normal leading-tight mb-4 fade-up">
            I build narrative-led growth engines that compound.
          </h1>

          <p className="text-base md:text-lg text-foreground-light leading-relaxed mb-7 fade-up">
            Team lead at IIM Bangalore. Ex-founder. Obsessive documenter. I care about marketing
            that&apos;s true — the kind of belief that scales without bending the story.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start fade-up">
            <button
              type="button"
              onClick={() => scrollToSection("projects")}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold hover:opacity-90 transition hover-target"
            >
              View projects <ArrowRight className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() => scrollToSection("contact")}
              className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-primary/30 text-foreground font-semibold hover:bg-primary/5 transition hover-target"
            >
              Get in touch
            </button>
          </div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 fade-up">
            {[
              { value: "568%", label: "YoY Growth" },
              { value: "3.9M+", label: "Views" },
              { value: "0→1", label: "Built" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-card/60 backdrop-blur rounded-xl p-4 text-left shadow-[0_4px_15px_rgba(0,0,0,0.04)]"
              >
                <div className="font-serif text-2xl font-semibold text-primary leading-tight">
                  {stat.value}
                </div>
                <div className="text-[0.7rem] text-foreground-muted uppercase tracking-wide">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Visual */}
        <div className="order-1 md:order-2 relative flex justify-center items-center">
          <div className="relative w-[180px] h-[225px] md:w-[280px] md:h-[350px]">
            {/* Main Image */}
            <img
              src={heroImage}
              alt="Heeraa Ananthan portrait"
              className="w-full h-full object-cover rounded-[180px_180px_24px_24px] relative z-10"
              loading="lazy"
            />

            {/* Frame */}
            <div className="absolute -inset-3.5 border border-primary/25 rounded-[194px_194px_38px_38px] z-0" />

            {/* Floating Cards - Hidden on mobile */}
            <div className="hidden md:block absolute top-[8%] -left-[18%] bg-card px-4 py-2.5 rounded-lg shadow-[0_8px_30px_rgba(0,0,0,0.08)] text-xs z-20 animate-float">
              <strong className="font-serif text-lg text-primary">568%</strong> growth
            </div>
            <div className="hidden md:block absolute bottom-[22%] -left-[22%] bg-card px-4 py-2.5 rounded-lg shadow-[0_8px_30px_rgba(0,0,0,0.08)] text-xs z-20 animate-float-delayed-1">
              <strong className="font-serif text-lg text-primary">3.9M+</strong> narrative
            </div>
            <div className="hidden md:block absolute top-[32%] -right-[18%] bg-card px-4 py-2.5 rounded-lg shadow-[0_8px_30px_rgba(0,0,0,0.08)] text-xs z-20 animate-float-delayed-2">
              <strong className="font-serif text-lg text-primary">77%</strong> distribution
            </div>

            {/* Annotations - Hidden on mobile */}
            <span className="hidden md:block absolute -top-[2%] right-[8%] font-handwritten text-base text-primary -rotate-[8deg] z-20">
              that's me! ✦
            </span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2">
        <div className="w-[1px] h-10 bg-foreground-muted relative overflow-hidden animate-scroll-line" />
        <span className="text-[0.65rem] uppercase tracking-[0.1em] text-foreground-muted">
          Scroll
        </span>
      </div>
    </section>
  );
};
