"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export default function SectionHeading({
  label,
  title,
  description,
  align = "center",
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5 }}
      className={`mb-12 lg:mb-16 ${align === "center" ? "text-center mx-auto max-w-2xl" : ""}`}
    >
      {label && (
        <span className="inline-block text-xs font-semibold tracking-widest uppercase text-primary-600 mb-3">
          {label}
        </span>
      )}
      <h2 className="font-heading text-3xl sm:text-4xl lg:text-[2.75rem] leading-tight text-slate-900">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base sm:text-lg leading-relaxed text-slate-800/65 max-w-xl mx-auto">
          {description}
        </p>
      )}
    </motion.div>
  );
}
