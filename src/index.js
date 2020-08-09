import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.css";
import * as serviceWorker from "./serviceWorker";

class App2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0, increment: "" };
  }
  handleClick = () => {
    const incrementNum = parseInt(this.state.increment);
    if (Number.isNaN(incrementNum))
      return this.setState({ counter: this.state.counter });

    this.setState(
      //{ counter: this.state.counter + incrementNum } or below one
      (prevState, prevProps) => ({ counter: prevState.counter + incrementNum }),
      () => console.log(this.state.counter)
    );
  };
  componentDidMount() {
    console.log("componentDidMount!");
  }
  componentDidUpdate() {
    console.log("componentDidUpdate!");
  }
  render() {
    console.log("render!");
    return (
      <React.Fragment>
        <div className="container">
          <form
            className="form-inline"
            onSubmit={event => event.preventDefault()}
          >
            <div className="form-group mb-2">
              <h1 style={{ color: "yellow" }}>{this.state.counter}</h1>
            </div>
            <div className="form-group mx-sm-3 mb-2">
              <input
                type="text"
                onChange={e => this.setState({ increment: e.target.value })}
                className="form-control mb-2 mr-sm-2"
                id="inlineFormInputName2"
                placeholder="increment number"
              />
            </div>
            <button
              type="submit"
              onClick={this.handleClick}
              className="btn btn-primary mb-2"
            >
              Click
            </button>
          </form>
        </div>
      </React.Fragment>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
