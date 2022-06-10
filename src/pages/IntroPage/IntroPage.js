import React from "react";
import { Link } from "react-router-dom";
import "./IntroPage.scss";

function IntroPage() {
  return (
    <div className="intro">
      <h1>The Office Game</h1>
      <div className="intro__rules rules">
        <h2 className="rules__title">Rules</h2>
        <p>
          The objective of the game is to identify the character who made the
          quote!
        </p>
        <p>Quotes will show up on the screen.</p>
        <p>You will have 10 seconds to select your answer.</p>
        <p>The faster you answer, the more points you will get.</p>
        <p>Have fun!</p>
      </div>
      <Link to="/game" className="intro__play">
        Play
      </Link>
    </div>
  );
}

export default IntroPage;
