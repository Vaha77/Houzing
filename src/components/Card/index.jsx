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

export const Card = ({ info, mr, onClick }) => {
  const naviget = useNavigate();
  return (
    <Container onClick={onClick} mr={mr}>
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
      <Img src={info?.attachments[0]?.imgPath || noimg} />

      <InfoWrapper>
        <User>
          <User.Img src={info?.attachments[0]?.imgPath || nouser} />
        </User>

        <div
          className="subtitle"
          style={{ whiteSpace: "nowrap", overflow: "hidden" }}
        >
          {info?.description || "description"}
        </div>
        <div
          className="description"
          style={{ whiteSpace: "nowrap", overflow: "hidden" }}
        >
          {info?.name || "house"}, {info?.address || "Address"},{" "}
          {info?.city || "City"} {info?.country || "Country"}
        </div>
        <div>
          {" "}
          lat:{info?.location?.latitude} lng:
          {info?.location?.longitude}
        </div>
        <Info>
          <Info.Detail>
            <Icons.Divan />
            <div className="description">
              {info?.houseDetails?.beds || 0} Beds
            </div>
          </Info.Detail>
          <Info.Detail>
            <Icons.Vanna />
            <div className="description">
              {info?.houseDetails?.bath || 0} Baths
            </div>
          </Info.Detail>
          <Info.Detail>
            <Icons.Car />
            <div className="description">
              {info?.houseDetails?.garage || 0} Garage
            </div>
          </Info.Detail>
          <Info.Detail>
            <Icons.Ruller />
            <div className="description">
              {info?.houseDetails?.area || 0} Sq Ft
            </div>
          </Info.Detail>
        </Info>
      </InfoWrapper>
      <Footer>
        <Info.Detail>
          <div className="delitet description">{info?.salePrice || 0}$</div>
          <div className="subtitle">{info?.price || 0}$</div>
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
