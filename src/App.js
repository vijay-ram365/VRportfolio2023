import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import ContactForm from "./Components/ContactForm";

export default function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <ContactForm />
    </div>
  );
}
