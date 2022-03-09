import React from "react";
import { NavbarContainer, Logo } from "./Navbar.style";
import LogoImg from "../../logo/logo.png";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <NavbarContainer>
      <Link to={"/"}>
        <Logo src={LogoImg}></Logo>
      </Link>
    </NavbarContainer>
  );
}
