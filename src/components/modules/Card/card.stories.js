import React from "react";
import { storiesOf } from "@storybook/react";
import Card from ".";
import { codes } from "../../../../mocks";

storiesOf("Modules/Card", module).add("default", () => (
  <div>
    <Card codes={codes["goverage-test-crud/cmd/crud/main.go"]} />
  </div>
));
