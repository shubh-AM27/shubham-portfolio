import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal, SectionTitle } from "@/components/Reveal";
import { projects } from "@/data/projects";
import { useMode } from "@/hooks/use-mode";
import { ExternalLink, Github, Plus } from "lucide-react";

export function Projects() {
  const { mode } = useMode();
  const [open, setOpen] = useState<number | null>(null);
  const filtered = projects.filter((p) => p.mode === mode);

  return (
    <section id="projects" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle
          eyebrow="Projects / constellations"
          title="Selected missions"
          description="Filtered by current mode. Switch the orbit above to explore other domains."
        />
        <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((p, i) => (
              <motion.article
                layout
                key={p.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                whileHover={{ rotateX: -3, rotateY: 3 }}
                style={{ transformStyle: "preserve-3d" }}
                className="glass glow-card group rounded-2xl p-6"
              >
                <div className="flex items-start justify-between">
                  <div
                    className="font-mono text-[10px] uppercase tracking-widest"
                    style={{ color: "var(--accent)" }}
                  >
                    {String(i + 1).padStart(2, "0")} / mission
                  </div>
                  <button
                    onClick={() => setOpen(open === i ? null : i)}
                    className="rounded-full border border-border/60 p-1.5 transition-colors hover:border-[color:var(--accent)]"
                    aria-label="expand"
                  >
                    <Plus
                      className={`h-3.5 w-3.5 transition-transform ${open === i ? "rotate-45" : ""}`}
                    />
                  </button>
                </div>

                <h3 className="mt-4 text-xl font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.description}</p>

                <AnimatePresence initial={false}>
                  {open === i && (
                    <motion.p
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="mt-3 overflow-hidden text-sm text-foreground/80"
                    >
                      {p.details}
                    </motion.p>
                  )}
                </AnimatePresence>

                <div className="mt-5 flex flex-wrap gap-1.5">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border px-2.5 py-0.5 text-[10px] font-mono"
                      style={{
                        borderColor: "color-mix(in oklab, var(--accent) 25%, transparent)",
                        color: "var(--accent)",
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex gap-2">
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex flex-1 items-center justify-center gap-1.5 rounded-lg border border-border/60 py-2 text-xs font-medium transition-colors hover:border-[color:var(--accent)]"
                  >
                    <Github className="h-3.5 w-3.5" /> Source
                  </a>
                  <a
                    href={p.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="flex flex-1 items-center justify-center gap-1.5 rounded-lg py-2 text-xs font-semibold transition-transform hover:scale-[1.02]"
                    style={{
                      background: "var(--accent)",
                      color: "var(--accent-foreground)",
                      boxShadow: "0 0 22px -4px var(--accent-glow)",
                    }}
                  >
                    <ExternalLink className="h-3.5 w-3.5" /> Live
                  </a>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <Reveal className="mt-12 text-center text-muted-foreground">
            No missions in this orbit yet.
          </Reveal>
        )}
      </div>
    </section>
  );
}
