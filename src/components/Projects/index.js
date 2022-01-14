import React from "react";
import Title from "../Title";
import sharefoodFscImg from "./../../assets/projects/sharefood_max.jpg";
import sharefoodMobileImg from "./../../assets/projects/sharefood_min.jpg";
import wearshopFscImg from "./../../assets/projects/wearshop_max.jpg";
import wearshopMobileImg from "./../../assets/projects/wearshop_min.jpg";
import concertonFscImg from "./../../assets/projects/concerton_max.jpg";
import concertonMobileImg from "./../../assets/projects/concerton_min.jpg";
import Project from "../Project";
import { ProjectsContainer, ProjectsWrapper } from "./Styles";

const Projects = () => {
  const titleConfig = {
    upperText: "Projects",
    lowerText_1: "Check out my projects",
  };

  const sharefoodConfig = {
    fscImg: sharefoodFscImg,
    mobileImg: sharefoodMobileImg,
    title: "Sharefood",
    upperText: "Looking for a dinner?",
    description: "@SHAREFOOD_DESC@",
    githubLink: "https://github.com/ProjectPB/Sharefood",
    websiteLink: "https://pb-sharefood.web.app/",
    swapSides: false,
  };

  const concertonConfig = {
    fscImg: concertonFscImg,
    mobileImg: concertonMobileImg,
    title: "ConcertON",
    upperText: "Want to watch a concert?",
    description: "@CONCERTON_DESC@",
    githubLink: "https://github.com/ProjectPB/ConcertON",
    websiteLink: "https://pb-concerton.web.app/",
    swapSides: true,
  };

  const wearshopConfig = {
    fscImg: wearshopFscImg,
    mobileImg: wearshopMobileImg,
    title: "Wearshop",
    upperText: "Looking for brand new clothes?",
    description: "@WEARSHOP_DESC@",
    githubLink: "https://github.com/ProjectPB/Wearshop",
    websiteLink: "https://pb-wearshop.web.app/",
    swapSides: false,
  };

  return (
    <ProjectsContainer>
      <Title {...titleConfig} />
      <ProjectsWrapper>
        <Project {...sharefoodConfig} />
        <Project {...concertonConfig} />
        <Project {...wearshopConfig} />
      </ProjectsWrapper>
    </ProjectsContainer>
  );
};

export default Projects;
