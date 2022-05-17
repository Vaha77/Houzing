import React from "react";
import Filter from "../Filter";
import Carusel from "./Carusel";
import Second from "./second";
import { Container } from "./style";

export const Home = () => {
  return (
    <Container>
      <Filter />
      <Carusel />
      <Second />
    </Container>
  );
};
export default Home;
