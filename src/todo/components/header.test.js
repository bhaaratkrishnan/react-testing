import React from "react";
import { render } from "@testing-library/react";
import { Header } from "./header";
import "@testing-library/jest-dom/extend-expect";
import { MemoryRouter } from "react-router-dom";

describe("Header", () => {
  it("renders correctly", () => {
    const { asFragment } = render(
      <MemoryRouter initialEntries={["/"]}>
        <Header />
      </MemoryRouter>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
