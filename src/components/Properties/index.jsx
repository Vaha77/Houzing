import React, { useState } from "react";
import Filter from "../Filter";
import { Container, Show, Total, Wrapper } from "./style";
import { Card } from "../Card";
import { useQuery } from "react-query";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "../Generic";
import { useHttp } from "../../hooks/useHttp";
const { REACT_APP_BASE_URL: url } = process.env;

export const Properties = () => {
  const naviget = useNavigate();
  const [data, setData] = useState([]);
  const { search } = useLocation();
  const { request } = useHttp();
  useQuery(
    ["get data", search],
    () => {
      // return fetch(`${url}/v1/houses/list${search}`).then((res) => res.json());
      return request({
        url: `/v1/houses/list${search}`,
      });
    },
    {
      onSuccess: (res) => {
        setData(res?.data || []);
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
      <Show>
        <Button width="250px" height="44px" type="primary">
          Show more
        </Button>
      </Show>
    </Container>
  );
};
export default Properties;
