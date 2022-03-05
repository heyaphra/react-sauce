import "./HeyAphra.css";

function HeyAphra(props) {
  const { passedDownFromProvider } = props;
  return <p>Home Page :: {passedDownFromProvider}</p>;
}

export { HeyAphra };
