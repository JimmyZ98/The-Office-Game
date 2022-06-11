import "./App.scss";
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import GamePage from "./pages/GamePage/GamePage";
import IntroPage from "./pages/IntroPage/IntroPage";
import LeaderboardPage from "./pages/LeaderboardPage/LeaderboardPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={IntroPage} />
          <Route path="/game" component={GamePage} />
          <Route path="/leaderboard" component={LeaderboardPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
