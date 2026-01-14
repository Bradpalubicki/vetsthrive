import Link from "next/link";
import Image from "next/image";
import { NewsletterSignup } from "./newsletter-signup";
import { Facebook, Instagram, Linkedin, Twitter, MapPin, Mail, Phone } from "lucide-react";

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

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative">
      {/* Newsletter Section */}
      <div className="bg-gradient-to-r from-[#B22234] to-[#8B1A29] py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Stay Connected With Us
            </h3>
            <p className="text-lg text-gray-200 mb-8">
              Get updates on our programs, success stories, and ways to support
              veteran families.
            </p>
            <div className="max-w-md mx-auto">
              <NewsletterSignup />
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="bg-[#1E3A5F] text-white">
        <div className="container mx-auto px-4 py-16 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand */}
            <div className="space-y-6">
              <Image
                src="/logo.svg"
                alt="Veterans Thrive Foundation"
                width={180}
                height={45}
                className="h-12 w-auto brightness-0 invert"
              />
              <p className="text-gray-300 leading-relaxed">
                Empowering veteran families to thrive through economic
                opportunity, youth enrichment, and community connection.
              </p>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#FFD700] hover:text-[#1E3A5F] transition-all duration-300"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-bold mb-6 text-[#FFD700]">
                Quick Links
              </h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-[#FFD700] transition-colors flex items-center gap-2 group"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#FFD700] opacity-0 group-hover:opacity-100 transition-opacity" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Programs */}
            <div>
              <h3 className="text-lg font-bold mb-6 text-[#FFD700]">
                Our Programs
              </h3>
              <ul className="space-y-3">
                {programLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-[#FFD700] transition-colors flex items-center gap-2 group"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#FFD700] opacity-0 group-hover:opacity-100 transition-opacity" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-bold mb-6 text-[#FFD700]">
                Contact Us
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#FFD700] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">
                    Las Vegas, Nevada
                    <br />
                    <span className="text-sm text-gray-400">
                      Serving Southern Nevada
                    </span>
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-[#FFD700] flex-shrink-0" />
                  <a
                    href="mailto:info@vetsthrive.org"
                    className="text-gray-300 hover:text-[#FFD700] transition-colors"
                  >
                    info@vetsthrive.org
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-[#FFD700] flex-shrink-0" />
                  <span className="text-gray-300">Contact via form</span>
                </li>
              </ul>
              <Link
                href="/contact"
                className="inline-block mt-6 px-6 py-3 bg-[#FFD700] text-[#1E3A5F] font-semibold rounded-lg hover:bg-[#E5C100] transition-colors"
              >
                Get In Touch
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10">
          <div className="container mx-auto px-4 py-6 md:px-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-sm text-gray-400">
                &copy; {new Date().getFullYear()} Veterans Thrive Foundation. All rights
                reserved.
              </p>
              <div className="flex items-center gap-6">
                <span className="text-sm text-gray-400">
                  501(c)(3) Nonprofit Organization
                </span>
                <span className="hidden md:block text-gray-600">|</span>
                <span className="text-sm text-gray-400">EIN: XX-XXXXXXX</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
