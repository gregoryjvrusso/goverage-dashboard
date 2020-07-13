import React from "react";
import { storiesOf } from "@storybook/react";
import Input from "../Input";
import Box from "../Box"
storiesOf("Elements/Input", module).add("default", () => (
  <Box bg="black" p={2}>
    <Input />
  </Box>
));
