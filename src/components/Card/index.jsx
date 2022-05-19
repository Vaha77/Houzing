import React from "react";
import { useNavigate } from "react-router-dom";
import noimg from "../../asset/imgs/noimg.png";
import nouser from "../../asset/imgs/nouser.jpeg";
import { Button } from "../Generic";
import {
  ButtonCont,
  Container,
  Footer,
  Icons,
  Img,
  Info,
  InfoWrapper,
  User,
} from "./style";

export const Card = ({ info, mr }) => {
  const naviget = useNavigate();
  return (
    <Container mr={mr}>
      <ButtonCont>
        <Button
          width="100px"
          height="23px"
          type="primary"
          onClick={() => naviget("featured")}
        >
          FEATURED
        </Button>
        <Button
          type="for"
          width="100px"
          height="23px"
          onClick={() => naviget("for/sale")}
        >
          FOR SALE
        </Button>
      </ButtonCont>
      <Img src={info?.img || noimg} />

      <InfoWrapper>
        <User>
          <User.Img src={info?.user?.img || nouser} />
        </User>
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
