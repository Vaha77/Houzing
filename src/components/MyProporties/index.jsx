import React from "react";
import { useQuery, useMutation } from "react-query";
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
import { message, Popconfirm } from "antd";
const MyProporties = () => {
  const { request } = useHttp();
  const navigate = useNavigate();

  const { data, refetch } = useQuery("getMyProprties", (res) => {
    return request({ url: "/v1/houses/me", token: true });
  });

  const { mutate } = useMutation((id) => {
    return request({ url: `/v1/houses/${id}`, method: "DELETE", token: true });
  });

  const confirm = (id) => {
    mutate(id, {
      onSuccess: (res) => {
        if (res?.success) message.success("Deleted");
        refetch();
      },
    });
  };

  const cancel = (e) => {
    message.error("Click on No");
  };
  const onSelect = (id) => {
    navigate(`/properties:${id}`);
  };
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
          <Table className="table table-hove">
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
              {data?.data?.map((value) => {
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
                        <Cont2 onClick={() => onSelect(value.id)}>
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
                        <Icons.Edit
                          onClick={() =>
                            navigate(`/proporties/addnew/${value?.id}`)
                          }
                        />
                        <Popconfirm
                          title="Are you sure to delete this task?"
                          onConfirm={() => confirm(value?.id)}
                          onCancel={cancel}
                          // okText="Yes"
                          // cancelText="No"
                        >
                          {" "}
                          <Icons.Musr />
                        </Popconfirm>
                      </Icons>
                    </Td>
                  </Tr>
                );
              })}
            </tbody>
          </Table>
        </Card>
      </Wrapper>
    </Container>
  );
};

export default MyProporties;
