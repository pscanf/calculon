import Operator from "../../entities/Operator";
import Button from "../Button";
import "./index.css";

interface Props {
    onClick: (operator: Operator) => void;
}
export default function Operators(props: Props) {
    return (
        <div className="Operators" data-testid="Operators">
            {Object.values(Operator).map((operator) => (
                <Button
                    className="Operator"
                    data-testid={`Operator_${operator}`}
                    key={operator}
                    onClick={() => props.onClick(operator)}
                >
                    {operator}
                </Button>
            ))}
        </div>
    );
}
