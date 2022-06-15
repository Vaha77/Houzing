import React, { useState } from "react";
import { useQuery } from "react-query";
import { useHttp } from "../../hooks/useHttp";
import Button from "../Generic/Button";
import { Wrapper, Selection, Container, Card } from "./style";
import { useNavigate } from "react-router-dom";
import { Col, Row } from "antd";

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
    <Container>
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
          {/* <div className="subtitle">Listing Title</div>
          <div>
            {data?.map((value, i) => {
              return <h1 key={i}>{value?.address}</h1>;
            })}{" "}
          </div> */}

          <Row>
            <Col span={5}>
              <div className="subtitle">Listing Title</div>
            </Col>
            <Col span={5}>
              <div className="subtitle"> Date Published</div>
            </Col>
            <Col span={4}>
              <div className="subtitle">Status </div>
            </Col>
            <Col span={4}>
              <div className="subtitle">View </div>
            </Col>
            <Col span={4}>
              <div className="subtitle">Action </div>
            </Col>
          </Row>
          {/*  */}
          {
            <Row>
              <Col>
                {data?.map((value, i) => {
                  return <h1 key={i}>{value?.description}</h1>;
                })}{" "}
              </Col>
            </Row>
          }
        </Card>
      </Wrapper>
    </Container>
  );
};

export default MyProporties;
