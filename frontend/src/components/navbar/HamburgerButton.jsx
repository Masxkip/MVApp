// ================================
// File: src/components/navbar/HamburgerButton.jsx
// ================================
const lineStyle =
  "absolute left-1/2 h-[2.5px] w-7 -translate-x-1/2 rounded-full bg-white transition-all duration-300 ease-in-out";

export default function HamburgerButton({ isOpen, toggleMenu }) {
  return (
    <button
      onClick={toggleMenu}
      aria-label={isOpen ? "Close menu" : "Open menu"}
      aria-expanded={isOpen}
      className="group flex items-center gap-3 text-white"
    >
      <div className="relative h-8 w-8">
        <span className={`${lineStyle} top-2 ${isOpen ? "top-1/2 rotate-45" : ""}`} />
        <span
          className={`${lineStyle} top-1/2 -translate-y-1/2 ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        />
        <span className={`${lineStyle} top-6 ${isOpen ? "top-1/2 -rotate-45" : ""}`} />
      </div>

      <span className="hidden font-brand text-[18px] uppercase tracking-[0.18em] sm:block">
      
      </span>
    </button>
  );
}