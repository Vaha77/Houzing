import React, { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { navbar } from "../../utils/navbar";
import Footer from "../Footer";
import { Button } from "../Generic";
import {
  Body,
  Container,
  Link,
  Links,
  Logo,
  Menu,
  MenuDrow,
  NavbarBody,
  NavbarWrapper,
  Span,
  User,
  Wrapper,
} from "./style";

export const Navbar = () => {
  const navigate = useNavigate();

  const [visible, setVisible] = useState(false);
  const [placement] = useState("left");

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };
  return (
    <Wrapper>
      <Container>
        <NavbarWrapper>
          <MenuDrow onClick={showDrawer} />
          <Menu
            title=""
            placement={placement}
            onClose={onClose}
            visible={visible}
            // extra={
            //     <Space>
            //         <Button onClick={onClose}>Cancel</Button>
            //     </Space>
            // }
          >
            {navbar.map((item) => (
              <Links to={item.path} key={item.id}>
                {item.title}
              </Links>
            ))}
          </Menu>

          <Logo onClick={() => navigate("/")}>
            <Logo.Icon />
            <Logo.Title>Houzing</Logo.Title>
          </Logo>
          <NavbarBody>
            {navbar.map(({ title, id, path, hidden }) => {
              return (
                !hidden && (
                  <Link key={id} to={path}>
                    {title}
                  </Link>
                )
              );
            })}
          </NavbarBody>
          <Span>
            <Button
              class="loginn"
              onClick={() => navigate("/signin")}
              width={"120px"}
            >
              Login
            </Button>
          </Span>
          <User />
        </NavbarWrapper>
      </Container>
      <Body>
        <Outlet />
      </Body>
      <Footer />
    </Wrapper>
  );
};

export default Navbar;
