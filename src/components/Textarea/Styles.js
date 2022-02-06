import styled from "styled-components";
import { color, font_size } from "../../utils/styles";

export const TextareaContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.h2`
  ${font_size.small}
  margin-bottom: 3px;

  :after {
    content: " *";
    color: ${color.red};
  }
`;

export const StyledTextarea = styled.textarea`
  resize: none;
  outline: none;
  height: 100px;
  padding: 10px;
  border: 1px solid ${color.primary};
  background-color: ${color.backgroundLight};
  border-radius: 5px;

  :focus {
    border: 2px solid ${color.primary};
  }
`;
