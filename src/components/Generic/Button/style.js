import styled from "styled-components";

const getType = (type) => {
  switch (type) {
    case "secondary":
      return {
        border: "1px solid #e6e9ec",
        color: "#0d263b",
      };
    case "primary":
      return {
        background: "#0061df",
        color: "#ffffff",
        border: "none",
      };
    default:
      return {
        border: "1px solid #e6e9ec",
        color: "#ffffff",
      };
  }
};

const Container = styled.div`
  display: flex;
  font-family: "Montseeat";
  font-style: normal;
`;
export { Container };
