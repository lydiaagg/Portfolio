import React from "react";

export default function Stats() {
  const stats = [
    {
      number: "50+",
      label: "Projets réalisés",
      desc: "Applications web Laravel, Node.js, React & WordPress",
    },
    {
      number: "4+",
      label: "Années d'expérience",
      desc: "Développement web full stack en environnement professionnel",
    },
    {
      number: "5+",
      label: "Années d'études",
      desc: "Informatique & ingénierie des systèmes d'information",
    },
  ];

  return (
    <section id="chiffre-cle" className="text-white py-24">

      <div className="max-w-6xl mx-auto px-6">

        {/* TITLE */}
        <div className="text-center mb-16">
          <h2 className="text-4xl text-black font-bold">
            Mes <span className="text-orange-400">chiffres clés</span>
          </h2>
          <p className="text-gray-400 mt-3">
            Un aperçu rapide de mon parcours
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-8">

          {stats.map((item, index) => (
            <div
              key={index}
              className="bg-white text-black rounded-2xl p-8 text-center shadow-lg hover:-translate-y-2 transition"
            >

              {/* NUMBER */}
              <h3 className="text-5xl font-bold text-orange-400">
                {item.number}
              </h3>

              {/* LABEL */}
              <p className="mt-4 text-lg font-semibold">
                {item.label}
              </p>

              {/* DESC */}
              <p className="text-gray-600 mt-3 text-sm leading-relaxed">
                {item.desc}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}