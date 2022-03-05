import { HeyAphra } from "../../components";
import logo from "../../assets/img/logo.svg";
import "./Home.css";

function Home(props) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <HeyAphra {...props} />
      </header>
    </div>
  );
}

export { Home };
