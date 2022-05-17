import { Carousel } from "antd";
import styled from "styled-components";
const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 96px;
`;
const Title = styled.div``;
const Desc = styled.div``;

//
Title.Main = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 36px;
  text-align: center;
  letter-spacing: -0.02em;
  color: #0d263b;
`;
Desc.Main = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #696969;
`;

const Carusel = styled(Carousel)``;
export { Container, Title, Desc, Carusel };
