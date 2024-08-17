import { useState } from "react";
import Board from "./components/Board";
import HistorySelection from "./components/HistorySelection";

function Game() {
  const [turn, setTurn] = useState<"X" | "O">("X");
  const [history, setHistory] = useState<(null | "X" | "O")[][]>([Array(9).fill(null)]);

  function onPlay(nextSquares: (null | "X" | "O")[]): void {
    setTurn(turn === "X" ? "O" : "X");
    setHistory([...history, nextSquares]);
  }

  const currentSquares = history[history.length - 1];

  return (
    <div className="game">
      <div className="game-board">
        <Board turn={turn} squares={currentSquares} onPlay={onPlay} />
      </div>

      <div className="game-info">
        <HistorySelection history={history} jumpTo={(step) => setHistory(history.slice(0, step + 1))} />
      </div>
    </div>
  );
}

export default Game;
