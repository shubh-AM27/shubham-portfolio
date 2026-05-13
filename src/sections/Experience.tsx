import { Reveal, SectionTitle } from "@/components/Reveal";
import { experience } from "@/data/experience";

export function Experience() {
  return (
    <section id="experience" className="relative py-32">
      <div className="mx-auto max-w-5xl px-6">
        <SectionTitle eyebrow="Trajectory / experience" title="Mission log" />
        <div className="relative">
          <div
            className="absolute left-4 top-0 h-full w-px md:left-1/2"
            style={{ background: "linear-gradient(to bottom, transparent, var(--accent), transparent)" }}
          />
          {experience.map((e, i) => (
            <Reveal key={e.role} delay={i * 0.1}>
              <div
                className={`relative mb-10 flex flex-col gap-4 md:flex-row ${
                  i % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className="md:w-1/2" />
                <div className="absolute left-4 top-3 -translate-x-1/2 md:left-1/2">
                  <span
                    className="block h-3 w-3 rounded-full"
                    style={{ background: "var(--accent)", boxShadow: "0 0 18px var(--accent-glow)" }}
                  />
                </div>
                <div className="ml-10 md:ml-0 md:w-1/2 md:px-8">
                  <div className="glass glow-card rounded-2xl p-6">
                    <div
                      className="font-mono text-[10px] uppercase tracking-widest"
                      style={{ color: "var(--accent)" }}
                    >
                      {e.period}
                    </div>
                    <h3 className="mt-2 text-lg font-semibold">{e.role}</h3>
                    <div className="text-sm text-muted-foreground">{e.company}</div>
                    <p className="mt-3 text-sm text-foreground/80">{e.description}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
