import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { personalInfo } from "@/data/personalInfo";
import { useMode } from "@/hooks/use-mode";
import { modes } from "@/data/modes";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

function useTyped(words: string[], speed = 80) {
  const [text, setText] = useState("");
  const [i, setI] = useState(0);
  const [del, setDel] = useState(false);
  useEffect(() => {
    const w = words[i % words.length];
    const t = setTimeout(
      () => {
        if (!del) {
          setText(w.slice(0, text.length + 1));
          if (text.length + 1 === w.length) setTimeout(() => setDel(true), 1500);
        } else {
          setText(w.slice(0, text.length - 1));
          if (text.length - 1 === 0) {
            setDel(false);
            setI((x) => x + 1);
          }
        }
      },
      del ? speed / 2 : speed,
    );
    return () => clearTimeout(t);
  }, [text, del, i, words, speed]);
  return text;
}

export function Hero() {
  const { mode } = useMode();
  const typed = useTyped(personalInfo.titles);

  return (
    <section className="relative isolate flex min-h-screen items-center justify-center overflow-hidden">
      <div className="nebula-bg absolute inset-0 -z-10" />
      <div className="grid-bg absolute inset-0 -z-10 opacity-40" />

      {/* Orbital system */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 -translate-x-1/2 -translate-y-1/2">
        {[260, 380, 520, 680].map((r, i) => (
          <div
            key={r}
            className="absolute rounded-full border"
            style={{
              width: r * 2, height: r * 2, left: -r, top: -r,
              borderColor: "color-mix(in oklab, var(--accent) 18%, transparent)",
              animation: `spin ${40 + i * 10}s linear infinite`,
            }}
          >
            <span
              className="absolute -top-1.5 left-1/2 h-3 w-3 rounded-full"
              style={{ background: "var(--accent)", boxShadow: "0 0 18px var(--accent-glow)" }}
            />
          </div>
        ))}
        <div
          className="h-40 w-40 animate-pulse-glow rounded-full"
          style={{
            background: "radial-gradient(circle, var(--accent), transparent 70%)",
            filter: "blur(8px)",
          }}
        />
      </div>

      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <div
            className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-1.5 font-mono text-xs"
            style={{
              borderColor: "color-mix(in oklab, var(--accent) 40%, transparent)",
              color: "var(--accent)",
              background: "color-mix(in oklab, var(--accent) 6%, transparent)",
            }}
          >
            <span className="h-2 w-2 animate-pulse rounded-full" style={{ background: "var(--accent)" }} />
            online · {modes[mode].label.toLowerCase()} mode
          </div>

          <h1 className="font-display text-5xl font-bold tracking-tight md:text-7xl lg:text-8xl">
            <span className="block">{personalInfo.name}</span>
            <span className="mt-2 block">
              <span className="gradient-text glow-text caret">{typed}</span>
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
            {personalInfo.tagline}
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="glow-border group relative overflow-hidden rounded-full px-7 py-3 text-sm font-semibold"
              style={{ background: "var(--accent)", color: "var(--accent-foreground)" }}
            >
              <span className="relative z-10">Explore the Mission</span>
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="glass rounded-full px-7 py-3 text-sm font-semibold"
            >
              Initiate Contact
            </motion.a>
          </div>

          <div className="mt-10 flex items-center justify-center gap-5 text-muted-foreground">
            {[
              { Icon: Github, href: personalInfo.socials.github },
              { Icon: Linkedin, href: personalInfo.socials.linkedin },
              { Icon: Mail, href: `mailto:${personalInfo.email}` },
            ].map(({ Icon, href }, i) => (
              <a
                key={i}
                href={href}
                className="transition-colors hover:text-[color:var(--accent)]"
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground"
      >
        <ArrowDown className="h-5 w-5 animate-bounce" />
      </motion.div>
    </section>
  );
}
