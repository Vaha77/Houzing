import React from "react";
import { Route, Routes } from "react-router-dom";
import { Navbar } from "../components";
import { navbar } from "../utils/navbar";

export const Root = () => {
  return (
    <>
      <Routes>
        <Route element={<Navbar />}>
          {" "}
          {navbar.map(({ path, Element, id }) => {
            return <Route key={id} path={path} element={Element} />;
          })}
        </Route>
      </Routes>
    </>
  );
};

export default Root;
