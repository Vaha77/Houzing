import React from "react";
import { Container, Img } from "./style";
import img1 from "../../../asset/imgs/img1.png";
import img2 from "../../../asset/imgs/img2.png";
export const Carusel = () => {
  return (
    <Container dots autoplay>
      <Img src={img1} />
      <Img src={img2} />
    </Container>
  );
};
export default Carusel;
