import {
  render,
  screen,
  waitFor,
  act,
  cleanup,
  fireEvent,
} from "@testing-library/react";
import React from "react";
import App from "../src/App";

afterEach(cleanup);

test("renders the homepage", async () => {
  act(() => render(<App />));
  expect(screen.getByText(/Where in the world/i)).toBeInTheDocument();
  expect(screen.getByText(/Mode/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Loading/i)).toBeInTheDocument();
});

test("dark mode switch works (so far we know that the icon changes on button click, no idea on color", () => {
  act(() => render(<App />));
  expect(document.querySelector("header")).toMatchSnapshot();
  const darkModeSwitch = screen.getByText(/dark mode/i);
  act(() => fireEvent.click(darkModeSwitch));
  expect(document.querySelector("header")).toMatchSnapshot();
});

// TODO try building test env for react-query
