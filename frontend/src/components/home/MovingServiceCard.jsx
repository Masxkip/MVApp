// ================================
// File: src/components/sections/MovingServiceCard.jsx
// ================================
import { useEffect, useId, useState } from "react";
import { Link } from "react-router-dom";

function Chevron({ open }) {
  return (
    <svg
      className={`h-5 w-5 text-[#050504] transition-transform duration-300 ${
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

export default function MovingServiceCard({ service, defaultOpen = false }) {
  const contentId = useId();
  const [open, setOpen] = useState(defaultOpen);

  useEffect(() => {
    setOpen(defaultOpen);
  }, [defaultOpen]);

  return (
    <article className="w-full font-brand">
      {/* MOBILE: accordion */}
      <div className="md:hidden">
        <div className="rounded-2xl bg-white px-5 py-5 shadow-[0_10px_30px_rgba(0,0,0,0.08)] ring-1 ring-black/5">
          <button
            type="button"
            className="group flex w-full items-center justify-between text-left"
            aria-expanded={open}
            aria-controls={contentId}
            onClick={() => setOpen((v) => !v)}
          >
            <div className="flex min-w-0 items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center">
                <img
                  src={service.image}
                  alt={service.title}
                  className="max-h-full max-w-full object-contain"
                />
              </div>

              <h3 className="min-w-0 text-[1.35rem] font-extrabold leading-[1.1] tracking-tight text-[#050504] transition duration-300 group-hover:text-[#f75a05]">
                {service.title}
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
            <p className="mt-4 text-[1rem] leading-[1.6] text-black/80 md:text-[1.08rem]">
              {service.description}
            </p>

            <Link
              to={service.link}
              className="mt-4 inline-block text-[1.05rem] font-bold text-[#f75a05] underline-offset-4 transition duration-200 hover:underline"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>

      {/* DESKTOP */}
      <div className="group hidden rounded-2xl border border-slate-200 bg-white p-6 sm:p-7 transition hover:-translate-y-1 hover:shadow-lg hover:shadow-slate-900/5 md:block">
        <div className="mb-5 grid place-items-center">
          <div className="h-32 w-32 sm:h-36 sm:w-36">
            <img
              src={service.image}
              alt={service.title}
              className="h-full w-full object-contain transition duration-300 group-hover:scale-[1.03]"
            />
          </div>
        </div>

        <h3 className="text-center text-[1.35rem] font-extrabold leading-[1.05] tracking-[-0.03em] text-[#050504] transition duration-300 group-hover:text-[#f75a05] md:text-[1.59rem] md:tracking-[-0.035em]">
          {service.title}
        </h3>

        <p className="mt-4 text-[1rem] leading-[1.6] text-black/80 md:text-[1.08rem]">
          {service.description}
        </p>

        <Link
          to={service.link}
          className="mt-5 inline-block text-[1.05rem] font-bold text-[#f75a05] underline-offset-4 transition duration-200 hover:underline md:text-[1.1rem]"
        >
          Learn More
        </Link>
      </div>
    </article>
  );
}