"use client";

import { motion } from "framer-motion";
import BenefitCard from "@/components/lead/BenefitCard";
import LeadForm from "@/components/lead/LeadForm";
import { LEAD_BENEFITS } from "@/lib/form";

export default function LeadFormSection() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden py-10 sm:py-12 lg:py-16"
    >
      <div className="absolute inset-0 bg-dark" />
      <div className="absolute inset-0 bg-radial-glow opacity-30" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-14 xl:gap-16">
          {/* Left — benefits */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="section-heading text-4xl sm:text-5xl lg:text-6xl">
                IF YOU
                <br />
                WANT TO
              </h2>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-muted sm:text-base">
                Fill in this short form. Make sure to state accurate details —
                it helps us contact you when we see the right match.
              </p>
            </motion.div>

            <div className="mt-8 space-y-3 sm:mt-10">
              {LEAD_BENEFITS.map((item, i) => (
                <BenefitCard key={item.id} item={item} index={i} />
              ))}
            </div>
          </div>

          {/* Right — form */}
          <LeadForm />
        </div>
      </div>
    </section>
  );
}
