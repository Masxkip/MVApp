// ================================
// File: src/components/sections/OurServiceCard.jsx
// ================================
import { useEffect, useId, useState } from "react";
import { Link } from "react-router-dom";

/**
 * @param {object} props
 * @param {string} props.title
 * @param {string} props.description
 * @param {string=} props.href
 * @param {string=} props.linkLabel
 * @param {string=} props.imageSrc
 * @param {string=} props.imageAlt
 * @param {boolean=} props.defaultOpen
 */
function Chevron({ open }) {
  return (
    <svg
      className={`h-5 w-5 text-black transition-transform duration-300 ${
        open ? "rotate-180" : ""
      }`}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M6 9l6 6 6-6"
        stroke="currentColor"
        strokeWidth="2.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function OurServiceCard({
  title,
  description,
  href,
  linkLabel = "Learn More",
  imageSrc,
  imageAlt = "",
  defaultOpen = false,
}) {
  const contentId = useId();
  const [open, setOpen] = useState(defaultOpen);

  useEffect(() => {
    setOpen(defaultOpen);
  }, [defaultOpen]);

  return (
    <article className="w-full font-brand">
      <div className="md:hidden">
        <div className="rounded-2xl bg-white px-5 py-5 shadow-[0_10px_30px_rgba(0,0,0,0.08)] ring-1 ring-black/5">
          <button
            type="button"
            className="group flex w-full items-center justify-between text-left"
            aria-expanded={open}
            aria-controls={contentId}
            onClick={() => setOpen((v) => !v)}
          >
            <div className="flex min-w-0 items-center gap-1">
              {imageSrc ? (
                <div className="flex h-10 w-10 items-center justify-center overflow-hidden">
                  <img
                    src={imageSrc}
                    alt={imageAlt || title}
                    className="max-h-full max-w-full scale-[1.7] object-contain transition duration-300"
                    draggable={false}
                  />
                </div>
              ) : null}

              <h3 className="min-w-0 text-[1.35rem] font-extrabold leading-[1.1] tracking-tight text-black transition duration-300 group-hover:text-[#f75a05]">
                {title}
              </h3>
            </div>

            <Chevron open={open} />
          </button>

          <div
            id={contentId}
            className={`overflow-hidden transition-[max-height,opacity] duration-300 ease-in-out ${
              open ? "mt-3 max-h-[520px] opacity-100" : "mt-0 max-h-0 opacity-0"
            }`}
          >
            <p className="mt-4 text-[1.09rem] leading-[1.6] text-black/80 md:text-[1.1rem]">
              {description}
            </p>

            {href ? (
              <Link
                to={href}
                className="mt-5 block w-fit mx-auto text-[1.05rem] font-bold text-[#f75a05] underline-offset-4 transition duration-200 hover:underline md:text-[1.1rem]"
              >
                {linkLabel}
              </Link>
            ) : null}
          </div>
        </div>
      </div>

      <div className="group hidden h-full rounded-2xl border border-slate-200 bg-white p-6 sm:p-7 transition hover:-translate-y-1 hover:shadow-lg hover:shadow-slate-900/5 md:flex md:flex-col">
        <div className="flex flex-1 flex-col">
          {imageSrc ? (
            <div className="mb-5 grid place-items-center">
              <div className="h-32 w-32 overflow-hidden sm:h-36 sm:w-36">
                <img
                  src={imageSrc}
                  alt={imageAlt || title}
                  loading="lazy"
                  decoding="async"
                  draggable={false}
                  className="h-full w-full select-none scale-[1.28] object-contain transition duration-300 group-hover:scale-[1.33]"
                />
              </div>
            </div>
          ) : null}

          <h3 className="text-center text-[1.35rem] font-extrabold leading-[1.05] tracking-[-0.03em] text-black transition duration-300 group-hover:text-[#f75a05] md:text-[1.7rem] md:tracking-[-0.035em]">
            {title}
          </h3>

          <p className="mt-4 text-[1.09rem] leading-[1.6] text-black/80 md:text-[1.1rem]">
            {description}
          </p>

          {href ? (
            <Link
              to={href}
              className="mt-auto mx-auto flex min-h-[58px] w-full max-w-[240px] items-center justify-center border border-[black] bg-black px-6 py-3 text-center text-[1.05rem] font-bold text-[white] transition duration-200  md:mt-8 md:text-[1.1rem]"
            >
              {linkLabel}
            </Link>
          ) : (
            <div className="mt-auto h-[58px] md:mt-8" aria-hidden="true" />
          )}
        </div>
      </div>
    </article>
  );
}