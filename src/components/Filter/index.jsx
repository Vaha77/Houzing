import React from "react";
import { Button, Input } from "../Generic";
import { Container, Icon, Wrapper } from "./style";

export const Filter = () => {
  return (
    <Container>
      <Wrapper>
        <Input
          placeholder={"Enter an address, neighborhood, city, or ZIP code"}
        >
          <Icon.Home />
        </Input>
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
