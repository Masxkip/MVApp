
// ================================================
// File: src/components/moving/MovingTemplate.jsx
// Renders sections in screenshot order: 1 → 2 → 3 → 4 → 5
// Checkmark style matches your WhyChooseSection.jsx (orange circle).
// ================================================
import React from "react";

export default function MovingTemplate({ data }) {
  return (
    <main className="w-full bg-white font-brand text-black">
      <Section1Split {...data.section1} />
      <Section2Hero {...data.section2} />
      <Section3Process {...data.section3} />
      <Section4Assets {...data.section4} />
      <Section5WhyChoose {...data.section5} />
    </main>
  );
}

function Section1Split({ image, accent, heading, introBold, paragraphs = [] }) {
  const offset = Math.max(0, Number(accent?.offsetPx ?? 18));

  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12 md:px-8 md:py-16">
        <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-[1fr_1fr] md:gap-14">
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

          <div className="pt-2">
            <h1 className="whitespace-pre-line text-[2.2rem] font-extrabold leading-[1.05] text-[#0b1a4a] md:text-[3.3rem]">
              {heading}
            </h1>

            {introBold ? (
              <p className="mt-6 text-[1.15rem] font-extrabold leading-[1.6] text-[#0b1a4a] md:text-[1.2rem]">
                {introBold}
              </p>
            ) : null}

            <div className="mt-6 space-y-7">
              {paragraphs.map((p, i) => (
                <p
                  key={i}
                  className="text-[1.08rem] leading-[1.9] text-[#0b1a4a] md:text-[1.1rem]"
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

function Section2Hero({ bgImage, overlay, heading, cta, numbered = [] }) {
  const overlayColor = overlay?.color ?? "#000000";
  const overlayOpacity =
    typeof overlay?.opacity === "number" ? overlay.opacity : 0.55;

  return (
    <section className="w-full">
      <div className="relative h-[520px] w-full overflow-hidden md:h-[620px]">
        <img
          src={bgImage}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ backgroundColor: overlayColor, opacity: overlayOpacity }}
          aria-hidden="true"
        />

        <div className="relative mx-auto flex h-full max-w-7xl items-center px-4 md:px-8">
          <div className="grid w-full grid-cols-1 items-center gap-10 md:grid-cols-[1.1fr_0.9fr] md:gap-14">
            <div>
              <h2 className="whitespace-pre-line text-[2.4rem] font-extrabold leading-[1.05] text-white md:text-[3.6rem]">
                {heading}
              </h2>

              {cta?.href ? (
                <a
                  href={cta.href}
                  className="mt-10 inline-flex items-center justify-center rounded-full px-10 py-4 text-sm font-extrabold"
                  style={{
                    backgroundColor: cta.bg ?? "#ffe43a",
                    color: cta.text ?? "#111111",
                  }}
                >
                  {cta.label ?? "Get Quote"}
                </a>
              ) : null}
            </div>

            <div className="space-y-6 md:space-y-7">
              {numbered.map((text, idx) => (
                <div key={idx} className="flex items-center gap-4">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white text-sm font-extrabold text-black">
                    {idx + 1}
                  </span>
                  <p className="text-[1.1rem] font-extrabold text-white md:text-[1.15rem]">
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

function Section3Process({ heading, paragraphs = [], checks = [] }) {
  const [leftCol, rightCol] = splitInTwo(checks);

  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-7xl px-4 py-14 md:px-8 md:py-20">
        <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-[1.1fr_0.9fr] md:gap-14">
          <div>
            <h2 className="whitespace-pre-line text-[2.4rem] font-extrabold leading-[1.05] text-black md:text-[3.6rem]">
              {heading}
            </h2>

            <div className="mt-8 space-y-7">
              {paragraphs.map((p, i) => (
                <p
                  key={i}
                  className="text-[1.08rem] leading-[1.9] text-black/80 md:text-[1.1rem]"
                >
                  {p}
                </p>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10">
            <ul className="space-y-5">
              {leftCol.map((t) => (
                <CheckBullet key={t} text={t} />
              ))}
            </ul>
            <ul className="space-y-5">
              {rightCol.map((t) => (
                <CheckBullet key={t} text={t} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function Section4Assets({ image, heading, intro, checks = [] }) {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-7xl px-4 py-14 md:px-8 md:py-20">
        <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-[1fr_1fr] md:gap-14">
          <div className="overflow-hidden rounded-[18px]">
            <img
              src={image?.src}
              alt={image?.alt ?? ""}
              className="h-[360px] w-full object-cover md:h-[560px]"
            />
          </div>

          <div>
            <h2 className="whitespace-pre-line text-[2.4rem] font-extrabold leading-[1.05] text-black md:text-[3.6rem]">
              {heading}
            </h2>

            {intro ? (
              <p className="mt-6 text-[1.08rem] leading-[1.8] text-black/80 md:text-[1.1rem]">
                {intro}
              </p>
            ) : null}

            <ul className="mt-8 space-y-5">
              {checks.map((t) => (
                <CheckBullet key={t} text={t} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function Section5WhyChoose({
  heading,
  paragraphs = [],
  highlightsLeft = [],
  highlightsRight = [],
}) {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-7xl px-4 py-14 md:px-8 md:py-20">
        <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-[1.1fr_0.9fr] md:gap-14">
          <div>
            <h2 className="whitespace-pre-line text-[2.6rem] font-extrabold leading-[1.05] text-black md:text-[3.9rem]">
              {heading}
            </h2>

            <div className="mt-8 space-y-7">
              {paragraphs.map((p, i) => (
                <p
                  key={i}
                  className="text-[1.08rem] leading-[1.9] text-black/80 md:text-[1.1rem]"
                >
                  {p}
                </p>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10">
            <ul className="space-y-6">
              {highlightsLeft.map((t) => (
                <CheckBullet key={t} text={t} bold />
              ))}
            </ul>
            <ul className="space-y-6">
              {highlightsRight.map((t) => (
                <CheckBullet key={t} text={t} bold />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function CheckBullet({ text, bold = false }) {
  return (
    <li className="flex items-start gap-4">
      <span className="mt-[0.2rem] inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#f75a05]">
        <CheckIcon className="h-4 w-4 text-white" />
      </span>
      <p
        className={`text-[1.09rem] leading-[1.6] text-black md:text-[1.1rem] ${
          bold ? "font-extrabold" : ""
        }`}
      >
        {text}
      </p>
    </li>
  );
}

function CheckIcon({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M20 6L9 17l-5-5"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function splitInTwo(items = []) {
  const mid = Math.ceil(items.length / 2);
  return [items.slice(0, mid), items.slice(mid)];
}