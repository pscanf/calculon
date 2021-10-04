import "./App.css";
import Calculator from "./components/Calculator";
import useCalculator from "./hooks/useCalculator";

export default function App() {
    const { expression, result, appendToExpression } = useCalculator();
    return (
        <div className="App" data-testid="App">
            <Calculator
                expression={expression}
                result={result}
                onDigitClick={appendToExpression}
                onOperatorClick={appendToExpression}
            />
        </div>
    );
}
