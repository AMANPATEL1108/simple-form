import React, { Component } from "react";
import LisfecycleB from "./LifecycleB";

class LisfecycleA extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "AMAN",
    };
    console.log(" LifeCycleA constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("LifeCycleA getDerivedStateFromProps");
    return null;
  }
  componentDidMount() {
    console.log("LifeCycleA componentDidMount");
  }

  shouldComponentUpdate() {
    console.log("LifeCycleA shouldComponentUpdate");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("LifeCycleA getSnapshotBeforeUpdate");
    return null;
  }

  componentDidUpdate() {
    console.log("LifeCycleA componentDidUpdate");
    return null;
  }

  changeState = () => {
    this.setState({ name: "CODE EVOLUTION" });
  };

  render() {
    console.log("LifeCycleA render");
    return (
      <div>
        return <div>LifeCycle A</div>
        <LisfecycleB />
        <button onClick={this.changeState}>Change State</button>
      </div>
    );
  }
}

export default LisfecycleA;
