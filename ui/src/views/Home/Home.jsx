import { Component } from "react";
import { HeyAphra } from "../../components";
import { HelloMdx } from "../../content";
import logo from "../../assets/img/logo.svg";
import "./Home.css";

class Home extends Component {
  render() {
    const { props } = this;
    return (
      <div id="container">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <HeyAphra {...props} />
          <div>API: {props.apiStatus}</div>
        </header>
        <div id="test-mdx">
          <HelloMdx title="Labore culpa qui deserunt anim laborum nulla reprehenderit ad." />
        </div>
      </div>
    );
  }
}

export { Home };
