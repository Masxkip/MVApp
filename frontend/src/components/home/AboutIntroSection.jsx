// src/components/home/AboutIntroSection.jsx
import movingServices from "../../data/movingServices";
import MovingServiceCard from "./MovingServiceCard";
import heroLogo from "../../assets/hero.png";

export default function AboutIntroSection() {
  return (
    <section className="font-brand bg-[#f3f3f3] px-4 pt-5 pb-10 md:px-8 md:pt-7 md:pb-14">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-col items-center justify-center gap-4 text-center md:mb-10">
          <img
            src={heroLogo}
            alt="Company logo"
            className="h-14 w-14 object-contain md:h-20 md:w-20"
          />

          <h1 className="text-[2.03rem] font-extrabold text-[#050504] md:text-[3.65rem]">
            Vancouver Best Movers
          </h1>
        </div>

        <div className="mb-6 md:mb-10">
          <p className="text-center text-[1.09rem] leading-[1.6] text-black/80 md:text-[1.1rem]">
            We are a professional moving company dedicated to providing reliable,
            safe and efficient moving services for every customer. Our team
            focuses on making each move simple and stress-free with careful
            handling, clear communication and dependable scheduling. From small
            apartment moves to long distance relocations, we bring experience,
            organization and professionalism to every move we complete.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-y-4 md:mt-14 md:grid-cols-2 md:gap-x-10 md:gap-y-10 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-10">
          {movingServices.map((service, idx) => (
            <MovingServiceCard
              key={service.id}
              service={service}
              defaultOpen={idx === 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
}