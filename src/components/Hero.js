import "../styles/Hero.css";

const Hero = function () {
  return (
    <section className="heroSection">
      <div className="heroContainer">
        <h1 className="name">
          hello, my name is <span>Lucas Kragh </span>
        </h1>
        <div className="wrapper">
          <div className="static-txt">and I do</div>
          <ul className="dynamic-txts">
            <li>
              <span>Frontend Development</span>
            </li>

            <li>
              <span>UX and UI Design</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
export default Hero;
