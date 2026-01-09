import { useEffect, useState, type MouseEvent } from "react";

type NavItem = { id: string; label: string };

const NAV_ITEMS: NavItem[] = [
  { id: "about", label: "About" },
  { id: "work", label: "Work" },
  { id: "projects", label: "Projects" },
  { id: "approach", label: "Approach" },
  { id: "principles", label: "Principles" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToTop = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 page-padding py-4 flex justify-between items-center transition-all duration-300 ${
        isScrolled ? "bg-background/90 backdrop-blur-md" : "bg-transparent"
      }`}
      aria-label="Primary"
    >
      <a
        href="#top"
        onClick={scrollToTop}
        className="flex items-center gap-2 font-serif text-base font-medium hover-target"
      >
        <span className="w-2 h-2 bg-primary rounded-full animate-pulse-dot" />
        Heeraa Ananthan
      </a>

      {/* Desktop */}
      <div className="hidden md:flex items-center gap-8">
        {NAV_ITEMS.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className="text-sm text-foreground-muted hover:text-foreground transition-colors hover-target"
          >
            {item.label}
          </button>
        ))}
      </div>

      {/* Mobile quick action */}
      <div className="md:hidden">
        <button
          onClick={() => scrollToSection("contact")}
          className="text-sm font-semibold px-4 py-2 rounded-full bg-primary text-primary-foreground hover:opacity-90 transition hover-target"
        >
          Contact
        </button>
      </div>
    </nav>
  );
};
