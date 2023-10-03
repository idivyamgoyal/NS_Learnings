import React from "react";

let countScreen02 = 0;
export class MainScreen02 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  render() {
    console.log("### screen02: ", ++countScreen02);
    return (
      <div>
        <h3>Hello from MainScreen02</h3>
        <button
          onClick={(event) => {
            event.preventDefault();

            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Increment
        </button>
        <h2>Count: {this.state.count}</h2>
      </div>
    );
  }
}
