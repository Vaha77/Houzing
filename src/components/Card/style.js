import styled from "styled-components";
import { ReactComponent as divan } from "../../asset/icons/divan.svg";
import { ReactComponent as car } from "../../asset/icons/car.svg";
import { ReactComponent as ruller } from "../../asset/icons/ruller.svg";
import { ReactComponent as serdsa } from "../../asset/icons/serdsa.svg";
import { ReactComponent as strelka } from "../../asset/icons/strelka.svg";
import { ReactComponent as vanna } from "../../asset/icons/vanna.svg";
const Container = styled.div`
  position: relative;
  display: flex;
  flex-grow: 10;
  flex-direction: column;
  background: #ffffff;
  border: 1px solid #e6e9ec;
  border-radius: 3px;
  max-width: 380px;
  min-width: 280px;
  /* height: 430px; */
  margin-right: ${({ mr }) => mr && `${mr}px`};
`;

const Img = styled.img`
  min-height: 220px;
  max-height: 220px;
  width: 100%;
`;
const InfoWrapper = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  padding: 25px;
  padding-bottom: 0;
  border-top: 1px solid #ebe9ec;
`;

const Info = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 16px 0;
`;
Info.Detail = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Icons = styled.div``;

Icons.Divan = styled(divan)``;
Icons.Car = styled(car)``;
Icons.Ruller = styled(ruller)``;
Icons.Serdsa = styled(serdsa)`
  margin: 20px;
  width: 35px;
  height: 35px;
  padding: 10px;
  background: #f6f8f9;
  border-radius: 50%;
  cursor: pointer;
  :active {
    transform: scale(0.97);
  }
`;
Icons.Strleka = styled(strelka)`
  margin: 20px;
  width: 35px;
  height: 35px;
  padding: 10px;
  :active {
    transform: scale(0.97);
  }
  cursor: pointer;
`;
Icons.Vanna = styled(vanna)``;
const Footer = styled.div`
  display: flex;
  border-top: 1px solid #e6e9ec;
  align-items: center;
  height: 100%;
  padding: 0 20px;
`;
const User = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  width: 46px;
  height: 46px;
  right: 20px;
  top: -23px;
  border-radius: 50%;
  background: #ffffff;
  box-shadow: 0px 0px 10px rgba(13, 38, 59, 0.2);
  overflow: hidden;
`;
User.Img = styled.img`
  width: 43px;
  height: 43px;
  object-fit: cover;
`;
const ButtonCont = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  position: absolute;
  width: 100%;
`;

export { Container, Img, InfoWrapper, Info, Icons, Footer, User, ButtonCont };
