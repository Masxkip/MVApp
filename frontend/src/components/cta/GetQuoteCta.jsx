// ================================================
// File: src/components/cta/GetQuoteCta.jsx
// ================================================
import { NavLink } from "react-router-dom";

export default function GetQuoteCta({
  headlineTop = "Ready to get moving?",
  headlineBottom = "Get your free quote",
  buttonText = "Start your quote",
  to = "/quote",
  bgClass = "bg-[#2E4F92]",
}) {
  return (
    <section className={`w-full ${bgClass}`}>
      <div className="mx-auto w-full max-w-6xl px-4 py-8 md:px-23 md:py-11">
        {/* CHANGED: md:gap-4 -> md:gap-3 (moves button closer on desktop) */}
        <div className="mx-auto flex w-full flex-col items-center gap-6 md:w-fit md:flex-row md:items-center md:gap-0">
          <h2 className="text-center font-brand font-extrabold uppercase leading-[0.95] tracking-wide text-white md:text-left">
            <span className="block text-[1.65rem] md:hidden">{headlineTop}</span>
            <span className="mt-2 block text-[1.65rem] md:hidden">
              {headlineBottom}
            </span>

            <span className="hidden text-[2.8rem] md:block">
              {headlineTop} {headlineBottom}
            </span>
          </h2>

          {/* Kept: your placement rules */}
          <div className="shrink-0 -mt-0 md:-mt-10">
            <NavLink
              to={to}
              // CHANGED: swapped CTA link styling to match your other button
              className={[
                "rounded-xl bg-[#050504] px-4 py-4 text-center font-brand text-[1rem]  uppercase text-white",
                "transition-transform duration-150 hover:scale-[1.01] hover:bg-[white] hover:text-black",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white",
                "active:scale-[0.99]",
              ].join(" ")}
            >
              {buttonText}
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
}