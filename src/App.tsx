import { ModeProvider } from "@/hooks/use-mode";
import { ModeSwitcher } from "@/components/ModeSwitcher";
import { ModeTransition } from "@/components/ModeTransition";
import { Starfield } from "@/components/Starfield";
import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { Projects } from "@/sections/Projects";
import { Experience } from "@/sections/Experience";
import { Certifications } from "@/sections/Certifications";
import { Skills } from "@/sections/Skills";
import { Contact, Footer } from "@/sections/Contact";

export default function App() {
  return (
    <ModeProvider>
      <div className="relative min-h-screen overflow-hidden bg-background text-foreground">
        <Starfield />
        <ModeTransition />
        <ModeSwitcher />
        <main className="relative z-10">
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Experience />
          <Certifications />
          <Contact />
        </main>
        <Footer />
      </div>
    </ModeProvider>
  );
}
