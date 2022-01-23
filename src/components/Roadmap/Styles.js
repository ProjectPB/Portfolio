import styled from "styled-components";

export const RoadmapContainer = styled.div`
  padding: 25px 0;
  width: 100%;
  background-color: #f2f2f2;
`;

export const StepsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 700px;
  margin: 0 auto;
  padding: 10px 10px;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  border-radius: 15px;
  border: 1px solid gold;

    @media (max-width: 768px) {
      width: 90%;
    }
`;
