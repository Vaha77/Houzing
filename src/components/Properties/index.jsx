import React, { useState } from "react";
import Filter from "../Filter";
import { Container, Total, Wrapper } from "./style";
import { Card } from "../Card";
import { useQuery } from "react-query";
const { REACT_APP_BASE_URL: url } = process.env;

export const Properties = () => {
  const [data, setData] = useState([]);
  useQuery(
    "get data",
    () => {
      return fetch(`${url}/v1/houses/list`).then((res) => res.json());
    },
    {
      onSuccess: (res) => {
        setData(res?.dataList[0]);
      },
    },
    []
  );

  console.log(data, "res");
  return (
    <Container>
      <Filter />
      <div className="title">Properties</div>
      <div className="discription center">
        Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
      </div>
      <Total className="description">{data.length}Total</Total>
      <Wrapper>
        {data.map((value, i) => {
          return <Card key={i} info={value} />;
        })}
      </Wrapper>
    </Container>
  );
};
export default Properties;
