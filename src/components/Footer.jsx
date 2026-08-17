import { Link } from "react-router-dom";
import {
  Instagram,
  Facebook,
  Twitter,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

function Footer() {
  const handleSupport = () => {
    window.location.href =
      "mailto:hello@nestora.com?subject=Nestora Support";
  };

  return (
    <footer className="bg-[#102c1e] text-white">
      <div className="container-width grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">

        {/* Brand */}
        <div>
          <Link to="/" className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-xl font-bold text-[#173f2a]">
              N
            </div>

            <span className="text-xl font-bold">
              Nestora
            </span>
          </Link>

          <p className="mt-5 max-w-sm text-sm leading-7 text-green-100/70">
            Find comfortable, beautiful and affordable homes
            in the locations you love.
          </p>

          <div className="mt-6 flex gap-3">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="rounded-full bg-white/10 p-2.5 transition hover:bg-white/20"
            >
              <Instagram size={18} />
            </a>

            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="rounded-full bg-white/10 p-2.5 transition hover:bg-white/20"
            >
              <Facebook size={18} />
            </a>

            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="rounded-full bg-white/10 p-2.5 transition hover:bg-white/20"
            >
              <Twitter size={18} />
            </a>
          </div>
        </div>

        {/* Explore */}
        <div>
          <h3 className="mb-5 font-semibold">
            Explore
          </h3>

          <div className="flex flex-col gap-3 text-sm text-green-100/70">
            <Link
              to="/"
              className="w-fit transition hover:text-white"
            >
              Home
            </Link>

            <Link
              to="/properties"
              className="w-fit transition hover:text-white"
            >
              Properties
            </Link>

            <Link
              to="/about"
              className="w-fit transition hover:text-white"
            >
              About Us
            </Link>

            <Link
              to="/contact"
              className="w-fit transition hover:text-white"
            >
              Contact
            </Link>
          </div>
        </div>

        {/* Services */}
        <div>
          <h3 className="mb-5 font-semibold">
            Services
          </h3>

          <div className="flex flex-col gap-3 text-sm text-green-100/70">
            <Link
              to="/properties"
              className="w-fit transition hover:text-white"
            >
              Find a Home
            </Link>

            <Link
              to="/properties"
              className="w-fit transition hover:text-white"
            >
              Browse Rentals
            </Link>

            <Link
              to="/contact"
              className="w-fit transition hover:text-white"
            >
              List Your Property
            </Link>

            <button
              type="button"
              onClick={handleSupport}
              className="w-fit text-left transition hover:text-white"
            >
              Support
            </button>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h3 className="mb-5 font-semibold">
            Contact
          </h3>

          <div className="space-y-4 text-sm text-green-100/70">

            <div className="flex gap-3">
              <MapPin size={18} className="mt-0.5 shrink-0" />
              <span>Bengaluru, India</span>
            </div>

            <a
              href="mailto:hello@nestora.com"
              className="flex gap-3 transition hover:text-white"
            >
              <Mail size={18} className="mt-0.5 shrink-0" />
              <span>hello@nestora.com</span>
            </a>

            <a
              href="tel:+919876543210"
              className="flex gap-3 transition hover:text-white"
            >
              <Phone size={18} className="mt-0.5 shrink-0" />
              <span>+91 98765 43210</span>
            </a>

          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white/10">
        <div className="container-width flex flex-col justify-between gap-3 py-5 text-xs text-green-100/50 sm:flex-row">

          <p>
            © 2026 Nestora. All rights reserved.
          </p>

          <div className="flex gap-5">
            <Link
              to="/contact"
              className="transition hover:text-white"
            >
              Privacy Policy
            </Link>

            <Link
              to="/contact"
              className="transition hover:text-white"
            >
              Terms of Service
            </Link>
          </div>

        </div>
      </div>
    </footer>
  );
}

export default Footer;