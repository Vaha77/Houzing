import React from "react";
import { Button, Input } from "../../components/Generic";
import { Container, Wrapper, Login, Icon } from "./style";
import { useNavigate } from "react-router";
import { useMutation } from "react-query";
import { useState } from "react";
import { message } from "antd";
import { AiFillEye } from "react-icons/ai";
const { REACT_APP_BASE_URL: url } = process.env;
const SigninUp = () => {
  const [visible, setVisible] = useState(false);
  const [data, setData] = useState({
    email: "",
    firstname: "",
    lastname: "",
    password: "",
    roleIdSet: [1],
  });
  const onChange = ({ target }) => {
    const { value, name } = target;
    setData({ ...data, [name]: value });
  };
  const handleChange = () => {
    setVisible(!visible);
  };
  const onSubmit = () => {
    mutate("", {
      onSuccess: (res) => {
        if (res.status === 201) {
          message.info("Habar Emailga yuborildi");
          navigate("/signin");
        } else if (res.status === 422) {
          message.warning("Bunday Profil Mavjud");
        } else {
          message.error("Iltimos Malumotni To'g'ri Kiritng ");
        }
      },
    });
  };
  const { mutate } = useMutation(() => {
    return fetch(`${url}/public/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  });
  const navigate = useNavigate();

  return (
    <Container>
      <Wrapper>
        <div className="subtitle">Registration</div>

        <Input
          onChange={onChange}
          name={"firstname"}
          placeholder={"First name"}
          mt={10}
        />
        <Input
          onChange={onChange}
          name={"lastname"}
          placeholder={"Last name"}
        />
        <Input
          onChange={onChange}
          name={"email"}
          placeholder={"Email"}
          type={"email"}
        />
        <Input
          type={visible ? "password" : "string"}
          onChange={onChange}
          name={"password"}
          placeholder={"Password"}
        />
        <Icon onClick={handleChange}>
          <AiFillEye />{" "}
        </Icon>
        <Button onClick={onSubmit} type={"secondary"}>
          Register
        </Button>
        <Login className={"description"} onClick={() => navigate("/signin")}>
          Sign in
        </Login>
      </Wrapper>
    </Container>
  );
};
export default SigninUp;
