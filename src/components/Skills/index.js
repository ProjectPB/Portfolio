import React from "react";
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
} from "./Styles";
import Title from "../Title";

const skills = [
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
      "I create websites with emphasis on responsiveness, quick loading time and clean code",
    lowerText_2:
      "The following languages and technologies help me with achieving goals:",
  };

  return (
    <SkillsContainer>
      <Title {...titleConfig} />

      <SkillsWrapper>
        {skills.map(({ icon, name }, id) => (
          <Skill key={id} className="XD">
            <SkillIcon src={icon} />
            <SkillName>{name}</SkillName>
          </Skill>
        ))}
      </SkillsWrapper>
    </SkillsContainer>
  );
};

export default Skills;
