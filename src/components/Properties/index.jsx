import React from "react";
import Filter from "../Filter";
import { Container } from "./style";

export const Properties = () => {
  return (
    <Container>
      <Filter />
      <div className="title">Properties</div>
      <div className="discription center">
        Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
      </div>
    </Container>
  );
};
export default Properties;
