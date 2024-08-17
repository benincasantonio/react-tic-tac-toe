export default function HistorySelection({
  history,
  jumpTo,
}: {
  history: (null | "X" | "O")[][];
  jumpTo: (step: number) => void;
}) {
  const moves = history.map((_step, move) => {
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>
          {move ? `Go to move #${move}` : "Go to game start"}
        </button>
      </li>
    );
  });
  return <ol>{moves}</ol>;
}
