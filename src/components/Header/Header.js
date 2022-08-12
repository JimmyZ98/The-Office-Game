import React from "react";
import "./Header.scss";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <div className="header__nav">
        <Link to="/" className="header__logo"></Link>
        <Link to="/game" className="header__leaderboard">
          Play
        </Link>
        <Link to="/leaderboard" className="header__leaderboard">
          Leaderboard
        </Link>
      </div>
    </header>
  );
}

export default Header;
