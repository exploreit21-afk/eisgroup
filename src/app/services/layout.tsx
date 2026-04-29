import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Services — E-Mitra, RSLDC, PMKVY & Vehicle Fitness | Explore IT Services Pvt Ltd",
  description:
    "Explore our comprehensive government services — E-Mitra, RSLDC skill training, PMKVY courses, and commercial vehicle fitness testing across India.",
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
