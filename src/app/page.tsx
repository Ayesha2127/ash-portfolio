
import Contact from "@/components/CONTACT";
import Hero from "@/components/HERO";
import Projects from "@/components/PROJECTS";
import Python from "@/components/PYTHON";
import Services from "@/components/SERVICES";
import Skills from "@/components/SKILLS";

export default function Home() {
  return (
    <div className="gap-y-11">
      <Hero/>
      <Skills/>
      <Services/>
      <Python/>
      <Projects/>
      <Contact/>
    </div>
  );
}
