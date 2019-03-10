import React, { Component } from "react";

// use the Stateless Functional Component
const NavBar = props => {
  return (
    <React.Fragment>
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="#">
          Navbar{" "}
          <span className="badge badge-secondary badge-pill">
            {props.totalCounters}
          </span>
        </a>
      </nav>
    </React.Fragment>
  );
};

/*
class NavBar extends Component {
  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-light bg-light">
          <a className="navbar-brand" href="#">
            Navbar{" "}
            <span className="badge badge-secondary badge-pill">
              {this.props.totalCounters}
            </span>
          </a>
        </nav>
      </React.Fragment>
    );
  }
}
*/

export default NavBar;
