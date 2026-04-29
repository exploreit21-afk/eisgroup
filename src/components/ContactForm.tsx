"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

type SendStatus = "idle" | "sending" | "success" | "error";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [sendStatus, setSendStatus] = useState<SendStatus>("idle");
  const [sendError, setSendError] = useState<string>("");

  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!serviceId || !templateId || !publicKey) {
      setSendStatus("error");
      setSendError(
        "EmailJS is not configured. Please set NEXT_PUBLIC_EMAILJS_SERVICE_ID, NEXT_PUBLIC_EMAILJS_TEMPLATE_ID and NEXT_PUBLIC_EMAILJS_PUBLIC_KEY."
      );
      return;
    }

    setSendStatus("sending");
    setSendError("");

    try {
      // Template variables must match the keys configured in your EmailJS template.
      // Common keys: from_name, from_email, from_phone, message
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          from_phone: formData.phone,
          message: formData.message,
        },
        publicKey
      );

      setSendStatus("success");
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (err) {
      setSendStatus("error");
      setSendError(
        err instanceof Error ? err.message : "Failed to send email. Please try again."
      );
    }
  };

  const inputClasses =
    "w-full px-4 py-3.5 text-sm rounded-xl bg-white border border-sand-200 text-slate-800 placeholder:text-sand-400 focus:outline-none focus:ring-2 focus:ring-primary-400/40 focus:border-primary-400 transition-all";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {sendStatus === "success" && (
        <div className="mb-6 p-4 rounded-xl bg-green-50 border border-green-200 text-green-700 text-sm font-medium flex items-center gap-2">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Thank you! We&apos;ll get back to you within 24 hours.
        </div>
      )}

      {sendStatus === "error" && (
        <div className="mb-6 p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm font-medium flex items-start gap-2">
          <svg className="w-5 h-5 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path d="M12 9v4m0 4h.01M10.29 3.86l-8.4 14.56A2 2 0 003.62 21h16.76a2 2 0 001.73-2.58L13.71 3.86a2 2 0 00-3.42 0z" />
          </svg>
          <div>
            <div className="font-semibold">Email not sent</div>
            <div className="mt-1 text-red-800/90">{sendError || "Please try again."}</div>
          </div>
        </div>
      )}

      <form className="space-y-5" role="form" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="name" className="block text-xs font-semibold text-slate-800 mb-1.5 uppercase tracking-wide">
              Full Name
            </label>
            <input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              required
              className={inputClasses}
              autoComplete="name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-xs font-semibold text-slate-800 mb-1.5 uppercase tracking-wide">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              required
              className={inputClasses}
              autoComplete="email"
            />
          </div>
        </div>

        <div>
          <label htmlFor="phone" className="block text-xs font-semibold text-slate-800 mb-1.5 uppercase tracking-wide">
            Phone Number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+91 98765 43210"
            className={inputClasses}
            autoComplete="tel"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-xs font-semibold text-slate-800 mb-1.5 uppercase tracking-wide">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            placeholder="How can we help you?"
            required
            className={`${inputClasses} resize-none`}
          />
        </div>

        <button
          type="submit"
          disabled={sendStatus === "sending"}
          className="w-full sm:w-auto px-8 py-3.5 text-sm font-semibold text-white bg-primary-600 rounded-xl hover:bg-primary-700 active:scale-[0.98] transition-all shadow-sm cursor-pointer"
        >
          {sendStatus === "sending" ? "Sending..." : "Send Message"}
        </button>
      </form>
    </motion.div>
  );
}
