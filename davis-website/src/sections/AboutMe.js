import '../styles/All.css';
import '../styles/AboutMe.css';
import MyPhoto from "../assets/me.png";

function AboutMe() {
  return (
    <div>

      <div className="AboutMe Section">
        <div className="LeftAbout">
          <h1 className="headline">Hello!</h1>
          <h1 className="headline">I'm Davis :)</h1>
          <h3 className="headline-description half-screen">I’m a STEM-enthusiast who does <br />science, code, and photography. <br />
          Welcome to my website!</h3>
        </div>
        <div className="RightAbout half-screen">
          <img src={MyPhoto} alt="This is me!" className="image"/>
        </div>
      </div>

    </div>
  );
}

export default AboutMe;
