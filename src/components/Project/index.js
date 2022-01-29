import React, { useEffect } from "react";
import AOS from "aos";
import {
  DevIcon,
  FullscreenImage,
  GitHubIcon,
  IconLinksWrapper,
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
  TextLarge,
  TextMedium,
  TextSmall,
} from "./Styles";

const Project = ({
  fscImg,
  mobileImg,
  title,
  upperText,
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
          <TextLarge>{title}</TextLarge>
          <TextMedium>
            {upperText}{" "}
            <TextKeyword color={keywordColor}>{keyword}</TextKeyword>?
          </TextMedium>
          <TextSmall>{description}</TextSmall>
          {inDevelopment && (
            <TextDevWrapper>
              <DevIcon />
              <TextDev>CONSTANTLY DEVELOPED</TextDev>
            </TextDevWrapper>
          )}
        </TextContainer>
        <IconLinksWrapper>
          <Link href={githubLink} target="_blank" rel="noopener noreferrer">
            <GitHubIcon />
          </Link>
          <Link href={websiteLink} target="_blank" rel="noopener noreferrer">
            <OpenIcon />
          </Link>
        </IconLinksWrapper>
      </RightContainer>
    </ProjectContainer>
  );
};

export default Project;
