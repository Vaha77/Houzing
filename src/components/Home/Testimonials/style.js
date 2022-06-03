import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 95px;
  background: var(--why);
`;

const Wrapper = styled("div")`
  display: flex;
  justify-content: center;
  position: relative;
  width: 100%;
`;
const Cards = styled("div")`
  display: flex;
  width: 1440px;
  .alice-carousel__prev-btn,
  .alice-carousel__next-btn {
    display: none;
  }
  margin-top: 32px;
  justify-content: space-between;
`;

const ArrowLeft = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  top: 50%;
  right: 20px;
  transform: translate(-50%, -100%);
  width: 45px;
  height: 45px;
  color: black;
  background: white;
  opacity: 0.5;
  padding-left: 10px;
  box-shadow: 0px 10px 50px rgba(13, 38, 59, 0.1);
  filter: drop-shadow(0px 20px 38px rgba(0, 0, 0, 0.06))
    drop-shadow(0px 7px 46px rgba(0, 0, 0, 0.06))
    drop-shadow(0px 8px 15px rgba(0, 0, 0, 0.06));
  border-radius: 50%;
  cursor: pointer;
  z-index: 999;
  :hover {
    opacity: 1;
  }
  :active {
    opacity: 0.7;
  }
`;

const ArrowRight = styled(ArrowLeft)`
  left: 50px;
  transform: translate(50%, -100%);
  padding-left: 0;
  padding-right: 10px;
`;
const CardCont = styled.div`
  display: flex;
`;
const Card = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 380px;
  height: 197px;
  background: #ffffff;
  box-shadow: 0px 10px 50px rgba(13, 38, 59, 0.1);
  border-radius: 3px;
  padding: 40px 48px 61px 48px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  color: #696969;
`;
const Img = styled.img`
  position: absolute;
  width: 38px;
  height: 38px;
  top: 140px;
  left: -60%;
`;

export {
  Container,
  Cards,
  ArrowLeft,
  Wrapper,
  ArrowRight,
  CardCont,
  Card,
  Img,
};
