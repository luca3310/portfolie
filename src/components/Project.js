import "../styles/Project.css";

function Project() {
  return (
    <div className="project">
      <div className="imgbx">
        <img src="/images/image.jpg" />
      </div>
      <div className="content">
        <div className="details">
          <h1>Project1</h1>
          <ul>
            <li>html</li>
            <li>css</li>
            <li>javascript</li>
          </ul>
          <p>
            this is a project about frontend devolopment <a>visit here</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Project;
