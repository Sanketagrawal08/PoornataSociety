import React from "react";
import Hero from "../components/Hero";
import Motive from "../components/Motive";
import Impact from "../components/Impact";
import Footer from "../components/Footer";
import AddSomething from "./AddSomething";

const Home = () => {
  return (
    <div>
      <Hero />
      <Motive />
      <AddSomething />
      <Impact />
      <Footer />
    </div>
  );
};

export default Home;
