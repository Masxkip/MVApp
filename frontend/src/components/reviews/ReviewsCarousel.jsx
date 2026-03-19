// src/components/reviews/ReviewsCarousel.jsx
import { useEffect, useMemo, useRef, useState } from "react";
import ReviewCard from "./ReviewCard";

function chunkReviews(reviews, size) {
  const chunks = [];
  for (let i = 0; i < reviews.length; i += size) {
    chunks.push(reviews.slice(i, i + size));
  }
  return chunks;
}

export default function ReviewsCarousel({
  reviews = [],
  desktopPerSlide = 2,
  mobilePerSlide = 1,
}) {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [activeIndex, setActiveIndex] = useState(0);

  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const perSlide = isMobile ? mobilePerSlide : desktopPerSlide;

  const slides = useMemo(() => chunkReviews(reviews, perSlide), [reviews, perSlide]);

  const maxIndex = Math.max(0, slides.length - 1);

  // If slides count changes (resize/data), keep activeIndex valid
  useEffect(() => {
    setActiveIndex((i) => Math.min(Math.max(i, 0), maxIndex));
  }, [maxIndex]);

  const goNext = () => {
    setActiveIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const goPrev = () => {
    setActiveIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.changedTouches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    touchEndX.current = e.changedTouches[0].clientX;

    const distance = touchStartX.current - touchEndX.current;
    if (Math.abs(distance) < 50) return;

    if (distance > 0) {
      if (activeIndex < maxIndex) goNext();
    } else {
      if (activeIndex > 0) goPrev();
    }
  };

  if (!reviews.length) return null;

  return (
    <div className="w-full">
      <div
        className="overflow-hidden touch-pan-y"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
         {slides.map((slide, slideIndex) => (
  <div key={slideIndex} className="w-full shrink-0">
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-8">
              {slide.map((review, index) => {
                const globalIndex = slideIndex * perSlide + index;
                return (
                  <ReviewCard
                    key={review.id}
                    review={review}
                    borderColor={globalIndex % 2 === 0 ? "border-[#f75a05]" : "border-black"}
                  />
                );
              })}
            </div>
          </div>
        ))}
        </div>
      </div>

      {slides.length > 1 && (
        <div className="mt-7 flex items-center justify-center gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`h-3 w-3 rounded-full transition ${
                activeIndex === index ? "bg-[#f75a05]" : "bg-gray-400"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}