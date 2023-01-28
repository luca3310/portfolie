import "../styles/Project.css";

function Project(prompt) {
  return (
    <div className="project">
      <div className="imgbx">
        <img src="/images/image.jpg" alt="projectImage" />
      </div>
      <div className="content">
        <div className="details">
          <h1>{prompt.titel}</h1>
          <ul>
            {prompt.ider.map((ider, index) => {
              return <li key={index}>{ider}</li>;
            })}
          </ul>
          <p>
            {prompt.tekst} <a href="https://www.google.dk/">visit here</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Project;
