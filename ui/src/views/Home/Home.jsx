import { Component } from "react";
import { HeyAphra, SineWaveSpinner } from "../../components";
import { HelloMdx } from "../../content";
import logo from "../../assets/img/logo.svg";
import "./Home.css";

class Home extends Component {
  render() {
    const { props } = this;
    return (
      <>
        <main className="App-header">
          <HelloMdx
            loadingTextBottom={<HeyAphra {...props} />}
            components={{
              HeyAphra: () => <HeyAphra {...props} />,
            }}
          />
        </main>
      </>
    );
  }
}

export { Home };
