// ================================================
// File: src/data/movingLocations.js
// ================================================
import splitImg from "../assets/v/d5.jpg";
import heroBg from "../assets/v/m7.jpg";
import splitAfterHeroImg from "../assets/v/d2.jpg";

export const MOVING_LOCATIONS_BY_SLUG = {
  "alamo-heights": {
    slug: "alamo-heights",
    cityName: "Alamo Heights",
    titleBar: { title: "Alamo Heights", bg: "#2b3a86" },
    split: {
      image: { src: splitImg, alt: "Professional packing services" },
      accent: { bg: "#ff3aa6", offsetPx: 18 },
      heading: "Many hands make light work.\nLet ours pack for you.",
      paragraphs: [
        "Our full packing service takes care of your packing at the pick up location of your move...",
        "It’s surprising how long it can take to pack even a small apartment...",
      ],
    },
    hero: {
      bgImage: heroBg,
      overlay: { color: "#2b3a86", opacity: 0.68 },
      heading: "Looking for Cheap Alamo Heights\nMoving Services?",
      paragraph: "Like many other locations, Texas Best Movers also offers...",
      cta: { label: "GET A QUOTE", href: "/quote" },
    },
    splitAfterHero: {
      image: { src: splitAfterHeroImg, alt: "Local movers and trucks" },
      accent: { bg: "#ff3aa6", offsetPx: 14 },
      heading: "Local movers who know\nAlamo Heights.",
      paragraphs: [
        "Our crews understand local building access, parking constraints...",
        "We plan your move around your timeline...",
      ],
      size: "sm",
    },
    why: {
      bg: "#2b3a86",
      heading: "Why Choose Texas Best Movers in Alamo\nHeights",
      paragraph: "At Texas Best Movers, we do more than just move...",
      bullets: [
        "Years of expertise serving the community and surrounding areas.",
        "Peace of mind knowing your move is protected from start to finish.",
        "Honest pricing, with no surprises.",
        "Our skilled movers are full-time employees, not day laborers...",
      ],
    },
  },

  // ✅ NEW: Burnaby
  burnaby: {
    slug: "burnaby",
    cityName: "Burnaby",
    titleBar: { title: "Burnaby", bg: "#2b3a86" },

    split: {
      image: { src: splitImg, alt: "Packing services in Burnaby" },
      accent: { bg: "#ff3aa6", offsetPx: 18 },
      heading: "Burnaby moving made\nsimple and organized.",
      paragraphs: [
        "We help Burnaby residents and businesses move with a clear plan, careful protection, and responsive coordination.",
        "From packing support to safe transport, our crews handle your belongings with care so you can settle in faster.",
      ],
    },

    hero: {
      bgImage: heroBg,
      overlay: { color: "#2b3a86", opacity: 0.68 },
      heading: "Looking for Affordable Burnaby\nMoving Services?",
      paragraph:
        "Our Burnaby moving team delivers reliable service with upfront quotes, careful handling, and a smooth move day process.",
      cta: { label: "GET A QUOTE", href: "/quote" },
    },

    splitAfterHero: {
      image: { src: splitAfterHeroImg, alt: "Moving team in Burnaby" },
      accent: { bg: "#ff3aa6", offsetPx: 14 },
      heading: "A local team that\nknows Burnaby routes.",
      paragraphs: [
        "We plan around building access, elevators, parking, and traffic so your move stays on schedule.",
        "Our team arrives prepared with protective materials and the right equipment for the job.",
      ],
      size: "sm",
    },

    why: {
      bg: "#2b3a86",
      heading: "Why Choose Us for Your\nBurnaby Move",
      paragraph:
        "We focus on clear communication, careful handling, and consistent service — the things that make moving feel easier.",
      bullets: [
        "Local Burnaby move expertise",
        "Transparent pricing and dependable scheduling",
        "Careful packing and protection for fragile items",
        "Professional crews and clean moving trucks",
      ],
    },
  },
};

export function getMovingLocationBySlug(slug) {
  return MOVING_LOCATIONS_BY_SLUG[slug] ?? null;
}