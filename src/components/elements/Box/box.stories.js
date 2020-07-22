import React from "react";
import { storiesOf } from "@storybook/react";
import Box from "../Box";

storiesOf("Elements/Box", module)
  .add("default", () => (
    <Box bg="tomato" p={10} color="#fff">
      Box
    </Box>
  ))
  .add("width 50%", () => (
    <div>
      <Box width={1 / 2} bg="teal" p={10} color="#fff">
        Box
      </Box>
    </div>
  ));
