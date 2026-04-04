// src/components/moving-location/MovingLocationTemplate.jsx
import React from "react";
import { buttonClasses } from "../../data/buttonClasses";
import { ButtonArrowUpRight } from "../ui/ButtonIcons";

export default function MovingLocationTemplate({ location }) {
  return (
    <main className="w-full bg-white font-brand text-black">
      <TopTitleBar {...location.titleBar} />
      <SplitPackingSection {...location.split} />
      <HeroBanner {...location.hero} />

      {location.splitAfterHero ? (
        <SplitAfterHeroSection {...location.splitAfterHero} />
      ) : null}

      <WhyChooseSection {...location.why} />
    </main>
  );
}

function TopTitleBar({ title, bg = "#2b3a86" }) {
  return (
    <section className="w-full" style={{ backgroundColor: bg }}>
      <div className="mx-auto max-w-7xl px-4 py-10 md:px-8 md:py-12">
        <h1 className="text-center text-[2.2rem] font-extrabold leading-[1.05] text-white md:text-[3.2rem]">
          {title}
        </h1>
      </div>
    </section>
  );
}

function SplitPackingSection({ image, accent, heading, paragraphs = [] }) {
  const offset = Math.max(0, Number(accent?.offsetPx ?? 18));
  const accentBg = accent?.bg ?? "";

  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12 md:px-8 md:py-16">
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-[1fr_1fr] md:gap-14">
          <div className="relative">
            <div
              className="absolute rounded-[22px]"
              style={{
                backgroundColor: accentBg,
                inset: 0,
                transform: `translate(${offset}px, ${offset}px)`,
              }}
              aria-hidden="true"
            />
            <div className="relative overflow-hidden rounded-[22px] bg-[black] p-2">
              <img
                src={image?.src}
                alt={image?.alt ?? ""}
                className="h-[320px] w-full rounded-[18px] object-cover md:h-[520px]"
              />
            </div>
          </div>

          <div>
            <h2 className="whitespace-pre-line text-[2.1rem] font-extrabold leading-[1.05] text-[black] md:text-[3.2rem]">
              {heading}
            </h2>

            <div className="mt-6 space-y-7">
              {paragraphs.map((p, i) => (
                <p
                  key={i}
                  className="text-[1.05rem] leading-[1.9] text-[black] md:text-[1.08rem]"
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

function HeroBanner({ bgImage, overlay, heading, paragraph, cta }) {
  const overlayColor = overlay?.color ?? "black";
  const overlayOpacity =
    typeof overlay?.opacity === "number" ? overlay.opacity : 0.7;

  return (
    <section className="w-full">
      <div className="relative h-[560px] w-full overflow-hidden md:h-[640px]">
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
          <div className="max-w-4xl">
            <h2 className="whitespace-pre-line text-[2.3rem] font-extrabold leading-[1.05] text-white md:text-[3.4rem]">
              {heading}
            </h2>

            <div className="mt-6 h-[2px] w-[92px] bg-white/85" />

            <p className="mt-6 text-[1.03rem] leading-[1.9] text-white/90 md:text-[1.08rem]">
              {paragraph}
            </p>

            {cta?.href ? (
             <a href={cta.href} className={`${buttonClasses.primary} mt-10 gap-2`}>
                {cta.label ?? "Get Quote"}
                <ButtonArrowUpRight />
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}

function SplitAfterHeroSection({
  image,
  accent,
  heading,
  paragraphs = [],
  size = "sm",
}) {
  const offset = Math.max(0, Number(accent?.offsetPx ?? 14));
  const accentBg = accent?.bg ?? "";

  const heightClass =
    size === "sm"
      ? "h-[260px] md:h-[420px]"
      : "h-[320px] md:h-[520px]";

  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12 md:px-8 md:py-16">
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-[1fr_1fr] md:gap-14">
          <div className="md:order-1">
            <h2 className="whitespace-pre-line text-[2.05rem] font-extrabold leading-[1.05] text-[black] md:text-[3.05rem]">
              {heading}
            </h2>

            <div className="mt-6 space-y-7">
              {paragraphs.map((p, i) => (
                <p
                  key={i}
                  className="text-[1.05rem] leading-[1.9] text-[black] md:text-[1.08rem]"
                >
                  {p}
                </p>
              ))}
            </div>
          </div>

          <div className="relative md:order-2">
            <div
              className="absolute rounded-[22px]"
              style={{
                backgroundColor: accentBg,
                inset: 0,
                transform: `translate(${offset}px, ${offset}px)`,
              }}
              aria-hidden="true"
            />
            <div className="relative overflow-hidden rounded-[22px] bg-[black] p-2">
              <img
                src={image?.src}
                alt={image?.alt ?? ""}
                className={`${heightClass} w-full rounded-[18px] object-cover`}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhyChooseSection({ bg = "#2b3a86", heading, paragraph, bullets = [] }) {
  return (
    <section className="w-full" style={{ backgroundColor: bg }}>
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20">
        <div className="mx-auto max-w-6xl text-center">
          <h2 className="whitespace-pre-line text-[2.1rem] font-extrabold leading-[1.05] text-white md:text-[3.2rem]">
            {heading}
          </h2>

          <p className="mx-auto mt-7 max-w-6xl text-[1.03rem] leading-[1.9] text-white/90 md:text-[1.08rem]">
            {paragraph}
          </p>

          <div className="mx-auto mt-12 max-w-5xl space-y-7">
            {bullets.map((b, i) => (
              <div
                key={i}
                className="text-[1.05rem] font-semibold leading-[1.6] text-white md:text-[1.08rem]"
              >
                • {b}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}