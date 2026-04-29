"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import SmartImage from "@/components/SmartImage";

const servicesOverview = [
  {
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    title: "E-Mitra Services",
    desc: "Access 400+ government services from a single window — certificates, bills, applications, and more.",
  },
  {
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    title: "RSLDC Programs",
    desc: "Industry-relevant skill training aligned with Rajasthan's livelihood and development priorities.",
  },
  {
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
        <path d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10m10 0H3m10 0h2m4 0h1a1 1 0 001-1v-4.586a1 1 0 00-.293-.707l-3.414-3.414A1 1 0 0016.586 6H14" />
      </svg>
    ),
    title: "Vehicle Fitness",
    desc: "Automated testing stations ensuring your commercial vehicles meet all safety and compliance standards.",
  },
  {
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <path d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    title: "PMKVY Courses",
    desc: "Free, government-certified skill training to boost employability and entrepreneurship.",
  },
];

const reasons = [
  {
    num: "01",
    title: "Government Authorised",
    desc: "Officially registered and authorised service provider under state and central government programs.",
  },
  {
    num: "02",
    title: "10+ Years Experience",
    desc: "A decade of trusted service delivery to thousands of citizens across the country.",
  },
  {
    num: "03",
    title: "Single-Window Access",
    desc: "All your government and skill development needs handled under one roof.",
  },
  {
    num: "04",
    title: "Affordable & Transparent",
    desc: "Fair pricing with no hidden charges. Complete transparency at every step.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1 },
  }),
};

export default function HomePage() {
  return (
    <>
      {/* ——— HERO ——— */}
      <section className="relative mt-16 lg:mt-20 min-h-[calc(100vh-4rem)] lg:min-h-[calc(100vh-5rem)] flex items-center overflow-hidden">
        <SmartImage
          src="/hero-section-image.png"
          alt="Citizens receiving government assistance at Seva services center"
          fill
          priority
          className="object-cover object-center"
          placeholderClassName="bg-slate-300/35 animate-pulse"
        />
        <div className="absolute inset-0" />
        <div className="absolute inset-0 bg-linear-to-r from-slate-950/75 via-slate-900/45 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-20 lg:py-24 w-full">
          <div className="max-w-3xl">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-primary-100 bg-white/10 border border-white/20 px-4 py-1.5 rounded-full mb-6 backdrop-blur-[2px]"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-primary-500 animate-pulse" />
              Trusted across Rajasthan
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-heading text-4xl sm:text-5xl lg:text-6xl xl:text-[4rem] leading-[1.1] text-white mb-6"
            >
              Government Services &{" "}
              <span className="text-primary-300">Skill Development</span> Made
              Simple
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-xl leading-relaxed text-white max-w-xl mb-10 bg-slate-900/35 border border-white/15 rounded-xl px-5 py-4 backdrop-blur-[2px]"
            >
              From E-Mitra services to PMKVY skill training — we bring essential
              government services to your doorstep across India.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <Link
                href="/services"
                className="px-7 py-3.5 text-sm font-semibold text-white bg-primary-600 rounded-xl hover:bg-primary-700 transition-all shadow-md hover:shadow-lg active:scale-[0.98]"
              >
                Explore Services
              </Link>
              <Link
                href="/contact"
                className="px-7 py-3.5 text-sm font-semibold text-white bg-white/10 border border-white/25 rounded-xl hover:bg-white/20 transition-all backdrop-blur-[2px]"
              >
                Contact Us
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-16 flex flex-wrap gap-x-10 gap-y-4"
            >
              {[
                ["50K+", "Citizens Served"],
                ["400+", "Services Available"],
                ["10+", "Years of Trust"],
              ].map(([num, label]) => (
                <div key={label}>
                  <div className="font-heading text-2xl text-white">{num}</div>
                  <div className="text-xs text-white/75 font-medium mt-0.5">
                    {label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ——— SERVICES OVERVIEW ——— */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            label="What We Offer"
            title="Services That Empower Communities"
            description="We bring government schemes and skill programs closer to the people through our comprehensive service network."
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative lg:col-span-5 overflow-hidden rounded-3xl border border-sand-200 min-h-[300px] sm:min-h-[380px] lg:min-h-full"
            >
              <SmartImage
                src="/services-section-image.png"
                alt="Collage showing E-Mitra services, RSLDC training, vehicle fitness, and PMKVY courses"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
                placeholderClassName="bg-slate-200/70 animate-pulse"
              />
              <div className="absolute inset-0 bg-linear-to-t from-slate-900/45 via-slate-900/10 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 rounded-xl bg-white/90 backdrop-blur-sm px-4 py-3">
                <p className="text-xs font-semibold tracking-widest uppercase text-primary-700">
                  Trusted Services
                </p>
                <p className="text-sm text-slate-700 mt-1">
                  One platform for government access, skill training, and
                  compliance support.
                </p>
              </div>
            </motion.div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {servicesOverview.map((s, i) => (
                <motion.div
                  key={s.title}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-40px" }}
                  variants={fadeUp}
                  className="group p-6 rounded-2xl border border-sand-200 bg-sand-50 hover:bg-white hover:border-primary-200 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-11 h-11 rounded-xl bg-primary-50 text-primary-600 flex items-center justify-center mb-4 group-hover:bg-primary-100 transition-colors">
                    {s.icon}
                  </div>
                  <h3 className="font-heading text-lg text-slate-900 mb-2">
                    {s.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-800/60">
                    {s.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="text-center mt-10">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary-600 hover:text-primary-700 transition-colors"
            >
              View All Services
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ——— WHY CHOOSE US ——— */}
      <section className="section-padding relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            label="Why Choose Us"
            title="A Decade of Trusted Service"
            description="We've built our reputation on reliability, transparency, and an unwavering commitment to the people of India."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
            {reasons.map((r, i) => (
              <motion.div
                key={r.num}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                variants={fadeUp}
                className="flex gap-5 p-6 rounded-2xl bg-white border border-sand-200 hover:border-primary-200 transition-all duration-300"
              >
                <span className="font-heading text-3xl text-primary-200 leading-none shrink-0">
                  {r.num}
                </span>
                <div>
                  <h3 className="font-heading text-lg text-slate-900 mb-1.5">
                    {r.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-800/60">
                    {r.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ——— CTA ——— */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-20 lg:py-28">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative rounded-3xl bg-slate-900 px-8 py-14 sm:px-14 sm:py-16 lg:px-20 lg:py-20 text-center overflow-hidden"
          >
            {/* Decorative */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary-600/10 rounded-full blur-3xl" />

            <div className="relative z-10">
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-white leading-tight mb-5">
                Ready to Get Started?
              </h2>
              <p className="text-base sm:text-lg text-sand-400 max-w-lg mx-auto mb-10">
                Whether you need government services or want to upskill — we are
                here to help. Reach out today and let us guide you.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="px-8 py-3.5 text-sm font-semibold text-slate-900 bg-white rounded-xl hover:bg-sand-50 transition-all shadow-md active:scale-[0.98]"
                >
                  Contact Us Today
                </Link>
                <Link
                  href="/services"
                  className="px-8 py-3.5 text-sm font-semibold text-white border border-white/20 rounded-xl hover:bg-white/10 transition-all"
                >
                  Browse Services
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
