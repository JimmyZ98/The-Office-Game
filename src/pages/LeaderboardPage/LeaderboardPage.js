import axios from "axios";
import { Component } from "react";
import "./LeaderboardPage.scss";
import { url } from '../../data/serverUrl'

class LeaderboardPage extends Component {
  state = {
    leaderboard: [],
  };

  componentDidMount() {
    axios.get(`${url}/game/leaderboard`)
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
        <h1>Leaderboard</h1>
        <ul className='ranking'>
          <li className='ranking__label'>
            <span className='ranking__rank'>#</span>
            <span className='ranking__name'>Name</span>
            <span className='ranking__score'>Score</span>
          </li>
          {!this.state.leaderboard ? "" :
            this.state.leaderboard.map((item, index) => {
              return <li key={item.id} className='ranking__item'>
                <span className='ranking__rank'>{index +1 }</span>
                <span className='ranking__name'>{item.name}</span>
                <span className='ranking__score'>{item.score}</span>
              </li>
            })}
        </ul>
      </div>
    )
  }
}

export default LeaderboardPage;
