import React from "react";
import styled, { css } from "styled-components";
import { theme } from "styled-tools";
import { textAlign, width } from "styled-system";

const Td = styled.td`
  border-bottom: thin solid rgba(0, 0, 0, 0.12);
  font-size: 0.875rem;
  vertical-align: middle;
  height: 48px;
  text-align: left;
  ${textAlign};
  ${width};

  ${(cov) =>
    cov &&
    css`
      background: linear-gradient(
        90deg,
        ${theme(`colors.backgrounds.${cov.color}`)} ${cov.percentage}%,
        transparent ${cov.percentage}%
      );
    `};
`;

const verificateCoverage = (coverage) => {
  if (!coverage && coverage !== 0) return {};

  switch (true) {
    case coverage === 0:
      return { percentage: 100, color: "warning" };
    case coverage > 0 && coverage < 30:
      return { percentage: coverage, color: "warning" };
    case coverage >= 30 && coverage < 60:
      return { percentage: coverage, color: "hideous" };
    case coverage >= 60 && coverage < 80:
      return { percentage: coverage, color: "attention" };
    case coverage >= 80 && coverage < 100:
      return { percentage: coverage, color: "moderate" };
    case coverage === 100:
      return { percentage: coverage, color: "success" };
  }
};

const Cell = ({ children, coverage = null, ...props }) => {
  const cov = verificateCoverage(coverage);
  return (
    <Td {...cov} {...props}>
      {children}
    </Td>
  );
};

export default Cell;
