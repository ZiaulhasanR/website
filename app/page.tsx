import Hero from "./components/Hero";
import ExpertiseSection from "./components/ExpertiesSection";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ExpertiseSection />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
    </>
  );
}
