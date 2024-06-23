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
          <h3 className="headline-description HalfDiv">I love to do science, code stuff, and take photos. Welcome to my site!</h3>
        </div>
        <div className="RightAbout HalfDiv">
          <img src={MyPhoto} alt="This is me!" className="image"/>
        </div>
      </div>

    </div>
  );
}

export default AboutMe;
