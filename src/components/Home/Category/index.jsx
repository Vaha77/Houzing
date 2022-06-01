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
const { REACT_APP_BASE_URL: url } = process.env;

const Category = ({ value }) => {
  const navigate = useNavigate();

  const goto = () => {
    navigate(`/properties?category_id=${value?.id}`);
  };
  return (
    <CategoryWrapper onClick={goto}>
      <Img src={uy} alt="sa" />
      <Details>{value?.name}</Details>
    </CategoryWrapper>
  );
};

const Categoric = () => {
  const [list, setList] = useState([]);

  const slider = useRef();

  useQuery(
    "",
    () => {
      return fetch(`${url}/v1/categories/list`).then((res) => res.json());
    },
    {
      onSuccess: (res) => {
        console.log(res, "res");
        let respons = res?.data?.map((value) => (
          <Category value={value} key={value.id} />
        ));
        setList(respons || []);
      },
    }
  );
  console.log(localStorage.getItem("token"));

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
