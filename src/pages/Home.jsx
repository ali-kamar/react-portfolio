import React from 'react'
import Navbar from "../components/Navbar/Navbar";
import About from '../components/About/About';
import Technologies from '../components/Technologies/Technologies';
const Home = () => {
  return (
    <>
      <Navbar />
      <About />
      <Technologies />
    </>
  );
}

export default Home