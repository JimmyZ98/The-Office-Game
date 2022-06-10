import { Component } from "react";
import ClockCounter from "../../components/ClockCounter/ClockCounter";
import Header from "../../components/Header/Header";
import Options from "../../components/Options/Options";
import Quote from "../../components/Quote/Quote";

class GamePage extends Component {
  state = {
    timer: {},
    score: {},
    quote: {},
    options: {},
    answer: {},
  };

  render() {
    return (
      <div className="wrapper">
        <Header />
        <ClockCounter />
        <Quote />
        <Options />
      </div>
    );
  }
}

export default GamePage;
