import React, { useRef } from "react";
import AliceCarousel from "react-alice-carousel";
import Card from "../Card";
import { Arrowleft, ArrowRight, Carusel, Container, Wrapper } from "./style";

export const Reacomendet = () => {
  const items = [
    <Card mr={20} />,
    <Card mr={20} />,
    <Card mr={20} />,
    <Card mr={20} />,
    <Card mr={20} />,
  ];
  const slider = useRef();
  return (
    <Container>
      <div className="title center">Recommended</div>
      <div className="description center">
        Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
      </div>
      <Wrapper>
        <Carusel>
          <AliceCarousel ref={slider} autoWidth items={items} />

          <ArrowRight onClick={() => slider.current?.slidePrev()}>
            {" "}
            &lang;{" "}
          </ArrowRight>
          <Arrowleft onClick={() => slider.current?.slideNext()}>
            {" "}
            &rang;{" "}
          </Arrowleft>
        </Carusel>
      </Wrapper>
    </Container>
  );
};
export default Reacomendet;
