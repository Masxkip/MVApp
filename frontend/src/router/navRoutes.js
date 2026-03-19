
// ================================================
// File: src/router/navRoutes.js
// Flatten navData into routes list.
// ================================================
import { navData } from "../components/navbar/navData";

function assertUniqueHrefs(flat) {
  const seen = new Set();
  for (const r of flat) {
    if (seen.has(r.href)) throw new Error(`Duplicate href in navData: "${r.href}"`);
    seen.add(r.href);
  }
}

export function flattenNavData() {
  const flat = [];
  for (const item of navData) {
    flat.push({ href: item.href, title: item.label });
    for (const child of item.children ?? []) {
      flat.push({ href: child.href, title: child.label });
    }
  }
  assertUniqueHrefs(flat);
  return flat;
}

export function toRoutePath(href) {
  if (!href || href === "/") return "";
  return href.startsWith("/") ? href.slice(1) : href;
}