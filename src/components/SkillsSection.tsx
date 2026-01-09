index 006e3e8a5f1e3d62f16275a030050c75a3ca5d35..5952cbbf54de088264e9082fc7747d070b46a0e3 100644
--- a/src/components/SkillsSection.tsx
+++ b/src/components/SkillsSection.tsx
@@ -2,59 +2,59 @@ import { SectionHeader } from "./SectionHeader";
 import { useScrollAnimation } from "@/hooks/useScrollAnimation";
 
 const skillCategories = [
   {
     title: "Growth",
     skills: ["Social strategy", "Content systems", "PLG", "Community-led"],
   },
   {
     title: "Narrative",
     skills: ["Positioning", "Storytelling", "Belief sequences", "Brand systems"],
   },
   {
     title: "Execution",
     skills: ["Experimentation", "Post-mortems", "Trade-off analysis", "Cross-functional"],
   },
   {
     title: "Technical",
     skills: ["Python", "ML/NLP", "Data analysis", "Systems thinking"],
   },
 ];
 
 export const SkillsSection = () => {
   const ref = useScrollAnimation();
 
   return (
-    <section className="py-20 px-6 md:px-16">
+    <section className="section-padding page-padding">
       <div className="max-w-[950px] mx-auto" ref={ref}>
         <SectionHeader number="06" label="Skills" />
 
         <h2 className="font-serif text-2xl md:text-3xl font-normal mb-6 fade-up">
           What I Bring
         </h2>
 
         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
           {skillCategories.map((category) => (
             <div
               key={category.title}
               className="skill-category bg-card rounded-lg p-5 hover:-translate-y-0.5 hover:shadow-[0_8px_25px_rgba(0,0,0,0.06)] transition-all fade-up hover-target"
             >
-              <h4 className="font-serif text-sm font-medium text-primary mb-3 pb-2 border-b border-background">
+              <h4 className="font-serif text-base font-medium text-primary mb-3 pb-2 border-b border-background">
                 {category.title}
               </h4>
               <ul className="space-y-1.5">
                 {category.skills.map((skill) => (
                   <li
                     key={skill}
-                    className="text-xs text-foreground-light pl-3 relative before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-1 before:h-1 before:bg-primary before:rounded-full"
+                    className="text-sm text-foreground-light pl-3 relative before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-1 before:h-1 before:bg-primary before:rounded-full"
                   >
                     {skill}
                   </li>
                 ))}
               </ul>
             </div>
           ))}
         </div>
       </div>
     </section>
   );
 };
