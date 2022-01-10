import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px 15%;
  height: 50px;
  top: 20px;
  position: relative;

  @media (max-width: 992px) {
    padding: 5px 15px;
    position: static;
    top: 0;
  }
`;

export const LeftContainer = styled.div``;

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
  margin: 0 -25px;
`;

export const ListItem = styled.li`
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  margin: 0 25px;
`;
