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
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [isValidPassword, setIsValidPassword] = useState(false);

  //
  const navigate = useNavigate();

  // useQuery

  const { mutate } = useMutation(() => {
    return fetch(`${url}/public/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: email, password: pw }),
    }).then((res) => res.json());
  });

  const onSubmit = () => {
    if (!email) setIsValidEmail(true);
    if (!pw) setIsValidPassword(true);
    if (pw && email)
      mutate(
        {},
        {
          onSuccess: (res) => {
            if (res?.authenticationToken) {
              localStorage.setItem("token", res?.authenticationToken);
              navigate("/myproporties");
            }
          },
          onError: (err) => {},
        }
      );
  };

  return (
    <Container>
      <Wrapper>
        {" "}
        <div className="subtitle">Sign In</div>
        <Input
          mt={60}
          onChange={({ target }) => {
            setIsValidEmail(false);
            setEmail(target.value);
          }}
          value={email}
          placeholder={"Email"}
        />
        {isValidEmail && <div style={{ color: "red" }}>Login kriting!</div>}
        <Input
          onChange={({ target }) => {
            setIsValidPassword(false);
            setPw(target.value);
          }}
          value={pw}
          placeholder={"Password"}
          mt={40}
        />
        {isValidPassword && (
          <div style={{ color: "red" }}>Password kiriting!</div>
        )}
        <Ceckbox>
          <Checkbox>Remember me</Checkbox>
          <a href="/signup" onClick={() => navigate("signup")}>
            Register
          </a>
        </Ceckbox>
        <Button mt={32} onClick={onSubmit} type="primary">
          Logiin
        </Button>
      </Wrapper>
    </Container>
  );
};

export default Signin;
