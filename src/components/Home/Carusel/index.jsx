import React from "react";
import { Container, Icon, Img } from "./style";
import img1 from "../../../asset/imgs/img1.png";
import img2 from "../../../asset/imgs/img2.png";
export const Carusel = () => {
  return (
    <>
      <Icon.Left />
      <Icon.Right />
      <Container dots autoplay>
        <Img src={img1} />
        <Img src={img2} /> <Img src={img1} />
        <Img src={img2} /> <Img src={img1} />
        <Img src={img2} />
      </Container>
    </>
  );
};
export default Carusel;
