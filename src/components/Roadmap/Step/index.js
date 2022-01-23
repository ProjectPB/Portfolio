import React from "react";
import { CheckCircle } from "@mui/icons-material";
import CircularProgress from "@mui/material/CircularProgress";
import { IconContainer, MediumText, StepContainer } from "./Styles";

const Step = ({ text, progress }) => {
  return (
    <StepContainer>
      <IconContainer>
        {progress === "done" && <CheckCircle />}
        {progress === "ongoing" && <CircularProgress />}
        {progress === "future" && ""}
      </IconContainer>
      <MediumText>{text}</MediumText>
    </StepContainer>
  );
};

export default Step;
