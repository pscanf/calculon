import Digit from "../../entities/Digit";
import Button from "../Button";
import "./index.css";

interface Props {
    onClick: (digit: Digit) => void;
}
export default function Digits(props: Props) {
    return (
        <div className="Digits" data-testid="Digits">
            {Object.values(Digit).map((digit) => (
                <Button
                    className="Digit"
                    data-testid={`Digit_${digit}`}
                    key={digit}
                    onClick={() => props.onClick(digit)}
                >
                    {digit}
                </Button>
            ))}
        </div>
    );
}
