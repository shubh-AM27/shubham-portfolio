import { Reveal, SectionTitle } from "@/components/Reveal";
import { personalInfo } from "@/data/personalInfo";
import { Sparkles, Globe, Cpu } from "lucide-react";

const stats = [
  { Icon: Sparkles, label: "Years in orbit", value: "3" },
  { Icon: Globe, label: "Systems shipped", value: "4" },
  { Icon: Cpu, label: "Cloud regions", value: "1" },
];

export function About() {
  return (
    <section id="about" className="relative py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionTitle eyebrow="About / origin" title="Signal from the engineer" />
        <div className="grid gap-8 md:grid-cols-5">
          <Reveal className="md:col-span-3">
            <div className="glass glow-card rounded-2xl p-8 md:p-10">
              <p className="text-lg leading-relaxed text-foreground/90">{personalInfo.bio}</p>
              <div className="mt-8 grid grid-cols-3 gap-4">
                {stats.map(({ Icon, label, value }) => (
                  <div key={label} className="rounded-xl border border-border/60 p-4">
                    <Icon className="h-5 w-5" style={{ color: "var(--accent)" }} />
                    <div className="mt-3 text-2xl font-bold">{value}</div>
                    <div className="text-xs text-muted-foreground">{label}</div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.15} className="md:col-span-2">
            <div className="glass glow-card relative h-full overflow-hidden rounded-2xl p-8">
              <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                /sys/identity
              </div>
              <ul className="mt-6 space-y-4 font-mono text-sm">
                {[
                  ["alias", personalInfo.name.toLowerCase().replace(" ", "_")],
                  ["location", personalInfo.location],
                  ["status", "available_for_missions"],
                  ["focus", "platforms · security · products"],
                ].map(([k, v]) => (
                  <li key={k} className="flex justify-between border-b border-border/40 pb-2">
                    <span className="text-muted-foreground">{k}</span>
                    <span style={{ color: "var(--accent)" }}>{v}</span>
                  </li>
                ))}
              </ul>
              <div
                className="pointer-events-none absolute -bottom-20 -right-20 h-56 w-56 rounded-full opacity-50 blur-3xl"
                style={{ background: "var(--accent)" }}
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
