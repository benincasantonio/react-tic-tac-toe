import { useState } from "react";
import Board from "./components/Board";

function Game() {
  const [turn, setTurn] = useState<"X" | "O">("X");

  function onPlay(newTurn: "X" | "O"): void {
    setTurn(newTurn);
  }

  return (
    <div className="game">
      <div className="game-board">
        <Board turn={turn} onPlay={onPlay} />
      </div>
    </div>
  );
}

export default Game;
