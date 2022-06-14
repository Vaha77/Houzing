import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as logoIcon } from "../../asset/icons/Logo.svg";
import { MenuOutlined } from "@ant-design/icons";
import { ReactComponent as user } from "../../asset/icons/user.svg";
import { Drawer } from "antd";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Container = styled.div`
  padding: 0 130px;

  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--primaryColor);
  -webkit-touch-callout: none; // iOS Safari
  -webkit-user-select: none; // Safari
  -khtml-user-select: none; // Konqueror HTML
  -moz-user-select: none; // Old versions of Firefox
  -ms-user-select: none; // Internet Explorer/Edge
  user-select: none; /* Non-prefixed version, currently
                        supported by Chrome, Opera and Firefox */
`;

const NavbarWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 64px;
  max-width: 1440px;
  /* padding: 0 130px; */
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-style: 16px;
  line-height: 24px;
  width: 100%;
  color: #ffffff;
  @media (max-width: 768px) {
    justify-content: space-between;
    padding: 0 30px;
    height: 60px;
  }
  @media (max-width: 550px) {
    justify-content: space-between;
    padding: 0 16px;
    height: 60px;
  }
`;

const NavbarBody = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  color: white;
  .active {
    color: #00fff5;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

const Link = styled(NavLink)`
  color: white;
  text-decoration: none;
  margin: 0 32px;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
`;

const Body = styled.div`
  display: flex;
  width: 100%;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

Logo.Icon = styled(logoIcon)`
  @media (max-width: 768px) {
    width: 30px;
    height: 30px;
  }
`;
Logo.Title = styled("div")`
  margin-left: 11px;
  font-size: 20px;
  font-weight: 500;
`;

const Span = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
`;

const MenuDrow = styled(MenuOutlined)`
  width: 20px;
  height: 16px;
  display: none;
  @media (max-width: 768px) {
    display: block;
  }
`;

const User = styled(user)`
  display: none;
  @media (max-width: 768px) {
    display: block;
  }
`;
const Profil = styled(user)`
  width: 34px;
  height: 34px;
  margin-right: 20px;
  display: flex;
  @media (max-width: 768px) {
    display: none;
  }
`;

const Menu = styled(Drawer)`
  .ant-drawer-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: red;
    height: 60px;
    background-color: var(--primaryColor);
  }
  .anticon svg {
    /* display: none; */
    color: white;
  }
  .ant-drawer-header-title {
    /* display: none; */
    color: white;
  }
  .ant-drawer-body {
    /* display: none; */
  }
  .ant-drawer-content-wrapper,
  .ant-drawer-mask {
    @media (min-width: 769px) {
      display: none;
    }
  }
`;

const Space = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const Links = styled(NavLink)`
  display: block;
  font-size: 20px;
  padding: 3px 0;
  color: var(--secondaryColor);
  border-bottom: 1px solid var(--secondaryColor);
`;

const ContMe = styled.div`
  display: flex;
  @media (max-width: 769px) {
    display: none;
  }
`;
const Me = styled.div`
  display: flex;
  flex-direction: column;
  width: 120px;
  border: 1px solid white;
  justify-content: space-around;
  width: 120px;
  box-sizing: border-box;
`;
export {
  Wrapper,
  Links,
  Space,
  MenuDrow,
  Menu,
  User,
  Span,
  Container,
  Body,
  NavbarWrapper,
  NavbarBody,
  Link,
  Logo,
  Profil,
  ContMe,
  Me,
};
