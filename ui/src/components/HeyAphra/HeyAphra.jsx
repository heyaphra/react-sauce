import "./HeyAphra.css";

function HeyAphra(props) {
  const { passedDownFromProvider } = props;
  return <div>{passedDownFromProvider}</div>;
}

export { HeyAphra };
