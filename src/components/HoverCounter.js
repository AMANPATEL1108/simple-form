import React, { Component } from "react";
import withCounter from "./WithCounter";
import ClickCounter from "./ClickCounter";

class HoverCounter extends Component {
  //   constructor(props) {
  //     super(props);

  //     this.state = {
  //       count: 0,
  //     };
  //   }

  //   incrementCount = () => {
  //     this.setState((prevState) => {
  //       return { count: prevState.count + 1 };
  //     });
  //   };
  render() {
    const { count, incrementCount } = this.props;
    return <div onMouseMove={incrementCount}>Hovered{count} Times</div>;
  }
}
export default withCounter(HoverCounter, 10);
