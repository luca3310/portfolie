import "../styles/Card.css";

const Card = function () {
  return (
    <article className="card">
      <header className="card-header">
        <h2>Never forget</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </header>
      <div className="card-author">
        <div className="author-avatar">
          <img alt="" src="images/image.jpg" />
        </div>
        <svg className="half-circle" viewBox="0 0 106 57">
          <path d="M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4"></path>
        </svg>
      </div>
    </article>
  );
};

export default Card;
