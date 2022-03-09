import { Suspense } from "react";

export function withSuspense({ Component, Fallback }) {
  const ComponentWithSuspense = (props) => {
    return (
      <Suspense fallback={<Fallback {...props} />}>
        <Component {...props} />
      </Suspense>
    );
  };

  return ComponentWithSuspense;
}
