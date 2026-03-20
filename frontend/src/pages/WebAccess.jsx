// src/pages/WebAccess.jsx
import React from "react";

export default function WebAccess() {
  return (
    <main className="w-full bg-[#f3f3f3] font-brand text-black">
      <section className="w-full bg-[#f3f3f3]">
        <div className="px-4 pt-5 pb-10 md:px-8 md:pt-7 md:pb-14">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-7xl space-y-8 md:space-y-10">
              <p
                className="text-[1.09rem] leading-[1.8] md:text-[1.1rem]"
                style={{ color: "black" }}
              >
                Piece of Cake Moving & Storage LLC Website Accessibility Policy,{" "}
                <span className="font-extrabold">
                  last updated Thursday the 18th March 2021.
                </span>
              </p>

              <p
                className="text-[1.09rem] leading-[1.8] md:text-[1.1rem]"
                style={{ color: "black" }}
              >
                We strive to provide an excellent online experience for all
                visitors to Piece of Cake Moving & Storage website.
              </p>

              <p
                className="text-[1.09rem] leading-[1.8] md:text-[1.1rem]"
                style={{ color: "black" }}
              >
                We believe all of our visitors should be able to easily use our
                website, regardless of whether the visitor has a need for
                assistive technologies like screen readers, voice recognition
                software, magnifiers or switch technology.
              </p>

              <p
                className="text-[1.09rem] leading-[1.8] md:text-[1.1rem]"
                style={{ color: "black" }}
              >
                To ensure access, we are committed to maintaining compliance
                with the Level AA success criteria of the Website Content
                Accessibility Guidelines 2.0 (WCAG 2.0).
              </p>

              <ul className="space-y-4 pl-6 md:space-y-5">
                <li className="text-[1.09rem] leading-[1.8] md:text-[1.1rem]">
                  <span className="mr-3 text-[1.35rem] leading-none text-[#f75a05]">
                    •
                  </span>
                  <span style={{ color: "black" }}>
                    The Web Content Accessibility Guidelines (WCAG 2.0) Level AA
                    are recognized and acknowledged as the international
                    standard measure of success. Piece of Cake Moving & Storage
                    LLC is designed and developed with these guidelines in mind.
                  </span>
                </li>

                <li className="text-[1.09rem] leading-[1.8] md:text-[1.1rem]">
                  <span className="mr-3 text-[1.35rem] leading-none text-[#f75a05]">
                    •
                  </span>
                  <span style={{ color: "black" }}>
                    We test our website on a regular basis in order to ensure
                    that we meet or exceed the AA standard and that it is usable
                    by guests who use assistive technology.
                  </span>
                </li>
              </ul>

              <p
                className="text-[1.09rem] leading-[1.8] md:text-[1.1rem]"
                style={{ color: "black" }}
              >
                If you have questions or would like to report an issue related
                to the accessibility of our website, please email us at{" "}
                <a
                  href="mailto:pr@mypieceofcakemove.com"
                  className="font-bold underline decoration-2 underline-offset-4"
                  style={{ color: "#f75a05" }}
                >
                  pr@mypieceofcakemove.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}