import Link from "next/link";
import SmartImage from "./SmartImage";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

const services = [
  "E-Mitra Services",
  "RSLDC Programs",
  "Vehicle Fitness Testing",
  "PMKVY Courses",
];

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-sand-300 relative overflow-hidden">
      {/* Decorative top border */}
      <div className="h-1 bg-linear-to-r from-primary-500 via-primary-600 to-primary-700" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-14 lg:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 overflow-hidden rounded-lg">
                <SmartImage
                  src="/company-logo.png"
                  alt="EXPLORE IT SERVICES PVT LTD logo"
                  width={48}
                  height={48}
                  className="h-full w-full object-cover"
                  placeholderClassName="bg-slate-300/60"
                />
              </div>
              <span className="font-heading text-[13px] sm:text-sm leading-5 text-white tracking-wide uppercase">
                <span className="block">EXPLORE IT </span>
                <span className="block text-primary-400">
                  {" "}
                  SERVICES PVT LTD.
                </span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-sand-400 max-w-xs">
              Your trusted partner for government services and skill development
              across India. Making essential services accessible to every
              citizen.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-white text-base mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-sand-400 hover:text-primary-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading text-white text-base mb-4">
              Our Services
            </h4>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s}>
                  <span className="text-sm text-sand-400">{s}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading text-white text-base mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-sand-400">
              <li className="flex items-start gap-2.5">
                <svg
                  className="w-4 h-4 mt-0.5 text-primary-400 shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>
                  42, Jalwayu Vihar, Sector 7, Vidhyadhar Nagar
                  <br />
                  Jaipur, Rajasthan, India - 302039
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <svg
                  className="w-4 h-4 text-primary-400 shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>+91 9982871111</span>
              </li>
              <li className="flex items-center gap-2.5">
                <svg
                  className="w-4 h-4 text-primary-400 shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>exploreit21@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-sand-500">
          <p>
            &copy; {new Date().getFullYear()} EXPLORE IT SERVICES PVT LTD. All
            rights reserved.
          </p>
          <p>Empowering India, one service at a time.</p>
        </div>
      </div>
    </footer>
  );
}
