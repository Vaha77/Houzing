import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Container } from "./style";
import { useQuery } from "react-query";
const { REACT_APP_BASE_URL: url } = process.env;

const SelectotHouse = () => {
  const [state, setState] = useState({});
  const { id } = useParams();
  console.log(id);
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
        console.log(res, "vaxa");
        setState(res?.data);
      },
      keepPreviousData: true,
      refetchOnWindowFocus: false,
    }
  );
  return <Container>{state?.description}</Container>;
};

export default SelectotHouse;
