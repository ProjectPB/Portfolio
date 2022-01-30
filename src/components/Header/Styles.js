import styled, { css } from "styled-components";
import { color, font_size, font_weight } from "../../utils/styles";
import { Close, Menu } from "@mui/icons-material";

export const HeaderWrapper = styled.div`
  position: fixed;
  width: 100%;
  z-index: 99;
  top: 0;
  height: 70px;
  padding-top: 20px;
  background-color: white;
  border-bottom: ${(props) => props.border && `1px solid ${color.primary}`};

  @media (max-width: 992px) {
    height: 60px;
    padding-top: 0px;
    display: flex;
    align-items: center;
  }
`;

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  max-width: 1500px;
  background-color: white;
  padding: 0 10%;
  left: 0;
  right: 0;
  margin: 0 auto;
  width: 100%;

  @media (max-width: 992px) {
    padding: 0 15px;
    margin: 0;
  }
`;

export const LeftContainer = styled.div`
  margin-bottom: 5px;
`;

export const RightContainer = styled.div``;

const navIconStyle = css`
  height: 35px !important;
  width: 35px !important;
  margin-top: 2.5px;
  cursor: pointer;

  @media (max-width: 600px) {
    height: 30px !important;
    width: 30px !important;
    margin-top: 0;
  }
`;

export const MenuIcon = styled(Menu)`
  ${navIconStyle}
`;

export const CloseIcon = styled(Close)`
  ${navIconStyle}
`;

export const List = styled.ul`
  list-style-type: none;
  display: flex;
  align-items: center;
  margin: 0px -27px;
`;

export const ListItem = styled.li`
  ${font_size.small}
  ${font_weight.medium};
  cursor: pointer;
  margin: 0 25px;
  position: relative;
  padding: 0 2px 3px 2px;
  user-select: none;

  :after {
    content: "";
    position: absolute;
    display: block;
    width: 100%;
    height: 2px;
    bottom: 0;
    left: 0;
    transform: scaleX(0);
    transition: transform 0.25s ease;
    background-color: ${color.secondary};
    transform-origin: center;
  }

  :hover::after {
    transform: scaleX(0.99);
  }

  :hover {
    opacity: 0.75;
  }
`;
