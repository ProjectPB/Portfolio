import styled, { css } from "styled-components";
import GitHub from "@mui/icons-material/GitHub";
import LinkedIn from "@mui/icons-material/LinkedIn";
import Google from "@mui/icons-material/Google";
import ArrowCircleDownOutlinedIcon from "@mui/icons-material/ArrowCircleDownOutlined";
import { color, font_size, font_weight } from "../../utils/styles";

export const BannerContainer = styled.div`
  position: relative;
`;

export const BannerWrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  padding: 0 25px;
  max-width: 1200px;
  max-height: 900px;

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: flex-start;
    padding: 60px 10px 0;
  }
`;

export const TextContainer = styled.div`
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 66%;

  @media (max-width: 768px) {
    text-align: center;
    max-width: inherit;
  }
`;

export const HeadingWrapper = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    justify-content: center;
    margin-left: 30px;
  }
`;

export const Heading = styled.h1`
  ${font_size.xlarge}
  ${font_weight.bold}

  @media (max-width: 600px) {
    ${font_size.large}
  }
`;

export const Img = styled.img`
  height: 48px;
  object-fit: contain;
  margin-left: 20px;

  @media (max-width: 768px) {
    height: 36px;
  }
`;

export const Text = styled.p`
  ${font_size.medium}
  ${font_weight.light}
  color: ${color.textLight};

  &:not(:last-child) {
    margin-bottom: 5px;
  }

  @media (max-width: 768px) {
    ${font_size.small}
  }
`;

export const Keyword = styled.span`
  ${font_size.custom(26)}
  ${font_weight.regular}
  color: ${(props) => props.color && props.color};

  @media (max-width: 768px) {
    ${font_size.custom(18)}
    line-height: 1.5;
  }
`;

export const TextWrapper = styled.div`
  margin-top: 10px;
`;

export const ButtonWrapper = styled.div`
  margin-top: 25px;

  @media (max-width: 768px) {
    margin: 0 auto;
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Image = styled.img`
  height: 300px;
  object-fit: contain;
`;

export const IconLinksWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;

  @media (max-width: 768px) {
    margin: 10px 0;
  }
`;

const iconStyle = css`
  transform: scale(2);
  margin: 0 20px;
  object-fit: contain;
  color: ${color.backgroundMedium};
`;

export const GitHubIcon = styled(GitHub)`
  ${iconStyle}
`;

export const LinkedInIcon = styled(LinkedIn)`
  ${iconStyle}
`;

export const GoogleIcon = styled(Google)`
  ${iconStyle}
`;

export const LinkRef = styled.a`
  padding: 20px;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};

  &:hover ${GitHubIcon} {
    color: ${color.github};
    transition: ease-in-out 0.2s;
  }

  &:hover ${LinkedInIcon} {
    color: ${color.linkedin};
    transition: ease-in-out 0.2s;
  }

  &:hover ${GoogleIcon} {
    color: ${color.google};
    transition: ease-in-out 0.2s;
  }
`;

export const ScrollDownContainer = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  bottom: 15px;
  width: 100%;
`;

export const ScrollIcon = styled(ArrowCircleDownOutlinedIcon)`
  color: ${color.primary};
  height: 75px !important;
  width: 75px !important;
  cursor: pointer;

  :hover {
    color: ${color.primaryDark};
    transition: ease-in-out 0.2s;
  }
`;
