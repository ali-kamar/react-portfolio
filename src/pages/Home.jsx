import React from "react";
import Navbar from "../components/Navbar/Navbar";
import About from "../components/About/About";
import Technologies from "../components/Technologies/Technologies";
import Experience from "../components/Experience/Experience";
import Projects from "../components/Projects/Projects";
import Contact from "../components/Contact/Contact";
import { DarkModeProvider } from "../context/DarkModeContext";
const Home = () => {
  return (
    <DarkModeProvider>
      <Navbar />
      <About />
      <Technologies />
      <Experience />
      <Projects />
      <Contact />
    </DarkModeProvider>
  );
};

export default Home;
