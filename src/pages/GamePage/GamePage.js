import { Component } from "react";
import ClockCounter from "../../components/ClockCounter/ClockCounter";
import Header from "../../components/Header/Header";
import Options from "../../components/Options/Options";
import Quote from "../../components/Quote/Quote";
import sample from "../../data/sample.json";

class GamePage extends Component {
  state = {
    timer: 10,
    score: "",
    quote: "",
    questions: [],
    options: [],
    answer: null,
  };

  // maybe a question counter state??

  updateScore() {
    this.setState({
      score: "hello"
    })
  }

  componentDidMount() {
    const sampleArr = sample;
    this.setState({
      questions: sampleArr,
      quote: sampleArr[0],
      options: ["Michael", "Pam", "Creed", "Kevin"],
    });
  }

  componentDidUpdate(prevProps) {
    console.log(this.props)
  }

  render() {
    return (
      <div className="wrapper">
        <Header />
        <ClockCounter timer={this.state.timer} score={this.state.score} />
        <Quote quote={this.state.quote.content} />
        <Options options={this.state.options} updateScore={this.updateScore} />
      </div>
    );
  }
}

export default GamePage;
