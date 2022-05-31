import React from "react";
import Filter from "../Filter";
import Reacomendet from "../Recomendet";
import Carusel from "./Carusel";
import Category from "./Category";
import Recent from "./Recent";
import { Container } from "./style";
import Testim from "./Testimonials";
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
      <Recent />
      <Testim />
    </Container>
  );
};
export default Home;
