import Square from "./Square";

export default function Board() {
    return <>
        <div className="board-row">
            <Square sign='X'></Square>
            <Square sign='O'></Square>
            <Square sign='X'></Square>
        </div>
        <div className="board-row">
            <Square sign='O'></Square>
            <Square sign='X'></Square>
            <Square sign='O'></Square>
        </div>
        <div className="board-row">
            <Square sign='X'></Square>
            <Square sign='O'></Square>
            <Square sign='X'></Square>
        </div>
    </>;
}