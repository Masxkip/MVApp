// ================================================
// File: src/data/serviceOfferData.js
// DATA ONLY (no JSX).
// Image order: 1 → 2 → 3 → 4
// ================================================
import img1 from "../assets/v/m7.jpg"; // replace with real packing image
import img2 from "../assets/v/d2.jpg"; // replace


export const SERVICE_OFFER_BY_SLUG = {
  packing: {
    slug: "packing",
    seo: {
      title: "Packing Services | Vancouver Best Movers",
      description:
        "Professional packing services with careful labeling, protection, and clear scheduling. Pack a few rooms or your entire home.",
    },

    // 1) Split image + text (Image 1)
    section1: {
      image: { src: img1, alt: "Packing services" },
      accent: { bg: "#ff3aa6", offsetPx: 18 },
      heading: "Many hands make light work.\nLet ours pack for you.",
      paragraphs: [
        "Our full packing service takes care of your packing at the pick up location of your move. We can pack all or some of your belongings so you can focus on other aspects of your move. All of your boxes and items will be securely delivered so you can peacefully unpack them in your new home at your own pace.",
        "It’s surprising how long it can take to pack even a small apartment let alone a home with years of memories. With all of your items professionally packed and clearly labeled by our team for an easy unpacking experience, settling into your new home will be a joy.",
      ],
    },

    // 2) Title + left card + right checklist (Image 2)
    section2: {
      title: "We can pack your kitchen, bedroom or entire home",
      left: {
        image: { src: img2, alt: "Professional packers at work" },
        cardAccent: { bg: "#1b1f5d", offsetPx: 18 },
        pinkParagraphs: [
          "You can decide if you want us to pack a few rooms or your entire home.",
          "Whatever the case, you’ll find clearly labelled boxes with your items protected and ready for move day.",
        ],
      },
      right: {
        heading: "Some of the common packing services we assist our customers with:",
        items: [
          "Kitchen which includes glassware, plates, cutlery, utensils, knife blocks, baking trays, pots, pans, chopping boards, cleaning products and appliances such as toasters, kettles, mixers and blenders",
          "Living Room which includes TV, sound system, books, pot plants, lamps, heaters, decor, pillows, artwork and curtains",
          "Wardrobe which includes clothing, shoes, jackets, accessories. As most homes have multiple wardrobes these are packed separately and labelled clearly.",
          "Bedroom which includes pillows, bedlinen, photos and momentos, lamps, fans, bedside tables, kids toys and curtains.",
          "Study which includes important documents, tech equipment and devices, books, storage furniture, certificates, lamps and wall art",
          "Bathroom which includes toiletries, makeup, towels, appliances like electric razors and hair tools",
        ],
      },
    },

    // 3) Left big pink copy + right numbered steps (Image 3)
    section3: {
      leftPink: [
        "You can decide if you want us to pack your items the day before or the day of your move.",
        "We will need you to be present during the packing process, all you need to do is sit back with a coffee while we do the packing.",
      ],
      steps: [
        {
          title: "CREATE A LIST OF ITEMS AND ROOMS TO PACK:",
          body: "Together with you we create an inventory list room-by-room of all the items you would like packed. We plan your packing experience around your inventory list, which will be reviewed throughout the entire move to keep your items secure.",
        },
        {
          title: "REVIEW OF FRAGILE ITEMS TO PACK:",
          body: "With hallmark attention to detail, we make sure we consult you closely on any custom packing for items which may be fragile or oversized.",
        },
        {
          title: "PACKING YOUR ITEMS ON YOUR SCHEDULE:",
          body: "We’ll arrive with our packing materials and supplies at the agreed packing time. From supplying the boxes and materials, to wrapping, padding, taping boxes closed, labelling them and marking them off your inventory as we go, our movers will treat your items as they would their own. We’ll leave you with a copy of the inventory list to take with you to your new home and unpack at your leisure.",
        },
      ],
    },

    // 4) CTA (Image 4)
    section4: {
      bg: "#efefef",
      heading: "NYC’s most affordable packing service",
      paragraph:
        "With a flat price which includes all packing materials and physical labor to pack your items, we are NYC’s most affordable packing service. Let us pack and move you so you can focus on your destination.",
      primaryCta: { label: "GET A MOVING QUOTE", href: "/quote" },
      secondaryCta: { label: "(212) 651 7273", href: "tel:+12126517273" },
    },
  },
};

export function getServiceOfferBySlug(slug) {
  return SERVICE_OFFER_BY_SLUG[slug] ?? null;
}

export const SERVICE_OFFER_SLUGS = Object.keys(SERVICE_OFFER_BY_SLUG);
