import React from "react";
import { render } from "@testing-library/react";
import { App } from "./app";
import "@testing-library/jest-dom/extend-expect";
import { MemoryRouter } from "react-router-dom";

describe("App", () => {
    it("renders correctly", () => {
        const { asFragment } = render(
        <MemoryRouter initialEntries={["/"]}>
            <App />
        </MemoryRouter>
        );
        expect(asFragment()).toMatchSnapshot();
    });
    
});
