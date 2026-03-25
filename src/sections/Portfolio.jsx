import { useState } from "react";
import { motion } from "framer-motion";
import projects from "../data/portfolio";
import Check from "../components/Icons/check";

/* FILTERS */
const filters = ["All", "Laravel", "React + Nodejs", "Nextjs" ,"WordPress"];

export default function Portfolio() {
  const [active, setActive] = useState("All"); 
  const [currentPage, setCurrentPage] = useState(1); 
  const itemsPerPage = 9; 
  /* FILTER */ 
  const filteredProjects = active === "All" ? projects 
  : projects.filter((p) => p.category === active); 
  const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const displayedProjects = filteredProjects.slice( startIndex, startIndex + itemsPerPage );
  const handleFilter = (f) => { setActive(f); setCurrentPage(1); }; 
  const handlePageChange = (page) => { setCurrentPage(page); };
  return (
    <section id="portfolio" className="bg-white py-24 px-6 md:px-16">

      {/* TITLE */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold">
          Mon <span className="text-green">Portfolio</span>
        </h2>
        <p className="text-gray-400 mt-3">
          Quelques projets réalisés
        </p>
      </div>

      {/* FILTERS */}
      <div className="flex justify-center flex-wrap gap-4 mb-12">
        {filters.map((f, i) => (
          <button
            key={i}
            onClick={() => setActive(f)}
            className={`px-5 py-2 block-filtre rounded-full border transition ${
              active === f
                ? "bg-orange-400 text-black"
                : "border-white/20 hover:border-orange-400"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* PROJECTS */}
      <div className="grid md:grid-cols-3 mb-gap-cols gap-8 max-w-6xl mx-auto">

        {displayedProjects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0 }}
            className="block-projet rounded-xl overflow-hidden border border-white/10 group hover:-translate-y-2 transition"
          >

            {/* IMAGE */}
            <div className="h-48 overflow-hidden">
              <img
                src={project.image}
                alt=""
                className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
              />
            </div>

            {/* CONTENT */}
            <div className="p-6">

              <h3 className="text-lg font-semibold mb-2">
                {project.title}
              </h3>

              <p className="text-gray-400 text-sm mb-4">
                {project.desc}
              </p>
               <ul className="text-gray-400 text-sm mb-4">
                {project.features.map((d, i) => (
                  <li key={i}><Check />{d}</li>
                ))}
              </ul>


              {/* TECH */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="text-xs bg-orange-400/10 text-orange-400 px-2 py-1 rounded"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* BUTTON */}
              <a href={project.url} target="__blank" className="text-sm text-orange-400 hover:underline">
                Voir le projet →
              </a>

            </div>

          </motion.div>
        ))}

      </div>
<div className="flex justify-center mt-12 gap-2 flex-wrap">
<button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1} className="px-4 py-2 border rounded disabled:opacity-30" > ← </button>
{[...Array(totalPages)].map((_, i) => ( <button key={i} onClick={() => handlePageChange(i + 1)} className={`px-4 py-2 rounded transition ${ currentPage === i + 1 ? "bg-orange-400 text-black" : "border border-white/20 hover:border-orange-400" }`} > {i + 1} </button> ))} 
<button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages} className="px-4 py-2 border rounded disabled:opacity-30" > → </button>
      </div>
    </section>
  );
}