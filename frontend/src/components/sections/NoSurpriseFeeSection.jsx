// src/components/sections/NoSurpriseFeeSection.jsx
import noSurpriseImg from "../../assets/c.png";

export default function NoSurpriseFeeSection({
  title = (
    <>
      Our <span className="text-[#f75a05]">flat fee</span> pricing means
       no hidden surprises, ever.
    </>
  ),
  imageSrc = noSurpriseImg,
  imageAlt = "Moving team",
  leftBody = (
    <>
      We offer a guaranteed, all-inclusive flat fee, locked in before your move
      day. Which means the duration of your move will not impact your move
      price. We always include the following services at no extra charge to you.
      We always include the following services at no extra charge to you.
    </>
  ),
  rightIntro = "We include all of the following services at no extra charge to you.",
  items = [
    "Items we always pack for free, as a part of your flat fee",
    "Protection and wrapping of your furniture",
    "Extra care of your walls, floor and doors",
    "Extra care of your walls, floor and doors",
    "No hidden extras, our travel and labor expenses are included in your flat fee price",
  ],
  variant = "light",
}) {
  const isDark = variant === "dark";

  return (
    <section className={isDark ? "w-full bg-white font-brand" : "w-full bg-white font-brand"}>
      <div className="px-4 pt-0 pb-10 md:px-8 md:pt-0 md:pb-14">
        <div className="mx-auto max-w-7xl">
          {/* CHANGED: md:items-start to align image with top of header on desktop */}
          <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-2 md:items-center md:gap-8">
          <div className="md:mt-0">
            <h1 className="text-[2.03rem] font-extrabold leading-[0.95] text-black md:text-[3.3rem] [&_*]:leading-[0.95]">
              {title}
            </h1>
          </div>

          <div className="md:justify-self-end">
            <div className="relative h-[320px] overflow-hidden rounded-[28px] md:h-[460px]">
              <div className="absolute -bottom-6 -right-6 h-full w-full rounded-[28px] bg-[#f75a05]" />

              <img
                src={imageSrc}
                alt={imageAlt}
                className="relative z-10 h-full w-full max-w-[760px] rounded-[28px] object-cover md:max-w-[920px]"
              />
            </div>
          </div>
        </div>

          <div className="h-12 md:h-16" />

          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-16">
            <div>
              <p className="text-[1.25rem] font-extrabold leading-[1.55] text-black md:text-[1.6rem]">
                {leftBody}
              </p>
            </div>

            <div>
              <p className="text-[1.08rem] font-[700] leading-[1.6] text-black md:text-[1.4rem]">
                {rightIntro}
              </p>

              <ul className="mt-8 space-y-6">
                {items.slice(0, 5).map((text, idx) => (
                  <li key={`${idx}-${text}`} className="flex items-start gap-4">
                    {/* CHANGED: circle + checkmark (same as GuaranteedSection) */}
                    <span className="mt-[0.15rem] inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#f75a05]">
                      <CheckIcon className="h-3.5 w-3.5 text-white" />
                    </span>

                    <p className="text-[1.05rem] leading-[1.6] text-black md:text-[1.2rem]">
                      {text}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
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