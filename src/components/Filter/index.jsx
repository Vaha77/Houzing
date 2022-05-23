import React from "react";
import { Button, Input } from "../Generic";
import { Advanced, Container, Icon, Section, Wrapper } from "./style";
import { Popover } from "antd";
import { useNavigate, useLocation } from "react-router-dom";
import useSearch from "../../hooks/useSearch";

export const Filter = () => {
  const navigate = useNavigate();
  const qury = useSearch();
  const { pathname } = useLocation();
  const onChange = ({ target }) => {
    const { value, name } = target;

    navigate(`${pathname}?${name}=${value}`);
  };
  const advancedSearch = (
    <Advanced>
      <Advanced.Title>Address</Advanced.Title>
      <Section>
        <Input placeholder={"Country"} />
        <Input placeholder={"Region"} />
        <Input
          onChange={onChange}
          name="ctiy"
          defautValue={qury.get("city")}
          placeholder={"City"}
        />
        <Input placeholder={"Zip code"} />
      </Section>
      <Advanced.Title>Apartment info</Advanced.Title>
      <Section>
        <Input placeholder={"Rooms"} />
        <Input placeholder={"Size"} />
        <Input placeholder={"Sort"} />
      </Section>

      <Advanced.Title>Price</Advanced.Title>
      <Section>
        <Input placeholder={"Min price"} />
        <Input placeholder={"Max price"} />
      </Section>
      <Section>
        {" "}
        <Button width="131px" type="secondary">
          Cancel
        </Button>
        <Button width="131px" type="primary">
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
