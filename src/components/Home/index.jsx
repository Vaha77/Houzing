import React from "react";
import Filter from "../Filter";
import Reacomendet from "../Recomendet";
import Carusel from "./Carusel";
import Category from "./Category";
import { Container } from "./style";
import Vermont from "./Vert";
import Why from "./Why";

export const Home = () => {
  return (
    <Container>
      <Filter />
      <Carusel />
      <Reacomendet />
      <Why />
      <Category />
      <Vermont />
    </Container>
  );
};
export default Home;
