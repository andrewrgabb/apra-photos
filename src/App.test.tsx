import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders view photos link", () => {
  render(<App />);
  const linkElement = screen.getByText(/view photos/i);
  expect(linkElement).toBeInTheDocument();
});
