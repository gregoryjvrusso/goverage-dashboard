import React from "react";
import styled from "styled-components";
import Flex from "../Flex";
import { Search } from "../Icon";

const Container = styled(Flex)`
  color: #f8f8f2;
  cursor: text;
  border-bottom: solid 1px white;
  align-items: center;

  :focus-within {
    border-bottom: solid 1px blue;

    & > svg > path {
      stroke: blue;
    }

    & > svg > .focusFill {
      fill: blue;
    }
  }
`;

const InputSelect = styled.input`
  color: #f8f8f2;
  background-color: transparent;
  border-style: none;
  flex: 1 1 auto;
  line-height: 20px;
  padding: 8px 0;
  min-width: 0;
  width: 100%;

  :focus {
    outline: none;
  }
`;

const Input = ({ onInputChange }) => {
  return (
    <Container>
      <InputSelect type="search" onChange={(e) => onInputChange(e)} />
      <Search width="24px" height="24px" />
    </Container>
  );
};

export default Input;
