import React from "react";
import { storiesOf } from "@storybook/react";
import InputSelect from "../InputSelect";
import Box from "../Box";

storiesOf("Elements/InputSelect", module).add("default", () => (
  <Box bg="#282a36" h="20px">
    <InputSelect />
  </Box>
));
