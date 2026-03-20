// ================================================
// File: src/data/movingLocations.js
// DATA ONLY (no JSX allowed here).
// ================================================
import splitImg from "../assets/c.png";
import heroBg from "../assets/c.png";

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
        "Our full packing service takes care of your packing at the pick up location of your move. We can pack all or some of your belongings so you can focus on other aspects of your move. All of your boxes and items will be securely delivered so you can peacefully unpack them in your new home at your own pace.",
        "It’s surprising how long it can take to pack even a small apartment let alone a home with 20 years of memories. Moving can also take place at some of the biggest moments in our lives. With all of your items professionally packed and clearly labeled by our team for an easy unpacking experience, settling into your new home will be a joy. Our movers have the training and expertise to efficiently and securely pack your valuable items.",
      ],
    },
    hero: {
      bgImage: heroBg,
      overlay: { color: "#2b3a86", opacity: 0.68 },
      heading: "Looking for Cheap Alamo Heights\nMoving Services?",
      paragraph:
        "Like many other locations, Texas Best Movers also offers reasonable moving services in Alamo Heights...",
      cta: { label: "GET A QUOTE", href: "/quote" },
    },
    why: {
      bg: "#2b3a86",
      heading: "Why Choose Texas Best Movers in Alamo\nHeights",
      paragraph:
        "At Texas Best Movers, we do more than just move your belongings...",
      bullets: [
        "Years of expertise serving the community and surrounding areas.",
        "Peace of mind knowing your move is protected from start to finish.",
        "Honest pricing, with no surprises.",
        "Our skilled movers are full-time employees, not day laborers, ensuring top-notch service every time.",
      ],
    },
  },
};









export function getMovingLocationBySlug(slug) {
  return MOVING_LOCATIONS_BY_SLUG[slug] ?? null;
}