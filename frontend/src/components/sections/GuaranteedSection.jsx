// src/components/sections/GuaranteedSection.jsx
import React, { useId, useMemo, useState } from "react";
import guaranteedImg from "../../assets/c.png";

export default function GuaranteedSection({
  pageTitle = "What’s Included In Our Guaranteed Services",
  imageSrc = guaranteedImg,
  imageAlt = "Guaranteed services",
  items,
  defaultOpenIndex = 0,
}) {
  const defaultItems = useMemo(
    () => [
      {
        title: "We pack all of your most valuable items",
        points: [
          "Flat-screen TVs – Packed in oversized TV box with protection",
          "Computers – Packed in cardboard box with protection",
          "Wardrobe Clothes – Hung in wardrobe box",
          "Mirrors – Packed in cardboard box with protection",
          "Lamps – Disassembled, wrapped and packed in cardboard box with protection",
          "Artwork – Packed in cardboard box or wooden picture crate with protection*",
          "Sculptures – Wrapped and packed in cardboard box or wooden crate with protection*",
          "Pianos – Piano boards are included",
        ],
        note:
          "* Some services must be requested in advance but are included in Guaranteed Services quote prior to move",
      },
      {
        title: "Furniture receives extra care",
        points: [
          "Sofas and chairs – Wrapped and padded to prevent scuffs and tears",
          "Tables and dressers – Protected with blankets and stretch wrap",
          "Wood and glass surfaces – Extra padding on corners and edges",
          "Disassembly and reassembly – Basic breakdown for safe transport when needed*",
        ],
        note: "* Specialty items may require advanced notice",
      },
      {
        title: "Mattresses, wrapped in plastic and protected with blankets",
        points: [
          "Mattresses – Fully wrapped in plastic for cleanliness",
          "Box springs – Wrapped and padded for transport",
          "Extra blanket protection – Added to reduce rips and stains",
        ],
      },
      {
        title: "Labor and travel expenses",
        points: [
          "Labor time – Included in your guaranteed services quote",
          "Travel time – Included (no surprise add-ons)",
          "Fuel and standard operating costs – Covered in your quoted price",
        ],
      },
      {
        title: "What sets Oz apart from the rest",
        points: [
          "Trained, professional crews – Consistent standards on every move",
          "Clear communication – Simple scheduling and updates",
          "Proper equipment – Dollies, straps, pads, and tools on hand",
          "Care-first process – Organized packing, loading, and unloading",
        ],
      },
    ],
    []
  );

  const resolvedItems = items?.length ? items : defaultItems;

  return (
    <section className="w-full bg-white font-brand">
      <div className="px-4 pt-3 pb-10 md:px-8 md:pt-0 md:pb-14">
        <div className="mx-auto max-w-7xl">
          <h1 className="text-[2.03rem] font-extrabold text-black md:text-[3.3rem]">
            {pageTitle}
          </h1>

          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 md:items-stretch md:gap-10">
            <div className="h-full">
              <div className="h-[320px] overflow-hidden rounded-[14px] md:h-full md:min-h-[470px]">
                <img src={imageSrc} alt={imageAlt} className="h-full w-full object-cover" />
              </div>
            </div>

            <div className="h-full">
              <Accordion items={resolvedItems} defaultOpenIndex={defaultOpenIndex} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Accordion({ items, defaultOpenIndex = 0 }) {
  const [openIndex, setOpenIndex] = useState(
    Number.isInteger(defaultOpenIndex) ? defaultOpenIndex : 0
  );
  const baseId = useId();

  return (
    <div className="divide-y divide-black/15">
      {items.map((item, idx) => {
        const isOpen = idx === openIndex;
        const buttonId = `${baseId}-btn-${idx}`;
        const panelId = `${baseId}-panel-${idx}`;

        return (
          <div key={`${idx}-${item.title}`} className="py-5">
            <button
              id={buttonId}
              type="button"
              className="flex w-full items-start justify-between gap-6 text-left"
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => setOpenIndex(isOpen ? -1 : idx)}
            >
              <span className="text-[1.09rem] font-extrabold leading-[1.25] text-black md:text-[1.1rem]">
                {item.title}
              </span>

              <span className="mt-0.5 inline-flex h-7 w-7 items-center justify-center">
                <ArrowIcon
                  className={`h-5 w-5 text-black transition-transform duration-200 ${
                    isOpen ? "rotate-180" : "rotate-0"
                  }`}
                />
              </span>
            </button>

            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className={`${isOpen ? "mt-4" : "mt-0"} ${isOpen ? "block" : "hidden"}`}
            >
              {item.points?.length ? (
                <ul className="space-y-3">
                  {item.points.map((p, pIdx) => (
                    <li key={`${pIdx}-${p}`} className="flex items-start gap-4">
                      <span className="mt-[0.15rem] inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#f75a05]">
                        <CheckIcon className="h-3.5 w-3.5 text-white" />
                      </span>

                      <p className="text-[1.09rem] leading-[1.6] text-black/80 md:text-[1.1rem]">
                        {p}
                      </p>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-[1.09rem] leading-[1.6] text-black/80 md:text-[1.1rem]">
                  Details included in your guaranteed services quote.
                </p>
              )}

              {item.note ? (
                <p className="mt-4 text-[0.88rem] font-bold leading-[1.6] text-black/65 md:text-[0.95rem]">
                  {item.note}
                </p>
              ) : null}
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