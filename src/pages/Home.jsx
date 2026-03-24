import Navbar from "../components/Navbar";
import Hero from "../sections/Hero";
import Competence from "../sections/Competence";
import Services from "../sections/Services";
import Stats from "../sections/Stats";
import Portfolio from "../sections/Portfolio";
import Parcours from "../sections/Parcours";
import Contact from "../sections/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Competence />
      <Services />
      <Stats />
      <Portfolio />
      <Parcours />
      <Contact />
    </>
  );
}