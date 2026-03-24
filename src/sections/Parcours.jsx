import { motion } from "framer-motion";
import experiences from "../data/experience";
import IconCheck from "../components/IconCheck";


export default function Parcours() {
  return (
    <section id="parcours" className="py-24 px-6 bg-white md:px-16 text-white">

      {/* TITLE */}
      <div className="text-center mb-20">
        <h2 className="text-4xl text-black font-bold">
          Parcours & <span className="text-orange-400" >Expérience</span>
        </h2>
        <p className="text-gray-400 mt-3">
          Mon évolution académique et professionnelle
        </p>
      </div>

      {/* TIMELINE */}
      <div className="relative mx-auto">

        {/* LINE */}
        <div className="absolute line left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-[#47ae5a]/40"></div>

        {experiences.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className={`mb-12  flex flex-col md:flex-row items-start md:items-center ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}
          >

            {/* DOT */}
            <div className="cercle absolute left-4 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-orange shadow-lg shadow-[#47ae5a]/40"></div>

            {/* CARD */}
            <div className="ml-10 block-parcours md:ml-0 md:w-1/2 p-6 bg-orange border border-white/10 rounded-xl hover:border-orange transition">

              <h3 className="text-lg text-orange-400 font-semibold mb-1">
                {item.title}
              </h3>

              <p className="text-black text-sm mb-3">
                {item.date}
              </p>

              <ul className="space-y-2 text-sm text-black">
                {item.desc.map((d, i) => (
                  <li key={i}><IconCheck />{d}</li>
                ))}
              </ul>

            </div>

          </motion.div>
        ))}

      </div>
    </section>
  );
}