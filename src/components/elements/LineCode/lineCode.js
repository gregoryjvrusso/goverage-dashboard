import React from "react";
import Flex from "../Flex";
import Box from "../Box";
import styled, { css } from "styled-components";

const Container = styled(Flex)`
  width: 100%;
  padding: 5px;

  :hover {
    background: #44475a;
  }
`;
const Number = styled(Box)`
  width: 5%;
  color: white;
`;
const Code = styled(Box)`
  width: 95%;
  white-space: pre;
`;

const Span = styled.span`
  color: ${(cont) =>
    (cont.tracked && cont.count === 0 && "#ff5555") ||
    (cont.tracked && cont.count > 0 && "#748c83") ||
    "#6272a4"};
`;

const LineCode = ({ info }) => {
  const { line, contents } = info;
  return (
    <Container>
      <Number width="10%">{line}</Number>
      <Code>
        {contents.map((cont, index) => (
          <Span key={index} {...cont} title={cont.count}>
            {cont.content}
          </Span>
        ))}
      </Code>
    </Container>
  );
};

export default LineCode;
