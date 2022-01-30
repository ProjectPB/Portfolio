import React, { useEffect } from "react";
import AOS from "aos";

import {
  Description,
  DevIcon,
  FullscreenImage,
  GitHubIcon,
  Heading,
  IconLinksWrapper,
  InviteText,
  LeftContainer,
  Link,
  MobileImage,
  OpenIcon,
  ProjectContainer,
  RightContainer,
  TextContainer,
  TextDev,
  TextDevWrapper,
  TextKeyword,
} from "./Styles";

const Project = ({
  fscImg,
  mobileImg,
  title,
  sectionName,
  description,
  githubLink,
  websiteLink,
  swapSides,
  keyword,
  keywordColor,
  inDevelopment,
}) => {
  useEffect(() => {
    window.addEventListener("load", AOS.refresh);
  }, []);

  return (
    <ProjectContainer swap={swapSides}>
      <LeftContainer>
        <FullscreenImage src={fscImg} />
        <MobileImage src={mobileImg} swap={swapSides} />
      </LeftContainer>

      <RightContainer data-aos="fade-up" data-aos-delay="200">
        <TextContainer>
          <Heading>{title}</Heading>
          <InviteText>
            {sectionName}{" "}
            <TextKeyword color={keywordColor}>{keyword}</TextKeyword>?
          </InviteText>
          <Description>{description}</Description>
          {inDevelopment && (
            <TextDevWrapper>
              <DevIcon />
              <TextDev>CONSTANTLY DEVELOPED</TextDev>
            </TextDevWrapper>
          )}
        </TextContainer>

        <IconLinksWrapper>
          <Link href={githubLink} target="_blank" rel="noopener noreferrer">
            <GitHubIcon alt="Github link" />
          </Link>
          <Link href={websiteLink} target="_blank" rel="noopener noreferrer">
            <OpenIcon alt="Website link" />
          </Link>
        </IconLinksWrapper>
      </RightContainer>
    </ProjectContainer>
  );
};

export default Project;
