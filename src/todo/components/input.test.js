import React from "react";
import { render,fireEvent } from "@testing-library/react";
import { Input } from "./input";
import "@testing-library/jest-dom/extend-expect";

describe("Input", () => {
  it("renders correctly", () => {
    const { asFragment } = render(
        <Input />
    );
    expect(asFragment()).toMatchSnapshot();
  });
  it('calls onSubmit function with input when Enter key is pressed', () => {
    const onSubmitMock = jest.fn();
    const { getByTestId } = render(<Input onSubmit={onSubmitMock} />);
    const inputElement = getByTestId('text-input');
    fireEvent.change(inputElement, { target: { value: 'Test Todo' } });
    fireEvent.keyDown(inputElement, { key: 'Enter', code: 'Enter' });
    expect(onSubmitMock).toHaveBeenCalledWith('Test Todo');
  });
  it('calls onBlur function when input loses focus', () => {
    const onBlurMock = jest.fn();
    const { getByTestId } = render(<Input onBlur={onBlurMock} />);
    const inputElement = getByTestId('text-input');

    fireEvent.blur(inputElement);
    expect(onBlurMock).toHaveBeenCalled();
  });
});
