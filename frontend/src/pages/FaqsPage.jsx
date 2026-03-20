// src/pages/FaqsPage.jsx
import React, { useMemo, useState, useId } from "react";

export default function FaqsPage() {
  const faqGroups = useMemo(
    () => [
      {
        topic: "General:",
        items: [
          {
            question: "Why should I use Vancouver Best Movers?",
            answer:
              "Vancouver Best Movers focuses on dependable service, careful handling, clear communication, and an organized moving process that helps make your relocation smoother from beginning to end.",
          },
          {
            question: "Is Vancouver Best Movers fully licensed?",
            answer:
              "Yes. We operate professionally and follow proper moving service standards. If you need more details about service coverage or requirements, those can be discussed during booking.",
          },
          {
            question: "What is the best day of the week to move?",
            answer:
              "Mid-week move dates are often more flexible than weekends and end-of-month dates. They can also make scheduling easier depending on availability.",
          },
          {
            question: "How far ahead should I plan and book my move?",
            answer:
              "Booking as early as possible is best, especially during busy seasons. For many local moves, planning two to four weeks ahead is a strong starting point.",
          },
        ],
      },
      {
        topic: "Pricing:",
        items: [
          {
            question: "Do you offer upfront moving quotes?",
            answer:
              "Yes. We provide clear quotes based on your move details so you know what to expect before moving day.",
          },
          {
            question: "Are there any hidden fees?",
            answer:
              "No. We aim to keep pricing transparent. Any added service, specialty item handling, or special request is discussed as clearly as possible in advance.",
          },
          {
            question: "What affects the total cost of my move?",
            answer:
              "Move size, travel distance, packing requirements, access conditions, stairs, elevators, heavy items, and special handling needs can all affect the final cost.",
          },
          {
            question: "Do you require a deposit to book?",
            answer:
              "Depending on the move type and scheduling needs, a booking deposit may be required to secure your moving date. This will always be communicated clearly.",
          },
        ],
      },
      {
        topic: "Packing:",
        items: [
          {
            question: "Do you provide packing services?",
            answer:
              "Yes. We can help with full packing, partial packing, and extra support for fragile, valuable, or specialty items.",
          },
          {
            question: "Do you supply moving boxes and materials?",
            answer:
              "Yes. We can provide boxes, wrap, and other packing supplies depending on the scope of your move.",
          },
          {
            question: "Can you handle fragile or specialty items?",
            answer:
              "Yes. Fragile items such as mirrors, artwork, electronics, and delicate furniture can be packed and handled with extra care.",
          },
          {
            question: "Should I pack everything before movers arrive?",
            answer:
              "If you did not request packing services, it is best to have most items packed, sealed, and labeled before the movers arrive to keep the process efficient.",
          },
        ],
      },
      {
        topic: "Storage:",
        items: [
          {
            question: "Do you offer short-term storage?",
            answer:
              "Yes. Short-term storage may be available when you need flexibility between move-out and move-in dates.",
          },
          {
            question: "Do you offer long-term storage?",
            answer:
              "Yes. Long-term storage options can also be discussed depending on your timeline and the type of items being stored.",
          },
          {
            question: "Are my items safe in storage?",
            answer:
              "We prioritize organized handling and secure storage processes so your belongings are protected as carefully as possible.",
          },
          {
            question: "Can I combine moving and storage in one service?",
            answer:
              "Yes. We can coordinate a moving-and-storage plan when your relocation requires both services together.",
          },
        ],
      },
      {
        topic: "Moving Day:",
        items: [
          {
            question: "What should I do before the movers arrive?",
            answer:
              "Make sure pathways are clear, boxes are labeled, essentials are set aside, and any building or access instructions are shared ahead of time.",
          },
          {
            question: "How long will my move take?",
            answer:
              "The timeline depends on the amount being moved, access conditions, travel distance, building setup, and whether packing services are included.",
          },
          {
            question: "Can you help with long-distance moving?",
            answer:
              "Yes. We can help with local and longer-distance moving arrangements depending on your route, schedule, and service needs.",
          },
          {
            question: "What happens if weather affects my move?",
            answer:
              "Our team continues to work carefully and professionally. Weather may require extra protective steps and small adjustments for safety and efficiency.",
          },
        ],
      },
    ],
    []
  );

  return (
    <main className="w-full bg-[#f3f3f3] font-brand text-black">
      <section className="w-full bg-[#f3f3f3]">
        <div className="px-4 pt-5 pb-10 md:px-8 md:pt-7 md:pb-14">
          <div className="mx-auto max-w-7xl">
            <header className="max-w-6xl">
              <p
                className="text-[1.2rem] font-bold leading-[1.1] md:text-[1.35rem]"
                style={{ color: "black" }}
              >
                We have put together a detailed list of frequently asked questions
                and helpful answers about moving and storage, so you can feel more
                informed, prepared, and confident throughout every stage of your
                moving experience.
              </p>
            </header>

            <div className="mt-8 space-y-8 md:mt-10 md:space-y-10">
              {faqGroups.map((group, groupIndex) => (
                <FaqTopicBlock
                  key={group.topic}
                  topic={group.topic}
                  items={group.items}
                  groupIndex={groupIndex}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function FaqTopicBlock({ topic, items, groupIndex }) {
  const [openIndex, setOpenIndex] = useState(0);
  const baseId = useId();

  return (
    <section>
      <h2
        className="text-[1.7rem] font-extrabold leading-[1.08] md:text-[2.45rem]"
        style={{ color: "#f75a05" }}
      >
        {topic}
      </h2>

      <div className="mt-4 space-y-5">
        {items.map((item, idx) => {
          const isOpen = idx === openIndex;
          const buttonId = `${baseId}-btn-${groupIndex}-${idx}`;
          const panelId = `${baseId}-panel-${groupIndex}-${idx}`;

          return (
            <div
              key={`${idx}-${item.question}`}
              className="overflow-hidden rounded-[10px] border border-black bg-[white]"
            >
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
              >
                <span className="text-[1.09rem] font-extrabold leading-[1.2] text-black md:text-[1.1rem]">
                  {item.question}
                </span>

                <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-black">
                  <ArrowIcon
                    className={`h-5 w-5 text-white transition-transform duration-300 ${
                      isOpen ? "rotate-180" : "rotate-0"
                    }`}
                  />
                </span>
              </button>

              <div
                id={panelId}
                role="region"
                aria-labelledby={buttonId}
                className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
                  isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="min-h-0">
                  <div className="px-6 pb-5 pt-0">
                    <p className="text-[1.09rem] leading-[1.6] text-black md:text-[1.1rem]">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
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