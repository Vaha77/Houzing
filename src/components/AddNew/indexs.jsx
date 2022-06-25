import React, { useState } from "react";
import { Button, Input, GenericMap } from "../../components/Generic";
// import { Genmap } from "../Generic/GenericMap";
import { useMutation, useQuery } from "react-query";
import { Container, Section, Wrapper } from "./style";
import { Checkbox, message } from "antd";
import { useLocation, useNavigate, useParams } from "react-router-dom";
const { REACT_APP_BASE_URL: url } = process.env;
const AddNew = () => {
  const { id } = useParams();

  const [data, setData] = useState({
    address: "Tashkent",
    attachments: [
      {
        imgPath: "",
      },
    ],
    categoryId: 0,
    city: "",
    componentsDto: {
      additional: "string",
      airCondition: true,
      courtyard: true,
      furniture: true,
      gasStove: true,
      internet: true,
      tv: true,
    },
    country: "",
    description: "",
    favorite: true,
    homeAmenitiesDto: {
      additional: "string",
      busStop: false,
      garden: false,
      market: false,
      park: false,
      parking: false,
      school: false,
      stadium: false,
      subway: false,
      superMarket: false,
    },
    houseDetails: {
      area: "",
      bath: "",
      beds: "",
      garage: "",
      room: "",
      yearBuilt: "",
    },
    locations: {
      latitude: 0,
      longitude: 0,
    },
    name: "",
    price: "",
    region: "",
    salePrice: "",
    status: true,
    zipCode: "string",
  });

  const location = useLocation();
  const onChange = ({ target }) => {
    const { value, name } = target;
    setData({ ...data, [name]: value });
  };
  const onImg = ({ target }) => {
    setData({
      ...data,
      attachments: [{ ...data.attachments, [target.name]: target.value }],
    });
  };
  const onDtoChange = ({ target }) => {
    setData({
      ...data,
      homeAmenitiesDto: {
        ...data.homeAmenitiesDto,
        [target.name]: target.checked,
      },
    });
  };
  const onDetailsChange = ({ target }) => {
    setData({
      ...data,
      houseDetails: { ...data.houseDetails, [target.name]: target.value },
    });
  };
  useQuery(
    "get single item",
    () => {
      return (
        location.pathname === `/profile/add/${id}` &&
        fetch(`${url}/v1/houses/${id}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")} `,
          },
        }).then((res) => res.json())
      );
    },
    {
      onSuccess: (res) =>
        location.pathname === `/profile/add/${id}` && setData(res?.data),
    }
  );

  const { mutate: update } = useMutation((id) => {
    return fetch(`${url}/v1/houses/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(data),
    }).then((res) => res.json());
  });

  const { mutate } = useMutation((props) => {
    return fetch(`${url}/v1/houses`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(data),
    }).then((res) => res.json());
  });

  const navigate = useNavigate();

  const onSubmit = () => {
    if (location.pathname === `/profile/add/${id}`) {
      update(id, {
        onSuccess: (res) => {
          if (res?.success) {
            message.success("Succesfuly updated");
            navigate("/profile");
          } else {
            message.error("something is wrong");
          }
        },
      });
    } else {
      mutate("", {
        onSuccess: (res) => {
          if (res?.success) {
            message.success("Succesfuly added");
            navigate("/profile");
          } else {
            message.error("something is wrong");
          }
        },
      });
    }
  };
  return (
    <Container>
      <div className="title">Add new property</div>
      <Wrapper>
        <div className="subtitle">Contact information</div>
        <Section>
          <Input
            value={data?.name}
            name={"name"}
            onChange={onChange}
            mt={40}
            placeholder={"Property title*"}
          />
          <Input
            value={data?.country}
            name={"country"}
            onChange={onChange}
            mt={40}
            placeholder={"Country"}
          />
        </Section>
        <Input
          value={data?.description}
          name={"description"}
          onChange={onChange}
          mt={40}
          placeholder={"Property Description*"}
        />
      </Wrapper>
      <Wrapper>
        <div className="subtitle">Additional</div>
        <Section>
          <Input
            value={data?.houseDetails?.area}
            type={"number"}
            mt={40}
            onChange={onDetailsChange}
            placeholder={"Area"}
            name={"area"}
          />
          <Input
            value={data?.houseDetails?.room}
            type={"number"}
            mt={40}
            onChange={onDetailsChange}
            name={"room"}
            placeholder={"Rooms"}
          />
        </Section>
        <Section>
          <Input
            value={
              data?.houseDetails?.beds == null ? "" : data?.houseDetails?.beds
            }
            type={"number"}
            mt={40}
            onChange={onDetailsChange}
            name={"beds"}
            placeholder={"Beds"}
          />
          <Input
            value={data?.houseDetails?.bath}
            type={"number"}
            mt={40}
            onChange={onDetailsChange}
            name={"bath"}
            placeholder={"Baths"}
          />
        </Section>
        <Section>
          <Input
            value={data.houseDetails?.garage}
            type={"number"}
            mt={40}
            onChange={onDetailsChange}
            name={"garage"}
            placeholder={"Garages"}
          />
          <Input
            value={
              data.houseDetails?.yearBuilt !== null
                ? data.houseDetails?.yearBuilt
                : ""
            }
            type={"number"}
            mt={40}
            onChange={onDetailsChange}
            name={"yearBuilt"}
            placeholder={"Year bulid"}
          />
        </Section>
      </Wrapper>
      <Wrapper>
        <div className="subtitle">Price</div>
        <Section>
          <Input
            value={data.salePrice}
            type={"number"}
            onChange={onChange}
            name={"salePrice"}
            placeholder={"Price"}
          />
          <Input
            value={data?.price}
            type={"number"}
            onChange={onChange}
            name={"price"}
            placeholder={"Sale price"}
          />
        </Section>
      </Wrapper>
      <Wrapper>
        <div className="subtitle">Photos</div>
        <Section>
          <Input
            name={"imgPath"}
            value={data?.attachments[0]?.imgPath}
            placeholder={"link"}
            onChange={onImg}
          />
        </Section>
      </Wrapper>
      <Wrapper>
        <div className="subtitle">Amenities</div>
        <Section className="center">
          <Checkbox
            onClick={onDtoChange}
            checked={data?.homeAmenitiesDto?.school}
            name={"school"}
            className="width"
          >
            <div className="description">School</div>
          </Checkbox>
          <Checkbox
            className="width"
            onClick={onDtoChange}
            checked={data?.homeAmenitiesDto?.park}
            name={"park"}
          >
            <div className="description">Park</div>
          </Checkbox>

          <Checkbox
            className="width"
            onClick={onDtoChange}
            name={"superMarket"}
            checked={data?.homeAmenitiesDto?.superMarket}
          >
            <div className="description">Super market</div>
          </Checkbox>
        </Section>
        <Section className="center">
          <Checkbox
            onClick={onDtoChange}
            name={"market"}
            className="width"
            checked={data?.homeAmenitiesDto?.market}
          >
            <div className="description">Market</div>
          </Checkbox>
          <Checkbox
            onClick={onDtoChange}
            name={"stadium"}
            className="width"
            checked={data?.homeAmenitiesDto?.stadium}
          >
            <div className="description">Stadium</div>
          </Checkbox>

          <Checkbox
            onClick={onDtoChange}
            name={"garden"}
            className="width"
            checked={data?.homeAmenitiesDto?.garden}
          >
            <div className="description">Garden</div>
          </Checkbox>
        </Section>
        <Section className="center">
          <Checkbox
            onClick={onDtoChange}
            name={"busStop"}
            className="width"
            checked={data?.homeAmenitiesDto?.busStop}
          >
            <div className="description">Bus stop</div>
          </Checkbox>
          <Checkbox
            className="width"
            onClick={onDtoChange}
            name={"parking"}
            checked={data?.homeAmenitiesDto?.parking}
          >
            <div className="description">Parking</div>
          </Checkbox>
          <Checkbox
            onClick={onDtoChange}
            name={"subway"}
            className="width"
            checked={data?.homeAmenitiesDto?.subway}
          >
            <div className="description">Subway</div>
          </Checkbox>
        </Section>
      </Wrapper>

      <Wrapper>
        <GenericMap data={data} setData={setData} />
      </Wrapper>
      <Button onClick={() => onSubmit()} type={"secondary"}>
        Submit
      </Button>
    </Container>
  );
};

export default AddNew;
