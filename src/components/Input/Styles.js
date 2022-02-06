import styled from "styled-components";
import { font_size, color } from "../../utils/styles";

export const InputContainer = styled.div`
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

export const StyledInput = styled.input`
  border: 1px solid ${color.primary};
  margin: -1px;
  background-color: ${color.backgroundLight};
  border-radius: 5px;
  padding: 10px;
  outline: none;

  :focus {
    border: 2px solid ${color.primaryDark};
    margin: -2px;
  }
`;
