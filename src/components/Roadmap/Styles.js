import styled from "styled-components";

export const RoadmapContainer = styled.div`
  border-top: 1px solid gold;
  padding: 20px 0;
  width: 100%;
`;

export const StepsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 700px;
  margin: 0 auto;
  padding: 10px 10px;
  border-radius: 15px;
  outline: 1px solid gold;

  @media (max-width: 768px) {
    width: 90%;
  }
`;
