import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px 15%;
  height: 50px;
  position: relative;
  margin-top: 20px;

  @media (max-width: 992px) {
    padding: 5px 15px;
    position: static;
    margin: 0;
  }
`;

export const LeftContainer = styled.div`
  padding-bottom: 3px;
`;

export const RightContainer = styled.div``;

export const IconMenu = styled(MenuIcon)`
  height: 35px !important;
  width: 35px !important;
  margin-top: 7.5px;
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
