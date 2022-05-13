import React from "react";
import { Outlet } from "react-router-dom";
import {
  Body,
  Container,
  Link,
  NavbarBody,
  NavbarWrapper,
  Wrapper,
} from "./style";
import { navbar } from "../../utils/navbar";

export const Navbar = () => {
  return (
    <Wrapper>
      <Container>
        <NavbarWrapper>
          Logo
          <NavbarBody>
            {navbar.map(({ title, id, path }) => {
              return (
                <Link to={path} key={id}>
                  {title}
                </Link>
              );
            })}
          </NavbarBody>
          Logo
        </NavbarWrapper>
      </Container>

      <Body>
        Body
        <Outlet />
      </Body>
    </Wrapper>
  );
};
export default Navbar;
