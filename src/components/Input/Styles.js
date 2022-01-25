import styled from "styled-components";

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.h2`
  font-size: 16px;
  margin-bottom: 3px;

  :after {
    content: " *";
    color: #ed4337;
  }
`;

export const StyledInput = styled.input`
  border: 1px solid lightgray;
  margin: -1px;
  background-color: #fafafa;
  border-radius: 5px;
  padding: 10px;
  outline: none;

  :focus {
    border: 2px solid gold;
    margin: -2px;
  }
`;
