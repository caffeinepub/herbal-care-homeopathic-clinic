import { Link } from "@tanstack/react-router";
import { Clock, Heart, Mail, MapPin, Phone } from "lucide-react";
import { SiFacebook, SiInstagram } from "react-icons/si";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const hostname = encodeURIComponent(window.location.hostname);

  return (
    <footer className="bg-brand-green text-white">
      {/* Main footer content */}
      <div className="container py-14">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand column */}
          <div className="space-y-5 lg:col-span-1">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-full overflow-hidden ring-2 ring-brand-gold/80">
                <img
                  src="/assets/generated/herbal-logo-transparent.dim_200x200.png"
                  alt="Herbal Care Logo"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-lg font-display font-bold text-white tracking-tight">
                  Herbal Care Group
                </span>
                <span className="text-xs text-brand-gold tracking-widest uppercase">
                  Homeopathic Clinic
                </span>
              </div>
            </div>
            <p className="text-sm text-white/70 leading-relaxed">
              Healing through nature's wisdom. We provide gentle, effective
              homeopathic treatments for the whole family.
            </p>
            <div className="flex gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 hover:bg-brand-gold hover:text-brand-green transition-all"
                aria-label="Facebook"
              >
                <SiFacebook className="h-4 w-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 hover:bg-brand-gold hover:text-brand-green transition-all"
                aria-label="Instagram"
              >
                <SiInstagram className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-5 text-sm font-bold uppercase tracking-widest text-brand-gold">
              Quick Links
            </h3>
            <ul className="space-y-3 text-sm">
              {[
                { name: "Home", path: "/" },
                { name: "About Us", path: "/about" },
                { name: "Our Services", path: "/services" },
                { name: "Contact", path: "/contact" },
              ].map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-white/70 hover:text-brand-gold transition-colors flex items-center gap-2 group"
                  >
                    <span className="h-1 w-1 rounded-full bg-brand-gold/60 group-hover:bg-brand-gold transition-colors" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-5 text-sm font-bold uppercase tracking-widest text-brand-gold">
              Our Treatments
            </h3>
            <ul className="space-y-3 text-sm text-white/70">
              {[
                "Homeopathy Consultation",
                "Herbal Medicine",
                "Chronic Disease Care",
                "Skin & Hair Treatment",
                "Child Health",
                "Women's Health",
              ].map((service) => (
                <li key={service} className="flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-brand-gold/60" />
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-5 text-sm font-bold uppercase tracking-widest text-brand-gold">
              Contact Us
            </h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-brand-gold mt-0.5 flex-shrink-0" />
                <span className="text-white/70">
                  Herbal Care Clinic, Main Street, City, State - 000000
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-brand-gold flex-shrink-0" />
                <span className="text-white/70">+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-brand-gold flex-shrink-0" />
                <span className="text-white/70">info@herbalcare.com</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="h-4 w-4 text-brand-gold mt-0.5 flex-shrink-0" />
                <span className="text-white/70">
                  Mon–Sat: 9:00 AM – 7:00 PM
                  <br />
                  Sunday: 10:00 AM – 2:00 PM
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/50">
          <p>© {currentYear} Herbal Care Group. All rights reserved.</p>
          <p>
            Built with{" "}
            <Heart className="inline h-3 w-3 text-brand-gold fill-brand-gold" />{" "}
            using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${hostname}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-gold hover:underline"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
