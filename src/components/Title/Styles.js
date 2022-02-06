import styled from "styled-components";
import { color, font_size, font_weight } from "../../utils/styles";

export const TitleContainer = styled.div`
  text-align: center;
  margin-bottom: 15px;
  width: 100%;
  padding: 0 20px;
`;

export const SectionName = styled.h1`
  ${font_size.large}
  ${font_weight.medium}
  
  @media (max-width: 600px) {
    ${font_size.medium}
  }
`;

export const Text = styled.h2`
  ${font_size.medium}
  ${font_weight.regular}
  color: ${color.textLight};
  margin-top: 2.5px;

  @media (max-width: 600px) {
    ${font_size.small}
  }
`;
