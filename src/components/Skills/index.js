import React, { useEffect } from "react";
import AOS from "aos";

import Title from "../Title";
import WavyBackground from "../WavyBackground";
import styledcomponents_logo from "./../../assets/skills/sc.png";
import sass_logo from "./../../assets/skills/sass.png";
import redux_logo from "./../../assets/skills/redux.png";
import react_logo from "./../../assets/skills/react.png";
import reduxsaga_logo from "./../../assets/skills/redux-saga.png";
import adobexd_logo from "./../../assets/skills/adobexd.png";
import firebase_logo from "./../../assets/skills/firebase.png";
import htmlcssjs_logo from "./../../assets/skills/htmlcssjs.png";
import mui_logo from "./../../assets/skills/mui.png";
import typescript_logo from "./../../assets/skills/typescript.png";
import nodejs_logo from "./../../assets/skills/nodejs.png";

import {
  SkillsContainer,
  SkillsWrapper,
  SkillIcon,
  SkillName,
  Skill,
  SkillNameContainer,
  SliderContainer,
  SkillsMain,
} from "./Styles";

const skillsData = [
  { icon: htmlcssjs_logo, name: "HTML/CSS/JS" },
  { icon: typescript_logo, name: "Typescript" },
  { icon: react_logo, name: "React JS" },
  { icon: redux_logo, name: "Redux" },
  { icon: reduxsaga_logo, name: "Redux-Saga" },
  { icon: nodejs_logo, name: "Node JS" },
  { icon: firebase_logo, name: "Firebase" },
  {
    icon: styledcomponents_logo,
    name: "Styled components",
  },
  { icon: sass_logo, name: "Sass" },
  { icon: mui_logo, name: "MUI" },
  { icon: adobexd_logo, name: "Adobe XD" },
];

const Skills = () => {
  const titleConfig = {
    sectionName: "Skills",
    upper:
      "Smooth functionality, responsiveness and fast load time should be prioritized to create remarkable websites.",
    lower:
      "I use the following languages and technologies to achieve these goals:",
  };

  const sliderSettings = {
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

  useEffect(() => {
    window.addEventListener("load", AOS.refresh);
  }, []);

  return (
    <SkillsContainer id="skills">
      <SkillsMain>
        <Title {...titleConfig} />
        <SliderContainer>
          <SkillsWrapper {...sliderSettings}>
            {skillsData.map(({ icon, name }, id) => (
              <Skill
                key={id}
                className="XD"
                data-aos="zoom-in"
                data-aos-delay="200"
              >
                <SkillIcon src={icon} />
                <SkillNameContainer>
                  <SkillName>{name}</SkillName>
                </SkillNameContainer>
              </Skill>
            ))}
          </SkillsWrapper>
        </SliderContainer>
      </SkillsMain>
      <WavyBackground />
    </SkillsContainer>
  );
};

export default Skills;
