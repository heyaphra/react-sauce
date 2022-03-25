import { BrowserRouter, Route, Routes } from "react-router-dom";
import { routes } from "./routes";
import { connect } from "../context";
import { SineWaveSpinner, SidebarMenu } from "../components";

export const Router = connect((props) => {
  return (
    <div className="layout-wrapper">
      <div className="layout-header-wrapper">
        <div className="max-width-wrapper">
          <div className="header-wrapper">
            <div className="header-left">
              <div className="site-logo">
                <div>
                  <SineWaveSpinner
                    amplitude={12}
                    period={-1}
                    speed={1}
                    strokeWidth={0.5}
                    style={{
                      width: "50px",
                      height: "50px",
                    }}
                    loadingTextTop={props.loadingTextTop}
                    loadingTextBottom={props.loadingTextBottom}
                  />
                </div>

                <div>aphra.link</div>
              </div>
              <nav className="site-navigation"></nav>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
               <SidebarMenu />
            </div>
          </div>
        </div>
      </div>
      <BrowserRouter>
        <Routes>
          {routes.map(({ path, View }) => {
            return (
              <Route
                key={path}
                exact
                path={path}
                element={<View {...props} />}
              />
            );
          })}
        </Routes>
      </BrowserRouter>
    </div>
  );
});
