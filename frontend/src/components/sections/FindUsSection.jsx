// src/components/sections/FindUsSection.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function FindUsSection({
  eyebrow = "Serving Texas Statewide",
  title = "Find Us in Your City",
  items = defaultCities,
  backgroundClass = "bg-[#f3f3f3]",
  cardBgClass = "bg-white",
  pillBgClass = "bg-black",
  pillTextClass = "text-white",
  titleColor = "black",
  iconColor = "#f75a05",
}) {
  return (
    <section className={`w-full ${backgroundClass} font-brand`}>
      <div className="px-4 pt-5 pb-10 md:px-8 md:pt-7 md:pb-14">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="text-[1.02rem] leading-[1.4] text-black md:text-[1.02rem]">
              {eyebrow}
            </p>

            <h2
              className="mt-2 text-[2.03rem] font-extrabold leading-[1.05] md:mt-3 md:text-[3rem]"
              style={{ color: titleColor }}
            >
              {title}
            </h2>
          </div>

          <div className="mt-7 grid grid-cols-2 gap-3 md:mt-9 md:grid-cols-4 md:gap-4">
            {items.map((item) => {
              const content = (
                <div
                  className={`
                    flex min-h-[96px] items-center justify-center rounded-[6px]
                    px-3 py-4
                    md:min-h-[104px] md:rounded-[5px] md:px-3 md:py-4
                    ${cardBgClass}
                    transition duration-200 hover:-translate-y-[2px]
                  `}
                >
                  <div className="flex flex-col items-center text-center">
                    <LocationPinIcon
                      className="h-6 w-6 md:h-6 md:w-6"
                      color={iconColor}
                    />

                    <span
                      className={`
                        mt-3 inline-flex items-center justify-center rounded-full
                        px-4 py-1.5
                        text-center text-[0.9rem] font-bold leading-[1.15]
                        md:mt-3 md:px-4 md:py-1.5 md:text-[0.9rem]
                        ${pillBgClass} ${pillTextClass}
                      `}
                    >
                      {item.label}
                    </span>
                  </div>
                </div>
              );

              if (item.to) {
                return (
                  <Link key={item.label} to={item.to} aria-label={item.label}>
                    {content}
                  </Link>
                );
              }

              if (item.href) {
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    aria-label={item.label}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noreferrer" : undefined}
                  >
                    {content}
                  </a>
                );
              }

              return <div key={item.label}>{content}</div>;
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function LocationPinIcon({ className = "", color = "#f75a05" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M12 21s6-5.686 6-11a6 6 0 10-12 0c0 5.314 6 11 6 11z"
        fill={color}
      />
      <circle cx="12" cy="10" r="2.6" fill="white" />
    </svg>
  );
}

const defaultCities = [
  { label: "Boerne", to: "/locations/boerne" },
  { label: "Converse", to: "/locations/converse" },
  { label: "Alamo Heights", to: "/locations/alamo-heights" },
  { label: "Shavano Park", to: "/locations/shavano-park" },
  { label: "Timberwood", to: "/locations/timberwood-park" },
  { label: "Downtown", to: "/locations/downtown-san-antonio" },
  { label: "Dominion", to: "/locations/dominion" },
  { label: "Stone Oak", to: "/locations/stone-oak" },
  { label: "Terrell Hills", to: "/locations/terrell-hills" },
  { label: "Castle Hills", to: "/locations/castle-hills" },
  { label: "Sonterra", to: "/locations/sonterra-stone-oak" },
  { label: "Olmos Park", to: "/locations/olmos-park" },
];