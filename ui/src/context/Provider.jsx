import React, { Component } from "react";
import { Context } from ".";

class Provider extends Component {
  state = {
    passedDownFromProvider: "ฅ^•ﻌ•^ฅ",
  };

  async componentDidMount() {
    const res = await fetch(`/api/v1/status`);
    this.setState({ apiStatus: `${res.status} ${res.statusText}` });
  }

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export { Provider };
