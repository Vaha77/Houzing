import React, { useState } from "react";
import { useQuery } from "react-query";
import { Outlet, useNavigate } from "react-router-dom";
import { useHttp } from "../../hooks/useHttp";
import { navbar } from "../../utils/navbar";
import Footer from "../Footer";
import { Button } from "../Generic";
import {
  Body,
  Container,
  ContMe,
  Link,
  Links,
  Logo,
  Menu,
  MenuDrow,
  NavbarBody,
  NavbarWrapper,
  Profil,
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
  const { request } = useHttp();
  const [data, setData] = useState();
  useQuery(
    "get",
    (res) => {
      return request({ url: "/v1/houses/me", token: true });
    },
    {
      onSuccess: (res) => {
        setData(res?.data?.data || []);
      },
    }
  );

  console.log(data, "navbar");
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

          {localStorage.getItem("token") ? (
            <>
              <ContMe>
                <Profil onClick={() => navigate("/myproporties")} />
              </ContMe>
              <Span>
                <Button
                  onClick={() => {
                    localStorage.clear();
                    navigate("/home");
                  }}
                  width={"120px"}
                >
                  Log Out
                </Button>
              </Span>
            </>
          ) : (
            <Span>
              <Button
                class="loginn"
                onClick={() => navigate("/signin")}
                width={"120px"}
              >
                Login
              </Button>
            </Span>
          )}

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
