import { Component } from "react";
import ClockCounter from "../../components/ClockCounter/ClockCounter";
import Header from "../../components/Header/Header";
import Options from "../../components/Options/Options";
import Quote from "../../components/Quote/Quote";
import questions from "../../data/currentGame.json";

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
    const nextQuestion = this.state.currentQuestion + 1;
    if (nextQuestion < 5) {
      this.setState({
        setCurrentQuestion: nextQuestion,
      });
    }
  };

  componentDidMount() {
    this.setState({
      currentQuestion: questions[0],
    });
    this.interval = setInterval(() => {
      if (this.state.timer > 0) {
        this.setState(({ timer }) => ({
          timer: timer - 0.5,
        }));
      }
    }, 1000);
  }

  componentDidUpdate(prevState) {
    if (prevState.index !== this.state.index && this.state.index !== 0) {
      this.setState({
        currentQuestion: questions[this.state.index],
      });
    }
  }

  render() {
    return (
      <div className="wrapper">
        <Header />
        <ClockCounter timer={this.state.timer} score={this.state.score} />
        <Quote quote={this.state.currentQuestion?.quote || ""} />
        <Options
          options={this.state.currentQuestion?.options || ""}
          handleAnswerOptionClick={this.handleAnswerOptionClick}
        />
      </div>
    );
  }
}

export default GamePage;
