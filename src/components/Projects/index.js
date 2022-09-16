import React from "react";

import Title from "../Title";
import Project from "../Project";
import sharefoodFscImg from "./../../assets/projects/sharefood_max.jpg";
import sharefoodMobileImg from "./../../assets/projects/sharefood_min.jpg";
import wearshopFscImg from "./../../assets/projects/wearshop_max.jpg";
import wearshopMobileImg from "./../../assets/projects/wearshop_min.jpg";
import concertonFscImg from "./../../assets/projects/concerton_max.jpg";
import concertonMobileImg from "./../../assets/projects/concerton_min.jpg";

import { ProjectsContainer, ProjectsWrapper } from "./Styles";

const Projects = () => {
  const titleConfig = {
    sectionName: "Projects",
    upper: "Make sure to check out my latest work!",
  };

  const sharefoodConfig = {
    fscImg: sharefoodFscImg,
    mobileImg: sharefoodMobileImg,
    title: "Sharefood",
    sectionName: "Making ",
    keyword: "dinner",
    keywordColor: "#ffc000",
    description:
      "On Sharefood, users are able to browse recipes, find them using search bar and add them to favorites. Users can also submit their own ideas after signing up.",
    githubLink: "https://github.com/ProjectPB/Sharefood",
    websiteLink: "https://sharefood.pl/",
    swapSides: false,
    inDevelopment: true,
  };

  const concertonConfig = {
    fscImg: concertonFscImg,
    mobileImg: concertonMobileImg,
    title: "ConcertON",
    sectionName: "Want to ",
    keyword: "hang out",
    keywordColor: "#8b0000;",
    description:
      "Concerton has been created to let users watch concerts' livestreams and comment the event on the realtime chat.",
    githubLink: "https://github.com/ProjectPB/ConcertON",
    websiteLink: "https://pb-concerton.web.app/",
    swapSides: true,
    inDevelopment: false,
  };

  const wearshopConfig = {
    fscImg: wearshopFscImg,
    mobileImg: wearshopMobileImg,
    title: "Wearshop",
    sectionName: "Looking for ",
    keyword: "new clothes",
    keywordColor: "#1a50a1",
    description:
      "Wearshop is an E-commerce website which allows users to browse clothes using type filters, add products to cart and submit orders.",
    githubLink: "https://github.com/ProjectPB/Wearshop",
    websiteLink: "https://pb-wearshop.web.app/",
    swapSides: false,
    inDevelopment: false,
  };

  return (
    <ProjectsContainer id="projects">
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
