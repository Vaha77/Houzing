/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Container, Inputs, Section, Wrapper } from "./style";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
// import Uploads from "./Upload";
// import Check from "./Checkbox";
import { useHttp } from "../../hooks/useHttp";
import { useMutation, useQuery } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import { message } from "antd";
import { Form, Input, InputNumber, Checkbox, SubmitButton } from "formik-antd";
import { Formik } from "formik";

const AddNew = () => {
  const [data, setData] = useState({});
  const { request } = useHttp();
  const { id } = useParams();

  useQuery(
    "get single Item",
    () => {
      return id && request({ url: `/v1/houses/${id}`, token: true });
    },
    {
      onSuccess: (res) => {
        setData(res?.data || {});
        console.log(res, "dataMI");
      },
    }
  );

  const navigate = useNavigate();

  const [center, setSenter] = useState({ lat: 41.311081, lng: 69.240562 });
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyAkkKvMyf8Tk3Q8s7MWXin6njbtjIjq2S4",
  });

  const containerStyle = {
    width: "100%",
    height: "600px",
  };
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
    setSenter({ lat: e?.latLng?.lat(), lng: e?.latLng?.lng() });
    id &&
      setData({
        ...data,
        location: {
          latitude: center?.lat(),
          longitude: center?.lng(),
        },
      });
  };

  const { mutate } = useMutation((body) =>
    request({
      url: `/v1/houses/`,
      method: "POST",
      token: true,
      body: {
        ...body,
        name: "vaxa",
        attachments: [
          {
            imgPath:
              "https://domtechdotblog.files.wordpress.com/2018/05/img_0205.png?w=810",
          },
        ],

        homeAmenitiesDto: {},
        // componentsDto
        houseComponentsDto: {},
        componentsDto: {
          additional: "string",
          airCondition: true,
          courtyard: true,
          furniture: true,
          gasStove: true,
          internet: true,
          tv: true,
        },
        status: true,
        favorite: true,
        zipCode: "string",
        locations: {
          latitude: center?.lat,
          longitude: center?.lng,
        },
      },
    })
  );
  const { mutate: update } = useMutation(({ id, info }) => {
    return (
      id &&
      request({
        url: `/v1/houses/${id}`,
        method: "PUT",
        token: true,
        body: info,
      })
    );
  });

  const onSave = (info) => {
    console.log(info, "info");
    if (id) {
      update(
        { id, info },
        {
          onSuccess: (res) => {
            if (res?.success) {
              message.info("update malumot");
              navigate("/myproporties");
            }
          },
        }
      );
    } else {
      mutate(info, {
        onSuccess: (res) => {
          console.log(res);
          if (res?.success) {
            navigate("/myproporties");
          }
        },
      });
    }
  };

  return (
    <Formik
      initialValues={data}
      enableReinitialize
      onSubmit={onSave}
      render={(PROPS) => {
        return (
          <Container>
            <Form>
              <div className="subtitle">Add new property</div>
              <Section>
                <div className="subtitle ">Contact information</div>
                <Wrapper>
                  <Inputs name="address" placeholder={"Property title*"} />
                  <Inputs name="category" placeholder={"Country"} />
                </Wrapper>
                <Wrapper>
                  <Inputs
                    name="description"
                    placeholder={"Property Description*"}
                  />
                  <Inputs name="region" placeholder="region" />
                </Wrapper>
              </Section>
              {/* 2 */}
              <Section>
                <div className="subtitle ">Additional</div>

                <Wrapper>
                  <Inputs
                    type="number"
                    name="houseDetails.bath"
                    placeholder={"Bath"}
                  />
                  <Inputs
                    placeholder={"Bed"}
                    type="number"
                    name="houseDetails.bed"
                  />
                  <Inputs
                    type="number"
                    name="houseDetails.garage"
                    placeholder={"Garage"}
                  />
                </Wrapper>
                <Wrapper>
                  <Inputs
                    type="number"
                    name="houseDetails.yearBuilt"
                    placeholder={"Year Build"}
                  />
                  <Inputs
                    type="number"
                    name="houseDetails.area"
                    placeholder={"Home area"}
                  />
                  <Inputs
                    type="number"
                    name="houseDetails.room"
                    placeholder={"Rooms"}
                  />
                </Wrapper>
              </Section>

              {/* 3 */}
              <Section>
                <div className="subtitle ">Price</div>

                <Wrapper>
                  <Inputs name="price" placeholder={"Price"} />
                  <Inputs name="salePrice" placeholder={"Sale Price"} />
                </Wrapper>
              </Section>
              {/* 4 */}
              <Section>
                <div className="subtitle ">Location</div>

                <Wrapper>
                  <Inputs name="locations.longitude" placeholder={"Region"} />
                  <Inputs name="locations.latitude" placeholder={"Address"} />
                </Wrapper>
                <Wrapper>
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
                        <Marker position={center} />
                        <></>
                      </GoogleMap>
                    )}
                  </Wrapper>
                </Wrapper>
              </Section>

              {/* 5 */}
              <div className="endToRight">
                <SubmitButton>Save</SubmitButton>
              </div>
            </Form>
          </Container>
        );
      }}
    />
  );
};

export default AddNew;
