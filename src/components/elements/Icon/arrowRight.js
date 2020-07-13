import React from "react";
import styled from "styled-components";
import { height, width } from "styled-system";

const Container = styled.svg`
  ${width}
  ${height}
`;

const ArrowRight = ({ ...props }) => (
  <Container {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
  </Container>
);

export default ArrowRight;
