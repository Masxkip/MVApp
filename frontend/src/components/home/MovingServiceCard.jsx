// File: src/components/sections/MovingServiceCard.jsx
import { Link } from "react-router-dom";
import { buttonClasses } from "../../data/buttonClasses";
import { ButtonArrowUpRight } from "../ui/ButtonIcons";

export default function MovingServiceCard({ service }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition hover:-translate-y-1 hover:shadow-lg hover:shadow-slate-900/5">
      <div className="relative h-[205px] w-full overflow-hidden bg-slate-100">
        <img
          src={service.image}
          alt={service.title}
          loading="lazy"
          decoding="async"
          draggable={false}
          className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.03]"
        />
        <div className="absolute inset-0 bg-[black]/35" />
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="text-center text-[1.25rem] font-extrabold leading-[1.05] tracking-[-0.03em] text-black transition duration-300 group-hover:text-[#f75a05] md:text-[1.5rem] md:tracking-[-0.035em]">
          {service.title}
        </h3>

        <p className="mt-3 text-[1rem] leading-[1.55] text-black/80 md:text-[1.02rem]">
          {service.description}
        </p>

        <div className="mt-auto flex justify-center pt-5">
          <Link to={service.link} className={`${buttonClasses.outline} gap-1`}>
            Learn More
            <ButtonArrowUpRight />
          </Link>
        </div>
      </div>
    </article>
  );
}