"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";

const services = [
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
    title: "E-Mitra Rajasthan",
    description:
      "E-Mitra is the Rajasthan government's integrated platform offering 400+ citizen services from a single counter. We provide fast, reliable, and fully digital processing for all E-Mitra services.",
    benefits: [
      "Birth, death, caste, and income certificates",
      "Utility bill payments and challan services",
      "Aadhaar enrolment & update assistance",
      "Ration card, voter ID, and PAN applications",
      "Land record and revenue document services",
    ],
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
    description:
      "The Rajasthan Skill & Livelihood Development Corporation runs industry-relevant training programs that create pathways to employment. We are an authorised training partner delivering RSLDC courses.",
    benefits: [
      "Industry-aligned curriculum with hands-on training",
      "Placement assistance upon course completion",
      "Government-recognised certification",
      "Training in IT, healthcare, retail, and more",
      "Financial support for eligible candidates",
    ],
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
    title: "Commercial Vehicle Fitness",
    description:
      "Our Automatic Testing Station (ATS) provides computerised, tamper-proof vehicle fitness testing for commercial vehicles. Fully compliant with Ministry of Road Transport guidelines.",
    benefits: [
      "Fully automated, unbiased testing process",
      "Quick turnaround — results within hours",
      "Brake, emission, noise, and headlight testing",
      "Digital fitness certificate issuance",
      "Compliant with central and state RTO norms",
    ],
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
    description:
      "Pradhan Mantri Kaushal Vikas Yojana is India's flagship skill development initiative. We deliver free, certified courses under PMKVY to help youth build market-relevant skills and find employment.",
    benefits: [
      "100% free training — no cost to the candidate",
      "NSDC and sector skill council certification",
      "Short-term courses (2–6 months)",
      "Recognition of prior learning (RPL)",
      "Post-training placement support and mentoring",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative mt-16 lg:mt-20 py-14 sm:py-16 lg:py-20 grain-overlay overflow-hidden">
        <Image
          src="/hero-serivce-.png"
          alt="Seva services team standing together outside office"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-linear-to-r from-slate-950/75 via-slate-900/55 to-slate-900/25" />
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-primary-400/20 blur-3xl" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-primary-200 mb-3">
              Our Services
            </span>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-[3.5rem] leading-[1.1] text-white mb-5">
              Comprehensive <span className="text-primary-300">Government</span>{" "}
              & Skill Solutions
            </h1>
            <p className="text-lg leading-relaxed text-white bg-slate-900/35 border border-white/15 rounded-xl px-5 py-4 backdrop-blur-[2px]">
              From digital governance services to hands-on skill training —
              explore the full range of solutions we offer to empower citizens.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            label="Explore"
            title="What We Provide"
            description="Each service is designed to simplify processes, save time, and deliver tangible value to citizens and businesses."
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative mb-10 overflow-hidden rounded-3xl border border-sand-200 shadow-sm"
          >
            <Image
              src="/servive-2.png"
              alt="Service advisor helping citizen with digital government services"
              width={1200}
              height={675}
              className="h-auto w-full object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 92vw, 1200px"
            />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {services.map((service, i) => (
              <ServiceCard
                key={service.title}
                icon={service.icon}
                title={service.title}
                description={service.description}
                benefits={service.benefits}
                index={i}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center bg-primary-50 rounded-3xl px-8 py-14 sm:px-14 sm:py-16 border border-primary-100"
          >
            <h2 className="font-heading text-3xl sm:text-4xl text-slate-900 mb-4">
              Need Help Choosing a Service?
            </h2>
            <p className="text-base text-slate-800/60 max-w-md mx-auto mb-8">
              Our team can guide you to the right programme based on your
              requirements. Get in touch for a free consultation.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 text-sm font-semibold text-white bg-primary-600 rounded-xl hover:bg-primary-700 transition-all shadow-sm active:scale-[0.98]"
            >
              Talk to Us
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
          </motion.div>
        </div>
      </section>
    </>
  );
}
