import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Main } from "./main";
import "@testing-library/jest-dom/extend-expect";
import { TOGGLE_ALL } from "../constants";
import { MemoryRouter } from "react-router-dom";

describe("Main", () => {
  it("renders the main component", () => {
    const todos = [
      {
        id: 1,
        text: "Test Todo",
        completed: false,
      },
    ];
    const { asFragment } = render(
      <MemoryRouter initialEntries={["/"]}>
        <Main todos={todos} />
      </MemoryRouter>
    );
    expect(asFragment).toMatchSnapshot();
  });

  it("dooesn't display the toogle all button when there are no completed todos", () => {
    const { getByTestId } = render(
      <MemoryRouter initialEntries={["/"]}>
        <Main todos={[]} />
      </MemoryRouter>
    );
    expect(getByTestId("main").children.length).toBe(1);
  });

  it("displays the toggle all button when there are completed todos", () => {
    const todos = [
      {
        id: 1,
        text: "Test Todo",
        completed: true,
      },
    ];
    const { getByTestId } = render(
      <MemoryRouter initialEntries={["/"]}>
        <Main todos={todos} />
      </MemoryRouter>
    );
    expect(getByTestId("toggle-all-button")).toBeDefined();
  });
  it("dispatches the correct action when the toggle all button is clicked", () => {
    const todos = [
      {
        id: 1,
        text: "Test Todo",
        completed: true,
      },
    ];
    const onToggleAllMock = jest.fn();
    const { getByTestId } = render(
      <MemoryRouter initialEntries={["/"]}>
        <Main todos={todos} dispatch={onToggleAllMock} />
      </MemoryRouter>
    );
    const toggleAllButton = getByTestId("toggle-all");
    fireEvent.click(toggleAllButton);
    expect(onToggleAllMock).toHaveBeenCalledWith({
      type: TOGGLE_ALL,
      payload: { completed: false },
    });
  });
  it("toggle all button is checked when all todos are completed", () => {
    const todos = [
      {
        id: 1,
        text: "Test Todo",
        completed: true,
      },
    ];
    const { getByTestId } = render(
      <MemoryRouter initialEntries={["/"]}>
        <Main todos={todos} />
      </MemoryRouter>
    );
    const toggleAllButton = getByTestId("toggle-all");
    expect(toggleAllButton).toBeChecked();
  });

  it("todo list displays the correct number of todos", () => {
    const todos = [
      {
        id: 1,
        text: "Test Todo",
        completed: false,
      },
      {
        id: 2,
        text: "Test Todo 2",
        completed: false,
      },
    ];
    const { getByTestId } = render(
      <MemoryRouter initialEntries={["/"]}>
        <Main todos={todos} />
      </MemoryRouter>
    );
    const todoList = getByTestId("todo-list");
    expect(todoList.children.length).toBe(2);
  });
});
