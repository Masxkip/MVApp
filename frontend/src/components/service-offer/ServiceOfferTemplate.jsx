// ================================================
// File: src/components/service-offer/ServiceOfferTemplate.jsx
// Renders Image 1 → 2 → 3 → 4 exactly.
// ================================================
import React from "react";

export function ServiceOfferTemplate({ offer }) {
  return (
    <main className="w-full bg-white font-brand text-black">
      <Section1Split {...offer.section1} />
      <Section2Checklist {...offer.section2} />
      <Section3Steps {...offer.section3} />
      <Section4Cta {...offer.section4} />
    </main>
  );
}

function Section1Split({ image, accent, heading, paragraphs = [] }) {
  const offset = Math.max(0, Number(accent?.offsetPx ?? 18));

  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12 md:px-8 md:py-16">
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-[1fr_1fr] md:gap-14">
          <div className="relative">
            <div
              className="absolute rounded-[22px]"
              style={{
                backgroundColor: accent?.bg ?? "#ff3aa6",
                inset: 0,
                transform: `translate(${offset}px, ${offset}px)`,
              }}
              aria-hidden="true"
            />
            <div className="relative overflow-hidden rounded-[22px] bg-[#e9ecef] p-2">
              <img
                src={image?.src}
                alt={image?.alt ?? ""}
                className="h-[320px] w-full rounded-[18px] object-cover md:h-[520px]"
              />
            </div>
          </div>

          <div>
            <h2 className="whitespace-pre-line text-[2.1rem] font-extrabold leading-[1.05] text-[#0b1a4a] md:text-[3.2rem]">
              {heading}
            </h2>

            <div className="mt-6 space-y-7">
              {paragraphs.map((p, i) => (
                <p
                  key={i}
                  className="text-[1.05rem] leading-[1.9] text-[#0b1a4a] md:text-[1.08rem]"
                >
                  {p}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Section2Checklist({ title, left, right }) {
  const offset = Math.max(0, Number(left?.cardAccent?.offsetPx ?? 18));

  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-7xl px-4 py-10 md:px-8 md:py-12">
        <h2 className="text-[2.1rem] font-extrabold leading-[1.05] text-[#0b1a4a] md:text-[3.2rem]">
          {title}
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-12 md:grid-cols-[0.95fr_1.05fr] md:gap-16">
          {/* Left image card + pink copy */}
          <div>
            <div className="relative inline-block w-full max-w-[560px]">
              <div
                className="absolute rounded-[18px]"
                style={{
                  backgroundColor: left?.cardAccent?.bg ?? "#1b1f5d",
                  inset: 0,
                  transform: `translate(${offset}px, ${offset}px)`,
                }}
                aria-hidden="true"
              />
              <div className="relative overflow-hidden rounded-[18px] bg-[#e9ecef] p-2">
                <img
                  src={left?.image?.src}
                  alt={left?.image?.alt ?? ""}
                  className="h-[280px] w-full rounded-[14px] object-cover md:h-[360px]"
                />
              </div>
            </div>

            <div className="mt-10 space-y-10">
              {(left?.pinkParagraphs ?? []).map((p, i) => (
                <p
                  key={i}
                  className="text-[1.9rem] font-extrabold leading-[1.1] text-[#ff3aa6] md:text-[2.3rem]"
                >
                  {p}
                </p>
              ))}
            </div>
          </div>

          {/* Right checklist */}
          <div>
            <h3 className="text-[1.7rem] font-extrabold leading-[1.15] text-[#0b1a4a] md:text-[2.1rem]">
              {right?.heading}
            </h3>

            <div className="mt-8 space-y-7">
              {(right?.items ?? []).map((text, i) => (
                <div key={i} className="flex items-start gap-5">
                  <span className="mt-[2px] inline-flex h-8 w-8 items-center justify-center">
                    <PinkCheck className="h-7 w-7" />
                  </span>
                  <p className="text-[1.05rem] leading-[1.9] text-[#0b1a4a] md:text-[1.08rem]">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Section3Steps({ leftPink = [], steps = [] }) {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12 md:px-8 md:py-16">
        <div className="grid grid-cols-1 gap-14 md:grid-cols-[0.95fr_1.05fr] md:gap-16">
          {/* Left pink big copy */}
          <div className="space-y-10">
            {leftPink.map((p, i) => (
              <p
                key={i}
                className="text-[2.2rem] font-extrabold leading-[1.1] text-[#ff3aa6] md:text-[2.6rem]"
              >
                {p}
              </p>
            ))}
          </div>

          {/* Right numbered steps */}
          <div className="space-y-12">
            {steps.map((s, i) => (
              <div key={i} className="text-[#0b1a4a]">
                <p className="text-[1.2rem] font-extrabold leading-[1.35] md:text-[1.25rem]">
                  <span className="text-[#ff3aa6]">{i + 1}. {s.title}</span>{" "}
                  <span className="font-normal">{s.body}</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Section4Cta({
  bg = "#efefef",
  heading,
  paragraph,
  primaryCta,
  secondaryCta,
}) {
  return (
    <section className="w-full" style={{ backgroundColor: bg }}>
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="text-[2.1rem] font-extrabold leading-[1.05] text-[#0b1a4a] md:text-[3.1rem]">
            {heading}
          </h2>

          <p className="mx-auto mt-6 max-w-4xl text-[1.05rem] leading-[1.9] text-[#0b1a4a] md:text-[1.08rem]">
            {paragraph}
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-6 md:flex-row">
            {primaryCta?.href ? (
              <a
                href={primaryCta.href}
                className="inline-flex w-full max-w-[420px] items-center justify-center gap-3 rounded-[8px] bg-[#ff3aa6] px-10 py-5 text-sm font-extrabold uppercase tracking-wide text-white md:w-auto"
              >
                {primaryCta.label}
                <ArrowUpRight className="h-5 w-5" />
              </a>
            ) : null}

            {secondaryCta?.href ? (
              <a
                href={secondaryCta.href}
                className="inline-flex w-full max-w-[420px] items-center justify-center gap-3 rounded-[8px] bg-[#1b1f5d] px-10 py-5 text-sm font-extrabold tracking-wide text-white md:w-auto"
              >
                <PhoneIcon className="h-5 w-5" />
                {secondaryCta.label}
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}

function PinkCheck({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M20 6L9 17l-5-5"
        stroke="#ff3aa6"
        strokeWidth="2.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowUpRight({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M7 17L17 7"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      <path
        d="M10 7h7v7"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PhoneIcon({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M6.6 10.8c1.5 3 3.6 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1.1-.3 1.2.4 2.6.7 4 .7.6 0 1 .4 1 1v3.5c0 .6-.4 1-1 1C10.2 21.8 2.2 13.8 2.2 3.8c0-.6.4-1 1-1H6.7c.6 0 1 .4 1 1 0 1.4.2 2.8.7 4 .1.4 0 .8-.3 1.1L6.6 10.8Z"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
