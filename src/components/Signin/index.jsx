import React, { useState } from "react";
import { Input, Button, Checkbox } from "../../components/Generic";
import { Ceckbox, Container, Wrapper } from "./style";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";

const { REACT_APP_BASE_URL: url } = process.env;

export const Signin = () => {
  //
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");

  //
  const navigate = useNavigate();

  // useQuery

  const { mutate } = useMutation(() => {
    return fetch(`${url}/public/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      onError(err) {
        console.log(err, "resds");
      },
      body: JSON.stringify({ email: email, password: pw }),
    }).then((res) => res.json());
  });

  const onSubmit = () => {
    mutate(
      {},
      {
        onSuccess: (res) => {
          if (res?.authenticationToken) {
            localStorage.setItem("token", res?.authenticationToken);
            navigate("/myproporties");
          }
        },
      }
    );
  };

  return (
    <Container>
      <Wrapper>
        {" "}
        <div className="title">Sign In</div>
        <Input
          mt={60}
          onChange={({ target }) => setEmail(target?.value)}
          value={email}
          placeholder={"Email"}
        />
        <Input
          onChange={({ target }) => setPw(target?.value)}
          value={pw}
          placeholder={"Password"}
          mt={40}
        />
        <Ceckbox>
          <Checkbox>Remember me</Checkbox>
          <a href="/signin">Forget</a>
        </Ceckbox>
        <Button mt={32} onClick={onSubmit} type="primary">
          Logiin
        </Button>
      </Wrapper>
    </Container>
  );
};

export default Signin;
