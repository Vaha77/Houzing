import React, { useState } from "react";
import { useQuery } from "react-query";
import { useHttp } from "../../hooks/useHttp";
import Button from "../Generic/Button";
import { Wrapper, Selection, Container, Card } from "./style";
import { useNavigate } from "react-router-dom";
const MyProporties = () => {
  const { request } = useHttp();
  const navigate = useNavigate();

  const [data, setData] = useState();
  useQuery(
    "getMyProprties",
    (res) => {
      return request({ url: "/v1/houses/me", token: true });
    },
    {
      onSuccess: (res) => {
        console.log(res);
        setData(res?.data || []);
      },
    }
  );
  console.log(data, "data");
  return (
    <Wrapper>
      <Selection>
        <div className="title">My Proporties</div>
        <Button
          onClick={() => navigate("/proporties/addnew")}
          width={"131px"}
          type={"primary"}
        >
          Add New
        </Button>
      </Selection>

      <Card>
        <Container>
          {data?.map((value, i) => {
            return <h1 key={i}>{value?.address}</h1>;
          })}{" "}
        </Container>
      </Card>
    </Wrapper>
  );
};

export default MyProporties;
