import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders title", () => {
  render(<App />);
  const titleElement = screen.getByText(/apra photos/i);
  expect(titleElement).toBeInTheDocument();
});
