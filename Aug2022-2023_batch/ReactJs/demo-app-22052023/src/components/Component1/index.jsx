import React from "react";

export default class Component1 extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // work to be done just before or when the component is mounted for eg: whatsapp -> chat -> status - online/offline
    console.log("Component1 is mounted");
  }

  componentWillUnmount() {
    // when my whatsapp is removed from the screen, then my status should be set to offline.
    console.log("Component1 is unmounting...");
  }

  render() {
    return (
      <div>
        <h1>Hi!! This is Component1...</h1>
      </div>
    );
  }
}

// public class MySolution {
//   int abc;
//   long xyz;
//   String name = "";

//   MySolution() {

//   }

//   MySolution(int abc, long xyz, String name) {
//     this.abc = abc;
//     this.xyz = xyz;
//     this.name = name;
//   }

//   public overrideName(String newName) {
//     this.name = newName;
//   }
// }
