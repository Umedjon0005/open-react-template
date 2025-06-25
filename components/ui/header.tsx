"use client";

import { useState, useEffect } from "react";
import Logo from "./logo";

type HeaderProps = {
  onScrollTo: {
    about: () => void;
    projects: () => void;
    solutions: () => void;
    contact: () => void;
  };
};

export default function Header({ onScrollTo }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = () => {
      if (isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isMobileMenuOpen]);

  const handleClick = (section: () => void) => {
    section();
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={`z-50 mt-2 w-full md:mt-5 transition-all duration-300 ${isScrolled ? "mt-0 md:mt-0" : ""}`}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className={`relative flex h-14 items-center justify-between gap-3 rounded-2xl bg-gray-900/90 px-3 transition-all duration-300 ${isScrolled ? "bg-gray-900/95 shadow-lg" : ""} before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,var(--color-gray-800),var(--color-gray-700),var(--color-gray-800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] after:absolute after:inset-0 after:-z-10 after:backdrop-blur-xs`}>
          
          <div className="flex flex-1 items-center">
            <Logo />
          </div>

          <ul className="hidden md:flex flex-1 items-center justify-end gap-3">
            <li>
              <button
                onClick={() => handleClick(onScrollTo.about)}
                className="group btn-sm relative bg-linear-to-b from-gray-800 to-gray-800/60 py-[5px] text-gray-300 hover:text-white hover:shadow-lg transition-all duration-300"
              >
                <span className="relative z-10">About Us</span>
              </button>
            </li>
            <li>
              <button
                onClick={() => handleClick(onScrollTo.projects)}
                className="group btn-sm relative bg-linear-to-b from-gray-800 to-gray-800/60 py-[5px] text-gray-300 hover:text-white hover:shadow-lg transition-all duration-300"
              >
                <span className="relative z-10">Projects</span>
              </button>
            </li>
            <li>
              <button
                onClick={() => handleClick(onScrollTo.solutions)}
                className="group btn-sm relative bg-linear-to-b from-gray-800 to-gray-800/60 py-[5px] text-gray-300 hover:text-white hover:shadow-lg transition-all duration-300"
              >
                <span className="relative z-10">Solutions</span>
              </button>
            </li>
            <li>
              <button
                onClick={() => handleClick(onScrollTo.contact)}
                className="group btn-sm bg-linear-to-t from-indigo-600 to-indigo-500 py-[5px] text-white hover:from-indigo-500 hover:to-indigo-400 transition-all duration-300 relative overflow-hidden"
              >
                <span className="relative z-10">Contacts</span>
              </button>
            </li>
          </ul>

          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="relative p-2 rounded-lg text-gray-300 hover:text-white transition-colors duration-200"
              aria-label="Toggle mobile menu"
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <span className={`block h-0.5 w-6 bg-current transform transition-all duration-300 ${isMobileMenuOpen ? "rotate-45 translate-y-1.5" : ""}`}></span>
                <span className={`block h-0.5 w-6 bg-current mt-1 transition-all duration-300 ${isMobileMenuOpen ? "opacity-0" : ""}`}></span>
                <span className={`block h-0.5 w-6 bg-current mt-1 transform transition-all duration-300 ${isMobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""}`}></span>
              </div>
            </button>
          </div>
        </div>

        <div className={`md:hidden absolute top-16 left-4 right-4 sm:left-6 sm:right-6 transition-all duration-300 ${isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}>
          <div className="rounded-2xl bg-gray-900/95 backdrop-blur-md border border-gray-800/50 shadow-2xl overflow-hidden">
            <nav className="py-2">
              <button
                onClick={() => handleClick(onScrollTo.about)}
                className="group block w-full text-left px-6 py-4 text-gray-300 hover:text-white hover:bg-gray-800/50 transition-all duration-200 border-b border-gray-800/30 last:border-b-0"
              >
                📋 О нас
              </button>
              <button
                onClick={() => handleClick(onScrollTo.projects)}
                className="group block w-full text-left px-6 py-4 text-gray-300 hover:text-white hover:bg-gray-800/50 transition-all duration-200 border-b border-gray-800/30 last:border-b-0"
              >
                🚀 Проекты
              </button>
              <button
                onClick={() => handleClick(onScrollTo.solutions)}
                className="group block w-full text-left px-6 py-4 text-gray-300 hover:text-white hover:bg-gray-800/50 transition-all duration-200 border-b border-gray-800/30 last:border-b-0"
              >
                💡 Решения
              </button>
              <button
                onClick={() => handleClick(onScrollTo.contact)}
                className="group block w-full text-left px-6 py-4 text-white bg-gradient-to-r from-indigo-600/80 to-indigo-500/80 hover:from-indigo-500 hover:to-indigo-400 transition-all duration-200"
              >
                📞 Контакты
              </button>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
