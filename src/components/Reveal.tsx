import { motion, useInView } from "framer-motion";
import { useRef, type ReactNode } from "react";

export function Reveal({
  children,
  delay = 0,
  className = "",
  y = 24,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  y?: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function SectionTitle({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <Reveal className="mb-14 text-center">
      <div
        className="mb-3 inline-flex items-center gap-2 rounded-full border px-3 py-1 font-mono text-[10px] uppercase tracking-[0.3em]"
        style={{ borderColor: "color-mix(in oklab, var(--accent) 35%, transparent)", color: "var(--accent)" }}
      >
        <span className="h-1.5 w-1.5 rounded-full" style={{ background: "var(--accent)", boxShadow: "0 0 10px var(--accent-glow)" }} />
        {eyebrow}
      </div>
      <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
        <span className="gradient-text">{title}</span>
      </h2>
      {description && <p className="mx-auto mt-4 max-w-xl text-muted-foreground">{description}</p>}
    </Reveal>
  );
}
