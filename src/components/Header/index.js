import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
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
    if (width < 992) {
      setNavbarOpen(!navbarOpen);
    }
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
          <Link to="main" smooth={true} onClick={() => setNavbarOpen(false)}>
            <Logo />
          </Link>
        </LeftContainer>

        <Navbar isOpen={navbarOpen} open={openNavbar} />

        <RightContainer>
          {width > 992 && (
            <List>
              <Link to="skills" smooth={true} offset={-70}>
                <ListItem>Skills</ListItem>
              </Link>
              <Link to="projects" smooth={true} offset={-70}>
                <ListItem>Projects</ListItem>
              </Link>
              <Link to="roadmap" smooth={true} offset={-70}>
                <ListItem>Goals</ListItem>
              </Link>
              <Link to="contact" smooth={true}>
                <ListItem>Contact</ListItem>
              </Link>
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
