// src/components/sections/OurServicesSection.jsx
import React, { useState } from "react";
import OurServiceCard from "./OurServiceCard";
import { OUR_SERVICES } from "../../data/ourServices";

/**
 * @param {object} props
 * @param {string} props.title
 * @param {string=} props.description
 * @param {Array=} props.services
 * @param {string=} props.maxWidthClass
 */
export default function OurServicesSection({
  title,
  description,
  services = OUR_SERVICES,
  maxWidthClass = "max-w-7xl",
}) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="w-full bg-white font-brand">
      <div className="px-4 pt-2 pb-10 md:px-8 md:pt-4 md:pb-14">
        <div className={`mx-auto ${maxWidthClass}`}>
          {(title || description) && (
            <header>
              {title ? (
                <h2 className="text-[2.03rem] font-extrabold leading-[1.05] text-[black] md:text-[3.3rem]">
                  {title}
                </h2>
              ) : null}

              {description ? (
                <p className="mt-4 text-[1.12rem] leading-[1.6] text-black md:text-[1.2rem]">
                  {description}
                </p>
              ) : null}
            </header>
          )}

          <div className="mt-10 grid grid-cols-1 gap-y-4 md:mt-14 md:grid-cols-2 md:gap-x-10 md:gap-y-10 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-10">
            {services.map((service, idx) => (
              <OurServiceCard
                key={service.id ?? `${service.title}-${idx}`}
                title={service.title}
                description={service.description}
                href={service.href}
                linkLabel={service.linkLabel}
                imageSrc={service.imageSrc}
                imageAlt={service.imageAlt}
                open={openIndex === idx}
                onToggle={() =>
                  setOpenIndex((prev) => (prev === idx ? -1 : idx))
                }
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}