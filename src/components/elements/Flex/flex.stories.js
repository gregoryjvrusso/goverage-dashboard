import React from "react";
import { storiesOf } from "@storybook/react";
import Flex from "../Flex";
import Box from "../Box";

storiesOf("Elements/Flex", module)
  .add("default", () => (
    <Flex flexWrap="wrap">
      <Box width={[1, 1 / 2]} p={3} color="white" bg="blue">
        Flex
      </Box>
      <Box width={[1, 1 / 2]} p={1} color="white" bg="green">
        Wrap
      </Box>
    </Flex>
  ))
  .add("center", () => (
    <div>
      <Flex alignItems="center">
        <Box width={1 / 2} p={3} color="white" bg="blue">
          Flex
        </Box>
        <Box width={1 / 2} p={1} color="white" bg="green">
          Box
        </Box>
      </Flex>
    </div>
  ))
  .add("space-around", () => (
    <div>
      <Flex justifyContent="space-around">
        <Box width={1 / 3} p={2} color="white" bg="blue">
          Flex
        </Box>
        <Box width={1 / 3} p={2} color="white" bg="green">
          Justify
        </Box>
      </Flex>
    </div>
  ));
