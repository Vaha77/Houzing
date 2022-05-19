import styled from "styled-components";
// import { ReactComponent as arrow } from "../../../asset/icons/arrow.svg";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 96px;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  position: relative;
  padding-top: 26px;
`;
const Carusel = styled.div`
  display: flex;
  width: 1440px;
  .alice-carousel__prev-btn,
  .alice-carousel__next-btn {
    display: none;
  }
`;

const Arrowleft = styled.div`
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

const ArrowRight = styled(Arrowleft)`
  left: 20px;
  transform: translate(50% -100%);
  padding-left: 0;
  padding-right: 10px;
`;

export { Container, Carusel, Wrapper, Arrowleft, ArrowRight };
