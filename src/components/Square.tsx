export default function Square({ sign }: { sign: 'X' | 'O' }) {
    return <button className="square">{sign}</button>;
}