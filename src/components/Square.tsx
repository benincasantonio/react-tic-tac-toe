export default function Square({
  sign,
  onClick,
}: {
  sign: null | "X" | "O";
  onClick: () => void;
}) {
  return (
    <button className="square" onClick={onClick}>
      {sign}
    </button>
  );
}
