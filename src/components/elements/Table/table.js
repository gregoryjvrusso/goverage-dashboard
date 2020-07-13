import React, { useState } from "react";
import styled from "styled-components";
import Line from "../Line";
import LineHead from "../LineHead";
import LineFoot from "../LineFoot";

const Container = styled.table`
  width: 100%;
  border-spacing: 0;
`;

const Table = ({
  alterItemsPerPage,
  textItems,
  sort,
  onClickArrow,
  list,
  onClickHead,
  onClickLine,
}) => {
  return (
    <React.Fragment>
      <Container>
        <LineHead sort={sort} onClickFunction={onClickHead} />
        <tbody>
          {list.map((file, index) => (
            <Line key={index} values={file} onClickFunction={onClickLine} />
          ))}
        </tbody>
      </Container>
      <LineFoot
        textItems={textItems}
        alterItemsPerPage={alterItemsPerPage}
        onClickArrow={onClickArrow}
      />
    </React.Fragment>
  );
};

export default Table;
