import React from "react";
import styled from "styled-components";
import { height, width } from "styled-system";

const Container = styled.svg`
  ${width}
  ${height}
`;

const Rect = styled.rect`
  fill: transparent;
  height: 10px;
  width: 14px;
`;

const Arrow = ({ ...props }) => (
  <Container {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <g>
      <path d="M16,29a1,1,0,0,1-.71-.29l-9-9a1,1,0,0,1,1.42-1.42L16,26.59l8.29-8.3a1,1,0,0,1,1.42,1.42l-9,9A1,1,0,0,1,16,29Z" />
      <path d="M16,29a1,1,0,0,1-1-1V4a1,1,0,0,1,2,0V28A1,1,0,0,1,16,29Z" />
    </g>
    <g>
      <Rect />
    </g>
  </Container>
);

export default Arrow;
