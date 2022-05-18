import React from "react";
import Filter from "../Filter";
import Reacomendet from "../Recomendet";
import Carusel from "./Carusel";
import { Container } from "./style";

export const Home = () => {
  return (
    <Container>
      <Filter />
      <Carusel />
      <Reacomendet />
    </Container>
  );
};
export default Home;
