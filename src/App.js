import React, { Component } from "react";
import FirstComponent from "./components/first";
import ChildrenComponent from "./components/children";
import ExpressionComponent from "./components/expression";
import "./App.css";

const VIEW = {
  first: "first",
  children: "children",
  expressions: "expressions"
};
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { view: VIEW.first };
  }
  getView() {
    switch (this.state.view) {
      case VIEW.first: {
        return <FirstComponent />;
      }
      case VIEW.children: {
        return <ChildrenComponent />;
      }
      case VIEW.expressions: {
        return <ExpressionComponent />;
      }
      default: {
        return <div>No Matching View Found</div>;
      }
    }
  }
  render() {
    return (
      <div className="App">
        <div className="">
          <p>Check the source code of each in src/components directory</p>
          <div>
            <h3>Notes:</h3>
            <ul>
              <li>Do not touch App.js</li>
              <li>
                Read about JSX :
                <a href="https://reactjs.org/docs/introducing-jsx.html">
                  https://reactjs.org/docs/introducing-jsx.html
                </a>
              </li>
              <li>
                Have a look on above document, Make some change in the components code(src/components) and see how its
                being displayed in the browser
              </li>
            </ul>
          </div>
          <ul className="menu">
            <li>
              <a
                onClick={() => {
                  this.setState({ view: VIEW.first });
                }}>
                JSX - first.jsx
              </a>
            </li>
            <li>
              <a
                onClick={() => {
                  this.setState({ view: VIEW.children });
                }}>
                JSX Children - children.jsx
              </a>
            </li>
            <li>
              <a
                onClick={() => {
                  this.setState({ view: VIEW.expressions });
                }}>
                Jsx expressions - expression.jsx
              </a>
            </li>
          </ul>
          {this.getView()}
        </div>
      </div>
    );
  }
}

export default App;
