import React, { useRef, useState } from "react";
import { Input, Button } from "../../components/Generic";
import { Container, Wrapper } from "./style";
import { useQuery } from "react-query";

export const Signin = () => {
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");

  const onSubmit = () => {
    console.log(email);
    console.log(pw);
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
        <Button onClick={onSubmit} type="secondary">
          Logiin
        </Button>
      </Wrapper>
    </Container>
  );
};

export default Signin;
