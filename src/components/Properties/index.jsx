import React, { useState } from "react";
import Filter from "../Filter";
import { Container, Total, Wrapper } from "./style";
import { Card } from "../Card";
import { useQuery } from "react-query";
import { useLocation, useNavigate } from "react-router-dom";

const { REACT_APP_BASE_URL: url } = process.env;

export const Properties = () => {
  const naviget = useNavigate();
  const [data, setData] = useState([]);
  const { search } = useLocation();

  useQuery(
    ["get data", search],
    () => {
      return fetch(`${url}/v1/houses/list${search}`).then((res) => res.json());
    },
    {
      onSuccess: (res) => {
        setData(res?.dataList[0] || []);
      },
    }
  );

  const onSelect = (id) => {
    naviget(`/properties:${id}`);
  };

  return (
    <Container>
      <Filter />
      <div className="title">Properties</div>
      <div className="discription center">
        Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
      </div>
      <Total className="description">{data?.length}Total</Total>
      <Wrapper>
        {data?.map((value) => {
          return (
            <Card
              key={value.id}
              onClick={() => onSelect(value.id)}
              info={value}
            />
          );
        })}
      </Wrapper>
    </Container>
  );
};
export default Properties;
