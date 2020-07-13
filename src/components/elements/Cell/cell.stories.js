import React from "react";
import { storiesOf } from "@storybook/react";
import Cell from "../Cell";

storiesOf("Elements/Cells", module).add("default", () => (
  <div>
    <Cell>teste</Cell>
  </div>
));
