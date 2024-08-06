import logo from "./logo.svg";
import "./App.css";
import React, { Component, PureComponent } from "react";
import Form from "./components/Form";
import LisfecycleA from "./components/LisfecycleA";
import FragementDemo from "./components/FragementDemo";
import Table from "./components/Table";
import PureComponents from "./components/PureComponents";
import ParentComp from "./components/ParentComp";
import RefsDemo from "./components/RefsDemo";
import FocusInput from "./components/FocusInput";
import FRParentInput from "./components/FRParentInput";
class App extends Component {
  render() {
    return (
      <div className="App">
        <FRParentInput />
        {/* <ParentComp /> */}
        {/* <FocusInput /> */}
        {/* <RefsDemo /> */}
        {/* <ParentComp /> */}
        {/* <PureComponents /> */}
      </div>
    );
    // return (
    //   <div className="App">
    //     <Table />
    //     {/* <FragementDemo /> */}
    //     {/* <LisfecycleA /> */}
    //     {/* <Form /> */}
    //   </div>
    // );
  }
}

export default App;
