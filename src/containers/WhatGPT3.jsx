import Feature from '../components/Feature.jsx';
import { whatIs, whatFeatures } from '../data.js';

export default function WhatGPT3() {
  return (
    <section className="section whatgpt3" id="what-is-gpt3">
      <Feature row title={whatIs.title} text={whatIs.text} as="h2" />
      <div className="whatgpt3__heading">
        <h2 className="gradient__text">The possibilities are beyond your imagination</h2>
        <a href="#blog" className="accent-link">Explore The Library</a>
      </div>
      <div className="whatgpt3__grid">
        {whatFeatures.map((f) => (
          <Feature key={f.title} title={f.title} text={f.text} />
        ))}
      </div>
    </section>
  );
}
