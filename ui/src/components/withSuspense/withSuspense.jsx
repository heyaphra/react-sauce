import { Suspense } from "react";

export function withSuspense({
  Component,
  Fallback = () => <div>Loading...</div>,
}) {
  const ComponentWithSuspense = (props) => {
    return (
      <Suspense fallback={<Fallback />}>
        <Component {...props} />
      </Suspense>
    );
  };

  return ComponentWithSuspense;
}
