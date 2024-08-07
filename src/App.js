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
import PortalDemo from "./components/PortalDemo";
import Hero from "./components/Hero";
import ErrorBoundary from "./components/ErrorBoundary";
import ClickCounter from "./components/ClickCounter";
import HoverCounter from "./components/HoverCounter";
import ClickCounterTwo from "./components/ClickCounterTwo";
import HoverCounterTwo from "./components/HoverCounterTwo";
import User from "./components/User";
import Counter from "./components/Counter";
import ComponentC from "./components/ComponentC";
import { UserProvider } from "./components/UseContext";
class App extends Component {
  render() {
    return (
      <div className="App">
        <UserProvider value="Aman">
          <ComponentC />
        </UserProvider>

        {/* <Counter
          render={(count, incrementCount) => (
            <ClickCounterTwo count={count} incrementCount={incrementCount} />
          )}
        />

        <Counter
          render={(count, incrementCount) => (
            <HoverCounterTwo count={count} incrementCount={incrementCount} />
          )}
        /> */}
        {/* <ClickCounterTwo />
        <HoverCounterTwo /> */}
        {/* <User render={(isLoggedIn) => (isLoggedIn ? "Aman" : "Guest")} /> */}
        {/* <ClickCounter name="Aman" />
        <HoverCounter /> */}
        {/* <ErrorBoundary>
          <Hero heroName="Batman" />
        </ErrorBoundary>
        <ErrorBoundary>
          <Hero heroName="Superman" />
        </ErrorBoundary>
        <ErrorBoundary>
          <Hero heroName="Joker" />
        </ErrorBoundary> */}
        {/* <PortalDemo /> */}
        {/* <FRParentInput /> */}
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
