import { Home } from "../views";
import { useLocation, useParams } from "react-router-dom";

export const routes = [
  {
    path: "/",
    name: "home",
    View: enrichView(Home),
  },
];

function enrichView(View) {
  const EnrichedView = (props) => {
    const viewProps = {
      ...props,
      history: {
        location: useLocation(),
        params: useParams(),
      },
    };
    return <View {...viewProps} />;
  };

  return EnrichedView;
}
