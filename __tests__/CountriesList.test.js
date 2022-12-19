import { render, screen, act, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import React from "react";
import App from "../src/App";

afterEach(cleanup);

test("homepage renders", () => {
  act(() => render(<App />));
  expect(screen.getByText(/Where in the world/i)).toBeInTheDocument();
  expect(screen.getByText(/Mode/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Loading/i)).toBeInTheDocument();
});
