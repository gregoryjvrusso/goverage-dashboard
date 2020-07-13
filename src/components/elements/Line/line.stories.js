import React from "react";
import { storiesOf } from "@storybook/react";
import Line from "../Line";
import { files } from "../../../../mocks/";

storiesOf("Elements/Line", module).add("default", () => (
  <div>
    <Line values={files[1]} />
  </div>
));
