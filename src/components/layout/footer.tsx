import Link from "next/link";
import { NewsletterSignup } from "./newsletter-signup";

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

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1E3A5F] text-white">
      {/* Newsletter Section */}
      <div className="border-b border-gray-600">
        <div className="container mx-auto px-4 py-8 md:px-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-semibold mb-1">Stay Connected</h3>
              <p className="text-sm text-gray-300">
                Get updates on our programs and ways to support veteran
                families.
              </p>
            </div>
            <div className="w-full md:w-auto md:min-w-[320px]">
              <NewsletterSignup />
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex flex-col">
              <span className="text-xl font-bold text-white">
                Veterans Thrive
              </span>
              <span className="text-sm text-[#FFD700] -mt-1">Foundation</span>
            </div>
            <p className="text-sm text-gray-300">
              Empowering veteran families to thrive through economic
              opportunity, youth enrichment, and community connection.
            </p>
            <p className="text-sm text-gray-300">Las Vegas, Nevada</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#FFD700]">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-300 hover:text-[#FFD700] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#FFD700]">
              Our Programs
            </h3>
            <ul className="space-y-2">
              {programLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-300 hover:text-[#FFD700] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#FFD700]">
              Get Involved
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-gray-300 hover:text-[#FFD700] transition-colors"
                >
                  Support Our Veterans
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-gray-300 hover:text-[#FFD700] transition-colors"
                >
                  List Your Business
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-gray-300 hover:text-[#FFD700] transition-colors"
                >
                  Volunteer With Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-gray-300 hover:text-[#FFD700] transition-colors"
                >
                  Partner With Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">
            &copy; {currentYear} Veterans Thrive Foundation. All rights
            reserved.
          </p>
          <p className="text-sm text-gray-400 mt-2 md:mt-0">
            501(c)(3) Nonprofit Organization
          </p>
        </div>
      </div>
    </footer>
  );
}
