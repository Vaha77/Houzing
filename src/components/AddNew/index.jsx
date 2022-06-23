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
import { useNavigate, useParams } from "react-router-dom";
import { message } from "antd";

const AddNew = () => {
  const { id } = useParams();
  const { request } = useHttp();
  const navigate = useNavigate();
  const [center, setSenter] = useState({ lat: 41.311081, lng: 69.240562 });
  const [data, setData] = useState({});

  useQuery(
    "getSingle Item ",
    () => {
      return id && request({ url: `/v1/houses/${id}`, token: true });
    },
    {
      onSuccess: (res) => {
        console.log(res, "edid");
        setData(res?.data);
      },
    }
  );
  const containerStyle = {
    width: "100%",
    height: "600px",
  };

  // const center = {
  //   lat: 41.311081,
  //   lng: 69.240562,
  // };

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyAkkKvMyf8Tk3Q8s7MWXin6njbtjIjq2S4",
  });

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(
    function callback(map) {
      const bounds = new window.google.maps.LatLngBounds(center);
      map.fitBounds(bounds);
      setMap(map);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  const onMapClick = (e) => {
    console.log(e?.latLng?.lat(), "lat");
    console.log(e?.latLng?.lng(), "lng");
    setSenter({
      lat: e?.latLng?.lat(),
      lng: e?.latLng?.lng(),
    });
  };

  const { mutate } = useMutation(() =>
    request({
      url: "/v1/houses",
      method: "POST",
      token: true,
      body: {
        address: "string",
        attachments: [
          {
            imgPath:
              "https://i.ytimg.com/vi/Kei4ihAmu9c/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLDPdSmvnPRFeLXpiveh3qNZNYXY1g",
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
        country: "대한민국2",
        description: "menig uyim ",
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
          area: 3,
          bath: 2,
          beds: 1,
          garage: 2,
          room: 20,
          yearBuilt: 100,
        },
        locations: {
          latitude: center?.lat,
          longitude: center?.lng,
        },
        name: "string",
        price: 12000,
        region: "서울 원서동",
        salePrice: 129900,
        status: true,
        zipCode: "string",
      },
    })
  );

  const { mutate: update } = useMutation((id) => {
    return (
      id &&
      request({
        url: `/v1/houses/${id}`,
        method: "PUT",
        token: true,
        body: data,
      })
    );
  });

  const onSubmit = () => {
    if (id) {
      update(id, {
        onSuccess: (res) => {
          if (res?.success) {
            message.info("updatett");
            navigate("/myproporties");
          }
        },
      });
    } else {
      mutate("", {
        onSuccess: (res) => {
          console.log(res, "cas");

          if (res?.success) {
            navigate("/myproporties");
          }
        },
      });
    }
  };

  const onChange = ({ target: { name, value } }) => {
    setData({
      ...data,
      [name]: value,
    });
  };
  return (
    <Container>
      <Section>
        <div className="subtitle ">Contact information</div>
        <Wrapper>
          <Input placeholder={"Property title*"} />
          <Input value={data?.category} placeholder={"Category"} />
        </Wrapper>
        <Wrapper>
          <Input
            name="description"
            onChange={onChange}
            value={data?.description}
            placeholder={"Property Description* "}
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
          <Input placeholder={"Home area"} />
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
          {isLoaded && (
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={center}
              zoom={12}
              onLoad={onLoad}
              onUnmount={onUnmount}
              onClick={onMapClick}
            >
              <Marker position={center} />
              <></>
            </GoogleMap>
          )}
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
        <Button onClick={onSubmit} width={"288px"} mt={32} type={"primary"}>
          Save
        </Button>
      </div>
    </Container>
  );
};

export default AddNew;
