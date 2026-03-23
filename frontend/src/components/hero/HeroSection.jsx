// ================================================
// File: src/components/home/HeroSection.jsx
// ================================================
import { NavLink } from "react-router-dom";
import heroBg from "../../assets/v/v3.jpg";

const STATS = [
  {
    value: "96%",
    title: "Customer Referral Rate",
    desc: "Our customers are so happy, they’re spreading the word.",
    underline: false,
  },
  {
    value: "20+",
    title: "Years Of Experience",
    desc: "Launch your career with a growing moving franchise.",
    underline: false,
  },
  {
    value: "99.5%",
    title: "Moves On Time",
    desc: "Open your own franchise with the largest moving franchise in the country.",
    underline: true,
  },
];


function UnderlineAccent() {
  return (
    <span
      className="
        pointer-events-none absolute
        -bottom-2 h-[5px] w-[120px]
        md:-bottom-3 md:h-[6px] md:w-[150px]
        left-1/2 -translate-x-1/2 rotate-[-2deg] rounded-full bg-white/95
      "
    />
  );
}

function StatsBand() {
  return (
    <section className="w-full bg-[#050504] font-brand">
      {/* Mobile smaller, desktop unchanged */}
      <div className="mx-auto max-w-7xl px-5 py-1 md:px-8 md:py-14">
        <div className="grid gap-7 text-center md:grid-cols-3 md:gap-10">
          {STATS.map((s) => (
            <div key={s.title} className="mx-auto max-w-sm">
              <div className="relative mx-auto inline-flex items-center justify-center">
                {/* Mobile smaller, desktop your original */}
                <div className="relative font-brand text-[2.22rem] font-extrabold tracking-wide text-white md:text-[3.5rem]">
                  {s.value}
                  {s.underline ? <UnderlineAccent /> : null}
                </div>
              </div>

              {/* Mobile smaller, desktop your original */}
              <h3 className="mt-2 font-brand text-[1.06rem] font-extrabold uppercase tracking-wide text-white md:mt-5 md:text-xl">
                {s.title}
              </h3>

              {/* Mobile smaller, desktop your original */}
              <p className="mt-1 text-[1.01rem] leading-relaxed text-white/90 md:mt-3 md:text-[1.08rem]">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function HeroSection() {
  return (
    <>
      <section
        className="relative isolate w-full overflow-hidden bg-black"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        aria-label="Homepage hero"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/55 to-black/25" />
        <div className="absolute inset-0 bg-black/20" />

        <div className="relative mx-auto flex min-h-[480px] max-w-7xl items-center px-5 py-14 md:min-h-[600px] md:px-8 md:py-16">
          <div className="max-w-3xl">
            <h1 className="font-brand text-[1.7em] font-extrabold uppercase leading-[0.95] tracking-wide text-white md:text-[3.6rem]">
              The Best Movers in All Of Great Vancouver
            </h1>

            <p className="mt-4 font-brand text-[0.9rem] font-medium uppercase italic tracking-wide text-white/95 md:text-[1.9rem]">
              Reliable, Affordable & Customer Approved!
            </p>

            <div className="mt-10">
              <NavLink
              to="/contact"
              className={[
                "inline-flex items-center justify-center",
                "rounded-xl bg-[#f75a05] px-7 py-3",
                "text-center font-brand text-[1.15rem] font-bold uppercase tracking-wide text-black",
                "transition-transform duration-150 hover:scale-[1.01] hover:bg-[white] hover:text-black",
                "active:scale-[0.99]",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40",
              ].join(" ")}
            >
              Free Quote
            </NavLink>
            </div>
          </div>
        </div>
      </section>
      <StatsBand />
    </>
  );
}