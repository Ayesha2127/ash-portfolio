
import Hero from "@/components/HERO";
import Python from "@/components/PYTHON";
import Skills from "@/components/SKILLS";

export default function Home() {
  return (
    <div className="gap-y-11">
      <Hero/>
      <Skills/>
      <Python/>
    </div>
  );
}
