import { useState } from "react";
import { motion } from "framer-motion";
import { Reveal, SectionTitle } from "@/components/Reveal";
import { personalInfo } from "@/data/personalInfo";
import { Github, Linkedin, Mail, Send, CodeXml } from "lucide-react";

function Field({
  label, type = "text", as = "input", ...rest
}: { label: string; type?: string; as?: "input" | "textarea" } & Record<string, unknown>) {
  const [focus, setFocus] = useState(false);
  const Tag = (as === "textarea" ? "textarea" : "input") as "input";
  return (
    <label className="block">
      <div
        className="mb-1.5 font-mono text-[10px] uppercase tracking-widest transition-colors"
        style={{ color: focus ? "var(--accent)" : "color-mix(in oklab, var(--color-muted-foreground) 100%, transparent)" }}
      >
        {label}
      </div>
      <Tag
        type={type}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        className="w-full rounded-lg border bg-transparent px-4 py-3 text-sm outline-none transition-all placeholder:text-muted-foreground/60"
        style={{
          borderColor: focus ? "var(--accent)" : "var(--color-border)",
          boxShadow: focus ? "0 0 0 3px color-mix(in oklab, var(--accent) 20%, transparent)" : "none",
          minHeight: as === "textarea" ? 130 : undefined,
        }}
        {...rest}
      />
    </label>
  );
}

export function Contact() {
  const socials = [
    { Icon: Github, label: "GitHub", href: personalInfo.socials.github },
    { Icon: Linkedin, label: "LinkedIn", href: personalInfo.socials.linkedin },
    { Icon: CodeXml, label: "Leetcode", href: personalInfo.socials.leetcode },
    { Icon: Mail, label: "Email", href: `mailto:${personalInfo.email}` },
  ];
  return (
    <section id="contact" className="relative py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionTitle
          eyebrow="Transmission / contact"
          title="Open a channel"
          description="Whether it's an idea, a problem, or a mission — let's talk."
        />
        <div className="grid gap-6 lg:grid-cols-5">
          <Reveal className="lg:col-span-2">
            <div className="glass glow-card flex h-full flex-col justify-between rounded-2xl p-8">
              <div>
                <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                  /direct
                </div>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="mt-3 block text-xl font-semibold transition-colors hover:opacity-80"
                  style={{ color: "var(--accent)" }}
                >
                  {personalInfo.email}
                </a>
                <p className="mt-2 text-sm text-muted-foreground">{personalInfo.location}</p>
              </div>
              <div className="mt-10 grid grid-cols-2 gap-3">
                {socials.map(({ Icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    className="flex items-center gap-2 rounded-xl border border-border/60 p-3 text-sm transition-all hover:-translate-y-0.5 hover:border-[color:var(--accent)]"
                  >
                    <Icon className="h-4 w-4" /> {label}
                  </a>
                ))}
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-3">
            <form
              onSubmit={(e) => e.preventDefault()}
              className="glass glow-card space-y-5 rounded-2xl p-8"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Name" placeholder="Your name" />
                <Field label="Email" type="email" placeholder="you@orbit.space" />
              </div>
              <Field label="Message" as="textarea" placeholder="What are we building?" />
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="group relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-lg px-6 py-3.5 text-sm font-semibold"
                style={{
                  background: "var(--accent)",
                  color: "var(--accent-foreground)",
                  boxShadow: "0 0 30px -4px var(--accent-glow)",
                }}
              >
                <Send className="h-4 w-4" /> Transmit Signal
              </motion.button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="relative border-t border-border/40 py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 text-xs text-muted-foreground md:flex-row">
        <div className="font-mono">© {new Date().getFullYear()} {personalInfo.name} · all signals reserved</div>
        <div className="font-mono">crafted in deep space</div>
      </div>
    </footer>
  );
}
