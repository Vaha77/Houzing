import React, { useRef, useState } from "react";
import AliceCarousel from "react-alice-carousel";
import { useQuery } from "react-query";
import {
  Container,
  Cards,
  ArrowLeft,
  Wrapper,
  ArrowRight,
  CategoryWrapper,
  Img,
  Details,
} from "./style";
import uy from "../../../asset/imgs/ca.png";
import { useNavigate } from "react-router-dom";
import { useHttp } from "../../../hooks/useHttp";
const Category = ({ value }) => {
  const navigate = useNavigate();

  const goto = () => {
    navigate(`/properties?category_id=${value.id}`);
  };
  return (
    <CategoryWrapper onClick={goto}>
      <Img src={uy} alt="sa" />
      <Details>{value.name}</Details>
    </CategoryWrapper>
  );
};

const Categoric = () => {
  const [list, setList] = useState([]);

  const slider = useRef();

  const { request } = useHttp();

  useQuery("", () => request({ url: `/v1/categories/list` }), {
    onSuccess: (res) => {
      let respons = res?.data?.map((value) => (
        <Category key={value.id} value={value} />
      ));
      setList(respons || []);
    },
  });

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
export default Categoric;
