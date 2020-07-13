import React from "react";
import CellHead from "../CellHead";

const LineHead = ({ sort, onClickFunction }) => (
  <thead>
    <tr>
      <CellHead onClickFunction={() => {}} name="files">
        Files
      </CellHead>
      <CellHead sort={sort} onClickFunction={onClickFunction} name="lines">
        Lines
      </CellHead>
      <CellHead sort={sort} onClickFunction={onClickFunction} name="green">
        Green
      </CellHead>
      <CellHead sort={sort} onClickFunction={onClickFunction} name="red">
        Red
      </CellHead>
      <CellHead sort={sort} onClickFunction={onClickFunction} name="coverage">
        Coverage
      </CellHead>
    </tr>
  </thead>
);

export default LineHead;
