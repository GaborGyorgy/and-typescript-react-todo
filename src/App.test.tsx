import React from "react";
import { render, act } from "@testing-library/react";
import App from "./App";

test("renders learn react link", async () => {
  await act(async () => {
    const { getByText } = await render(<App />);
    const linkElement = getByText(/Todo JSX example./i);
    expect(linkElement).toBeInTheDocument();
  });
});
