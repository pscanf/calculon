import Digit from "../../entities/Digit";
import Operator from "../../entities/Operator";
import Digits from "../Digits";
import Display from "../Display";
import Operators from "../Operators";
import "./index.css";

interface Props {
    onDigitClick: (clickedDigit: Digit) => void;
    onOperatorClick: (clickedOperator: Operator) => void;
    expression: string;
    result: string;
}

export default function Calculator(props: Props) {
    return (
        <div className="Calculator" data-testid="Calculator">
            <div className="CalculatorDisplays">
                <Display>{props.expression}</Display>
                <Display>{props.result}</Display>
            </div>
            <br />
            <div className="CalculatorButtons">
                <Digits onClick={props.onDigitClick} />
                <Operators onClick={props.onOperatorClick} />
            </div>
        </div>
    );
}
