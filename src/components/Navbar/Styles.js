import styled from "styled-components";

export const NavbarContainer = styled.ul`
  list-style-type: none;
  display: flex;
  align-items: center;
  flex-direction: column;
  position: absolute;
  justify-content: center;
  top: 50px;
  width: 100%;
  margin-left: -15px;
  background-color: white;
  border-bottom: 1px solid gold;
`;

export const ListItem = styled.li`
  display: block;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  width: 100%;
  padding: 20px 17.5px;

  &:hover {
    background-color: gold;
  }
`;
