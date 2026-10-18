export default function Feature({ title, text, as: Tag = 'h3', row = false }) {
  return (
    <div className={`feature${row ? ' feature--row' : ''}`}>
      <div className="feature__title">
        <span className="bar" aria-hidden="true" />
        <Tag>{title}</Tag>
      </div>
      <p className="feature__text">{text}</p>
    </div>
  );
}
