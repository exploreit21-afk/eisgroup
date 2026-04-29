"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import ContactForm from "@/components/ContactForm";

const contactInfo = [
  {
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    label: "Visit Us",
    value:
      "42, Jalwayu Vihar, Sector 7, Vidhyadhar Nagar, Jaipur, Rajasthan, India - 302039",
  },
  {
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    label: "Call Us",
    value: "+91 9982871111",
  },
  {
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    label: "Email Us",
    value: "Exploreit21@gmail.com",
  },
  {
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    label: "Working Hours",
    value: "Mon – Sat: 9:00 AM – 6:00 PM",
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative mt-16 lg:mt-20 py-14 sm:py-16 lg:py-20 grain-overlay overflow-hidden">
        <Image
          src="/hero-contact-us.png"
          alt="Customer support executive ready to assist"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-linear-to-r from-slate-950/75 via-slate-900/55 to-slate-900/25" />
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-20 right-0 w-[400px] h-[400px] rounded-full bg-primary-400/20 blur-3xl" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-primary-200 mb-3">
              Contact Us
            </span>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-[3.5rem] leading-[1.1] text-white mb-5">
              Let&apos;s <span className="text-primary-300">Connect</span>
            </h1>
            <p className="text-lg leading-relaxed text-white bg-slate-900/35 border border-white/15 rounded-xl px-5 py-4 backdrop-blur-[2px]">
              Have a question about our services? Need help with a government
              application? Reach out and we&apos;ll get back to you quickly.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Form + Info */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Form */}
            <div className="lg:col-span-3">
              <h2 className="font-heading text-2xl text-slate-900 mb-6">
                Send Us a Message
              </h2>
              <ContactForm />
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2">
              <h2 className="font-heading text-2xl text-slate-900 mb-6">
                Get in Touch
              </h2>
              <div className="space-y-6">
                {contactInfo.map((item) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-10 h-10 rounded-xl bg-primary-50 text-primary-600 flex items-center justify-center shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <div className="text-xs font-semibold uppercase tracking-wide text-slate-800/50 mb-0.5">
                        {item.label}
                      </div>
                      <div className="text-sm text-slate-800">{item.value}</div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="mt-8 rounded-2xl overflow-hidden border border-sand-200 shadow-sm"
              >
                <Image
                  src="/cotact-info.png"
                  alt="Support representative helping customer online"
                  width={1200}
                  height={675}
                  className="h-auto w-full object-cover"
                  sizes="(max-width: 1024px) 100vw, 32vw"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
