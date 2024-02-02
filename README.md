# Project Test Cases

This document provides an overview of the test cases in the project.

| Component | Test Cases                                                  | No of Test Cases |
| --------- | ----------------------------------------------------------- | ---------------- |
| Footer    | [Footer Component Test Cases](#footer-component-test-cases) | 4                |
| Header    | [Header Component Test Case](#header-component-test-case)   | 1                |
| Input     | [Input Component Test Cases](#input-component-test-cases)   | 3                |
| Item      | [Item Component Test Cases](#item-component-test-cases)     | 6                |
| Main      | [Main Component Test Cases](#main-component-test-cases)     | 6                |
| App       | [App Component Test Cases](#app-component-test-cases)       | 1                |


## Testing Tools Used

- [React Testing Library](https://www.npmjs.com/package/@testing-library/react)
- [@testing-library/jest-dom](https://www.npmjs.com/package/@testing-library/jest-dom)
- [@testing-library/user-event](https://www.npmjs.com/package/@testing-library/user-event)

## Command to run test cases
```bash
npm test
```

## Footer Component Test Cases

The `Footer` Component is located in [footer.jsx](/src/todo/components/footer.jsx) and test cases are in [footer.test.js](/src/todo/components/footer.test.js)

### 1. Renders correctly

- **Test Type:** Snapshot Test
- **Description:** This test verifies that the rendered `Footer` component matches the expected snapshot representation.

### 2. Displays the correct number of active todos

- **Test Type:** Integration Test
- **Description:** This test ensures that the `Footer` component displays the correct number of active todos.

### 3. Calls removeCompleted function when "Clear completed" button is clicked

- **Test Type:** Integration Test
- **Description:** This test verifies that the `removeCompleted` function is called when the "Clear completed" button is clicked. It simulates clicking the button and checks if the function has been called.

### 4. Completed tasks is disabled when there are no completed tasks

- **Test Type:** Integration Test
- **Description:** This test ensures that the "Clear completed" button is disabled when there are no completed tasks.

## Header Component Test Case

The `Header` Component is located in [header.jsx](/src/todo/components/header.jsx) and test cases are in [header.test.js](/src/todo/components/header.test.js)

### 1. Renders correctly

- **Test Type:** Snapshot Test
- **Description:** This test verifies that the rendered `Header` component matches the expected snapshot representation. It ensures that the component's UI structure remains consistent over time.

## Input Component Test Cases
The `Input` Component is located in [input.jsx](/src/todo/components/input.jsx) and test cases are in [input.test.js](/src/todo/components/input.test.js)
### 1. Renders correctly

- **Test Type:** Snapshot Test
- **Description:** This test verifies that the rendered `Input` component matches the expected snapshot representation.

### 2. Calls onSubmit function with input when Enter key is pressed

- **Test Type:** Integration Test
- **Description:** This test ensures that the `onSubmit` function is called with the input when the Enter key is pressed after entering a value in the input field.

### 3. Calls onBlur function when input loses focus

- **Test Type:** Integration Test
- **Description:** This test verifies that the `onBlur` function is called when the input field loses focus.

## Item Component Test Cases

The `Item` Component is located in [item.jsx](/src/todo/components/item.jsx) and test cases are in [item.test.js](/src/todo/components/item.test.js)

### 1. Renders the todo text

- **Test Type:** Snapshot Test
- **Description:** This test verifies that the rendered `Item` component with todo text matches the expected snapshot representation.

### 2. Toggles completion when check box is clicked

- **Test Type:** Integration Test
- **Description:** This test ensures that the `TOGGLE_ITEM` action is dispatched with the correct payload when the user clicks the checkbox associated with the todo item.

### 3. Enables editing on double click

- **Test Type:** Integration Test
- **Description:** This test verifies that the input field receives focus when the user double-click on the todo label, indicating that the user can edit the todo item.

### 4. Removes todo when delete button is clicked

- **Test Type:** Integration Test
- **Description:** This test ensures that the `REMOVE_ITEM` action is dispatched with the correct payload when the user clicks the delete button to remove a todo item.

### 5. Calls updateItem function with new title when input is submitted

- **Test Type:** Integration Test
- **Description:** This test verifies that the `UPDATE_ITEM` action is dispatched with the updated title when the user submits a new title for the todo item.

### 6. Calls removeItem function when new title is empty (This test is failing)
- **Test Type:** Integration Test
- **Description:** This test verifies that the `REMOVE_ITEM` action is dispatched when the updated new title is empty.

## Main Component Test Cases

The `Main` Component is located in [main.jsx](/src/todo/components/main.jsx) and test cases are in [main.test.js](/src/todo/components/main.test.js)

### 1. Renders the main component

- **Test Type:** Snapshot Test
- **Description:** This test verifies that the rendered `Main` component with todos matches the expected snapshot representation.

### 2. Doesn't display the toggle all button when there are no completed todos

- **Test Type:** Integration Test
- **Description:** This test ensures that the toggle all button is not displayed when there are no completed todos in the todo list.

### 3. Displays the toggle all button when there are completed todos

- **Test Type:** Integration Test
- **Description:** This test verifies that the toggle all button is displayed when there are completed todos in the todo list.

### 4. Dispatches the correct action when the toggle all button is clicked

- **Test Type:** Integration Test
- **Description:** This test ensures that the correct action `TOGGLE_ALL` is dispatched with the correct payload when the toggle all button is clicked.

### 5. Toggle all button is checked when all todos are completed

- **Test Type:** Integration Test
- **Description:** This test verifies that the toggle all button is checked when all todos in the todo list are completed.

### 6. Todo list displays the correct number of todos

- **Test Type:** Integration Test
- **Description:** This test ensures that the todo list displays the correct number of todos based on the provided todos array.

## App Component Test Cases

The `App` Component is located in [app.jsx](/src/todo/app.jsx) and test cases are in [app.test.js](/src/todo/app.test.js)

### 1. Renders the main component

- **Test Type:** Snapshot Test
- **Description:** This test verifies that the rendered `App` component with todos matches the expected snapshot representation.

