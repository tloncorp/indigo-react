import * as React from "react";
import { render, screen } from "./test-utils";
import { Action } from "../Action";

function ActionTest() {
  return (
    <div>
      <Action>Action Test</Action>
    </div>
  );
}

test("renders Action", () => {
  render(<ActionTest />);
  const actionElem = screen.getByText(/Action Test/i);
  expect(actionElem).toBeInTheDocument();
});
