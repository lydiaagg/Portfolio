import { motion } from "framer-motion";
import {
  Monitor,
  LayoutDashboard,
  Gauge,
  Wrench,
  Puzzle,
  ShieldCheck,
} from "lucide-react";
import services from "../data/services";



/* COMPONENT */
export default function ServicesPage() {
  return (
    <section id="services" className="py-24 px-6 md:px-16 bg-white min-h-screen">

      {/* HEADER */}
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-bold">
          Mes <span className="text-green">Services</span>
        </h2>
        <p className="text-gray-400 mt-4">
          Ce que je peux faire pour vous
        </p>
      </div>

      {/* GRID */}
      <div className="grid md:grid-cols-3 mb-gap-10 gap-10 max-w-6xl bg-white mx-auto">

        {services.map((service, index) => {
          const Icon = service.icon;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group block-service relative border border-white/10 rounded-2xl p-8 text-center overflow-hidden transition duration-300 hover:-translate-y-3 hover:border-orange-400 hover:shadow-[0_0_40px_rgba(255,120,50,0.2)] "
            >

                {/* ICON */}
                <div className="flex justify-center mb-6 relative">
                  <div className="absolute w-20 h-20 bg-orange-400/20 blur-2xl rounded-full"></div>

                  <div className="w-16 h-16 flex items-center justify-center rounded-xl bg-orange-400/10 group-hover:bg-orange-400/20 transition relative">
                    <Icon className="w-7 h-7 text-orange-400 group-hover:scale-110 transition" />
                  </div>
                </div>

                {/* LINE */}
                <div className="w-10 h-1 bg-orange-400 mx-auto mb-4 rounded-full"></div>

                {/* TITLE */}
                <h3 className="text-lg font-semibold mb-3">
                  {service.title}
                </h3>

                {/* DESC */}
                <p className="text-gray-400 text-sm leading-relaxed">
                  {service.desc}
                </p>

                {/* HOVER OVERLAY */}
                <div className="absolute inset-0 bg-orange-400 opacity-0 group-hover:opacity-10 transition"></div>

             
            </motion.div>
          );
        })}

      </div>

    </section>
  );
}