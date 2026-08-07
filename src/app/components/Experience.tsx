import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Briefcase, CalendarDays, MapPin } from "lucide-react";

const experiences = [
  {
    role: "Software Engineer",
    company: "Rahi Platform Technologies",
    period: "October 2024 – Present",
    location: "Pune, MH, India",
    type: "current",
    highlights: [
      "Collaborated within a cross-functional team of 8 engineers, 2 designers, and 2 PMs to deliver a configurable vertical SaaS platform serving 10+ enterprise clients across Loan Management, Collections, and Master Data Management modules.",
      "Engineered scalable user interfaces using Next.js, React.js, TypeScript, and React Hooks, designing and shipping reusable UI components that accelerated frontend feature delivery by 20–25%.",
      "Owned end-to-end UI delivery for the Collections module, partnering with product managers and architects to translate business requirements into scalable technical solutions and configurable screens via an internal UI Configurator, delivering ~80% (30+ screens) of module workflows.",
      "Architected configurable validation workflows using rule-based configurations and custom interceptors across Loan Management, Collections, and Master Data Management modules, enabling dynamic business rule enforcement and complex cross-field validations that reduced production data errors by 40%.",
      "Authored reusable frontend utilities—scroll-to-error navigation, contextual validation feedback, and collapsible section handling—improving usability across configurable workflows and reducing form-related support tickets by 25%.",
      "Optimized performance using lazy loading, code splitting, and React memoization (useMemo/useCallback) to reduce initial load times and bundle size across form-heavy application flows.",
      "Contributed backend features to a NestJS + Fastify configuration microservice with dual-database persistence (PostgreSQL via TypeORM, MongoDB via Mongoose), including REST APIs, recursive DSL validation, and version-lifecycle state machines that power the platform's configurable Page and Microsite modules.",
      "Achieved robust unit test coverage across the full stack---React and Next.js components with Jest and React Testing Library, and NestJS services with Jest and supertest---reaching 75% coverage on owned modules.",
    ],
    tags: ["React.js", "Next.js", "TypeScript", "React Hooks", "NestJS", "Full-Stack"],
  },
  {
    role: "Software Engineer – Dev",
    company: "Zymr Inc",
    period: "August 2022 – September 2024",
    location: "Pune, MH, India",
    type: "past",
    highlights: [
      "Delivered scalable React + TypeScript web applications for enterprise SaaS clients, leveraging React Hooks, reusable UI components, and modular frontend architecture within a collaborative engineering team.",
      "Launched an Employee Feedback Portal and HR Analytics Dashboard, improving employee engagement metrics by 20%.",
      "Designed a cross-framework web component library using Stencil JS and Lit JS, enabling UI reuse across React, Angular, and Vue applications; adopted by 4+ internal teams and reducing duplicate component code by 30%.",
      "Integrated RESTful APIs and rolled out schema-driven JSON Forms, improving form validation accuracy and reducing frontend validation defects by 15%.",
      "Partnered on peer code reviews and iterative feature delivery within Agile cycles, helping the team ship on a consistent 2-week release cadence.",
    ],
    tags: ["React.js", "TypeScript", "React Hooks", "Stencil JS", "Lit JS", "REST APIs"],
  },
];

function FadeIn({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function Experience() {
  return (
    <section
      id="experience"
      className="py-24 bg-[#0d0d1a] relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        <FadeIn className="text-center mb-16">
          {/* <p
            className="text-cyan-400 text-sm tracking-widest uppercase mb-3"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            // work experience
          </p> */}
          <h2
            className="text-4xl text-white"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 700,
            }}
          >
            Where I've Worked
          </h2>
        </FadeIn>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500/50 via-violet-500/30 to-transparent md:left-[50%]" />

          <div className="flex flex-col gap-12">
            {experiences.map((exp, i) => (
              <FadeIn key={exp.company} delay={i * 0.15}>
                <div
                  className={`relative flex flex-col md:flex-row gap-8 ${
                    i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-6 md:left-[50%] top-8 w-3 h-3 rounded-full -translate-x-1/2 z-10 bg-gradient-to-br from-cyan-400 to-violet-500 shadow-lg shadow-cyan-500/30" />

                  {/* Card */}
                  <div
                    className={`ml-14 md:ml-0 md:w-[calc(50%-1.5rem)] p-6 rounded-2xl border border-slate-700/50 bg-[#12121f] hover:border-cyan-500/30 transition-all duration-300 group ${
                      i % 2 === 0 ? "md:mr-6" : "md:ml-6"
                    }`}
                  >
                    {/* Header */}
                    <div className="flex items-start justify-between mb-1 flex-wrap gap-2">
                      <div>
                        <h3
                          className="text-white group-hover:text-cyan-400 transition-colors"
                          style={{
                            fontFamily: "'Space Grotesk', sans-serif",
                            fontWeight: 700,
                            fontSize: "1.1rem",
                          }}
                        >
                          {exp.role}
                        </h3>
                        <p
                          className="text-violet-400 mt-0.5"
                          style={{
                            fontFamily: "'Space Grotesk', sans-serif",
                            fontWeight: 600,
                          }}
                        >
                          {exp.company}
                        </p>
                      </div>
                      {exp.type === "current" && (
                        <span
                          className="px-2 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs"
                          style={{ fontFamily: "'JetBrains Mono', monospace" }}
                        >
                          Current
                        </span>
                      )}
                    </div>

                    {/* Meta */}
                    <div className="flex flex-wrap gap-4 mb-4 mt-2">
                      <span
                        className="flex items-center gap-1.5 text-slate-500 text-sm"
                        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                      >
                        <CalendarDays className="w-3.5 h-3.5" />
                        {exp.period}
                      </span>
                      <span
                        className="flex items-center gap-1.5 text-slate-500 text-sm"
                        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                      >
                        <MapPin className="w-3.5 h-3.5" />
                        {exp.location}
                      </span>
                    </div>

                    {/* Highlights */}
                    <ul className="space-y-2 mb-5">
                      {exp.highlights.map((h, j) => (
                        <li key={j} className="flex items-start gap-2">
                          <span className="text-cyan-400 mt-1.5 shrink-0 text-xs">
                            ▹
                          </span>
                          <span
                            className="text-slate-400 text-sm leading-relaxed"
                            style={{
                              fontFamily: "'Space Grotesk', sans-serif",
                            }}
                          >
                            {h}
                          </span>
                        </li>
                      ))}
                    </ul>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {exp.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 rounded-md bg-slate-800 text-slate-400 text-xs border border-slate-700/50"
                          style={{ fontFamily: "'JetBrains Mono', monospace" }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
