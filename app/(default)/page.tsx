"use client";

import { useRef } from "react";
import Header from "@/components/ui/header";
import PageIllustration from "@/components/page-illustration";
import Hero from "@/components/hero-home";
import Workflows from "@/components/workflows";
import Features from "@/components/features";
import Testimonials from "@/components/testimonials";
import Cta from "@/components/cta";
import Footer from "@/components/ui/footer";

export default function Home() {
  // создаём ссылки
  const aboutRef = useRef<HTMLDivElement>(null);
const projectsRef = useRef<HTMLDivElement>(null);
const solutionsRef = useRef<HTMLDivElement>(null);
const contactRef = useRef<HTMLDivElement>(null);
  // функция прокрутки
  function scrollToSection(ref: React.RefObject<HTMLElement | null>) {
  if (ref.current) {
    ref.current.scrollIntoView({ behavior: "smooth" });
  }
}


  return (
    <>
      <Header
        onScrollTo={{
          about: () => scrollToSection(aboutRef),
          projects: () => scrollToSection(projectsRef),
          solutions: () => scrollToSection(solutionsRef),
          contact: () => scrollToSection(contactRef),
        }}
      />

      <PageIllustration />
      <Hero 
        onScrollTo={{
            about: () => scrollToSection(aboutRef),
            projects: () => scrollToSection(projectsRef),
            solutions: () => scrollToSection(solutionsRef),
            contact: () => scrollToSection(contactRef),
          }}
      />
      <div ref={aboutRef}>
        <Features />
      </div>
      <div ref={projectsRef}>
        <Workflows />
      </div>
      <div ref={solutionsRef}>
        
        <Testimonials />
      </div>
      <div ref={contactRef}>
        
        <Cta />
      </div>

       <Footer 
        onScrollTo={{
            about: () => scrollToSection(aboutRef),
            projects: () => scrollToSection(projectsRef),
            solutions: () => scrollToSection(solutionsRef),
            contact: () => scrollToSection(contactRef),
          }}
       />
    </>
  );
}
