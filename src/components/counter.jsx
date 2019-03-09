import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 1,
    tags: []
  };

  styles = {
    fontSize: 10,
    fontWeight: "bold"
  };

  /*
  constructor() {
    super(); // call the base contructor
    this.handleIncrement = this.handleIncrement.bind(this);
  }
  */

  render() {
    return (
      <React.Fragment>
        <span style={this.styles} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        {this.state.tags.length === 0 && "Please create a new tag"}
        {this.renderTags()}
      </React.Fragment>
    );
  }

  handleIncrement = () => {
    console.log("Increment Clicked", this);
  };

  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tags</p>;
    return (
      <ul>
        {this.state.tags.map(tag => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 ";
    classes += this.state.count === 0 ? "badge-warning" : "badge-primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
