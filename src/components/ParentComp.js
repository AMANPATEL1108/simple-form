import React, { Component, PureComponent } from "react";
import RegularComp from "./RegularComp";
import MemoComp from "./MemoComp";

class ParentComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Aman",
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        name: "Aman",
      });
    }, 2000);
  }

  render() {
    console.log("***********Parent Component Render***********");
    return (
      <div>
        Parent Components
        <MemoComp name={this.state.name} />
        {/* <RegularComp name={this.state.name} />
        <PureComponent name={this.state.name} /> */}
      </div>
    );
  }
}
export default ParentComp;
