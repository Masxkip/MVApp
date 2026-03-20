// ================================================
// File: src/pages/MovingLocationCity.jsx
// ================================================
import React from "react";
import { useParams } from "react-router-dom";
import { getMovingLocationBySlug } from "../data/movingLocations";
import MovingLocationTemplate from "../components/moving-location/MovingLocationTemplate";

export default function MovingLocationCity() {
  const { citySlug } = useParams();
  const location = getMovingLocationBySlug(citySlug);

  if (!location) {
    return (
      <main className="w-full bg-white font-brand text-black">
        <section className="mx-auto max-w-7xl px-4 py-16 md:px-8">
          <h1 className="text-[2.03rem] font-extrabold leading-[1.05] md:text-[3.3rem]">
            Location not found
          </h1>
        </section>
      </main>
    );
  }

  return <MovingLocationTemplate location={location} />;
}