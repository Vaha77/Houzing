/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Input from "../Generic/Input";
import Button from "../Generic/Button";
import { Container, Section, Wrapper } from "./style";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import Uploads from "./Upload";
import Check from "./Checkbox";
import { useHttp } from "../../hooks/useHttp";
import { useMutation, useQuery } from "react-query";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { Checkbox, message } from "antd";
import Map from "../SelectedHose/Map";
const { REACT_APP_BASE_URL: url } = process.env;
const AddNew = () => {
  const { id } = useParams();
  const { request } = useHttp();
  const navigate = useNavigate();
  const [center, setSenter] = useState({ lat: 41.311081, lng: 69.240562 });
  const [data, setData] = useState({
    address: "string",
    attachments: [
      {
        imgPath: "",
      },
    ],
    categoryId: 0,
    city: "string",
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
    description: " ",
    favorite: true,
    homeAmenitiesDto: {
      additional: "string",
      busStop: true,
      garden: true,
      market: true,
      park: true,
      parking: true,
      school: true,
      stadium: true,
      subway: true,
      superMarket: true,
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
      latitude: center?.lat,
      longitude: center?.lng,
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

  const createPostCheck = ({ target }) => {
    setData({
      ...data,
      homeAmenitiesDto: {
        ...data.homeAmenitiesDto,
        [target.name]: target.checked,
      },
    });
  };
  const createPost = ({ target }) => {
    setData({
      ...data,
      houseDetails: { ...data.houseDetails, [target.name]: target.value },
    });
  };
  useQuery(
    "get single item",
    () => {
      return (
        location.pathname === `/proporties/addnew/${id}` &&
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
        location.pathname === `/proporties/addnew/${id}` && setData(res?.data),
    }
  );

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

  const onSubmit = () => {
    if (location.pathname === `/proporties/addnew/${id}`) {
      update(id, {
        onSuccess: (res) => {
          if (res?.success) {
            message.success("AMlumot O'zgardi");
            navigate("/myproporties");
          } else {
            message.error("malumotda hatolik");
          }
        },
      });
    } else {
      mutate("", {
        onSuccess: (res) => {
          if (res?.success) {
            message.success("Malumot Qo'shildi");
            navigate("/myproporties");
          } else {
            message.error("malumot qoshilmadi");
          }
        },
      });
    }
  };

  return (
    <Container>
      <Section>
        <div className="subtitle ">Contact information</div>
        <Wrapper>
          <Input
            value={data?.name}
            name={"name"}
            onChange={onChange}
            placeholder={"Property title*"}
          />
          <Input
            value={data?.country}
            name={"country"}
            onChange={onChange}
            placeholder={"Country"}
          />
        </Wrapper>
        <Wrapper>
          <Input
            value={data?.description}
            name={"description"}
            onChange={onChange}
            placeholder={"Property Description*"}
          />
          <Checkbox
            onClick={createPostCheck}
            name={"busStop"}
            checked={data?.homeAmenitiesDto?.busStop}
          />
        </Wrapper>
      </Section>
      {/* 2 */}
      <Section>
        <div className="subtitle ">Additional</div>

        <Wrapper>
          <Input value={data?.houseDetails?.bath} placeholder={"Bath"} />
          <Input value={data?.houseDetails?.beds} placeholder={"Bed"} />
          <Input value={data?.houseDetails?.garage} placeholder={"Garage"} />
        </Wrapper>
        <Wrapper>
          <Input placeholder={"Year Build"} />
          <Input
            value={data?.houseDetails?.area}
            // type={"number"}
            onChange={createPost}
            name={"area"}
            placeholder={"Home area"}
          />
          <Input placeholder={"Room"} />
        </Wrapper>
      </Section>

      {/* 3 */}
      <Section>
        <div className="subtitle ">Price</div>

        <Wrapper>
          <Input placeholder={"Price"} />
          <Input placeholder={"Sale Price"} />
        </Wrapper>
      </Section>
      {/* 4 */}
      <Section>
        <div className="subtitle ">Location</div>

        <Wrapper>
          <Input placeholder={"Region"} />
          <Input placeholder={"Address"} />
        </Wrapper>
        <Wrapper>
          <Map />
        </Wrapper>
        <Wrapper>
          <Input placeholder={"Latidude"} />
          <Input placeholder={"Logtitude"} />
        </Wrapper>
      </Section>

      {/* 5 */}
      <Section>
        <div className="subtitle">Media</div>{" "}
        <div className="discription">Featured image</div>
        <Wrapper>
          <Uploads />
        </Wrapper>
        <Wrapper>
          <Button width={"120px"} type={"upload"}>
            Upload
          </Button>
        </Wrapper>
        <Wrapper>
          <Button width={"120px"} type={"upload"}>
            Upload
          </Button>
        </Wrapper>
        <Wrapper>
          <Input placeholder={"Video link"} />
        </Wrapper>
        <Wrapper>
          <Input placeholder={"Virtual tour"} />
        </Wrapper>
      </Section>

      {/* 6 */}
      <Section>
        <div className="subtitle">Amenities</div>
        <Check />
      </Section>

      {/* 7 */}
      <Section>
        <div className="subtitle">Amenities</div>
        <Wrapper>
          <Input placeholder={"Energy class"} />
          <Input placeholder={"Energy Index in kWh/m2a"} />
        </Wrapper>
      </Section>
      <div className="endToRight">
        <Button
          onClick={() => onSubmit()}
          width={"288px"}
          mt={32}
          type={"primary"}
        >
          Save
        </Button>
      </div>
    </Container>
  );
};

export default AddNew;
