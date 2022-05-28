import React, { useState } from "react";
import { Input, Button } from "../../components/Generic";
import { Container, Wrapper } from "./style";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
const { REACT_APP_BASE_URL: url } = process.env;
export const Signin = () => {
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const navigate = useNavigate();
  // useQuery
  const { mutate } = useMutation((props) => {
    return fetch(`${url}/public/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({ email, password: pw }),
    }).then((res) => res.json());
  });

  const onSubmit = () => {
    console.log(email);
    console.log(pw);
    mutate("hey", {
      onSuccess: (res) => {
        console.log(res);
        localStorage.setItem("token", res?.authenticationToken);
        if (res?.authenticationToken) navigate("/home");
      },
      onError: (res) => {
        console.log(res, "error");
      },
    });
  };

  return (
    <Container>
      <Wrapper>
        {" "}
        <div>Signin</div>
        <Input
          onChange={({ target }) => setEmail(target?.value)}
          value={email}
          placeholder={"Email"}
        />
        <Input
          onChange={({ target }) => setPw(target?.value)}
          value={pw}
          placeholder={"Password"}
        />
        <Button onClick={onSubmit} type="primary">
          Logiin
        </Button>
      </Wrapper>
    </Container>
  );
};

export default Signin;
