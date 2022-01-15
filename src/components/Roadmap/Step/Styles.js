import styled from "styled-components";

export const StepContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

export const IconContainer = styled.div`
  height: 40px;
  width: 30px;
  margin-right: 10px;

  & .MuiSvgIcon-root {
    color: #ff7100;
    margin-top: 8.25px;
    margin-left: 8px;
  }

  & .MuiCircularProgress-svg {
    color: #ff7100;
    transform: scale(0.5);
  }
`;

export const MediumText = styled.h2`
  display: block;
  font-size: 16px;
  font-weight: 400;

  @media (max-width: 600px) {
    font-size: 12px;
  }
`;
