import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import {
  Container,
  Link,
  Logo,
  NavbarBody,
  NavbarWrapper,
  Wrapper,
} from "./style";
import { navbar } from "../../utils/navbar";
import Button from "../Generic/Button";
import { Footer } from "../Footer";

export const Navbar = () => {
  const naviget = useNavigate();
  return (
    <Wrapper>
      <Container>
        <NavbarWrapper>
          <Logo onClick={() => naviget("/home")}>
            <Logo.Icon />
            <Logo.Title>Houzing</Logo.Title>
          </Logo>
          <NavbarBody>
            {navbar.map(({ title, id, path }) => {
              return (
                <Link to={path} key={id}>
                  {title}
                </Link>
              );
            })}
          </NavbarBody>
          <Button width={"120px"} onClick={() => naviget("/login")}>
            Login
          </Button>
        </NavbarWrapper>
      </Container>

      <Outlet />
      <Footer />
    </Wrapper>
  );
};
export default Navbar;
