import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { modes, type Mode } from "@/data/modes";

type Ctx = { mode: Mode; setMode: (m: Mode) => void };
const ModeContext = createContext<Ctx | null>(null);

export function ModeProvider({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState<Mode>("fullstack");

  useEffect(() => {
    const m = modes[mode];
    const [l, c, h] = m.accent.split(" ");
    const root = document.documentElement;
    root.style.setProperty("--accent-l", l);
    root.style.setProperty("--accent-c", c);
    root.style.setProperty("--accent-h", h);
    root.style.setProperty("--accent-glow", m.glow);
  }, [mode]);

  return <ModeContext.Provider value={{ mode, setMode }}>{children}</ModeContext.Provider>;
}

export function useMode() {
  const ctx = useContext(ModeContext);
  if (!ctx) throw new Error("useMode outside provider");
  return ctx;
}
