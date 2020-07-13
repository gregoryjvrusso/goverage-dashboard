import React from "react";
import { storiesOf } from "@storybook/react";
import Table from "../Table";
import { files } from "../../../../mocks/";

storiesOf("Elements/Table", module).add("default", () => (
  <div>
    <Table list={files} />
  </div>
));
