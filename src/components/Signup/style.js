import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
const Wrapper = styled.div`
  gap: 20px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  width: 580px;
  background: #ffffff;
  border: 1px solid #e6e9ec;
  box-shadow: 0px 10px 30px rgba(13, 38, 59, 0.05);
  border-radius: 3px;
  @media (max-width: 768px) {
    width: 400px;
  }
`;
const Ceckbox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
  margin-bottom: 20px;
  width: 100%;
`;
export { Container, Wrapper, Ceckbox };
