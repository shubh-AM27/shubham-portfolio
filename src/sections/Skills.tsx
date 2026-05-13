import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Reveal, SectionTitle } from "@/components/Reveal";
import { skills } from "@/data/skills";

function Bar({ name, level, delay }: { name: string; level: number; delay: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  return (
    <div ref={ref}>
      <div className="mb-1.5 flex justify-between text-xs">
        <span className="font-medium">{name}</span>
        <span className="font-mono text-muted-foreground">{level}%</span>
      </div>
      <div className="h-1.5 overflow-hidden rounded-full bg-muted/40">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : {}}
          transition={{ duration: 1.1, delay, ease: [0.16, 1, 0.3, 1] }}
          className="h-full rounded-full"
          style={{
            background: "linear-gradient(90deg, color-mix(in oklab, var(--accent) 50%, transparent), var(--accent))",
            boxShadow: "0 0 12px var(--accent-glow)",
          }}
        />
      </div>
    </div>
  );
}

export function Skills() {
  return (
    <section id="skills" className="relative py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionTitle eyebrow="Capabilities / arsenal" title="Skill matrix" />
        <div className="grid gap-6 lg:grid-cols-3">
          {skills.map((cat, ci) => (
            <Reveal key={cat.category} delay={ci * 0.1}>
              <div className="glass glow-card h-full rounded-2xl p-6">
                <div
                  className="font-mono text-[10px] uppercase tracking-widest"
                  style={{ color: "var(--accent)" }}
                >
                  /{ci + 1} module
                </div>
                <h3 className="mt-2 text-lg font-semibold">{cat.category}</h3>
                <div className="mt-6 space-y-4">
                  {cat.items.map((s, i) => (
                    <Bar key={s.name} name={s.name} level={s.level} delay={i * 0.08} />
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
