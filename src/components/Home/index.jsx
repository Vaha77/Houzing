import React from "react";
import Filter from "../Filter";
import Carusel from "./Carusel";
import { Container } from "./style";

export const Home = () => {
  return (
    <Container>
      <Filter />
      <Carusel />
    </Container>
  );
};
export default Home;
