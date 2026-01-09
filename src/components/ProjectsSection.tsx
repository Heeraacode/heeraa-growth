  {
    type: "Podcast",
    title: "The DBE Show",
    subtitle: "Founder Conversations",
    description:
      "Long-form conversations about pivots, hard parts, and the real story.",
    link: "https://youtu.be/6mKBuUlLWXk?si=GVcVARUbY6T2Hw9x",
    linkText: "Watch on YouTube →",
    external: true,
  },
  {
    type: "Research",
    title: "NLP Research",
    subtitle: "Human vs Machine Text",
    description:
      "RoBERTa + clustering. Optimized for interpretability over accuracy.",
    link: "#",
    linkText: "Read Paper →",
  },
];

export const ProjectsSection = () => {
  const ref = useScrollAnimation();

  return (
    <section id="projects" className="relative bg-cream section-padding page-padding overflow-hidden">
      {/* Artistic decorations */}
      <Sparkle className="top-[8%] left-[6%]" size="lg" />
      <Sparkle className="bottom-[12%] right-[8%]" size="md" />
      <StarBurst className="top-[15%] right-[12%] opacity-40" />
      <DottedCircle className="bottom-[8%] left-[3%]" size="sm" />
      <SolidDot className="top-[35%] right-[4%]" />
      <SolidDot className="bottom-[40%] left-[6%]" />
      <LoopArrow className="w-16 h-16 top-[25%] left-[2%] opacity-30" />

      <div className="max-w-[950px] mx-auto relative" ref={ref}>
        <SectionHeader number="03" label="Projects" />

        <h2 className="font-serif text-2xl md:text-3xl font-normal mb-6 fade-up">
          Things I've Built
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="project-card project-card-accent bg-card rounded-xl p-6 relative overflow-hidden hover-lift fade-up hover-target"
            >
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-foreground-muted mb-2">
                {project.type}
              </p>
              <h3 className="font-serif text-base md:text-lg font-medium mb-0.5">
                {project.title}
              </h3>
              <p className="text-sm text-primary mb-2">{project.subtitle}</p>
              <p className="text-sm md:text-base text-foreground-light leading-relaxed mb-4">
                {project.description}
              </p>
              <a
                href={project.link}
                target={project.external ? "_blank" : undefined}
                rel={project.external ? "noopener noreferrer" : undefined}
                className="text-sm font-semibold text-primary inline-flex items-center gap-1 hover:gap-2 transition-all"
              >
                {project.linkText}
              </a>
              {/* Decorative annotation on featured project */}
              {index === 0 && (
                <span className="hidden md:block absolute top-3 right-4 font-handwritten text-xs text-primary rotate-[5deg]">
                  favorite ♥
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
