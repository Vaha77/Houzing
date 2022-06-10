import styled from "styled-components";

const Conatiner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 48px;
  width: 100%;
  padding: 0 130px;
  padding-top: 48px;
  height: 434px;
  background: var(--why);
  @media (max-width: 768px) {
    flex-direction: column;
    height: 100vh;
    width: 100%;
    gap: 20px;
  }
`;

const Wrapper = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  width: 100%;
  max-width: var(--width);
`;

const Cards = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin-top: 40px;
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
  }
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 235px;
`;

const Title = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 28px;
  text-align: center;
  color: #0d263b;
  margin-bottom: 8px;
`;

const Desc = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  color: #696969;
  width: 215px;
`;

const Img = styled.img`
  margin-bottom: 24px;
  cursor: pointer;
`;

export { Conatiner, Wrapper, Cards, Desc, Card, Title, Img };
