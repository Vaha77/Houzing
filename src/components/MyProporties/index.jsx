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
  Img,
  Cont1,
  Cont2,
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
                    <Td>
                      <Cont1>
                        <div style={{ position: "absolute" }}>
                          <Button
                            width="81px"
                            height="20px"
                            type="primary"
                            mt={5}
                            ml={"5px"}
                            // onClick={() => naviget("featured")}
                          >
                            FEATURED
                          </Button>
                        </div>
                        <div style={{ marginRight: "16px" }}>
                          <Img src={value?.attachments[0]?.imgPath} />{" "}
                        </div>
                        <Cont2>
                          <div>
                            <div className="subtitle">{value?.description}</div>
                            <div className="discription">{value?.country}</div>
                            <div className="delitet description">
                              $ {value?.salePrice || 0}/mo
                            </div>
                            <div className="subtitle">
                              ${value?.price || 0}/mo
                            </div>
                          </div>
                          <Button type="for" width="81px" height="20px">
                            FOR SALE
                          </Button>
                        </Cont2>
                      </Cont1>
                    </Td>
                    <Td>{new Date().getFullYear()}</Td>
                    <Td> {value?.staus ? "Sotilmagan" : "Sotildi"}</Td>
                    <Td>5933</Td>
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
