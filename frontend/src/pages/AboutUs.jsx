// src/pages/AboutUs.jsx
import React from "react";
import storyImg from "../assets/c.png";
import whoWeAreImg from "../assets/c.png";

const brandOrange = "#f75a05";
const brandBlack = "#050504";

export default function AboutUs() {
  const differencePoints = [
    "Local Vancouver move experts across the Lower Mainland and surrounding areas",
    "On-time and on-budget moves tailored to your exact needs",
    "Residential, commercial, and long-distance moving support",
    "Competitive pricing with clear, upfront quotes",
    "Professional packing and unpacking services",
    "Fragile-item handling with extra protection and care",
    "Packing supplies such as boxes and wrap delivered to your door",
    "Dedicated move coordinators for a smoother experience",
    "Fully trained and experienced movers",
    "Clean, safe, and well-equipped moving trucks",
    "Fast communication and dependable customer support",
    "A service-first team focused on care, trust, and reliability",
  ];

  return (
    <main className="w-full bg-white font-brand text-black">
      {/* 1) Our Mission */}
      <CenteredIntroSection
        title="Our Mission"
        body="At Vancouver Best Movers, our mission is to provide dependable, high-quality moving and storage solutions at fair and competitive prices. We combine professionalism, care, and efficiency to make every move feel smooth, stress-free, and fully supported from start to finish."
      />

      {/* 2) Our Story */}
      <SplitImageTextSection
        title="Our Story"
        body={[
          "Vancouver Best Movers was built with one goal in mind: to make moving simpler, safer, and more reliable for every customer we serve. What started as a vision to deliver honest, professional moving support has grown into a trusted company known for dependable service and real care.",
          "Over time, we’ve continued to grow by focusing on what matters most — clear communication, hard work, and treating every move like it matters. Whether it’s a small apartment, a family home, or a business relocation, we approach every project with the same commitment to quality.",
        ]}
        imageSrc={storyImg}
        imageAlt="Our story"
        imagePosition="left"
      />

      {/* 3) Who We Are */}
      <SplitImageTextSection
        title="Who We Are"
        body={[
          "At Vancouver Best Movers, we are a team built on trust, consistency, and strong customer relationships. We believe the best moving experience comes from more than just transporting items — it comes from showing up on time, communicating clearly, and handling every belonging with genuine care.",
          "Whether you’re moving across the city or planning a much larger transition, our goal is to deliver a tailored and positive experience that feels organized, efficient, and professional from beginning to end.",
        ]}
        imageSrc={whoWeAreImg}
        imageAlt="Who we are"
        imagePosition="right"
      />

      {/* 4) Point of difference + story summary */}
      <DualTextSection
        leftTitle="Our point of difference"
        leftBody="We approach moving differently by combining real customer care, competitive pricing, dependable coordination, and a cleaner, more organized moving process. Our focus is not just on getting items from point A to point B, but on delivering a move that feels efficient, respectful, and professionally managed throughout."
        rightTitle="Our story"
        rightBody="Vancouver Best Movers is committed to delivering reliable moving services with a personal touch. We serve customers with a strong focus on professionalism, responsive support, and careful execution. Every move is an opportunity for us to prove why customers trust us with the things that matter most."
      />

      {/* 5) What makes us different */}
      <DifferenceListSection
        title="What makes Vancouver Best Movers different;"
        items={differencePoints}
      />
    </main>
  );
}

function CenteredIntroSection({ title, body }) {
  return (
    <section className="w-full bg-[#f3f3f3]">
      <div className="px-4 pt-5 pb-10 md:px-8 md:pt-7 md:pb-14">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-6xl text-center">
            <h1 className="text-[2.03rem] font-extrabold leading-[1.05] text-[black] md:text-[3.3rem]">
              {title}
            </h1>

            <p className="mx-auto mt-6 max-w-[1500px] text-center text-[1.09rem] leading-[1.8] text-[black] md:mt-8 md:text-[1.1rem]">
              {body}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function SplitImageTextSection({
  title,
  body = [],
  imageSrc,
  imageAlt,
  imagePosition = "left",
}) {
  const isImageLeft = imagePosition === "left";

  return (
    <section className="w-full bg-[#f3f3f3]">
      <div className="px-4 pt-5 pb-10 md:px-8 md:pt-7 md:pb-14">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-[0.9fr_1.1fr] md:gap-14 lg:gap-16">
            {/* Image */}
            <div className={`${isImageLeft ? "md:order-1" : "md:order-2"}`}>
              <div className="overflow-hidden rounded-[18px]">
                <img
                  src={imageSrc}
                  alt={imageAlt}
                  className="h-[260px] w-full object-cover md:h-[500px] lg:h-[440px]"
                />
              </div>
            </div>

            {/* Text */}
            <div className={`${isImageLeft ? "md:order-2" : "md:order-1"}`}>
              <h2 className="text-[2.03rem] font-extrabold leading-[1.05] text-[black] md:text-[3.3rem]">
                {title}
              </h2>

              <div className="mt-5 space-y-6 md:mt-7">
                {body.map((paragraph, index) => (
                  <p
                    key={index}
                    className="text-[1.09rem] leading-[1.8] text-[black] md:text-[1.1rem]"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function DualTextSection({
  leftTitle,
  leftBody,
  rightTitle,
  rightBody,
}) {
  return (
    <section className="w-full bg-[#f3f3f3]">
      <div className="px-4 pt-5 pb-10 md:px-8 md:pt-7 md:pb-14">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-16">
            <div>
              <h2
                className="text-[2.03rem] font-extrabold leading-[1.05] md:text-[3.3rem]"
                style={{ color: "#1c2470" }}
              >
                {leftTitle}
              </h2>

              <p
                className="mt-5 text-[1.09rem] leading-[1.8] md:mt-7 md:text-[1.1rem]"
                style={{ color: "#1c2470" }}
              >
                {leftBody}
              </p>
            </div>

            <div>
              <h2
                className="text-[2.03rem] font-extrabold leading-[1.05] md:text-[3.3rem]"
                style={{ color: "#1c2470" }}
              >
                {rightTitle}
              </h2>

              <p
                className="mt-5 text-[1.09rem] leading-[1.8] md:mt-7 md:text-[1.1rem]"
                style={{ color: "#1c2470" }}
              >
                {rightBody}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function DifferenceListSection({ title, items = [] }) {
  const midpoint = Math.ceil(items.length / 2);
  const leftItems = items.slice(0, midpoint);
  const rightItems = items.slice(midpoint);

  return (
    <section className="w-full bg-[#f3f3f3]">
      <div className="px-4 pt-5 pb-10 md:px-8 md:pt-7 md:pb-14">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-6xl">
            <h2
              className="max-w-5xl text-[2.03rem] font-extrabold leading-[1.08] md:text-[3.3rem]"
              style={{ color: brandOrange }}
            >
              {title}
            </h2>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-x-12 gap-y-4 md:mt-10 md:grid-cols-2 md:gap-y-6 lg:gap-x-20">
            <div className="space-y-5 md:space-y-6">
              {leftItems.map((item, index) => (
                <DifferenceItem key={`left-${index}`} text={item} />
              ))}
            </div>

            <div className="space-y-5 md:space-y-6">
              {rightItems.map((item, index) => (
                <DifferenceItem key={`right-${index}`} text={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function DifferenceItem({ text }) {
  return (
    <div className="flex items-start gap-4">
      <span className="mt-[0.15rem] inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#f75a05]">
        <CheckIcon className="h-4 w-4 text-white" />
      </span>

      <p
        className="text-[1.09rem] leading-[1.7] md:text-[1.1rem]"
        style={{ color: "#1c2470" }}
      >
        {text}
      </p>
    </div>
  );
}

function CheckIcon({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M20 6L9 17l-5-5"
        stroke="currentColor"
        strokeWidth="2.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}