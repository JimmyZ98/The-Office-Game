import axios from "axios";
import { Component } from "react";
import ClockCounter from "../../components/ClockCounter/ClockCounter";
import FinalScore from "../../components/FinalScore";
import Header from "../../components/Header/Header";
import Options from "../../components/Options/Options";
import Quote from "../../components/Quote/Quote";

class GamePage extends Component {
  state = {
    timer: 10,
    score: "",
    questionArr: [],
    currentQuestion: "",
    index: 0,
    options: [],
    answer: null,
  };

  // maybe a question counter state??

  handleAnswerOptionClick = (e) => {
    if (this.state.index < 5) {
      this.setState({
        index: this.state.index + 1
      });
    }
    axios.post(`http://localhost:8080/game/check${this.state.currentQuestion.id}`, {
      answer: e.target.value,
      timer: this.state.timer
    })
      .then(res => {
        this.setState({
          score: res.data,
          timer: 10
        })
      })
      .catch(err => {
        console.log(err)
      })
    // if (this.state.index === 5) {
      // input 5 and input name, leaderboard
      // index = 0, return homepage
    // }
  };

  componentDidMount() {
    axios.get('http://localhost:8080/game/start')
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
        <Header />
        {this.state.index < 5 ?
          <div>
            <ClockCounter timer={this.state.timer} score={this.state.score} />
            <Quote quote={this.state.currentQuestion?.quote || ""} />
            <Options
              options={this.state.currentQuestion?.options || ""}
              handleAnswerOptionClick={this.handleAnswerOptionClick}
            />
          </div>
          :
          <FinalScore score={this.state.score} />
        }
      </div>
    );
  }
}

export default GamePage;
