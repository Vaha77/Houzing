import React, { useRef, useState } from "react";
import AliceCarousel from "react-alice-carousel";
import { useQuery } from "react-query";
import { Container, Cards, ArrowLeft, Wrapper, ArrowRight } from "./style";
const { REACT_APP_BASE_URL: url } = process.env;

const Title = ({ title }) => {
  return <h1>{title}</h1>;
};

const Category = () => {
  const [list, setList] = useState([]);

  const slider = useRef();

  useQuery(
    "",
    () => {
      return fetch(`${url}/v1/categories`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }).then((res) => res.json());
    },
    {
      onSuccess: (res) => {
        console.log(res, "res");
        let response = res?.List?.[0]?.map((value) => (
          <div style={{ height: "200px", width: "200px" }}>
            <Title title={value} />
          </div>
        ));
        setList(response || []);
      },
    }
  );

  return (
    <Container>
      <div className="title center">Category</div>
      <div className="description center">
        Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
      </div>
      <Wrapper>
        <Cards>
          <AliceCarousel
            arrows={false}
            ref={slider}
            autoWidth
            mouseTracking
            items={list}
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
export default Category;
