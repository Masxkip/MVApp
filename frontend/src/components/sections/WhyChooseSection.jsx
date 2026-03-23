// src/components/sections/WhyChooseSection.jsx
import React from "react";
import whyChooseImg from "../../assets/v/m6.jpg";

export default function WhyChooseSection({
  variant = "top",
  bgClass,
  containerClass = "px-4 pt-4 pb-10 md:px-8 md:pt-6 md:pb-14",
  heading,
  paragraphs = [],
  highlights = [],
  bullets = [],
  imageSrc = whyChooseImg,
  imageAlt = "Moving trucks",
}) {
  const resolvedBg = bgClass ?? (variant === "top" ? "bg-[#f7f7f7]" : "bg-white");

  return (
    <section className={`w-full font-brand ${resolvedBg}`}>
      <div className={containerClass}>
        <div className="mx-auto max-w-7xl">
          {variant === "top" ? (
            <Top
              heading={heading ?? <>Choose Texas Best for Your Next Move in or Around San Antonio</>}
              paragraphs={
                paragraphs.length
                  ? paragraphs
                  : [
                      "Planning a move across town or to a different city? Our team at Texas Best approaches each project with experience, attention to detail, and a steady hand. Whether you're moving into a new home, transitioning your business, or heading across the state, we’re here to make things easier and more manageable.",
                      "We manage residential, commercial, and long-distance relocations with care and clear communication. From packing and organizing to safe transport and unloading, every part of the process is handled with structure and purpose. Our goal is to reduce the stress of moving by offering dependable service and consistent support throughout your journey.",
                      "We start by listening to your needs and creating a plan that works with your timeline. If you need packing assistance, we offer practical solutions to keep everything secure and organized. On moving day, our team arrives prepared with the right equipment, protective materials, and a focus on efficiency.",
                      "Your belongings are handled with care, whether it’s furniture, electronics, boxes, or fragile items. We label and track everything to ensure a smoother unpacking experience. If your destination involves stairs, elevators, or tricky entryways, we know how to navigate those challenges.",
                      "Our goal is to help you settle in faster by managing the details that often cause delays or frustration. We stay responsive and flexible if anything needs to be adjusted along the way. With each move, we aim to provide support that feels personal, practical, and grounded in experience.",
                    ]
              }
            />
          ) : (
            <Bottom
              heading={heading ?? "Why Choose Oz Moving & Storage?"}
              highlights={
                highlights.length
                  ? highlights
                  : [
                      {
                        title: "We Have Experience You Can Rely On:",
                        body: "With over 30 years of experience, Oz Moving & Storage knows New York City inside and out. Our knowledgeable team makes us the most reliable choice for your next move.",
                      },
                      {
                        title: "We Are a Full-Service Company:",
                        body: "From packing and unpacking to storage and specialty moving, Oz Moving & Storage offers a complete suite of services to meet your unique needs.",
                      },
                      {
                        title: "We are Safe and Trusted:",
                        body: "Fully licensed and insured moving company with an A+ rating from the Better Business Bureau, and a rating of 4.5 from over 750 reviews on Google.",
                      },
                    ]
              }
              bullets={
                bullets.length
                  ? bullets
                  : [
                      "Professional, experienced and caring crews",
                      "Integrity, teamwork and innovation are at our core",
                      "Guaranteed pricing with no hidden fees",
                      "Guaranteed pricing with no hidden fees",
                    ]
              }
              imageSrc={imageSrc}
              imageAlt={imageAlt}
            />
          )}
        </div>
      </div>
    </section>
  );
}

function Top({ heading, paragraphs }) {
  return (
    <div className="text-center">
      <h1 className="mx-auto max-w-6xl text-[2.03rem] leading-[1.05] font-extrabold text-[black] md:text-[3.3rem]">
        {heading}
      </h1>

      <div className="mx-auto mt-9 max-w-6xl space-y-7">
        {paragraphs.map((p, idx) => (
          <p
            key={idx}
            className="m-0 text-center text-[1.09rem] leading-[1.6] text-black/80 md:text-[1.1rem]"
          >
            {p}
          </p>
        ))}
      </div>
    </div>
  );
}

function Bottom({ heading, highlights, bullets, imageSrc, imageAlt }) {
  return (
    <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-2 md:gap-10">
      <div>
        <h1 className="text-[2.03rem] font-extrabold leading-[1.05] text-black md:text-[3.3rem]">
          {heading}
        </h1>

        <div className="mt-7 space-y-7">
          {highlights.map((h, idx) => (
            <div key={`${idx}-${h.title}`} className="space-y-2">
              <p className="text-[1.09rem] leading-[1.6] text-black md:text-[1.1rem]">
                <span className="font-extrabold">{h.title} </span>
                <span className="text-black/80">{h.body}</span>
              </p>
            </div>
          ))}
        </div>

        <ul className="mt-9 space-y-4">
          {bullets.map((b, idx) => (
            <li key={`${idx}-${b}`} className="flex items-start gap-4">
              <span className="mt-[0.2rem] inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#f75a05]">
                <CheckIcon className="h-4 w-4 text-white" />
              </span>
              <p className="text-[1.09rem] leading-[1.6] text-black md:text-[1.1rem]">
                {b}
              </p>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <div className="overflow-hidden rounded-[18px]">
          <img
            src={imageSrc}
            alt={imageAlt}
            className="
              h-[360px] w-full object-cover
              md:h-[560px] md:max-w-[860px]
            "
          />
        </div>
      </div>
    </div>
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