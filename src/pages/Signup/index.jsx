import React, { useRef } from "react";
import { Input, Button } from "../../components/Generic";
import { Container } from "./style";

export const SiginUp = () => {
  const emailRef = useRef("");
  const pwRef = useRef("");
  return (
    <Container>
      <Input ref={emailRef} placeholder={"Email"} />
      <Input ref={pwRef} placeholder={"Password"} />
      <Button>Sigin</Button>
    </Container>
  );
};

export default SiginUp;
