// ================================
// File: src/components/sections/ServiceSection.jsx
// ================================
import movingServices from "../../data/movingServices";
import MovingServiceCard from "./MovingServiceCard";

export default function ServiceSection({ ids, title, subtitle, variant = "light" }) {
  const selected = movingServices.filter((service) => ids.includes(service.id));
  const isDark = variant === "dark";

  return (
    <section className={isDark ? "w-full bg-white font-brand" : "w-full bg-white font-brand"}>
      <div className="px-4 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          {(title || subtitle) && (
            <header>
              {title ? (
                <h1 className="text-[2.03rem] font-extrabold text-[black] md:text-[3.3rem]">
                  Keep moving forward with our complete
                  <span className="block">moving services</span>
                </h1>
              ) : null}

              {subtitle ? (
                <p
                  className={`mt-4 text-[1.09rem] leading-[1.6] md:text-[1.1rem] ${
                    isDark ? "text-black/80" : "text-black/80"
                  }`}
                >
                  {subtitle}
                </p>
              ) : null}
            </header>
          )}

          <div className="mt-10 grid grid-cols-1 gap-y-4 md:mt-14 md:grid-cols-2 md:gap-x-10 md:gap-y-10 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-10">
            {selected.map((service, idx) => (
              <MovingServiceCard
                key={service.id}
                service={service}
                defaultOpen={idx === 0}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}