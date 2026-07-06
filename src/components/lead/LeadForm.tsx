"use client";

import { motion } from "framer-motion";
import { type FormEvent, useState } from "react";
import Button from "@/components/ui/Button";
import {
  INCOME_OPTIONS,
  type LeadFormData,
  type LeadFormErrors,
  validateLeadForm,
} from "@/lib/form";

const initialForm: LeadFormData = {
  name: "",
  phone: "",
  instagram: "",
  email: "",
  income: "",
  privacy: false,
};

type FieldProps = {
  label: string;
  error?: string;
  children: React.ReactNode;
};

function Field({ label, error, children }: FieldProps) {
  return (
    <div>
      <label className="form-label">{label}</label>
      {children}
      {error && (
        <p className="mt-1 text-xs text-red-400" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

export default function LeadForm() {
  const [form, setForm] = useState<LeadFormData>(initialForm);
  const [errors, setErrors] = useState<LeadFormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  function handleChange<K extends keyof LeadFormData>(
    key: K,
    value: LeadFormData[K]
  ) {
    setForm((prev) => ({ ...prev, [key]: value }));
    if (errors[key]) {
      setErrors((prev) => ({ ...prev, [key]: undefined }));
    }
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const validation = validateLeadForm(form);
    setErrors(validation);
    if (Object.keys(validation).length > 0) return;

    const payload = {
      ...form,
      instagram: form.instagram.startsWith("@")
        ? form.instagram
        : `@${form.instagram}`,
    };

    console.log("Lead form submitted:", payload);
    setSubmitted(true);
    setForm(initialForm);
    setTimeout(() => setSubmitted(false), 4000);
  }

  return (
    <motion.div
      className="card-hover rounded-2xl p-5 sm:p-7 lg:p-8"
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <p className="eyebrow mb-2">Apply now</p>
      <h3 className="section-heading mb-6 text-2xl sm:text-3xl">
        Fill in the short form
      </h3>

      <form onSubmit={handleSubmit} noValidate className="space-y-4">
        <Field label="Your Name" error={errors.name}>
          <input
            type="text"
            value={form.name}
            onChange={(e) => handleChange("name", e.target.value)}
            placeholder="Your Name"
            autoComplete="name"
          />
        </Field>

        <Field label="Phone" error={errors.phone}>
          <input
            type="tel"
            value={form.phone}
            onChange={(e) => handleChange("phone", e.target.value)}
            placeholder="+971 50 000 0000"
            autoComplete="tel"
          />
        </Field>

        <Field label="Instagram" error={errors.instagram}>
          <input
            type="text"
            value={form.instagram}
            onChange={(e) => handleChange("instagram", e.target.value)}
            placeholder="@yourhandle"
            autoComplete="off"
          />
        </Field>

        <Field label="Email" error={errors.email}>
          <input
            type="email"
            value={form.email}
            onChange={(e) => handleChange("email", e.target.value)}
            placeholder="your@email.com"
            autoComplete="email"
          />
        </Field>

        <Field label="Monthly income (USD)" error={errors.income}>
          <div className="space-y-2">
            {INCOME_OPTIONS.map((option) => (
              <label
                key={option}
                className={`flex cursor-pointer items-center gap-3 rounded-xl border px-3 py-2.5 text-sm transition duration-300 ${
                  form.income === option
                    ? "border-gold/50 bg-gold/10 font-medium text-beige"
                    : "border-gold/20 bg-background/40 text-beige-muted hover:border-gold/35"
                }`}
              >
                <input
                  type="radio"
                  name="income"
                  value={option}
                  checked={form.income === option}
                  onChange={(e) => handleChange("income", e.target.value)}
                  className="accent-gold"
                />
                {option}
              </label>
            ))}
          </div>
        </Field>

        <div>
          <label className="flex cursor-pointer items-start gap-3 text-sm text-beige-muted">
            <input
              type="checkbox"
              checked={form.privacy}
              onChange={(e) => handleChange("privacy", e.target.checked)}
              className="mt-0.5 accent-gold"
            />
            <span>
              I agree to the{" "}
              <a href="#" className="text-gold hover:text-gold-light">
                Privacy Policy
              </a>
            </span>
          </label>
          {errors.privacy && (
            <p className="mt-1 text-xs text-red-400" role="alert">
              {errors.privacy}
            </p>
          )}
        </div>

        <Button type="submit" className="w-full">
          Submit application
        </Button>

        {submitted && (
          <p className="text-center text-sm text-beige-muted" role="status">
            Thank you! We&apos;ll be in touch soon.
          </p>
        )}
      </form>
    </motion.div>
  );
}
