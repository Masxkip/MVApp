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
      { id: "moving-commercial", label: "commercial", href: "/moving/movecommercial" },
      { id: "moving-long-distance", label: "Long Distance Moving", href: "/moving/movecommercial"},
      { id: "moving-packing", label: "Packing Services", href: "/moving/packing" },
      { id: "moving-packing", label: "Packing Services", href: "/moving/packing" },
      { id: "moving-packing", label: "Packing Services", href: "/moving/packing" },
      { id: "moving-packing", label: "Packing Services", href: "/moving/packing" },
      { id: "moving-packing", label: "Packing Services", href: "/moving/packing" },
      { id: "moving-packing", label: "Packing Services", href: "/moving/packing" },
      { id: "moving-packing", label: "Packing Services", href: "/moving/packing" },
      { id: "moving-packing", label: "Packing Services", href: "/moving/packing" },
      { id: "moving-packing", label: "Packing Services", href: "/moving/packing" },
      
    ],
  },

  {
    id: 2,
    label: "Moving Location",
    href: "moving-location/:citySlug",
    children: [
      { id: "loc-vancouver", label: "Vancouver", href: "/moving-location/alamo-heights" },
      { id: "loc-burnaby", label: "Burnaby", href: "/moving-location/burnaby" },
      { id: "loc-richmond", label: "Richmond", href: "/moving-location/richmond" },
      { id: "loc-richmond", label: "Richmond", href: "/moving-location/richmond" },
      { id: "loc-richmond", label: "Richmond", href: "/moving-location/richmond" },
      { id: "loc-richmond", label: "Richmond", href: "/moving-location/richmond" },
      { id: "loc-richmond", label: "Richmond", href: "/moving-location/richmond" },
      { id: "loc-richmond", label: "Richmond", href: "/moving-location/richmond" },
      { id: "loc-richmond", label: "Richmond", href: "/moving-location/richmond" },
      { id: "loc-richmond", label: "Richmond", href: "/moving-location/richmond" },
      { id: "loc-richmond", label: "Surrey", href: "/moving-location/surrey" }
    ],
  },

  {
    id: 3,
    label: "Services",
    href: "services-offer/:serviceSlug",
    children: [
        { id: "packing", label: "Packing", href: "/services-offer/packing", },
        { id: "services-storage-short", label: "Short Term Storage", href: "/services/storage/short-term", },
        { id: "services-storage-short", label: "Short Term Storage", href: "/services/storage/short-term", },
        { id: "services-storage-short", label: "Short Term Storage", href: "/services/storage/short-term", },
        { id: "services-storage-short", label: "Short Term Storage", href: "/services/storage/short-term", },
        { id: "services-storage-short", label: "Short Term Storage", href: "/services/storage/short-term", },
        { id: "services-storage-short", label: "Short Term Storage", href: "/services/storage/short-term", },
        { id: "services-storage-short", label: "Short Term Storage", href: "/services/storage/short-term", },
        { id: "services-storage-short", label: "Short Term Storage", href: "/services/storage/short-term", },
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

