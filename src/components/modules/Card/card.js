import React from "react";
import LineCode from "../../elements/LineCode";
import styled from "styled-components";
import Box from "../../elements/Box";

const Container = styled(Box)`
  background: #282a36;
  margin: 20px 10px;
  font-family: Roboto, sans-serif;
  line-height: 1.5;
`;
const Title = styled(Box)`
  color: white;
  border-bottom: 2px solid;
  font-weight: 500;
  letter-spacing: 0.0125em;
  line-height: 2rem;
  padding: 16px;
  font-size: 1.25rem;
`;

const Card = ({ codes }) => {
  return (
    <Container>
      <Title>{`Page: ${codes["full-name"]}`}</Title>
      {codes.lines.map((code, index) => (
        <LineCode key={index} info={code} />
      ))}
    </Container>
  );
};

export default Card;
