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

const Container = styled.input`
  display: flex;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #0d263b;
  height: ${({ height }) => height || "44px"};
  min-width: ${({ width }) => (width ? width : "100%")};
  width: ${({ width }) => (width ? width : "100%")};
  border-radius: 2px;
  border: 1px solid #ebe9ec;

  /* ${({ type }) => getType(type)} */
`;

const Wrapper = styled.div`
  display: flex;
  position: relative;
  width: 100%;

  margin-right: ${({ mr }) => `${mr}px`};
  margin-left: ${({ ml }) => `${ml}px`};
  margin-top: ${({ mt }) => `${mt}px`};
  margin-bottom: ${({ mb }) => `${mb}px`};
`;

export { Container, Wrapper };
