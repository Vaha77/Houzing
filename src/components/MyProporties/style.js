import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const Wrapper = styled.div`
  width: 100%;
  margin: 34px 130px 0 130px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

const Selection = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Card = styled.div`
  width: 100%;
  height: 100vh;
  background: #ffffff;
  border: 1px solid #e6e9ec;
  box-shadow: 0px 10px 30px rgba(13, 38, 59, 0.05);
  border-radius: 3px;
  padding: 24px 37px 48px 30px;
  margin: 20px 0 20px 0;
`;
export { Container, Wrapper, Selection, Card };
