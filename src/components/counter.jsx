import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.value,
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
          onClick={() => this.handleIncrement()}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        {this.renderTags()}
      </React.Fragment>
    );
  }

  handleIncrement = () => {
    //console.log(product);
    this.setState({ value: this.state.value + 1 });
  };

  renderTags() {
    //if (this.state.tags.length === 0) return <p>There are no tags</p>;
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
    classes += this.state.value === 0 ? "badge-warning" : "badge-primary";
    return classes;
  }

  formatCount() {
    const { value } = this.state;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
