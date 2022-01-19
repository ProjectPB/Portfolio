import styled from "styled-components";
import { Close, Menu } from "@mui/icons-material";

export const HeaderWrapper = styled.div`
  position: fixed;
  width: 100%;
  max-width: 1500px;
  z-index: 99;
`;

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  background-color: white;
  padding: 20px 10% 0 10%;
  height: 70px;
  width: 100%;
  z-index: 99;
  border-bottom: ${(props) => props.border && "1px solid gold"};

  @media (max-width: 992px) {
    padding: 5px 15px;
    margin: 0;
  }
`;

export const LeftContainer = styled.div`
  margin-bottom: 5px;
`;

export const RightContainer = styled.div``;

export const MenuIcon = styled(Menu)`
  height: 35px !important;
  width: 35px !important;
  margin-top: 2.5px;
  cursor: pointer;
`;

export const CloseIcon = styled(Close)`
  height: 35px !important;
  width: 35px !important;
  margin-top: 2.5px;
  cursor: pointer;
`;

export const List = styled.ul`
  list-style-type: none;
  display: flex;
  align-items: center;
  margin: 0px -27px;
`;

export const ListItem = styled.li`
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  margin: 0 25px;
  position: relative;
  padding: 0 2px 3px 2px;

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
    background-color: orangered;
    transform-origin: center;
  }

  :hover::after {
    transform: scaleX(1);
  }

  :hover {
    opacity: 0.75;
  }
`;
