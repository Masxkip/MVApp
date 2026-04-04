// src/pages/Quote.jsx
import { useMemo, useState } from "react";
import PageHero from "../components/hero/PageHero";
import { postQuote } from "../lib/api";
import ServiceSection from "../components/home/ServiceSection";
import { buttonClasses } from "../data/buttonClasses";
import { ButtonArrowUpRight } from "../components/ui/ButtonIcons";

const MOVE_TYPES = [
  { value: "", label: "Choose an option" },
  { value: "residential_apartment", label: "Residential apartment" },
  { value: "residential_home", label: "Residential home" },
  { value: "office", label: "Office" },
  { value: "commercial", label: "Commercial" },
  { value: "special_event", label: "Special Event" },
  { value: "other", label: "Other" },
];

const ACCESS_OPTIONS = [
  { value: "", label: "Choose an option" },
  { value: "elevator", label: "Elevator" },
  { value: "walk_up", label: "Walk up" },
  { value: "ground_floor", label: "Ground floor" },
];

const FLOOR_OPTIONS = [
  { value: "", label: "Select floor" },
  { value: "ground", label: "Ground Floor" },
  { value: "1", label: "1st Floor" },
  { value: "2", label: "2nd Floor" },
  { value: "3", label: "3rd Floor" },
  { value: "4", label: "4th Floor" },
  { value: "5_plus", label: "5th Floor +" },
];

const SIZE_OF_MOVE = [
  { value: "", label: "Choose an option" },
  { value: "studio", label: "Studio" },
  { value: "1br", label: "1 Bedroom" },
  { value: "2br", label: "2 Bedroom" },
  { value: "3br", label: "3 Bedroom" },
  { value: "4br_plus", label: "4 Bedroom +" },
];

const TIME_OPTIONS = [
  { value: "early_morning", label: "Early morning" },
  { value: "midday", label: "Midday" },
  { value: "afternoon", label: "Afternoon" },
];

function classNames(...xs) {
  return xs.filter(Boolean).join(" ");
}

function Field({ label, required, children, hint }) {
  return (
    <div className="space-y-2 font-brand">
      <div className="text-[1.02rem] font-bold text-[#050504] md:text-[1.05rem]">
        {label}
        {required ? <span className="text-[#f75a05]"> *</span> : null}
      </div>
      {children}
      {hint ? <div className="text-sm text-black/60">{hint}</div> : null}
    </div>
  );
}

function Input(props) {
  return (
    <input
      {...props}
      className={classNames(
        "w-full rounded-md border border-slate-300 bg-white px-4 py-3 text-[1.02rem] text-black/80 outline-none md:text-[1.05rem]",
        "focus:border-[#f75a05] focus:ring-2 focus:ring-[#f75a05]/20"
      )}
    />
  );
}

function Select(props) {
  return (
    <select
      {...props}
      className={classNames(
        "w-full rounded-md border border-slate-300 bg-white px-4 py-3 text-[1.02rem] text-black/80 outline-none md:text-[1.05rem]",
        "focus:border-[#f75a05] focus:ring-2 focus:ring-[#f75a05]/20"
      )}
    />
  );
}

function Textarea(props) {
  return (
    <textarea
      {...props}
      className={classNames(
        "w-full rounded-md border border-slate-300 bg-white px-4 py-3 text-[1.02rem] text-black/80 outline-none md:text-[1.05rem]",
        "focus:border-[#f75a05] focus:ring-2 focus:ring-[#f75a05]/20"
      )}
    />
  );
}

function Checkbox({ checked, onChange, label }) {
  return (
    <label className="flex items-center gap-3 text-[1.02rem] text-black/80 md:text-[1.05rem]">
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="h-5 w-5 accent-[#f75a05]"
      />
      <span className="font-medium">{label}</span>
    </label>
  );
}

function Radio({ name, checked, onChange, label }) {
  return (
    <label className="flex items-center gap-3 text-[1.02rem] text-black/80 md:text-[1.05rem]">
      <input
        type="radio"
        name={name}
        checked={checked}
        onChange={() => onChange(true)}
        className="h-5 w-5 accent-[#f75a05]"
      />
      <span className="font-medium">{label}</span>
    </label>
  );
}

export default function Quote() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [serverMsg, setServerMsg] = useState("");

  const [form, setForm] = useState({
    estimatedMoveDate: "",
    typeOfMove: "",
    officeSpaceSqft: "",
    sizeOfMove: "",
    movingFrom: "",
    accessCurrent: "",
    floorCurrent: "",
    movingTo: "",
    accessNew: "",
    floorNew: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    extraStop: "no",
    stopTypes: { pickup: false, dropoff: false },
    stopAddress: "",
    stopAccess: "",
    stopFloor: "",
    preferredTimes: {
      early_morning: false,
      midday: false,
      afternoon: false,
    },
    additionalInfo: "",
  });

  const isResidential = useMemo(
    () =>
      form.typeOfMove === "residential_apartment" ||
      form.typeOfMove === "residential_home",
    [form.typeOfMove]
  );

  const isOffice = useMemo(() => form.typeOfMove === "office", [form.typeOfMove]);

  const needsCurrentFloor = useMemo(
    () => form.accessCurrent === "walk_up",
    [form.accessCurrent]
  );

  const needsNewFloor = useMemo(() => form.accessNew === "walk_up", [form.accessNew]);

  const needsStopSection = useMemo(() => form.extraStop === "yes", [form.extraStop]);

  const needsStopFloor = useMemo(
    () => form.stopAccess === "walk_up",
    [form.stopAccess]
  );

  function update(key, value) {
    setForm((p) => ({ ...p, [key]: value }));
  }

  function updateNested(path, value) {
    setForm((p) => {
      const next = structuredClone(p);
      let ref = next;
      for (let i = 0; i < path.length - 1; i++) ref = ref[path[i]];
      ref[path[path.length - 1]] = value;
      return next;
    });
  }

  function validate() {
    const errors = [];

    if (!form.estimatedMoveDate) errors.push("Estimated move date is required.");
    if (!form.typeOfMove) errors.push("Type of move is required.");
    if (!form.movingFrom.trim()) errors.push("Moving from address is required.");
    if (!form.accessCurrent) errors.push("Access (current location) is required.");
    if (needsCurrentFloor && !form.floorCurrent)
      errors.push("Floor (current location) is required for Walk up.");
    if (!form.movingTo.trim()) errors.push("Moving to address is required.");
    if (!form.accessNew) errors.push("Access (new location) is required.");
    if (needsNewFloor && !form.floorNew)
      errors.push("Floor (new location) is required for Walk up.");

    if (isOffice && !form.officeSpaceSqft.trim())
      errors.push("Office space size is required for Office moves.");
    if (isResidential && !form.sizeOfMove)
      errors.push("Size of move is required for Residential moves.");

    if (!form.firstName.trim()) errors.push("First name is required.");
    if (!form.email.trim()) errors.push("Email is required.");
    if (!form.phone.trim()) errors.push("Phone number is required.");

    if (needsStopSection) {
      const { pickup, dropoff } = form.stopTypes;
      if (!pickup && !dropoff)
        errors.push("Select Pick-up and/or Drop-off for the extra stop.");
      if (!form.stopAddress.trim()) errors.push("Additional stop address is required.");
      if (!form.stopAccess) errors.push("Access (additional stop) is required.");
      if (needsStopFloor && !form.stopFloor)
        errors.push("Floor (additional stop) is required for Walk up.");
    }

    return errors;
  }

  async function onSubmit(e) {
    e.preventDefault();
    setServerMsg("");

    const errors = validate();
    if (errors.length) {
      setServerMsg(errors[0]);
      return;
    }

    const payload = {
      estimatedMoveDate: form.estimatedMoveDate,
      typeOfMove: form.typeOfMove,
      officeSpaceSqft: isOffice ? form.officeSpaceSqft : null,
      sizeOfMove: isResidential ? form.sizeOfMove : null,
      movingFrom: form.movingFrom,
      accessCurrent: form.accessCurrent,
      floorCurrent: needsCurrentFloor ? form.floorCurrent : null,
      movingTo: form.movingTo,
      accessNew: form.accessNew,
      floorNew: needsNewFloor ? form.floorNew : null,
      firstName: form.firstName,
      lastName: form.lastName,
      email: form.email,
      phone: form.phone,
      extraStop: form.extraStop === "yes",
      extraStopDetails: needsStopSection
        ? {
            stopTypes: form.stopTypes,
            stopAddress: form.stopAddress,
            stopAccess: form.stopAccess,
            stopFloor: needsStopFloor ? form.stopFloor : null,
          }
        : null,
      preferredTimes: Object.entries(form.preferredTimes)
        .filter(([, v]) => v)
        .map(([k]) => k),
      additionalInfo: form.additionalInfo || "",
    };

    setIsSubmitting(true);
    try {
      const data = await postQuote(payload);
      if (data?.emailPreviewUrl) {
        setServerMsg(`${data.message} Preview: ${data.emailPreviewUrl}`);
      } else {
        setServerMsg(data?.message || "Quote submitted successfully.");
      }
    } catch (err) {
      setServerMsg(err?.message || "Something went wrong.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <>
      <PageHero
        title="Get Quote"
        subtitle="Tell us what you’re moving and we’ll get back with a fast estimate."
        bgImage="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop"
      />

      <div className="mx-auto max-w-5xl px-5 py-10 font-brand sm:px-8 md:px-10">
        <div className="text-left">
          <h1 className="text-[2rem] font-extrabold leading-[1.05] tracking-tight text-[#050504] md:text-[3.3rem] md:tracking-[-0.02em]">
            Your seamless move starts with a{" "}
            <span className="text-[#f75a05]">free quote within minutes</span>
          </h1>

          <p className="mt-4 text-[1.15rem] font-bold leading-[1.6] text-black/80 md:text-[1.35rem]">
            Fill the form below and we’ll get back to you fast.
          </p>
        </div>

        <form
          onSubmit={onSubmit}
          className="mt-10 space-y-8 text-[1.05rem] md:text-[1.1rem]"
        >
          <div className="grid gap-6 md:grid-cols-2">
            <Field label="Estimated move date" required>
              <Input
                type="date"
                value={form.estimatedMoveDate}
                onChange={(e) => update("estimatedMoveDate", e.target.value)}
              />
            </Field>

            <Field label="Type of move" required>
              <Select
                value={form.typeOfMove}
                onChange={(e) => {
                  const v = e.target.value;
                  setForm((p) => ({
                    ...p,
                    typeOfMove: v,
                    officeSpaceSqft: "",
                    sizeOfMove: "",
                  }));
                }}
              >
                {MOVE_TYPES.map((o) => (
                  <option key={o.value} value={o.value}>
                    {o.label}
                  </option>
                ))}
              </Select>
            </Field>
          </div>

          {isOffice && (
            <div className="grid gap-6 md:grid-cols-2">
              <Field label="Office space size (square foot)" required>
                <Input
                  type="number"
                  min="0"
                  placeholder="e.g. 1200"
                  value={form.officeSpaceSqft}
                  onChange={(e) => update("officeSpaceSqft", e.target.value)}
                />
              </Field>
              <div />
            </div>
          )}

          {isResidential && (
            <div className="grid gap-6 md:grid-cols-2">
              <Field label="Size of move" required>
                <Select
                  value={form.sizeOfMove}
                  onChange={(e) => update("sizeOfMove", e.target.value)}
                >
                  {SIZE_OF_MOVE.map((o) => (
                    <option key={o.value} value={o.value}>
                      {o.label}
                    </option>
                  ))}
                </Select>
              </Field>
              <div />
            </div>
          )}

          <div className="grid gap-6 md:grid-cols-2">
            <Field label="Moving from address" required>
              <Input
                placeholder="Enter a location"
                value={form.movingFrom}
                onChange={(e) => update("movingFrom", e.target.value)}
              />
            </Field>

            <div className="space-y-6">
              <Field label="Access (current location)" required>
                <Select
                  value={form.accessCurrent}
                  onChange={(e) => {
                    const v = e.target.value;
                    setForm((p) => ({
                      ...p,
                      accessCurrent: v,
                      floorCurrent: v === "walk_up" ? p.floorCurrent : "",
                    }));
                  }}
                >
                  {ACCESS_OPTIONS.map((o) => (
                    <option key={o.value} value={o.value}>
                      {o.label}
                    </option>
                  ))}
                </Select>
              </Field>

              {needsCurrentFloor && (
                <Field label="Floor (current location)" required>
                  <Select
                    value={form.floorCurrent}
                    onChange={(e) => update("floorCurrent", e.target.value)}
                  >
                    {FLOOR_OPTIONS.map((o) => (
                      <option key={o.value} value={o.value}>
                        {o.label}
                      </option>
                    ))}
                  </Select>
                </Field>
              )}
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <Field label="Moving to address" required>
              <Input
                placeholder="Enter a location"
                value={form.movingTo}
                onChange={(e) => update("movingTo", e.target.value)}
              />
            </Field>

            <div className="space-y-6">
              <Field label="Access (new location)" required>
                <Select
                  value={form.accessNew}
                  onChange={(e) => {
                    const v = e.target.value;
                    setForm((p) => ({
                      ...p,
                      accessNew: v,
                      floorNew: v === "walk_up" ? p.floorNew : "",
                    }));
                  }}
                >
                  {ACCESS_OPTIONS.map((o) => (
                    <option key={o.value} value={o.value}>
                      {o.label}
                    </option>
                  ))}
                </Select>
              </Field>

              {needsNewFloor && (
                <Field label="Floor (new location)" required>
                  <Select
                    value={form.floorNew}
                    onChange={(e) => update("floorNew", e.target.value)}
                  >
                    {FLOOR_OPTIONS.map((o) => (
                      <option key={o.value} value={o.value}>
                        {o.label}
                      </option>
                    ))}
                  </Select>
                </Field>
              )}
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-4">
            <Field label="First name" required>
              <Input
                value={form.firstName}
                onChange={(e) => update("firstName", e.target.value)}
              />
            </Field>
            <Field label="Last name">
              <Input
                value={form.lastName}
                onChange={(e) => update("lastName", e.target.value)}
              />
            </Field>
            <Field label="Email" required>
              <Input
                type="email"
                value={form.email}
                onChange={(e) => update("email", e.target.value)}
              />
            </Field>
            <Field label="Phone number" required>
              <Input
                value={form.phone}
                onChange={(e) => update("phone", e.target.value)}
              />
            </Field>
          </div>

          <div className="space-y-3">
            <div className="text-[1.02rem] font-bold text-[#050504] md:text-[1.05rem]">
              Do you need us to make an extra stop?
            </div>
            <div className="flex items-center gap-8">
              <Radio
                name="extraStop"
                checked={form.extraStop === "yes"}
                onChange={() => update("extraStop", "yes")}
                label="Yes"
              />
              <Radio
                name="extraStop"
                checked={form.extraStop === "no"}
                onChange={() => update("extraStop", "no")}
                label="No"
              />
            </div>
          </div>

          {needsStopSection && (
            <div className="space-y-6 rounded-xl border border-slate-200 bg-white p-6">
              <div className="text-[1.02rem] font-bold text-[#050504] md:text-[1.05rem]">
                Please select if this additional stop is a pick up or drop off address:
              </div>

              <div className="flex flex-wrap gap-8">
                <Checkbox
                  checked={form.stopTypes.pickup}
                  onChange={(v) => updateNested(["stopTypes", "pickup"], v)}
                  label="Pick-up"
                />
                <Checkbox
                  checked={form.stopTypes.dropoff}
                  onChange={(v) => updateNested(["stopTypes", "dropoff"], v)}
                  label="Drop-off"
                />
              </div>

              <Field label="Additional stop address" required>
                <Input
                  placeholder="Enter a location"
                  value={form.stopAddress}
                  onChange={(e) => update("stopAddress", e.target.value)}
                />
              </Field>

              <div className="grid gap-6 md:grid-cols-2">
                <Field label="Access (additional stop address)" required>
                  <Select
                    value={form.stopAccess}
                    onChange={(e) => {
                      const v = e.target.value;
                      setForm((p) => ({
                        ...p,
                        stopAccess: v,
                        stopFloor: v === "walk_up" ? p.stopFloor : "",
                      }));
                    }}
                  >
                    {ACCESS_OPTIONS.map((o) => (
                      <option key={o.value} value={o.value}>
                        {o.label}
                      </option>
                    ))}
                  </Select>
                </Field>

                {needsStopFloor ? (
                  <Field label="Floor (additional stop)" required>
                    <Select
                      value={form.stopFloor}
                      onChange={(e) => update("stopFloor", e.target.value)}
                    >
                      {FLOOR_OPTIONS.map((o) => (
                        <option key={o.value} value={o.value}>
                          {o.label}
                        </option>
                      ))}
                    </Select>
                  </Field>
                ) : (
                  <div />
                )}
              </div>
            </div>
          )}

          <div className="space-y-3">
            <div className="text-[1.02rem] font-bold text-[#050504] md:text-[1.05rem]">
              Preferred moving time:
            </div>
            <div className="flex flex-wrap gap-8">
              {TIME_OPTIONS.map((t) => (
                <Checkbox
                  key={t.value}
                  checked={form.preferredTimes[t.value]}
                  onChange={(v) => updateNested(["preferredTimes", t.value], v)}
                  label={t.label}
                />
              ))}
            </div>
          </div>

          <Field label="Any additional information you would like to share about your move?">
            <Textarea
              rows={5}
              value={form.additionalInfo}
              onChange={(e) => update("additionalInfo", e.target.value)}
            />
          </Field>

          <div className="flex flex-col items-center gap-3">
            <button
              type="submit"
              disabled={isSubmitting}
              className={classNames(
                buttonClasses.secondary,
                "gap-2",
                isSubmitting && "cursor-not-allowed opacity-70"
              )}
            >
              {isSubmitting ? "Sending..." : "Get My Quote"}
              {!isSubmitting ? <ButtonArrowUpRight /> : null}
            </button>

            {serverMsg ? (
              <div className="text-[1.02rem] font-semibold text-[#050504] md:text-[1.05rem]">
                {serverMsg}
              </div>
            ) : null}
          </div>
        </form>
      </div>

      <ServiceSection
        title="Keep moving forward with our complete moving services"
        subtitle="Whatever you need to move from point A to B, we will get it there safely."
        ids={[1, 2, 3, 4, 5, 6]}
        variant="dark"
      />
    </>
  );
}