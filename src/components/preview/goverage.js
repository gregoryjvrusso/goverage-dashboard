import React, { useState } from "react";
import styled from "styled-components";
import TableSearch from "../modules/TableSearch";
import Card from "../modules/Card";
import Box from "../elements/Box";

import { codes, files } from "../../../mocks";

const Container = styled(Box)`
  background: #21222c;
`;

const Goverage = () => {
  const [code, setCode] = useState(undefined);

  const openCode = (file) => {
    setCode(codes[file]);
  };
  
  return (
    <Container>
      <TableSearch files={files} onClickLine={openCode} />
      {code && <Card codes={code} />}
    </Container>
  );
};

export default Goverage;
