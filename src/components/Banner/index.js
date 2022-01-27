import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import { useWidth } from "./../../hooks";
import bannerImg from "./../../assets/banner/banner_image.png";
import waveDogImg from "./../../assets/banner/dog_wave.png";
import Button from "../Button";
import {
  BannerContainer,
  ButtonWrapper,
  Image,
  ImageContainer,
  MediumTextWrapper,
  TextContainer,
  TextLarge,
  TextMedium,
  IconLinksWrapper,
  GitHubIcon,
  LinkedInIcon,
  GoogleIcon,
  SpanMedium,
  Img,
  LargeTextWrapper,
  BannerWrapper,
  ScrollIcon,
  LinkRef,
  ScrollDownContainer,
} from "./Styles";

const Banner = () => {
  const width = useWidth();

  return (
    <BannerContainer id="main">
      <BannerWrapper>
        <TextContainer>
          <LargeTextWrapper>
            <TextLarge>Hello there!</TextLarge>
            <Img src={waveDogImg} alt="Waving dog" />
          </LargeTextWrapper>

          <MediumTextWrapper>
            <TextMedium>
              My name is <SpanMedium color="#eebc1d">Patryk</SpanMedium>.
            </TextMedium>
            <TextMedium>
              I'm a passionate, determined and hard working{" "}
              <SpanMedium color="#6600cc">web developer</SpanMedium> from
              Poland.
            </TextMedium>
            <TextMedium>
              Always looking for new{" "}
              <SpanMedium color="#cc0000">challenges</SpanMedium> and
              <SpanMedium color="#cc00cc"> cooperation </SpanMedium>
              opportunities.
            </TextMedium>
          </MediumTextWrapper>

          {width > "768" && (
            <ButtonWrapper>
              <Button primary>Contact me</Button>
            </ButtonWrapper>
          )}
        </TextContainer>

        <ImageContainer>
          <Image src={bannerImg} alt="Banner image" />

          <IconLinksWrapper>
            <LinkRef>
              <GitHubIcon alt="Github icon" />
            </LinkRef>
            <LinkRef>
              <LinkedInIcon alt="Linkedin icon" />
            </LinkRef>
            <LinkRef>
              <GoogleIcon alt="Google icon" />
            </LinkRef>
          </IconLinksWrapper>

          {width <= "768" && (
            <ButtonWrapper>
              <Button primary>Contact me</Button>
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
