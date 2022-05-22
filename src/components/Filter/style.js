import styled from "styled-components";
import { ReactComponent as home } from "../../asset/icons/Home.svg";
import { ReactComponent as search } from "../../asset/icons/search.svg";
import { ReactComponent as advanced } from "../../asset/icons/advanced.svg";
const Container = styled.div`
  display: flex;
  justify-content: center;
  margin: 10px 0;
  width: 100%;
  padding: 0 130px;
`;
const Wrapper = styled.div`
  display: flex;
  width: 1440px;
`;
const Icon = styled.div``;

Icon.Home = styled(home)`
  margin-right: 8px;
  margin-top: 6px;
`;
Icon.Search = styled(search)`
  margin-right: 8px;
`;
Icon.Advanced = styled(advanced)`
  margin-right: 8px;
`;

const Advanced = styled.div`
  width: fit-content;
  height: fit-content;
  background: #ffffff;
  padding: 10px;
`;
Advanced.Title = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #0d263b;
`;
const Section = styled.div`
  display: flex;
  margin-bottom: 20px;
  justify-content: flex-end;
  gap: 20px;
`;
export { Container, Wrapper, Icon, Advanced, Section };
