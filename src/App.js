import React, { useEffect, Fragment } from "react";
import AOS from "aos";

import Header from "./components/Header";
import Banner from "./components/Banner";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Roadmap from "./components/Roadmap";
import Contact from "./components/Contact";

import BaseStyles from "./Styles.js";
import "aos/dist/aos.css";

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 400,
      offset: 60,
    });
  }, []);

  return (
    <Fragment>
      <BaseStyles />
      <Header />
      <Banner />
      <Skills />
      <Projects />
      <Roadmap />
      <Contact />
    </Fragment>
  );
};

export default App;
