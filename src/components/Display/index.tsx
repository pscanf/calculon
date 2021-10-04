import { ReactNode } from "react";
import "./index.css";

interface Props {
    children: ReactNode;
}

export default function Display(props: Props) {
    return (
        <div className="Display" data-testid="Display">
            {props.children}
        </div>
    );
}
