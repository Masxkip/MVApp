// File: src/components/reviews/ReviewCard.jsx
import { Star } from "lucide-react";

export default function ReviewCard({ review, borderColor = "border-[#f75a05]" }) {
  return (
    <article
      className={`flex h-full min-h-[250px] flex-col justify-between rounded-[22px] border-2 ${borderColor} bg-white p-5 shadow-sm transition hover:shadow-md md:min-h-[285px] md:p-6 font-brand`}
    >
      <div className="flex items-center gap-1">
        {Array.from({ length: review.rating }).map((_, index) => (
          <Star key={index} className="h-5 w-5 fill-[#f75a05] text-[#f75a05]" />
        ))}
      </div>

      <p className="mt-4 text-[1.09rem] leading-[1.6] text-black/80 md:text-[1.1rem]">
        {review.text}
      </p>

      <div className="mt-5">
        <h4 className="text-[1.05rem] font-bold text-[black] md:text-[1.22rem]">
          {review.author}, {review.location}
        </h4>
      </div>
    </article>
  );
}