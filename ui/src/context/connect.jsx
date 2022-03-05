import { Consumer } from ".";

const connect = (Comp) => (props) =>
  (
    <Consumer>
      <Comp {...props} />
    </Consumer>
  );

export { connect };
