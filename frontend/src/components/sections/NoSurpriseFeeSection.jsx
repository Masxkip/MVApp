// ================================================
// File: src/components/sections/NoSurpriseFeeSection.jsx
// Reusable “No Surprise Fees” section.
// Update: Colors normalized (#050504, #f75a05, #ffffff), image accent removed,
//         accordion animation smoothed (max-height + opacity).
// ================================================
import React, {
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
} from "react";
import { ChevronDown } from "lucide-react";
import guaranteedImg from "../../assets/v/v4.jpg";

const COLORS = {
  ink: "#050504",
  accent: "#f75a05",
  white: "#ffffff",
};

const ACCORDION_MS = 550;

export default function NoSurpriseFeeSection({
  bgClass = "bg-[#f3f3f3]",
  containerClass = "px-4 py-12 md:px-8 md:py-16",
  maxWidthClass = "max-w-7xl",
  heading = {
    pre: "Our ",
    highlight: "flat fee",
    post: " pricing\nmeans no hidden\nsurprises, ever.",
  },
  image = { src: guaranteedImg, alt: "Moving team" },
  leftPinkText =
    "We offer a guaranteed, all-inclusive flat fee, locked in before your move day. Which means the duration of your move will not impact your move price. We always include the following services at no extra charge to you.",
  right = {
    intro: "We include all of the following services at no extra charge to you.",
    items: [
      {
        title: "Items we always pack for free, as a part of your flat fee",
        points: [
          "Fragile kitchen items and glassware",
          "TVs, monitors, and electronics protection",
          "Wardrobe clothing in wardrobe boxes",
        ],
      },
      {
        title: "Protection and wrapping of your furniture",
        points: [
          "Blanket wrapping and padding",
          "Stretch wrap for stability and cleanliness",
          "Corner protection where needed",
        ],
      },
      {
        title: "Extra care of your walls, floor and doors",
        points: [
          "Doorway and corner protection",
          "Floor coverings in key paths",
          "Careful maneuvering in tight spaces",
        ],
      },
      {
        title:
          "No hidden extras, our travel and labor expenses are included in your flat fee price",
        points: ["Labor time included", "Travel time included", "No surprise add-ons"],
      },
    ],
  },
  accordion = {
    enabled: true,
    allowMultipleOpen: false,
    defaultOpenIndex: 0,
  },
}) {
  const items = useMemo(() => normalizeItems(right?.items ?? []), [right?.items]);
  const baseId = useId();

  const allowMultipleOpen = Boolean(accordion?.allowMultipleOpen);
  const enabled = Boolean(accordion?.enabled);

  const [openSet, setOpenSet] = useState(() => {
    const idx = Number.isInteger(accordion?.defaultOpenIndex)
      ? accordion.defaultOpenIndex
      : -1;
    if (!enabled || idx < 0) return new Set();
    return new Set([idx]);
  });

  const panelRefs = useRef([]);

  useEffect(() => {
    const idx = Number.isInteger(accordion?.defaultOpenIndex)
      ? accordion.defaultOpenIndex
      : -1;

    if (!enabled || idx < 0) {
      setOpenSet(new Set());
      return;
    }

    setOpenSet(new Set([idx]));
  }, [accordion?.defaultOpenIndex, enabled]);

  useEffect(() => {
    // Re-sync heights on open/close, and after layout changes.
    for (let i = 0; i < items.length; i += 1) {
      const el = panelRefs.current[i];
      if (!el) continue;
      const isOpen = openSet.has(i);
      el.style.maxHeight = isOpen ? `${el.scrollHeight}px` : "0px";
      el.style.opacity = isOpen ? "1" : "0";
    }
  }, [items.length, openSet]);

  function toggleIndex(idx) {
    if (!enabled) return;

    setOpenSet((prev) => {
      const next = new Set(prev);
      const isOpen = next.has(idx);

      if (allowMultipleOpen) {
        if (isOpen) next.delete(idx);
        else next.add(idx);
        return next;
      }

      if (isOpen) return new Set(); // close all
      return new Set([idx]); // open only this
    });
  }

  return (
    <section className={`w-full font-brand ${bgClass}`}>
      <div className={containerClass}>
        <div className={`mx-auto ${maxWidthClass}`}>
          {/* Row 1: Heading left + Image right */}
          <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-[1.05fr_0.95fr] md:gap-14">
            <div>
              <h2
                className="whitespace-pre-line text-[2.35rem] font-extrabold leading-[1.02] md:text-[3.7rem]"
                style={{ color: COLORS.ink }}
              >
                <span>{heading?.pre ?? ""}</span>
                <span style={{ color: COLORS.accent }}>{heading?.highlight ?? ""}</span>
                <span>{heading?.post ?? ""}</span>
              </h2>
            </div>

            {/* Image accent removed */}
            <div className="relative overflow-hidden rounded-[22px] bg-white ring-8 ring-black/90">
              {image?.src ? (
                <img
                  src={image.src}
                  alt={image.alt ?? ""}
                  className="h-[260px] w-full object-cover md:h-[420px]"
                  loading="lazy"
                  draggable="false"
                />
              ) : (
                <div className="h-[260px] w-full bg-black/5 md:h-[420px]" />
              )}
            </div>
          </div>

          {/* Row 2: Left accent paragraph + Right accordion */}
          <div className="mt-14 grid grid-cols-1 items-start gap-10 md:mt-16 md:grid-cols-[0.95fr_1.05fr] md:gap-14">
            <div>
              <p
                className="text-[1.35rem] font-extrabold leading-[1.25] md:text-[1.7rem]"
                style={{ color: COLORS.accent }}
              >
                {leftPinkText}
              </p>
            </div>

            <div>
              {right?.intro ? (
                <p
                  className="text-[1.15rem] font-extrabold leading-[1.25] md:text-[1.4rem]"
                  style={{ color: COLORS.ink }}
                >
                  {right.intro}
                </p>
              ) : null}

              <div className="mt-7 divide-y divide-black/10 md:mt-9">
                {items.map((item, idx) => {
                  const isOpen = enabled ? openSet.has(idx) : false;
                  const btnId = `${baseId}-btn-${idx}`;
                  const panelId = `${baseId}-panel-${idx}`;

                  return (
                    <div key={item.key} className="py-4 md:py-5">
                      <button
                        id={btnId}
                        type="button"
                        className={`flex w-full items-start justify-between gap-6 text-left ${
                          enabled ? "cursor-pointer" : "cursor-default"
                        }`}
                        aria-expanded={enabled ? isOpen : undefined}
                        aria-controls={panelId}
                        onClick={() => toggleIndex(idx)}
                      >
                        <span
                          className="text-[1.05rem] font-extrabold leading-[1.35] md:text-[1.25rem]"
                          style={{ color: COLORS.ink }}
                        >
                          {item.title}
                        </span>

                        <span className="mt-[0.25rem] inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full">
                          <ChevronDown
                            className={`h-8 w-8 transition-transform`}
                            style={{
                              color: COLORS.accent,
                              transitionDuration: `${ACCORDION_MS}ms`,
                            }}
                            strokeWidth={3.2}
                            aria-hidden="true"
                            data-open={enabled && isOpen ? "true" : "false"}
                          />
                        </span>
                      </button>

                      <div
                        id={panelId}
                        role="region"
                        aria-labelledby={btnId}
                        ref={(el) => {
                          panelRefs.current[idx] = el;
                          if (!el) return;
                          // Ensure correct initial state
                          el.style.maxHeight = isOpen ? `${el.scrollHeight}px` : "0px";
                          el.style.opacity = isOpen ? "1" : "0";
                        }}
                        className="overflow-hidden"
                        style={{
                          marginTop: isOpen ? "1rem" : "0rem",
                          transitionProperty: "max-height, opacity, margin-top",
                          transitionDuration: `${ACCORDION_MS}ms`,
                          transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
                          willChange: "max-height, opacity, margin-top",
                        }}
                      >
                        <div className="pt-0">
                          {item.points?.length ? (
                            <ul className="space-y-3">
                              {item.points.map((p, pIdx) => (
                                <li key={`${item.key}-p-${pIdx}`} className="flex items-start gap-4">
                                  <span
                                    className="mt-[0.15rem] inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full"
                                    style={{ backgroundColor: COLORS.accent }}
                                  >
                                    <CheckIcon className="h-3.5 w-3.5 text-white" />
                                  </span>
                                  <p
                                    className="text-[1.05rem] leading-[1.7] md:text-[1.08rem]"
                                    style={{ color: "rgba(5,5,4,0.8)" }}
                                  >
                                    {p}
                                  </p>
                                </li>
                              ))}
                            </ul>
                          ) : item.body ? (
                            <p
                              className="text-[1.05rem] leading-[1.8] md:text-[1.08rem]"
                              style={{ color: "rgba(5,5,4,0.8)" }}
                            >
                              {item.body}
                            </p>
                          ) : (
                            <p
                              className="text-[1.05rem] leading-[1.8] md:text-[1.08rem]"
                              style={{ color: "rgba(5,5,4,0.8)" }}
                            >
                              Included at no extra charge.
                            </p>
                          )}

                          {item.note ? (
                            <p
                              className="mt-4 text-[0.88rem] font-bold leading-[1.6] md:text-[0.95rem]"
                              style={{ color: "rgba(5,5,4,0.65)" }}
                            >
                              {item.note}
                            </p>
                          ) : null}
                        </div>
                      </div>

                      {/* Rotate chevron via attribute selector (Tailwind-free) */}
                      <style>{`
                        [data-open="true"] { transform: rotate(180deg); }
                        [data-open="false"] { transform: rotate(0deg); }
                      `}</style>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function normalizeItems(items) {
  const out = [];
  const seen = new Set();

  for (let i = 0; i < items.length; i += 1) {
    const raw = items[i];
    const title = typeof raw === "string" ? raw : raw?.title;
    if (!title) continue;

    const points =
      typeof raw === "string"
        ? []
        : Array.isArray(raw?.points)
          ? raw.points.filter(Boolean)
          : [];

    const body = typeof raw === "string" ? "" : raw?.body ?? "";
    const note = typeof raw === "string" ? "" : raw?.note ?? "";

    const keyBase = `${i}-${title}`.toLowerCase();
    if (seen.has(keyBase)) continue;
    seen.add(keyBase);

    out.push({ key: keyBase, title, points, body, note });
  }

  return out;
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