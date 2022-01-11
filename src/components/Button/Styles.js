import styled from "styled-components";

export const ButtonContainer = styled.button`
  padding: 12px 24px;
  background-color: ${(props) => (props.primary ? "gold" : "transparent")};
  color: ${(props) => (props.primary ? "black" : "gold")};
  border: ${(props) => (props.primary ? "2px solid black" : "2px solid gold")};
  cursor: pointer;
  border-radius: 5px;
  text-transform: uppercase;
  font-size: 16px;
`;
