import axios from "axios";
import { Component } from "react";
import ClockCounter from "../../components/ClockCounter/ClockCounter";
import LeaderboardInput from "../../components/LeaderboardInput/LeaderboardInput";
import Options from "../../components/Options/Options";
import Quote from "../../components/Quote/Quote";
import "./GamePage.scss"
import { url } from '../../data/serverUrl'

class GamePage extends Component {
  state = {
    timer: 10,
    score: 0,
    questionArr: [],
    currentQuestion: 0,
    index: 0,
    options: [],
    answer: null,
  };

  handleAnswerOptionClick = (e) => {
    if (this.state.index < 5) {
      this.setState({
        index: this.state.index + 1
      });
    }
    axios.post(`${url}/game/check${this.state.currentQuestion.id}`, {
      answer: e.target.value,
      timer: this.state.timer
    })
      .then(res => {
        this.setState({
          score: this.state.score + res.data,
          timer: 10
        })
      })
      .catch(err => {
        console.log(err)
      })
  };

  componentDidMount() {
    axios.get(`${url}/game/start`)
      .then(res => {
        this.setState({
          questionArr: res.data,
          currentQuestion: res.data[0]
        })
      })
      .catch(err => {
        console.error('could not download', err)
      })
    this.interval = setInterval(() => {
      if (this.state.timer > 0) {
        this.setState(({ timer }) => ({
          timer: timer - 0.5,
        }));
      }
    }, 1000);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.index !== this.state.index && this.state.index !== 0) {
      this.setState({
        currentQuestion: this.state.questionArr[this.state.index],
      });
    }
  }

  render() {
    return (
      <div className="wrapper">
        {this.state.index < 5 ?
          <div className="game">
            <ClockCounter timer={this.state.timer} score={this.state.score} />
            <Quote quote={this.state.currentQuestion?.quote || ""} />
            <Options
              options={this.state.currentQuestion?.options || ""}
              handleAnswerOptionClick={this.handleAnswerOptionClick}
            />
          </div>
          :
          <LeaderboardInput score={this.state.score} />
        }
      </div>
    );
  }
}

export default GamePage;
