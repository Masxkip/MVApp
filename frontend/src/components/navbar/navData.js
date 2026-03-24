// ================================================
// File: src/components/navbar/navData.js
// Make hrefs unique. Keep cities as real slugs.
// ================================================
export const navData = [
   

   {
    id: 1,
    label: "Moving",
    href: "moving/:moveSlug",
    children: [
      { id: "moving-commercial", label: "General Moving services", href: "/moving/commercial" },
      { id: "loc-vancouver", label: "Local residential Moves", href: "/moving-location/alamo-heights" },
      { id: "moving-packing", label: "Office & Commercial Mooves", href: "/moving/packing" },
      { id: "moving-packing", label: "Long Distance Moves", href: "/moving/packing" },
      { id: "moving-packing", label: "Event & Special Moves", href: "/moving/packing" },
      { id: "moving-packing", label: "Small Moves", href: "/moving/packing" },
      { id: "moving-packing", label: "24/7 Moves", href: "/moving/packing" },
      { id: "moving-packing", label: "Last Minute Moves", href: "/moving/packing" },
      { id: "moving-packing", label: "Same Building Moves", href: "/moving/packing" },
      { id: "moving-packing", label: "Apartment Moves", href: "/moving/packing" },
      
    ],
  },

  {
    id: 2,
    label: "Moving Location",
    href: "moving-location/:citySlug",
    children: [
      { id: "loc-vancouver", label: "Vancouver", href: "/moving-location/alamo-heights" },
      { id: "loc-burnaby", label: "Burnaby", href: "/moving-location/burnaby" },
      { id: "loc-richmond", label: "Mission", href: "/moving-location/richmond" },
      { id: "loc-richmond", label: "Kamloops", href: "/moving-location/richmond" },
      { id: "loc-richmond", label: "Richmond", href: "/moving-location/richmond" },
      { id: "loc-richmond", label: "Abbotsford", href: "/moving-location/richmond" },
      { id: "loc-richmond", label: "Langley", href: "/moving-location/richmond" },
      { id: "loc-richmond", label: "Chilliwack", href: "/moving-location/richmond" },
      { id: "loc-richmond", label: "Coquitlam", href: "/moving-location/richmond" },
      { id: "loc-richmond", label: "Delta", href: "/moving-location/richmond" },
      { id: "loc-richmond", label: "White Rock", href: "/moving-location/surrey" }
    ],
  },

  {
    id: 3,
    label: "Services",
    href: "services-offer/:serviceSlug",
    children: [
        { id: "packing", label: "Full Packing", href: "/services-offer/packing", },
        { id: "services-storage-short", label: "Premium Packing", href: "/services/storage/short-term", },
        { id: "services-storage-short", label: "Fitness Equipment Movers", href: "/services/storage/short-term", },
        { id: "services-storage-short", label: "Furniture Assembly", href: "/services/storage/short-term", },
        { id: "services-storage-short", label: "Piano Moving", href: "/services/storage/short-term", },
        { id: "services-storage-short", label: "Box and material delivery", href: "/services/storage/short-term", },
        { id: "services-storage-short", label: "Wooden Create Packing", href: "/services/storage/short-term", },
    ],
  },

  {
    id: 4,
    label: "Resources",
    href: "/resources",
    children: [
      { id: "resources-process", label: "Move Process", href: "/resources/move-process" },
      { id: "resources-checklist", label: "Move Day Checklist", href: "/resources/checklist" },
      { id: "resources-guide", label: "Move Day Guide", href: "/resources/move-day-guide" },
      { id: "resources-packing", label: "Packing Tips", href: "/resources/packing-tips" },
      { id: "resources-moving-tips", label: "Moving Tips", href: "/resources/moving-tips" },
      { id: "resources-blogs", label: "Blogs", href: "/resources/blogs" },
    ],
  },

  {
    id: 5,
    label: "Company",
    href: "/company",
    children: [
      { id: "company-about", label: "About Us", href: "about" },
      { id: "company-faqs", label: "FAQs", href: "faqs" },
      { id: "company-contact", label: "Contact Us", href: "/contact" },
      { id: "company-privacy", label: "Privacy Policy", href: "/company/privacy" },
      { id: "company-reviews", label: "Reviews", href: "/company/reviews" },
    ],
  },

  
];

