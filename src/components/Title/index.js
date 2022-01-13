import React from "react";
import { TextLarge, TextMedium, TitleContainer } from "./Styles";

const Title = ({ upperText, lowerText_1, lowerText_2 }) => {
  return (
    <TitleContainer>
      <TextLarge>{upperText}</TextLarge>

      <TextMedium>{lowerText_1}</TextMedium>
      <TextMedium>{lowerText_2}</TextMedium>
    </TitleContainer>
  );
};

export default Title;
