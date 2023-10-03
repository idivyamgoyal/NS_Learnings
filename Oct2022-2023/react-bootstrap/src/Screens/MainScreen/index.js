import React from "react";

let renderCount = 0;
export class MainScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      countButtonClicked: 0,
      // renderCount: 0,
    };

    // way of telling a method about the self instance of the class and binding "this" keyword to the method
    this.onIncrement = this.onIncrement.bind(this);
    this.onDecrement = this.onDecrement.bind(this);
  }

  onIncrement(event) {
    event.preventDefault();
    console.log("### button is clicked!: ", this.state.countButtonClicked);

    // state is not directly mutable - we cannot change a state directly
    // this is wrong way
    // this.state.countButtonClicked = 10;

    // this is correct method
    this.setState({
      countButtonClicked: this.state.countButtonClicked + 1,
    });
    console.log("### updated value: ", this.state.countButtonClicked);
  }

  // this method is used for bind
  onDecrement(event) {
    event.preventDefault();

    this.setState({
      countButtonClicked: this.state.countButtonClicked - 1,
    });
  }

  onDecrement02 = (event) => {
    event.preventDefault();

    this.setState({
      countButtonClicked: this.state.countButtonClicked - 1,
    });
  };

  // lifecycle methods
  // this function will be called the very first time during screen rendering
  componentDidMount() {
    console.log("### screen01 mounted");
  }

  // this function will only be called when component will be removed/unmounted from the screen
  // clear-up function
  componentWillUnmount() {
    console.log("### screen01 unmounted");
  }

  render() {
    console.log("### screen01: ", ++renderCount);

    return (
      <div>
        <h3>Hello from MainScreen</h3>
        <button onClick={this.onIncrement}>Increment</button>
        <h2>{this.state.countButtonClicked}</h2>
        <button onClick={this.onDecrement02}>Decrement</button>
      </div>
    );
  }
}
