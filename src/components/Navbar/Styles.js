import styled from "styled-components";

export const NavbarContainer = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  background-color: white;
  position: fixed;
  z-index: 99;
  top: 70px;
  right: 0px;
  bottom: 0px;
  left: 0px;
`;

export const ListItem = styled.li`
  display: block;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  width: 100%;
  padding: 25px 0px 25px 15px;

  &:hover {
    background-color: gold;
  }
`;
