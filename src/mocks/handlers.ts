import { rest } from "msw";
import Digit from "../entities/Digit";
import Operator from "../entities/Operator";

interface Tracking {
    operatorOrDigit: Operator | Digit;
}

const handlers = [
    rest.post<Tracking>("/track", (req, res, ctx) => {
        const trackings: Tracking[] = JSON.parse(
            sessionStorage.getItem("trackings") ?? "[]"
        );
        sessionStorage.setItem(
            "trackings",
            JSON.stringify([...trackings, req.body])
        );
        return res(ctx.status(200));
    }),
];
export default handlers;
