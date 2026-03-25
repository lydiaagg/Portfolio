import { motion } from "framer-motion";

import skillGroups from '../data/competences'

export default function Competence() {
  return (
    <section id="competences" className="py-24 px-6 md:px-10 ">
      
      <h2 className="text-4xl font-bold mb-10 text-center">
        Mes <span className="text-orange-400" >Compétences</span>
      </h2>

      <div className="mb-gap-10 max-w-6xl mx-auto  grid md:grid-cols-3 gap-10">

        {skillGroups.map((group, i) => (
          <motion.div
            key={i}
            className="p-6 block-competence transition"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
          >
            <h3 className="text-xl font-semibold mb-6">
              {group.title}
            </h3>

            <div className="space-y-5">
              {group.skills.map((skill, index) => (
                <div className="competence-info" key={index}>

                  <div className="flex justify-between text-sm mb-1">
                    <span>{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>

                  <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-orange-400 to-orange-600 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1 }}
                    />
                  </div>

                </div>
              ))}
            </div>

          </motion.div>
        ))}

      </div>
    </section>
  );
}