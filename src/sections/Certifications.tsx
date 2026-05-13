import { Reveal, SectionTitle } from "@/components/Reveal";
import { certifications } from "@/data/certifications";
import { Award, ExternalLink } from "lucide-react";

export function Certifications() {
  return (
    <section id="certifications" className="relative py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionTitle eyebrow="Credentials / sealed" title="Certifications" />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((c, i) => (
            <Reveal key={c.name} delay={i * 0.05}>
              <div className="glass glow-card group rounded-2xl p-6">
                <div className="flex items-start justify-between">
                  <Award className="h-6 w-6" style={{ color: "var(--accent)" }} />
                  <span className="font-mono text-xs text-muted-foreground">{c.year}</span>
                </div>
                <h3 className="mt-4 font-semibold leading-snug">{c.name}</h3>
                <div className="mt-1 text-sm text-muted-foreground">{c.issuer}</div>
                <a
                  href={c.url}
                  className="mt-4 inline-flex items-center gap-1.5 text-xs font-medium transition-opacity hover:opacity-80"
                  style={{ color: "var(--accent)" }}
                >
                  View certificate <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
