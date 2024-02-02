import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Item } from "./item";
import "@testing-library/jest-dom/extend-expect";
import { REMOVE_ITEM, TOGGLE_ITEM, UPDATE_ITEM } from "../constants";

describe("Item", () => {
  it("renders the todo text", () => {
    const todos = [
      {
        id: 1,
        text: "Test Todo",
        completed: false,
      },
    ];
    const { asFragment } = render(<Item todo={todos[0]} />);
    expect(asFragment).toMatchSnapshot();
  });

  it("toggles completion when check box is clicked", () => {
    const todos = [
      {
        id: 1,
        text: "Test Todo",
        completed: false,
      },
    ];
    const onToggleMock = jest.fn();
    const { getByTestId } = render(
      <Item todo={todos[0]} dispatch={onToggleMock} />
    );
    const checkboxElement = getByTestId("todo-item-toggle");
    fireEvent.click(checkboxElement);
    expect(onToggleMock).toHaveBeenCalledWith({
      type: TOGGLE_ITEM,
      payload: { id: 1 },
    });
  });

  it("enables editing on double click", () => {
    const todos = [
      {
        id: 1,
        text: "Test Todo",
        completed: false,
      },
    ];
    const { getByTestId } = render(<Item todo={todos[0]} />);
    const todoElement = getByTestId("todo-item-label");
    fireEvent.doubleClick(todoElement);
    const inputElement = getByTestId("text-input");
    expect(inputElement).toHaveFocus();
  });

  it("removes todo when delete button is clicked", () => {
    const todos = [
      {
        id: 1,
        text: "Test Todo",
        completed: false,
      },
    ];
    const onDeleteMock = jest.fn();
    const { getByTestId } = render(
      <Item todo={todos[0]} dispatch={onDeleteMock} />
    );
    const deleteButtonElement = getByTestId("todo-item-button");
    fireEvent.click(deleteButtonElement);
    expect(onDeleteMock).toHaveBeenCalledWith({
      type: REMOVE_ITEM,
      payload: { id: 1 },
    });
  });

  it("calls updateItem function with new title when input is submitted", () => {
    const todo = { id: 1, title: "Test Todo", completed: false };
    const dispatchMock = jest.fn();
    const { getByTestId } = render(
      <Item todo={todo} dispatch={dispatchMock} />
    );
    const labelElement = getByTestId("todo-item-label");
    fireEvent.doubleClick(labelElement);
    const inputElement = getByTestId("text-input");
    fireEvent.change(inputElement, { target: { value: "Updated Todo" } });
    fireEvent.keyDown(inputElement, { key: "Enter", code: "Enter" });
    expect(dispatchMock).toHaveBeenCalledWith({
      type: UPDATE_ITEM,
      payload: { id: 1, title: "Updated Todo" },
    });
  });
  // TODO: un comment here 
  it("calls removeItem function with new title when input is empty", () => {
    const todo = { id: 1, title: "Test Todo", completed: false };
    const dispatchMock = jest.fn();
    const { getByTestId } = render(
      <Item todo={todo} dispatch={dispatchMock} />
    );
    const labelElement = getByTestId("todo-item-label");
    fireEvent.doubleClick(labelElement);
    const inputElement = getByTestId("text-input");
    fireEvent.change(inputElement, { target: { value: "" } });
    fireEvent.keyDown(inputElement, { key: "Enter", code: "Enter" });
    expect(dispatchMock).toHaveBeenCalledWith({
      type: REMOVE_ITEM,
      payload: { id: 1 },
    });
  });
});
