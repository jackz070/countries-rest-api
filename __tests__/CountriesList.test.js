import { render, screen } from "@testing-library/react";
import React from "react";
import App from "../src/App";

test("renders the homepage", () => {
  render(<App />);
  const header = screen.getByText(/Where in the world?/i);
  expect(header).toBeInTheDocument();
});
