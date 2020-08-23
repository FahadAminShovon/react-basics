import React, { Component } from "react";

class Follow extends Component {
  constructor() {
    super();
    this.state = {
      add: 0,
    };
  }

  increment = () =>{
      this.setState({add: this.state.add+1})
  }

  render() {
    return (
      <>
        <h1>{this.state.add} persons Follow you</h1>
        <button onClick={this.increment}>Follow</button>
      </>
    );
  }
}
// function Follow() {
//     return(
//     )
// }

export default Follow;
