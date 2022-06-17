import React, { useState } from "react";
import { useQuery } from "react-query";
import { useHttp } from "../../hooks/useHttp";
import Button from "../Generic/Button";
import {
  Wrapper,
  Selection,
  Container,
  Card,
  Table,
  Tr,
  Th,
  Td,
  Icons,
} from "./style";
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

          <Table>
            <thead>
              <Tr>
                <Th>
                  <div className="subtitle">Listing Title</div>
                </Th>
                <Th>
                  <div className="subtitle"> Date Published</div>
                </Th>
                <Th>
                  <div className="subtitle">Status </div>
                </Th>
                <Th>
                  <div className="subtitle">View </div>
                </Th>
                <Th>
                  <div className="subtitle">Action </div>
                </Th>
              </Tr>
            </thead>

            <tbody>
              {" "}
              {data?.map((value) => {
                console.log(value, " valu");
                return (
                  <Tr key={value.id}>
                    <Td>{value?.address}</Td>
                    <Td>{new Date().getFullYear()}</Td>
                    <Td>{value?.staus ? "Sotilmagan" : "Sotildi"}</Td>
                    <Td>{value?.name}</Td>
                    <Td>
                      <Icons>
                        <Icons.Edit />
                        <Icons.Musr />
                      </Icons>
                    </Td>
                  </Tr>
                );
              })}
            </tbody>
          </Table>
          {/*  */}
          {/* {
            <Row>
              <Col>
                {data?.map((value, i) => {
                  return <h1 key={i}>{value?.description}</h1>;
                })}{" "}
              </Col>
            </Row>
          } */}
        </Card>
      </Wrapper>
    </Container>
  );
};

export default MyProporties;
