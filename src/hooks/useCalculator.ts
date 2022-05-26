import axios from "axios";
import { useState } from "react";
import Digit from "../entities/Digit";
import Operator from "../entities/Operator";

export default function useCalculator() {
    const [expression, setExpression] = useState("");
    const [result, setResult] = useState("");
    return {
        appendToExpression(operatorOrDigit: Operator | Digit) {
            axios.post("/track", { operatorOrDigit }).catch((err) => {
                console.error("Error tracking appendToExpression");
                console.error(err);
            });
            if (operatorOrDigit === Operator.Clear) {
                setExpression("");
                setResult("");
            } else if (operatorOrDigit === Operator.Equals) {
                // eslint-disable-next-line no-eval
                setResult(eval(expression));
            } else {
                setExpression(`${expression}${operatorOrDigit}`);
            }
        },
        expression,
        result,
    };
}
