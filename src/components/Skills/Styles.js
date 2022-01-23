import styled from "styled-components";
import ScrollContainer from "react-indiana-drag-scroll";

export const SkillsContainer = styled.div`
  width: 100%;
  padding: 25px 0;
  background-color: #f2f2f2;
`;

export const SkillsWrapper = styled(ScrollContainer)`
  margin: 30px auto;
  max-width: 1200px;
  width: 90%;
  cursor: grab;
  display: flex;
  background: rgba(255, 255, 255, 0.3);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(0px);
  -webkit-backdrop-filter: blur(0px);
  border-radius: 10px;
  padding: 20px 0;
  border: 1px solid rgba(255, 255, 255, 0.2);

  :active {
    cursor: grabbing;
  }
`;

export const Skill = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
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
