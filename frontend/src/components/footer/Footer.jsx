// ================================================
// File: src/components/footer/Footer.jsx
// ================================================
import { useMemo, useState } from "react";
import { NavLink } from "react-router-dom";
import { ChevronDown, Mail, Phone, MapPin } from "lucide-react";
import { navData } from "../navbar/navData";
import footerLogo from "../../assets/hero.png";

const CONTACT = {
  // Force the same break style as the sample
  addr1: "405 Lexington Ave, Suite",
  addr2: "740, New York, NY 10174",
  email: "sales@vancouverbestmov.com",
  phoneDisplay: "(212) 651 7273",
  phoneTel: "+12126517273",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=405+Lexington+Ave+Suite+740+New+York+NY+10174",
};

const LEGAL_LINKS = [

  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Website Accessibility", href: "/web-accessibility" },
];

const DOT_INFO = {
  usdotLabel: "USDOT:",
  usdotValue: "3066988",
  iccLabel: "ICC MC:",
  iccValue: "58659",
};

const baseText =
  "text-[0.97rem] md:text-[1.rem] leading-relaxed text-white";

// Footer.jsx (change only this constant)
const linkClassName =
  "text-[0.97rem] md:text-[1rem] text-white transition-colors hover:text-[#f75a05]  hover:underline-offset-4 active:text-[#f75a05] active:underline active:underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30";
function normalizeFooterNav(items) {
  const filtered = (items ?? [])
    .filter((i) => i?.label && i?.href)
    .filter((i) => i.label.toLowerCase() !== "storage")
    .filter((i) => i.href !== "/storage");

  const seen = new Set();
  const uniq = [];
  for (const item of filtered) {
    if (seen.has(item.href)) continue;
    seen.add(item.href);
    uniq.push(item);
  }

  return uniq.slice(0, 5);
}

function FooterNavColumns({ sections }) {
  return (
    <div className="hidden gap-10 md:grid md:grid-cols-5 font-brand">
      {sections.map((sec) => (
        <div key={sec.href}>
          <h3 className="font-brand text-xl uppercase tracking-wide text-white">
            {sec.label}
          </h3>

          <ul className="mt-4 space-y-4">
            {(sec.children ?? []).map((child) => (
              <li key={child.id ?? child.href}>
                <NavLink to={child.href} className={linkClassName}>
                  {child.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

function FooterNavAccordion({ sections }) {
  const [open, setOpen] = useState(null);

  return (
    <div className="md:hidden font-brand">
      {sections.map((sec) => {
        const active = open === sec.href;
        const hasChildren = (sec.children ?? []).length > 0;

        return (
          <div key={sec.href} className="border-b border-white/10">
            <button
              type="button"
              onClick={() => setOpen((p) => (p === sec.href ? null : sec.href))}
              className={`group flex w-full items-center justify-between py-4 text-left transition-colors hover:text-white active:text-white ${
                active ? "text-white" : "text-white/90"
              }`}
              aria-expanded={active}
            >
              <span className="font-brand text-lg uppercase tracking-[0.12em]">
                {sec.label}
              </span>

              <ChevronDown
                className={`h-5 w-5 transition-transform duration-300 ${
                  active
                    ? "rotate-180 text-orange-500"
                    : "rotate-0 text-white/80 group-hover:text-white"
                }`}
              />
            </button>

            {hasChildren && (
              <div
                className={`grid overflow-hidden transition-[grid-template-rows] duration-300 ease-in-out ${
                  active ? "grid-rows-[1fr] pb-4" : "grid-rows-[0fr]"
                }`}
              >
                <div className="min-h-0 overflow-hidden">
                  <ul className="space-y-3 pl-1">
                    {sec.children.map((child) => (
                      <li key={child.id ?? child.href}>
                        <NavLink to={child.href} className={linkClassName}>
                          {child.label}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

function ContactLine({ icon: IconComponent, children }) {
  return (
    <div className="flex items-start gap-3 font-brand">
      <IconComponent className="mt-[2px] h-5 w-5 text-white/70" strokeWidth={2.2} />
      <div className={baseText}>{children}</div>
    </div>
  );
}

export default function Footer() {
  const sections = useMemo(() => normalizeFooterNav(navData), []);
  const year = new Date().getFullYear();

  return (
    <footer className="bg-black text-white font-brand">
      <div className="h-px w-full bg-white/10" />

      <div className="mx-auto max-w-7xl px-5 py-14 md:px-8">
        {/* Top: Footer navigation */}
        <FooterNavColumns sections={sections} />
        <FooterNavAccordion sections={sections} />

        <div className="mt-10 h-px w-full bg-white/10 md:mt-12" />

        {/* Bottom: match sample spacing + ordering */}
        <div className="mt-8 md:mt-12">
          <div className="flex flex-col items-center gap-6 md:grid md:grid-cols-4 md:items-start md:gap-10">
            {/* 1) Logo */}
            <div className="order-1 flex w-full justify-center md:justify-start">
              <NavLink
                to="/"
                className="inline-block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30"
                aria-label="Go to homepage"
              >
                <img
                  src={footerLogo}
                  alt="Footer logo"
                  className="w-[110px] select-none md:w-[130px]"
                  draggable="false"
                  loading="lazy"
                />
              </NavLink>
            </div>

            {/* 2) Copyright + DOT/ICC (desktop column 2; mobile later via internal order) */}
            <div className="order-4 w-full text-center md:order-2 md:text-left">
              {/* Desktop: forced break like sample */}
              <div className="hidden md:block">
                <p className={baseText}>© {year} Vancouver Best Movers.</p>
                <p className={`${baseText} mt-1`}>All Rights Reserved.</p>

                <div className="mt-6 grid grid-cols-2 gap-x-10">
                  <div className={baseText}>
                    <div>{DOT_INFO.usdotLabel}</div>
                    <div className="mt-1">{DOT_INFO.usdotValue}</div>
                  </div>
                  <div className={baseText}>
                    <div>{DOT_INFO.iccLabel}</div>
                    <div className="mt-1">{DOT_INFO.iccValue}</div>
                  </div>
                </div>
              </div>

              {/* Mobile: DOT/ICC first, then copyright at bottom (like sample) */}
              <div className="md:hidden">
                <div className="grid grid-cols-2 gap-x-10 gap-y-2">
                  <div className={baseText}>
                    {DOT_INFO.usdotLabel} {DOT_INFO.usdotValue}
                  </div>
                  <div className={baseText}>
                    {DOT_INFO.iccLabel} {DOT_INFO.iccValue}
                  </div>
                </div>

                <p className={`${baseText} mt-5`}>
                  © {year} Vancover Best Moverss. All Rights Reserved.
                </p>
              </div>
            </div>

            {/* 3) Contact */}
            <div className="order-2 w-full space-y-3 text-center md:order-3 md:space-y-4 md:text-left">
              <div className="mx-auto w-fit md:mx-0">
                <ContactLine icon={MapPin}>
                  <a
                    href={CONTACT.mapsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className={linkClassName}
                  >
                    <div>{CONTACT.addr1}</div>
                    <div>{CONTACT.addr2}</div>
                  </a>
                </ContactLine>
              </div>

              <div className="mx-auto w-fit md:mx-0">
                <ContactLine icon={Phone}>
                  <a href={`tel:${CONTACT.phoneTel}`} className={linkClassName}>
                    {CONTACT.phoneDisplay}
                  </a>
                </ContactLine>
              </div>

              <div className="mx-auto w-fit md:mx-0">
                <ContactLine icon={Mail}>
                  <a href={`mailto:${CONTACT.email}`} className={linkClassName}>
                    {CONTACT.email}
                  </a>
                </ContactLine>
              </div>
            </div>

            {/* 4) Legal links */}
            <div className="order-3 w-full text-center md:order-4 md:text-left">
              <ul className="space-y-3 md:space-y-4">
                {LEGAL_LINKS.map((l) => (
                  <li key={l.href}>
                    <NavLink to={l.href} className={linkClassName}>
                      {l.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="h-px w-full bg-white/10" />
    </footer>
  );
}