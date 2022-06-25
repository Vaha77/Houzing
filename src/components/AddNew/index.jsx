// /* eslint-disable no-unused-vars */
// import React, { useState } from "react";
// import Input from "../Generic/Input";
// import Button from "../Generic/Button";
// import { Container, Section, Wrapper } from "./style";
// import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
// import Uploads from "./Upload";
// import Check from "./Checkbox";
// import { useHttp } from "../../hooks/useHttp";
// import { useMutation, useQuery } from "react-query";
// import { useLocation, useNavigate, useParams } from "react-router-dom";
// import { Checkbox, message } from "antd";
// import Map from "../SelectedHose/Map";
// const { REACT_APP_BASE_URL: url } = process.env;
// const AddNew = () => {
//   const { id } = useParams();
//   const { request } = useHttp();
//   const navigate = useNavigate();
//   const [center, setSenter] = useState({ lat: 41.311081, lng: 69.240562 });
//   const [data, setData] = useState({
//     address: "string",
//     attachments: [
//       {
//         imgPath: "",
//       },
//     ],
//     categoryId: 0,
//     city: "string",
//     componentsDto: {
//       additional: "string",
//       airCondition: true,
//       courtyard: true,
//       furniture: true,
//       gasStove: true,
//       internet: true,
//       tv: true,
//     },
//     country: "",
//     description: " ",
//     favorite: true,
//     homeAmenitiesDto: {
//       additional: "string",
//       busStop: true,
//       garden: true,
//       market: true,
//       park: true,
//       parking: true,
//       school: true,
//       stadium: true,
//       subway: true,
//       superMarket: true,
//     },
//     houseDetails: {
//       area: "",
//       bath: "",
//       beds: "",
//       garage: "",
//       room: "",
//       yearBuilt: "",
//     },
//     locations: {
//       latitude: center?.lat,
//       longitude: center?.lng,
//     },
//     name: "",
//     price: "",
//     region: "",
//     salePrice: "",
//     status: true,
//     zipCode: "string",
//   });
//   const location = useLocation();
//   const onChange = ({ target }) => {
//     const { value, name } = target;
//     setData({ ...data, [name]: value });
//   };

//   const onImg = ({ target }) => {
//     setData({
//       ...data,
//       attachments: [{ ...data.attachments, [target.name]: target.value }],
//     });
//   };
//   const createPostCheck = ({ target }) => {
//     setData({
//       ...data,
//       homeAmenitiesDto: {
//         ...data.homeAmenitiesDto,
//         [target.name]: target.checked,
//       },
//     });
//   };
//   const createPost = ({ target }) => {
//     setData({
//       ...data,
//       houseDetails: { ...data.houseDetails, [target.name]: target.value },
//     });
//   };
//   useQuery(
//     "get single item",
//     () => {
//       return (
//         location.pathname === `/proporties/addnew/${id}` &&
//         fetch(`${url}/v1/houses/${id}`, {
//           method: "GET",
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${localStorage.getItem("token")} `,
//           },
//         }).then((res) => res.json())
//       );
//     },
//     {
//       onSuccess: (res) =>
//         location.pathname === `/proporties/addnew/${id}` && setData(res?.data),
//     }
//   );

//   const { mutate } = useMutation((props) => {
//     return fetch(`${url}/v1/houses`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${localStorage.getItem("token")}`,
//       },
//       body: JSON.stringify(data),
//     }).then((res) => res.json());
//   });

//   const { mutate: update } = useMutation((id) => {
//     return fetch(`${url}/v1/houses/${id}`, {
//       method: "PUT",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${localStorage.getItem("token")}`,
//       },
//       body: JSON.stringify(data),
//     }).then((res) => res.json());
//   });

//   const onSubmit = () => {
//     if (location.pathname === `/proporties/addnew/${id}`) {
//       update(id, {
//         onSuccess: (res) => {
//           if (res?.success) {
//             message.success("AMlumot O'zgardi");
//             navigate("/myproporties");
//           } else {
//             message.error("malumotda hatolik");
//           }
//         },
//       });
//     } else {
//       mutate("", {
//         onSuccess: (res) => {
//           if (res?.success) {
//             message.success("Malumot Qo'shildi");
//             navigate("/myproporties");
//           } else {
//             message.error("malumot qoshilmadi");
//           }
//         },
//       });
//     }
//   };

//   return (
//     <Container>
//       <div className="subtitle ">Contact information</div>
//       <Wrapper>
//         <div className="subtitle">Contact information</div>
//         <Section>
//           <Input
//             value={data?.name}
//             name={"name"}
//             onChange={onChange}
//             mt={40}
//             placeholder={"Property title*"}
//           />
//           <Input
//             value={data?.country}
//             name={"country"}
//             onChange={onChange}
//             mt={40}
//             placeholder={"Country"}
//           />
//         </Section>
//         <Input
//           value={data?.description}
//           name={"description"}
//           onChange={onChange}
//           mt={40}
//           placeholder={"Property Description*"}
//         />
//       </Wrapper>
//       <Wrapper>
//         <div className="subtitle">Additional</div>
//         <Section>
//           <Input
//             value={data?.houseDetails?.area}
//             type={"number"}
//             mt={40}
//             onChange={createPost}
//             placeholder={"Area"}
//             name={"area"}
//           />
//           <Input
//             value={data?.houseDetails?.room}
//             type={"number"}
//             mt={40}
//             onChange={createPost}
//             name={"room"}
//             placeholder={"Rooms"}
//           />
//         </Section>
//         <Section>
//           <Input
//             value={
//               data?.houseDetails?.beds == null ? "" : data?.houseDetails?.beds
//             }
//             type={"number"}
//             mt={40}
//             onChange={createPost}
//             name={"beds"}
//             placeholder={"Beds"}
//           />
//           <Input
//             value={data?.houseDetails?.bath}
//             type={"number"}
//             mt={40}
//             onChange={createPost}
//             name={"bath"}
//             placeholder={"Baths"}
//           />
//         </Section>
//         <Section>
//           <Input
//             value={data.houseDetails?.garage}
//             type={"number"}
//             mt={40}
//             onChange={createPost}
//             name={"garage"}
//             placeholder={"Garages"}
//           />
//           <Input
//             value={
//               data.houseDetails?.yearBuilt !== null
//                 ? data.houseDetails?.yearBuilt
//                 : ""
//             }
//             type={"number"}
//             mt={40}
//             onChange={createPost}
//             name={"yearBuilt"}
//             placeholder={"Year bulid"}
//           />
//         </Section>
//       </Wrapper>
//       <Wrapper>
//         <div className="subtitle">Price</div>
//         <Section>
//           <Input
//             value={data.salePrice}
//             type={"number"}
//             onChange={onChange}
//             name={"salePrice"}
//             placeholder={"Price"}
//           />
//           <Input
//             value={data?.price}
//             type={"number"}
//             onChange={onChange}
//             name={"price"}
//             placeholder={"Sale price"}
//           />
//         </Section>
//       </Wrapper>
//       <Wrapper>
//         <div className="subtitle">Photos</div>
//         <Section>
//           <Input
//             name={"imgPath"}
//             value={data?.attachments[0]?.imgPath}
//             placeholder={"link"}
//             onChange={onImg}
//           />
//         </Section>
//       </Wrapper>
//       <Wrapper>
//         <div className="subtitle">Amenities</div>
//         <Section className="center">
//           <Checkbox
//             onClick={createPostCheck}
//             checked={data?.homeAmenitiesDto?.school}
//             name={"school"}
//             className="width"
//           >
//             <div className="description">School</div>
//           </Checkbox>
//           <Checkbox
//             className="width"
//             onClick={createPostCheck}
//             checked={data?.homeAmenitiesDto?.park}
//             name={"park"}
//           >
//             <div className="description">Park</div>
//           </Checkbox>

//           <Checkbox
//             className="width"
//             onClick={createPostCheck}
//             name={"superMarket"}
//             checked={data?.homeAmenitiesDto?.superMarket}
//           >
//             <div className="description">Super market</div>
//           </Checkbox>
//         </Section>
//         <Section className="center">
//           <Checkbox
//             onClick={createPostCheck}
//             name={"market"}
//             className="width"
//             checked={data?.homeAmenitiesDto?.market}
//           >
//             <div className="description">Market</div>
//           </Checkbox>
//           <Checkbox
//             onClick={createPostCheck}
//             name={"stadium"}
//             className="width"
//             checked={data?.homeAmenitiesDto?.stadium}
//           >
//             <div className="description">Stadium</div>
//           </Checkbox>

//           <Checkbox
//             onClick={createPostCheck}
//             name={"garden"}
//             className="width"
//             checked={data?.homeAmenitiesDto?.garden}
//           >
//             <div className="description">Garden</div>
//           </Checkbox>
//         </Section>
//         <Section className="center">
//           <Checkbox
//             onClick={createPostCheck}
//             name={"busStop"}
//             className="width"
//             checked={data?.homeAmenitiesDto?.busStop}
//           >
//             <div className="description">Bus stop</div>
//           </Checkbox>
//           <Checkbox
//             className="width"
//             onClick={createPostCheck}
//             name={"parking"}
//             checked={data?.homeAmenitiesDto?.parking}
//           >
//             <div className="description">Parking</div>
//           </Checkbox>
//           <Checkbox
//             onClick={createPostCheck}
//             name={"subway"}
//             className="width"
//             checked={data?.homeAmenitiesDto?.subway}
//           >
//             <div className="description">Subway</div>
//           </Checkbox>
//         </Section>
//       </Wrapper>

//       <Wrapper>
//         <Map data={data} setData={setData} />
//       </Wrapper>
//       <Button onClick={() => onSubmit()} type={"secondary"}>
//         Submit
//       </Button>
//       <div className="endToRight">
//         <Button
//           onClick={() => onSubmit()}
//           width={"288px"}
//           mt={32}
//           type={"primary"}
//         >
//           Save
//         </Button>
//       </div>
//     </Container>
//   );
// };

// export default AddNew;
