import React from "react";
import Title from "../Title";
import Step from "./Step";
import { CheckCircle } from "@mui/icons-material";
import CircularProgress from "@mui/material/CircularProgress";
import { RoadmapContainer, StepsWrapper } from "./Styles";

const Roadmap = () => {
  const titleConfig = {
    upperText: "Goals",
    lowerText_1: "Development",
    lowerText_2: "Currently working on...",
  };

  const steps = [
    {
      text: "Finish Codecademy Web Development course",
      icon: CircularProgress,
    },
    {
      text: "Create clones of the most popular websites",
      icon: CheckCircle,
    },
    {
      text: "Create Sharefood project",
      icon: CheckCircle,
    },
    {
      text: "Create Concerton project",
      icon: CheckCircle,
    },
    {
      text: "Create Wearshop project",
      icon: CheckCircle,
    },
    {
      text: "Create Portfolio project",
      icon: CheckCircle,
    },
    {
      text: "Land a full time job as a developer",
      icon: CircularProgress,
    },
    { text: "Learn Typescript fundamentals", icon: CircularProgress },
    {
      text: "Maintain and improve Sharefood to scale to many users",
      icon: CircularProgress,
    },
  ];

  return (
    <RoadmapContainer>
      <Title {...titleConfig} />

      <StepsWrapper>
        {steps.map(({ text, icon }, id) => (
          <Step text={text} Icon={icon} key={id} />
        ))}
      </StepsWrapper>
    </RoadmapContainer>
  );
};

export default Roadmap;
