import React from "react";
import ReactDOM from "react-dom";
// /!\ restart (CTRL+C, npm start) if new import (?)

// Test with a function
const App = () => {
  return (
    <div>
      <h1>Hello World</h1>
    </div>
  );
};
ReactDOM.render(<App />, document.getElementById("root"));

// Test with a class
class HelloMessage extends React.Component {
  render() {
    return (
      <div>
        <p>Hello {this.props.name}</p>
      </div>
    );
  }
}
ReactDOM.render(<HelloMessage name="Laeti" />, document.getElementById("app"));

// // Refresh all the page event the hot reload is activated (by default, btw)
// if (module.hot) {
//     module.hot.accept(function () {
//         window.location.reload()
//     })
// }
