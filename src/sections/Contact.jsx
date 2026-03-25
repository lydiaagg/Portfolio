import React from "react";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const formRef = useRef();
  const [status, setStatus] = useState("");
  const [errors, setErrors] = useState({});
  const [form, setForm] = useState({name:"",email:"",objet:"",message:""})
  const handleChange = (e) => {
     const { name, value } = e.target;
  setForm({ ...form, [name]: value });
  }
  const validate = () => {
    const newErrors = {};

  if (!String(form.name).trim()) newErrors.name = "Le nom est obligatoire";
   if (!String(form.objet).trim()) newErrors.objet = "L'objet est obligatoire";
  if (!String(form.email).trim()) newErrors.email = "Email obligatoire";
  else if (!/\S+@\S+\.\S+/.test(form.email))
    newErrors.email = "Email invalide";

  if (!String(form.message).trim())
    newErrors.message = "Message obligatoire";
  else if (form.message.length < 10)
    newErrors.message = "Message trop court (min 10 caractères)";

  setErrors(newErrors);
  return Object.keys(newErrors).length === 0;

  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
   if (!validate()) return;
   setStatus("Envoi...");

    emailjs
      .sendForm(
        "service_1s0hhg9", // ton service ID
        "template_ci9sl88", // ton template ID
        formRef.current,
        "OQ9o6SFkDLNjcTB4U" // ton public key
      )
      .then(
        () => setStatus("Message envoyé ✔"),
        () => setStatus("Erreur lors de l'envoi ❌")
      );
  };
  return (
    <section id="contact" className="text-white bg-white py-24">

      <div className="max-w-6xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* LEFT SIDE */}
          <div>

            {/* TITLE */}
            <div className="mb-10">
              <p className="text-orange-400 uppercase tracking-widest text-sm">
                Contact Info
              </p>

              <h2 className="text-4xl text-black font-bold mt-2">
                Me <span className="text-orange-400">Contacter</span>
              </h2>

              <div className="w-16 h-1 bg-orange-400 mt-4"></div>

              <p className="text-gray-400 mt-6 leading-relaxed">
                Je suis disponible pour discuter de projets web, freelancing ou opportunités professionnelles.
                N’hésite pas à me contacter.
              </p>
            </div>

            {/* CONTACT INFO CARDS */}
            <div className="space-y-4">

              <div className="flex items-center gap-4 bg-white text-black p-5 rounded-xl shadow">
                <div>
                  <p className="font-semibold">Email</p>
                  <p className="text-gray-700">agguinilydia@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-white text-black p-5 rounded-xl shadow">
                <div>
                  <p className="font-semibold">Téléphone</p>
                  <p className="text-gray-700">07 76 39 64 56</p>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-white text-black p-5 rounded-xl shadow">
                <div>
                  <p className="font-semibold">Adresse</p>
                  <p className="text-gray-700">Alger, Bab Ezzouar</p>
                </div>
              </div>

            </div>

          </div>

          {/* RIGHT SIDE - FORM */}
          <div className="bg-white text-black p-10 rounded-2xl shadow-xl">

            <h3 className="text-2xl font-bold mb-6">
              Envoyer Message
            </h3>

            <form ref={formRef}  className="space-y-5">

              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Nom"
                className="w-full p-3 border border-gray-300 rounded-lg focus:border-orange-400 outline-none"
                required
                />
                {errors.name && <p className="text-red-500">{errors.name}</p>}

              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email"
                className="w-full p-3 border border-gray-300 rounded-lg focus:border-orange-400 outline-none"
                required
             />
             {errors.email && <p className="text-red-500">{errors.email}</p>}
             
              <input
                type="text"
                name="objet"
                value={form.objet}
                onChange={handleChange}
                placeholder="Objet"
                className="w-full p-3 border border-gray-300 rounded-lg focus:border-orange-400 outline-none"
                required
             />
             {errors.objet && <p className="text-red-500">{errors.objet}</p>}

              <textarea
                rows="6"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Votre message..."
                className="w-full p-3 border border-gray-300 rounded-lg focus:border-orange-400 outline-none"
              required
              ></textarea>
              {errors.message && <p className="text-red-500">{errors.message}</p>}

              <p>{status}</p>
              <button
               onClick={handleSubmit}
                type="submit"
                className="w-full bg-orange-400 text-black py-3 rounded-lg font-semibold hover:bg-black hover:text-orange-400 border border-orange-400 transition"
              >
                Envoyer un Message →
              </button>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
}