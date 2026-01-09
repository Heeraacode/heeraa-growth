import { SectionHeader } from "./SectionHeader";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Sparkle, StarBurst } from "./decorative/Sparkle";
import { DottedCircle, SolidDot } from "./decorative/DottedCircle";
import { CurvedLine } from "./decorative/CurvedLine";
import contactImage from "@/assets/contact.jpg";

export const ContactSection = () => {
  const ref = useScrollAnimation();

  return (
    <section id="contact" className="relative bg-cream section-padding page-padding overflow-hidden">
      {/* Artistic decorations */}
      <Sparkle className="top-[15%] right-[10%]" size="lg" />
      <Sparkle className="bottom-[20%] left-[8%]" size="md" />
      <StarBurst className="top-[10%] left-[15%] opacity-40" />
      <DottedCircle className="bottom-[15%] right-[5%]" size="md" />
      <SolidDot className="top-[30%] left-[5%]" />
      <SolidDot className="bottom-[35%] right-[10%]" />
      <CurvedLine className="w-32 h-24 top-[20%] right-[20%] opacity-30" variant="dashed" />

      <div
        className="max-w-[750px] mx-auto grid grid-cols-1 md:grid-cols-[auto_1fr] gap-10 items-center relative"
        ref={ref}
      >
        <div className="relative">
          <img
            src={contactImage}
            alt="Heeraa Ananthan speaking on stage"
            className="w-[160px] h-[200px] md:w-[180px] md:h-[220px] mx-auto md:mx-0 object-cover rounded-lg grayscale hover:grayscale-0 hover:scale-[1.02] transition-all fade-up"
            loading="lazy"
          />
          {/* Decorative annotation */}
          <span className="hidden md:block absolute -bottom-4 left-1/2 -translate-x-1/2 font-handwritten text-sm text-primary">
            let's chat! ↗
          </span>
        </div>

        <div className="text-center md:text-left fade-up">
          <SectionHeader number="07" label="Contact" />

          <h2 className="font-serif text-xl md:text-2xl font-normal mb-3">
            Let's build something meaningful.
          </h2>

          <p className="text-base md:text-lg text-foreground-light mb-1">
            If you need someone to help your product find its story.
          </p>

          <p className="font-handwritten text-lg text-primary my-4">
            Open to interesting conversations ✦
          </p>

          <div className="flex flex-wrap justify-center md:justify-start gap-3">
            <a
              href="mailto:heeraa@example.com"
              className="px-5 py-3 bg-primary text-primary-foreground text-base font-semibold rounded-full hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(196,77,45,0.3)] transition-all hover-target"
            >
              Email Me
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 border-[1.5px] border-foreground text-foreground text-base font-semibold rounded-full hover:bg-foreground hover:text-background transition-all hover-target"
            >
              LinkedIn
            </a>
            <a
              href="#"
              className="px-5 py-3 border-[1.5px] border-foreground text-foreground text-base font-semibold rounded-full hover:bg-foreground hover:text-background transition-all hover-target"
            >
              Resume ↓
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
