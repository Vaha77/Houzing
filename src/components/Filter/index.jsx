import React, { useState } from "react";
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

  const query = useSearch();
  const [state, setState] = useState({
    country: query.get("country"),
    region: query.get("region"),
    city: query.get("city"),
    zip_code: query.get("zip_code"),
    room: query.get("room"),
    size: query.get("size"),
    sort: query.get("sort"),
    min_price: query.get("min_price"),
    max_price: query.get("max_price"),
  });
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const onChange = ({ target }) => {
    const { value, name } = target;
    // eslint-disable-next-line react-hooks/rules-of-hooks
    navigate(`${pathname}${useReplace(name, value)}`);
    setState({ ...state, [name]: value });
  };
  const onClear = () => {
    navigate(`/properties`);
    setState({});
  };

  const advancedSearch = (
    <Advanced>
      <Advanced.Title>Address</Advanced.Title>
      <Section>
        <Input
          onChange={onChange}
          name="country"
          value={state.country}
          placeholder={"Country"}
        />
        <Input
          onChange={onChange}
          name="region"
          value={state.region}
          placeholder={"Region"}
        />
        <Input
          onChange={onChange}
          name="city"
          value={state.city}
          placeholder={"City"}
        />
        <Input
          onChange={onChange}
          name="zip_code"
          value={state.zip_code}
          placeholder={"Zip code"}
        />
      </Section>
      <Advanced.Title>Apartment info</Advanced.Title>
      <Section>
        <Input
          onChange={onChange}
          name="room"
          value={state.room}
          placeholder={"Rooms"}
        />
        <Input
          onChange={onChange}
          name="size"
          value={state.size}
          placeholder={"Size"}
        />
        <Input
          onChange={onChange}
          name="sort"
          value={state.sort}
          placeholder={"Sort"}
        />
      </Section>

      <Advanced.Title>Price</Advanced.Title>
      <Section>
        <Input
          onChange={onChange}
          name="min_price"
          value={state.min_price}
          placeholder={"Min price"}
        />
        <Input
          onChange={onChange}
          name="max_price"
          defaultValue={state.max_price}
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
