import { motion, AnimatePresence } from "framer-motion";
import { useMode } from "@/hooks/use-mode";
import { modes, type Mode } from "@/data/modes";

const order: Mode[] = ["devops", "security", "fullstack"];

export function ModeSwitcher() {
  const { mode, setMode } = useMode();

  return (
    <div className="fixed top-5 right-5 z-50">
      <div className="glass relative flex items-center gap-1 rounded-full p-1.5">
        {order.map((m) => {
          const active = mode === m;
          return (
            <button
              key={m}
              onClick={() => setMode(m)}
              className="relative px-4 py-1.5 text-xs font-medium uppercase tracking-wider transition-colors"
              style={{ color: active ? "var(--accent-foreground)" : "var(--color-muted-foreground)" }}
            >
              {active && (
                <motion.span
                  layoutId="mode-pill"
                  className="absolute inset-0 rounded-full"
                  style={{
                    background: "var(--accent)",
                    boxShadow: "0 0 24px var(--accent-glow)",
                  }}
                  transition={{ type: "spring", stiffness: 380, damping: 32 }}
                />
              )}
              <span className="relative z-10">{modes[m].label}</span>
            </button>
          );
        })}
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={mode}
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -4 }}
          className="mt-2 text-right font-mono text-[10px] tracking-widest text-muted-foreground"
        >
          {modes[mode].tagline}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
