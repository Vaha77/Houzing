import React from "react";
import smile from "../../../asset/icons/SMILE.svg";
import domik from "../../../asset/icons/DOMIK.svg";
import calcul from "../../../asset/icons/CALCUL.svg";
import map from "../../../asset/icons/MAP.svg";
import { Card, Cards, Conatiner, Desc, Img, Title, Wrapper } from "./style";

const Why = () => {
  return (
    <Conatiner>
      <Wrapper>
        <div className="centr">
          <div className="title">Why Choose Us?</div>
          <div className="discription center">
            Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
          </div>
        </div>
      </Wrapper>
      <Cards>
        <Card>
          <Img src={smile} />
          <Title>Trusted By Thousands</Title>
          <Desc>
            With over 1 million+ homes for sale available on the website, Trulia
            can match you with a house you will want to call home.
          </Desc>
        </Card>
        {/*  */}
        <Card>
          <Img src={domik} />
          <Title>Wide Renge Of Properties</Title>
          <Desc>
            With over 1 million+ homes for sale available on the website, Trulia
            can match you with a house you will want to call home.
          </Desc>
        </Card>
        {/*  */}
        <Card>
          <Img src={calcul} />
          <Title>Financing Made Easy</Title>
          <Desc>
            With over 1 million+ homes for sale available on the website, Trulia
            can match you with a house you will want to call home.
          </Desc>
        </Card>
        {/*
         */}
        <Card>
          <Img src={map} />
          <Title>See Neighborhoods</Title>
          <Desc>
            With over 1 million+ homes for sale available on the website, Trulia
            can match you with a house you will want to call home.
          </Desc>
        </Card>
      </Cards>
    </Conatiner>
  );
};

export default Why;
