import React from "react";
import { Button } from "../Generic";
import { Container, Wrapper } from "./style";

export const Filter = () => {
  return (
    <Container>
      <Wrapper>
        <Button width="131px" ml={20} type="secondary">
          Advanced
        </Button>
        <Button width="131px" ml={20} type="primary">
          Search
        </Button>
      </Wrapper>
    </Container>
  );
};
export default Filter;
