import React from "react";
import Hero from "../components/Hero";
import MenuSection from "../components/MenuSection";
import AboutSection from "../components/AboutSection";

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <MenuSection />
      <AboutSection />
    </>
  );
};

export default Home;
