// File: src/components/hero/PageHero.jsx
import React from "react";

/**
 * PageHero
 * - For inner pages (About, Contact, Quote, etc.)
 *
 * Props:
 * - title: string | ReactNode
 * - subtitle?: string | ReactNode
 * - bgImage?: string (URL or local)
 * - overlay?: boolean
 * - overlayClassName?: string
 * - align?: "left" | "center"
 * - heightClassName?: string
 */
export default function PageHero({
  title,
  subtitle,
  bgImage,
  overlay = true,
  overlayClassName = "bg-black/55",
  align = "left",
  heightClassName = "min-h-[34vh] md:min-h-[38vh]",
}) {
  const alignClasses =
    align === "center"
      ? "items-center text-center"
      : "items-end text-left";

  return (
    <section
      className={`relative w-full font-brand bg-cover bg-center ${heightClassName}`}
      style={bgImage ? { backgroundImage: `url('${bgImage}')` } : undefined}
    >
      {/* Fallback background when no image */}
      {!bgImage && <div className="absolute inset-0 bg-neutral-950" />}

      {overlay && <div className={`absolute inset-0 ${overlayClassName}`} />}

      <div className={`relative mx-auto flex h-full max-w-6xl px-5 py-10 sm:px-8 md:px-10 ${alignClasses}`}>
        <div className="w-full max-w-3xl">
          <h1 className="font-brand text-4xl font-extrabold uppercase leading-[1.02] text-white sm:text-5xl md:text-6xl">
            {title}
          </h1>

          {subtitle ? (
            <p className="mt-3 max-w-2xl text-sm font-semibold tracking-wide text-white sm:text-base md:text-lg">
              {subtitle}
            </p>
          ) : null}

          {/* Accent underline like brand vibe */}
          <div className="mt-5 h-[3px] w-24 bg-[#ffffff]" />
        </div>
      </div>
    </section>
  );
}






