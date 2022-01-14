import React from "react";
import {
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
}) => {
  return (
    <ProjectContainer swap={swapSides}>
      <LeftContainer>
        <FullscreenImage src={fscImg} />
        <MobileImage src={mobileImg} swap={swapSides} />
      </LeftContainer>

      <RightContainer>
        <TextContainer>
          <TextLarge>{title}</TextLarge>
          <TextMedium>{upperText}</TextMedium>
          <TextSmall>{description}</TextSmall>
        </TextContainer>

        <IconLinksWrapper>
          <Link href={githubLink} target="_blank">
            <GitHubIcon />
          </Link>
          <Link href={websiteLink} target="_blank">
            <OpenIcon />
          </Link>
        </IconLinksWrapper>
      </RightContainer>
    </ProjectContainer>
  );
};

export default Project;
