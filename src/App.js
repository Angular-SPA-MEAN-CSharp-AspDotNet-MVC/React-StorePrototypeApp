import React, { Component } from "react";
import Navbar from "./components/navbar";
import Counters from "./components/counters";
import NavBar from "./components/navbar";
import Posts from "./components/Posts.jsx";
import PostForm from "./components/Postform.jsx";
import { Provider } from "react-redux";
//import { createStore, applyMiddleware } from "redux";
import store from "./store";

import "./App.css";

//const store = createStore(() => [], {}, applyMiddleware());

class App extends Component {
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
      <React.Fragment>
        <NavBar
          totalCounters={this.state.counters.filter(c => c.value > 0).length}
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onDelete={this.handleDelete}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
          />
          <Provider store={store}>
            <h1>Redux Project Area Below:</h1>
            <PostForm />
            <hr />
            <Posts />
          </Provider>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
