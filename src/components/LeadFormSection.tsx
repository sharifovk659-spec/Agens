"use client";

import { motion } from "framer-motion";
import BenefitCard from "@/components/lead/BenefitCard";
import LeadForm from "@/components/lead/LeadForm";
import { useLanguage } from "@/lib/i18n/context";
import { LEAD_BENEFITS } from "@/lib/form";

export default function LeadFormSection() {
  const { t } = useLanguage();

  return (
    <section
      id="contact"
      className="relative overflow-hidden py-10 sm:py-12 lg:py-16"
    >
      <div className="absolute inset-0 bg-dark" />
      <div className="absolute inset-0 bg-radial-glow opacity-30" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">
        <div className="grid items-start gap-8 sm:gap-10 lg:grid-cols-2 lg:gap-14 xl:gap-16">
          <div className="min-w-0">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="section-heading text-3xl leading-[0.95] sm:text-4xl sm:text-5xl lg:text-6xl">
                {t.contact.titleLine1}
                <br />
                {t.contact.titleLine2}
              </h2>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-muted sm:mt-4 sm:text-base">
                {t.contact.description}
              </p>
            </motion.div>

            <div className="mt-6 space-y-2.5 sm:mt-8 sm:mt-10 sm:space-y-3">
              {LEAD_BENEFITS.map((item, i) => (
                <BenefitCard key={item.id} item={item} index={i} />
              ))}
            </div>
          </div>

          <LeadForm />
        </div>
      </div>
    </section>
  );
}
