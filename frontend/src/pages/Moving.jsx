// ================================================
// File: src/pages/Moving.jsx
// Dynamic page: /moving/:moveSlug (ex: /moving/commercial)
// ================================================
import React from "react";
import { useParams } from "react-router-dom";
import MovingTemplate from "../components/moving/MovingTemplate";
import { getMovingBySlug } from "../data/movingData";

export default function Moving() {
  const { moveSlug } = useParams();
  const data = getMovingBySlug(moveSlug);

  if (!data) {
    return (
      <main className="w-full bg-white font-brand text-black">
        <section className="mx-auto max-w-7xl px-4 py-16 md:px-8">
          <h1 className="text-[2.03rem] font-extrabold leading-[1.05] md:text-[3.3rem]">
            Moving page not found
          </h1>
        </section>
      </main>
    );
  }

  return <MovingTemplate data={data} />;
}
