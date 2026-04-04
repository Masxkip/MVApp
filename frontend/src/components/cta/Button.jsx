// src/components/ui/Button.jsx
import React from "react";

const baseButtonClass =
  "inline-flex items-center justify-center rounded-[6px] bg-[#f75a05] px-10 py-4 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-black";

export default function Button({
  href,
  children,
  className = "",
  type = "button",
  ...props
}) {
  const classes = `${baseButtonClass} ${className}`.trim();

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={classes} {...props}>
      {children}
    </button>
  );
}