import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import React from "react";
import DarkModeSwitch from "../src/components/DarkModeSwitch";

test("dark mode switch correctly changes icon on click", async () => {
  const user = userEvent.setup();
  render(<DarkModeSwitch />);
  screen.debug();
  expect(screen.getByRole("checkbox").checked).toBe(false);
  // Light mode icon is present
  expect(document.getElementById("moon")).toBeInTheDocument();
  await user.click(screen.getByRole("checkbox"));
  expect(document.getElementById("moon-filled")).toBeInTheDocument();
});
