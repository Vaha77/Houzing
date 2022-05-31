import React, { useRef } from "react";
import AliceCarousel from "react-alice-carousel";
import { Container, Cards, ArrowLeft, Wrapper, ArrowRight } from "./style";
import Test from "./Test";

export const Testim = () => {
  const items = [<Test />, <Test />, <Test />, <Test />, <Test />];
  const slider = useRef();
  return (
    <Container className="nocopy">
      <div className="title center">Testimonials</div>
      <div className="description center">
        Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.{" "}
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
export default Testim;
