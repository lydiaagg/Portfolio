import { motion } from "framer-motion";
import { FaGithub, FaLinkedin ,FaEnvelope } from "react-icons/fa";

export default function Apropos() {
  const socialMedia = [
    {
      icon: <FaGithub />,
      href: "https://github.com/lydiaagg",
      label: "https://github.com/lydiaagg",
    },
    {
      icon: <FaLinkedin />,
      href: "https://www.linkedin.com/in/lydia-agguini-894a871ab/",
      label: "https://www.linkedin.com/in/lydia-agguini-894a871ab/",
    },
     {
      icon: <FaEnvelope />,
      href:"mailto:agguinilydia@gmail.com",
      label: "agguinilydia@gmail.com",
    },
  ];

  return (
    <section
      id="apropos"
      className="py-24 px-6 md:px-10 bg-white grid md:grid-cols-2 gap-10 items-center"
    >
      {/* TEXTE */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="description"
      >
        <h2 className="text-4xl font-bold mb-10">
          A propos de <span className="text-orange-400" >Moi</span>
        </h2>

        <p className="text-black text-md">
  Ingénieure logicielle spécialisée dans le développement de systèmes logiciels modernes, je conçois et développe des applications performantes, scalables et orientées utilisateur.
              </p>

        <p className="text-black text-md">

  Mon expertise couvre l’ingénierie logicielle, l’architecture d’applications, le développement full stack, ainsi que la conception de solutions backend et frontend.
        </p>
        <p className="text-black text-md">

   Je maîtrise des technologies telles que JavaScript, PHP, Laravel et React ,Nodejs, et je travaille sur la création d’API, la gestion de bases de données et l’optimisation des performances.
        </p>
        <p className="text-black text-md mb-5">
              Curieuse et passionnée par les nouvelles technologies, je m’oriente également vers la data science et l’intelligence artificielle pour concevoir des solutions innovantes basées sur les données.
</p>
        <motion.a
          href="#parcours"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block bg-black text-white font-semibold px-6 py-3 rounded-lg shadow-lg"
        >
          Voir mon Parcours
        </motion.a>
      </motion.div>

      {/* RÉSEAUX SOCIAUX */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="socialMedia"
      >
        <div className="flex flex-col gap-5">
          {socialMedia.map((item, index) => (
            <motion.a
              key={index}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              whileHover={{
                scale: 1.05,
                x: 5,
              }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-3 px-6 py-4 rounded-xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition"
            >
              {/* ICON */}
              <span className="text-2xl text-black">
                {item.icon}
              </span>

              {/* LABEL */}
              <span className="font-medium text-black">
                {item.label}
              </span>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}