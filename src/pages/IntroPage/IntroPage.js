import React from "react";
import { Link } from "react-router-dom";
import "./IntroPage.scss";

function IntroPage() {
  return (
    <div className="intro"> 
      <div className="intro__rules rules">
        <h2 className="intro__title">Rules</h2>
        <p className="intro__rules-text">
          The objective of the game is to identify the character who made the
          quote!
        </p >
        <p className="intro__rules-text">Quotes will show up on the screen.</p>
        <p className="intro__rules-text">You will have 10 seconds to select your answer.</p>
        <p className="intro__rules-text">The faster you answer, the more points you will get.</p>
        <p className="intro__rules-text">Have fun!</p>
      </div>
      <Link to="/game" className="intro__play">
        Play
      </Link>
    </div>
  );
}

export default IntroPage;
