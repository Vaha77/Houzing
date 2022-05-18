import React from "react";
import noimg from "../../asset/imgs/noimg.png";
import { Container, Footer, Icons, Img, Info, InfoWrapper } from "./style";

export const Card = ({ info }) => {
  return (
    <Container>
      <Img src={info?.img || noimg} />

      <InfoWrapper>
        <div className="subtitle">New Apartment Nice Wiew</div>
        <div className="description">Quincy St, Brooklyn, NY, USA</div>
        <Info>
          <Info.Detail>
            <Icons.Divan />
            <div className="description">{info?.bats || 0} Bats</div>
          </Info.Detail>
          <Info.Detail>
            <Icons.Vanna />
            <div className="description">{info?.bats || 0} Baths</div>
          </Info.Detail>
          <Info.Detail>
            <Icons.Car />
            <div className="description">{info?.bats || 0} Garage</div>
          </Info.Detail>
          <Info.Detail>
            <Icons.Ruller />
            <div className="description">{info?.bats || 0} Sq Ft</div>
          </Info.Detail>
        </Info>
      </InfoWrapper>
      <Footer>
        <Info.Detail>
          <div className="delitet description">18,00$</div>
          <div className="subtitle">15,00$</div>
        </Info.Detail>
        <Info.Detail className="endToRight">
          <div>
            <Icons.Strleka />
            <Icons.Serdsa />
          </div>
        </Info.Detail>
      </Footer>
    </Container>
  );
};
export default Card;
