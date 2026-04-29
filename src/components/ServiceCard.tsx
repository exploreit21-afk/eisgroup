"use client";

import { motion } from "framer-motion";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  benefits: string[];
  index?: number;
}

export default function ServiceCard({
  icon,
  title,
  description,
  benefits,
  index = 0,
}: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative bg-white rounded-2xl p-7 sm:p-8 border border-sand-200 hover:border-primary-200 transition-all duration-300 hover:shadow-[0_8px_30px_-12px_rgba(238,122,18,0.15)]"
    >
      {/* Icon */}
      <div className="w-12 h-12 rounded-xl bg-primary-50 text-primary-600 flex items-center justify-center mb-5 group-hover:bg-primary-100 transition-colors">
        {icon}
      </div>

      <h3 className="font-heading text-xl text-slate-900 mb-3">{title}</h3>
      <p className="text-sm leading-relaxed text-slate-800/70 mb-5">
        {description}
      </p>

      {/* Benefits */}
      <ul className="space-y-2">
        {benefits.map((benefit) => (
          <li key={benefit} className="flex items-start gap-2.5 text-sm text-slate-800/80">
            <svg
              className="w-4 h-4 text-primary-500 mt-0.5 shrink-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
            <span>{benefit}</span>
          </li>
        ))}
      </ul>

      {/* Hover accent line */}
      <div className="absolute bottom-0 left-6 right-6 h-0.5 bg-primary-500 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
    </motion.div>
  );
}
