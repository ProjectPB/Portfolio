import styled from "styled-components";
import { color, font_size, font_weight } from "../../../utils/styles";

export const StepContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin: 3px 0;
`;

export const IconContainer = styled.div`
  height: 40px;
  width: 30px;
  margin-right: 10px;

  & .MuiSvgIcon-root {
    color: ${color.secondary};
    margin-top: 8.25px;
    margin-left: 8px;

    &[hidden] {
      visibility: hidden;
    }
  }

  & .MuiCircularProgress-svg {
    color: ${color.secondary};
    transform: scale(0.5);
  }
`;

export const Text = styled.h2`
  ${font_size.small}
  ${font_weight.regular}
  
  @media (max-width: 600px) {
    ${font_size.small}
  }
`;
