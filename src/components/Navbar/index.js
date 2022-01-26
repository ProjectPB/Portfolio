import React from "react";
import { Link } from "react-scroll";
import { NavbarContainer, ListItem } from "./Styles";

const Navbar = ({ isOpen, open }) => {
  return (
    isOpen && (
      <NavbarContainer>
        <Link to="skills" smooth={true} offset={-60} onClick={open}>
          <ListItem>Skills</ListItem>
        </Link>
        <Link to="projects" smooth={true} offset={-60} onClick={open}>
          <ListItem>Projects</ListItem>
        </Link>
        <Link to="roadmap" smooth={true} offset={-60} onClick={open}>
          <ListItem>Goals</ListItem>
        </Link>
        <Link to="contact" smooth={true} offset={-60} onClick={open}>
          <ListItem>Contact</ListItem>
        </Link>
      </NavbarContainer>
    )
  );
};

export default Navbar;
