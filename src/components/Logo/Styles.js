import styled from "styled-components";
import { font_size, font_weight } from "./../../utils/styles";

export const Typography = styled.h1`
  cursor: pointer;
  user-select: none;
  ${font_weight.bold}
  ${font_size.medium}

  @media (max-width: 600px) {
    position: relative;
    top: 2.5px;
    ${font_size.small}
  }
`;

export const Span = styled.span``;

export const LogoContainer = styled.div``;
