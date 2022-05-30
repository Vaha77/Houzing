import React from "react";
import { useParams } from "react-router-dom";
import { Container } from "./style";

const SelectotHouse = () => {
  const { id } = useParams();
  console.log(id, "param");
  return <Container>ProportiesPage</Container>;
};

export default SelectotHouse;
