import React from "react";

export default class Component2 extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // work to be done just before or when the component is mounted for eg: whatsapp -> chat -> status - online/offline
    console.log("Component2 is mounted");
  }

  componentWillUnmount() {
    // when my whatsapp is removed from the screen, then my status should be set to offline.
    console.log("Component2 is unmounting...");
  }

  render() {
    return (
      <div>
        <h1>Hi!! This is Component2...</h1>
      </div>
    );
  }
}
