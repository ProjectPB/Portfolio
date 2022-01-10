import React from "react";
import { NavbarContainer, ListItem } from "./Styles";

const Navbar = ({ open }) => {
  return (
    open && (
      <NavbarContainer>
        <ListItem>Projects</ListItem>
        <ListItem>Skills</ListItem>
        <ListItem>Goals</ListItem>
        <ListItem>Contact</ListItem>
      </NavbarContainer>
    )
  );
};

export default Navbar;
