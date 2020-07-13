import React from "react";
import { storiesOf } from "@storybook/react";
import LineCode from "../LineCode";
import { codes } from "../../../../mocks/";

storiesOf("Elements/LineCode", module).add("default", () => (
  <div>
    {codes["goverage-test-crud/cmd/crud/main.go"].lines.map(e => (
      <LineCode info={e} />
    ))}
  </div>
));
