import React from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChartSimple} from "@fortawesome/free-solid-svg-icons"

function Header() {
  return (
    <header className="header">
      <div className="header__nav">
        <Link to="/" className="header__logo"><h1>Turntables</h1></Link>
        <div className="header__leaderboard-container">
          <Link to="/game" className="header__leaderboard">
           Play
          </Link>
          <Link to="/leaderboard" className="header__leaderboard">
            <FontAwesomeIcon icon={faChartSimple}/>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
