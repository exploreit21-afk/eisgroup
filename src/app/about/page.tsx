"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SectionHeading from "@/components/SectionHeading";

const values = [
  {
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Trust & Integrity",
    desc: "Every interaction is built on honesty and full transparency with our clients.",
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
        <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: "Community First",
    desc: "We measure our success by the impact we create in the lives of everyday citizens.",
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
        <path d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Efficiency",
    desc: "Streamlined processes that save your time and eliminate unnecessary complexity.",
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

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative mt-16 lg:mt-20 py-14 sm:py-16 lg:py-20 grain-overlay overflow-hidden">
        <Image
          src="/hero-about-us.png"
          alt="Seva services team standing together outside office"
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
              About Us
            </span>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-[3.5rem] leading-[1.1] text-white mb-5">
              Bridging Government &{" "}
              <span className="text-primary-300">Citizens</span>
            </h1>
            <p className="text-lg leading-relaxed text-white bg-slate-900/35 border border-white/15 rounded-xl px-5 py-4 backdrop-blur-[2px]">
              Explore IT Services Pvt Ltd is a India-based organisation
              dedicated to making government schemes, certificates, and skill
              development programs accessible and hassle-free for every citizen.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block text-xs font-semibold tracking-widest uppercase text-primary-600 mb-3">
                Our Story
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl text-slate-900 mb-5 leading-tight">
                A Decade of Service to Rajasthan
              </h2>
              <div className="space-y-4 text-sm sm:text-base leading-relaxed text-slate-800/70">
                <p>
                  Founded over ten years ago, Explore IT Services Pvt Ltd began
                  with a simple vision — to bring the benefits of government
                  programmes closer to rural and urban communities in Rajasthan.
                  What started as a small E-Mitra centre has grown into a
                  comprehensive service hub spanning digital governance, skill
                  training, and vehicle fitness testing.
                </p>
                <p>
                  Over the years, we have served more than 50,000 citizens,
                  helped hundreds gain industry-recognised certifications, and
                  built partnerships with state bodies such as RSLDC and the
                  National Skill Development Corporation.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="relative rounded-2xl overflow-hidden border border-sand-200 shadow-sm aspect-4/3"
            >
              <Image
                src="/our-story.png"
                alt="Traditional citizen connecting digitally through Seva services"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="p-8 sm:p-10 rounded-2xl bg-white border border-sand-200"
            >
              <div className="w-11 h-11 rounded-xl bg-primary-50 text-primary-600 flex items-center justify-center mb-5">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="font-heading text-2xl text-slate-900 mb-3">
                Our Vision
              </h3>
              <p className="text-sm sm:text-base leading-relaxed text-slate-800/65">
                To become Rajasthan&apos;s most trusted bridge between
                government services and citizens — ensuring that no community is
                left behind in accessing the benefits and opportunities provided
                by the state and central government.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="p-8 sm:p-10 rounded-2xl bg-slate-900 text-white"
            >
              <div className="w-11 h-11 rounded-xl bg-primary-600/20 text-primary-400 flex items-center justify-center mb-5">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-heading text-2xl text-white mb-3">
                Our Mission
              </h3>
              <p className="text-sm sm:text-base leading-relaxed text-sand-400">
                To simplify access to government services, empower youth through
                certified skill development, and create a transparent,
                corruption-free service ecosystem that puts the citizen&apos;s
                needs at the centre of everything we do.
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative mt-8 overflow-hidden rounded-2xl border border-sand-200 shadow-sm"
          >
            <Image
              src="/our-mission.png"
              alt="Skill training session that reflects our mission to empower youth"
              width={1400}
              height={900}
              className="h-auto w-full object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 92vw, 1200px"
            />
          </motion.div>
        </div>
      </section>

      {/* Values / What We Do */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            label="What Drives Us"
            title="Our Core Values"
            description="Everything we do is guided by a commitment to the communities we serve."
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative mb-8 overflow-hidden rounded-2xl border border-sand-200 shadow-sm"
          >
            <Image
              src="/core-value.png"
              alt="Community support moment reflecting trust and care"
              width={1400}
              height={900}
              className="h-auto w-full object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 92vw, 1200px"
            />
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                variants={fadeUp}
                className="text-center p-8 rounded-2xl border border-sand-200 hover:border-primary-200 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary-50 text-primary-600 flex items-center justify-center mx-auto mb-5">
                  {v.icon}
                </div>
                <h3 className="font-heading text-lg text-slate-900 mb-2">
                  {v.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-800/60">
                  {v.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
