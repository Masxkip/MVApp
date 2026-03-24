// ================================================
// File: src/data/movingData.js
// DATA ONLY (no JSX). Order matches screenshots: 1 → 2 → 3 → 4 → 5
// ================================================
import sec1Img from "../assets/v/d3.jpg"; // replace
import heroBg from "../assets/v/m7.jpg"; // replace
import sec4Img from "../assets/v/d5.jpg"; // replace

export const MOVING_BY_SLUG = {
  commercial: {
    slug: "commercial",
    seo: {
      title: "Commercial Moving | Vancouver Best Movers",
      description:
        "Fully insured office and commercial moving services with a proven process, careful labeling, and experienced crews.",
    },

    // 1) Split image + pink accent + right text
    section1: {
      image: { src: sec1Img, alt: "Commercial moving truck" },
      accent: { bg: "", offsetPx: 18 },
      heading: "Fully Insured office and\ncommercial moving services",
      introBold:
        "We are not just a residential moving company, we’re also expert commercial office movers.",
      paragraphs: [
        "Whether you are moving a small start-up office out of a co-working space or a large corporate headquarters with a hundred desks downtown, we will move your business quickly and safely. Relocate your business with the confidence that your critical business items are in the hands of a highly rated moving company.",
      ],
    },

    // 2) Hero background + left headline + button + right numbered list
    section2: {
      bgImage: heroBg,
      overlay: { color: "#000000", opacity: 0.55 },
      heading: "Trust Us To Take Care of Your\nBusiness",
      cta: { label: "Get Quote", href: "/quote", bg: "#f75a05", text: "#111111" },
      numbered: [
        "Fully licensed and insured movers",
        "Clear labels & matching inventory list",
        "Expert wrapping and packing",
        "Full protection for moves of any size",
        "Confidential and discrete",
      ],
    },

    // 3) Process: left heading + paragraphs, right checklist in 2 columns
    section3: {
      heading: "Our Proven Commercial Moving\nProcess for Businesses",
      paragraphs: [
        "Whether relocating your start-up from a coworking space or upgrading your manufacturing plant to a more modern facility, we work with you directly to build a relocation plan tailored to your specific needs.",
        "This begins with an on-site consultation and dedicated point of contact to ensure you always have a clear understanding of the moving process, no matter how large your commercial move may be.",
      ],
      checks: [
        "Free Quote",
        "On-site Consultation",
        "Planning of Move",
        "Packing & Furniture Disassembly",
        "Labeling",
        "Loading",
        "Transportation",
        "Unpacking & Re-Assembly",
      ],
    },

    // 4) Assets: image left, right heading + intro + checklist
    section4: {
      image: { src: sec4Img, alt: "Commercial moving truck on the road" },
      heading: "Office Equipment & Commercial\nAssets We Move",
      intro:
        "Our moving staff is an expert when dealing with all kinds of office items:",
      checks: [
        "Desktops, laptops, servers, and other electronic equipment",
        "Desks, chairs, cubicles, conference tables, and other office furniture",
        "Personal belongings of employees, labeled",
        "Storage cabinets, shelves, and other storage units",
        "Business signs and logos, both indoor and outdoor",
        
      ],
    },
  },
};

export function getMovingBySlug(slug) {
  return MOVING_BY_SLUG[slug] ?? null;
}

export const MOVING_SLUGS = Object.keys(MOVING_BY_SLUG);