import '../styles/All.css';
import '../styles/Science.css';



function Science() {
  return (
    <div>
      <div className="Science Section">
        <h1 className="header"># science.</h1>
        <div className="LeftScience">
          <div className="TabWrapper">
            <ul className="Tab">chemistry</ul>
            <ul className="Tab">modeling</ul>
            <ul className="Tab">informatics</ul>
            <ul className="Tab">engineering</ul>
          </div>
        </div>
        <div className="RightScience">
        </div>
      </div>
    </div>
  );
}

export default Science;
