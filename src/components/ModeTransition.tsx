import { motion, AnimatePresence } from "framer-motion";
import { useMode } from "@/hooks/use-mode";

/** Cinematic warp overlay that flashes between mode changes */
export function ModeTransition() {
  const { mode } = useMode();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={mode}
        className="pointer-events-none fixed inset-0 z-40"
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1.1, ease: "easeOut" }}
      >
        {/* Nebula warp */}
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 0, opacity: 0.9 }}
          animate={{ scale: 6, opacity: 0 }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          style={{
            background:
              "radial-gradient(circle at 50% 50%, var(--accent-glow), transparent 60%)",
          }}
        />
        {/* Orbital ring */}
        <motion.div
          className="absolute left-1/2 top-1/2 rounded-full border"
          style={{ borderColor: "var(--accent)", width: 40, height: 40, marginLeft: -20, marginTop: -20 }}
          initial={{ scale: 0, opacity: 1, rotate: 0 }}
          animate={{ scale: 60, opacity: 0, rotate: 180 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />
      </motion.div>
    </AnimatePresence>
  );
}
