import React from "react";
import styled from "styled-components";

const Container = styled.select`
  background: transparent;
  color: white;
  width: 100%;
  border-style: none;
  border-bottom: 1px solid white;
  height: 40px;
  user-select: none;
  font-size: 0.85rem;

  :focus {
    border-bottom-color: blue;
    outline: none;
  }
`;

export const Option = styled.option`
  color: gray;
  height: 48px;
  font-size: 0.85rem;
`;

const InputSelect = ({alterItemsPerPage}) => {
  return (
    <Container onChange={(e) => alterItemsPerPage(e.target.value)}>
      <Option value={5}>5</Option>
      <Option selected value={10}>10</Option>
      <Option value={25}>25</Option>
      <Option value={50}>50</Option>
    </Container>
  );
};

export default InputSelect;
