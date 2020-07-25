import React from "react";
import { theme } from "styled-tools";
import styled from "styled-components";
import Flex from "../Flex";
import { Search } from "../Icon";

const Container = styled(Flex)`
  color: ${theme("colors.texts.base")};
  cursor: text;
  border-bottom: solid 1px ${theme(`colors.texts.base`)};;
  align-items: center;

  & > svg > path {
    stroke: ${theme(`colors.texts.base`)};
  }

  & > svg > .focusFill {
    fill: ${theme(`colors.texts.base`)};
  }

  :focus-within {
    border-bottom: solid 1px ${theme(`colors.texts.searchClick`)};

    & > svg > path {
      stroke: ${theme(`colors.texts.searchClick`)};
    }

    & > svg > .focusFill {
      fill: ${theme(`colors.texts.searchClick`)};
    }
  }
`;

const InputSelect = styled.input`
  color: ${theme("colors.texts.base")};
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
