import React from "react";
import { Link } from "react-scroll";
import { useWidth } from "./../../hooks";

import bannerImg from "./../../assets/banner/banner_image.png";
import waveDogImg from "./../../assets/banner/dog_wave.png";
import Button from "../Button";

import { color } from "../../utils/styles";
import {
  BannerContainer,
  ButtonWrapper,
  Image,
  ImageContainer,
  TextContainer,
  IconLinksWrapper,
  GitHubIcon,
  LinkedInIcon,
  Keyword,
  Text,
  HelloImg,
  BannerWrapper,
  ScrollIcon,
  LinkRef,
  ScrollDownContainer,
  HeadingWrapper,
  Heading,
  TextWrapper,
} from "./Styles";

const Banner = () => {
  const width = useWidth();

  return (
    <BannerContainer id="main">
      <BannerWrapper>
        <TextContainer>
          <HeadingWrapper>
            <Heading>Hello there!</Heading>
            <HelloImg src={waveDogImg} alt="Waving dog" />
          </HeadingWrapper>

          <TextWrapper>
            <Text>
              My name is <Keyword color={color.primary}>Patryk</Keyword>.
            </Text>
            <Text>
              I'm a passionate, determined and creative{" "}
              <Keyword color={color.react}>web developer</Keyword> from Poland.
            </Text>
            <Text>
              Always looking for new{" "}
              <Keyword color={color.red}>challenges</Keyword> and
              <Keyword color={color.purple}> cooperation </Keyword>
              opportunities.
            </Text>
          </TextWrapper>

          {width > "768" && (
            <ButtonWrapper>
              <Link to="contact" smooth={true}>
                <Button primary>Contact me</Button>
              </Link>
            </ButtonWrapper>
          )}
        </TextContainer>

        <ImageContainer>
          <Image src={bannerImg} alt="Banner image" />

          <IconLinksWrapper>
            <LinkRef
              href="https://github.com/ProjectPB"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubIcon alt="Github icon" />
            </LinkRef>
            <LinkRef target="_blank" rel="noopener noreferrer" disabled>
              <LinkedInIcon alt="Linkedin icon" />
            </LinkRef>
          </IconLinksWrapper>

          {width <= "768" && (
            <ButtonWrapper>
              <Link to="contact" smooth={true}>
                <Button primary>Contact me</Button>
              </Link>
            </ButtonWrapper>
          )}
        </ImageContainer>
      </BannerWrapper>
      {width > "768" && (
        <ScrollDownContainer>
          <Link to="skills" smooth={true} offset={-70}>
            <ScrollIcon />
          </Link>
        </ScrollDownContainer>
      )}
    </BannerContainer>
  );
};

export default Banner;
