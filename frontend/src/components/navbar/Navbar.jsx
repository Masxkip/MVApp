// File: src/components/navbar/Navbar.jsx
import { useEffect, useState } from "react";
import { Phone } from "lucide-react";
import { Link } from "react-router-dom";
import HamburgerButton from "./HamburgerButton";
import MenuDrawer from "./MenuDrawer";
import logo from "../../assets/hero.png";

const PHONE_NUMBER_DISPLAY = "877.720.0411";
const PHONE_NUMBER_TEL = "+18777200411";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [drawerKey, setDrawerKey] = useState(0);

  const toggleMenu = () => {
    setIsOpen((prev) => {
      const next = !prev;
      if (next) setDrawerKey((k) => k + 1);
      return next;
    });
  };

  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <>
      <header className="fixed left-0 top-0 z-30 w-full bg-black">
        <div className="mx-auto flex h-24 w-full items-center justify-between px-4 sm:px-6 lg:px-10">
          {/* Logo -> Home */}
          <Link
            to="/"
            onClick={closeMenu}
            aria-label="Go to home"
            className="flex items-center gap-3"
          >
            <div className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-md border border-white/15 bg-white/5">
              <img
                src={logo}
                alt="Two Men And A Truck"
                className="h-full w-full object-contain p-1"
                draggable="false"
              />
            </div>
          </Link>

          <div className="flex items-center gap-4">
            {/* Phone -> tel link */}
            <a
              href={`tel:${PHONE_NUMBER_TEL}`}
              aria-label={`Call us at ${PHONE_NUMBER_DISPLAY}`}
              className="flex h-11.5 w-11.5 items-center justify-center rounded-xl bg-[#ea5505] text-black transition-transform duration-200 hover:scale-105"
            >
              <Phone size={22} strokeWidth={2.5} />
            </a>

            <div className="h-10 w-px bg-white/30" />

            <HamburgerButton isOpen={isOpen} toggleMenu={toggleMenu} />
          </div>
        </div>
      </header>

      <MenuDrawer key={drawerKey} isOpen={isOpen} closeMenu={closeMenu} />
    </>
  );
}