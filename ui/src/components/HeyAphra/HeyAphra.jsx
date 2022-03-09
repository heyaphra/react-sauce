import "./HeyAphra.css";

function HeyAphra(props) {
  const { passedDownFromProvider } = props;
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div>
        <small>mjau</small>
      </div>
      <div>{passedDownFromProvider}</div>
    </div>
  );
}

export { HeyAphra };
