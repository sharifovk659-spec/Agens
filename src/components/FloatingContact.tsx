"use client";

import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { HiOutlineChatAlt2, HiOutlinePhone } from "react-icons/hi";
import { SITE } from "@/lib/constants";

const ACTIONS = [
  { id: "wa", href: SITE.whatsapp, icon: FaWhatsapp, label: "WhatsApp" },
  { id: "phone", href: SITE.phoneTel, icon: HiOutlinePhone, label: "Phone" },
  {
    id: "chat",
    href: "#contact",
    icon: HiOutlineChatAlt2,
    label: "Chat",
  },
] as const;

export default function FloatingContact() {
  return (
    <div className="fixed bottom-6 right-4 z-50 flex flex-col gap-3 sm:bottom-8 sm:right-6">
      {ACTIONS.map(({ id, href, icon: Icon, label }, i) => (
        <motion.a
          key={id}
          href={href}
          target={id === "wa" ? "_blank" : undefined}
          rel={id === "wa" ? "noopener noreferrer" : undefined}
          className="fab-button group"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 + i * 0.1, duration: 0.4 }}
          whileHover={{ y: -2, scale: 1.04 }}
          aria-label={label}
        >
          <span className="fab-button-ring" aria-hidden />
          <span className="fab-button-inner">
            <Icon className="text-[1.35rem] text-beige" />
          </span>
        </motion.a>
      ))}
    </div>
  );
}
