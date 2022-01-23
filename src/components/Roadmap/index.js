import React from "react";
import Title from "../Title";
import Step from "./Step";
import { RoadmapContainer, StepsWrapper } from "./Styles";

const Roadmap = () => {
  const titleConfig = {
    upperText: "Goals",
    lowerText_1:
      "Sustainable development and achieving goals are very important for me.",
    lowerText_2: "Check what I am currently working on!",
  };

  const steps = [
    {
      text: "Finish Codecademy Web Development course",
      progress: "ongoing",
    },
    {
      text: "Create clones of the most popular websites",
      progress: "done",
    },
    {
      text: "Create Sharefood project",
      progress: "done",
    },
    {
      text: "Create Concerton project",
      progress: "done",
    },
    {
      text: "Create Wearshop project",
      progress: "done",
    },
    {
      text: "Create Portfolio project",
      progress: "done",
    },
    {
      text: "Land a full time job as a developer",
      progress: "ongoing",
    },
    { text: "Learn Typescript fundamentals", progress: "ongoing" },
    {
      text: "Maintain and improve Sharefood to scale to many users",
      progress: "future",
    },
  ];

  return (
    <RoadmapContainer>
      <Title {...titleConfig} />

      <StepsWrapper>
        {steps.map(({ text, progress }, id) => (
          <Step text={text} progress={progress} key={id} />
        ))}
      </StepsWrapper>
    </RoadmapContainer>
  );
};

export default Roadmap;
