import React from "react";
import { Button, Input } from "../Generic";
import { Advanced, Container, Icon, Section, Wrapper } from "./style";
import { Popover } from "antd";
import { useLocation, useNavigate } from "react-router-dom";
import useSearch from "../../hooks/useSearch";
import useReplace from "../../hooks/useReplace";

export const Filter = () => {
  // const countryRef = useRef("");
  // const cityRef = useRef("");
  // const regionRref = useRef("");
  // const zipRef = useRef("");
  // const roomRef = useRef("");
  // const addressRef = useRef("");
  // const HouseRef = useRef("");
  // const minPricRef = useRef("");
  // const maxPricRef = useRef("");

  const navigate = useNavigate();
  const { pathname } = useLocation();
  const query = useSearch();

  const onChange = ({ target }) => {
    const { value, name } = target;
    // eslint-disable-next-line react-hooks/rules-of-hooks
    navigate(`${pathname}${useReplace(name, value)}`);
  };
  const onClear = () => {};

  const advancedSearch = (
    <Advanced>
      <Advanced.Title>Address</Advanced.Title>
      <Section>
        <Input
          onChange={onChange}
          name="country"
          defaultValue={query.get("country")}
          placeholder={"Country"}
        />
        <Input
          onChange={onChange}
          name="region"
          defaultValue={query.get("region")}
          placeholder={"Region"}
        />
        <Input
          onChange={onChange}
          name="city"
          defaultValue={query.get("city")}
          placeholder={"City"}
        />
        <Input
          onChange={onChange}
          name="zip_code"
          defaultValue={query.get("zip_code")}
          placeholder={"Zip code"}
        />
      </Section>
      <Advanced.Title>Apartment info</Advanced.Title>
      <Section>
        <Input
          onChange={onChange}
          name="room"
          defaultValue={query.get("room")}
          placeholder={"Rooms"}
        />
        <Input
          onChange={onChange}
          name="size"
          defaultValue={query.get("size")}
          placeholder={"Size"}
        />
        <Input
          onChange={onChange}
          name="sort"
          defaultValue={query.get("sort")}
          placeholder={"Sort"}
        />
      </Section>

      <Advanced.Title>Price</Advanced.Title>
      <Section>
        <Input
          onChange={onChange}
          name="min_price"
          defaultValue={query.get("min_price")}
          placeholder={"Min price"}
        />
        <Input
          onChange={onChange}
          name="max_price"
          defaultValue={query.get("max_price")}
          placeholder={"Max price"}
        />
      </Section>
      <Section>
        {" "}
        <Button onClick={onClear} width="131px" type="primary">
          Clear
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
          trigger="click"
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
