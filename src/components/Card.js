import "../styles/Card.css";

const Card = function (prompt) {
  return (
    <article className="card">
      <header className="card-header">
        <h2>{prompt.titel}</h2>
        <p>{prompt.tekst}</p>
      </header>
      <div className="card-author">
        <div className="author-avatar">{prompt.svg}</div>
      </div>
    </article>
  );
};

export default Card;
