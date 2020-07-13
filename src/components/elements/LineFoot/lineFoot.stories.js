import React from "react";
import { storiesOf } from "@storybook/react";
import LineFoot from ".";
import Box from "../Box"
storiesOf("Elements/LineFoot", module).add("default", () => (
  <Box bg="#282a36">
    <LineFoot />
  </Box>
));
