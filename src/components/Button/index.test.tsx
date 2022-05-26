import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Button from "./";

test("on user click, calls the passed-in onClick function", () => {
    // Setup mocks
    const onClick = jest.fn();
    // Setup SUT
    render(<Button onClick={onClick}>{"click me"}</Button>);

    // Exercise
    userEvent.click(screen.getByText("click me"));

    // Verify
    expect(onClick).toHaveBeenCalled();
});

test("if I pass in the string '0' as children, '0' is rendered somewhere in the component", () => {
    // Exercise
    render(<Button onClick={() => null}>{"0"}</Button>);

    // Verify
    const result = screen.queryByText("0");
    expect(result).not.toBeNull();
});
