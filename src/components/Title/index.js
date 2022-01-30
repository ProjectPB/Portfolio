import React, { useEffect } from "react";
import AOS from "aos";

import { SectionName, Text, TitleContainer } from "./Styles";

const Title = ({ sectionName, upper, lower }) => {
  useEffect(() => {
    window.addEventListener("load", AOS.refresh);
  }, []);

  return (
    <TitleContainer>
      <SectionName data-aos="fade-up">{sectionName}</SectionName>

      <Text data-aos="fade-up">{upper}</Text>
      <Text data-aos="fade-up">{lower}</Text>
    </TitleContainer>
  );
};

export default Title;
