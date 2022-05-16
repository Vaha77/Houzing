import React from "react";
import { Button, Input } from "../Generic";
import { Advanced, Container, Icon, Section, Wrapper } from "./style";
import { Popover } from "antd";
export const Filter = () => {
  const advancedSearch = (
    <Advanced>
      <Advanced.Title>Address</Advanced.Title>
      <Section>
        <Input mr={20} placeholder={"Country"} />
        <Input mr={20} placeholder={"Region"} />
        <Input mr={20} placeholder={"City"} />
        <Input mr={20} placeholder={"Zip code"} />
      </Section>
      <Advanced.Title>Apartment info</Advanced.Title>
      <Section>
        <Input mr={20} placeholder={"Rooms"} />
        <Input mr={20} placeholder={"Size"} />
        <Input mr={20} placeholder={"Sort"} />
      </Section>

      <Advanced.Title>Price</Advanced.Title>
      <Section>
        <Input mr={20} placeholder={"Min price"} />
        <Input mr={20} placeholder={"Max price"} />
      </Section>
      <Section>
        {" "}
        <Button width="131px" ml={20} type="secondary">
          Cancel
        </Button>
        <Button width="131px" ml={20} type="primary">
          Submit
        </Button>
      </Section>
    </Advanced>
  );
  return (
    <Container>
      <Wrapper>
        <Input
          pl="42px"
          placeholder={"Enter an address, neighborhood, city, or ZIP code"}
        >
          <Icon.Home />
        </Input>
        <Popover
          placement="bottomRight"
          content={advancedSearch}
          trigger={"click"}
        >
          <Button width="131px" ml={20} type="secondary">
            <Icon.Advanced />
            Advanced
          </Button>
        </Popover>
        <Button width="131px" ml={20} type="primary">
          <Icon.Search />
          Search
        </Button>
      </Wrapper>
    </Container>
  );
};
export default Filter;
