import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Linkedin, Twitter, MapPin, Mail, Phone, ArrowRight } from "lucide-react";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/programs", label: "Our Programs" },
  { href: "/contact", label: "Contact" },
];

const programLinks = [
  { href: "/programs#business-directory", label: "Veteran Business Directory" },
  { href: "/programs#electric-car", label: "Kids Electric Car Program" },
  { href: "/programs#after-school", label: "After-School Programs" },
  { href: "/programs#licensing", label: "Licensing Opportunities" },
];

const legalLinks = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Service" },
  { href: "/accessibility", label: "Accessibility" },
];

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0A1628]">
      {/* Newsletter Section */}
      <div className="border-b border-white/10">
        <div className="container mx-auto px-4 md:px-6 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Stay Connected With VetsThrive
            </h3>
            <p className="text-gray-400 mb-8 max-w-xl mx-auto">
              Get updates on our programs, success stories, and ways to support
              veteran families in your community.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-full bg-white/5 border border-white/20 text-white placeholder:text-gray-500 focus:outline-none focus:border-[#C9A227] transition-colors"
              />
              <button
                type="submit"
                className="btn-primary whitespace-nowrap"
              >
                Subscribe
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-6">
            <Image
              src="/logo.png"
              alt="Veterans Thrive Foundation"
              width={60}
              height={60}
              className="h-16 w-auto logo-animated"
            />
            <p className="text-gray-400 leading-relaxed">
              Empowering veteran families to thrive through economic
              opportunity, youth enrichment, and community connection.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-[#C9A227] hover:text-[#0A1628] hover:border-[#C9A227] transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[#C9A227] mb-6">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[#C9A227] mb-6">
              Our Programs
            </h3>
            <ul className="space-y-3">
              {programLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[#C9A227] mb-6">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#C9A227] flex-shrink-0 mt-0.5" />
                <span className="text-gray-400">
                  Las Vegas, Nevada
                  <br />
                  <span className="text-gray-500 text-sm">
                    Serving Southern Nevada
                  </span>
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#C9A227] flex-shrink-0" />
                <a
                  href="mailto:info@vetsthrive.org"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  info@vetsthrive.org
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#C9A227] flex-shrink-0" />
                <span className="text-gray-400">Contact via form</span>
              </li>
            </ul>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 mt-6 px-6 py-3 bg-[#C9A227] text-[#0A1628] font-semibold rounded-full hover:bg-[#DDB84A] transition-colors"
            >
              Get In Touch
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-500">
              &copy; {currentYear} Veterans Thrive Foundation. All rights
              reserved.
            </p>
            <div className="flex items-center gap-6">
              <span className="text-sm text-gray-500">
                501(c)(3) Nonprofit Organization
              </span>
              <span className="hidden md:block text-gray-700">|</span>
              <span className="text-sm text-gray-500">EIN: XX-XXXXXXX</span>
            </div>
            <div className="flex items-center gap-4">
              {legalLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-gray-500 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
