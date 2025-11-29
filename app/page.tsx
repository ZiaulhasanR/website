import Hero from "./components/Hero";
import ExpertiseSection from "./components/ExpertiesSection";
import ServicesSection from "./components/ServicesSection";
import BlogInsightsSection from "./components/BlogInsightsSection";
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
      <ServicesSection />
      <BlogInsightsSection />
      {/* <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact /> */}
    </>
  );
}
