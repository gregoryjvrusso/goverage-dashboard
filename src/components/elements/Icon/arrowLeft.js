import React from "react";
import styled from "styled-components";
import { height, width } from "styled-system";

const Container = styled.svg`
  ${width}
  ${height}
`;

const ArrowLeft = ({ ...props }) => (
  <Container {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
  </Container>
);

export default ArrowLeft;
