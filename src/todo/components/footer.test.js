import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Footer } from "./footer";
import '@testing-library/jest-dom/extend-expect';
import { MemoryRouter } from "react-router-dom";

describe("Footer", () => {
  const todos = [
    { text: "Todo 1", completed: false },
    { text: "Todo 2", completed: false },
  ];

  it("renders correctly", () => {
    const { asFragment } = render(
      <MemoryRouter initialEntries={["/"]}>
        <Footer todos={todos} />
      </MemoryRouter>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("displays the correct number of active todos", () => {
    const { getByTestId } = render(
      <MemoryRouter initialEntries={["/"]}>
        <Footer todos={todos} />
      </MemoryRouter>
    );
    const todoCountElement = getByTestId("todo-count");
    expect(todoCountElement.textContent).toBe("2 items left!");
  });

  it('calls removeCompleted function when "Clear completed" button is clicked', () => {
    const removeCompletedMock = jest.fn();
    const todos =  [
      { text: "Todo 1", completed: true },
      { text: "Todo 2", completed: true },
      { text: "Todo 3", completed: false}
    ];
    const { getByText } = render(
      <MemoryRouter initialEntries={["/"]}>
        <Footer todos={todos} dispatch={removeCompletedMock} />
      </MemoryRouter>
    );
    const clearCompletedButton = getByText("Clear completed");
    fireEvent.click(clearCompletedButton);
    expect(removeCompletedMock).toHaveBeenCalled();
  });

  it("completed tasks is disabled when there are no completed tasks", () => {
    const todos =  [
      { text: "Todo 1", completed: false },
      { text: "Todo 2", completed: false },
    ];
    const { getByText } = render(
      <MemoryRouter initialEntries={["/"]}>
        <Footer todos={todos} />
      </MemoryRouter>
    );
    const clearCompletedButton = getByText("Clear completed");
    expect(clearCompletedButton).toBeDisabled();
  });
});
