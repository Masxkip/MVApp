// src/components/ui/buttonClasses.js
export const baseButtonClass =
  "inline-flex items-center justify-center rounded-[6px] px-10 py-4 text-sm font-brand font-bold uppercase tracking-wide transition-colors duration-500 ease-out";

export const buttonClasses = {
  primary: `${baseButtonClass} bg-[#f75a05] text-white text-[1rem] hover:bg-black active:bg-black focus-visible:bg-black`,
  secondary: `${baseButtonClass} bg-black text-white text-[1rem] hover:bg-[#f75a05] active:bg-[#f75a05] focus-visible:bg-[#f75a05]`,
  outline: `${baseButtonClass} border border-black bg-transparent text-black hover:bg-black hover:text-white active:bg-black active:text-white focus-visible:bg-black focus-visible:text-white`,
};