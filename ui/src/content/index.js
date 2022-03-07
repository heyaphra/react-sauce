import { lazy } from "react";
import { withSuspense } from "../components"

export const { HelloMdx } = resolveNamedExports();

function resolveNamedExports() {
    const modules = import.meta.glob("./*.mdx");
    const namedExports = {};
    for (const path in modules) {
        const splitPath = path.split("/");
        const exportName = splitPath[splitPath.length - 1].split(".")[0];
        namedExports[exportName] = withSuspense({
            Component: lazy(async () => (await modules[path]())),
        })
    }

    return namedExports;
}
