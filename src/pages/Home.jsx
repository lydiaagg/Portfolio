import Navbar from "../components/Navbar";
import Hero from "../sections/Hero";
import Competence from "../sections/Competence";
import Services from "../sections/Services";
import Stats from "../sections/Stats";
import Portfolio from "../sections/Portfolio";
import Parcours from "../sections/Parcours";
import Contact from "../sections/Contact";
import Seo from "../components/Seo";

export default function Home() {
  return (
    <>
       <Seo 
          title="Développeuse Full Stack | React, Node.js, Laravel – Portfolio de Lydia" 
          description ="Portfolio de Lydia Agguini, développeuse full stack spécialisée en React, Node.js et Laravel. Découvrez mes projets et compétences."
          keywords ="développeuse web, React, Node.js, Laravel, portfolio, full stack,applciation"
          author ="Lydia Agguini">
      </Seo>

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