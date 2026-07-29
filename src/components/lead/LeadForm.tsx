"use client";

import { motion } from "framer-motion";
import { type FormEvent, useState } from "react";
import Button from "@/components/ui/Button";
import { useLanguage } from "@/lib/i18n/context";
import type { LeadFormData, LeadFormErrors } from "@/lib/form";

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
  const { t } = useLanguage();
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

  function validate(data: LeadFormData): LeadFormErrors {
    const next: LeadFormErrors = {};
    const e = t.contact.errors;

    if (!data.name.trim()) next.name = e.nameRequired;
    else if (data.name.trim().length < 2) next.name = e.nameShort;

    if (!data.phone.trim()) next.phone = e.phoneRequired;
    else if (data.phone.replace(/\D/g, "").length < 8) next.phone = e.phoneInvalid;

    if (!data.instagram.trim()) next.instagram = e.igRequired;
    else if (!/^@?[\w.]{2,30}$/.test(data.instagram.trim()))
      next.instagram = e.igInvalid;

    if (!data.email.trim()) next.email = e.emailRequired;
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim()))
      next.email = e.emailInvalid;

    if (!data.income) next.income = e.incomeRequired;
    if (!data.privacy) next.privacy = e.privacyRequired;

    return next;
  }

  function handleSubmit(ev: FormEvent) {
    ev.preventDefault();
    const validation = validate(form);
    setErrors(validation);
    if (Object.keys(validation).length > 0) return;

    console.log("Lead form submitted:", {
      ...form,
      instagram: form.instagram.startsWith("@")
        ? form.instagram
        : `@${form.instagram}`,
    });
    setSubmitted(true);
    setForm(initialForm);
    setTimeout(() => setSubmitted(false), 4000);
  }

  return (
    <motion.div
      className="card-hover rounded-2xl p-4 sm:p-7 lg:p-8"
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <p className="eyebrow mb-2">{t.contact.apply}</p>
      <h3 className="section-heading mb-5 text-xl sm:mb-6 sm:text-2xl sm:text-3xl">
        {t.contact.formTitle}
      </h3>

      <form onSubmit={handleSubmit} noValidate className="space-y-3.5 sm:space-y-4">
        <Field label={t.contact.name} error={errors.name}>
          <input
            type="text"
            value={form.name}
            onChange={(e) => handleChange("name", e.target.value)}
            placeholder={t.contact.name}
            autoComplete="name"
          />
        </Field>

        <Field label={t.contact.phone} error={errors.phone}>
          <input
            type="tel"
            value={form.phone}
            onChange={(e) => handleChange("phone", e.target.value)}
            placeholder="+971 50 000 0000"
            autoComplete="tel"
          />
        </Field>

        <Field label={t.contact.instagram} error={errors.instagram}>
          <input
            type="text"
            value={form.instagram}
            onChange={(e) => handleChange("instagram", e.target.value)}
            placeholder="@yourhandle"
            autoComplete="off"
          />
        </Field>

        <Field label={t.contact.email} error={errors.email}>
          <input
            type="email"
            value={form.email}
            onChange={(e) => handleChange("email", e.target.value)}
            placeholder="your@email.com"
            autoComplete="email"
          />
        </Field>

        <Field label={t.contact.income} error={errors.income}>
          <select
            value={form.income}
            onChange={(e) => handleChange("income", e.target.value)}
            className="w-full"
          >
            <option value="" disabled>
              {t.contact.incomePlaceholder}
            </option>
            {t.contact.incomeOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
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
              {t.contact.privacy}{" "}
              <a href="#" className="text-gold hover:text-gold-light">
                {t.contact.privacyLink}
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
          {t.contact.submit}
        </Button>

        {submitted && (
          <p className="text-center text-sm text-beige-muted" role="status">
            {t.contact.thanks}
          </p>
        )}
      </form>
    </motion.div>
  );
}
