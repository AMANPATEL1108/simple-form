import React, { Component } from "react";

class LisfecycleB extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "AMAN",
    };
    console.log(" LifeCycleB constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("LifeCycleB getDerivedStateFromProps");
    return null;
  }
  componentDidMount() {
    console.log("LifeCycleB componentDidMount");
  }

  shouldComponentUpdate() {
    console.log("LifeCycleB shouldComponentUpdate");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("LifeCycleB getSnapshotBeforeUpdate");
    return null;
  }

  componentDidUpdate() {
    console.log("LifeCycleB componentDidUpdate");
    return null;
  }
  render() {
    console.log("LifeCycleA render");
    return <div>LifeCycle B</div>;
  }
}

export default LisfecycleB;
