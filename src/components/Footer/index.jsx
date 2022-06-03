import React from "react";
import {
  Container,
  ContLogo,
  FootCont,
  FootConts,
  Footers,
  FootTitle,
  Icon,
  SubTitle,
  Title,
  Top,
  Wrapper,
} from "./styled";

export const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <FootCont>
          <Title>Contact Us </Title>
          <SubTitle>
            <Icon.Loc />
            329 Queensberry Street, North Melbourne VIC 3051, Australia.
          </SubTitle>
          <SubTitle>
            <Icon.Tel />
            123 456 7890
          </SubTitle>
          <SubTitle>
            <Icon.Email />
            support@houzing.com
          </SubTitle>

          <Icon>
            <Icon.Link />

            <Icon.Facebook />
            <Icon.Ins />
            <Icon.Twit />
          </Icon>
        </FootCont>
        <FootCont>
          <Title>Discover</Title>
          <SubTitle>Chicago</SubTitle>
          <SubTitle>Los Angeles</SubTitle>
          <SubTitle>Miami</SubTitle>
          <SubTitle>New York</SubTitle>
        </FootCont>
        <FootCont>
          <Title>Lists by Category</Title>
          <SubTitle>Apartments</SubTitle>
          <SubTitle>Condos</SubTitle>
          <SubTitle>Houses</SubTitle>
          <SubTitle>Offices</SubTitle>
          <SubTitle>Retail</SubTitle>
          <SubTitle>Villas</SubTitle>
        </FootCont>
        <FootCont>
          <Title>Lists by Category</Title>
          <SubTitle>About Us</SubTitle>
          <SubTitle>Terms & Conditions</SubTitle>
          <SubTitle>Support Center</SubTitle>
          <SubTitle>Contact Us</SubTitle>
        </FootCont>
      </Wrapper>
      <Footers>
        <FootConts>
          <ContLogo>
            <Icon.Logo />
            <FootTitle>Houzing</FootTitle>
            <div className="">
              Copyright © 2021 CreativeLayers. All Right Reserved.
            </div>
          </ContLogo>{" "}
          <Top>
            <Top.Text>^</Top.Text>
          </Top>
        </FootConts>
      </Footers>
    </Container>
  );
};
export default Footer;
