import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us — Explore IT Services Pvt Ltd",
  description:
    "Get in touch with Explore IT Services Pvt Ltd for E-Mitra, RSLDC, PMKVY, and vehicle fitness services in India. We're here to help.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
