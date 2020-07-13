import React from "react";
import styled, { css } from "styled-components";
import { textAlign, width } from "styled-system";

const Td = styled.td`
  border-bottom: thin solid rgba(0, 0, 0, 0.12);
  font-size: 0.875rem;
  vertical-align: middle;
  height: 48px;
  text-align: left;
  ${textAlign};
  ${width};

  ${(cov) => cov && css`
    background: linear-gradient(90deg, ${cov.color} ${cov.percentage}%, transparent ${cov.percentage}%);
  `};
`;

const verificateCoverage = (coverage) => {
  if (!coverage && coverage !== 0) return {};

  switch (true) {
    case coverage === 0:
      return { percentage: 100, color: "#df3b00" };
    case coverage > 0 && coverage < 30:
      return { percentage: coverage, color: "#df3b00" };
    case coverage >= 30 && coverage < 60:
      return { percentage: coverage, color: "#df6800" };
    case coverage >= 60 && coverage < 80:
      return { percentage: coverage, color: "#df6f20" };
    case coverage >= 80 && coverage < 100:
      return { percentage: coverage, color: "#84c14e" };
    case coverage === 100:
      return { percentage: coverage, color: "#77e11b" };
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
