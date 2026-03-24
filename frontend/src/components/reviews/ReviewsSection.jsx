// File: src/components/reviews/ReviewsSection.jsx
import { Link } from "react-router-dom";
import reviewsData from "../../data/reviews";
import ReviewsCarousel from "./ReviewsCarousel";

export default function ReviewsSection({ limit = 6 }) {
  const reviews = reviewsData.slice(0, limit);

  return (
    <section className="bg-[#f7f7f7] px-4 py-10 font-brand md:px-8 md:py-14">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 md:mb-10">
          <h2 className="max-w-5xl text-[2.03rem] font-extrabold leading-[1.05] text-[black] md:text-[3.3rem]">
            Check out what our customers are saying about our unmatched moving service.
          </h2>

          <Link
            to="/reviews"
            className="mt-3 inline-block text-[1.2rem] font-bold text-[#f75a05] underline decoration-2 underline-offset-4 transition hover:opacity-80 md:text-[1.7rem]"
          >
            Vancouver's highest rated moving company.
          </Link>
        </div>

        <ReviewsCarousel reviews={reviews} />
      </div>
    </section>
  );
}