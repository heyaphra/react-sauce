import { lazy } from "react";
import { withSuspense, SineWaveSpinner } from "../components";

const resolveNamedExports = () => {
  const modules = import.meta.glob("./*.mdx");
  const namedExports = {};
  for (const path in modules) {
    const splitPath = path.split("/");
    const exportName = splitPath[splitPath.length - 1].split(".")[0];
    namedExports[exportName] = withSuspense({
      Fallback: (props) => {
        return (
          <div className="article-hero">
            <SineWaveSpinner
              className="figure"
              amplitude={12}
              period={-5}
              speed={5}
              strokeWidth={2}
              style={{
                display: "flex",
                width: "250px",
                height: "60px",
              }}
              loadingTextTop={props.loadingTextTop}
              loadingTextBottom={props.loadingTextBottom}
            />
          </div>
        );
      },
      Component: (() => {
        const Content = lazy(async () => {
          await simulatePageLoad(1500);
          return await modules[path]();
        });
        return stylize(Content);
      })(),
    });
  }
  return namedExports;
};

function stylize(Content) {
  const StylizedMdx = (props) => {
    return (
      <article>
        <div className="max-width-wrapper">
          <Content {...props} />
        </div>
      </article>
    );
  };
  return StylizedMdx;
}

function simulatePageLoad(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, ms);
  });
}

export const { HelloMdx } = resolveNamedExports();
