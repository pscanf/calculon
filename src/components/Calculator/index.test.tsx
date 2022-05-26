import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Calculator from "./";

test("when the user clicks a digit button, should call the passed-in onDigitClick function with the correct digit", () => {
    // Setup
    const onDigitClickSpy = jest.fn();
    render(
        <Calculator
            onOperatorClick={jest.fn()}
            onDigitClick={onDigitClickSpy}
            expression={"expression"}
            result={"result"}
        />
    );

    // Exercise
    userEvent.click(screen.getByText("0"));

    // Verify
    expect(onDigitClickSpy).toHaveBeenCalledTimes(1);
    expect(onDigitClickSpy).toHaveBeenCalledWith("0");
});
