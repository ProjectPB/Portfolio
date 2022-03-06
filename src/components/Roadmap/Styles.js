import styled from "styled-components";
import { color, shadowBackground } from "../../utils/styles";

export const RoadmapContainer = styled.div`
  padding: 75px 0;
  width: 100%;
  background-color: ${color.secondary};
  max-width: 1400px;
  margin: 0 auto;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 25px 0;
  }
`;

export const StepsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 700px;
  margin: 30px auto 15px;
  padding: 10px;
  ${shadowBackground}

  @media (max-width: 768px) {
    width: 90%;
  }
`;
