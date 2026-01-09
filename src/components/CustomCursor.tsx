import { useEffect, useState } from "react";

export const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    document.addEventListener("mousemove", updatePosition);

    // Add hover listeners to interactive elements
    const interactiveElements = document.querySelectorAll(
      "a, button, .work-card, .project-card, .stat-card, .principle-card, .skill-category, .approach-item, .hover-target"
    );

    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      document.removeEventListener("mousemove", updatePosition);
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  // Re-attach listeners when DOM updates
  useEffect(() => {
    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    const observer = new MutationObserver(() => {
      const interactiveElements = document.querySelectorAll(
        "a, button, .hover-target"
      );
      interactiveElements.forEach((el) => {
        el.addEventListener("mouseenter", handleMouseEnter);
        el.addEventListener("mouseleave", handleMouseLeave);
      });
    });

    observer.observe(document.body, { childList: true, subtree: true });

    return () => observer.disconnect();
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className={`custom-cursor ${isHovering ? "hover" : ""} hidden md:block`}
      style={{
        left: position.x,
        top: position.y,
      }}
    />
  );
};
