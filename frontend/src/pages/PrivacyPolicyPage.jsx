// src/pages/PrivacyPolicyPage.jsx
import React from "react";

export default function PrivacyPolicyPage() {
  return (
    <main className="w-full bg-[#f3f3f3] font-brand text-black">
      <section className="w-full bg-[#f3f3f3]">
        <div className="px-4 pt-5 pb-10 md:px-8 md:pt-7 md:pb-14">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-7xl space-y-10 md:space-y-12">
              <div className="space-y-6 md:space-y-8">
                <p className="text-[1.09rem] leading-[1.8] text-black md:text-[1.1rem]">
                  This privacy notice discloses the privacy practices for{" "}
                  <a
                    href="https://www.ozmoving.com"
                    target="_blank"
                    rel="noreferrer"
                    className="underline decoration-2 underline-offset-4 text-[#f75a05]"
                  >
                    www.ozmoving.com
                  </a>
                  . This privacy notice applies solely to information collected
                  by this web site. It will notify you of the following:
                </p>

                <div className="space-y-4 md:space-y-5">
                  <p className="text-[1.09rem] leading-[1.8] text-black md:text-[1.1rem]">
                    What personally identifiable information is collected from
                    you through the web site, how it is used and with whom it
                    may be shared.
                  </p>

                  <p className="text-[1.09rem] leading-[1.8] text-black md:text-[1.1rem]">
                    What choices are available to you regarding the use of your
                    data.
                  </p>

                  <p className="text-[1.09rem] leading-[1.8] text-black md:text-[1.1rem]">
                    The security procedures in place to protect the misuse of
                    your information.
                  </p>

                  <p className="text-[1.09rem] leading-[1.8] text-black md:text-[1.1rem]">
                    How you can correct any inaccuracies in the information.
                  </p>
                </div>
              </div>

              <section className="space-y-6 md:space-y-8">
                <h1 className="text-[2.03rem] font-extrabold leading-[1.05] text-black md:text-[3.3rem]">
                  Information Collection, Use, and Sharing
                </h1>

                <p className="text-[1.09rem] leading-[1.8] text-black md:text-[1.1rem]">
                  We are the sole owners of the information collected on this
                  site. We only have access to/collect information that you
                  voluntarily give us via email or other direct contact from
                  you. We will not sell or rent this information to anyone.
                </p>

                <p className="text-[1.09rem] leading-[1.8] text-black md:text-[1.1rem]">
                  We will use your information to respond to you, regarding the
                  reason you contacted us. We will not share your information
                  with any third party outside of our organization, other than
                  as necessary to fulfill your request, e.g. to ship an order.
                </p>

                <p className="text-[1.09rem] leading-[1.8] text-black md:text-[1.1rem]">
                  Unless you ask us not to, we may contact you via email in the
                  future to tell you about specials, new products or services,
                  or changes to this privacy policy.
                </p>
              </section>

              <section className="space-y-6 md:space-y-8">
                <h2 className="text-[2.03rem] font-extrabold leading-[1.05] text-black md:text-[3.3rem]">
                  Your Access to and Control Over Information
                </h2>

                <p className="text-[1.09rem] leading-[1.8] text-black md:text-[1.1rem]">
                  You may opt out of any future contacts from us at any time.
                  You can do the following at any time by contacting us via the
                  email address or phone number given on our website:
                </p>

                <ul className="space-y-4 md:space-y-5">
                  {[
                    "See what data we have about you, if any.",
                    "Change/correct any data we have about you.",
                    "Have us delete any data we have about you.",
                    "Express any concern you have about our use of your data.",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-4">
                      <span className="mt-[0.2rem] inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#f75a05]">
                        <CheckIcon className="h-3.5 w-3.5 text-white" />
                      </span>
                      <p className="text-[1.09rem] leading-[1.8] text-black md:text-[1.1rem]">
                        {item}
                      </p>
                    </li>
                  ))}
                </ul>
              </section>

              <section className="space-y-6 md:space-y-8">
                <h2 className="text-[2.03rem] font-extrabold leading-[1.05] text-black md:text-[3.3rem]">
                  Security
                </h2>

                <p className="text-[1.09rem] leading-[1.8] text-black md:text-[1.1rem]">
                  We take precautions to protect your information. When you
                  submit sensitive information via the website, your information
                  is protected both online and offline.
                </p>

                <p className="text-[1.09rem] leading-[1.8] text-black md:text-[1.1rem]">
                  Wherever we collect sensitive information (such as credit card
                  data), that information is encrypted and transmitted to us in
                  a secure way. You can verify this by looking for a closed lock
                  icon at the bottom of your web browser, or looking for
                  “https” at the beginning of the address of the web page.
                </p>

                <p className="text-[1.09rem] leading-[1.8] text-black md:text-[1.1rem]">
                  While we use encryption to protect sensitive information
                  transmitted online, we also protect your information offline.
                  Only employees who need the information to perform a specific
                  job (for example, billing or customer service) are granted
                  access to personally identifiable information. The
                  computers/servers in which we store personally identifiable
                  information are kept in a secure environment.
                </p>
              </section>

              <section className="space-y-6 md:space-y-8">
                <h2 className="text-[2.03rem] font-extrabold leading-[1.05] text-black md:text-[3.3rem]">
                  Orders
                </h2>

                <p className="text-[1.09rem] leading-[1.8] text-black md:text-[1.1rem]">
                  We request information from you on our order form. To buy from
                  us, you must provide contact information (like name and
                  shipping address) and financial information (like credit card
                  number, expiration date). This information is used for billing
                  purposes and to fill your orders. If we have trouble
                  processing an order, we’ll use this information to contact
                  you.
                </p>

                <p className="text-[1.09rem] font-extrabold leading-[1.8] text-black md:text-[1.1rem]">
                  If you feel that we are not abiding by this privacy policy,
                  you should contact us immediately via telephone at{" "}
                  <a
                    href="tel:2128762550"
                    className="underline decoration-2 underline-offset-4 text-[#f75a05]"
                  >
                    212-876-2550
                  </a>{" "}
                  or via email, at{" "}
                  <a
                    href="mailto:info@ozmoving.com"
                    className="underline decoration-2 underline-offset-4 text-[#f75a05]"
                  >
                    info@ozmoving.com
                  </a>
                  .
                </p>
              </section>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function CheckIcon({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M20 6L9 17l-5-5"
        stroke="currentColor"
        strokeWidth="2.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}