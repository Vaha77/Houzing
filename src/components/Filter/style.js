import styled from "styled-components";
import { ReactComponent as home } from "../../asset/icons/Home.svg";
const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;
const Wrapper = styled.div`
  display: flex;
  width: 1440px;
  /* justify-content: center; */
`;
const Icon = styled.div`
  position: absolute;
  transform: translate(-50% -50%);
  top: 50%;
  left: 30px;
`;

Icon.Home = styled(home)`
  margin-top: 8px;
`;
export { Container, Wrapper, Icon };
