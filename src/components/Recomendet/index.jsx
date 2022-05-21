import React, { useRef } from "react";
import AliceCarousel from "react-alice-carousel";
import Card from "../Card";
import { Container, Cards, ArrowLeft, Wrapper, ArrowRight } from "./style";

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
    <Container className="nocopy">
      <div className="title center">Recommended</div>
      <div className="description center">
        Siz orzu qilgan, siz izlagan shinam va arzon uylar.
      </div>
      <Wrapper>
        <Cards>
          <AliceCarousel
            arrows={false}
            ref={slider}
            autoWidth
            mouseTracking
            items={items}
          />
          <ArrowRight onClick={() => slider.current?.slidePrev()}>
            &lang;
          </ArrowRight>
          <ArrowLeft onClick={() => slider.current?.slideNext()}>
            &rang;
          </ArrowLeft>
        </Cards>
      </Wrapper>
    </Container>
  );
};
export default Reacomendet;
