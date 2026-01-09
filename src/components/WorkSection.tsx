import { useState } from "react";
import { SectionHeader } from "./SectionHeader";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { VerticalConnector } from "./decorative/ConnectingPath";
import { Sparkle } from "./decorative/sparkle";
import { SolidDot } from "./decorative/dottedCircle";
import iimbLogo from "@/assets/iimb logo.png";
import csirClriLogo from "@/assets/clri.jpeg";
import climacraftLogo from "@/assets/climacraft.jpeg";

const workExperience = [
  {
    icon: "🏛️",
    logo: iimbLogo,
    logoAlt: "IIM Bangalore logo",
    tags: ["Education", "0→1", "Growth"],
    title: "IIM Bangalore",
    role: "Team Lead, Growth & Partnerships · Oct 2024 – Present",
    description:
      "Joined as intern. Now lead 12-person team across growth, brand, content, events, partnerships.",
    bullets: [
      "Designed and owned the programme’s external narrative and brand system from 0→1, defining how diverse stakeholders (students, parents, faculty, alumni, partners) understand value, credibility, and intent.",
      "Built repeatable content and distribution systems across website, social, long-form content, interviews, and campaigns optimized for clarity, correctness, and long-term trust rather than short-term persuasion.",
      "Translated complex, evolving inputs from faculty and internal teams into clear mental models, explanations, and expectations for prospective users.",
      "Ran structured paid and organic experiments across Meta, Google, Snapchat, Spotify, and Pinterest, evaluating narratives through post-campaign analysis and documented trade-offs.",
      "Scaled reach 568% YoY, driving 3.9M+ total views with 77% organic engagement, without compromising narrative coherence or accuracy.",
      "Conceptualized and executed 25+ online and 6+ offline brand-led events, coordinating across creators, professors, and partners while maintaining tone and message integrity.",
      "Built and led a 12-member execution team, creating playbooks, review loops, and quality standards to ensure consistency across all public-facing surfaces.",
      "Worked on ecosystem partnerships (incubators, creators, entrepreneurship kits) to extend reach into startup and creator communities while preserving brand trust.",
    ],
  },
  {
    icon: "🌱",
    logo: climacraftLogo,
    logoAlt: "Climacraft logo",
    logoClass: "p-0.5",
    tags: ["Climate-Tech", "Founder"],
    title: "Climacraft",
    role: "Founder · Sep 2023 – Jun 2024",
    description:
      "AI-driven hydroponics for restaurants. Shut down post-MVP. Learned to protect narrative.",
    bullets: [
      "Built a climate-tech product from inception, owning product storytelling, positioning, and early GTM communication.",
      "Designed MVP narratives that explicitly communicated system behavior, constraints, and limitations, enabling informed adoption.",
      "Achieved ~30% reduction in water and energy usage during pilot deployments through aligned product and narrative design.",
      "Semifinalist at Startup India 4.0, gaining exposure to early-stage pitching and real user feedback loops.",
      "Made the decision to shut down post-MVP, developing strong judgment around where early-stage narratives overpromise and how misaligned expectations create downstream trust failures.",
    ],
  },
  {
    icon: "📊",
    logo: csirClriLogo,
    logoAlt: "CSIR-CLRI logo",
    tags: ["Research", "Data"],
    title: "CSIR – CLRI",
    role: "Research Intern · Jun – Oct 2023",
    description:
      "Forecasting models. ~15% accuracy improvement. Technical to decision-ready narratives.",
    bullets: [
      "Built and evaluated forecasting models improving price prediction accuracy by ~15%.",
      "Analyzed trade volatility and logistics systems, working with noisy, imperfect data.",
      "Translated model outputs and technical analysis into decision-oriented narratives for non-technical stakeholders.",
    ],
  },
];

export const WorkSection = () => {
  const ref = useScrollAnimation();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="work" className="relative section-padding page-padding overflow-hidden">
      {/* Artistic decorations */}
      <Sparkle className="top-[12%] right-[6%]" size="sm" />
      <Sparkle className="bottom-[18%] left-[8%]" size="md" />
      <SolidDot className="top-[25%] left-[4%]" />
      <SolidDot className="bottom-[30%] right-[5%]" />

      <div className="max-w-[950px] mx-auto relative" ref={ref}>
        <SectionHeader number="02" label="Experience" />

        <h2 className="font-serif text-2xl md:text-3xl font-normal mb-6 fade-up">
          Where I've Worked
        </h2>

        {/* Vertical connecting line - visible on desktop */}
        <VerticalConnector className="hidden md:block w-10 h-[400px] -left-16 top-24" />

        <div className="flex flex-col gap-3">
          {workExperience.map((work, index) => {
            const isOpen = openIndex === index;
            return (
            <div
              key={work.title}
              className="work-card work-card-accent bg-card rounded-xl p-5 md:p-6 grid grid-cols-1 md:grid-cols-[50px_1fr] gap-4 md:gap-5 items-center shadow-[0_4px_15px_rgba(0,0,0,0.04)] relative overflow-hidden hover:translate-x-1.5 hover:shadow-[0_8px_25px_rgba(0,0,0,0.08)] transition-all fade-up hover-target"
            >
              <div className="hidden md:flex w-[50px] h-[50px] bg-background rounded-lg items-center justify-center text-xl overflow-hidden">
                {work.logo ? (
                  <img
                    src={work.logo}
                    alt={work.logoAlt ?? `${work.title} logo`}
                    className={`w-full h-full object-contain ${work.logoClass ?? "p-1"}`}
                    loading="lazy"
                  />
                ) : (
                  work.icon
                )}
              </div>

              <div className="text-center md:text-left">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full text-left focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex flex-wrap justify-center md:justify-start gap-1 mb-1">
                  {work.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[0.65rem] font-semibold uppercase tracking-wide text-primary bg-primary/10 px-1.5 py-0.5 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                  </div>
                  <h3 className="font-serif text-base md:text-lg font-medium mb-0.5">
                  {work.title}
                  </h3>
                  <p className="text-sm md:text-base text-foreground-muted mb-1">
                  {work.role}
                  </p>
                  <p className="text-sm md:text-base text-foreground-light leading-relaxed">
                  {work.description}
                  </p>
                  <div className="mt-3 flex justify-center md:justify-start text-xs uppercase tracking-[0.12em] text-foreground-muted">
                    {isOpen ? "Hide details" : "Show details"}
                  </div>
                </button>
                {work.bullets && (
                  <ul
                    className={`mt-4 space-y-2 text-left text-sm md:text-base text-foreground-light leading-relaxed ${
                      isOpen ? "block" : "hidden"
                    }`}
                  >
                    {work.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-primary" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

            </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
