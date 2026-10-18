import Feature from '../components/Feature.jsx';
import { futureFeatures } from '../data.js';

export default function Features() {
  return (
    <section className="section features" id="features">
      <div className="features__heading">
        <h2 className="gradient__text">The Future is Now and You Just Need To Realize It. Step into Future Today &amp; Make it Happen.</h2>
        <a href="#signup" className="accent-link">Request Early Access to Get Started</a>
      </div>
      <div className="features__list">
        {futureFeatures.map((f) => (
          <Feature row key={f.title} title={f.title} text={f.text} />
        ))}
      </div>
    </section>
  );
}
