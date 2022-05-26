import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import nock from "nock";
import App from "./App";

test("tracks usage by calling the POST /tracking API on each digit or operator click", async () => {
    // Setup
    const nockScope = nock("http://localhost").post("/track").reply(201);
    render(<App />);

    // Exercise
    userEvent.click(screen.getByText("0"));
    await new Promise((resolve) => setTimeout(resolve, 10));

    // Verify
    nockScope.done();
});
