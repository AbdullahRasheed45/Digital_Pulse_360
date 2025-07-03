import Link from "next/link";
import {
  Mail,
  MapPin,
  Phone,
  ArrowUpRight,
  Linkedin,
  Instagram,
  Twitter,
  Facebook,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-[#1C1C1C] text-white relative overflow-hidden">
      {/* Geometric Shape Decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

      <div className="container mx-auto px-4 py-16 relative">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold tracking-tight">
              DIGITAL PULSE 360 LLC
            </h2>
            <p className="text-gray-400 max-w-sm">
              Transforming digital landscapes with innovative solutions and
              creative excellence. Your success is our pulse.
            </p>
            <div className="flex items-center space-x-4">
              <Link
                href="https://linkedin.com"
                target="_blank"
                className="text-gray-400 hover:text-blue-500 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link
                href="https://instagram.com"
                target="_blank"
                className="text-gray-400 hover:text-blue-500 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </Link>
              <Link
                href="https://twitter.com"
                target="_blank"
                className="text-gray-400 hover:text-blue-500 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </Link>
              <Link
                href="https://facebook.com"
                target="_blank"
                className="text-gray-400 hover:text-blue-500 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </Link>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center text-blue-500 hover:text-blue-400 transition-colors group"
            >
              Let's Talk
              <ArrowUpRight className="ml-1 w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/about"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/portfolio"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/services/web-development"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Web Development
                </Link>
              </li>
              <li>
                <Link
                  href="/services/digital-marketing"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Digital Marketing
                </Link>
              </li>
              <li>
                <Link
                  href="/services/ui-ux"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  UI/UX Design
                </Link>
              </li>
              <li>
                <Link
                  href="/services/branding"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Branding
                </Link>
              </li>
              <li>
                <Link
                  href="/services/seo"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  SEO Optimization
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Get in Touch</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors group">
                <Mail className="w-5 h-5 text-blue-500 group-hover:text-blue-400" />
                <a href="mailto:hello@digitalpulse360.com">
                  contact@digitalpulse360.com
                </a>
              </li>
              {/* <li className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors group">
                <Phone className="w-5 h-5 text-blue-500 group-hover:text-blue-400" />
                <a href="tel:+1234567890">+1 (234) 567-890</a>
              </li> */}
              <li className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors group">
                <MapPin className="w-5 h-5 text-blue-500 group-hover:text-blue-400" />
                <span>2306 Oak Manor Arlington, TX 76012</span>
              </li>
            </ul>
            <div className="pt-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md transition-colors"
              >
                Schedule a Call
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Digital Pulse 360 LLC. IRS & GAAP
            Compliant. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <Link
              href="/privacy"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              href="/cookies"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
