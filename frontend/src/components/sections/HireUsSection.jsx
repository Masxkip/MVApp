// src/components/sections/HireUsSection.jsx
import React from "react";

export default function HireUsSection({
  variant = "top",
  bgClass = "bg-[#050504]",
  containerClass = "px-4 py-14 md:px-8 md:py-20",
  kicker = "HIRE US",
  heading,
  paragraphs = [],
  leftItems = [],
  rightItems = [],
}) {
  return (
    <section className={`w-full font-brand ${bgClass}`}>
      <div className={containerClass}>
        <div className="mx-auto max-w-7xl">
          {variant === "top" ? (
            <TopHireUs
              kicker={kicker}
              heading={
                heading ?? (
                  <>
                    When Experience and Genuine Care Matter, We&apos;re Here to Help.
                    <span className="block">Call Vancouver Best Movers</span>
                  </>
                )
              }
              paragraphs={
                paragraphs.length
                  ? paragraphs
                  : [
                      "We handle your belongings with the same care and respect you’d expect from a neighbor. Whether you’re relocating from a house, apartment, or office, our team based in San Antonio is here to make the process more manageable and less stressful.",
                      "With years of hands-on experience, we focus on planning, clear communication, and attention to detail. From packing to delivery, our goal is to help you feel confident every step of the way. We begin by understanding your priorities so we can create a plan that fits your schedule and space. Every box is packed with care, and every item is loaded using proper techniques to prevent damage.",
                      "We bring the right tools for the job and come prepared with clean trucks, protective materials, and a fully trained team. Fragile pieces are wrapped and secured properly. Labels are used to keep everything organized. If packing help is needed, we offer that too. Our team knows how to handle stairs, elevators, narrow entryways, and awkward furniture.",
                      "Moving is more than just changing addresses. It can involve deadlines, emotions, and logistics. We’re here to reduce the pressure and help you feel supported from beginning to end. You can count on a respectful, responsive crew that shows up ready to work. We value your time, your space, and the trust you place in us. Every step of your move is approached with purpose and care.",
                    ]
              }
            />
          ) : (
            <BottomHireUs
              heading={heading ?? "Serving Greater Vancouver with Experience and Attention to Detail"}
              leftItems={
                leftItems.length
                  ? leftItems
                  : [
                      "We lead with clear communication and dependable support",
                      "Locally owned and based right here in Texas",
                      "Actively involved in supporting local causes and neighborhoods",
                      "Preferred by agents and builders for consistent service",
                    ]
              }
              rightItems={
                rightItems.length
                  ? rightItems
                  : [
                      "Fully licensed, insured, and qualified for your protection",
                      "Transparent pricing with no unexpected charges",
                      "Special pricing available for military members and seniors",
                      "Less than 3% damage rate across all moves; items handled with care",
                      "Experienced full-time team; no temps or day labor used",
                    ]
              }
            />
          )}
        </div>
      </div>
    </section>
  );
}

function TopHireUs({ kicker, heading, paragraphs }) {
  return (
    <div className="text-center">
      <p className="text-[1.09rem] font-bold leading-[1.0] tracking-[0.35em] text-white/70 md:text-[1.1rem]">
        {kicker}
      </p>

      <h1 className="mx-auto mt-5 max-w-6xl text-[2.03rem] leading-[1.05] font-extrabold text-white md:text-[3.3rem]">
        {heading}
      </h1>

      <div className="mx-auto mt-8 max-w-6xl space-y-6 text-center">
        {paragraphs.map((p, idx) => (
          <p
            key={idx}
            className="text-[1.09rem] leading-[1.6] text-white/90 md:text-[1.1rem]"
          >
            {p}
          </p>
        ))}
      </div>
    </div>
  );
}

function BottomHireUs({ heading, leftItems, rightItems }) {
  return (
    <div>
      <h1 className="text-[2.03rem] text-center font-extrabold leading-[1.0] text-white md:text-[3.3rem]">
        {heading}
      </h1>

      <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-14">
        <CheckList items={leftItems} />
        <CheckList items={rightItems} />
      </div>
    </div>
  );
}

function CheckList({ items }) {
  return (
    <ul className="space-y-8">
      {items.map((text, idx) => (
        <li key={`${idx}-${text}`} className="flex items-start gap-5">
          <span className="mt-1 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#f75a05]">
            <CheckIcon className="h-5 w-5 text-white" />
          </span>

          <p className="text-[1.09rem] leading-[1.6] text-white md:text-[1.1rem]">
            {text}
          </p>
        </li>
      ))}
    </ul>
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