import React, { useRef } from "react";
import { Container, Icon, Img } from "./style";
import img1 from "../../../asset/imgs/Baner.png";
import img2 from "../../../asset/imgs/Baner2.png";
export const Carusel = () => {
  const slider = useRef();

  return (
    <>
      <Icon.Left onClick={() => slider.current.prev()} />
      <Icon.Right onClick={() => slider.current.next()} />
      <Container dots autoplay ref={slider}>
        <Img src={img1} />
        <Img src={img2} /> <Img src={img1} />
        <Img src={img2} /> <Img src={img1} />
        <Img src={img2} />
      </Container>
    </>
  );
};
export default Carusel;
