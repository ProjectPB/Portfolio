import React from "react";
import Title from "../Title";
import fscImg from "./../../assets/projects/sharefood_max.jpg";
import mobileImg from "./../../assets/projects/sharefood_min.jpg";
import {
  FullscreenImage,
  GitHubIcon,
  IconLinksWrapper,
  LeftContainer,
  Link,
  MobileImage,
  OpenIcon,
  ProjectsContainer,
  ProjectsWrapper,
  RightContainer,
  TextContainer,
  TextLarge,
  TextMedium,
  TextSmall,
} from "./Styles";

const Projects = () => {
  const titleConfig = {
    upperText: "Projects",
    lowerText_1: "Check out my projects",
  };

  return (
    <ProjectsContainer>
      <Title {...titleConfig} />

      <ProjectsWrapper>
        <LeftContainer>
          <FullscreenImage src={fscImg} />
          <MobileImage src={mobileImg} />
        </LeftContainer>
        <RightContainer>
          <TextContainer>
            <TextLarge>Sharefood</TextLarge>
            <TextMedium>Looking for a dinner?</TextMedium>
            <TextSmall>
              Website allows users to find recipes and submit their own ideas.
            </TextSmall>
          </TextContainer>

          <IconLinksWrapper>
            <Link href="https://github.com/ProjectPB/Sharefood" target="_blank">
              <GitHubIcon />
            </Link>
            <Link href="https://pb-sharefood.web.app/" target="_blank">
              <OpenIcon />
            </Link>
          </IconLinksWrapper>
        </RightContainer>
      </ProjectsWrapper>
    </ProjectsContainer>
  );
};

export default Projects;
