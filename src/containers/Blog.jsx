import Article from '../components/Article.jsx';
import { articles } from '../data.js';

export default function Blog() {
  return (
    <section className="section blog" id="blog">
      <h2 className="gradient__text">A lot is happening,<br />We are blogging about it.</h2>
      <div className="blog__grid">
        {articles.map((a, i) => (
          <Article key={a.id} {...a} featured={i === 0} />
        ))}
      </div>
    </section>
  );
}
