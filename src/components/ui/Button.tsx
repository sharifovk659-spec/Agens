"use client";

import { motion } from "framer-motion";
import { type ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "outline" | "ghost" | "dark";
  className?: string;
  type?: "button" | "submit";
  disabled?: boolean;
};

export default function Button({
  children,
  href,
  onClick,
  variant = "primary",
  className = "",
  type = "button",
  disabled = false,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-medium uppercase tracking-widest transition-[transform,opacity,background-color,border-color,color] duration-300 disabled:pointer-events-none disabled:opacity-60";

  const variants = {
    primary:
      "border border-gold/30 bg-gold text-background hover:bg-gold-light",
    outline:
      "border border-gold/50 text-beige hover:border-gold hover:bg-gold/10",
    ghost: "text-beige-muted hover:text-beige",
    dark: "border border-gold/20 bg-dark text-beige hover:border-gold/40",
  };

  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <motion.a
        href={href}
        className={classes}
        whileHover={disabled ? undefined : { scale: 1.02 }}
        whileTap={disabled ? undefined : { scale: 0.98 }}
        aria-disabled={disabled}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
      whileHover={disabled ? undefined : { scale: 1.02 }}
      whileTap={disabled ? undefined : { scale: 0.98 }}
    >
      {children}
    </motion.button>
  );
}
