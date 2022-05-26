import styled from "styled-components";

const Conatiner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 48px;
  width: 100%;
  height: 434px;
  background: var(--why);
`;

const Wrapper = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  padding: 0 130px;
  width: 100%;
  max-width: var(--width);
`;
export { Conatiner, Wrapper };
