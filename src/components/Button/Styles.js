import styled from "styled-components";
import { color, font_size } from "../../utils/styles";

export const ButtonContainer = styled.button`
  padding: 12px 24px;
  background-color: ${(props) =>
    props.primary ? color.primary : "transparent"};
  color: ${(props) => (props.primary ? "black" : color.primary)};
  border: ${(props) =>
    props.primary ? "2px solid black" : `2px solid ${color.primary}`};
  cursor: pointer;
  border-radius: 5px;
  text-transform: uppercase;
  user-select: none;
  ${font_size.small}

  :active {
    background-color: ${(props) =>
      props.primary ? color.secondary : "transparent"};
    color: ${(props) => (props.primary ? "black" : color.secondary)};
    border: ${(props) =>
      props.primary ? "2px solid black" : `2px solid ${color.secondary}`};
  }

  :hover {
    opacity: 0.8;
    box-shadow: 0 4px 16px 0px rgba(31, 38, 135, 0.37);
  }
`;
