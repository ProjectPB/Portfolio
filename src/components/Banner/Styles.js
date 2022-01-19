import styled, { css } from "styled-components";
import GitHub from "@mui/icons-material/GitHub";
import LinkedIn from "@mui/icons-material/LinkedIn";
import Google from "@mui/icons-material/Google";

export const BannerContainer = styled.div`
  border-bottom: 1px solid gold;
  height: 100vh;
  display: flex;
  justify-content: space-evenly;

  @media (max-width: 768px) {
    flex-direction: column;
    height: calc(100vh + 80px);
    padding-top: 30px;
  }
`;

export const TextContainer = styled.div`
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

export const TextLarge = styled.h1`
  font-size: 32px;
  font-weight: 700;
  display: block;
`;

export const TextMedium = styled.p`
  font-size: 24px;
  font-weight: 400;
`;

export const MediumTextWrapper = styled.div`
  padding: 10px 0;
`;

export const ButtonWrapper = styled.div`
  margin-top: 10px;
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
  margin: 40px 0;
`;

const iconStyle = css`
  transform: scale(2);
  margin: 0 20px;
  object-fit: contain;
  color: lightgray;
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

export const Link = styled.a`
  padding: 20px;
  cursor: pointer;

  &:hover ${GitHubIcon} {
    color: #333;
    transition: ease-in-out 0.2s;
  }

  &:hover ${LinkedInIcon} {
    color: #0e76a8;
    transition: ease-in-out 0.2s;
  }

  &:hover ${GoogleIcon} {
    color: #db4a39;
    transition: ease-in-out 0.2s;
  }
`;
