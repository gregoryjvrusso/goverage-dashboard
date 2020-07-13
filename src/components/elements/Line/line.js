import React from "react";
import styled from "styled-components";
import Cell from "../Cell";

const Tr = styled.tr`
  width: 100%;
  font-size: 1.25rem;
  :hover {
    background: #44475a;
  }
`;

const Line = ({ values, onClickFunction }) => (
  <Tr onClick={() => onClickFunction(values.name)}>
    <Cell width={"50%"}>{values.name}</Cell>
    <Cell width={"10%"}>{values.lines}</Cell>
    <Cell width={"10%"}>{values.green}</Cell>
    <Cell width={"10%"}>{values.red}</Cell>
    <Cell width={"20%"} textAlign={"right"} coverage={values.coverage}>
      {`${values.coverage}%`}
    </Cell>
  </Tr>
);

export default Line;
