import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ThemeProvider } from "styled-components";
import { light } from "../themes/light";
import { Reset } from "../Reset";

const AllTheProviders = ({ children }) => {
  return (
    <ThemeProvider theme={light}>
      <Reset />
      {children}
    </ThemeProvider>
  );
};

const customRender = (ui, options) =>
  render(ui, { wrapper: AllTheProviders, ...options });

// re-export everything
export * from "@testing-library/react";

// override render method
export { customRender as render };
