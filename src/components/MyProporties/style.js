import styled from "styled-components";
import { ReactComponent as edit } from "../../asset/icons/ruchka.svg";
import { ReactComponent as musr } from "../../asset/icons/musr.svg";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 34px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 130px;
`;

const Selection = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Card = styled.div`
  background: #ffffff;
  border: 1px solid #e6e9ec;
  box-shadow: 0px 10px 30px rgba(13, 38, 59, 0.05);
  border-radius: 3px;
  padding: 24px 30px;
  margin: 32px 0 100px 0;
  width: 100%;
`;

const Table = styled.table`
  width: 100%;
`;
const Tr = styled.tr`
  margin: 5px 0;
  height: 114px;
`;
const Td = styled.td``;
const Th = styled.th``;
const Icons = styled.div`
  display: flex;
  justify-content: space-evenly;
`;
Icons.Edit = styled(edit)`
  cursor: pointer;
`;
Icons.Musr = styled(musr)`
  cursor: pointer;
`;

export { Container, Wrapper, Selection, Card, Table, Td, Th, Tr, Icons };
