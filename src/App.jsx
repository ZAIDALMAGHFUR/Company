import React from "react";
import Navbar from "./components/Navbar";
import Bot from "./components/Bot";
import Hero from "./components/Hero";
import About from "./components/About";
import Galery from "./components/Galery";
import Beli from "./components/Beli";
import Testi from "./components/Testi";
import Pesan from "./components/Pesan";

const App = () => {
  return (
    <>
      <Navbar />
      <Bot />
      <Hero />
      <About />
      <Galery />
      <Beli />
      <Testi />
      <Pesan />
    </>
  );
};

export default App;
