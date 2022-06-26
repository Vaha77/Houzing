import styled from "styled-components";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const Wrapper = styled.div`
  width: 1440px;
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  padding: 0 130px;
  width: 100%;
  max-width: var(--width);
`;
const Total = styled.div`
  margin: 70px 0 16px 0;
  text-align: start;
  width: 100%;
  padding: 0 130px;
`;
const Show = styled.div`
  margin: 48px 0 96px 0;
`;
export { Container, Wrapper, Total, Show };
