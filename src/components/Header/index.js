import React, { useState, useEffect } from "react";
import { useWidth } from "./../../hooks";
import Logo from "../Logo";
import Navbar from "../Navbar";
import {
  HeaderContainer,
  LeftContainer,
  RightContainer,
  List,
  ListItem,
  MenuIcon,
  CloseIcon,
  HeaderWrapper,
} from "./Styles";

const Header = () => {
  const width = useWidth();
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [borderShow, setBorderShow] = useState(false);

  const displayBorder = () => {
    if (window.scrollY > 1) {
      setBorderShow(true);
    } else {
      setBorderShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", displayBorder);
    return () => window.removeEventListener("scroll", displayBorder);
  }, []);

  const openNavbar = () => {
    setNavbarOpen(!navbarOpen);
  };

  useEffect(() => {
    if (width >= 992) {
      setNavbarOpen(false);
    }
  }, [width]);

  return (
    <HeaderWrapper border={!navbarOpen && borderShow}>
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
          {width <= 992 && !navbarOpen && <MenuIcon onClick={openNavbar} />}
          {width <= 992 && navbarOpen && <CloseIcon onClick={openNavbar} />}
        </RightContainer>
      </HeaderContainer>
    </HeaderWrapper>
  );
};

export default Header;
