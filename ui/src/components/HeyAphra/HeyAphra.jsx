import "./HeyAphra.css";

function HeyAphra(props) {
  const { passedDownFromProvider } = props;
  return <p>Hey Aphra! {passedDownFromProvider}</p>;
}

export { HeyAphra };
