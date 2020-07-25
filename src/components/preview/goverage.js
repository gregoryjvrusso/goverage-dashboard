import React, { useState } from "react";
import { theme } from "styled-tools";
import styled from "styled-components";
import TableSearch from "../modules/TableSearch";
import Card from "../modules/Card";
import Box from "../elements/Box";

//import { codes, files } from "../../../mocks";

const Container = styled(Box)`
  background: ${theme("colors.backgrounds.base")};
`;

const Goverage = () => {
  const codes = { REPLACE: "CODES" };
  const files = [{ REPLACE: "FILES" }];
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
