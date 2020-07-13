import React from "react";
import { storiesOf } from "@storybook/react";
import TableSearch from ".";
import { files } from "../../../../mocks";

storiesOf("Modules/TableSearch", module).add("default", () => (
  <div>
    <TableSearch files={files} />
  </div>
));
