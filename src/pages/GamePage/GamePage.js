import { Component } from "react";
import ClockCounter from "../../components/ClockCounter/ClockCounter";
import Header from "../../components/Header/Header";
import Options from "../../components/Options/Options";
import Quote from "../../components/Quote/Quote";
import sample from "../../data/sample.json";

class GamePage extends Component {
  state = {
    timer: 10,
    score: 0,
    quote: "",
    questions: [],
    options: [],
    answer: null,
  };

  componentDidMount() {
    const sampleArr = sample;
    this.setState({
      questions: sampleArr,
      quote: sampleArr[0],
      options: ["Michael", "Pam", "Creed", "Kevin"],
    });
  }

  render() {
    return (
      <div className="wrapper">
        <Header />
        <ClockCounter />
        <Quote quote={this.state.quote.content} />
        <Options options={this.state.options} />
      </div>
    );
  }
}

export default GamePage;
