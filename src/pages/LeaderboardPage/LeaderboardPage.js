import axios from "axios";
import { Component } from "react";
import "./LeaderboardPage.scss";

class LeaderboardPage extends Component {
  state = {
    leaderboard: [],
  };

  componentDidMount() {
    axios.get('http://localhost:8080/game/leaderboard')
      .then(res => {
        this.setState({
          leaderboard: res.data
        })
        console.log(res.data)
      })
      .catch(err => {
        console.error(err)
      })
  }

  render() {
    return (
      <div className="leaderboard">
        <h1>LeaderboardPage</h1>
      <ol>
        {!this.state.leaderboard ? "" : 
        this.state.leaderboard.map(item => {
          return <li key={item.id}>{item.name} - {item.score} points</li>
        })}
      </ol>
      </div>
    )
  }
}

export default LeaderboardPage;
