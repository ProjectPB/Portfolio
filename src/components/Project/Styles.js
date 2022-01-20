import styled, { css } from "styled-components";
import GitHub from "@mui/icons-material/GitHub";
import Open from "@mui/icons-material/OpenInNew";
import BuildIcon from "@mui/icons-material/Build";

export const ProjectContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin: 120px auto;
  flex-direction: ${(props) => props.swap && "row-reverse"};

  @media (max-width: 992px) {
    flex-direction: column;
    width: 90%;
    margin: 30px auto;

    :not(:last-child) {
      border-bottom: 1px solid lightgray;
    }
  }

  @media (max-width: 600px) {
    margin: 15px auto;
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

export const TextLarge = styled.h1`
  display: block;
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 15px;

  @media (max-width: 600px) {
    font-size: 24px;
    margin-bottom: 10px;
  }
`;

export const TextMedium = styled.h2`
  display: block;
  font-size: 20px;
  font-weight: 400;
  margin-bottom: 15px;

  @media (max-width: 600px) {
    font-size: 15px;
    margin-bottom: 10px;
  }
`;

export const TextKeyword = styled.span`
  font-weight: 700;
  color: ${(props) => props.color && props.color};
`;

export const TextSmall = styled.h3`
  display: block;
  color: #8c8c8c;
  font-size: 16px;
  font-weight: 400;
  margin-bottom: 15px;

  @media (max-width: 600px) {
    font-size: 12px;
    margin-bottom: 10px;
  }
`;

export const TextDevWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fafafa;
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
  color: #000072;
  margin-left: 7px;
  font-size: 16px;

  @media (max-width: 600px) {
    font-size: 12px;
  }
`;

export const DevIcon = styled(BuildIcon)`
  color: #000072;
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
  color: lightgray;
`;

export const GitHubIcon = styled(GitHub)`
  ${iconStyle}
  color: #333;
`;

export const OpenIcon = styled(Open)`
  ${iconStyle}
  color: gold;
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
