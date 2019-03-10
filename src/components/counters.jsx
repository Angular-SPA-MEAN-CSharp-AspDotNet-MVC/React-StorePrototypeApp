import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 3 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };

  handleDelete = counterID => {
    const countersNew = this.state.counters.filter(c => c.id !== counterID);
    this.setState({ counters: countersNew });
    //console.log("Event Handler Called", counterID);
  };

  handleReset = () => {
    console.log("handle Reset clicked");
    const countersNew = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counter: countersNew });
  };

  handleIncrement = counterIpt => {
    const counterNew = [...this.state.counters];
    const idx = counterNew.indexOf(counterIpt);
    counterNew[idx] = { ...counterIpt };
    counterNew[idx].value++;
    this.setState({ counters: counterNew });
  };

  render() {
    return (
      <div>
        <button
          className="btn btn-primary btn-sm m-2"
          onClick={this.handleReset}
        >
          Reset
        </button>
        {this.state.counters.map(counter => (
          <Counter
            key={counter.id}
            counter={counter}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
          >
            <h4>Counter #{counter.id}</h4>
          </Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
