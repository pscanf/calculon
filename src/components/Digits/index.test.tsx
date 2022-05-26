import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Digit from "../../entities/Digit";
import Digits from "./";

test("when a digit button is clicked, the onClick prop function is called with the correct digit", () => {
    // Setup
    const onClickSpy = jest.fn();
    render(<Digits onClick={onClickSpy} />);

    // Exercise
    userEvent.click(screen.getByText("0"));

    // Verify
    expect(onClickSpy).toHaveBeenCalledTimes(1);
    expect(onClickSpy).toHaveBeenCalledWith(Digit.Zero);
});
