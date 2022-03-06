import { Component } from "react";
import { HeyAphra } from "../../components";
import logo from "../../assets/img/logo.svg";
import "./Home.css";

class Home extends Component {
  render() {
    const { props } = this;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <HeyAphra {...props} />
          <p>API: {props.apiStatus}</p>
        </header>
      </div>
    );
  }
}

export { Home };
