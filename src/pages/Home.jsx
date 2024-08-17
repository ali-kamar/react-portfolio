import React from "react";
import Navbar from "../components/Navbar/Navbar";
import About from "../components/About/About";
import Technologies from "../components/Technologies/Technologies";
import Experience from "../components/Experience/Experience";
import Projects from "../components/Projects/Projects";
import Contact from "../components/Contact/Contact";
const Home = () => {
  return (
    <>
      <Navbar />
      <About />
      <Technologies />
      <Experience />
      <Projects />
      <Contact />
    </>
  );
};

export default Home;
