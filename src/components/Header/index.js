import React, { useState, useEffect } from "react";
import { useWidth } from "./../../hooks";
import Logo from "../Logo";
import {
  HeaderContainer,
  LeftContainer,
  RightContainer,
  IconMenu,
  List,
  ListItem,
} from "./Styles";
import Navbar from "../Navbar";

const Header = () => {
  const width = useWidth();
  const [navbarOpen, setNavbarOpen] = useState(false);

  const openNavbar = () => {
    setNavbarOpen(!navbarOpen);
  };

  useEffect(() => {
    if (width >= 992) {
      setNavbarOpen(false);
    }
  }, [width]);

  return (
    <HeaderContainer>
      <LeftContainer>
        <Logo />
      </LeftContainer>

      <Navbar open={navbarOpen} />

      <RightContainer>
        {width > 992 && (
          <List>
            <ListItem>Projects</ListItem>
            <ListItem>Skills</ListItem>
            <ListItem>Goals</ListItem>
            <ListItem>Contact</ListItem>
          </List>
        )}
        {width <= 992 && <IconMenu onClick={openNavbar} />}
      </RightContainer>
    </HeaderContainer>
  );
};

export default Header;
