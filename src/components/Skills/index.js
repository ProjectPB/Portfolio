import React from "react";
import Title from "../Title";
import styledcomponents_logo from "./../../assets/skills/sc.png";
import sass_logo from "./../../assets/skills/sass.png";
import redux_logo from "./../../assets/skills/redux.png";
import react_logo from "./../../assets/skills/react.png";
import reduxsaga_logo from "./../../assets/skills/redux-saga.png";
import adobexd_logo from "./../../assets/skills/adobexd.png";
import firebase_logo from "./../../assets/skills/firebase.png";
import htmlcssjs_logo from "./../../assets/skills/htmlcssjs.png";
import mui_logo from "./../../assets/skills/mui.png";
import {
  SkillsContainer,
  SkillsWrapper,
  SkillIcon,
  SkillName,
  Skill,
  SkillNameContainer,
  SliderContainer,
} from "./Styles";

const skillsData = [
  { icon: htmlcssjs_logo, name: "HTML/CSS/JS" },
  { icon: react_logo, name: "React JS" },
  { icon: redux_logo, name: "Redux" },
  { icon: reduxsaga_logo, name: "Redux-Saga" },
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
    upperText: "Skills",
    lowerText_1:
      "I create websites with emphasis on responsiveness, quick loading time and clean code.",
    lowerText_2:
      "The following languages and technologies help me with achieving goals:",
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
    ],
  };

  return (
    <SkillsContainer>
      <Title {...titleConfig} />

      <SliderContainer>
        <SkillsWrapper {...sliderSettings}>
          {skillsData.map(({ icon, name }, id) => (
            <Skill key={id} className="XD">
              <SkillIcon src={icon} />
              <SkillNameContainer>
                <SkillName>{name}</SkillName>
              </SkillNameContainer>
            </Skill>
          ))}
        </SkillsWrapper>
      </SliderContainer>
    </SkillsContainer>
  );
};

export default Skills;
