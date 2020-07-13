import React from "react";
import styled from "styled-components";
import { flexbox } from "styled-system";

import Box from "../Box";

const Container = styled(Box)`
  ${{ display: "flex" }}
  ${flexbox}
`;

const Flex = ({ children, ...props }) => (
  <Container {...props}>{children}</Container>
);

export default Flex;
