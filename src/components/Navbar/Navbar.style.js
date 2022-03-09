import styled from "styled-components";

export const NavbarContainer = styled.nav`
  width: 100%;
  height: 80px;
  background: rgb(0, 0, 0);
  background: linear-gradient(
    160deg,
    rgba(0, 0, 0, 1) 3%,
    rgba(24, 145, 243, 1) 47%,
    rgba(0, 8, 14, 1) 98%
  );
  display: flex;
  flex-direction: row;
  position: sticky;
  left: 0;
  top: 0;
  z-index: 1000;
  border-bottom: 5px solid black;
`;

export const Logo = styled.img`
  margin: 5px 20px 10px 20px;
  max-width: 120px;
  height: auto;
  cursor: pointer;
`;
