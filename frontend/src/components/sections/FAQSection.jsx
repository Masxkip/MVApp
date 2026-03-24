// src/components/sections/FAQSection.jsx
import React, { useId, useMemo, useState } from "react";
import { Link } from "react-router-dom";

/**
 * FAQSection
 *
 * Props:
 * - title: string | ReactNode
 * - intro: Array<string | ReactNode>
 * - faqs: Array<{ question: string; answer: string | ReactNode }>
 * - defaultOpenIndex: number (default: 0)
 * - variant: "light" | "dark"
 */
export default function FAQSection({
  title = "Frequently asked questions about relocating in Vancouver",

  faqs,
  defaultOpenIndex = 0,
  variant = "light",
}) {
  const isDark = variant === "dark";


  const defaultFaqs = useMemo(
    () => [
      {
        question: "What Services Do Moving Teams Typically Provide?",
        answer:
          "Most moving teams help with packing, protective wrapping, loading, transport, unloading, and basic placement of items. Some also offer supplies, disassembly/reassembly, and specialty-item handling.",
      },
      {
        question: "What Should I Look for When Choosing a Moving Team?",
        answer:
          "Look for clear pricing, strong reviews, proper licensing/insurance, good communication, and a detailed plan for protecting your home and belongings. Ask what’s included and what requires advance notice.",
      },
      {
        question: "Are there budget-friendly options for relocation services?",
        answer:
          "Yes. Many companies offer partial packing, labor-only help, smaller crews, or flexible scheduling to fit a tighter budget. The best approach is to prioritize what you need most and build around it.",
      },
    ],
    []
  );


  const resolvedFaqs = faqs?.length ? faqs : defaultFaqs;

  return (
    <section className={isDark ? "w-full bg-white font-brand" : "w-full bg-[white] font-brand"}>
      <div className="px-4 py-14 md:px-8 md:py-20">
        <div className="mx-auto max-w-7xl">
          <h1 className="text-[2.03rem] font-extrabold leading-[1.05] text-black md:text-[3.3rem]">
            {title}
          </h1>

          <Link
            to="/reviews"
            className="mt-3 inline-block text-[1.15rem] font-bold text-[#f75a05] underline decoration-2 underline-offset-4 transition hover:opacity-80 md:text-[1.6rem]"
          >
            View more Faqs.
          </Link>

          
          <div className="mt-8 space-y-5">
            <FAQAccordion items={resolvedFaqs} defaultOpenIndex={defaultOpenIndex} />
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQAccordion({ items, defaultOpenIndex = 0 }) {
  const [openIndex, setOpenIndex] = useState(
    Number.isInteger(defaultOpenIndex) ? defaultOpenIndex : 0
  );
  const baseId = useId();

  return (
    <div className="space-y-5">
      {items.map((item, idx) => {
        const isOpen = idx === openIndex;
        const buttonId = `${baseId}-btn-${idx}`;
        const panelId = `${baseId}-panel-${idx}`;

        return (
          <div
            key={`${idx}-${item.question}`}
            className="overflow-hidden rounded-[10px] border border-black bg-white/1000]"
          >
            <button
              id={buttonId}
              type="button"
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => setOpenIndex(isOpen ? -1 : idx)}
              className="
                flex w-full items-center justify-between gap-4
                px-6 py-5
                text-left
              "
            >
              <span className="text-[1.09rem] font-extrabold leading-[1.2] text-black md:text-[1.1rem]">
                {item.question}
              </span>

              <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-black">
                <ArrowIcon
                  className={`h-5 w-5 text-white transition-transform duration-200 ${
                    isOpen ? "rotate-180" : "rotate-0"
                  }`}
                />
              </span>
            </button>

            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className={isOpen ? "block" : "hidden"}
            >
              <div className="px-6 pb-5 pt-0">
                <p className="text-[1.09rem] leading-[1.6] text-black md:text-[1.1rem]">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

function ArrowIcon({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M6 9l6 6 6-6"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}