import { brands } from '../data.js';

export default function Brand() {
  return (
    <section className="brand section" aria-label="Trusted by">
      {brands.map((b) => (
        <img key={b.name} src={b.src} alt={b.name} />
      ))}
    </section>
  );
}
