import React from 'react'
import Navbar from "../components/Navbar/Navbar";
import About from '../components/About/About';
import Technologies from '../components/Technologies/Technologies';
import Experience from '../components/Experience/Experience';
const Home = () => {
  return (
    <>
      <Navbar />
      <About />
      <Technologies />
      <Experience />
    </>
  );
}

export default Home