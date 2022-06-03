import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Container } from "./style";
import { useQuery } from "react-query";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import Smilir from "./Similar";

const { REACT_APP_BASE_URL: url } = process.env;

const SelectotHouse = () => {
  const [state, setState] = useState({});
  const { id } = useParams();
  console.log(id);

  const containerStyle = {
    width: "880px",
    height: "416px",
  };

  const center = {
    lat: state?.location?.latitude,
    lng: state?.location?.longitude,
  };
  useQuery(
    "get data",
    () => {
      return fetch(`${url}/v1/houses/${id.replace(":", "")}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }).then((res) => res.json(0));
    },
    {
      onSuccess: (res) => {
        console.log(res, "vaxa");
        setState(res?.data);
      },
      keepPreviousData: true,
      refetchOnWindowFocus: false,
    }
  );

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyAkkKvMyf8Tk3Q8s7MWXin6njbtjIjq2S4",
  });

  return (
    <Container>
      {state?.attachments?.map((value, i) => {
        return (
          <div key={i}>
            <img src={value?.imgPath} alt="cs" />
          </div>
        );
      })}{" "}
      <h1> {state?.description}</h1>
      <div>
        {isLoaded && (
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={9}
          >
            {state?.location?.latitude && state?.location?.longitude && (
              <Marker position={center} />
            )}
          </GoogleMap>
        )}
      </div>
      <Smilir />
    </Container>
  );
};

export default SelectotHouse;
