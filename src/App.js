import React from "react";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Roadmap from "./components/Roadmap";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Skills />
      <Projects />
      <Roadmap />
      <Contact />
    </div>
  );
};

export default App;
