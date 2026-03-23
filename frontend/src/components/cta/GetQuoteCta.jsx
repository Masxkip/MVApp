// src/components/GetQuoteCta.jsx
import React from "react";
import { Link } from "react-router-dom";

/**
 * GetQuote CTA
 *
 * Behavior:
 * - Desktop (sm+): render ONE headline sentence (desktopText)
 * - Mobile (<sm): render TWO lines (mobileTopText + mobileMainText)
 * - Button is compact on mobile (no full-width)
 *
 * Props:
 * - desktopText: string (single sentence for desktop)
 * - mobileTopText: string (first line for mobile)
 * - mobileMainText: string (second line for mobile)
 * - to: string
 * - buttonText: string
 * - size: "md" | "lg" | "xl" (container padding)
 * - maxWidthClass: string
 * - containerClassName/innerClassName/className: Tailwind overrides
 */
export default function GetQuoteCta({
  desktopText = "READY TO GET MOVING? GET YOUR FREE QUOTE",
  mobileTopText = "READY TO GET MOVING?",
  mobileMainText = "GET YOUR FREE QUOTE",
  to = "/quote",
  buttonText = "GET YOUR QUOTE",
  size = "lg",
  maxWidthClass = "max-w-6xl",
  containerClassName = "",
  innerClassName = "",
  className = "",
}) {
  const sizeMap = {
    md: "py-6 sm:py-10 lg:py-12 px-4 sm:px-6 lg:px-12",
    lg: "py-10 sm:py-14 lg:py-16 px-4 sm:px-8 lg:px-14",
    xl: "py-14 sm:py-18 lg:py-20 px-4 sm:px-10 lg:px-16",
  };

  return (
    <section
      aria-label="Get a quote call to action"
      className={[
        "w-full bg-[#f75a05]",
        sizeMap[size] ?? sizeMap.lg,
        containerClassName,
        className,
      ].join(" ")}
    >
      <div
        className={[
          "mx-auto",
          maxWidthClass,
          "flex flex-col items-center text-center gap-6",
          "sm:flex-row sm:items-center sm:justify-between sm:text-left",
          innerClassName,
        ].join(" ")}
      >
        {/* Mobile headline (2 lines) */}
        <div className="sm:hidden flex flex-col items-center gap-2">
          <p className="m-0 text-white uppercase font-brand font-extrabold tracking-wide leading-none text-[1.2rem]">
            {mobileTopText}
          </p>
          <p className="m-0 text-white uppercase font-brand font-extrabold tracking-wide leading-[1.05] text-[1.7rem]">
            {mobileMainText}
          </p>
        </div>

        {/* Desktop headline (1 sentence) */}
        <h2 className="hidden sm:block m-0 text-white uppercase font-brand font-extrabold tracking-wide leading-[1.05] text-[1.8rem] lg:text-[2.4rem] whitespace-nowrap">
          {desktopText}
        </h2>

        {/* Button: compact on mobile (no w-full) */}
        <Link
          to={to}
          className={[
            "inline-flex items-center justify-center",
            "bg-[black] text-white font-extrabold uppercase tracking-wide",
            "px-5 py-4 rounded-2xl",
            "shadow-[0_10px_0_rgba(0,0,0,0.14)]",
            "transition-transform duration-150 hover:-translate-y-[1px] active:translate-y-0",
            "focus:outline-none focus-visible:ring-4 focus-visible:ring-white/80 focus-visible:ring-offset-4 focus-visible:ring-offset-[#294A93]",
          ].join(" ")}
        >
          {buttonText}
        </Link>
      </div>
    </section>
  );
}