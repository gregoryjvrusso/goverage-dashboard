import React from "react";
import styled from "styled-components";
import Flex from "../Flex";
import InputSelect from "../InputSelect";
import { ArrowRight, ArrowLeft } from "../Icon";

const Container = styled(Flex)`
  width: 40%;
  color: white;
  font-size: 0.85rem;
  align-items: center;
  justify-content: space-around;
  & > div > svg > path {
    fill: white;
  }
  & > div > svg > path:hover {
    fill: #b3b372;
    cursor: pointer;
  }
`;

const LineBody = ({ alterItemsPerPage, textItems, onClickArrow }) => {
  return (
    <Flex width="100%" justifyContent="flex-end">
      <Container>
        <div>Rows per page:</div>
        <div>
          <InputSelect alterItemsPerPage={alterItemsPerPage} />
        </div>
        <div>{textItems}</div>
        <div onClick={() => onClickArrow("left")}>
          <ArrowLeft width="18px" height="18px" />
        </div>
        <div onClick={() => onClickArrow("right")}>
          <ArrowRight width="18px" height="18px" />
        </div>
      </Container>
    </Flex>
  );
};

export default LineBody;
