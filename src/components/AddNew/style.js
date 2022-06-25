import styled from "styled-components";
import { Input } from "formik-antd";
const Inputs = styled(Input)`
  border-radius: 2px;
  border: 1px solid #e6e9ec;
  outline: none;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #0d263b;
  display: flex;
  height: 44px;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 32px 130px;
  width: 100%;
`;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  margin-top: 35px;
  gap: 10px;
`;
const Section = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background: #ffffff;
  border: 1px solid #e6e9ec;
  box-shadow: 0px 10px 30px rgba(13, 38, 59, 0.05);
  border-radius: 3px;
  padding: 24px 30px;
  margin-top: 32px;
`;

export { Container, Wrapper, Section, Inputs };
