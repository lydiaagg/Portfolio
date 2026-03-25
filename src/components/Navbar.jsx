import { useState } from "react";
import "../styles/global.css";
import logo from "../assets/logo.svg"; // ajoute ta photo
import Rowicon from "./Icons/Row";
export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const links = [
    { name: "À propos", href: "#apropos" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Parcours et expérience", href: "#parcours" },
    { name: "Competences", href: "#competences" }
  ];
  return (
  
   <header className="top-0 w-full text-white z-50">
     <div className="top-section">
        <div className="flex justify-between  ">
            <div className="phone-info"><a href="mailto:agguinilydia@gmail.com" class="font-size-1-20 transition-1">agguinilydia@gmail.com</a></div>
            <div className="phone-info"><a href="#" class="font-size-1-20 transition-1">+(213) 776 39 64 56</a></div>

        </div>
     </div>

      <div className="flex justify-between  ">
        
       <div className="logo">
        <strong class="">Agguini lydia</strong>
        </div>


        {/* MENU */}
        <nav
          className={`absolute md:static mb-menu bg-white top-16 right-0 w-full md:w-auto  md:flex transition-all duration-300 ${
            menuOpen ? "flex" : "hidden"
          }`}
        >
          <div className="flex flex-col md:flex-row ">
            {links.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="group md:items-center flex items-center gap-2 px-6 py-3 md:py-0 text-white hover:text-sky-400 transition"
              >
                {link.name}
                  <Rowicon />
              </a>
            ))}
          </div>
        </nav>

        {/* BURGER */}
        <div
          className="md:hidden iconOpen cursor-pointer text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg  xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M4 5C3.44772 5 3 5.44772 3 6C3 6.55228 3.44772 7 4 7H20C20.5523 7 21 6.55228 21 6C21 5.44772 20.5523 5 20 5H4ZM7 12C7 11.4477 7.44772 11 8 11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H8C7.44772 13 7 12.5523 7 12ZM13 18C13 17.4477 13.4477 17 14 17H20C20.5523 17 21 17.4477 21 18C21 18.5523 20.5523 19 20 19H14C13.4477 19 13 18.5523 13 18Z" ></path></svg>
        </div>
        <div className="contact"><a href="#contact" class="font-size-1-20 transition-1">Me contacter</a></div>
      </div>
    </header>
  );
}
