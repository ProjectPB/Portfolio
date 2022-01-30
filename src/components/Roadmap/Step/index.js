import React, { useEffect } from "react";
import AOS from "aos";

import { CheckCircle } from "@mui/icons-material";
import CircularProgress from "@mui/material/CircularProgress";

import { IconContainer, Text, StepContainer } from "./Styles";

const Step = ({ text, progress }) => {
  useEffect(() => {
    window.addEventListener("load", AOS.refresh);
  }, []);

  return (
    <StepContainer data-aos="fade-left" data-aos-delay="300">
      <IconContainer>
        {progress === "done" && <CheckCircle />}
        {progress === "ongoing" && <CircularProgress />}
        {progress === "future" && <CheckCircle hidden />}
      </IconContainer>
      <Text>{text}</Text>
    </StepContainer>
  );
};

export default Step;
