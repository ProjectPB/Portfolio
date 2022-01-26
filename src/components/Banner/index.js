import React from "react";
import bannerImg from "./../../assets/banner_image.png";
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
  Wrapper,
  IconLinksWrapper,
  Link,
  GitHubIcon,
  LinkedInIcon,
  GoogleIcon,
} from "./Styles";

const Banner = () => {
  return (
    <BannerContainer id="main">
      <TextContainer>
        <TextLarge>Hello there!</TextLarge>

        <MediumTextWrapper>
          <TextMedium>My name is Patryk</TextMedium>
          <TextMedium>I am a web developer from Poland</TextMedium>
        </MediumTextWrapper>

        <ButtonWrapper>
          <Button primary>Contact me</Button>
        </ButtonWrapper>
      </TextContainer>

      <ImageContainer>
        <Image src={bannerImg} />

        <IconLinksWrapper>
          <Link>
            <GitHubIcon />
          </Link>
          <Link>
            <LinkedInIcon />
          </Link>
          <Link>
            <GoogleIcon />
          </Link>
        </IconLinksWrapper>
      </ImageContainer>
    </BannerContainer>
  );
};

export default Banner;
