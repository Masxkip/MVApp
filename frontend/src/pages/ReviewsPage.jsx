// File: src/pages/ReviewsPage.jsx
import reviews from "../data/reviews";
import ReviewCard from "../components/reviews/ReviewCard";

export default function ReviewsPage() {
  return (
    <main className="bg-[#f7f7f7] px-4 py-12 font-brand md:px-8 md:py-16">
      <div className="mx-auto max-w-7xl">
        <h3
          className="text-[2.03rem] font-extrabold leading-[1.1] md:text-[3.3rem]"
          style={{ color: "black" }}
        >
          Real moving & storage reviews from real customers
        </h3>

        <p
          className="mt-4 max-w-6xl text-[1.09rem] leading-[1.7] md:text-[1.1rem]"
          style={{ color: "black" }}
        >
          At Vancouver Best Movers, we are dedicated to delivering dependable,
          high-quality service to each and every customer. No matter how small
          or big your move is, our goal is to provide a smooth, professional,
          and stress-free experience from beginning to end. We always go the
          extra mile to make sure every customer feels supported throughout the
          entire moving process.
        </p>

        <p className="mt-6 max-w-3xl font-bold text-[1.09rem] leading-[1.6] text-black/80 md:text-[1.5rem]">
          Read what our customers are saying about our moving service.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          {reviews.map((review, index) => (
            <ReviewCard
              key={review.id}
              review={review}
              borderColor={index % 2 === 0 ? "border-[#f75a05]" : "border-black"}
            />
          ))}
        </div>
      </div>
    </main>
  );
}