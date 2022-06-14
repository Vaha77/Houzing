import styled from "styled-components";

const Container = styled.div`
  display: flex;
  padding: 0 130px;
  /* border: 1px solid red; */
  width: 100%;
  height: 100vh;
`;

const Wrapper = styled.div`
  display: flex;
  width: 1440px;
  flex-direction: column;
  /* border: 1px solid red; */
`;
const Card = styled.div`
  width: 100%;
  height: 450px;
  background: #ffffff;
  border: 1px solid #e6e9ec;
  box-shadow: 0px 10px 30px rgba(13, 38, 59, 0.05);
  border-radius: 3px;
`;

export { Container, Wrapper, Card };
