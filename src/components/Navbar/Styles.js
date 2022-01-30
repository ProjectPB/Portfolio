import styled from "styled-components";
import { color, font_size, font_weight } from "../../utils/styles";

export const NavbarContainer = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  background-color: white;
  position: fixed;
  z-index: 99;
  top: 60px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  border-top: 1px solid ${color.backgroundMedium};
`;

export const ListItem = styled.li`
  ${font_size.small}
  ${font_weight.medium}
  cursor: pointer;
  width: 100%;
  padding: 20px 0px 20px 15px;

  &:hover {
    background-color: ${color.primary};
  }
`;
