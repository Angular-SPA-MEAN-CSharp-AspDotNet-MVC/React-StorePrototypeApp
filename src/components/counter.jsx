import React, { Component } from "react";

class Counter extends Component {
  state = {
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
        {this.props.children}
        <span style={this.styles} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm m-2"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn-danger btn-sm m-2"
        >
          Delete
        </button>
        {this.renderTags()}
      </React.Fragment>
    );
  }

  handleIncrement = () => {
    //console.log(product);
    this.setState({ value: this.props.counter.value + 1 });
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
    classes +=
      this.props.counter.value === 0 ? "badge-warning" : "badge-primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
