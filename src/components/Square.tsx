import { useState } from "react";

export default function Square() {
    const [sign, setSign] = useState<'X' | 'O' | null>(null);

    function handleClick() {
        setSign('X');
    }

    return <button className="square" onClick={handleClick}>{sign}</button>;
}