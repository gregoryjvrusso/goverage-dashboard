import React from "react";
import styled from "styled-components";
import { space, color, layout, border } from "styled-system";

const Container = styled.div`
  ${space}
  ${color}
  ${layout}
  ${border}
`;

const Box = ({ children, ...props }) => (
  <Container {...props}>{children}</Container>
);

export default Box;
