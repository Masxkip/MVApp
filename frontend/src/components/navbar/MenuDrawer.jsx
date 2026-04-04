// File: src/components/navbar/MenuDrawer.jsx
import { useMemo, useState } from "react";
import { ChevronDown, ChevronRight, X } from "lucide-react";
import { NavLink } from "react-router-dom";
import { navData } from "./navData";

export default function MenuDrawer({ isOpen, closeMenu }) {
  const firstExpandable = useMemo(() => {
    const found = navData.find((i) => i.children?.length);
    return found?.label ?? null;
  }, []);

  const [openSection, setOpenSection] = useState(() => firstExpandable);

  const handleSectionToggle = (label) => {
    setOpenSection((prev) => (prev === label ? null : label));
  };

 

  return (
    <>
      {/* Overlay */}
      <div
        onClick={closeMenu}
        className={`fixed inset-0 z-40 bg-black/65 transition-opacity duration-300 ${
          isOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      />

      {/* Panel */}
      <aside
        className={`fixed right-0 top-0 z-50 h-[100dvh] bg-black text-white transition-transform duration-300 ease-out
          w-full md:w-[55%] lg:w-[48%] xl:w-[44%]
          ${isOpen ? "translate-x-0" : "translate-x-full"}
          overflow-hidden`}
        role="dialog"
        aria-modal="true"
        aria-label="Main menu"
      >
        <div className="flex h-full flex-col">
          {/* Header: fixed size (does NOT shrink on dropdown open) */}
          <div className="bg-[#f75a05] px-5 py-3 md:px-7 md:py-3.5">
            <div className="flex min-h-[52px] items-center justify-between gap-4 md:min-h-[60px]">
              <h2 className="font-brand uppercase text-[1.85rem] leading-[0.95] md:text-[1.65rem]">
                Menu
              </h2>

              <button
                type="button"
                onClick={closeMenu}
                aria-label="Close menu"
                className="rounded-lg p-1.5 text-white/95 transition-opacity hover:opacity-80"
              >
                <X size={34} strokeWidth={3.2} />
              </button>
            </div>
          </div>

          {/* Drawer scroll (like PC) */}
          <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain scrollbar-hide px-5 py-4 md:px-7 md:py-5">
            <nav className="flex flex-col">
              {navData.map((item) => {
                const hasChildren = !!item.children?.length;
                const active = openSection === item.label;

                return (
                  <div key={item.id} className="border-b border-white/15">
                    <div className="py-3 md:py-3.5">
                      {hasChildren ? (
                        <button
                          type="button"
                          onClick={() => handleSectionToggle(item.label)}
                          className={`flex w-full items-center justify-between text-left font-brand uppercase leading-none transition-colors
                            text-[1.55rem] md:text-[1.4rem]
                            ${active ? "text-[#f75a05]" : "text-white"}`}
                          aria-expanded={active}
                        >
                          <span>{item.label}</span>

                          {active ? (
                            <ChevronDown
                              size={30}
                              strokeWidth={3}
                              className="text-[#f75a05]"
                              aria-hidden="true"
                            />
                          ) : (
                            <ChevronRight
                              size={28}
                              className="text-white/70"
                              aria-hidden="true"
                            />
                          )}
                        </button>
                      ) : (
                        <NavLink
                          to={item.href}
                          onClick={closeMenu}
                          className="flex w-full items-center justify-between font-brand uppercase leading-none transition-colors hover:text-[#f4b400]
                            text-[1.55rem] md:text-[1.7rem]"
                        >
                          <span className="font-brand">{item.label}</span>
                        </NavLink>
                      )}
                    </div>

                    {/* Submenu:
                        - Mobile: no inner scroll (smooth), let it expand, drawer scrolls
                        - md+: contained + inner scroll */}
                    {hasChildren && (
                      <div
                        className={`grid overflow-hidden transition-[grid-template-rows] duration-300 ease-in-out ${
                          active ? "grid-rows-[1fr] pb-3" : "grid-rows-[0fr] pb-0"
                        }`}
                      >
                        <div className="min-h-0 overflow-hidden">
                          <div
                            className={`
                              overflow-visible pr-0
                              md:max-h-[45vh] md:overflow-y-auto md:overscroll-contain md:scrollbar-hide md:pr-2
                            `}
                          >
                            <div className="space-y-2 pl-0.5">
                              {item.children.map((child) => (
                                <NavLink
                                  key={child.id}
                                  to={child.href}
                                  onClick={closeMenu}
                                  className="block text-[0.84rem] md:text-[0.75rem] font-semibold uppercase tracking-[0.10em]
                                    text-white/70 transition-colors hover:text-white"
                                >
                                  {child.label}
                                </NavLink>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {active && <div className="h-[2px] w-full bg-[#f75a05]" />}
                  </div>
                );
              })}
            </nav>

            <div className="mt-4 md:mt-5">
              <NavLink
                to="/quote"
                onClick={closeMenu}
                className="block w-full rounded-xl bg-[#f75a05] px-5 py-3 text-center font-brand font-bold
                  text-[1.2rem] md:text-[1.3rem] uppercase text-black transition-transform duration-150 hover:scale-[1.01]"
              >
                Free Quote
              </NavLink>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}