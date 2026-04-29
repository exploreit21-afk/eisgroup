import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us — Explore IT Services Pvt Ltd",
  description:
    "Learn about Explore IT Services Pvt Ltd — India's trusted provider of government services and skill development programs for over a decade.",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
