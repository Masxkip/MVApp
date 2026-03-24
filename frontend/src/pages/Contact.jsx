// ================================
// File: src/pages/Contact.jsx
// ================================
import { useMemo, useState } from "react";

function classNames(...parts) {
  return parts.filter(Boolean).join(" ");
}

const ABOUT_OPTIONS = [
  { value: "", label: "-- Select --" },
  { value: "quote", label: "Request a Quote" },
  { value: "support", label: "Customer Support" },
  { value: "corporate", label: "Corporate" },
  { value: "careers", label: "Careers" },
  { value: "other", label: "Other" },
];

function isEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(value).trim());
}

export default function Contact() {
  const [form, setForm] = useState({
    about: "",
    name: "",
    email: "",
    phone: "",
    message: "",
    smsOptIn: false,
  });

  const [touched, setTouched] = useState({});
  const [status, setStatus] = useState({ type: "idle", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const errors = useMemo(() => {
    const next = {};
    if (!form.about) next.about = "Required";
    if (!form.name.trim()) next.name = "Required";
    if (!form.email.trim()) next.email = "Required";
    else if (!isEmail(form.email)) next.email = "Enter a valid email";
    if (!form.message.trim()) next.message = "Required";
    return next;
  }, [form]);

  const hasErrors = Object.keys(errors).length > 0;

  function updateField(key, value) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function onBlur(key) {
    setTouched((prev) => ({ ...prev, [key]: true }));
  }

  async function onSubmit(e) {
    e.preventDefault();

    setTouched({
      about: true,
      name: true,
      email: true,
      phone: true,
      message: true,
    });

    if (hasErrors) {
      setStatus({ type: "error", message: "Please fix the highlighted fields." });
      return;
    }

    setIsSubmitting(true);
    setStatus({ type: "idle", message: "" });

    try {
      await new Promise((r) => setTimeout(r, 450));
      setStatus({ type: "success", message: "Sent (wire API next)." });
    } catch {
      setStatus({ type: "error", message: "Something went wrong. Try again." });
    } finally {
      setIsSubmitting(false);
    }
  }

  const inputBase =
    "w-full rounded-xl bg-[#3a3a3a] text-white placeholder:text-white/60 " +
    "px-4 py-3 text-[1.09rem] outline-none ring-1 ring-white/10 " +
    "focus:ring-2 focus:ring-[#f2b400] transition md:text-[1.1rem]";

  const labelBase =
    "text-[1.02rem] font-extrabold leading-[1.02] tracking-[-0.02em] text-white md:text-[1.05rem]";

  const req = <span className="ml-2 text-orange-500">*</span>;

  return (
    <main className="w-full bg-[white] font-brand text-white">
      {/* =======================
          TOP: CORPORATE CONTACT
         ======================= */}
      <section className="w-full bg-[white]">
        <div className="mx-auto max-w-7xl px-4 py-10 md:px-8 md:py-14">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_360px] lg:gap-12">
            {/* Left */}
            <div>
              <h1 className="text-[2.03rem] font-extrabold text-black md:text-[3.3rem]">
                CORPORATE CONTACT
              </h1>

              <div className="mt-7 space-y-8">
                <div>
                  <h2 className="text-[1.02rem] font-extrabold leading-[1.1] tracking-[-0.02em] text-black md:text-[1.05rem]">
                    TWO MEN AND A TRUCK® / INTERNATIONAL, LLC CORPORATE HEADQUARTERS
                  </h2>

                  <p className="mt-3 text-[1.09rem] leading-[1.6] text-black md:text-[1.1rem]">
                    3400 Belle Chase Way
                    <br />
                    Lansing, MI 48911
                  </p>
                </div>

                <div>
                  <h3 className="text-[1.02rem] font-extrabold leading-[1.1] tracking-[-0.02em] text-black md:text-[1.05rem]">
                    PHONE
                  </h3>

                  <p className="mt-3 text-[1.09rem] leading-[1.6] text-black md:text-[1.1rem]">
                    Corporate Customer Service: (800) 345-1070
                    <br />
                    Available 8 a.m. - 5 p.m. ET, Monday-Friday
                  </p>

                  <br />

                  <h3 className="text-[1.02rem] font-extrabold leading-[1.1] tracking-[-0.02em] text-black md:text-[1.05rem]">
                    EMAIL
                  </h3>

                  <p className="mt-3 text-[1.09rem] leading-[1.6] text-black md:text-[1.1rem]">
                    sales@vanvouverbestmovers.com
                  </p>
                </div>
              </div>
            </div>

            {/* Right CTA */}
            <aside className="relative">
              <div className="rounded-2xl bg-[#f75a05] p-6 shadow-[0_18px_45px_rgba(0,0,0,0.35)] ring-1 ring-white/10 md:p-7">
                <h2 className="text-center text-[1.35rem] font-extrabold leading-[1.15] tracking-[-0.02em] text-white md:text-[1.55rem]">
                  YOUR NEXT MOVE STARTS
                  <br />
                  WITH A FREE QUOTE
                </h2>

                <div className="mt-5 space-y-3">
                  <a
                    href="tel:8777200411"
                    className="block rounded-xl bg-[black] px-5 py-3 text-center text-[1.09rem] font-extrabold text-white ring-1 ring-white/10 transition hover:opacity-90 md:text-[1.1rem]"
                  >
                    CALL 877.720.0411
                  </a>

                  <a
                    href="#contact-form"
                    className="block rounded-xl bg-[white] px-5 py-3 text-center text-[1.09rem] font-extrabold text-black transition hover:opacity-90 md:text-[1.1rem]"
                  >
                    GET YOU QUOTE
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* =======================
          FORM: CONTACT US
         ======================= */}
         
      <section id="contact-form" className="w-full bg-[white]">
        <div className="mx-auto max-w-7xl px-4 py-2 md:px-8 md:py-0">
          <div className="max-w-3xl">
            <h2 className="text-[2.03rem] font-extrabold text-white md:text-[3.3rem]">
              CONTACT US
            </h2>

            <form
              onSubmit={onSubmit}
              className="mt-6 rounded-2xl bg-black p-5 shadow-[0_18px_45px_rgba(0,0,0,0.4)] ring-1 ring-white/10 md:p-7"
              noValidate
            >
              {status.type !== "idle" ? (
                <div
                  className={classNames(
                    "mb-5 rounded-xl px-4 py-3 text-[0.92rem] font-bold",
                    status.type === "success"
                      ? "bg-emerald-500/15 text-emerald-200 ring-1 ring-emerald-400/30"
                      : "bg-red-500/15 text-red-200 ring-1 ring-red-400/30"
                  )}
                >
                  {status.message}
                </div>
              ) : null}

              {/* ABOUT */}
              <div className="mb-5">
                <label className={labelBase} htmlFor="about">
                  ABOUT {req}
                </label>
                <select
                  id="about"
                  value={form.about}
                  onChange={(e) => updateField("about", e.target.value)}
                  onBlur={() => onBlur("about")}
                  className={classNames("mt-2", inputBase)}
                >
                  {ABOUT_OPTIONS.map((opt) => (
                    <option key={opt.value} value={opt.value} className="bg-[#2b2b2b]">
                      {opt.label}
                    </option>
                  ))}
                </select>
                {touched.about && errors.about ? (
                  <p className="mt-2 text-[0.9rem] font-bold text-[#f2b400]">
                    {errors.about}
                  </p>
                ) : null}
              </div>

              {/* NAME */}
              <div className="mb-5">
                <label className={labelBase} htmlFor="name">
                  YOUR NAME {req}
                </label>
                <input
                  id="name"
                  type="text"
                  value={form.name}
                  onChange={(e) => updateField("name", e.target.value)}
                  onBlur={() => onBlur("name")}
                  className={classNames(
                    "mt-2",
                    inputBase,
                    touched.name && errors.name && "ring-2 ring-[#f2b400]"
                  )}
                  autoComplete="name"
                />
                {touched.name && errors.name ? (
                  <p className="mt-2 text-[0.9rem] font-bold text-[#f2b400]">
                    {errors.name}
                  </p>
                ) : null}
              </div>

              {/* EMAIL */}
              <div className="mb-5">
                <label className={labelBase} htmlFor="email">
                  YOUR EMAIL {req}
                </label>
                <input
                  id="email"
                  type="email"
                  value={form.email}
                  onChange={(e) => updateField("email", e.target.value)}
                  onBlur={() => onBlur("email")}
                  className={classNames(
                    "mt-2",
                    inputBase,
                    touched.email && errors.email && "ring-2 ring-[#f75a05]"
                  )}
                  autoComplete="email"
                />
                {touched.email && errors.email ? (
                  <p className="mt-2 text-[0.9rem] font-bold text-[#f2b400]">
                    {errors.email}
                  </p>
                ) : null}
              </div>

              {/* PHONE */}
              <div className="mb-5">
                <label className={labelBase} htmlFor="phone">
                  PHONE NUMBER
                </label>
                <input
                  id="phone"
                  type="tel"
                  value={form.phone}
                  onChange={(e) => updateField("phone", e.target.value)}
                  onBlur={() => onBlur("phone")}
                  className={classNames("mt-2", inputBase)}
                  autoComplete="tel"
                />
              </div>

              {/* SMS OPT-IN */}
              <div className="mb-6 flex items-start gap-3">
                <input
                  id="smsOptIn"
                  type="checkbox"
                  checked={form.smsOptIn}
                  onChange={(e) => updateField("smsOptIn", e.target.checked)}
                  className="mt-1 h-4 w-4 rounded bg-[#3a3a3a] text-[#f2b400] ring-1 ring-white/10 focus:ring-2 focus:ring-[#f2b400]"
                />
                <label htmlFor="smsOptIn" className="text-[0.92rem] leading-[1.55] text-white/80">
                  You may send me messages via text (including automated texts) related to my
                  services. Message and data rates may apply, reply STOP to any message to
                  opt-out.
                </label>
              </div>

              {/* MESSAGE */}
              <div className="mb-6">
                <label className={labelBase} htmlFor="message">
                  MESSAGE {req}
                </label>
                <textarea
                  id="message"
                  value={form.message}
                  onChange={(e) => updateField("message", e.target.value)}
                  onBlur={() => onBlur("message")}
                  className={classNames(
                    "mt-2 min-h-[140px] resize-y",
                    inputBase,
                    touched.message && errors.message && "ring-2 ring-[#f2b400]"
                  )}
                />
                {touched.message && errors.message ? (
                  <p className="mt-2 text-[0.9rem] font-bold text-[#f2b400]">
                    {errors.message}
                  </p>
                ) : null}
              </div>

              <div className="flex justify-start">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={classNames(
                    "rounded-xl bg-[#f75a05] px-7 py-3 text-center font-brand text-[1.15rem] uppercase text-white",
                    "transition-transform duration-150 hover:scale-[1.01]",
                    isSubmitting && "opacity-70"
                  )}
                >
                  {isSubmitting ? "Sending..." : "Contact"}
                </button>
              </div>
            
            </form>
            <br />
          </div>
        </div>
      </section>
    </main>
  );
}