import React from "react";
import Hero from "../components/Hero";
import Motive from "../components/Motive";
import Impact from "../components/Impact";
import Footer from "../components/Footer";
import AddSomething from "./AddSomething";
import Harmony from "./Harmony";
import ProgramsAndInitiatives from "./ProgramsAndInitiatives";

const Home = () => {
  return (
    <div>
      <Hero />
      <Motive />
      <ProgramsAndInitiatives />
      <Harmony />
      <AddSomething />
      <Impact />
      <Footer />
    </div>
  );
};

export default Home;
