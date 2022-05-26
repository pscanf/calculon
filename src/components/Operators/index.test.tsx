import { getAllByRole, render, screen } from "@testing-library/react";
import Operator from "../../entities/Operator";
import Operators from "./";

test("renders a button for each operator", () => {
    // Setup SUT
    const { container } = render(<Operators onClick={jest.fn()} />);

    // Verify
    expect(getAllByRole(container, "button")).toHaveLength(
        Object.values(Operator).length
    );
    expect(screen.getAllByRole("button")).toHaveLength(
        Object.values(Operator).length
    );
});
