import React from "react";
import Banner from "./components/Banner";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Roadmap from "./components/Roadmap";
import Skills from "./components/Skills";

const App = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Skills />
      <Projects />
      <Roadmap />
    </div>
  );
};

export default App;
