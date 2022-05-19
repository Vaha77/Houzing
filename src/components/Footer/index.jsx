import React from "react";
import {
  Container,
  FootCont,
  FootConts,
  Footers,
  Icon,
  SubTitle,
  Title,
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
        <FootConts>ss</FootConts>
      </Footers>
    </Container>
  );
};
export default Footer;
