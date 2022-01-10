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
`;

export const ListItem = styled.li`
  display: block;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  padding: 20px 0 20px 15px;
  width: 100%;
`;
