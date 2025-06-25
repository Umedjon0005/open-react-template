import Logo from "./logo";
import Image from "next/image";
import FooterIllustration from "@/public/images/footer-illustration.svg";

type HeaderProps = {
  onScrollTo: {
    about: () => void;
    projects: () => void;
    solutions: () => void;
    contact: () => void;
  };
};

export default function Footer({ onScrollTo }: HeaderProps) {
  const handleClick = (section: () => void) => {
    section();
  };

  return (
    <footer className="relative">
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        {/* Footer illustration */}
        <div
          className="pointer-events-none absolute bottom-0 left-1/2 -z-10 -translate-x-1/2 opacity-20"
          aria-hidden="true"
        >
          <Image
            className="max-w-none"
            src={FooterIllustration}
            width={1076}
            height={378}
            alt="Footer illustration"
          />
        </div>
        
        {/* Decorative gradient line */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-indigo-400 to-transparent opacity-50"></div>
        
        <div className="py-12 lg:py-16">
          {/* Main content */}
          <div className="mb-12 flex flex-col items-center justify-between gap-8 lg:flex-row lg:gap-12">
            {/* Logo section */}
            <div className="flex flex-col items-center lg:items-start">
              <div className="mb-4 transform transition-transform hover:scale-105">
                <Logo />
              </div>
              <p className="text-center text-sm text-indigo-200/80 lg:text-left">
                Innovative solutions for your business
              </p>
            </div>
            
            {/* Navigation links - horizontal */}
            <nav className="flex-1">
              <ul className="flex flex-wrap items-center justify-center gap-8 lg:justify-end">
                <li>
                  <button
                    className="group relative text-sm font-medium text-indigo-200/75 transition-all duration-300 hover:text-white cursor-pointer"
                    onClick={() => handleClick(onScrollTo.about)}
                  >
                    About Us
                    <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-gradient-to-r from-indigo-400 to-purple-400 transition-all duration-300 group-hover:w-full"></span>
                  </button>
                </li>
                <li>
                  <button
                    className="group relative text-sm font-medium text-indigo-200/75 transition-all duration-300 hover:text-white cursor-pointer"
                    onClick={() => handleClick(onScrollTo.projects)}
                  >
                    Projects
                    <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-gradient-to-r from-indigo-400 to-purple-400 transition-all duration-300 group-hover:w-full"></span>
                  </button>
                </li>
                <li>
                  <button
                    className="group relative text-sm font-medium text-indigo-200/75 transition-all duration-300 hover:text-white cursor-pointer"
                    onClick={() => handleClick(onScrollTo.solutions)}
                  >
                    Solutions
                    <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-gradient-to-r from-indigo-400 to-purple-400 transition-all duration-300 group-hover:w-full"></span>
                  </button>
                </li>
                <li>
                  <button
                    className="group relative text-sm font-medium text-indigo-200/75 transition-all duration-300 hover:text-white cursor-pointer"
                    onClick={() => handleClick(onScrollTo.contact)}
                  >
                    Contacts
                    <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-gradient-to-r from-indigo-400 to-purple-400 transition-all duration-300 group-hover:w-full"></span>
                  </button>
                </li>
              </ul>
            </nav>
          </div>
          
          {/* Divider */}
          <div className="mb-8 h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent"></div>
          
          {/* Bottom section */}
          <div className="flex flex-col items-center justify-between gap-6 lg:flex-row">
            {/* Copyright */}
            <div className="text-center lg:text-left">
              <p className="text-sm text-indigo-200/60">
                © 2024 All rights reserved
              </p>
            </div>
            
            {/* Social links */}
            <div className="flex items-center gap-4">
              <span className="text-xs text-indigo-200/50">Follow us:</span>
              <ul className="flex gap-3">
                <li>
                  <a
                    className="group flex h-10 w-10 items-center justify-center rounded-full bg-indigo-500/10 text-indigo-400 backdrop-blur-sm transition-all duration-300 hover:bg-indigo-500/20 hover:text-indigo-300 hover:scale-110"
                    href="#0"
                    aria-label="Twitter"
                  >
                    <svg
                      className="h-5 w-5 fill-current transition-transform group-hover:scale-110"
                      viewBox="0 0 32 32"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="m13.063 9 3.495 4.475L20.601 9h2.454l-5.359 5.931L24 23h-4.938l-3.866-4.893L10.771 23H8.316l5.735-6.342L8 9h5.063Zm-.74 1.347h-1.457l8.875 11.232h1.36l-8.778-11.232Z" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    className="group flex h-10 w-10 items-center justify-center rounded-full bg-indigo-500/10 text-indigo-400 backdrop-blur-sm transition-all duration-300 hover:bg-indigo-500/20 hover:text-indigo-300 hover:scale-110"
                    href="#0"
                    aria-label="Medium"
                  >
                    <svg
                      className="h-5 w-5 fill-current transition-transform group-hover:scale-110"
                      viewBox="0 0 32 32"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M23 8H9a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1Zm-1.708 3.791-.858.823a.251.251 0 0 0-.1.241V18.9a.251.251 0 0 0 .1.241l.838.823v.181h-4.215v-.181l.868-.843c.085-.085.085-.11.085-.241v-4.887l-2.41 6.131h-.329l-2.81-6.13V18.1a.567.567 0 0 0 .156.472l1.129 1.37v.181h-3.2v-.181l1.129-1.37a.547.547 0 0 0 .146-.472v-4.749a.416.416 0 0 0-.138-.351l-1-1.209v-.181H13.8l2.4 5.283 2.122-5.283h2.971l-.001.181Z" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    className="group flex h-10 w-10 items-center justify-center rounded-full bg-indigo-500/10 text-indigo-400 backdrop-blur-sm transition-all duration-300 hover:bg-indigo-500/20 hover:text-indigo-300 hover:scale-110"
                    href="#0"
                    aria-label="Github"
                  >
                    <svg
                      className="h-5 w-5 fill-current transition-transform group-hover:scale-110"
                      viewBox="0 0 32 32"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M16 8.2c-4.4 0-8 3.6-8 8 0 3.5 2.3 6.5 5.5 7.6.4.1.5-.2.5-.4V22c-2.2.5-2.7-1-2.7-1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.3 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8.6-.2 1.3-.3 2-.3s1.4.1 2 .3c1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.1 0 3.1-1.9 3.7-3.7 3.9.3.4.6.9.6 1.6v2.2c0 .2.1.5.6.4 3.2-1.1 5.5-4.1 5.5-7.6-.1-4.4-3.7-8-8.1-8z" />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}