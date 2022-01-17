import styled from "styled-components";

export const TextareaContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.h2`
  font-size: 16px;
  margin-bottom: 3px;
`;

export const StyledTextarea = styled.textarea`
  resize: none;
  outline: none;
  height: 100px;
  padding: 10px;
  border: 1px solid gold;
  background-color: #fafafa;
  border-radius: 5px;
`;
