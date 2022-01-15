import React from "react";
import { IconContainer, MediumText, StepContainer } from "./Styles";

const Step = ({ text, Icon }) => {
  return (
    <StepContainer>
      <IconContainer>
        <Icon />
      </IconContainer>
      <MediumText>{text}</MediumText>
    </StepContainer>
  );
};

export default Step;
