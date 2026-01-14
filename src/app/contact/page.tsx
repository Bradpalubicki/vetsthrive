import { Metadata } from "next";
import { Card, CardContent } from "@/components/ui/card";
import { ContactForm } from "@/components/contact/contact-form";
import { Mail, MapPin, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Veterans Thrive Foundation. Support our veterans, list your business, volunteer, or partner with us.",
};

const contactInfo = [
  {
    icon: MapPin,
    title: "Location",
    content: "Las Vegas, Nevada",
    subtext: "Serving Southern Nevada and beyond",
  },
  {
    icon: Mail,
    title: "Email",
    content: "info@vetsthrive.org",
    subtext: "We respond within 24-48 hours",
  },
  {
    icon: Clock,
    title: "Hours",
    content: "Monday - Friday",
    subtext: "9:00 AM - 5:00 PM PST",
  },
];

const inquiryTypes = [
  {
    title: "Support Our Veterans",
    description: "Make a donation to help veteran families thrive",
    color: "bg-[#B22234]",
  },
  {
    title: "List Your Business",
    description: "Add your veteran-owned business to our directory",
    color: "bg-[#1E3A5F]",
  },
  {
    title: "Volunteer",
    description: "Give your time to support our programs",
    color: "bg-[#2D5A8B]",
  },
  {
    title: "Partner With Us",
    description: "Explore corporate or community partnerships",
    color: "bg-[#FFD700] text-[#1E3A5F]",
  },
];

export default function ContactPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#1E3A5F] to-[#152A45] text-white py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Get In Touch
            </h1>
            <p className="text-lg md:text-xl text-gray-200">
              Whether you want to support our mission, list your veteran-owned
              business, or get involved, we&apos;d love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Inquiry Types */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {inquiryTypes.map((type) => (
              <div
                key={type.title}
                className={`${type.color} rounded-lg p-6 text-white`}
              >
                <h3 className="font-semibold mb-2">{type.title}</h3>
                <p className="text-sm opacity-90">{type.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 md:py-24 bg-[#f4f6f8]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold text-[#1E3A5F] mb-6">
                Contact Information
              </h2>

              <div className="space-y-6">
                {contactInfo.map((info) => (
                  <div key={info.title} className="flex gap-4">
                    <div className="w-12 h-12 rounded-lg bg-[#1E3A5F] flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-6 h-6 text-[#FFD700]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#1E3A5F]">
                        {info.title}
                      </h3>
                      <p className="text-gray-800">{info.content}</p>
                      <p className="text-sm text-gray-500">{info.subtext}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Links Placeholder */}
              <div className="mt-8 pt-8 border-t">
                <h3 className="font-semibold text-[#1E3A5F] mb-4">Follow Us</h3>
                <p className="text-sm text-gray-600">
                  Connect with us on social media for updates, stories, and more.
                </p>
                <div className="flex gap-3 mt-4">
                  <div className="w-10 h-10 rounded-full bg-[#1E3A5F] flex items-center justify-center text-white text-sm">
                    FB
                  </div>
                  <div className="w-10 h-10 rounded-full bg-[#1E3A5F] flex items-center justify-center text-white text-sm">
                    IG
                  </div>
                  <div className="w-10 h-10 rounded-full bg-[#1E3A5F] flex items-center justify-center text-white text-sm">
                    LI
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardContent className="p-6 md:p-8">
                  <h2 className="text-2xl font-bold text-[#1E3A5F] mb-2">
                    Send Us a Message
                  </h2>
                  <p className="text-gray-600 mb-6">
                    Fill out the form below and we&apos;ll get back to you as
                    soon as possible.
                  </p>
                  <ContactForm />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="h-64 md:h-96 bg-gray-200 relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <MapPin className="w-12 h-12 text-[#1E3A5F] mx-auto mb-4" />
            <p className="text-gray-600">Las Vegas, Nevada</p>
            <p className="text-sm text-gray-500">
              Map integration can be added here
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
