// ================================================
// File: src/router/fileRoutes.js
// Vite file-based route loader for src/pages/**/**.jsx
//
// Conventions:
// - src/pages/moving/Index.jsx            => /moving
// - src/pages/moving/Local.jsx            => /moving/local
// - src/pages/resources/packing-tips.jsx  => /resources/packing-tips (if you name it that way)
// - Prefer PascalCase filenames. They will be kebab-cased.
// - "Index.jsx" maps to the folder route.
// ================================================
import React from "react";

function toKebabCase(input) {
  // "LongDistance" -> "long-distance"
  return input
    .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
    .replace(/_/g, "-")
    .toLowerCase();
}

function filePathToRoutePath(filePath) {
  // "../pages/moving/Local.jsx" -> "/moving/local"
  const cleaned = filePath
    .replace(/^.*\/pages\//, "") // drop everything before /pages/
    .replace(/\.jsx$/, "");

  const segments = cleaned.split("/").filter(Boolean);

  const routeSegments = segments.flatMap((seg, idx) => {
    if (idx === segments.length - 1 && seg.toLowerCase() === "index") {
      return []; // Index.jsx => folder route
    }
    return [toKebabCase(seg)];
  });

  return "/" + routeSegments.join("/");
}

export function buildFileRouteMap() {
  // Lazy load all page modules
  const modules = import.meta.glob("../pages/**/*.jsx");

  // Map "/moving/local" -> React.lazy(() => import("..."))
  const map = new Map();

  for (const [path, importer] of Object.entries(modules)) {
    const routePath = filePathToRoutePath(path);
    map.set(routePath, React.lazy(importer));
  }

  return map;
}
