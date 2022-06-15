/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Input from "../Generic/Input";
import Button from "../Generic/Button";
import { Container, Section, Uplot, Wrapper } from "./style";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import Uploads from "./Upload";
import Check from "./Checkbox";

const AddNew = () => {
  const [center, setSenter] = useState({ lat: 41.311081, lng: 69.240562 });

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

  return (
    <Container>
      <Section>
        <div className="subtitle ">Contact information</div>
        <Wrapper>
          <Input placeholder={"Property title*"} />
          <Input placeholder={"Category"} />
        </Wrapper>
        <Wrapper>
          <Input placeholder={"Property Description* "} />
        </Wrapper>
      </Section>
      {/* 2 */}
      <Section>
        <div className="subtitle ">Additional</div>

        <Wrapper>
          <Input placeholder={"Baths"} />
          <Input placeholder={"Bed"} />
          <Input placeholder={"Garage"} />
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
        <Button width={"288px"} mt={32} type={"primary"}>
          Save
        </Button>
      </div>
    </Container>
  );
};

export default AddNew;
