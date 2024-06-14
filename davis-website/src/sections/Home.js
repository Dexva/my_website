import { useRef } from "react";
import '../styles/All.css';
import '../styles/Home.css';
import AboutMe from './AboutMe';
import Science from './Science';
import Code from './Code';
import Photography from './Photography';
import Blog from './Blog';
import Contact from './Contact';

function Home() {
  const about = useRef(null);
  const science = useRef(null);
  const code = useRef(null);
  const photography = useRef(null);
  const blog = useRef(null);
  const contact = useRef(null);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  }


  return (
    <div>

      <div className="Landing">
        <div className="TitleWrapper">
          <h1 className="Title typewriter">davis_magpantay</h1>
        </div>
        <div className="Links">
          <div className="center-flex">
            <div onClick={() => scrollToSection(science)} className="title-link unselectable">science.</div>
            <div onClick={() => scrollToSection(code)} className="title-link unselectable">code.</div>
            <div onClick={() => scrollToSection(photography)} className="title-link unselectable">photography.</div>
            <div onClick={() => scrollToSection(blog)} className="title-link unselectable">blog.</div>
            <div onClick={() => scrollToSection(contact)} className="title-link unselectable">contact.</div>
          </div>
        </div>
      </div>

      <div ref={about}>
        <AboutMe />
      </div>

      <br />

      <div ref={science}>
        <Science />
      </div>

      <br />

      <div ref={code}>
        <Code />
      </div>

      <br />

      <div ref={photography}>
        <Photography />
      </div>

      <br />

      <div ref={blog}>
        <Blog />
      </div>

      <br />

      <div ref={contact}>
        <Contact />
      </div>
      
    </div>
  );
}

export default Home;
