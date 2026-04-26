"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import BorderGlow from "@/components/BorderGlow";
import {
  getSupabaseBrowser,
  STORAGE_BUCKET,
  STORAGE_PREFIX,
  STUDY_ABROAD_TABLE,
} from "@/lib/supabase";

interface Props {
  initialCountry: string | null;
  originPage: string | null;
}

const goldButtonStyle: React.CSSProperties = {
  background:
    "linear-gradient(180deg, #e5d285 0%, #d7be59 40%, #c4a940 100%)",
  color: "#000",
  border: "1px solid rgba(255,255,255,0.15)",
  boxShadow:
    "0 4px 12px -2px rgba(0,0,0,0.5), 0 2px 4px -1px rgba(0,0,0,0.3), 0 0 24px -4px rgba(215,190,89,0.45), inset 0 1px 0 0 rgba(255,255,255,0.35), inset 0 2px 4px 0 rgba(255,255,255,0.1), inset 0 -1px 0 0 rgba(0,0,0,0.15), inset 0 -2px 4px 0 rgba(0,0,0,0.08)",
};

const ghostButtonStyle: React.CSSProperties = {
  background: "transparent",
  color: "#d7be59",
  border: "1px solid rgba(215,190,89,0.35)",
};

const inputStyle: React.CSSProperties = {
  backgroundColor: "#0f0f10",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: 12,
  color: "#eee",
  padding: "12px 14px",
  width: "100%",
  fontSize: 14,
  outline: "none",
  transition: "border-color 0.2s ease, box-shadow 0.2s ease",
};

const COUNTRY_OPTIONS: Array<{ value: string; label: string }> = [
  { value: "canada", label: "Canada" },
  { value: "australia", label: "Australia" },
  { value: "uk", label: "UK" },
  { value: "usa", label: "USA" },
  { value: "europe", label: "Europe" },
  { value: "new_zealand", label: "New Zealand" },
  { value: "germany", label: "Germany" },
  { value: "russia", label: "Russia" },
  { value: "uae", label: "UAE" },
  { value: "singapore", label: "Singapore" },
  { value: "other", label: "Other" },
];

const SERVICE_OPTIONS: Array<{ value: string; label: string }> = [
  { value: "career_counselling", label: "Career Counselling" },
  { value: "university_selection", label: "University Selection" },
  { value: "application_support", label: "Application Support" },
  { value: "visa_assistance", label: "Visa Assistance" },
  { value: "scholarship_guidance", label: "Scholarship Guidance" },
  { value: "pre_departure_support", label: "Pre-Departure Support" },
  { value: "other", label: "Other" },
];

const INTAKE_OPTIONS = [
  { value: "january", label: "January" },
  { value: "may", label: "May" },
  { value: "september", label: "September" },
  { value: "other", label: "Other" },
];

const ENGLISH_TEST_OPTIONS = [
  { value: "ielts", label: "IELTS" },
  { value: "toefl", label: "TOEFL" },
  { value: "pte", label: "PTE" },
  { value: "duolingo", label: "Duolingo" },
  { value: "other", label: "Other" },
  { value: "none", label: "None / Not yet" },
];

const STEPS = [
  "Personal Information",
  "Academic Information",
  "Study Preferences",
  "Services Required",
  "Additional Information",
  "Review & Submit",
];

interface FormState {
  full_name: string;
  date_of_birth: string;
  gender: string;
  nationality: string;
  phone: string;
  email: string;
  current_address: string;

  highest_qualification: string;
  year_of_passing: string;
  institution: string;
  percentage_or_gpa: string;
  field_of_study: string;
  additional_quals: string;

  preferred_countries: string[];
  preferred_country_other: string;
  intake_preference: string;
  intake_other: string;

  services_required: string[];
  services_other: string;

  english_test: string;
  english_test_other: string;
  english_score: string;
  test_date: string;
  hear_about_us: string;
  specific_requirements: string;

  passport_file: File | null;
  transcript_file: File | null;
  english_test_file: File | null;

  consent_accuracy: boolean;
  consent_contact: boolean;
  applicant_signature: string;
}

function emptyState(initialCountry: string | null): FormState {
  return {
    full_name: "",
    date_of_birth: "",
    gender: "",
    nationality: "",
    phone: "",
    email: "",
    current_address: "",
    highest_qualification: "",
    year_of_passing: "",
    institution: "",
    percentage_or_gpa: "",
    field_of_study: "",
    additional_quals: "",
    preferred_countries: initialCountry ? [initialCountry] : [],
    preferred_country_other: "",
    intake_preference: "",
    intake_other: "",
    services_required: [],
    services_other: "",
    english_test: "",
    english_test_other: "",
    english_score: "",
    test_date: "",
    hear_about_us: "",
    specific_requirements: "",
    passport_file: null,
    transcript_file: null,
    english_test_file: null,
    consent_accuracy: false,
    consent_contact: false,
    applicant_signature: "",
  };
}

const MAX_FILE_BYTES = 5 * 1024 * 1024;
const ACCEPTED_TYPES = ["application/pdf", "image/jpeg", "image/png", "image/jpg"];

export default function ApplyForm({ initialCountry, originPage }: Props) {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const [state, setState] = useState<FormState>(() => emptyState(initialCountry));
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const set = <K extends keyof FormState>(key: K, value: FormState[K]) =>
    setState((prev) => ({ ...prev, [key]: value }));

  const toggleArray = (key: "preferred_countries" | "services_required", value: string) =>
    setState((prev) => ({
      ...prev,
      [key]: prev[key].includes(value)
        ? prev[key].filter((v) => v !== value)
        : [...prev[key], value],
    }));

  const validateStep = (): string | null => {
    switch (step) {
      case 0:
        if (!state.full_name.trim()) return "Full name is required.";
        if (!state.date_of_birth) return "Date of birth is required.";
        if (!state.nationality.trim()) return "Nationality is required.";
        if (!state.phone.trim()) return "Phone number is required.";
        if (!state.email.trim() || !/^\S+@\S+\.\S+$/.test(state.email))
          return "A valid email is required.";
        if (!state.current_address.trim()) return "Current address is required.";
        return null;
      case 1:
        if (!state.highest_qualification.trim())
          return "Highest qualification is required.";
        if (!state.year_of_passing.trim()) return "Year of passing is required.";
        if (!state.institution.trim()) return "Institution name is required.";
        if (!state.percentage_or_gpa.trim()) return "Percentage / GPA is required.";
        if (!state.field_of_study.trim()) return "Field of study is required.";
        return null;
      case 2:
        if (state.preferred_countries.length === 0)
          return "Select at least one preferred country.";
        if (state.preferred_countries.includes("other") && !state.preferred_country_other.trim())
          return "Please specify the other preferred country.";
        if (!state.intake_preference) return "Select an intake preference.";
        if (state.intake_preference === "other" && !state.intake_other.trim())
          return "Please specify your intake.";
        return null;
      case 3:
        if (state.services_required.length === 0)
          return "Select at least one service.";
        if (state.services_required.includes("other") && !state.services_other.trim())
          return "Please specify the other service.";
        return null;
      case 4:
        for (const f of [state.passport_file, state.transcript_file, state.english_test_file]) {
          if (!f) continue;
          if (f.size > MAX_FILE_BYTES) return `${f.name} exceeds 5 MB.`;
          if (!ACCEPTED_TYPES.includes(f.type))
            return `${f.name} must be PDF, JPG, or PNG.`;
        }
        return null;
      case 5:
        if (!state.consent_accuracy)
          return "You must confirm that the information is accurate.";
        if (!state.consent_contact)
          return "You must agree to be contacted by Mindstorm.";
        if (!state.applicant_signature.trim())
          return "Please type your full name as your signature.";
        return null;
      default:
        return null;
    }
  };

  const next = () => {
    const err = validateStep();
    if (err) {
      setError(err);
      return;
    }
    setError(null);
    setStep((s) => Math.min(s + 1, STEPS.length - 1));
    if (typeof window !== "undefined")
      window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const prev = () => {
    setError(null);
    setStep((s) => Math.max(s - 1, 0));
    if (typeof window !== "undefined")
      window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const submit = async () => {
    const err = validateStep();
    if (err) {
      setError(err);
      return;
    }
    setSubmitting(true);
    setError(null);
    try {
      const supabase = getSupabaseBrowser();
      const folder = `${STORAGE_PREFIX}/${crypto.randomUUID()}`;

      const uploadOne = async (
        file: File | null,
        field: string
      ): Promise<string | null> => {
        if (!file) return null;
        const safe = file.name.replace(/[^a-zA-Z0-9._-]/g, "_");
        const path = `${folder}/${field}-${Date.now()}-${safe}`;
        const { error: upErr } = await supabase.storage
          .from(STORAGE_BUCKET)
          .upload(path, file, { upsert: false, contentType: file.type });
        if (upErr) throw new Error(`Upload failed (${field}): ${upErr.message}`);
        return path;
      };

      const [passport_file_path, transcript_file_path, english_test_file_path] =
        await Promise.all([
          uploadOne(state.passport_file, "passport"),
          uploadOne(state.transcript_file, "transcript"),
          uploadOne(state.english_test_file, "english-test"),
        ]);

      const payload = {
        origin_page: originPage,
        full_name: state.full_name.trim(),
        date_of_birth: state.date_of_birth,
        gender: state.gender || null,
        nationality: state.nationality.trim(),
        phone: state.phone.trim(),
        email: state.email.trim(),
        current_address: state.current_address.trim(),
        highest_qualification: state.highest_qualification.trim(),
        year_of_passing: state.year_of_passing.trim(),
        institution: state.institution.trim(),
        percentage_or_gpa: state.percentage_or_gpa.trim(),
        field_of_study: state.field_of_study.trim(),
        additional_quals: state.additional_quals.trim() || null,
        preferred_countries: state.preferred_countries,
        preferred_country_other: state.preferred_countries.includes("other")
          ? state.preferred_country_other.trim() || null
          : null,
        intake_preference: state.intake_preference,
        intake_other:
          state.intake_preference === "other"
            ? state.intake_other.trim() || null
            : null,
        services_required: state.services_required,
        services_other: state.services_required.includes("other")
          ? state.services_other.trim() || null
          : null,
        english_test: state.english_test || null,
        english_test_other:
          state.english_test === "other"
            ? state.english_test_other.trim() || null
            : null,
        english_score: state.english_score.trim() || null,
        test_date: state.test_date || null,
        hear_about_us: state.hear_about_us.trim() || null,
        specific_requirements: state.specific_requirements.trim() || null,
        passport_file_path,
        transcript_file_path,
        english_test_file_path,
        consent_accuracy: state.consent_accuracy,
        consent_contact: state.consent_contact,
        applicant_signature: state.applicant_signature.trim(),
      };

      const { data, error: insErr } = await supabase
        .from(STUDY_ABROAD_TABLE)
        .insert(payload)
        .select("reference")
        .single();

      if (insErr || !data) {
        throw new Error(insErr?.message ?? "Submission failed.");
      }

      router.push(`/apply/success?ref=${encodeURIComponent(data.reference)}`);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Something went wrong. Please try again.");
      setSubmitting(false);
    }
  };

  const progressPct = useMemo(
    () => Math.round(((step + 1) / STEPS.length) * 100),
    [step]
  );

  return (
    <section className="relative min-h-screen pt-32 pb-24 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <p
            className="text-xs uppercase tracking-[0.25em] mb-3"
            style={{ color: "#d7be59" }}
          >
            Study Abroad Application
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3" style={{ color: "#eee" }}>
            Begin Your <span className="text-gradient-gold">Journey</span>
          </h1>
          <p className="text-sm sm:text-base" style={{ color: "#999" }}>
            Step {step + 1} of {STEPS.length} — {STEPS[step]}
          </p>
          <div className="mt-5 h-1.5 w-full max-w-md mx-auto rounded-full bg-white/5 overflow-hidden">
            <motion.div
              className="h-full"
              style={{
                background:
                  "linear-gradient(90deg, #d7be59, #e5d285, #b89e3a)",
              }}
              animate={{ width: `${progressPct}%` }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            />
          </div>
        </div>

        <BorderGlow
          backgroundColor="#0a0a0a"
          borderRadius={24}
          glowColor="45 70 60"
          colors={["#d7be59", "#e5d285", "#b89e3a"]}
          edgeSensitivity={3}
          glowRadius={30}
          glowIntensity={2.5}
          coneSpread={30}
        >
          <div className="p-6 sm:p-10" style={{ borderRadius: 24 }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={step}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.25 }}
              >
                {step === 0 && (
                  <PersonalStep state={state} set={set} />
                )}
                {step === 1 && <AcademicStep state={state} set={set} />}
                {step === 2 && (
                  <PreferencesStep
                    state={state}
                    set={set}
                    toggle={(v) => toggleArray("preferred_countries", v)}
                  />
                )}
                {step === 3 && (
                  <ServicesStep
                    state={state}
                    set={set}
                    toggle={(v) => toggleArray("services_required", v)}
                  />
                )}
                {step === 4 && <AdditionalStep state={state} set={set} />}
                {step === 5 && <ReviewStep state={state} set={set} />}
              </motion.div>
            </AnimatePresence>

            {error && (
              <div
                className="mt-6 p-3 rounded-lg text-sm"
                style={{
                  background: "rgba(220, 38, 38, 0.1)",
                  border: "1px solid rgba(220, 38, 38, 0.3)",
                  color: "#fca5a5",
                }}
              >
                {error}
              </div>
            )}

            <div className="mt-8 flex flex-col-reverse sm:flex-row items-stretch sm:items-center justify-between gap-3">
              <button
                type="button"
                onClick={prev}
                disabled={step === 0 || submitting}
                className="inline-flex items-center justify-center gap-2 rounded-full px-7 py-3 text-sm font-semibold uppercase tracking-wide transition-all disabled:opacity-40 disabled:cursor-not-allowed"
                style={ghostButtonStyle}
              >
                ← Back
              </button>
              {step < STEPS.length - 1 ? (
                <button
                  type="button"
                  onClick={next}
                  disabled={submitting}
                  className="inline-flex items-center justify-center gap-2 rounded-full px-8 py-3.5 text-sm font-semibold uppercase tracking-wide transition-transform"
                  style={goldButtonStyle}
                >
                  Continue →
                </button>
              ) : (
                <button
                  type="button"
                  onClick={submit}
                  disabled={submitting}
                  className="inline-flex items-center justify-center gap-2 rounded-full px-8 py-3.5 text-sm font-semibold uppercase tracking-wide transition-transform disabled:opacity-60"
                  style={goldButtonStyle}
                >
                  {submitting ? "Submitting…" : "Submit Application"}
                </button>
              )}
            </div>
          </div>
        </BorderGlow>
      </div>
    </section>
  );
}

/* ---------- Reusable bits ---------- */

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="block text-xs uppercase tracking-wider mb-2" style={{ color: "#999" }}>
        {label}
        {required && <span style={{ color: "#d7be59" }}> *</span>}
      </span>
      {children}
    </label>
  );
}

function CheckCard({
  active,
  onClick,
  label,
}: {
  active: boolean;
  onClick: () => void;
  label: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="text-left rounded-xl px-4 py-3 text-sm transition-all"
      style={{
        background: active ? "rgba(215,190,89,0.12)" : "#0f0f10",
        border: active
          ? "1px solid rgba(215,190,89,0.55)"
          : "1px solid rgba(255,255,255,0.08)",
        color: active ? "#f5ecc8" : "#ddd",
      }}
    >
      <span
        aria-hidden
        className="inline-block w-4 h-4 rounded mr-2 align-middle"
        style={{
          background: active ? "#d7be59" : "transparent",
          border: "1px solid rgba(215,190,89,0.55)",
        }}
      />
      {label}
    </button>
  );
}

function RadioCard({
  active,
  onClick,
  label,
}: {
  active: boolean;
  onClick: () => void;
  label: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="text-left rounded-xl px-4 py-3 text-sm transition-all"
      style={{
        background: active ? "rgba(215,190,89,0.12)" : "#0f0f10",
        border: active
          ? "1px solid rgba(215,190,89,0.55)"
          : "1px solid rgba(255,255,255,0.08)",
        color: active ? "#f5ecc8" : "#ddd",
      }}
    >
      <span
        aria-hidden
        className="inline-block w-4 h-4 rounded-full mr-2 align-middle"
        style={{
          background: active ? "#d7be59" : "transparent",
          border: "1px solid rgba(215,190,89,0.55)",
        }}
      />
      {label}
    </button>
  );
}

function FileInput({
  label,
  file,
  onChange,
}: {
  label: string;
  file: File | null;
  onChange: (f: File | null) => void;
}) {
  return (
    <Field label={label}>
      <div
        className="rounded-xl px-4 py-3 flex items-center justify-between gap-3"
        style={{
          background: "#0f0f10",
          border: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <span className="text-sm truncate" style={{ color: file ? "#f5ecc8" : "#777" }}>
          {file ? file.name : "PDF, JPG or PNG · max 5 MB"}
        </span>
        <label
          className="cursor-pointer rounded-full px-3 py-1.5 text-xs font-semibold uppercase tracking-wide"
          style={{
            background: "rgba(215,190,89,0.15)",
            color: "#d7be59",
            border: "1px solid rgba(215,190,89,0.4)",
          }}
        >
          {file ? "Replace" : "Choose file"}
          <input
            type="file"
            className="hidden"
            accept=".pdf,.jpg,.jpeg,.png,application/pdf,image/jpeg,image/png"
            onChange={(e) => onChange(e.target.files?.[0] ?? null)}
          />
        </label>
        {file && (
          <button
            type="button"
            onClick={() => onChange(null)}
            className="text-xs uppercase tracking-wide"
            style={{ color: "#999" }}
          >
            Remove
          </button>
        )}
      </div>
    </Field>
  );
}

/* ---------- Steps ---------- */

type SetFn = <K extends keyof FormState>(key: K, value: FormState[K]) => void;

function PersonalStep({ state, set }: { state: FormState; set: SetFn }) {
  return (
    <div className="space-y-5">
      <h2 className="text-xl font-semibold" style={{ color: "#f5ecc8" }}>
        1. Personal Information
      </h2>
      <div className="grid sm:grid-cols-2 gap-4">
        <Field label="Full Name" required>
          <input
            value={state.full_name}
            onChange={(e) => set("full_name", e.target.value)}
            style={inputStyle}
            placeholder="As on your passport"
          />
        </Field>
        <Field label="Date of Birth" required>
          <input
            type="date"
            value={state.date_of_birth}
            onChange={(e) => set("date_of_birth", e.target.value)}
            style={inputStyle}
          />
        </Field>
        <Field label="Gender">
          <div className="flex gap-2">
            {["male", "female", "other"].map((g) => (
              <RadioCard
                key={g}
                active={state.gender === g}
                onClick={() => set("gender", g)}
                label={g[0].toUpperCase() + g.slice(1)}
              />
            ))}
          </div>
        </Field>
        <Field label="Nationality" required>
          <input
            value={state.nationality}
            onChange={(e) => set("nationality", e.target.value)}
            style={inputStyle}
            placeholder="e.g. Indian"
          />
        </Field>
        <Field label="Phone / Mobile" required>
          <input
            value={state.phone}
            onChange={(e) => set("phone", e.target.value)}
            style={inputStyle}
            placeholder="+971 50 123 4567"
          />
        </Field>
        <Field label="Email" required>
          <input
            type="email"
            value={state.email}
            onChange={(e) => set("email", e.target.value)}
            style={inputStyle}
            placeholder="you@example.com"
          />
        </Field>
      </div>
      <Field label="Current Address" required>
        <textarea
          value={state.current_address}
          onChange={(e) => set("current_address", e.target.value)}
          rows={3}
          style={{ ...inputStyle, resize: "vertical" }}
          placeholder="Street, City, Country"
        />
      </Field>
    </div>
  );
}

function AcademicStep({ state, set }: { state: FormState; set: SetFn }) {
  return (
    <div className="space-y-5">
      <h2 className="text-xl font-semibold" style={{ color: "#f5ecc8" }}>
        2. Academic Information
      </h2>
      <div className="grid sm:grid-cols-2 gap-4">
        <Field label="Highest Qualification Completed" required>
          <input
            value={state.highest_qualification}
            onChange={(e) => set("highest_qualification", e.target.value)}
            style={inputStyle}
            placeholder="e.g. Bachelor's in Engineering"
          />
        </Field>
        <Field label="Year of Passing" required>
          <input
            value={state.year_of_passing}
            onChange={(e) => set("year_of_passing", e.target.value)}
            style={inputStyle}
            placeholder="e.g. 2024"
          />
        </Field>
        <Field label="Institution / University" required>
          <input
            value={state.institution}
            onChange={(e) => set("institution", e.target.value)}
            style={inputStyle}
          />
        </Field>
        <Field label="Percentage / GPA" required>
          <input
            value={state.percentage_or_gpa}
            onChange={(e) => set("percentage_or_gpa", e.target.value)}
            style={inputStyle}
            placeholder="e.g. 78% or 3.6/4"
          />
        </Field>
        <Field label="Field of Study" required>
          <input
            value={state.field_of_study}
            onChange={(e) => set("field_of_study", e.target.value)}
            style={inputStyle}
            placeholder="e.g. Computer Science"
          />
        </Field>
      </div>
      <Field label="Additional Qualifications / Certifications">
        <textarea
          value={state.additional_quals}
          onChange={(e) => set("additional_quals", e.target.value)}
          rows={3}
          style={{ ...inputStyle, resize: "vertical" }}
          placeholder="Short courses, certifications, awards, etc."
        />
      </Field>
    </div>
  );
}

function PreferencesStep({
  state,
  set,
  toggle,
}: {
  state: FormState;
  set: SetFn;
  toggle: (v: string) => void;
}) {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold" style={{ color: "#f5ecc8" }}>
        3. Study Preferences
      </h2>
      <Field label="Preferred Countries / Destinations (select all that apply)" required>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
          {COUNTRY_OPTIONS.map((opt) => (
            <CheckCard
              key={opt.value}
              active={state.preferred_countries.includes(opt.value)}
              onClick={() => toggle(opt.value)}
              label={opt.label}
            />
          ))}
        </div>
        {state.preferred_countries.includes("other") && (
          <input
            className="mt-3"
            value={state.preferred_country_other}
            onChange={(e) => set("preferred_country_other", e.target.value)}
            style={inputStyle}
            placeholder="Specify other country"
          />
        )}
      </Field>
      <Field label="Intake Preference" required>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {INTAKE_OPTIONS.map((opt) => (
            <RadioCard
              key={opt.value}
              active={state.intake_preference === opt.value}
              onClick={() => set("intake_preference", opt.value)}
              label={opt.label}
            />
          ))}
        </div>
        {state.intake_preference === "other" && (
          <input
            className="mt-3"
            value={state.intake_other}
            onChange={(e) => set("intake_other", e.target.value)}
            style={inputStyle}
            placeholder="Specify intake (e.g. February 2027)"
          />
        )}
      </Field>
    </div>
  );
}

function ServicesStep({
  state,
  set,
  toggle,
}: {
  state: FormState;
  set: SetFn;
  toggle: (v: string) => void;
}) {
  return (
    <div className="space-y-5">
      <h2 className="text-xl font-semibold" style={{ color: "#f5ecc8" }}>
        4. Services Required
      </h2>
      <p className="text-sm" style={{ color: "#999" }}>
        Pick the support areas you'd like Mindstorm to handle for you.
      </p>
      <div className="grid sm:grid-cols-2 gap-2">
        {SERVICE_OPTIONS.map((opt) => (
          <CheckCard
            key={opt.value}
            active={state.services_required.includes(opt.value)}
            onClick={() => toggle(opt.value)}
            label={opt.label}
          />
        ))}
      </div>
      {state.services_required.includes("other") && (
        <input
          value={state.services_other}
          onChange={(e) => set("services_other", e.target.value)}
          style={inputStyle}
          placeholder="Specify other service"
        />
      )}
    </div>
  );
}

function AdditionalStep({ state, set }: { state: FormState; set: SetFn }) {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold" style={{ color: "#f5ecc8" }}>
        5. Additional Information
      </h2>
      <Field label="English Language Test (if any)">
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
          {ENGLISH_TEST_OPTIONS.map((opt) => (
            <RadioCard
              key={opt.value}
              active={state.english_test === opt.value}
              onClick={() => set("english_test", opt.value)}
              label={opt.label}
            />
          ))}
        </div>
        {state.english_test === "other" && (
          <input
            className="mt-3"
            value={state.english_test_other}
            onChange={(e) => set("english_test_other", e.target.value)}
            style={inputStyle}
            placeholder="Specify test"
          />
        )}
      </Field>
      <div className="grid sm:grid-cols-2 gap-4">
        <Field label="Score (if applicable)">
          <input
            value={state.english_score}
            onChange={(e) => set("english_score", e.target.value)}
            style={inputStyle}
            placeholder="e.g. 7.5 / 105"
          />
        </Field>
        <Field label="Test Date (if applicable)">
          <input
            type="date"
            value={state.test_date}
            onChange={(e) => set("test_date", e.target.value)}
            style={inputStyle}
          />
        </Field>
      </div>
      <Field label="How did you hear about us?">
        <input
          value={state.hear_about_us}
          onChange={(e) => set("hear_about_us", e.target.value)}
          style={inputStyle}
          placeholder="Google, Instagram, friend referral…"
        />
      </Field>
      <Field label="Any specific requirements or questions?">
        <textarea
          value={state.specific_requirements}
          onChange={(e) => set("specific_requirements", e.target.value)}
          rows={3}
          style={{ ...inputStyle, resize: "vertical" }}
        />
      </Field>

      <div className="space-y-3 pt-2">
        <p className="text-xs uppercase tracking-wider" style={{ color: "#999" }}>
          Documents (optional, but helpful)
        </p>
        <div className="grid sm:grid-cols-2 gap-4">
          <FileInput
            label="Passport copy"
            file={state.passport_file}
            onChange={(f) => set("passport_file", f)}
          />
          <FileInput
            label="Academic transcript"
            file={state.transcript_file}
            onChange={(f) => set("transcript_file", f)}
          />
          <FileInput
            label="English test result"
            file={state.english_test_file}
            onChange={(f) => set("english_test_file", f)}
          />
        </div>
      </div>
    </div>
  );
}

function ReviewStep({ state, set }: { state: FormState; set: SetFn }) {
  const summary: Array<[string, string]> = [
    ["Name", state.full_name],
    ["Email", state.email],
    ["Phone", state.phone],
    ["Nationality", state.nationality],
    ["Highest qualification", state.highest_qualification],
    [
      "Preferred countries",
      state.preferred_countries
        .map((c) =>
          c === "other"
            ? `Other: ${state.preferred_country_other}`
            : COUNTRY_OPTIONS.find((o) => o.value === c)?.label ?? c
        )
        .join(", "),
    ],
    [
      "Intake",
      state.intake_preference === "other"
        ? `Other: ${state.intake_other}`
        : state.intake_preference,
    ],
    [
      "Services",
      state.services_required
        .map((s) =>
          s === "other"
            ? `Other: ${state.services_other}`
            : SERVICE_OPTIONS.find((o) => o.value === s)?.label ?? s
        )
        .join(", "),
    ],
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold" style={{ color: "#f5ecc8" }}>
        6. Review & Declaration
      </h2>
      <div
        className="rounded-xl p-4 sm:p-5 text-sm space-y-2"
        style={{
          background: "rgba(255,255,255,0.02)",
          border: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        {summary.map(([k, v]) => (
          <div key={k} className="flex flex-col sm:flex-row sm:gap-3">
            <span className="sm:w-44 text-xs uppercase tracking-wider" style={{ color: "#888" }}>
              {k}
            </span>
            <span style={{ color: "#ddd" }}>{v || "—"}</span>
          </div>
        ))}
      </div>

      <div
        className="rounded-xl p-4 text-xs leading-relaxed"
        style={{
          background: "rgba(215,190,89,0.06)",
          border: "1px solid rgba(215,190,89,0.2)",
          color: "#bbb",
        }}
      >
        I hereby declare that the information provided in this application is true and
        correct to the best of my knowledge. I understand that any false information
        may result in the rejection of my application.
      </div>

      <label className="flex items-start gap-3 text-sm cursor-pointer" style={{ color: "#ccc" }}>
        <input
          type="checkbox"
          checked={state.consent_accuracy}
          onChange={(e) => set("consent_accuracy", e.target.checked)}
          className="mt-0.5"
        />
        <span>
          I confirm that the information I have provided is accurate and complete.
        </span>
      </label>
      <label className="flex items-start gap-3 text-sm cursor-pointer" style={{ color: "#ccc" }}>
        <input
          type="checkbox"
          checked={state.consent_contact}
          onChange={(e) => set("consent_contact", e.target.checked)}
          className="mt-0.5"
        />
        <span>
          I agree to be contacted by Mindstorm Strategic Consulting via phone, email, or
          WhatsApp regarding my application.
        </span>
      </label>

      <Field label="Applicant Signature (type your full name)" required>
        <input
          value={state.applicant_signature}
          onChange={(e) => set("applicant_signature", e.target.value)}
          style={{ ...inputStyle, fontStyle: "italic" }}
          placeholder="Type your full name"
        />
      </Field>
    </div>
  );
}
