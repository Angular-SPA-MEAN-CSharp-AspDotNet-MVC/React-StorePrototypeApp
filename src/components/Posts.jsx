import React, { Component } from "react";

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: []
    };
  }
  componentWillMount() {
    console.log(123);
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(res => res.json())
      .then(data => this.setState({ post: data }));
  }

  render() {
    const postItems = this.state.post.map(post => (
      <div key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </div>
    ));
    return <div>{postItems}</div>;
  }
}

export default Posts;
