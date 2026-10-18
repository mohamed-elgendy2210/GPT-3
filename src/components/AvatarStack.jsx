const AVATARS = [
  ['#f97316', 'A'], ['#8b5cf6', 'S'], ['#0ea5e9', 'M'],
  ['#ec4899', 'K'], ['#22c55e', 'R'], ['#eab308', 'D'],
];

export default function AvatarStack() {
  return (
    <ul className="avatars" aria-hidden="true">
      {AVATARS.map(([bg, letter]) => (
        <li key={letter} style={{ background: bg }}>{letter}</li>
      ))}
    </ul>
  );
}
