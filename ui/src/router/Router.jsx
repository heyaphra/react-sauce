import { BrowserRouter, Route, Routes } from "react-router-dom";
import { routes } from "./routes";
import { connect } from "../context";

export const Router = connect((props) => {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map(({ path, View }) => {
          return (
            <Route key={path} exact path={path} element={<View {...props}/>} />
          );
        })}
      </Routes>
    </BrowserRouter>
  );
});


