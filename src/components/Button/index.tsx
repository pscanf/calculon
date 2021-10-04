import React from "react";
import "./index.css";

interface Props {
    className?: string;
    onClick: () => void;
    children: React.ReactNode;
}

export default function Button(props: Props) {
    return (
        <div
            className={`Button ${props.className ?? ""}`}
            onClick={() => props.onClick()}
        >
            {props.children}
        </div>
    );
}
