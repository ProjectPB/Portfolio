import styled from "styled-components";
import ScrollContainer from "react-indiana-drag-scroll";

export const SkillsContainer = styled.div`
  width: 100%;
  padding: 20px 0;
`;

export const TextWrapper = styled.div`
  text-align: center;
  margin-bottom: 15px;
  width: 100%;
  padding: 0 20px;
`;

export const TextLarge = styled.h1`
  display: block;
`;

export const TextMedium = styled.h2`
  display: block;
  font-size: 16px;
  font-weight: 400;
`;

export const SkillsWrapper = styled(ScrollContainer)`
  margin-top: 30px;
  cursor: grab;
  display: flex;

  :active {
    cursor: grabbing;
  }
`;

export const Skill = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 0 30px;
`;

export const SkillIcon = styled.img`
  height: 128px;
  object-fit: contain;

  @media (max-width: 768px) {
    height: 64px;
  }
`;

export const SkillName = styled.h3`
  display: block;
  text-align: center;
  margin-top: 15px;
  font-size: 18px;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;
