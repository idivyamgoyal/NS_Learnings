import React from "react";

export class MainScreen03 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  render() {
    console.log("### screen03: ", this.state.count + 1);
    return (
      <div>
        <h3>Hello from MainScreen03</h3>
        <h2>Count: {this.state.count}</h2>
      </div>
    );
  }
}
