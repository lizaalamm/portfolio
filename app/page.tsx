import Nav from "@/components/nav";
import Hero from "@/components/hero";
import StackBoard from "@/components/stack-board";
import Projects from "@/components/projects";
import Experience from "@/components/experience";
import Certifications from "@/components/certifications";
import Skills from "@/components/skills";
import About from "@/components/about";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Page() {
  return (
    <>
      <Nav />
      <main id="main">
        <Hero />
        <StackBoard />
        <Projects />
        <Experience />
        <Certifications />
        <Skills />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}