import styled from "styled-components";
import ScrollContainer from "react-indiana-drag-scroll";

export const SkillsContainer = styled.div`
  width: 100%;
  padding: 20px 0;
`;

export const SkillsWrapper = styled(ScrollContainer)`
  margin: 30px 0;
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
