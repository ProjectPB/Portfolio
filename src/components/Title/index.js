import React, { useEffect } from "react";
import AOS from "aos";
import { TextLarge, TextMedium, TitleContainer } from "./Styles";

const Title = ({ upperText, lowerText_1, lowerText_2 }) => {
  useEffect(() => {
    window.addEventListener("load", AOS.refresh);
  }, []);

  return (
    <TitleContainer>
      <TextLarge data-aos="fade-up">{upperText}</TextLarge>

      <TextMedium data-aos="fade-up">{lowerText_1}</TextMedium>
      <TextMedium data-aos="fade-up">{lowerText_2}</TextMedium>
    </TitleContainer>
  );
};

export default Title;
