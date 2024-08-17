import { useState } from "react";
import Square from "./Square";

export default function Board({
  turn,
  onPlay,
}: {
  turn: "X" | "O";
  onPlay: (newTurn: "X" | "O") => void;
}) {
  const [squares, setSquares] = useState<(null | "X" | "O")[]>(
    Array(9).fill(null)
  );

  function handleClick(index: number): void {
    if (squares[index] !== null || winner !== null) {
      return;
    }
    const newSquares = squares.slice();
    newSquares[index] = turn;
    setSquares(newSquares);
    onPlay(turn === "X" ? "O" : "X");

  }

  const winner = calculateWinner(squares);
  let status: string | null = null;
  if(winner) {
    status = `Winner: ${winner}`;
  } else if(!winner && squares.every((square) => square !== null)) {
    status = "Draw!";
  } else {
    status = `Next player: ${turn}`;
  }


  return (
    <>
      <div className="status">{status}</div>
      <div className="board-row">
        <Square sign={squares[0]} onClick={() => handleClick(0)} />
        <Square sign={squares[1]} onClick={() => handleClick(1)} />
        <Square sign={squares[2]} onClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square sign={squares[3]} onClick={() => handleClick(3)} />
        <Square sign={squares[4]} onClick={() => handleClick(4)} />
        <Square sign={squares[5]} onClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square sign={squares[6]} onClick={() => handleClick(6)} />
        <Square sign={squares[7]} onClick={() => handleClick(7)} />
        <Square sign={squares[8]} onClick={() => handleClick(8)} />
      </div>
    </>
  );
}

function calculateWinner(squares: (null | "X" | "O")[]): null | "X" | "O" {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let lineIndex = 0; lineIndex < lines.length; lineIndex++) {
    const values = lines[lineIndex].map((index) => squares[index]);

    if (values.every((value) => value === "X")) {
      return "X";
    }

    if (values.every((value) => value === "O")) {
      return "O";
    }
  }

  return null;
}
