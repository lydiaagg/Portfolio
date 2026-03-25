import profile from "../assets/profile.png";
import numilog from "../assets/Numilog-Entreprise-de-transport-et-de-logistique-en-Algerie.png"
import mzmotors from "../assets/Location-Vente-et-Entretien-pieces-de-rechange-vehicules-Hyundai.png"
import Dareldjazairia from "../assets/Dareldjazairia.png"
import Autolumiere from "../assets/Auto-lumiere.png"
import Pigier from "../assets/Pigier.png"
import SmiledEvents from "../assets/Smiled-Events.png"
import Marketing from "../assets/Marketing-Digital-Sites-Web-Reseaux-Sociaux-Publicite-Display.png"
import { motion } from "framer-motion";


export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center text-white px-6 md:px-10"
    >
      <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-10">
        
        {/* TEXT */}
        <div className="space-y-6  py-24 ">
          <div className="absolute w-72 h-72 bg-sky-500 opacity-20 blur-3xl rounded-full"></div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Full Stack Developer (Laravel & JavaScript) | Software Engineer<span className="text-green"> Passionate about AI & Data Science</span>
          </h1>

          <p className="text-black text-md leading-relaxed">
            Conception et programmation d’applications interactives,
            comme des plateformes de réservation, des marketplaces
            ou des réseaux sociaux.
          </p>

          <div className="flex gap-4">
            <motion.a
              href="#contact"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block bg-black text-white font-semibold px-6 py-3 rounded-lg shadow-lg"            >
              Contactez-moi
            </motion.a>

            <motion.a
              href="#portfolio"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block bg-white text-black font-semibold px-6 py-3 rounded-lg shadow-lg"            >
              Voir mes projets
            </motion.a>
          </div>
        </div>

        {/* IMAGE */}
        <div className="relative flex justify-center">
          
       
         <div class="scroll-container">
  
  <div class="column column-down">
    <div class="track">
      <img src={numilog} />
      <img src={Autolumiere} />
      <img src={numilog} />
      <img src={Autolumiere} />
    </div>
  </div>

  <div class="column column-up">
    <div class="track">
      <img src={Dareldjazairia} />
      <img src={mzmotors} />
      <img src={Dareldjazairia} />
      <img src={mzmotors} />
    </div>
  </div>

  <div class="column column-down">
    <div class="track">
      <img src={Pigier} />
      <img src={SmiledEvents} />
      <img src={Marketing} />
      <img src={SmiledEvents} />
    </div>
  </div>

</div>
        </div>

      </div>
    </section>
  );
}