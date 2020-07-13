import React from "react";
import styled, { css } from "styled-components";
import { width } from "styled-system";
import { Arrow } from "../Icon";

const Container = styled.th`
  border-bottom: thin solid rgba(0, 0, 0, 0.12);
  font-size: 0.875rem;
  vertical-align: middle;
  height: 48px;
  text-align: left;
  ${width};

  :hover {
    color: #b3b372;
    > svg {
      fill: #b3b372;
    }
  }
`;

const ArrowIcon = styled(Arrow)`
  width: 10px;
  height: 14px;
  transform: rotate(0deg);
  ${(sort) =>
    sort.direction === "ascending" &&
    css`
      transform: rotate(180deg);
    `}
`;

const CellHead = ({
  children,
  onClickFunction,
  name,
  sort,
}) => (
  <Container
    onClick={() => onClickFunction(name)}
  >
    {children}
    {sort?.name === name && <ArrowIcon {...sort} />}
  </Container>
);

export default CellHead;
