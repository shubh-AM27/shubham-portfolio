export type Mode = "devops" | "security" | "fullstack";

export const modes: Record<
  Mode,
  { label: string; tagline: string; accent: string; accentSoft: string; glow: string }
> = {
  devops: {
    label: "DevOps",
    tagline: "// pipelines.deploy(infinity)",
    accent: "0.85 0.25 145", // neon green oklch components
    accentSoft: "0.7 0.2 145",
    glow: "rgba(57, 255, 138, 0.45)",
  },
  security: {
    label: "Security",
    tagline: "> access.granted",
    accent: "0.7 0.27 22",
    accentSoft: "0.6 0.22 22",
    glow: "rgba(255, 70, 80, 0.45)",
  },
  fullstack: {
    label: "Full Stack",
    tagline: "<build immersive products />",
    accent: "0.7 0.22 250",
    accentSoft: "0.62 0.2 250",
    glow: "rgba(80, 150, 255, 0.5)",
  },
};
