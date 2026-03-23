// ================================
// File: src/data/ourServices.js
// ================================

// NOTE: For Vite, importing images is the most reliable for production builds.
// Replace these imports with your real icon files.
import iconFullPacking from "../assets/s/s1.png";
import iconPlatinumPacking from "../assets/s/s6.png";
import iconPlasticBin from "../assets/s/s4.png";
import iconBoxDelivery from "../assets/s/s3.png";
import iconValuablePacking from "../assets/s/s5.png";
import iconPianos from "../assets/s/s2.png";

export const OUR_SERVICES = [
  {
    id: "full-packing",
    title: "Full Packing",
    description:
      "We remove the hassle of packing up all of your valuable items safely. You can decide what you want us to pack—there is no minimum limit to our packing service. You can use us to pack just your kitchen or your entire house.",
    imageSrc: iconFullPacking,
    imageAlt: "Full Packing icon",
    href: "/services/full-packing",
    linkLabel: "Learn More",
  },
  {
    id: "platinum-packing",
    title: "Platinum Packing",
    description:
      "We will not only pack up all of your items, we will unpack all of your belongings into your new address. You just tell us what and where you want everything placed.",
    imageSrc: iconPlatinumPacking,
    imageAlt: "Platinum Packing icon",
    href: "/services/platinum-packing",
    linkLabel: "Learn More",
  },
  {
    id: "plastic-bin-hire",
    title: "Plastic Bin Hire",
    description:
      "Our eco friendly plastic moving bins are delivered to your door with no assembly required. Once you’re done we will pick them up and sanitize them so that they can be used again.",
    imageSrc: iconPlasticBin,
    imageAlt: "Plastic Bin Hire icon",
    href: "/services/plastic-bin-hire",
    linkLabel: "Learn More",
  },
  {
    id: "box-material-delivery",
    title: "Box and Material Delivery",
    description:
      "We have made it easy by bundling important moving supplies into packages that suit your lifestyle. Delivered to your door before your move date.",
    imageSrc: iconBoxDelivery,
    imageAlt: "Box and Material Delivery icon",
    href: "/services/box-and-material-delivery",
    linkLabel: "Learn More",
  },
  {
    id: "valuable-item-packing",
    title: "Valuable Item Packing",
    description:
      "Your valuable furniture pieces, antiques and artwork will be safely handled with the utmost care. We will build custom crates for your items, wrap them with durable packing material and ensure the appropriate lifting resources.",
    imageSrc: iconValuablePacking,
    imageAlt: "Valuable Item Packing icon",
    href: "/services/valuable-item-packing",
    linkLabel: "Learn More",
  },
  {
    id: "pianos",
    title: "Pianos",
    description:
      "It takes specialized skills, equipment and training to move a piano safely. We have experience moving upright, horizontal and all piano styles in between.",
    imageSrc: iconPianos,
    imageAlt: "Pianos icon",
    href: "/services/pianos",
    linkLabel: "Learn More",
  },
];