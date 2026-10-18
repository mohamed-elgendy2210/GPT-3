export default function Article({ image, alt, date, title, featured = false }) {
  return (
    <article className={`article${featured ? ' article--featured' : ''}`}>
      <img className="article__img" src={image} alt={alt} loading="lazy" />
      <div className="article__body">
        <div>
          <time>{date}</time>
          <h3>{title}</h3>
        </div>
        <a href="#blog">Read Full Article</a>
      </div>
    </article>
  );
}
