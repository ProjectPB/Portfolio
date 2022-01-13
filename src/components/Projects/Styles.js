import styled from "styled-components";
import GitHub from "@mui/icons-material/GitHub";
import Open from "@mui/icons-material/OpenInNew";

export const ProjectsContainer = styled.div`
  border-top: 1px solid gold;
  padding: 20px 0;
`;

export const ProjectsWrapper = styled.div`
  display: flex;
  width: 100%;
  margin: 30px 0;

  @media (max-width: 992px) {
    flex-direction: column;
    width: 90%;
    margin: 30px auto;
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
  width: 25%;
  position: absolute;
  right: -30px;
  bottom: -15px;
  transform: rotate(15deg);
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
`;

export const TextMedium = styled.h2`
  display: block;
  font-size: 16px;
  font-weight: 400;
  margin-top: 20px;
`;

export const TextSmall = styled.h3`
  display: block;
  font-size: 16px;
  font-weight: 400;
`;

export const IconLinksWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px -20px 0 -20px;
`;

export const GitHubIcon = styled(GitHub)`
  transform: scale(2);
  margin: 0 20px;
  object-fit: contain;
  color: lightgray;
`;

export const OpenIcon = styled(Open)`
  transform: scale(2);
  margin: 0 20px;
  object-fit: contain;
  color: lightgray;
`;

export const Link = styled.a`
  padding: 20px;
  cursor: pointer;

  &:hover ${GitHubIcon} {
    color: #333;
    transition: ease-in-out 0.2s;
  }

  &:hover ${OpenIcon} {
    color: gold;
    transition: ease-in-out 0.2s;
  }
`;
