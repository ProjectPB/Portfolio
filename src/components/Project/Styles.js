import styled, { css } from "styled-components";
import GitHub from "@mui/icons-material/GitHub";
import Open from "@mui/icons-material/OpenInNew";
import BuildIcon from "@mui/icons-material/Build";
import { color, font_size, font_weight } from "../../utils/styles";

export const ProjectContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  flex-direction: ${(props) => props.swap && "row-reverse"};
  :not(:first-child) {
    margin: 180px auto;
  }
  :first-child {
    margin: 120px auto 180px;
  }

  @media (max-width: 992px) {
    flex-direction: column;
    width: 90%;
    margin: 30px auto;
    :not(:last-child) {
      border-bottom: 1px solid ${color.backgroundMedium};
    }
    :not(:first-child),
    :first-child {
      margin: 30px auto;
    }
  }

  @media (max-width: 768px) {
    :not(:first-child) {
      padding: 30px 0;
    }
    :not(:first-child),
    :first-child {
      margin: 15px auto;
    }
  }
`;

export const LeftContainer = styled.div`
  position: relative;
  flex: 0.7;
  margin: 0 50px;

  @media (max-width: 992px) {
    margin: 0 30px;
  }
`;

export const FullscreenImage = styled.img`
  width: 100%;
`;

export const MobileImage = styled.img`
  width: 27.5%;
  position: absolute;
  right: ${(props) => !props.swap && "-30px"};
  bottom: -15px;
  left: ${(props) => props.swap && "-15px"};
  transform: ${(props) => (props.swap ? "rotate(-15deg)" : "rotate(15deg)")};
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
`;

export const RightContainer = styled.div`
  display: flex;
  flex: 0.3;
  margin: 0 50px;
  flex-direction: column;
  justify-content: space-evenly;
  text-align: center;

  @media (max-width: 992px) {
    margin: 20px 0;
  }
`;

export const TextContainer = styled.div``;

export const Heading = styled.h1`
  ${font_size.large}
  ${font_weight.bold}
  margin-bottom: 15px;

  @media (max-width: 600px) {
    ${font_size.medium}
    margin-bottom: 10px;
  }
`;

export const InviteText = styled.h2`
  display: block;
  ${font_size.custom(20)}
  ${font_weight.regular}  
  margin-bottom: 15px;

  @media (max-width: 600px) {
    margin-bottom: 10px;
  }
`;

export const TextKeyword = styled.span`
  ${font_weight.medium};
  color: ${(props) => props.color && props.color};
`;

export const Description = styled.h3`
  ${font_weight.regular}
  ${font_size.small}
  color: ${color.textLight};
  margin-bottom: 15px;

  @media (max-width: 600px) {
    ${font_size.small}
    margin-bottom: 10px;
  }
`;

export const TextDevWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  ${color.backgroundLight};
  border: 1px solid #000072;
  padding: 5px 10px;
  border-radius: 10px;
  width: fit-content;
  margin: 0 auto 15px;

  @media (max-width: 600px) {
    margin-bottom: 10px;
  }
`;

export const TextDev = styled.h4`
  color: ${color.darkBlue};
  margin-left: 7px;
  ${font_size.small}

  @media (max-width: 600px) {
    ${font_size.xsmall}
  }
`;

export const DevIcon = styled(BuildIcon)`
  color: ${color.darkBlue};
`;

export const IconLinksWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px -20px 0 -20px;
`;

const iconStyle = css`
  transform: scale(2);
  margin: 0 20px;
  object-fit: contain;
  color: ${color.backgroundMedium};
`;

export const GitHubIcon = styled(GitHub)`
  ${iconStyle}
  color: ${color.github};
`;

export const OpenIcon = styled(Open)`
  ${iconStyle}
  color: ${color.primary};

  :hover {
    color: ${color.primaryDark};
  }
`;

const iconHoverEffect = css`
  transform: scale(2.25);
  opacity: 0.8;
  transition: ease-in-out 0.25s;
`;

export const Link = styled.a`
  padding: 20px;
  cursor: pointer;

  &:hover ${GitHubIcon}, &:hover ${OpenIcon} {
    ${iconHoverEffect}
  }

  @media (max-width: 600px) {
    padding: 15px;
  }
`;
