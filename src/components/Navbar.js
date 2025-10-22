"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import logo from "@/img/logo.png";
import Link from "next/link";

export default function Nav() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <div>
      {/* Navbar principale avec animation */}
      <nav
        className={`fixed top-0 left-0 w-full bg-[#151515] text-white shadow-lg z-20 transform transition-transform duration-300 ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="section-spacing flex justify-between items-center pt-5 pb-5 px-5">
        <Link href="/#Header" className="hover:text-gray-300 transition">
          <Image src={logo} alt="Logo" width={35} height={35} />
          </Link>

          {/* Menu principal (desktop) */}
          <ul className="hidden lg:flex space-x-12">
            <li>
              <Link href="/#Header" className="hover:text-gray-300 transition">
                Accueil
              </Link>
            </li>
            <li>
              <Link href="/#About" className="hover:text-gray-300 transition">
                À propos
              </Link>
            </li>
            <li>
              <Link href="/#Recrutement" className="hover:text-gray-300 transition">
                Recrutement
              </Link>
            </li>
            <li>
              <Link href="/#Contact" className="hover:text-gray-300 transition">
                Contact
              </Link>
            </li>
          </ul>

          {/* Menu burger (mobile) */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(true)}
              className="text-white focus:outline-none text-2xl"
            >
              ☰
            </button>
          </div>
        </div>
      </nav>

      {/* Overlay semi-transparent lorsque le menu mobile est ouvert */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}

      {/* Menu mobile avec animation */}
      <div
        className={`fixed top-0 right-0 h-full w-full bg-[#151515] shadow-lg transform transition-transform duration-200 z-40 ${
          isMenuOpen ? "translate-y-0" : "translate-y-full"
        }`}
      >
        {/* Bouton de fermeture */}
        <div className="flex justify-end p-5">
          <button
            onClick={() => setIsMenuOpen(false)}
            className="text-white text-2xl focus:outline-none"
          >
            ✖
          </button>
        </div>

        {/* Contenu du menu mobile */}
        <ul className="flex flex-col space-y-6 text-5xl text-white text-center text-lg">
          <li>
            <Link href="/#Header" className="hover:text-gray-300 transition" onClick={() => setIsMenuOpen(false)}>
              Accueil
            </Link>
          </li>
          <li>
            <Link href="/#About" className="hover:text-gray-300 transition" onClick={() => setIsMenuOpen(false)}>
              À propos
            </Link>
          </li>
          <li>
            <Link href="/#Recrutement" className="hover:text-gray-300 transition" onClick={() => setIsMenuOpen(false)}>
              Recrutement
            </Link>
          </li>
          <li>
            <Link href="/#Contact" className="hover:text-gray-300 transition" onClick={() => setIsMenuOpen(false)}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
