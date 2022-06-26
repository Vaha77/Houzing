import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Wrapper } from "./style";
import { useQuery } from "react-query";
import Smilir from "./Similar";
import ImgModal from "./ImgModal/inde";
import Second from "./Second";

const { REACT_APP_BASE_URL: url } = process.env;

const SelectotHouse = () => {
  const [state, setState] = useState({});
  const { id } = useParams();

  useQuery(
    "get data",
    () => {
      return fetch(`${url}/v1/houses/${id.replace(":", "")}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }).then((res) => res.json(0));
    },
    {
      onSuccess: (res) => {
        setState(res?.data);
      },
      keepPreviousData: true,
      refetchOnWindowFocus: false,
    }
  );

  return (
    <Container>
      <Wrapper>
        {state?.attachments?.map((value, i) => {
          return (
            <span key={i}>
              <ImgModal info={value?.imgPath} />
            </span>
          );
        })}
        <Second info={state} />
        <Smilir />
      </Wrapper>
    </Container>
  );
};

export default SelectotHouse;
